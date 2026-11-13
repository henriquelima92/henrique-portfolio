// Builds the resume PDFs listed in src/data/resume.js (one per language) from the site's
// data files, so the resume always matches the website. Run with: npm run resume
// Renders HTML with headless Chrome (or Edge); set CHROME_PATH to use a specific browser.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { contact } from '../src/data/contact.js'
import { experience } from '../src/data/experience.js'
import { degrees, courses, spokenLanguages } from '../src/data/education.js'
import { skillGroups } from '../src/data/skills.js'
import { projects } from '../src/data/projects/index.js'
import { strings } from '../src/data/strings.js'
import { resumes } from '../src/data/resume.js'
import { formatDate } from '../src/i18n/format.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const siteUrl = 'https://henriquelima92.github.io/henrique-portfolio/'

// Resume-only labels (everything else comes from the site's data).
const labels = {
  en: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Selected Projects',
    skills: 'Skills',
    education: 'Education',
    courses: 'Complementary Courses',
    languages: 'Languages',
    present: 'Present',
    country: 'Brazil',
    portfolio: 'Portfolio',
  },
  'pt-BR': {
    summary: 'Resumo',
    experience: 'Experiência',
    projects: 'Projetos Selecionados',
    skills: 'Habilidades',
    education: 'Formação',
    courses: 'Cursos Complementares',
    languages: 'Idiomas',
    present: 'Atual',
    country: 'Brasil',
    portfolio: 'Portfólio',
  },
}

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

function render(lang) {
  const L = labels[lang]
  const s = strings[lang]
  const pick = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.en) : v)
  const range = (start, end) => `${formatDate(start, lang)} – ${end ? formatDate(end, lang) : L.present}`
  const firstSentence = (text) => text.split(/(?<=\.)\s/)[0]
  const phone = contact.whatsapp.replace(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/, '+$1 $2 $3-$4')
  const strip = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

  const jobs = experience
    .map(
      (job) => `
      <div class="entry">
        <div class="entry-head">
          <h3>${esc(pick(job.role))} <span class="org">· ${esc(job.company)}${job.location ? `, ${esc(job.location)}` : ''}</span></h3>
          <span class="dates">${esc(range(job.start, job.end))}</span>
        </div>
        <p>${esc(pick(job.summary))}</p>
        <ul>${(pick(job.highlights) ?? []).map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
      </div>`,
    )
    .join('')

  const projectList = [...projects]
    .reverse()
    .map(
      (p) => `
      <li><strong>${esc(pick(p.title))}</strong> — ${esc(firstSentence(pick(p.content).description))}
        <span class="tags">${esc(p.tags.join(' · '))}</span></li>`,
    )
    .join('')

  const skills = skillGroups
    .map((g) => `<p><strong>${esc(pick(g.category))}:</strong> ${g.skills.map((k) => esc(pick(k.name))).join(', ')}</p>`)
    .join('')

  const degreeList = degrees
    .map(
      (d) => `
      <div class="entry">
        <div class="entry-head">
          <h3>${esc(pick(d.degree))} <span class="org">· ${esc(d.school)}</span></h3>
          <span class="dates">${esc(range(d.start, d.end))}</span>
        </div>
      </div>`,
    )
    .join('')

  const courseList = courses
    .map((c) => `<li>${esc(pick(c.title))} <span class="muted">(${esc(c.provider)}, ${esc(formatDate(c.date, lang))})</span></li>`)
    .join('')

  const languageList = spokenLanguages.map((l) => `${esc(pick(l.name))} (${esc(pick(l.level))})`).join(' · ')

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${esc(contact.name)} — ${esc(s.resume.title)}</title>
<style>
  @page { size: A4; margin: 14mm 15mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: 'Segoe UI', Arial, Helvetica, sans-serif; font-size: 9.6pt; line-height: 1.42; color: #1d1f24; }
  header { border-bottom: 2px solid #b8861b; padding-bottom: 8px; margin-bottom: 10px; }
  h1 { font-size: 22pt; margin: 0; letter-spacing: -0.01em; }
  .headline { font-size: 11pt; color: #8a6413; margin: 2px 0 6px; font-weight: 600; }
  .contact { font-size: 8.8pt; color: #444; margin: 0; }
  .contact a { color: inherit; text-decoration: none; }
  h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: 0.08em; color: #8a6413; margin: 14px 0 6px; border-bottom: 1px solid #e3dccd; padding-bottom: 2px; }
  h3 { font-size: 10.2pt; margin: 0; }
  .org { font-weight: 400; color: #444; }
  .entry { margin-bottom: 8px; break-inside: avoid; }
  .entry-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .dates { font-size: 8.8pt; color: #555; white-space: nowrap; }
  p { margin: 2px 0; }
  ul { margin: 3px 0 0; padding-left: 16px; }
  li { margin-bottom: 2px; }
  .projects li { margin-bottom: 4px; break-inside: avoid; }
  .tags { display: block; font-size: 8.4pt; color: #777; }
  .muted { color: #666; }
  .courses { columns: 2; column-gap: 18px; }
  .courses li { break-inside: avoid; }
  .block { break-inside: avoid; }
  h2 { break-after: avoid; }
</style>
</head>
<body>
  <header>
    <h1>${esc(contact.name)}</h1>
    <p class="headline">${esc(s.home.eyebrow)}</p>
    <p class="contact">
      ${esc(contact.city)}, ${esc(L.country)} · <a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a> · ${esc(phone)}<br>
      <a href="${esc(contact.linkedin)}">${esc(strip(contact.linkedin))}</a> ·
      <a href="${esc(contact.github)}">${esc(strip(contact.github))}</a> ·
      ${esc(L.portfolio)}: <a href="${siteUrl}">${esc(strip(siteUrl))}</a>
    </p>
  </header>

  <h2>${esc(L.summary)}</h2>
  <p>${esc(s.home.pitch)}</p>

  <h2>${esc(L.experience)}</h2>
  ${jobs}

  <h2>${esc(L.projects)}</h2>
  <ul class="projects">${projectList}</ul>

  <div class="block">
    <h2>${esc(L.skills)}</h2>
    ${skills}
  </div>

  <h2>${esc(L.education)}</h2>
  ${degreeList}

  <h2>${esc(L.courses)}</h2>
  <ul class="courses">${courseList}</ul>

  <div class="block">
    <h2>${esc(L.languages)}</h2>
    <p>${languageList}</p>
  </div>
</body>
</html>`
}

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean)
  const found = candidates.find((p) => existsSync(p))
  if (!found) throw new Error('Chrome/Edge not found. Set CHROME_PATH to a Chromium-based browser.')
  return found
}

const browser = findBrowser()
const tmp = join(tmpdir(), 'portfolio-resume')
mkdirSync(tmp, { recursive: true })

for (const { lang, file } of resumes) {
  const html = join(tmp, `resume-${lang}.html`)
  const pdf = join(root, 'public', file)
  mkdirSync(dirname(pdf), { recursive: true })
  writeFileSync(html, render(lang))
  execFileSync(
    browser,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--user-data-dir=${join(tmp, 'profile')}`,
      `--print-to-pdf=${pdf}`,
      pathToFileURL(html).href,
    ],
    { stdio: 'ignore' },
  )
  console.log(`wrote ${pdf}`)
}
rmSync(tmp, { recursive: true, force: true })
