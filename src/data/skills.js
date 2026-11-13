// Edit levels (0-100) and entries to reflect your actual skillset.
// category/name: plain text, or { en, 'pt-BR' } when the wording differs per language.
export const skillGroups = [
  {
    category: { en: 'Languages', 'pt-BR': 'Linguagens' },
    skills: [
      { name: 'C#', level: 100 },
      { name: 'JavaScript', level: 30 },
      { name: 'Python', level: 30 },
      { name: 'Java', level: 20 },
      { name: 'C++', level: 20 },
    ],
  },
  {
    category: { en: 'Engines & Tools', 'pt-BR': 'Engines e Ferramentas' },
    skills: [
      { name: 'Unity', level: 100 },
      { name: 'Godot', level: 20 },
      { name: 'Git', level: 100 },
      { name: 'React', level: 20 },
    ],
  },
  {
    category: { en: 'Systems & Concepts', 'pt-BR': 'Sistemas e Conceitos' },
    skills: [
      { name: { en: 'Gameplay Systems', 'pt-BR': 'Sistemas de Gameplay' }, level: 90 },
      { name: { en: 'Tools & Editor Scripting', 'pt-BR': 'Ferramentas e Editor Scripting' }, level: 90 },
      { name: { en: 'Metagame & UI', 'pt-BR': 'Metagame e UI' }, level: 80 },
      { name: { en: 'Performance Optimization', 'pt-BR': 'Otimização de Performance' }, level: 70 },
      { name: { en: 'Backend Integration', 'pt-BR': 'Integração com Backend' }, level: 70 },
      { name: 'Multiplayer', level: 60 },
    ],
  },
]
