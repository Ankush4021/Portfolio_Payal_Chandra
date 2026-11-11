// ===== IMAGES: key -> file path =====

const IMG = {
  news: "assets/images/video-thumbnails/news-package.jpg",
  short: "assets/images/video-thumbnails/short-film.jpg",
  podcast: "assets/images/video-thumbnails/podcast-cropped.jpg",
  doc: "assets/images/video-thumbnails/documentary.jpg",
  corp: "assets/images/video-thumbnails/corporate-film-sjmc-niu.jpg",
  ailogo: "assets/images/video-thumbnails/ai-assisted-logo-animation.jpg",
  first: "assets/images/portfolio/20-first-day-college.jpg",
  farewell: "assets/images/portfolio/21-farewell-vlog.jpg",
  reel: "assets/images/portfolio/25-thumbnail-reel.png",
  sira1: "assets/images/portfolio/06-sira-digital-dark.jpg",
  sira2: "assets/images/portfolio/07-sira-digital-light.jpg",
  dinesh: "assets/images/portfolio/05-dinesh-caterers.jpg",
  anus: "assets/images/portfolio/04-anusandhan.jpg",
  prime: "assets/images/portfolio/08-sjmc-prime.jpg",
  shield: "assets/images/portfolio/11-sjmc-shield.jpg",
  bn: "assets/images/portfolio/09-breaking-news.jpg",
  lbn: "assets/images/portfolio/10-live-breaking-news-hd.jpg",
  fem: "assets/images/portfolio/13-feminism-poster.jpg",
  startup: "assets/images/portfolio/17-startups-workshop.jpg",
  dw1: "assets/images/portfolio/14-design-world-colourful.jpg",
  dw2: "assets/images/portfolio/15-design-world-dark.jpg",
  dw3: "assets/images/portfolio/16-design-world-courses.jpg",
  pam1: "assets/images/portfolio/18-pamphlet-a.jpg",
  pam2: "assets/images/portfolio/19-pamphlet-b.jpg",
  t1: "assets/images/portfolio/22-sample-thumbnail.jpg",
  t2: "assets/images/portfolio/23-template-sample.jpg",
  t3: "assets/images/portfolio/12-logo-illustrator.jpg",
  i1: "assets/images/portfolio/01-woman-in-saree.jpg",
  i2: "assets/images/portfolio/02-kohli.jpg",
  i3: "assets/images/portfolio/03-mr-bean.jpg",
  me: "assets/images/profile.jpg",
  collector: "assets/images/video-thumbnails/the-collector-teaser.jpg",
  mfs1: "assets/images/portfolio/26-miles-from-smile-a.jpg",
  mfs2: "assets/images/portfolio/27-miles-from-smile-b.jpg",
  mag: "assets/images/portfolio/28-payalnama-magazine.jpg",
  jail: "assets/images/portfolio/29-mobile-is-a-jail.jpg",
  dw4: "assets/images/portfolio/30-design-world-black-yellow.jpg",
  scenery: "assets/images/portfolio/31-scenery-illustration.jpg",
  self: "assets/images/portfolio/32-self-illustration.jpg",
  watch: "assets/images/portfolio/33-watch-illustration.jpg",
  spot: "assets/images/portfolio/34-spotify-redesign.jpg",
  ve1: "assets/images/portfolio/35-vadik-enterprises-a.jpg",
  ve2: "assets/images/portfolio/36-vadik-enterprises-b.jpg",
};

// ===== CONTACT DETAILS =====

const MAIL = "payalchndra2017@gmail.com";
const PHONE = "+91 96900 70133";
const WA = "919690070133";

const SOC = {
  Instagram: "https://www.instagram.com/payalversse",
  YouTube: "https://youtube.com/@payalverrse",
  LinkedIn: "https://www.linkedin.com/in/payal-chandra-a15ab02b7",
};

// ===== PROJECT DATA =====

