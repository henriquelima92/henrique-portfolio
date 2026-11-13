// Education, newest first. start/end: 'YYYY'. Text fields: plain string or { en, 'pt-BR' }.
// projects: slugs from src/data/projects/ to link from this degree.
export const degrees = [
  {
    degree: {
      en: 'Postgraduate Specialization in Game Development',
      'pt-BR': 'Especialização em Desenvolvimento de Jogos',
    },
    school: 'Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)',
    location: 'Porto Alegre, RS',
    start: '2017',
    end: '2019',
    summary: {
      en: 'Unity 2D and 3D, computer networks, AI, game design, animation, interactive narratives and the business of games.',
      'pt-BR':
        'Unity 2D e 3D, redes de computadores, IA, game design, animação, narrativas interativas e negócios em jogos.',
    },
    projects: ['bitmadness'],
  },
  {
    degree: {
      en: 'Technologist Degree in Game Development',
      'pt-BR': 'Tecnólogo em Jogos Digitais',
    },
    school: 'Universidade do Vale do Rio dos Sinos (Unisinos)',
    location: 'Porto Alegre, RS',
    start: '2012',
    end: '2016',
    summary: {
      en: 'C++, C#, Unity, game design, AI, operating systems, computer networks, 3D modeling in Maya, gamification, game scripting and optimization.',
      'pt-BR':
        'C++, C#, Unity, game design, IA, sistemas operacionais, redes de computadores, modelagem 3D no Maya, gamificação, roteiro para jogos e otimização.',
    },
    projects: [],
  },
]

// Complementary courses, newest first. Titles are kept as published. date: 'YYYY-MM'.
export const courses = [
  { title: 'Godot 3 Complete Developer Course – 2D and 3D', provider: 'Udemy', date: '2020-06' },
  { title: 'C# Intermediate: Classes, Interfaces and OOP', provider: 'Udemy', date: '2019-04' },
  { title: 'C# Advanced Topics: Prepare for Technical Interviews', provider: 'Udemy', date: '2019-03' },
  { title: 'Advanced C# Scripting in Unity 5', provider: 'Udemy', date: '2017-03' },
  {
    title: { en: 'Web Development with ASP.NET MVC and C# (extension course)', 'pt-BR': 'Desenvolvimento Web com ASP.NET MVC e C# (extensão)' },
    provider: 'PUCRS',
    date: '2017-01',
  },
  { title: 'Mastering 3D Animation in Unity', provider: 'Udemy', date: '2016-12' },
  { title: 'Unity 5 Illumination', provider: 'Udemy', date: '2016-12' },
  { title: 'Android 2016', provider: 'Portal Luciano Augusto', date: '2016-08' },
  { title: 'Unity 2016', provider: 'Portal Luciano Augusto', date: '2016-08' },
]


// Spoken languages.
export const spokenLanguages = [
  { name: { en: 'Portuguese', 'pt-BR': 'Português' }, level: { en: 'Native / Fluent', 'pt-BR': 'Nativo / Fluente' } },
  { name: { en: 'English', 'pt-BR': 'Inglês' }, level: { en: 'Advanced', 'pt-BR': 'Avançado' } },
  { name: { en: 'Italian', 'pt-BR': 'Italiano' }, level: { en: 'Basic', 'pt-BR': 'Básico' } },
]
