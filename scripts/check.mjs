// CI check for index.html. Run: node scripts/check.mjs
// 1. Every inline <script> parses.
// 2. No network APIs (fetch, XMLHttpRequest, WebSocket, sendBeacon, EventSource).
// 3. No external resources (src/href/url() pointing at http, https or //).
import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';

const file = new URL('../index.html', import.meta.url);
const html = readFileSync(file, 'utf8');
const errors = [];

const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
if (scripts.length === 0) errors.push('No inline <script> found.');
for (const [, code] of scripts) {
  try { new Script(code, { filename: 'index.html' }); }  // compiles only, never runs
  catch (e) { errors.push(`Script does not parse: ${e.message}`); }
}

for (const api of ['fetch(', 'XMLHttpRequest', 'WebSocket', 'sendBeacon', 'EventSource']) {
  if (html.includes(api)) errors.push(`Network API found: ${api}`);
}

const external = /(?:src|href)\s*=\s*["']?\s*(?:https?:)?\/\/|url\(\s*["']?\s*(?:https?:)?\/\//gi;
for (const m of html.matchAll(external)) errors.push(`External resource found: ${m[0]}`);

if (!/<title>[^<]+<\/title>/i.test(html)) errors.push('Missing <title>.');

for (const e of errors) {
  console.error(`FAIL  ${e}`);
  if (process.env.GITHUB_ACTIONS) console.log(`::error file=index.html,title=GitTrim check::${e}`);
}
console.log(errors.length ? `${errors.length} problem(s).` : 'index.html OK.');
process.exit(errors.length ? 1 : 0);
