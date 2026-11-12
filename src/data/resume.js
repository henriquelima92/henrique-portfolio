// Resume downloads. Put the files in public/resume/ (Vite copies public/ as-is),
// then list them here. file: path inside public/. lang: matches a code in strings.js.
export const resumes = [
  {
    lang: 'en',
    label: { en: 'English', 'pt-BR': 'Inglês' },
    file: 'resume/resume-en.pdf',
  },
  {
    lang: 'pt-BR',
    label: { en: 'Portuguese (Brazil)', 'pt-BR': 'Português (Brasil)' },
    file: 'resume/resume-pt-BR.pdf',
  },
]
