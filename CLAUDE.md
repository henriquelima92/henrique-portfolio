# Portfolio site

Personal portfolio: React 18 + Vite 5 + React Router 6, plain CSS, deployed to GitHub Pages.

## Commands

- `npm run dev` — dev server (Vite, http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run deploy` — manual deploy via `gh-pages` (CI deploy is in `.github/workflows/deploy.yml`)

There is no test runner or linter yet. Verify changes with `npm run build` and by checking the page in the dev server.

## Layout

- `src/main.jsx` — entry; wraps the app in `HashRouter`
- `src/App.jsx` — route table (`/`, `/projects`, `/skills`, `/contact`)
- `src/pages/` — one component per route
- `src/components/` — shared UI (Nav, Footer, ProjectCard, SkillBar)
- `src/data/` — site content as plain JS arrays (`projects.js`, `skills.js`). Edit content here, not in components.
- `src/index.css` — all styles; design tokens are CSS variables on `:root`

## Conventions

- Function components, default export, one component per file, `.jsx` extension, imports include the extension.
- Styling: plain class names in `index.css`, always use the `--color-*`, `--font-*`, `--radius`, `--max-width` tokens instead of hard-coded values. No CSS framework.
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/tags only, used sparingly).
- External links use `target="_blank" rel="noreferrer"`.
- Keep the router as `HashRouter`: GitHub Pages can't rewrite deep links to `index.html`.

## Deployment gotchas

- `vite.config.js` `base` is `'/henrique-portfolio/'` and must match the GitHub repo name (or `'/'` for a `<user>.github.io` repo).
- The deploy workflow runs on pushes to `master`. The repo's Pages source must be set to "GitHub Actions".
