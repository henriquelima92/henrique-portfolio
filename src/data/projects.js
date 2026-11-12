// Edit this file to list your real projects.
// slug: used in the project page URL (#/projects/<slug>); lowercase, dashes, unique.
// description: short summary shown on the card. details: paragraphs shown on the project page.
// Text fields take { en, 'pt-BR' }; a plain string is used for both languages (e.g. titles).
// tags: short strings for tech/tools used. repoUrl/demoUrl: leave '' to hide the link.
// videoUrl: YouTube or Vimeo link, or a direct .mp4/.webm file URL; leave '' for no video.

// Placeholder text, shared until each project gets its own. Replace per project.
const placeholderDescription = {
  en: 'A one or two sentence summary of what this project is, what problem it solves or what experience it delivers, and your role in building it.',
  'pt-BR':
    'Um resumo de uma ou duas frases sobre o que é este projeto, que problema resolve ou que experiência oferece, e o seu papel no desenvolvimento.',
}
const placeholderDetails = {
  en: [
    'A longer description of the project: what it is, why you built it, and who it was for.',
    'What you worked on, the interesting technical problems, and what you would do differently next time.',
  ],
  'pt-BR': [
    'Uma descrição mais longa do projeto: o que é, por que você o criou e para quem foi feito.',
    'No que você trabalhou, os problemas técnicos interessantes e o que faria diferente da próxima vez.',
  ],
}

export const projects = [
  {
    slug: 'project-one',
    title: 'Muiraquitã',
    description: placeholderDescription,
    details: placeholderDetails,
    tags: ['Unity', 'C#'],
    videoUrl: 'https://www.youtube.com/watch?v=xF2jNIqDlL4',
    repoUrl: 'https://github.com/yourusername/project-one',
    demoUrl: '',
  },
  {
    slug: 'project-two',
    title: 'Bitmadness',
    description: placeholderDescription,
    details: placeholderDetails,
    tags: ['Unity', 'C#'],
    videoUrl: 'https://www.youtube.com/watch?v=hjUX7h1n-Kw',
    repoUrl: 'https://github.com/yourusername/project-two',
    demoUrl: '',
  },
  {
    slug: 'project-three',
    title: 'Piggy Hunt',
    description: placeholderDescription,
    details: placeholderDetails,
    tags: ['Unity', 'C#', 'Tools'],
    videoUrl: 'https://www.youtube.com/watch?v=bgd-XxwxSWw',
    repoUrl: 'https://github.com/yourusername/project-three',
    demoUrl: 'https://store.steampowered.com/app/1702320/PIGGY_Hunt/',
  },
  {
    slug: 'project-four',
    title: 'Rapala Fishing',
    description: placeholderDescription,
    details: placeholderDetails,
    tags: ['Unity', 'C#', 'Tools'],
    videoUrl: 'https://www.youtube.com/watch?v=d2Sd3o_jpDY',
    repoUrl: 'https://github.com/yourusername/project-four',
    demoUrl: '',
  },
]
