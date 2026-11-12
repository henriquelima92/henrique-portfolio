export default {
  slug: 'piggy-hunt',
  title: 'PIGGY: Hunt',
  tags: ['Unity', 'C#', 'Multiplayer', 'Photon', 'Beamable'],
  videoUrl: 'https://www.youtube.com/watch?v=bgd-XxwxSWw',
  repoUrl: '',
  demoUrl: 'https://store.steampowered.com/app/1702320/PIGGY_Hunt/',

  content: {
    en: {
      description:
        'A multiplayer survival game for PC, released on Steam in October 2021, where survivors team up to escape the Infected, the creature hunting them down. It was my first professional game, developed at Oktagon Games in Londrina, Brazil. I was one of the programmers, working on gameplay mechanics, puzzles, character customization, the lobby and analytics.',
      sections: [
        {
          heading: 'About the project',
          paragraphs: [
            'PIGGY: Hunt expands the PIGGY universe, a horror franchise that started and became popular on Roblox, bringing the experience to PC. Players form teams of survivors, explore the map and solve puzzles to escape while the Infected tries to hunt them down.',
            'The game was built in Unity throughout 2021 by a team of around 20 to 25 people covering nearly every discipline: programmers, backend developers, game designers, animators, tech artists and UI/UX. It launched on Steam on October 14, 2021.',
          ],
        },
        {
          heading: 'My work and technical challenges',
          paragraphs: [
            "Early in the project I built gameplay mechanics and puzzles. Later I took over the character customization system, the integration with the Beamable backend platform (especially the lobby), and the analytics implementation. The game's networking layer used Photon.",
          ],
          subsections: [
            {
              heading: 'A lobby without native support',
              paragraphs: [
                "The biggest challenge was the Beamable integration: at the time, the platform had no lobby functionality. To work around it, we built the lobby on top of Beamable's chat system, using messages to coordinate players before each match.",
              ],
            },
            {
              heading: 'Cloud data',
              paragraphs: [
                "Game data lived in Beamable's cloud, structured as ScriptableObjects, which caused a number of sync issues. Solving them required constant contact with the Beamable team, valuable experience in working closely with an external vendor to keep the project moving.",
              ],
            },
            {
              heading: "What I'd do differently",
              paragraphs: [
                "Looking back, I would choose different solutions for multiplayer and backend, possibly an in-house one, giving us more control over features like the lobby. I would also invest early in a more robust pipeline for moving data between the design team's spreadsheets and the game, which was a frequent source of problems in both directions.",
              ],
            },
          ],
        },
      ],
      note: "Unfortunately, the game's servers are no longer running, so PIGGY: Hunt is no longer playable.",
    },

    'pt-BR': {
      description:
        'Jogo multiplayer de sobrevivência para PC, lançado na Steam em outubro de 2021, em que sobreviventes precisam cooperar para escapar do Infected, a criatura que os persegue. Foi meu primeiro jogo profissional, desenvolvido na Oktagon Games, em Londrina. Atuei como um dos programadores, trabalhando em mecânicas de gameplay, puzzles, customização de personagens, lobby e analytics.',
      sections: [
        {
          heading: 'Sobre o projeto',
          paragraphs: [
            'PIGGY: Hunt expande o universo PIGGY, franquia de terror que nasceu e ficou popular no Roblox, levando a experiência para o PC. Os jogadores formam equipes de sobreviventes, exploram o mapa e resolvem puzzles para escapar, enquanto o Infected tenta caçá-los.',
            'O jogo foi desenvolvido em Unity ao longo de 2021 por um time de cerca de 20 a 25 pessoas, com profissionais de praticamente todas as áreas: programadores, desenvolvedores de backend, game designers, animadores, tech artists e UI/UX. O lançamento na Steam aconteceu em 14 de outubro de 2021.',
          ],
        },
        {
          heading: 'Meu trabalho e desafios técnicos',
          paragraphs: [
            'No início do projeto, desenvolvi mecânicas de gameplay e puzzles. Depois, assumi o sistema de customização de personagens, a integração com a plataforma de backend Beamable, principalmente o lobby, e a implementação de analytics. A camada de rede do jogo usava Photon.',
          ],
          subsections: [
            {
              heading: 'Lobby sem suporte nativo',
              paragraphs: [
                'O maior desafio foi a integração com a Beamable, que na época não oferecia funcionalidade de lobby. Para contornar isso, construímos o lobby em cima do sistema de chat da plataforma, usando as mensagens para coordenar os jogadores antes da partida.',
              ],
            },
            {
              heading: 'Dados na nuvem',
              paragraphs: [
                'Os dados do jogo ficavam na nuvem da Beamable, estruturados como ScriptableObjects, o que gerou vários problemas de sincronização. Resolver isso exigiu contato constante com o time da Beamable, uma boa experiência de trabalhar lado a lado com um fornecedor externo para destravar o projeto.',
              ],
            },
            {
              heading: 'O que eu faria diferente',
              paragraphs: [
                'Olhando hoje, eu escolheria outras soluções para o multiplayer e para o backend, possivelmente uma solução própria, com mais controle sobre funcionalidades como o lobby. Também investiria cedo em um pipeline mais robusto para a troca de dados entre as planilhas da equipe de design e o jogo, que foi uma fonte frequente de problemas nas duas direções.',
              ],
            },
          ],
        },
      ],
      note: 'Infelizmente, os servidores do jogo não estão mais em funcionamento, então PIGGY: Hunt não pode mais ser jogado.',
    },
  },
}
