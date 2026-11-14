// Helpers shared between the landing page and the room page

const APP_VERSION = "3.11.0";

let _sbClient = null;

// set to true when the progress service couldn't be reached (so pages can tell the user)
let progressLoadFailed = false;

// How long to wait for the database before giving up. Some connections silently drop
// requests to it instead of refusing them, and without a limit the page would wait forever.
const SUPABASE_TIMEOUT_MS = 4000;

// returns null (instead of crashing the page) when the Supabase library itself couldn't be loaded
function initSupabase() {
  if (!_sbClient) {
    if (typeof supabase === "undefined") return null;
    _sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _sbClient;
}

function withTimeout(promiseLike, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timed out after " + ms + "ms")), ms);
    Promise.resolve(promiseLike).then(
      (value) => { clearTimeout(timer); resolve(value); },
      (error) => { clearTimeout(timer); reject(error); }
    );
  });
}

function getMyName() {
  return localStorage.getItem("watchtogether_name") || "";
}

function setMyName(name) {
  localStorage.setItem("watchtogether_name", name);
}

function getMyClientId() {
  let id = localStorage.getItem("watchtogether_client_id");
  if (!id) {
    id = "c-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("watchtogether_client_id", id);
  }
  return id;
}

// --- episode labels (shared by the home page and the watch page) ---

// "40 - Training (Part 3)" -> "40". Titles without a leading number are numbered
// by their position inside their course (so a course of 12 unnumbered episodes
// shows 1..12 even when the episodes are split into several sections).
function episodeNumber(video) {
  const m = video.title.match(/^(\d+)/);
  if (m) return m[1];
  const sameCourse = VIDEO_LIST.filter((v) => v.course === video.course);
  const pos = sameCourse.findIndex((v) => v.id === video.id);
  return pos >= 0 ? String(pos + 1) : "•";
}

// "40 - Training (Part 3)" -> "Training (Part 3)"
function episodeName(video) {
  return video.title.replace(/^\d+\s*[-–—:]\s*/, "");
}

// --- per-video watch progress, shared between everyone via Supabase ---

async function fetchProgressMap(videoIds) {
  const map = {};
  videoIds.forEach((id) => { map[id] = 0; });
  try {
    const sb = initSupabase();
    if (!sb) throw new Error("the Supabase library did not load");
    const { data, error } = await withTimeout(
      sb.from("progress").select("video_id, fraction").in("video_id", videoIds),
      SUPABASE_TIMEOUT_MS
    );
    if (error) throw error;
    (data || []).forEach((row) => { map[row.video_id] = row.fraction; });
    progressLoadFailed = false;
  } catch (e) {
    progressLoadFailed = true;
    console.error("Couldn't load shared progress:", e);
  }
  return map;
}

async function saveSharedProgress(videoId, fraction) {
  const sb = initSupabase();
  const clamped = Math.max(0, Math.min(1, fraction));
  try {
    const { error } = await sb.from("progress").upsert({
      video_id: videoId,
      fraction: clamped,
      updated_at: new Date().toISOString()
    });
    if (error) throw error;
  } catch (e) {
    console.error("Couldn't save shared progress:", e);
  }
}

// --- chat, shared per episode ---

async function fetchChatHistory(videoId, limit) {
  const sb = initSupabase();
  try {
    const { data, error } = await withTimeout(
      sb
        .from("messages")
        .select("sender_id, name, body, created_at")
        .eq("video_id", videoId)
        .order("created_at", { ascending: true })
        .limit(limit || 50),
      SUPABASE_TIMEOUT_MS
    );
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.error("Couldn't load chat history:", e);
    return [];
  }
}

async function sendChatMessage(videoId, senderId, name, body) {
  const sb = initSupabase();
  try {
    const { error } = await sb.from("messages").insert({
      video_id: videoId,
      sender_id: senderId,
      name: name,
      body: body
    });
    if (error) throw error;
  } catch (e) {
    console.error("Couldn't send chat message:", e);
  }
}

// --- who is online: everyone on the site (any page) shares one "lobby" channel ---
// Nothing is stored in the database; it only exists while people have the site open.
// videoId = the episode you are watching, or null when you are just browsing.
// onChange(others) is called with the other people there: [{ id, name, videoId }].
// Returns null when the Supabase library isn't available (then nothing is shown).
function joinLobby(videoId, onChange) {
  const sb = initSupabase();
  if (!sb) return null;
  const myId = getMyClientId();
  let channel;
  let subscribed = false;
  try {
    channel = sb.channel("lobby", { config: { presence: { key: myId } } });
    if (onChange) {
      channel.on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();
        const others = Object.keys(state)
          .filter((id) => id !== myId && state[id].length > 0)
          .map((id) => {
            const meta = state[id][state[id].length - 1];
            return { id: id, name: meta.name || "", videoId: meta.videoId || null };
          })
          .filter((p) => p.name);
        onChange(others);
      });
    }
    channel.subscribe((status) => {
      if (status === "SUBSCRIBED") {
        subscribed = true;
        announce();
      }
    });
  } catch (e) {
    console.error("Couldn't join the lobby:", e);
    return null;
  }

  // tell the others who you are (needs a name; call again after the name changes)
  function announce() {
    const name = getMyName();
    if (!subscribed || !name) return;
    Promise.resolve(channel.track({ name: name, videoId: videoId || null })).catch(() => {});
  }
  return { announce: announce };
}

// Makes the site installable and lets it open when the network is slow or gone (see sw.js).
// The version in the URL gives every release its own cache. Never blocks the page.
function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  const secure = location.protocol === "https:" || location.hostname === "localhost";
  if (!secure) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js?v=" + APP_VERSION).catch((e) => {
      console.warn("Service worker not registered:", e);
    });
  });
}

function applyVersionBadge() {
  const el = document.getElementById("versionBadge");
  if (el) el.textContent = "v" + APP_VERSION;
}

registerServiceWorker();
