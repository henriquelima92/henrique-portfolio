// Interface text for every language. Keys must match between languages;
// a key missing from 'pt-BR' falls back to the English text.
// {name}-style placeholders are filled in by t(key, { name: ... }).
export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pt-BR', label: 'PT-BR' },
]

export const strings = {
  en: {
    meta: {
      titleRole: 'Game Developer',
      description: 'Portfolio of {name} — game developer & software engineer.',
    },
    nav: {
      home: 'home',
      projects: 'projects',
      skills: 'skills',
      resume: 'resume',
      contact: 'contact',
      language: 'Language',
    },
    home: {
      eyebrow: 'Game Developer / Senior Software Engineer',
      pitch:
        'Game programmer building in Unity and C# since 2018, focused on gameplay systems, metagame and internal tools.',
      viewProjects: 'view projects',
      getInTouch: 'get in touch',
      roleLabel: 'Role',
      roleValue: 'Game Developer',
      stackLabel: 'Primary Stack',
      basedInLabel: 'Based In',
    },
    projects: {
      eyebrow: 'Selected Work',
      title: 'Projects',
      intro: "Things I've built or contributed to, roughly in the order I made them.",
      repo: 'repo →',
      play: 'play →',
      viewRepo: 'view repo →',
      allProjects: '← all projects',
      notFoundEyebrow: 'Not Found',
      notFoundTitle: 'Project not found',
      backToProjects: '← back to projects',
      watchVideo: 'watch video →',
      videoTitle: '{title} video',
    },
    skills: {
      eyebrow: 'Competencies',
      title: 'Skills',
      intro: "A rough sense of where I'm strongest and where I'm actively growing.",
    },
    resume: {
      eyebrow: 'Experience',
      title: 'Resume',
      intro: 'Download my resume as a PDF, in English or Portuguese.',
      download: 'download ↓',
      comingSoon: 'coming soon',
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: 'Contact',
      intro: 'The best ways to reach me or find more of my work.',
      email: 'Email',
    },
    footer: {
      builtWith: 'built with React, deployed on GitHub Pages',
    },
  },

  'pt-BR': {
    meta: {
      titleRole: 'Desenvolvedor de Jogos',
      description: 'Portfólio de {name} — desenvolvedor de jogos e engenheiro de software.',
    },
    nav: {
      home: 'início',
      projects: 'projetos',
      skills: 'habilidades',
      resume: 'currículo',
      contact: 'contato',
      language: 'Idioma',
    },
    home: {
      eyebrow: 'Desenvolvedor de Jogos / Engenheiro de Software Sênior',
      pitch:
        'Programador de jogos desenvolvendo em Unity e C# desde 2018, com foco em sistemas de gameplay, metagame e ferramentas internas.',
      viewProjects: 'ver projetos',
      getInTouch: 'entrar em contato',
      roleLabel: 'Função',
      roleValue: 'Desenvolvedor de Jogos',
      stackLabel: 'Stack Principal',
      basedInLabel: 'Localização',
    },
    projects: {
      eyebrow: 'Trabalhos Selecionados',
      title: 'Projetos',
      intro: 'Coisas que criei ou em que contribuí, mais ou menos na ordem em que as fiz.',
      repo: 'repositório →',
      play: 'jogar →',
      viewRepo: 'ver repositório →',
      allProjects: '← todos os projetos',
      notFoundEyebrow: 'Não Encontrado',
      notFoundTitle: 'Projeto não encontrado',
      backToProjects: '← voltar aos projetos',
      watchVideo: 'assistir vídeo →',
      videoTitle: 'Vídeo de {title}',
    },
    skills: {
      eyebrow: 'Competências',
      title: 'Habilidades',
      intro: 'Uma ideia geral de onde sou mais forte e de onde estou evoluindo.',
    },
    resume: {
      eyebrow: 'Experiência',
      title: 'Currículo',
      intro: 'Baixe meu currículo em PDF, em português ou inglês.',
      download: 'baixar ↓',
      comingSoon: 'em breve',
    },
    contact: {
      eyebrow: 'Fale Comigo',
      title: 'Contato',
      intro: 'As melhores formas de falar comigo ou conhecer mais do meu trabalho.',
      email: 'E-mail',
    },
    footer: {
      builtWith: 'feito com React, publicado no GitHub Pages',
    },
  },
}
