// Service worker for Together.
// Goal: the site still opens when the network is slow or gone. The files are kept in a cache
// and are used when the network doesn't answer in time. Online, you always get the newest files.
// The version comes from the URL (sw.js?v=<APP_VERSION>), so every release gets a fresh cache
// and the old one is deleted.
//
// Not cached on purpose: videos (they come from other sites) and Supabase (chat, sync, progress).

const VERSION = new URL(self.location.href).searchParams.get("v") || "dev";
const CACHE = "together-" + VERSION;
const NETWORK_TIMEOUT_MS = 3000;

const PRECACHE = [
  "./",
  "index.html",
  "room.html",
  "style.css",
  "common.js",
  "videos.js",
  "supabase-config.js",
  "manifest.webmanifest",
  "assets/favicon.svg",
  "assets/favicon.ico",
  "assets/apple-touch-icon.png",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/icon-maskable-512.png",
  "assets/chatgpt.svg",
  "assets/css.svg",
  "assets/html.svg",
  "assets/git.png",
  "assets/python.webp",
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // one by one, so a single missing file can't make the whole install fail
      Promise.all(PRECACHE.map((url) => cache.add(new Request(new URL(url, self.location.href).href, { cache: "reload" })).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("together-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isOurs(url) {
  return url.origin === self.location.origin ||
    (url.origin === "https://cdn.jsdelivr.net" && url.pathname.startsWith("/npm/@supabase/"));
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || req.headers.has("range")) return;
  const url = new URL(req.url);
  if (!isOurs(url)) return; // videos, Supabase, everything else: untouched

  if (url.origin === self.location.origin && url.pathname.includes("/assets/") && req.mode !== "navigate") {
    event.respondWith(staleWhileRevalidate(event, req));
  } else {
    event.respondWith(networkFirst(event, req));
  }
});

function lookup(req) {
  // a page like room.html?video=abc should find the cached room.html when offline
  return caches.match(req, { ignoreSearch: req.mode === "navigate" });
}

function store(req, res) {
  if (res && (res.ok || res.type === "opaque")) {
    const copy = res.clone();
    caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
  }
}

// newest files when the network answers; the cached copy when it is slow (3s) or down
function networkFirst(event, req) {
  return new Promise((resolve) => {
    let done = false;
    const finish = (res) => {
      if (!done) {
        done = true;
        resolve(res);
      }
    };

    const timer = setTimeout(() => {
      lookup(req).then((cached) => {
        if (cached) finish(cached);
      });
    }, NETWORK_TIMEOUT_MS);

    const network = fetch(req, { cache: "no-cache" })
      .then((res) => {
        clearTimeout(timer);
        store(req, res);
        finish(res);
      })
      .catch(() => {
        clearTimeout(timer);
        return lookup(req).then((cached) => finish(cached || Response.error()));
      });

    event.waitUntil(network); // keep refreshing the cache even after a slow answer
  });
}

// images and logos: show the cached one right away, refresh it in the background
function staleWhileRevalidate(event, req) {
  return caches.match(req).then((cached) => {
    const network = fetch(req).then((res) => {
      store(req, res);
      return res;
    });
    if (cached) {
      event.waitUntil(network.catch(() => {}));
      return cached;
    }
    return network.catch(() => Response.error());
  });
}
