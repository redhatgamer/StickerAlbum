# WC 2026 Sticker Tracker

Panini FIFA World Cup 2026 sticker tracker — 980 stickers, 48 teams.
Built with Vite. Data persists via localStorage.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173/wc2026-tracker/ in your browser.

## Deploy to GitHub Pages

### First time

1. Create a new repo on GitHub called `wc2026-tracker`
2. Push this project:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/wc2026-tracker.git
   git push -u origin main
   ```
3. Open `package.json` and set the `homepage` field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/wc2026-tracker"
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. In your GitHub repo → Settings → Pages → set Source to `gh-pages` branch.

Your app will be live at: `https://YOUR_USERNAME.github.io/wc2026-tracker/`

### Subsequent deploys

```bash
npm run deploy
```

That's it. Changes go live in ~1 minute.

## Project structure

```
wc2026-tracker/
├── index.html          # entry point
├── vite.config.js      # base path config for GitHub Pages
├── package.json
└── src/
    ├── main.js         # app logic & rendering
    ├── teams.js        # all 48 teams + sticker data
    ├── storage.js      # localStorage helpers
    └── style.css       # all styles
```