const P = [
  {
    t: "News package",
    type: "Video",
    y: "Video editing · News",
    im: ["news"],
    d: "A broadcast-style news package with Hindi headline graphics, split-screen visuals, a live map and clean lower-thirds.",
    link: "https://youtu.be/aMe5YFzXvlY?si=ZDIEioLsEYIjPmQM",
  },
  {
    t: "Kaha Suni podcast",
    type: "Video",
    y: "Video editing · Podcast",
    im: ["podcast"],
    d: "Episode edit for the Kaha Suni (कहा सुनी) podcast, with branded studio graphics and a clean two-camera conversation flow.",
    link: "https://youtu.be/yp-a90fTG-0?si=DBGBaEMn6OEzON7p",
  },
  {
    t: "Short film",
    type: "Video",
    y: "Video editing · Film",
    im: ["short"],
    d: "A short film edited for story, pacing and mood.",
    link: "https://youtu.be/cy5eGn82AuY?si=HN8ApYCJ7030sjDr",
  },
  {
    t: "Documentary",
    type: "Video",
    y: "Video editing · Documentary",
    im: ["doc"],
    d: "A documentary built around a clay pottery market, cut to let the textures and colours tell the story.",
    link: "https://youtu.be/pYgFRVwLojg?si=SPY_RTLYkhiCmH47",
  },
  {
    t: "Corporate film - SJMC NIU",
    type: "Video",
    y: "Video editing · Corporate",
    im: ["corp"],
    d: "A corporate film for the School of Journalism and Mass Communication, shot in the studio with students.",
    link: "https://youtu.be/LQhPvSFArQs?si=mLnTDt7DkRcL5lGj",
  },
  {
    t: "AI-assisted logo animation",
    type: "Video",
    y: "Motion · Logo animation",
    im: ["ailogo"],
    d: "An animated reveal of the NIU emblem made with AI-assisted tools and finished in post.",
    link: "https://youtu.be/Pnn9bvnXYKw?si=H3ew5o1LTqKat_Xh",
  },
  {
    t: "First day at college",
    type: "Video",
    y: "Vlog · Editing",
    im: ["first"],
    d: "A vlog edit with a scrapbook-style title and photo-frame transitions.",
    link: "https://youtu.be/rd-XYI1TFZg?si=_JQ2QCK2R4unziMr",
  },
  {
    t: "Farewell vlog",
    type: "Video",
    y: "Vlog · Editing",
    im: ["farewell"],
    d: "A last-day-of-college vlog with hand-drawn style titles and group moments.",
    link: "",
  },
  {
    t: "Kal Fir Se — reel",
    type: "Video",
    y: "Reel · Editing",
    im: ["reel"],
    d: "A vertical reel with handwritten text and animated typography.",
    link: "https://www.instagram.com/reel/DN5mPsoCWAA/?dlrf=MXZuNThzN3c3bTJoeQ==",
    nat: 1,
  },
  {
    t: "The Collector — teaser",
    type: "Video",
    y: "Video editing · Documentary teaser",
    im: ["collector"],
    video: "assets/videos/the-collector-teaser.mp4",
    d: "A teaser for The Collector, a School of Journalism and Mass Communication documentary about a man who keeps a lifetime of vintage radios, clocks and cameras.",
    link: "",
  },
  {
    t: "Sira Digital identity",
    type: "Branding",
    y: "Logo design · 2 versions",
    im: ["sira1", "sira2"],
    d: "Logo for a digital agency in dark and light versions, joining the S and D into one mark.",
    link: "",
  },
  {
    t: "Dinesh Caterers logo",
    type: "Branding",
    y: "Logo design",
    im: ["dinesh"],
    d: "A bold wordmark with a chef-hat mark for a catering business.",
    link: "",
  },
  {
    t: "Anusandhan logo",
    type: "Branding",
    y: "Logo design",
    im: ["anus"],
    d: "A broadcast-tower mark with a clean wordmark.",
    link: "",
  },
  {
    t: "Vadik Enterprises logo",
    type: "Branding",
    y: "Logo design · 2 versions",
    im: ["ve1", "ve2"],
    d: "A VE monogram inside a shield, set on a lotus with a gear, a key, a cart and growth bars that point to what the business does.",
    link: "",
  },
  {
    t: "Spotify logo redesign",
    type: "Branding",
    y: "Concept · Logo redesign",
    im: ["spot"],
    d: "A concept redesign of the Spotify wordmark. A map pin and magnifier replace the o, with broadcast waves above, to show the idea of discovering music.",
    link: "",
  },
  {
    t: "SJMC Prime & NIU shield",
    type: "Branding",
    y: "Logo design · 2 pieces",
    im: ["prime", "shield"],
    d: "A channel logo and an emblem-style shield for the journalism school.",
    link: "",
  },
  {
    t: "Breaking news graphics",
    type: "Branding",
    y: "Broadcast graphics · 2 pieces",
    im: ["lbn", "bn"],
    d: "Breaking news and live HD lower-third graphics for news packages.",
    link: "",
  },
  {
    t: "Feminism: Reality or Myth",
    type: "Posters",
    y: "Event poster",
    im: ["fem"],
    d: "Event poster for a university discussion, with flat illustrations and a soft pink palette.",
    link: "",
  },
  {
    t: "Structured Ideation for Startups",
    type: "Posters",
    y: "Workshop poster",
    im: ["startup"],
    d: "A workshop poster with a clear hierarchy for date, venue and the expert’s profile.",
    link: "",
  },
  {
    t: "Miles From Smile — film posters",
    type: "Posters",
    y: "Film poster · 2 versions",
    im: ["mfs1", "mfs2"],
    d: "Two poster designs for the short film Miles From Smile by Team Rocket, where I also worked as one of the video editors.",
    link: "",
  },
  {
    t: "PAYALNAMA — magazine cover",
    type: "Posters",
    y: "Magazine cover · October 2025",
    im: ["mag"],
    d: "A travel magazine cover, with a bold masthead, a sunlit valley photograph and three cover lines.",
    link: "",
  },
  {
    t: "The Design World — posters",
    type: "Posters",
    y: "Campaign · 4 posters",
    im: ["dw1", "dw2", "dw3", "dw4"],
    d: "Four poster directions for a design training centre, from playful to bold.",
    link: "",
  },
  {
    t: "The Design World — pamphlets",
    type: "Posters",
    y: "Print · 2 pieces",
    im: ["pam2", "pam1"],
    d: "Print pamphlets with course lists and contact details, designed to be read at a glance.",
    link: "",
  },
  {
    t: "YouTube thumbnails",
    type: "Thumbnails",
    y: "Thumbnail design · 3 pieces",
    im: ["t1", "t2", "t3"],
    d: "Thumbnail designs and reusable templates built for strong contrast and quick reading.",
    link: "",
  },
  {
    t: "Vector illustrations",
    type: "Illustration",
    y: "Illustration · 6 pieces",
    im: ["i1", "i2", "i3", "scenery", "self", "watch"],
    d: "Flat vector character illustrations in a bold, simple style.",
    link: "",
  },
  {
    t: "Mobile is a jail",
    type: "Illustration",
    y: "Concept illustration",
    im: ["jail"],
    d: "A concept illustration about screen addiction: a child sits behind the bars of a phone screen.",
    link: "",
  },
];

