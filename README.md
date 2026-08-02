# Portfolio

A React + Vite portfolio site with Home, Projects, Skills, and Contact pages,
deployed to GitHub Pages.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`. Edit files under `src/` and the page reloads
automatically.

## 3. Customize your content

- `src/pages/Home.jsx` — your name, tagline, stat panel
- `src/data/projects.js` — your real projects
- `src/data/skills.js` — your real skills, grouped by category
- `src/pages/Contact.jsx` — your real email / GitHub / LinkedIn links
- `index.html` — page `<title>` and meta description

## 4. Set the base path for GitHub Pages

Open `vite.config.js` and change `REPO_NAME` to your actual repo name:

- If your repo is `github.com/yourname/portfolio` → `base: '/portfolio/'`
- If your repo is `github.com/yourname/yourname.github.io` (a "user site") → `base: '/'`

## 5. Push to a new GitHub repository

Create a new, empty repository on GitHub first (no README/license), then:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 6. Enable GitHub Pages

In your new repo on GitHub:

1. Go to **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**

That's it — the included workflow (`.github/workflows/deploy.yml`) builds and
deploys the site automatically on every push to `main`. Check the **Actions**
tab to watch it run; your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

(or `https://YOUR_USERNAME.github.io/` if you used a user-site repo)

## Notes

- Routing uses `HashRouter` (URLs like `/#/projects`) so page refreshes work
  correctly on GitHub Pages' static hosting, with no extra redirect config.
- No backend — the contact page is just links (mailto + social). If you want
  a working contact form later, a service like Formspree or Getform can
  handle that without needing a server of your own.
