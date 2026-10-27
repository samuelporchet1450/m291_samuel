/* =========================================================
   RED LINE : logique de l'interface (V3 « Mood map »)
   - Accueil : carte des humeurs, sélection triée par proximité, grilles
   - Détail : playlist ou artiste (#/playlist/id, #/artist/id)
   - Lecteur : lecture simulée (pas encore de fichiers audio)
   ========================================================= */

(() => {
  const $ = (sel) => document.querySelector(sel);

  const artistById = Object.fromEntries(ARTISTS.map((a) => [a.id, a]));
  const playlistById = Object.fromEntries(PLAYLISTS.map((p) => [p.id, p]));

  const toSec = (d) => { const [m, s] = d.split(":").map(Number); return m * 60 + s; };
  const toTime = (sec) => `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, "0")}`;
  const pad = (n) => String(n).padStart(2, "0");
  const pct = (v) => `${Math.round(v * 100)}%`;
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clamp = (v, a = 0.03, b = 0.97) => Math.min(b, Math.max(a, v));
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const avg = (arr) => arr.reduce((s, v) => s + v, 0) / arr.length;

  /* Pseudo-aléatoire stable (mêmes positions à chaque visite) */
  const seeded = (str) => {
    let h = 2166136261;
    for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
    return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0) % 1000) / 1000;
  };

  /* Chaque morceau reçoit une position proche de celle de sa playlist */
  const ALL_TRACKS = PLAYLISTS.flatMap((p) => p.tracks.map((t) => {
    const r = seeded(p.id + t.title);
    return {
      ...t, playlist: p.id, mood: p.mood, tags: p.tags, secs: toSec(t.duration),
      pos: { x: clamp(p.pos.x + (r() - 0.5) * 0.14), y: clamp(p.pos.y + (r() - 0.5) * 0.14) }
    };
  }));
  const trackKey = (t) => `${t.playlist}/${t.title}`;

  /* ================= TITRES AJUSTÉS ================= */
  function fitTitle(h1) {
    if (!h1 || !h1.offsetParent) return;
    h1.style.fontSize = "";
    const max = parseFloat(getComputedStyle(h1).fontSize);
    const widest = Math.max(...[...h1.children].map((s) => s.scrollWidth));
    const avail = h1.clientWidth;
    if (widest > avail) h1.style.fontSize = `${Math.floor(max * avail / widest)}px`;
  }

  /* ================= HORLOGE ================= */
  const clockFmt = new Intl.DateTimeFormat("fr-CH", { hour: "2-digit", minute: "2-digit", weekday: "short", day: "2-digit", month: "2-digit" });
  const tickClock = () => { $("#clock").textContent = clockFmt.format(new Date()); };
  tickClock();
  setInterval(tickClock, 30000);

  /* ================= CARTE DES HUMEURS ================= */
  const map = $("#map");
  const meEl = $("#map-me");
  let me = { x: 0.4, y: 0.36 };
  try {
    const saved = JSON.parse(localStorage.getItem("redline-me"));
    if (saved && typeof saved.x === "number") me = { x: clamp(saved.x), y: clamp(saved.y) };
  } catch (e) { /* stockage indisponible : position par défaut */ }

  const place = (el, pos) => { el.style.left = `${pos.x * 100}%`; el.style.bottom = `${pos.y * 100}%`; };

  function pointsHtml(highlight = () => false) {
    return PLAYLISTS.map((p) => `
      <a class="map__pt${p.pos.x > 0.7 ? " flip" : ""}${highlight(p) ? " is-near" : ""}" href="#/playlist/${p.id}"
         style="left:${p.pos.x * 100}%;bottom:${p.pos.y * 100}%" data-id="${p.id}">
        <span>${esc(p.mood)}</span>
      </a>`).join("");
  }

  $("#map-points").innerHTML =
    ALL_TRACKS.map((t) => `<i class="map__track" style="left:${t.pos.x * 100}%;bottom:${t.pos.y * 100}%"></i>`).join("") +
    pointsHtml();

  const nearestPlaylist = () => PLAYLISTS.reduce((a, b) => (dist(b.pos, me) < dist(a.pos, me) ? b : a));

  let frame = 0;
  function onMove() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      place(meEl, me);
      const near = nearestPlaylist();
      $("#ro-energy").textContent = pct(me.y);
      $("#ro-light").textContent = pct(me.x);
      $("#ro-mood").textContent = near.mood;
      $("#ro-cta").href = `#/playlist/${near.id}`;
      $("#ro-cta").textContent = `Ouvrir ${near.title.slice(0, 2).join(" ").toLowerCase()} →`;
      meEl.setAttribute("aria-valuenow", Math.round(me.x * 100));
      meEl.setAttribute("aria-valuetext", `Énergie ${pct(me.y)}, luminosité ${pct(me.x)}, humeur proche : ${near.mood}`);
      document.querySelectorAll("#map-points .map__pt").forEach((a) =>
        a.classList.toggle("is-near", a.dataset.id === near.id));
      suggPage = 0;
      renderSuggestions();
      try { localStorage.setItem("redline-me", JSON.stringify(me)); } catch (e) { /* ignoré */ }
    });
  }

  function moveFromPointer(e) {
    const r = map.getBoundingClientRect();
    me = { x: clamp((e.clientX - r.left) / r.width), y: clamp(1 - (e.clientY - r.top) / r.height) };
    onMove();
  }

  map.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".map__pt")) return;
    e.preventDefault();
    map.setPointerCapture(e.pointerId);
    moveFromPointer(e);
    map.addEventListener("pointermove", moveFromPointer);
    map.addEventListener("pointerup", () => map.removeEventListener("pointermove", moveFromPointer), { once: true });
    meEl.focus({ preventScroll: true });
  });

  meEl.addEventListener("keydown", (e) => {
    const step = e.shiftKey ? 0.1 : 0.02;
    const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] }[e.key];
    if (!d) return;
    e.preventDefault();
    me = { x: clamp(me.x + d[0]), y: clamp(me.y + d[1]) };
    onMove();
  });

  /* ================= SÉLECTION ================= */
  const PER_PAGE = 6;
  const MAX_GAP = Math.SQRT2;
  let suggPage = 0;
  let query = "";

  const matchTrack = (t) => !query ||
    [t.title, t.mood, artistById[t.artist].name, ...t.tags].some((s) => norm(s).includes(query));
  const ranked = () => ALL_TRACKS.filter(matchTrack)
    .map((t) => ({ ...t, gap: dist(t.pos, me) }))
    .sort((a, b) => a.gap - b.gap);

  let suggTracks = [];

  function renderSuggestions() {
    suggTracks = ranked();
    const pages = Math.max(1, Math.ceil(suggTracks.length / PER_PAGE));
    suggPage = Math.min(suggPage, pages - 1);
    const start = suggPage * PER_PAGE;

    $("#sugg-list").innerHTML = suggTracks.slice(start, start + PER_PAGE).map((t, i) => {
      const close = 1 - Math.min(1, t.gap / (MAX_GAP / 2));
      return `
      <tr data-key="${esc(trackKey(t))}" tabindex="0">
        <td class="c-num">${pad(start + i + 1)}</td>
        <td><span class="t-title">${esc(t.title)}</span><span class="artist">${esc(artistById[t.artist].name)}</span></td>
        <td class="c-mood">${esc(t.mood)}</td>
        <td class="c-n c-gap"><span class="gap-bar" aria-hidden="true"><i style="width:${Math.round(close * 100)}%"></i></span>${Math.round(close * 100)}%</td>
        <td class="c-n">${t.bpm}</td>
        <td class="c-n">${t.duration}</td>
      </tr>`;
    }).join("");

    // Le rayon pointillé englobe la page de sélection visible
    const edge = suggTracks[Math.min(start + PER_PAGE, suggTracks.length) - 1];
    meEl.style.setProperty("--r", edge ? `${edge.gap * 2 * map.clientWidth}px` : "0px");

    $("#sugg-empty").hidden = suggTracks.length > 0;
    $("#sugg-count").textContent = suggTracks.length ? `${suggTracks.length} morceaux, triés par proximité` : "";
    $("#sugg-pager").innerHTML = suggTracks.length > PER_PAGE
      ? Array.from({ length: pages }, (_, i) =>
          `<button aria-label="Page ${i + 1}" data-p="${i}" ${i === suggPage ? 'aria-current="true"' : ""}>${i + 1}</button>`).join("")
      : "";
    markPlaying();
  }

  $("#sugg-pager").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    suggPage = Number(b.dataset.p);
    renderSuggestions();
  });

  /* Clic ou Entrée sur une ligne de tableau = lecture */
  function bindRows(tbody, getList) {
    const play = (tr) => {
      const list = getList();
      player.load(list, list.findIndex((t) => trackKey(t) === tr.dataset.key));
    };
    tbody.addEventListener("click", (e) => { const tr = e.target.closest("tr"); if (tr) play(tr); });
    tbody.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.matches("tr")) { e.preventDefault(); play(e.target); }
    });
  }
  bindRows($("#sugg-list"), () => suggTracks);

  /* ================= GRILLES ================= */
  function renderGrids(list = PLAYLISTS) {
    $("#playlist-grid").innerHTML = list.map((p) => `
      <li><a class="card" href="#/playlist/${p.id}">
        <span class="card__top">
          <span>${pad(PLAYLISTS.indexOf(p) + 1)}</span>
          <span class="card__plot" aria-hidden="true"><i style="left:${p.pos.x * 100}%;bottom:${p.pos.y * 100}%"></i></span>
        </span>
        <span>
          <span class="card__title">${p.title.slice(0, 2).map(esc).join("<br>")}</span>
          <span class="card__meta">${esc(p.mood)}, ${Math.round(avg(p.tracks.map((t) => t.bpm)))} BPM</span>
        </span>
      </a></li>`).join("") || `<li class="empty">Aucune playlist.</li>`;

    $("#artist-grid").innerHTML = ARTISTS.map((a, i) => `
      <li><a class="card card--artist" href="#/artist/${a.id}">
        <span class="card__top"><span>${pad(i + 1)}</span><span>${esc(a.genre)}</span></span>
        <span class="card__initials" aria-hidden="true">${a.name.split(" ").map((w) => w[0]).join("")}</span>
        <span class="card__title">${esc(a.name)}</span>
      </a></li>`).join("");
  }

  /* ================= RECHERCHE ================= */
  $("#search-input").addEventListener("input", (e) => {
    if (!$("#view-detail").hidden) location.hash = "#/";
    query = norm(e.target.value.trim());
    suggPage = 0;
    renderSuggestions();
    renderGrids(PLAYLISTS.filter((p) => !query || [p.mood, ...p.title, ...p.tags].some((s) => norm(s).includes(query))));
  });

  /* ================= VUE DÉTAIL ================= */
  const EQ_BARS = 56;
  let eqBars = [];
  let detailTracks = [];

  function buildEq(seed) {
    const r = seeded(seed);
    $("#detail-eq").innerHTML = Array.from({ length: EQ_BARS }, () => "<i></i>").join("");
    eqBars = [...$("#detail-eq").children].map((el) => {
      const base = 24 + r() * 66;
      el.style.height = `${base}%`;
      return { el, base, phase: r() * Math.PI * 2, speed: 1.5 + r() * 3 };
    });
  }

  function showDetail(kind, id) {
    let title, desc, tracks, highlight, stats;
    if (kind === "playlist" && playlistById[id]) {
      const p = playlistById[id];
      title = p.title; desc = p.desc;
      tracks = ALL_TRACKS.filter((t) => t.playlist === id);
      highlight = (q) => q.id === id;
      stats = [["Humeur", p.mood], ["Énergie", pct(p.pos.y)], ["Luminosité", pct(p.pos.x)]];
    } else if (kind === "artist" && artistById[id]) {
      const a = artistById[id];
      title = a.name.toUpperCase().split(" ");
      tracks = ALL_TRACKS.filter((t) => t.artist === id);
      const moods = new Set(tracks.map((t) => t.playlist));
      desc = `${a.genre}. ${tracks.length} morceaux répartis dans ${moods.size} humeurs : ${[...moods].map((m) => playlistById[m].mood.toLowerCase()).join(", ")}.`;
      highlight = (q) => moods.has(q.id);
      stats = [["Genre", a.genre], ["Morceaux", tracks.length], ["Humeurs", moods.size]];
    } else {
      location.hash = "#/";
      return;
    }

    detailTracks = tracks;
    stats.push(["BPM moyen", Math.round(avg(tracks.map((t) => t.bpm)))]);

    $("#detail-title").innerHTML = title.map((l) => `<span>${esc(l)}</span>`).join("");
    fitTitle($("#detail-title"));
    $("#detail-desc").textContent = desc;
    $("#detail-stats").innerHTML = stats.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(String(v))}</dd></div>`).join("");
    $("#detail-map").querySelectorAll(".map__pt").forEach((n) => n.remove());
    $("#detail-map").insertAdjacentHTML("beforeend", pointsHtml(highlight));
    $("#detail-tracks").innerHTML = tracks.map((t, i) => `
      <tr data-key="${esc(trackKey(t))}" tabindex="0">
        <td class="c-num">${pad(i + 1)}</td>
        <td><span class="t-title">${esc(t.title)}</span><span class="artist">${esc(kind === "playlist" ? artistById[t.artist].name : t.mood)}</span></td>
        <td class="c-n">${t.bpm}</td>
        <td class="c-n">${t.duration}</td>
      </tr>`).join("");
    buildEq(id);
    document.title = `${title.join(" ")} | Red Line`;
    markPlaying();
  }

  bindRows($("#detail-tracks"), () => detailTracks);

  function animateEq(now) {
    if (player.playing && !$("#view-detail").hidden) {
      const t = now / 1000;
      for (const b of eqBars) {
        const v = b.base * (0.55 + 0.45 * Math.abs(Math.sin(t * b.speed + b.phase))) + Math.random() * 8;
        b.el.style.height = `${Math.min(100, v)}%`;
      }
    }
    requestAnimationFrame(animateEq);
  }

  /* ================= ROUTEUR ================= */
  function route() {
    const [, kind, id] = location.hash.match(/^#\/(playlist|artist)\/([\w-]+)/) || [];
    const detail = Boolean(kind);
    $("#view-home").hidden = detail;
    $("#view-detail").hidden = !detail;
    if (detail) showDetail(kind, id);
    else { document.title = "Red Line | Playlists par humeur"; renderSuggestions(); }
    scrollTo({ top: 0, behavior: "instant" });
  }

  /* ================= LECTEUR ================= */
  const SEGMENTS = 48;
  const el = {
    root: $("#player"), title: $("#player-title"), meta: $("#player-meta"), play: $("#btn-play"),
    bar: $("#progress"), cur: $("#time-cur"), tot: $("#time-tot")
  };
  el.bar.innerHTML = Array.from({ length: SEGMENTS }, (_, i) =>
    `<i style="height:${35 + Math.abs(Math.sin(i * 1.7)) * 65}%"></i>`).join("");
  const segs = [...el.bar.children];

  const player = {
    queue: [], index: 0, pos: 0, playing: false, last: 0,

    get track() { return this.queue[this.index]; },

    load(queue, index) {
      if (index < 0) return;
      this.queue = queue.slice();
      this.index = index;
      this.pos = 0;
      el.root.hidden = false;
      document.body.classList.add("has-player");
      this.play();
    },
    play() { this.playing = true; this.last = performance.now(); this.render(); },
    pause() { this.playing = false; this.render(); },
    toggle() { this.playing ? this.pause() : this.play(); },
    next() { this.index = (this.index + 1) % this.queue.length; this.pos = 0; this.render(); },
    prev() {
      if (this.pos <= 3) this.index = (this.index - 1 + this.queue.length) % this.queue.length;
      this.pos = 0;
      this.render();
    },
    seek(ratio) { this.pos = Math.max(0, Math.min(1, ratio)) * this.track.secs; this.renderTime(); },

    tick(now) {
      if (this.playing && this.track) {
        this.pos += (now - this.last) / 1000;
        if (this.pos >= this.track.secs) this.next();
        this.renderTime();
      }
      this.last = now;
    },

    render() {
      const t = this.track;
      if (!t) return;
      el.title.textContent = t.title;
      el.meta.textContent = `${artistById[t.artist].name}, ${t.mood}, ${t.bpm} BPM`;
      el.tot.textContent = t.duration;
      el.root.classList.toggle("is-paused", !this.playing);
      el.play.setAttribute("aria-label", this.playing ? "Pause" : "Lecture");
      this.renderTime();
      markPlaying();
    },
    renderTime() {
      const ratio = this.pos / this.track.secs;
      const lit = Math.round(ratio * SEGMENTS);
      segs.forEach((s, i) => s.classList.toggle("on", i < lit));
      el.cur.textContent = toTime(this.pos);
      el.bar.setAttribute("aria-valuenow", Math.round(ratio * 100));
      el.bar.setAttribute("aria-valuetext", `${toTime(this.pos)} sur ${this.track.duration}`);
    }
  };

  function markPlaying() {
    const key = player.track && trackKey(player.track);
    document.querySelectorAll("[data-key]").forEach((row) =>
      row.classList.toggle("is-playing", row.dataset.key === key));
  }

  (function loop(now) { player.tick(now); requestAnimationFrame(loop); })(performance.now());

  el.play.addEventListener("click", () => player.toggle());
  $("#btn-next").addEventListener("click", () => player.next());
  $("#btn-prev").addEventListener("click", () => player.prev());

  const ratioAt = (e) => { const r = el.bar.getBoundingClientRect(); return (e.clientX - r.left) / r.width; };
  el.bar.addEventListener("pointerdown", (e) => {
    el.bar.setPointerCapture(e.pointerId);
    player.seek(ratioAt(e));
    const move = (ev) => player.seek(ratioAt(ev));
    el.bar.addEventListener("pointermove", move);
    el.bar.addEventListener("pointerup", () => el.bar.removeEventListener("pointermove", move), { once: true });
  });
  el.bar.addEventListener("keydown", (e) => {
    const step = { ArrowRight: 5, ArrowLeft: -5 }[e.key];
    if (step) { e.preventDefault(); player.seek((player.pos + step) / player.track.secs); }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && player.track && !e.target.closest("input, button, tr, [role=slider]")) {
      e.preventDefault();
      player.toggle();
    }
  });

  /* ================= INIT ================= */
  new ResizeObserver(() => { if (map.clientWidth) renderSuggestions(); }).observe(map);
  window.addEventListener("resize", () => fitTitle($("#detail-title")));
  document.fonts.ready.then(() => fitTitle($("#detail-title")));

  renderGrids();
  window.addEventListener("hashchange", route);
  route();
  onMove();
  requestAnimationFrame(animateEq);
})();