// ===== SERVICES =====

const S = [
  [
    "Video editing",
    "Reels, vlogs, podcasts, news packages and films with sharp cuts, colour and sound.",
  ],
  [
    "Graphic design",
    "Posters, pamphlets, social content and thumbnails that stop the scroll.",
  ],
  ["Brand identity", "Logos and marks that make a brand easy to recognise."],
  ["Motion graphics", "Logo reveals, lower-thirds and animated typography."],
  [
    "Storytelling",
    "Concepts and narrative direction so every piece says one clear thing.",
  ],
];

// ===== INITIAL PAGE SETUP =====

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

if (location.hash) {
  history.replaceState(null, "", location.pathname + location.search);
}

scrollTo(0, 0);

addEventListener("pageshow", (e) => {
  if (e.persisted) scrollTo(0, 0);
});

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const has =
  !!(window.gsap && window.ScrollTrigger && "IntersectionObserver" in window) &&
  !matchMedia("(prefers-reduced-motion:reduce)").matches;

const fine = matchMedia("(pointer:fine)").matches;

if (has) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  document.documentElement.classList.add("js");
}

$("#me").src = IMG.me;

// ===== SCROLL WATCHER =====

const watchers = new Map();

const io = has
  ? new IntersectionObserver(
      (es) => {
        es.filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left,
          )
          .forEach((e, i) => watchers.get(e.target).on(e.target, i));

        es.filter((e) => !e.isIntersecting).forEach((e) =>
          watchers.get(e.target).off(e.target),
        );
      },
      { rootMargin: "0px 0px -8% 0px" },
    )
  : null;

function watch(el, on, off) {
  if (!io || !el) return;
  watchers.set(el, { on, off });
  io.observe(el);
}

// ===== CONTACT DETAILS =====

