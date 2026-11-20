(function () {
  var ICON = {
    house: "M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-5h4v5",
    pin: "M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    music: "M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM21 16a3 3 0 11-6 0 3 3 0 016 0z",
    search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4",
    game: "M6 8h12a4 4 0 014 4v1.5a3 3 0 01-5.3 1.9L15 13H9l-1.7 2.4A3 3 0 012 13.5V12a4 4 0 014-4zM7 10v4M5 12h4M15.5 11h.01M18 12.5h.01",
    mic: "M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3zM5 11a7 7 0 0014 0M12 18v3",
    tag: "M20.5 12.5l-8 8-9-9V3.5h8zM7.5 7.5h.01",
    screen: "M3 4h18v12H3zM8 20h8M12 16v4",
    compass: "M12 21a9 9 0 100-18 9 9 0 000 18zM15.5 8.5l-2 5-5 2 2-5z",
    bed: "M3 19V6M3 15h18v4M21 15v-3a3 3 0 00-3-3h-7v6M7 12.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
    building: "M4 21V3h10v18M14 9h6v12M7.5 7h3M7.5 11h3M7.5 15h3M2 21h20",
    check: "M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6zM8.5 12l2.5 2.5 4.5-5",
    doc: "M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6",
    bank: "M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18",
    figure: "M12 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 22v-7H6l1.5-6h9L18 15h-2v7M10 22v-5M14 22v-5",
    bulb: "M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z",
    table: "M3 5h18v14H3zM3 10h18M3 14.5h18M9 5v14",
    chart: "M3 20h18M6 16l4-5 3 3 5-7M15 7h3v3",
    network: "M12 9a3 3 0 100-6 3 3 0 000 6zM5 21a3 3 0 100-6 3 3 0 000 6zM19 21a3 3 0 100-6 3 3 0 000 6zM12 9v3M12 12l-5 3.5M12 12l5 3.5",
    layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5",
    copy: "M9 9h11v11H9zM5 15H4V4h11v1"
  };
  var DOT = { "Radi": "#1E8A4C", "Radi lokalno": "#2563EB", "U izradi": "#C47A0B", "Prototip": "#7A808C" };
  var TRY = { play: "Igraj odmah", open: "Isprobaj odmah", download: "Preuzmi", view: "Pogledaj na sajtu" };
  var ARROW = { open: "M7 17L17 7M8 7h9v9", play: "M7 5l12 7-12 7z", download: "M12 4v12M6 11l6 6 6-6M5 20h14",
    view: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z" };

  var data = window.PROJEKTI;
  var cats = window.KATEGORIJE;
  var grid = document.getElementById("grid");
  var filters = document.getElementById("filters");
  var overlay = document.getElementById("overlay");
  var lastFocus = null;
  var active = "Sve";

  function svg(path, size, extra) {
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (extra || 1.6) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + path + '"/></svg>';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  // "Može odmah da se proba" = glavno (prvo) dugme projekta ima pravi link koji nije samo opis (view).
  function hasLink(p) { return !!(p.links[0] && p.links[0].url); }
  function isLive(p) { return hasLink(p) && p.links[0].kind !== "view"; }
  function vars(p) {
    var c = cats[p.cat];
    return "--tint:" + c.tint + ";--ink-c:" + c.ink + ";--dot:" + DOT[p.status];
  }

  // Brojke
  document.getElementById("stat-total").textContent = data.length;
  document.getElementById("stat-live").textContent = data.filter(isLive).length;

  // Filteri
  ["Sve"].concat(Object.keys(cats)).forEach(function (c) {
    if (c !== "Sve" && !data.some(function (p) { return p.cat === c; })) return;
    var b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = c;
    b.setAttribute("aria-pressed", c === active ? "true" : "false");
    b.addEventListener("click", function () {
      active = c;
      Array.prototype.forEach.call(filters.children, function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      render();
    });
    filters.appendChild(b);
  });

  // Pločice
  function render() {
    grid.innerHTML = "";
    data.filter(function (p) { return active === "Sve" || p.cat === active; }).forEach(function (p) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "tile " + p.size + (p.thumb || p.cover ? " has-cover" : "");
      b.setAttribute("style", vars(p));
      b.setAttribute("aria-label", p.title + ", " + p.cat + ", " + p.status + ". Otvori detalje.");
      // Pločica ima svoju sliku (thumb) isečenu tačno za njen format; panel koristi cover + gallery.
      var tileImg = p.thumb || p.cover;
      var top = tileImg
        ? '<span class="shot"><img src="' + esc(tileImg) + '" alt="" loading="lazy"><span class="status">' + esc(p.status) + "</span></span>"
        : '<span class="row"><span class="ico">' + svg(ICON[p.icon], p.size === "small" ? 22 : 26) + "</span>" +
          '<span class="status">' + esc(p.status) + "</span></span>";
      // Projekti sa pravim linkom dobijaju jasnu oznaku na dnu pločice.
      var live = hasLink(p) ? p.links[0] : null;
      var tryIt = live
        ? '<span class="try' + (live.kind === "view" ? " view" : "") + '">' + svg(ARROW[live.kind] || ARROW.open, 16, 2.2) + (TRY[live.kind] || TRY.open) + "</span>"
        : "";
      b.innerHTML = top +
        '<span class="txt"><span class="cat">' + esc(p.cat) + '</span><span class="title">' + esc(p.title) + "</span>" +
        '<span class="short">' + esc(p.short) + "</span></span>" + tryIt;
      if (live && live.kind !== "view") b.classList.add("live");
      b.addEventListener("click", function () { location.hash = p.slug; });
      grid.appendChild(b);
    });
  }

  function images(p) { return [p.cover].concat(p.gallery || []).filter(Boolean); }

  // Galerija u panelu: glavna slika sa strelicama i prevlačenjem, sličice ispod.
  var gal = { n: 0, cur: 0 };
  function galleryGo(i) {
    if (gal.n < 2) return;
    gal.cur = (i + gal.n) % gal.n;
    document.querySelector("#p-media .track").style.transform = "translateX(" + (-100 * gal.cur) + "%)";
    document.getElementById("p-count").textContent = (gal.cur + 1) + " / " + gal.n;
    Array.prototype.forEach.call(document.querySelectorAll("#p-gallery button"), function (t, k) {
      t.setAttribute("aria-current", k === gal.cur ? "true" : "false");
      if (k === gal.cur && t.scrollIntoView) t.scrollIntoView({ block: "nearest", inline: "nearest" });
    });
  }
  function buildGallery(p) {
    var pics = images(p), media = document.getElementById("p-media"), thumbs = document.getElementById("p-gallery");
    gal.n = pics.length;
    gal.cur = 0;
    if (!pics.length) {
      media.innerHTML = svg(ICON[p.icon], 80, 1.3);
      thumbs.innerHTML = "";
      return;
    }
    var html = '<div class="track">' + pics.map(function (src, i) {
      return '<img src="' + esc(src) + '" alt="' + esc(p.title) + ", slika " + (i + 1) + '" draggable="false">';
    }).join("") + "</div>";
    if (pics.length > 1) {
      html += '<button class="nav prev" type="button" aria-label="Prethodna slika">' + svg("M15 5l-7 7 7 7", 22, 2.2) + "</button>" +
        '<button class="nav next" type="button" aria-label="Sledeća slika">' + svg("M9 5l7 7-7 7", 22, 2.2) + "</button>" +
        '<span class="count" id="p-count">1 / ' + pics.length + "</span>";
    }
    media.innerHTML = html;
    thumbs.innerHTML = pics.length > 1 ? pics.map(function (src, i) {
      return '<button type="button" aria-label="Slika ' + (i + 1) + '" aria-current="' + (i === 0) + '"><img src="' + esc(src) + '" alt="" loading="lazy"></button>';
    }).join("") : "";
    Array.prototype.forEach.call(thumbs.querySelectorAll("button"), function (t, i) {
      t.addEventListener("click", function () { galleryGo(i); });
    });
    if (pics.length > 1) {
      media.querySelector(".prev").addEventListener("click", function () { galleryGo(gal.cur - 1); });
      media.querySelector(".next").addEventListener("click", function () { galleryGo(gal.cur + 1); });
    }
  }
  // Prevlačenje prstom (ili mišem) preko glavne slike.
  (function () {
    var media = document.getElementById("p-media"), x0 = null;
    media.addEventListener("pointerdown", function (e) { if (!e.target.closest(".nav")) x0 = e.clientX; });
    media.addEventListener("pointerup", function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) galleryGo(gal.cur + (dx < 0 ? 1 : -1));
    });
    media.addEventListener("pointercancel", function () { x0 = null; });
  })();

  // Panel
  function open(p) {
    lastFocus = document.activeElement;
    var panel = document.getElementById("panel");
    panel.setAttribute("style", vars(p));
    document.getElementById("p-cat").textContent = p.cat;
    document.getElementById("p-status").textContent = p.status;
    document.getElementById("p-title").textContent = p.title;
    // Pasus sa redovima "- ..." postaje uvodna rečenica + lista.
    document.getElementById("p-story").innerHTML = p.story.map(function (t) {
      var lines = t.split("\n"), head = [], items = [];
      lines.forEach(function (l) { if (l.indexOf("- ") === 0) items.push(l.slice(2)); else head.push(l); });
      var html = head.length ? "<p>" + esc(head.join(" ")) + "</p>" : "";
      if (items.length) html += "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
      return html;
    }).join("");
    buildGallery(p);

    var acts = p.links.map(function (l, i) {
      if (!l.url) return '<span class="btn soon">' + esc(l.label) + " · uskoro</span>";
      return '<a class="btn' + (i > 0 ? " secondary" : "") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
        esc(l.label) + svg(ARROW[l.kind] || ARROW.open, 18, 2) + "</a>";
    }).join("");
    if (!p.links.length) acts = '<span class="note">' + (p.status === "Radi lokalno"
      ? "Radi samo na mom računaru. Pitaj me uživo, rado pokažem."
      : "Nije javno dostupno. Pitaj me uživo, rado pokažem.") + "</span>";
    document.getElementById("p-actions").innerHTML = acts;

    overlay.hidden = false;
    document.body.classList.add("locked");
    requestAnimationFrame(function () { overlay.classList.add("open"); });
    document.querySelector(".panel-body").scrollTop = 0;
    document.getElementById("p-close").focus();
  }
  function close() {
    if (overlay.hidden) return;
    overlay.classList.remove("open");
    document.body.classList.remove("locked");
    setTimeout(function () { overlay.hidden = true; }, 200);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function fromHash() {
    var slug = decodeURIComponent(location.hash.slice(1));
    var p = data.filter(function (x) { return x.slug === slug; })[0];
    if (p) open(p); else close();
  }
  function clearHash() {
    history.pushState("", document.title, location.pathname + location.search);
    close();
  }

  document.getElementById("p-close").addEventListener("click", clearHash);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) clearHash(); });
  document.addEventListener("keydown", function (e) {
    if (overlay.hidden) return;
    if (e.key === "Escape") clearHash();
    if (e.key === "ArrowLeft") galleryGo(gal.cur - 1);
    if (e.key === "ArrowRight") galleryGo(gal.cur + 1);
    if (e.key === "Tab") {
      var f = overlay.querySelectorAll("a[href], button");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener("hashchange", fromHash);

  render();
  fromHash();
})();
