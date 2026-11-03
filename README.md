<h1 align="center">GitTrim</h1>

<p align="center">
  Cut a clip out of any audio or video file and save it as WAV, right in your browser. No install, no account, nothing uploaded.
</p>

<p align="center">
  <a href="https://chromaglow.github.io/GitTrim/"><b>Open GitTrim</b></a>
</p>

<p align="center">
  <a href="https://github.com/chromaglow/GitTrim/actions/workflows/ci.yml"><img src="https://github.com/chromaglow/GitTrim/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license"></a>
  <img src="https://img.shields.io/badge/dependencies-none-brightgreen.svg" alt="No dependencies">
</p>

---

## Quick start

1. [Open GitTrim](https://chromaglow.github.io/GitTrim/) in Chrome or Edge.
2. Drop in an audio or video file.
3. Drag the amber handles around the part you want, then click **Export WAV**.

<details>
<summary><b>Prefer to run it offline?</b></summary>

Download or clone the repo and double-click `index.html`. It's one self-contained file, so it works without a network connection.

```bash
git clone https://github.com/chromaglow/GitTrim.git
```
</details>

## What it does

| Feature | How |
| --- | --- |
| Open a file | Drop it on the page, or click to choose. Reads mp3, m4a, wav, ogg, mp4 and webm, or anything else your browser can decode. |
| Select a clip | Drag the amber handles, or click and drag to draw a new selection. |
| Zoom and pan | **Scroll** over the waveform to zoom around the mouse, **Shift+scroll** to pan. **Zoom to selection** and **Reset zoom** jump around. The time ruler gets finer as you zoom in. |
| Fine-tune | Nudge the start or end by ±10 or ±100 ms. |
| Shape the sound | Set fade in and fade out in milliseconds, and optionally normalize to −1 dB. |
| Preview | **Play selection**, with optional loop. **Space** plays and stops. |
| Export | **Export WAV** saves 16-bit PCM at the source sample rate. Chrome and Edge ask where to save; other browsers download the file. |

## Browser support

| Browser | Status | Notes |
| --- | --- | --- |
| Chrome, Edge | ✅ Full | Export opens a save dialog. |
| Firefox, Safari | ✅ Works | Export goes to your Downloads folder. Some formats (for example ogg on Safari) depend on what the browser can decode. |
| Mobile | ⚠️ Limited | It runs, but trimming is fiddly on a small touch screen. |

## FAQ

**Is my file uploaded anywhere?** No. The page decodes and edits the file in your browser's memory and writes the WAV on your machine. It makes no network requests at all, and CI checks that the page contains no code that could.

**Why only WAV?** It plays everywhere without extra software, and browsers can write it without a bundled encoder, which keeps GitTrim to a single file with no dependencies.

**How long can the source file be?** As long as your browser can decode into memory. Full songs and short videos are fine; hour-long recordings may be slow on older machines.

## Learn more

- [How it works and why it's built this way](docs/ARCHITECTURE.md)
- [Contributing](CONTRIBUTING.md) · [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE) © Ezra Shively-Stjarna.