if (PHONE) {
  const tl = $("#tel");
  tl.hidden = false;
  tl.href = "tel:" + PHONE.replace(/[^\d+]/g, "");
  tl.textContent = PHONE;
}

$("#ml").href = "mailto:" + MAIL;
$("#ml").textContent = MAIL;

$("#soc").innerHTML = Object.entries(SOC)
  .filter(([k, v]) => v)
  .map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener">${k}</a>`)
  .join("");

// ===== TIMELINE =====

const clip = (a, k, f, t) =>
  (a.innerHTML += `<div style="--f:${f};${k ? `background-image:url(${IMG[k]})` : ""}">${t}</div>`);

[
  ["news", 3, "News"],
  ["corp", 2, "Corporate"],
  ["podcast", 3, "Podcast"],
  ["doc", 2, "Doc"],
  ["short", 3, "Short film"],
  ["farewell", 2, "Vlog"],
].forEach((c) => clip($("#v1"), c[0], c[1], c[2]));

[
  ["Sira Digital", "#6d4cff"],
  ["Breaking news", "#e5233a"],
  ["Design World", "#ffc933;color:#15121f"],
  ["Anusandhan", "#13a5b8"],
  ["SJMC Prime", "#2c9a5b"],
].forEach((c, i) => {
  $("#v2").innerHTML +=
    `<div style="--f:${[3, 2, 3, 2, 2][i]};background:${c[1]}">${c[0]}</div>`;
});

$("#a1").innerHTML = "<i></i>".repeat(innerWidth < 700 ? 48 : 110);

const prog = { p: 0.3 };
const dur = 26;
const tc = $("#tc");
const ph = $("#ph");
const W = () => $("#tlb").clientWidth - 40;

function upd() {
  ph.style.transform = `translateX(${prog.p * W()}px)`;

  const s = prog.p * dur;

  tc.textContent =
    "00:00:" +
    String(Math.floor(s)).padStart(2, "0") +
    ":" +
    String(Math.floor((s % 1) * 25)).padStart(2, "0");
}

upd();
addEventListener("resize", upd);

let tw;

if (has) {
  tw = gsap.to(prog, {
    p: 1,
    duration: dur,
    ease: "none",
    repeat: -1,
    onUpdate: upd,
  });

  gsap.to("#a1 i", {
    scaleY: "random(.25,1)",
    duration: 0.35,
    repeat: -1,
    yoyo: true,
    stagger: { each: 0.03, from: "random" },
  });

  $("#tl").addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;

    const r = $("#tlb").getBoundingClientRect();

    tw.progress(
      Math.min(1, Math.max(0, (e.clientX - r.left - 40) / W())),
    ).pause();
  });

  $("#tl").addEventListener("pointerleave", () => tw.play());
}

// ===== TOOLS MARQUEE =====

$("#mq").innerHTML =
  "<span>Photoshop</span><span>Premiere Pro</span><span>Illustrator</span><span>After Effects</span><span>Figma</span><span>Canva</span>".repeat(
    2,
  );

const mqT = has
  ? gsap.fromTo(
      "#mq",
      { xPercent: 0 },
      { xPercent: -50, duration: 30, ease: "none", repeat: -1 },
    )
  : null;

if (has) {
  ScrollTrigger.create({
    onUpdate: (s) => {
      mqT.timeScale(1 + Math.min(Math.abs(s.getVelocity()) / 250, 6));
      gsap.to(mqT, {
        timeScale: 1,
        duration: 0.8,
        overwrite: true,
      });
    },
  });
}

// ===== WORK GRID =====

const th = (p) => {
  const v = p.type === "Video" && !p.nat;

  return `<div class="th ${v ? "v" : ""}">
        <img src="${IMG[p.im[0]]}" alt="${p.t}" loading="lazy">
        ${p.type === "Video" ? '<span class="play"></span>' : ""}
        ${p.im.length > 1 ? `<span class="cnt">${p.im.length}</span>` : ""}
    </div>`;
};

const cats = ["All", ...new Set(P.map((p) => p.type))];

cats.forEach((c, i) => {
  const b = document.createElement("button");

  b.innerHTML =
    c +
    `<sup>${c === "All" ? P.length : P.filter((p) => p.type === c).length}</sup>`;

  b.setAttribute("role", "tab");

  if (!i) b.classList.add("on");

  b.onclick = () => filter(c, b);

  $("#fl").appendChild(b);
});

