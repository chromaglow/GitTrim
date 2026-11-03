# Changelog

All notable changes are listed here. This project follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.0.0] - 2026-11-03

First public release. GitTrim started as the clip trimmer bundled with [Push it](https://github.com/chromaglow/push-it) and is now its own project.

### Added
- Single-file browser trimmer: drop in audio or video, select a clip, export WAV.
- Zoom around the mouse, Shift+scroll pan, zoom to selection, and a time ruler that adapts to the zoom level.
- ±10 and ±100 ms nudges, fade in and out, optional normalize to −1 dB.
- Preview with loop; Space plays and stops.
- Save dialog in Chrome and Edge, download fallback in other browsers.
- Hosted on GitHub Pages.
- CI that checks the page's script parses and that it contains no network calls or external resources.

[Unreleased]: https://github.com/chromaglow/GitTrim/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/chromaglow/GitTrim/releases/tag/v1.0.0
