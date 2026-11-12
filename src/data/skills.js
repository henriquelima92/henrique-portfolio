// Edit levels (0-100) and entries to reflect your actual skillset.
// category/name: plain text, or { en, 'pt-BR' } when the wording differs per language.
export const skillGroups = [
  {
    category: { en: 'Languages', 'pt-BR': 'Linguagens' },
    skills: [
      { name: 'C#', level: 90 },
      { name: 'JavaScript', level: 55 },
      { name: 'HLSL / Shaders', level: 40 },
    ],
  },
  {
    category: { en: 'Engines & Tools', 'pt-BR': 'Engines e Ferramentas' },
    skills: [
      { name: 'Unity', level: 90 },
      { name: 'Git', level: 75 },
      { name: 'React', level: 45 },
    ],
  },
  {
    category: { en: 'Systems & Concepts', 'pt-BR': 'Sistemas e Conceitos' },
    skills: [
      { name: { en: 'Gameplay Systems', 'pt-BR': 'Sistemas de Gameplay' }, level: 85 },
      { name: { en: 'Multiplayer / Netcode', 'pt-BR': 'Multiplayer / Netcode' }, level: 60 },
      { name: { en: 'Performance Optimization', 'pt-BR': 'Otimização de Performance' }, level: 65 },
    ],
  },
]
