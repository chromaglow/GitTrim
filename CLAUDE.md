# GitTrim: notes for Claude Code

This repo is **GitTrim**, a single-file browser audio trimmer. Read `docs/ARCHITECTURE.md` before changing behavior.

## If you're changing the code

- Everything lives in `index.html`. Keep it one self-contained file: no build step, no dependencies, no external resources.
- Never add network calls (`fetch`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`, analytics). "Nothing is uploaded" is a promise in the README.
- Run `node scripts/check.mjs` before calling a change done, and ask the user to try the change in Chrome or Edge, since audio can't be tested headlessly.
- Follow `CONTRIBUTING.md`.
