/**
 * ─────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — the editable template
 * ─────────────────────────────────────────────────────────────────────
 *
 *  Everything the visitor reads lives here. The packaged Kage document
 *  (public/landing-pages/kage.html) is never rewritten; these values are
 *  applied to the loaded page, so the authored motion, shaders and
 *  Three.js world stay byte-exact.
 *
 *  To reuse this template in another project:
 *    1. copy src/config/, src/lib/applyKageContent.ts, src/components/,
 *       src/shaders/ and public/landing-pages/ across,
 *    2. edit this file (and src/config/kage.ts for type + colour),
 *    3. update the route head() metadata in src/routes/index.tsx.
 *
 *  See TEMPLATE.md for the full checklist.
 */

export type NavLink = { label: string; alt: string };
export type Chip = { num: string; title: string; text: string };
export type Stat = { value: string; label: string };
export type Card = { title: string; alt: string; caption: string };
export type Lesson = { num: string; title: string; alt: string; text: string; time: string };
export type FootColumn = { title: string; links: string[] };

export type SiteContent = {
  brand: { name: string; tagline: string };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    /** Exactly three lines — the authored mask-line reveal animates three. */
    headline: [string, string, string];
    sub: string;
    cue: string;
    chips: Chip[];
    peek: { alt: string; caption: string };
    watermark: string;
    side: string;
  };
  gate: {
    num: string;
    label: string;
    alt: string;
    heading: string;
    lead: string;
    body: string;
    link: string;
    stats: Stat[];
  };
  gallery: { num: string; label: string; alt: string; cards: Card[] };
  lessons: {
    num: string;
    label: string;
    alt: string;
    heading: string;
    intro: string;
    items: Lesson[];
  };
  closing: { eyebrow: string; heading: string; body: string; cta: string };
  footer: { about: string; columns: FootColumn[]; left: string; center: string; right: string };
};

export const SITE_CONTENT: SiteContent = {
  brand: { name: "KAGE", tagline: "HIDDEN REALMS OF KYOTO" },
  nav: [
    { label: "Temples", alt: "伽藍" },
    { label: "Gardens", alt: "庭園" },
    { label: "Rituals", alt: "神事" },
    { label: "Afterlight", alt: "残光" },
  ],
  hero: {
    eyebrow: "Chapter 00 — The Hidden Gate",
    headline: ["Where stillness", "reveals the", "unseen."],
    sub: "Enter Kyoto through its quiet thresholds, where ritual, craft, and memory shape the path.",
    cue: "Scroll to enter",
    chips: [
      { num: "01", title: "Thresholds", text: "Discover the hidden gates that open on to deeper paths." },
      { num: "02", title: "Still Gardens", text: "Witness the courts where silence gently unfolds." },
      { num: "03", title: "Sacred Craft", text: "Embrace the hands and heritage that shape devotion." },
      { num: "04", title: "Night Rituals", text: "Explore the rites that awaken when the day is done." },
    ],
    peek: { alt: "山門", caption: "Sanmon — before the bell" },
    watermark: "KAGE",
    side: "影の道",
  },
  gate: {
    num: "01",
    label: "The Sanmon",
    alt: "山門",
    heading: "Charred cypress, worn stone, one gate left open.",
    lead: "Kage begins where the city stops: a mountain gate of cedar burned black, standing in its own weather. The soot is not decoration. It is how a board is taught to survive a hundred rainy seasons, and the first thing this place asks you to understand.",
    body: "Climb the worn steps and the worship hall lifts out of the mist, its paper screens lit from inside like a lantern the size of a house. Above the eaves a vermilion moon holds its place, patient, half hidden. Nothing here is in a hurry. Neither, for the next ninety minutes, are you.",
    link: "Cross the threshold",
    stats: [
      { value: "05", label: "Chapters" },
      { value: "92", label: "Minutes" },
      { value: "1611", label: "Hall raised" },
      { value: "∞", label: "Stillness" },
    ],
  },
  gallery: {
    num: "02",
    label: "Still Gardens",
    alt: "庭園",
    cards: [
      { title: "Approach", alt: "参道", caption: "The long climb" },
      { title: "Lanterns", alt: "灯籠", caption: "Lantern court" },
      { title: "Moonwater", alt: "月影", caption: "The wet court" },
    ],
  },
  lessons: {
    num: "03",
    label: "Sacred Craft",
    alt: "手業",
    heading: "Five chapters. Ninety minutes. One quiet mind.",
    intro:
      "Each chapter is a walk, not a lecture. You arrive at the gate, climb the steps, sit with the lantern, and leave with one thing worth keeping.",
    items: [
      { num: "01", title: "The Hidden Gate", alt: "山門", text: "Why a gate is a sentence, and what you agree to when you walk under one.", time: "14 min" },
      { num: "02", title: "Borrowed Scenery", alt: "借景", text: "Shakkei: composing with a mountain you will never own.", time: "18 min" },
      { num: "03", title: "Charred Cypress", alt: "焼杉", text: "Yakisugi: burning a board black so the weather will let it live.", time: "21 min" },
      { num: "04", title: "Lantern Light", alt: "灯籠", text: "How a single ember decides the scale of everything around it.", time: "17 min" },
      { num: "05", title: "The Vermilion Moon", alt: "朱月", text: "Why the moon burns red over the valley, and what the garden does with it.", time: "22 min" },
    ],
  },
  closing: {
    eyebrow: "Chapter 04 — Afterlight",
    heading: "Afterlight",
    body: "The gate does not close behind you. Take the walk whenever the noise gets loud — it is always the same path, and never the same light.",
    cta: "Begin the walk",
  },
  footer: {
    about:
      "A five-chapter night walk through a Kyoto mountain temple. Three illustrated garden field notes sit inside a live Three.js sanctuary.",
    columns: [
      { title: "Chapters", links: ["The Sanmon", "Still Gardens", "Sacred Craft", "Afterlight"] },
      { title: "Practice", links: ["Borrowed scenery", "Lantern light", "Charred cypress", "Raked gravel"] },
      { title: "Elsewhere", links: ["Journal", "Field notes", "Colophon"] },
    ],
    left: "© 2026 Kage — Kage no Michi",
    center: "静けさは一つの技である",
    right: "WebGL · Onest · Kyoto",
  },
};

export const SITE_STORAGE_KEY = "kage-site-content";