P.forEach((p, i) => {
  const b = document.createElement("button");

  b.className = "pc";
  b.dataset.c = p.type;
  b.dataset.i = i;

  b.innerHTML =
    th(p) + `<div class="pm"><small>${p.y}</small><h3>${p.t}</h3></div>`;

  b.onclick = () => openP(i);

  $("#grid").appendChild(b);
});

$("#sv").innerHTML = S.map(
  (s) => `<div class="sr rv"><h3>${s[0]}</h3><p>${s[1]}</p></div>`,
).join("");

function filter(c, btn) {
  $$("#fl button").forEach((b) => b.classList.remove("on"));

  btn.classList.add("on");

  const show = [];

  $$(".pc").forEach((el) => {
    const ok = c === "All" || el.dataset.c === c;

    el.classList.toggle("hide", !ok);

    if (ok) show.push(el);
  });

  if (has) {
    gsap.fromTo(
      show,
      { y: 36, autoAlpha: 0, scale: 0.96 },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out",
      },
    );

    ScrollTrigger.refresh();
  }
}

// ===== PROJECT MODAL =====

const md = $("#md");
const mb = $("#mb");

let last;
let cur = 0;

const step = (i, d) => {
  const v = $$(".pc:not(.hide)").map((e) => +e.dataset.i);
  const k = Math.max(v.indexOf(i), 0);

  return v[(k + d + v.length) % v.length];
};

function openP(i) {
  cur = i;

  const vd0 = md.querySelector("video");
  if (vd0) vd0.pause();

  const p = P[i];
  const isV = p.type === "Video";

  if (!md.classList.contains("o")) {
    last = document.activeElement;
  }

  const act = p.link
    ? `<a class="btn" href="${p.link}" target="_blank" rel="noopener">${isV ? "Watch full video" : "View full project"}</a>`
    : isV
      ? `<a class="btn" href="mailto:${MAIL}?subject=${encodeURIComponent("Full video: " + p.t)}">Ask for the full video</a>`
      : `<a class="btn" href="#contact" id="mc">Work with me</a>`;

  mb.innerHTML = `
        <button class="x" aria-label="Close">✕</button>

        <div class="vw ${isV && !p.nat ? "v" : ""}">
            ${
              p.video
                ? `<video id="vi" controls playsinline preload="metadata" poster="${IMG[p.im[0]]}" src="${p.video}"></video>`
                : `<img id="vi" src="${IMG[p.im[0]]}" alt="${p.t}">`
            }
        </div>

        ${
          p.im.length > 1
            ? `<div class="tb">
                ${p.im
                  .map(
                    (k, j) =>
                      `<button class="${j ? "" : "on"}" data-k="${k}" aria-label="Image ${j + 1}">
                        <img src="${IMG[k]}" alt="">
                    </button>`,
                  )
                  .join("")}
            </div>`
            : ""
        }

        <div class="mi">
            <small style="color:var(--mute)">${p.type} · ${p.y}</small>
            <h3 style="font-size:32px;margin:6px 0 12px">${p.t}</h3>
            <p>${p.d}</p>
            <div class="mn">
                ${act}
                <button class="btn o" id="pv">← Previous</button>
                <button class="btn o" id="nx">Next →</button>
            </div>
        </div>
    `;

  md.classList.add("o");
  document.body.style.overflow = "hidden";

  if (has) {
    gsap.fromTo(md, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 });

    gsap.fromTo(
      mb,
      { y: 50, scale: 0.95, autoAlpha: 0 },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out",
      },
    );
  }

  mb.querySelectorAll(".tb button").forEach((b) => {
    b.onclick = () => {
      $("#vi").src = IMG[b.dataset.k];

      if (has) {
        gsap.fromTo(
          "#vi",
          { autoAlpha: 0, scale: 1.05 },
          { autoAlpha: 1, scale: 1, duration: 0.45 },
        );
      }

      mb.querySelectorAll(".tb button").forEach((x) =>
        x.classList.toggle("on", x === b),
      );
    };
  });

  const mc = $("#mc");
  if (mc) mc.onclick = closeP;

  const x = mb.querySelector(".x");
  x.focus();
  x.onclick = closeP;

  $("#pv").onclick = () => openP(step(cur, -1));
  $("#nx").onclick = () => openP(step(cur, 1));
}

