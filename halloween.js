/*
 * Halloween theme: decorations layer.
 * This file (with halloween.css and assets/halloween/) only exists on the "Halloween" branch,
 * the temporary seasonal version of the site. The colours themselves are in style.css.
 */
(function () {
  var isRoom = document.body.classList.contains("room-page");

  function img(name) {
    return '<img src="assets/halloween/' + name + '.svg" alt="">';
  }

  function add(parent, className, html) {
    var node = document.createElement("div");
    node.className = className;
    if (html) node.innerHTML = html;
    parent.appendChild(node);
    return node;
  }

  // ---- behind the page: cobwebs, mist (and on the home page: moon, spider, a drifting ghost) ----
  var back = document.createElement("div");
  back.className = "hw-fx";
  back.setAttribute("aria-hidden", "true");

  add(back, "hw-mist hw-mist-a");
  add(back, "hw-mist hw-mist-b");
  add(back, "hw-web hw-web-left", img("web"));
  add(back, "hw-web hw-web-right", img("web"));

  if (!isRoom) {
    add(back, "hw-moon", img("moon"));
    add(back, "hw-spider", '<span class="hw-thread"></span>' + img("spider"));
    add(back, "hw-drift-ghost", img("ghost"));
  }
  document.body.prepend(back);

  // ---- in front of the page, home only (never over the video): bats crossing the top of the screen ----
  if (!isRoom) {
    var sky = document.createElement("div");
    sky.className = "hw-sky";
    sky.setAttribute("aria-hidden", "true");
    [
      { top: 6, scale: 0.9, dur: 24, delay: 3 },
      { top: 15, scale: 0.62, dur: 31, delay: 12 },
      { top: 9, scale: 0.75, dur: 27, delay: 21 }
    ].forEach(function (b) {
      var bat = add(sky, "hw-bat", '<div class="hw-bat-inner">' + img("bat") + "</div>");
      bat.style.top = b.top + "vh";
      bat.style.setProperty("--s", b.scale);
      bat.style.setProperty("--dur", b.dur + "s");
      bat.style.setProperty("--delay", b.delay + "s");
    });
    document.body.appendChild(sky);
  }

  // ---- version label: same code version, plus a "+halloween" build tag (SemVer build metadata) ----
  window.addEventListener("load", function () {
    var badge = document.getElementById("versionBadge");
    if (badge && badge.textContent && badge.textContent.indexOf("+halloween") === -1) {
      badge.textContent += "+halloween";
    }
  });
})();
