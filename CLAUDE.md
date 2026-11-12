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
- `src/App.jsx` — route table (`/`, `/projects`, `/projects/:slug`, `/skills`, `/resume`, `/contact`)
- `src/pages/` — one component per route
- `src/components/` — shared UI (Nav, Footer, ProjectCard, SkillBar)
- `src/data/` — site content as plain JS arrays (`projects/` (one file per project, order in `projects/index.js`), `skills.js`, `contact.js`, `resume.js`, `strings.js`). Edit content here, not in components.
- `src/index.css` — all styles; design tokens are CSS variables on `:root`
- `src/i18n/` — `LanguageProvider` (EN / PT-BR, choice saved in `localStorage`) and the `useLanguage()` hook

## Localization

- Every user-visible string goes through `useLanguage()`: interface text via `t('section.key')` from `src/data/strings.js` (add the key to both `en` and `pt-BR`), content via `pick(value)`.
- Content fields in `src/data/` that differ per language are `{ en: '...', 'pt-BR': '...' }`; plain strings (names, titles, tags) are shown as-is in both languages.

## Conventions

- Function components, default export, one component per file, `.jsx` extension, imports include the extension.
- Styling: plain class names in `index.css`, always use the `--color-*`, `--font-*`, `--radius`, `--max-width` tokens instead of hard-coded values. No CSS framework.
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/tags only, used sparingly).
- External links use `target="_blank" rel="noreferrer"`.
- Keep the router as `HashRouter`: GitHub Pages can't rewrite deep links to `index.html`.

## Deployment gotchas

- `vite.config.js` `base` is `'/henrique-portfolio/'` and must match the GitHub repo name (or `'/'` for a `<user>.github.io` repo).
- The deploy workflow runs on pushes to `master`. The repo's Pages source must be set to "GitHub Actions".