function closeP() {
  const vd = md.querySelector("video");

  if (vd) vd.pause();

  md.classList.remove("o");
  document.body.style.overflow = "";

  if (last) last.focus();
}

md.onclick = (e) => {
  if (e.target === md) closeP();
};

addEventListener("keydown", (e) => {
  if (!md.classList.contains("o")) return;

  if (e.key === "Escape") closeP();
  if (e.key === "ArrowRight") openP(step(cur, 1));
  if (e.key === "ArrowLeft") openP(step(cur, -1));
});

// ===== NAVIGATION, THEME AND FORM =====

const nv = $("#nv");
const bar = $("#bar");
const nl = $("#nl");
const bg = $("#bg");

const secs = ["about", "work", "services", "process", "experience"].map((id) =>
  $("#" + id),
);

let tick = false;

function onScroll() {
  nv.classList.toggle("s", scrollY > 20);

  const h = document.documentElement;
  const maxScroll = h.scrollHeight - innerHeight;

  bar.style.width = (maxScroll > 0 ? scrollY / maxScroll : 0) * 100 + "%";

  let c = "";

  secs.forEach((s) => {
    if (s && s.getBoundingClientRect().top < innerHeight * 0.4) {
      c = s.id;
    }
  });

  nl.querySelectorAll("a").forEach((a) =>
    a.classList.toggle("on", a.getAttribute("href") === "#" + c),
  );

  tick = false;
}

