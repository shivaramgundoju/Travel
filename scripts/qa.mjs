// Responsive QA: loads every route at multiple viewport widths in headless Chrome
// and reports horizontal overflow + console/runtime errors.
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const CHROME = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = process.env.QA_BASE || "http://localhost:4173";
const PORT = 9223;
const PROFILE = fs.mkdtempSync(path.join(os.tmpdir(), "qa-chrome-"));

const ROUTES = [
  "/",
  "/destinations",
  "/destinations/hyderabad",
  "/destinations/kashmir",
  "/destinations/kerala",
  "/destinations/rajasthan",
  "/destinations/goa",
  "/destinations/ladakh",
  "/experiences",
  "/experiences/old-hyderabad-food-walk",
  "/experiences/golconda-heritage",
  "/experiences/biryani-trail",
  "/experiences/kerala-backwater-escape",
  "/trips",
  "/trips/hyderabad-kashmir",
  "/trips/hyderabad-kerala",
  "/trips/hyderabad-rajasthan",
  "/trips/hyderabad-goa",
  "/trips/hyderabad-ladakh",
  "/trips/hyderabad-andaman",
  "/stories",
  "/stories/soul-of-old-hyderabad",
  "/stories/places-near-hyderabad",
  "/stories/first-time-kashmir",
  "/about",
  "/contact",
  "/plan-a-trip",
];

const VIEWPORTS = [
  { w: 1920, h: 1080, label: "1920" },
  { w: 1440, h: 900, label: "1440" },
  { w: 1024, h: 768, label: "1024" },
  { w: 768, h: 1024, label: "768" },
  { w: 390, h: 844, label: "390" },
  { w: 375, h: 812, label: "375" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startChrome() {
  const proc = spawn(CHROME, [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${PROFILE}`,
    "--no-first-run",
    "--disable-gpu",
    "--hide-scrollbars",
    "about:blank",
  ], { stdio: "ignore" });
  // wait for the debugging endpoint
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return proc;
    } catch {}
    await sleep(250);
  }
  throw new Error("Chrome debugging port did not come up");
}

async function openTab(url) {
  const res = await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
  return res.json();
}

function cdp(ws) {
  let id = 0;
  const pending = new Map();
  const listeners = new Map();
  const socket = new WebSocket(ws);
  socket.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    } else if (msg.method && listeners.has(msg.method)) {
      for (const fn of listeners.get(msg.method)) fn(msg.params);
    }
  });
  return {
    send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const myId = ++id;
        pending.set(myId, { resolve, reject });
        socket.send(JSON.stringify({ id: myId, method, params }));
      });
    },
    on(method, fn) {
      if (!listeners.has(method)) listeners.set(method, []);
      listeners.get(method).push(fn);
    },
    close() {
      socket.close();
    },
    ready: new Promise((resolve) => socket.addEventListener("open", resolve)),
  };
}

const AUDIT = `(() => {
  const de = document.documentElement;
  const issues = [];
  const sw = Math.max(de.scrollWidth, document.body ? document.body.scrollWidth : 0);
  const cw = de.clientWidth;
  if (sw > cw + 1) issues.push("horizontal overflow: scrollWidth=" + sw + " clientWidth=" + cw);
  const vw = window.innerWidth;
  const wide = [];
  const wideDetail = [];
  document.querySelectorAll("body *").forEach((el) => {
    if (el.classList && (el.classList.contains("footer-marquee-block") || el.classList.contains("hero-large-text"))) return;
    const cs = getComputedStyle(el);
    if (cs.position === "fixed" || cs.overflowX === "hidden" || cs.overflowX === "clip") return;
    const r = el.getBoundingClientRect();
    if (r.width > vw + 1 && r.right > vw + 1) {
      wide.push(el.tagName + "." + (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className).toString().split(" ").slice(0,2).join("."));
      if (wideDetail.length < 6) {
        const chain = [];
        let n = el;
        for (let i = 0; n && i < 5; i++) {
          const cls = (n.className && n.className.baseVal !== undefined ? n.className.baseVal : n.className || "").toString().split(" ").slice(0, 3).join(".");
          chain.push(n.tagName + (cls ? "." + cls : ""));
          n = n.parentElement;
        }
        wideDetail.push({ w: Math.round(r.width), left: Math.round(r.left), right: Math.round(r.right), cls: (el.className || "").toString(), chain: chain.join(" > "), text: (el.textContent || "").trim().replace(/\\s+/g, " ").slice(0, 60), trans: cs.transform });
      }
    }
  });
  if (wide.length) issues.push("wide elements: " + wide.slice(0, 4).join(", "));
  const images = [...document.images].filter((img) => img.complete && img.naturalWidth === 0).length;
  if (images > 0) issues.push("broken images: " + images);
  return { issues, title: document.title, h1: (document.querySelector("h1") || {}).textContent || "", vw, wideDetail };
})()`;

async function audit(conn, width, height, route) {
  await conn.ready;
  const errors = [];
  conn.on("Runtime.exceptionThrown", (p) => {
    errors.push(`exception: ${(p.exceptionDetails?.exception?.description || p.exceptionDetails?.text || "").slice(0, 300)}`);
  });
  conn.on("Runtime.consoleAPICalled", (p) => {
    if (p.type === "error") {
      const text = (p.args || []).map((a) => a.value ?? a.description ?? "").join(" ").slice(0, 300);
      errors.push(`console.error: ${text}`);
    }
  });
  await conn.send("Page.enable");
  await conn.send("Runtime.enable");
  await conn.send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false });
  await conn.send("Page.navigate", { url: BASE + route });
  // wait for load + settle
  await sleep(1600);
  const result = await conn.send("Runtime.evaluate", { expression: AUDIT, returnByValue: true });
  return { errors: errors.slice(0, 6), ...result.result.value };
}

const chrome = await startChrome();
console.log("chrome ready");
const report = [];
let done = 0;
const total = ROUTES.length * VIEWPORTS.length;

for (const route of ROUTES) {
  for (const vp of VIEWPORTS) {
    let tab;
    try {
      tab = await openTab("about:blank");
      const conn = cdp(tab.webSocketDebuggerUrl);
      const res = await audit(conn, vp.w, vp.h, route);
      conn.close();
      done++;
      if (res.issues.length || res.errors.length) {
        report.push({ route, vp: vp.label, issues: res.issues, errors: res.errors, title: res.title, vw: res.vw, wideDetail: res.wideDetail });
      }
      process.stdout.write(`\r${done}/${total}`);
    } catch (e) {
      report.push({ route, vp: vp.label, issues: [`QA error: ${e.message}`], errors: [] });
      done++;
    } finally {
      try {
        if (tab?.id) await fetch(`http://127.0.0.1:${PORT}/json/close/${tab.id}`);
      } catch {}
    }
  }
}

console.log("\n\n===== QA REPORT =====");
if (report.length === 0) {
  console.log("No issues found across all routes & viewports.");
} else {
  for (const r of report) {
    console.log(`\n[${r.vp}] ${r.route}`);
    for (const i of r.issues) console.log(`  ✗ ${i}`);
    for (const e of r.errors) console.log(`  ! ${e.slice(0, 200)}`);
    if (r.wideDetail) {
      console.log(`    audit vw=${r.vw}`);
      for (const w of r.wideDetail) console.log(`    wide: ${JSON.stringify(w)}`);
    }
  }
}
chrome.kill();
await sleep(800);
try {
  fs.rmSync(PROFILE, { recursive: true, force: true, maxRetries: 3, retryDelay: 300 });
} catch {}
process.exit(report.length ? 1 : 0);