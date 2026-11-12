// Resume downloads. Put the files in public/resume/ (Vite copies public/ as-is),
// then set file to their path inside public/, e.g. 'resume/resume-en.pdf'.
// file: '' shows that language as "coming soon" instead of a download link.
// lang: matches a code in strings.js.
export const resumes = [
  {
    lang: 'en',
    label: { en: 'English', 'pt-BR': 'Inglês' },
    file: '',
  },
  {
    lang: 'pt-BR',
    label: { en: 'Portuguese (Brazil)', 'pt-BR': 'Português (Brasil)' },
    file: '',
  },
]