addEventListener(
  "scroll",
  () => {
    if (!tick) {
      tick = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);

onScroll();

bg.onclick = () => {
  const o = nl.classList.toggle("o");
  bg.setAttribute("aria-expanded", o);
};

nl.querySelectorAll("a").forEach((a) => {
  a.onclick = () => {
    nl.classList.remove("o");
    bg.setAttribute("aria-expanded", false);
  };
});

// ===== THEME SWITCH =====

try {
  const s = localStorage.getItem("th");

  if (s) {
    document.documentElement.dataset.theme = s;
  }
} catch (e) {}

$("#tg").onclick = () => {
  const d = document.documentElement;

  const n =
    (d.dataset.theme ||
      (matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light")) === "dark"
      ? "light"
      : "dark";

  d.dataset.theme = n;

  try {
    localStorage.setItem("th", n);
  } catch (e) {}
};

// ===== CONTACT FORM: WHATSAPP =====

$("#f").onsubmit = (e) => {
  e.preventDefault();

  let ok = true;

  const chk = (i, er, t) => {
    const m = t($(i).value.trim());

    $(er).textContent = m;

    if (m) ok = false;
  };

  chk("#fn", "#en", (v) => (v.length < 2 ? "Please enter your name." : ""));

  chk("#fe", "#ee", (v) =>
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) ? "" : "Enter a valid email address.",
  );

  chk("#fm", "#em", (v) =>
    v.length < 10 ? "Tell me a little more (10+ characters)." : "",
  );

  if (!ok) return;

  const msg =
    `Hi Payal! I found you through your portfolio.\n\n` +
    `*Name:* ${$("#fn").value.trim()}\n` +
    `*Email:* ${$("#fe").value.trim()}\n` +
    `*Project type:* ${$("#ft").value}\n\n` +
    `${$("#fm").value.trim()}`;

  const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

  $("#ok").textContent =
    "Opening WhatsApp… if it does not open, message me on " +
    (PHONE || "WhatsApp") +
    ".";

  $("#ok").style.display = "block";

  const w = open(url, "_blank");

  if (w) {
    w.opener = null;
  } else {
    location.href = url;
  }

  e.target.reset();
};

// ===== SPLIT HEADINGS =====

// ===== HEADING ANIMATIONS =====

$$("h2").forEach((heading) => {
  // Keep the About heading visible without split-text animation.
  if (heading.classList.contains("about-title")) return;

  if (!has) return;

  const words = heading.textContent.trim().split(/\s+/);

  heading.innerHTML = words
    .map((word) => `<span class="w"><span>${word}</span></span>`)
    .join(" ");

  const elements = heading.querySelectorAll(".w > span");

  gsap.from(elements, {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: heading,
      start: "top 90%",
      once: true,
    },
  });
});

// ===== MOTION =====

const ld = $("#ld");

setTimeout(() => {
  if (ld.isConnected) ld.remove();
}, 6000);

if (!has) {
  ld.remove();
} else {
  function intro() {
    gsap
      .timeline({ defaults: { ease: "power4.out" } })
      .from(".role span", {
        y: 20,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.6,
      })
      .from(
        "[data-l]",
        {
          yPercent: 115,
          duration: 1.1,
          stagger: 0.12,
        },
        "-=.3",
      )
      .from(
        ".hrow>*",
        {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
        },
        "-=.6",
      )
      .from(
        ".tl",
        {
          y: 70,
          autoAlpha: 0,
          duration: 1,
        },
        "-=.6",
      )
      .from(
        ".cl>div",
        {
          scaleX: 0,
          transformOrigin: "left",
          stagger: 0.05,
          duration: 0.7,
        },
        "-=.6",
      );
  }

  const c = { n: 0 };

  gsap.to(c, {
    n: 100,
    duration: 1.3,
    ease: "power2.inOut",

    onUpdate: () => {
      $("#lc").textContent = String(Math.round(c.n)).padStart(3, "0");
    },

    onComplete: () => {
      gsap.to(ld, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => ld.remove(),
      });

      intro();
    },
  });

  // Reveal cards and text blocks on scroll.

  const up = (e, i) =>
    gsap.to(e, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      delay: Math.min(i, 6) * 0.09,
      ease: "power3.out",
      overwrite: "auto",
    });

  const down = (e) => {
    gsap.killTweensOf(e, "opacity,y");
    gsap.set(e, { opacity: 0, y: 40 });
  };

  $$(".rv,.pc").forEach((el) => watch(el, up, down));

  // About photo reveal.

  const php = $("#php");

  watch(
    php.parentElement,
    () => php.classList.add("in"),
    () => php.classList.remove("in"),
  );

  gsap.to("#me", {
    yPercent: -9,
    ease: "none",
    scrollTrigger: {
      trigger: "#about",
      scrub: true,
    },
  });

  // Process timeline animation.

  gsap.fromTo(
    ".pl",
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".ps",
        start: "top 80%",
        end: "bottom 55%",
        scrub: true,
      },
    },
  );

  // Custom cursor and hover interactions.

  if (fine) {
    const cu = $("#cu");

    gsap.set(cu, {
      xPercent: -50,
      yPercent: -50,
    });

    const mx = gsap.quickTo(cu, "x", { duration: 0.25 });
    const my = gsap.quickTo(cu, "y", { duration: 0.25 });

    addEventListener("pointermove", (e) => {
      mx(e.clientX);
      my(e.clientY);
    });

    document.addEventListener("pointerover", (e) => {
      const k = e.target.closest(".pc");
      const a = e.target.closest("a,button,input,select,textarea");

      const s = k ? 84 : a ? 32 : 12;

      gsap.to(cu, {
        width: s,
        height: s,
        duration: 0.3,
      });

      cu.classList.toggle("l", !!k);
    });

    document.documentElement.classList.add("nc");

    // Project card tilt.

    $$(".pc").forEach((c) => {
      gsap.set(c, { transformPerspective: 900 });

      const rx = gsap.quickTo(c, "rotationX", { duration: 0.5 });
      const ry = gsap.quickTo(c, "rotationY", { duration: 0.5 });

      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();

        ry(((e.clientX - r.left) / r.width - 0.5) * 10);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 10);
      });

      c.addEventListener("pointerleave", () => {
        rx(0);
        ry(0);
      });
    });

    // Magnetic buttons.

    $$(".btn").forEach((b) => {
      const bx = gsap.quickTo(b, "x", {
        duration: 0.4,
        ease: "power3",
      });

      const by = gsap.quickTo(b, "y", {
        duration: 0.4,
        ease: "power3",
      });

      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();

        bx((e.clientX - r.left - r.width / 2) * 0.25);
        by((e.clientY - r.top - r.height / 2) * 0.35);
      });

      b.addEventListener("pointerleave", () => {
        bx(0);
        by(0);
      });
    });
  }

  // Refresh scroll positions after images and fonts load.

  let rt;

  const refreshSoon = () => {
    clearTimeout(rt);
    rt = setTimeout(() => ScrollTrigger.refresh(), 200);
  };

  $$(".th img").forEach((im) => {
    if (!im.complete) {
      im.addEventListener("load", refreshSoon);
    }
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refreshSoon);
  }

  addEventListener("load", refreshSoon);
}
