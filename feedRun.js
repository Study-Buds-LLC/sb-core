export function startApp() {
  log("App starting...");
  state.user = "student";
  log("User logged in");

  for (let i = 0; i < 5; i++) {
    addLesson("lesson-" + i);
  }

  log("Progress: " + state.progress + "%");
  navigate("/");
}

export function simulateStudy() {
  const score = randomInt(60, 100);
  log("Study score: " + score);
}
import { log } from "./utils.js";
import { ROUTES } from "./constants.js";

export function navigate(route) {
  if (!Object.values(ROUTES).includes(route)) {
    log("Route not found");
    return;
  }

  window.history.pushState({}, "", route);
  log("Navigated to " + route);
}
export const state = {
  user: null,
  theme: "light",
  progress: 0,
  lessonsCompleted: []
};

export function setTheme(theme) {
  state.theme = theme;
}

export function addLesson(id) {
  state.lessonsCompleted.push(id);
  state.progress += 10;
}
export function log(msg) {
  console.log("[Study Buds]", msg);
}

export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const APP_NAME = "Study Buds";
export const COMPANY = "Study Buds LLC";

export const ROUTES = {
  home: "/",
  study: "/study",
  tools: "/tools",
  about: "/about"
};

export const THEMES = {
  light: "light",
  dark: "dark"
};
export const VERSION = "1.0.0";
export const SUPPORT_EMAIL = "support@studybuds.example";

/** Deep clone a value (objects, arrays, primitives) */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/** Debounce a function */
export function debounce(fn, wait = 300) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

/** Throttle a function */
export function throttle(fn, limit = 250) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/** Simple EventEmitter implementation */
export class EventEmitter {
  constructor() { this._events = Object.create(null); }
  on(evt, cb) { (this._events[evt] = this._events[evt] || []).push(cb); }
  off(evt, cb) { if(!this._events[evt]) return; this._events[evt] = this._events[evt].filter(f => f !== cb); }
  emit(evt, ...args) { (this._events[evt] || []).forEach(cb => cb(...args)); }
}

/** Large mock dataset of lessons */
export const MOCK_LESSONS = Array.from({ length: 300 }, (_, i) => ({
  id: `mock-lesson-${i}`,
  title: `Mock Lesson ${i}`,
  durationMinutes: (i % 60) + 10,
  tags: [(i % 2) ? "math" : "lang", `level-${i % 5}`],
  createdAt: new Date(Date.now() - i * 1000 * 60).toISOString()
}));

/** Simulate fetching a large dataset */
export async function mockFetchLessons(delay = 120) {
  await sleep(delay);
  return deepClone(MOCK_LESSONS);
}

/** Compute a simple checksum for a string (32-bit int) */
export function largeChecksum(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}

/** Verbose logger that preserves logs on the window for debugging */
export function verboseLogger(...args) {
  try {
    console.log("[VERBOSE]", ...args);
    if (typeof window !== "undefined") {
      window.__VERBOSE_LOGS = window.__VERBOSE_LOGS || [];
      window.__VERBOSE_LOGS.push(args);
    }
  } catch (e) { /* ignore */ }
}
USER_FEED_ON_TOOLS_PAGE = true;
export const USER_FEED_ON_TOOLS_PAGE = true;
export const FEED_RUN_INTERVAL_MS = 30000;
export const MAX_FEED_ITEMS = 50;
export const FEED_REFRESH_BUTTON_ID = "feed-refresh-btn";
FEED_CONTAINER_ID = "feed-container";