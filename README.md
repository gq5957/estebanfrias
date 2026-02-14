# EstebanFrias Site (TypeScript, Private)

Vite + React + TypeScript + Tailwind + Framer Motion.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Vercel
Import the repo in Vercel. Settings:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Privacy
- `<meta name="robots" content="noindex,nofollow" />` in `index.html`
- `public/robots.txt` disallowing crawlers
