# Contributing

Thanks for helping. GitTrim is deliberately one file, so most changes touch only `index.html`.

## Before you open a pull request

```bash
node scripts/check.mjs        # script parses, no network calls, no external resources
```

Then open `index.html` in Chrome or Edge and try the change by hand: load a file, trim, preview and export. CI runs the check on every push and pull request.

## Conventions

- **One file, no dependencies.** HTML, CSS and JavaScript stay inline in `index.html`. No build step, frameworks, CDNs or web fonts.
- **Nothing leaves the browser.** No `fetch`, analytics, external scripts, stylesheets or images. `scripts/check.mjs` enforces this.
- Line endings are LF, enforced by `.gitattributes`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:` and so on).
- Add a line to `CHANGELOG.md` under the `Unreleased` heading.
- Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) before changing a design decision. If you change one, update that page too.

## Ideas welcome

Good next features, if you want one to pick up:

- Undo history
- `[` and `]` to set the start and end at the playhead
- Drag the whole selection to move it
- Multiple regions and batch export
- Waveform colored by loudness
