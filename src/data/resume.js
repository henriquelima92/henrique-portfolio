// Resume downloads. The PDFs live in public/resume/ (Vite copies public/ as-is).
// file: the PDF's path inside public/; `npm run resume` writes each PDF to this path.
// lang: matches a code in strings.js.
export const resumes = [
  {
    lang: 'en',
    label: { en: 'English', 'pt-BR': 'Inglês' },
    file: 'resume/henrique-de-lima-resume-en.pdf',
  },
  {
    lang: 'pt-BR',
    label: { en: 'Portuguese (Brazil)', 'pt-BR': 'Português (Brasil)' },
    file: 'resume/henrique-de-lima-resume-pt-BR.pdf',
  },
]
