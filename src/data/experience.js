// Professional background, newest first.
// start/end: 'YYYY-MM' (end: null = current job). Text fields: plain string or { en, 'pt-BR' }.
// location: '' hides it.
// projects: slugs from src/data/projects/ to link from this job.
export const experience = [
  {
    role: { en: 'Senior Software Engineer', 'pt-BR': 'Engenheiro de Software Sênior' },
    company: 'Fortis Games',
    location: '',
    start: '2022-01',
    end: '2026-11',
    summary: {
      en: 'Mobile games in Unity, for clients and an in-house title, with a focus on LiveOps.',
      'pt-BR': 'Jogos mobile em Unity, para clientes e um projeto próprio, com foco em LiveOps.',
    },
    highlights: {
      en: [
        'Completed a mobile fishing game for a client, working on the metagame, backend integration and UI.',
        'Worked on an in-house mobile strategy game from 2023 to 2026, across combat, metagame and multiplayer.',
        'Created tools to automate and improve the build pipeline, and worked with Addressables and other plugins.',
        'Scrum with Jira.',
      ],
      'pt-BR': [
        'Finalizei um jogo mobile de pesca para um cliente, trabalhando no metagame, na integração com o backend e na UI.',
        'Trabalhei em um jogo mobile de estratégia próprio da empresa de 2023 a 2026, passando por batalha, metagame e multiplayer.',
        'Criei ferramentas para automatizar e melhorar o pipeline de builds, e trabalhei com Addressables e outros plugins.',
        'Scrum com Jira.',
      ],
    },
    projects: ['rapala-fishing', 'mobile-strategy-game'],
  },
  {
    role: { en: 'Game Developer', 'pt-BR': 'Desenvolvedor de Jogos' },
    company: 'Oktagon Games',
    location: 'Londrina, PR',
    start: '2020-12',
    end: '2022-01',
    summary: {
      en: 'Mobile and PC games in Unity for clients. My first role in a game studio, alongside a large, experienced team.',
      'pt-BR':
        'Jogos mobile e PC em Unity para clientes. Minha primeira experiência em um estúdio de jogos, com um time grande e experiente.',
    },
    highlights: {
      en: [
        'Built gameplay mechanics, puzzles, character customization, the lobby and analytics for a multiplayer PC game released on Steam.',
        'Started work on a mobile fishing game, later completed at Fortis Games.',
      ],
      'pt-BR': [
        'Desenvolvi mecânicas de gameplay, puzzles, customização de personagens, lobby e analytics para um jogo multiplayer para PC lançado na Steam.',
        'Comecei o desenvolvimento de um jogo mobile de pesca, finalizado depois na Fortis Games.',
      ],
    },
    projects: ['piggy-hunt', 'rapala-fishing'],
  },
  {
    role: { en: 'Software Engineer', 'pt-BR': 'Engenheiro de Software' },
    company: 'OKL Group',
    location: 'Porto Alegre, RS',
    start: '2019-02',
    end: '2020-12',
    summary: {
      en: 'Software and Unity games for clients around the world.',
      'pt-BR': 'Softwares e jogos em Unity para clientes do mundo todo.',
    },
    highlights: {
      en: [
        'C# with SOLID design principles and test-driven development (TDD).',
        'Also worked with Vue.js, Java, Python, React and Selenium.',
        'Project estimates with Gantt charts and organization in Jira and Confluence.',
      ],
      'pt-BR': [
        'C# com princípios SOLID e desenvolvimento orientado a testes (TDD).',
        'Também trabalhei com Vue.js, Java, Python, React e Selenium.',
        'Estimativas com gráficos de Gantt e organização de projetos no Jira e no Confluence.',
      ],
    },
    projects: [],
  },
  {
    role: { en: 'Lead Unity Programmer', 'pt-BR': 'Programador Unity Líder' },
    company: 'UNA-SUS / UFCSPA',
    location: 'Porto Alegre, RS',
    start: '2018-03',
    end: '2019-01',
    summary: {
      en: 'Educational VR games in Unity for Samsung Gear VR.',
      'pt-BR': 'Jogos educativos em VR em Unity para Samsung Gear VR.',
    },
    highlights: {
      en: [
        'Organized the project and integrated assets for a small multidisciplinary team.',
        'Built movement, database, game manager, audio and narrative systems.',
      ],
      'pt-BR': [
        'Organizei o projeto e integrei os assets de uma pequena equipe multidisciplinar.',
        'Desenvolvi sistemas de movimentação, banco de dados, gerenciadores de jogo, áudio e narrativa.',
      ],
    },
    projects: ['muiraquita'],
  },
]
