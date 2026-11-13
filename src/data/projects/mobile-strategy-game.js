// Confidential title: never put the game's real name in this repo (it is public).
export default {
  slug: 'mobile-strategy-game',
  title: { en: 'Mobile Strategy Game', 'pt-BR': 'Jogo de Estratégia Mobile' },
  tags: ['Unity', 'C#', 'Mobile', 'Multiplayer', 'Tools'],
  videoUrl: '',
  repoUrl: '',
  demoUrl: '',

  content: {
    en: {
      description:
        'A mobile game for Android and iOS that combines auto-battler combat with 4X strategy elements, built in Unity by Fortis as an in-house title. I worked on it as a programmer from April 2023 to November 2026, moving through combat, metagame and multiplayer, and building a number of internal tools for the team.',
      sections: [
        {
          heading: 'About the project',
          paragraphs: [
            'The game brings two genres together: on the map, players explore, expand their territory and make 4X-style strategic decisions; in battle, their heroes fight automatically, with the outcome determined by preparation and army composition.',
            'It was a long, large-scale project. The team peaked at around 80 people and, through several resets, was restructured to 60, 40 and finally 27, always with people from every discipline: programmers, game designers, artists, UI/UX, 2D and 3D animators and audio specialists. I stayed on the project throughout, following the evolution of both the game and its codebase up close.',
          ],
        },
        {
          heading: 'My work and technical challenges',
          paragraphs: [
            'I worked on nearly every part of the game. I spent my first two years on combat, building hero logic, movement and projectiles. I then moved to the metagame, focusing on the map, UI and map-related mechanics. Finally, I joined the social and multiplayer side, working on multiplayer map mechanics and improvements to existing systems.',
            'I also built many internal tools: automated battle simulation, tools that made it easier for designers and artists to apply terrain and animation changes, and player state visualization.',
          ],
          subsections: [
            {
              heading: 'Lots of units on screen',
              paragraphs: [
                "The biggest technical challenge in combat was always the number of simultaneous units on a mobile device. The prototype used Unity's physics. We later moved to an external plugin, integrated into combat with the goal of also running battles on the server, a plan that was ultimately dropped. After a few resets, we arrived at the final solution: a custom navmesh together with a custom collision and physics system, built specifically for the game's needs.",
              ],
            },
            {
              heading: 'A tile-based map',
              paragraphs: [
                'On the metagame side, the main challenge was designing the tile-based map. The first version loaded every map into a single scene from tuning data. As the project evolved, we moved to one scene per map, with elements already instantiated and only the changes applied at runtime.',
              ],
            },
            {
              heading: 'Data pipeline',
              paragraphs: [
                'Tuning data started out in spreadsheets, causing the same import problems I had seen on earlier projects. We solved it by moving editing into a custom Unity editor window that exported data in a format the game could read directly.',
              ],
            },
            {
              heading: "What I'd do differently",
              paragraphs: [
                'The early engineering decisions were made with a much larger scope in mind than the game actually had. After a few resets, we were able to correct course and bring the combat code to a very solid state, where targeted changes could be made without compromising the rest of the system. The biggest lesson was seeing how decisions made together as a team, in later resets, led to much better results. On future projects, I would advocate from the start for an architecture sized to the real scope and defined collaboratively.',
              ],
            },
          ],
        },
      ],
      note: "The game's name is omitted for confidentiality.",
    },

    'pt-BR': {
      description:
        'Jogo mobile para Android e iOS que combina batalhas automáticas com elementos de estratégia 4X, desenvolvido em Unity pela Fortis como projeto próprio da empresa. Atuei como programador de abril de 2023 a novembro de 2026, passando por batalha, metagame e multiplayer, além de criar várias ferramentas internas para o time.',
      sections: [
        {
          heading: 'Sobre o projeto',
          paragraphs: [
            'O jogo une dois gêneros: no mapa, o jogador explora, expande seu território e toma decisões estratégicas no estilo 4X; nas batalhas, seus heróis lutam de forma automática, e o resultado depende da preparação e da composição do exército.',
            'Foi um projeto longo e de grande porte. O time chegou a ter cerca de 80 pessoas e, ao longo de alguns resets, foi reestruturado para 60, 40 e, por fim, 27 pessoas, sempre com profissionais de todas as áreas: programadores, game designers, artistas, UI/UX, animadores 2D e 3D e especialistas em áudio. Participei do projeto durante todo esse período, acompanhando de perto a evolução do jogo e da sua base de código.',
          ],
        },
        {
          heading: 'Meu trabalho e desafios técnicos',
          paragraphs: [
            'Trabalhei em praticamente todas as partes do jogo. Passei os dois primeiros anos na batalha, desenvolvendo a lógica dos heróis, movimentação e projéteis. Depois fui para o metagame, com foco no mapa, na UI e nas mecânicas ligadas a ele. Por último, atuei na parte social e multiplayer, em mecânicas do mapa multiplayer e em melhorias dos sistemas existentes.',
            'Também criei diversas ferramentas internas: simulação automática de batalhas, ferramentas para designers e artistas aplicarem mudanças em terrenos e animações com mais facilidade, e visualização do estado do jogador.',
          ],
          subsections: [
            {
              heading: 'Muitas unidades em cena',
              paragraphs: [
                'O maior desafio técnico da batalha sempre foi a quantidade de unidades simultâneas em um dispositivo mobile. O protótipo usava a física da Unity. Depois migramos para um plugin externo, integrado à batalha com o objetivo de também rodá-la no servidor, o que acabou não sendo levado adiante. Após alguns resets, chegamos à solução final: um navmesh próprio, junto com um sistema próprio de colisão e física, feitos sob medida para as necessidades do jogo.',
              ],
            },
            {
              heading: 'Mapa tile-based',
              paragraphs: [
                'No metagame, o principal desafio foi projetar o mapa baseado em tiles. A primeira versão carregava todos os mapas em uma única cena a partir de tuning data. Com a evolução do projeto, migramos para uma cena por mapa, com os elementos já instanciados e apenas as modificações aplicadas em tempo real.',
              ],
            },
            {
              heading: 'Pipeline de dados',
              paragraphs: [
                'O tuning data começou em planilhas, o que gerava os mesmos problemas de importação que eu já tinha visto em projetos anteriores. Resolvemos movendo a edição para uma janela de editor dentro da própria Unity, que exportava os dados em um formato lido diretamente pelo jogo.',
              ],
            },
            {
              heading: 'O que eu faria diferente',
              paragraphs: [
                'As primeiras decisões de engenharia foram tomadas pensando em um escopo muito maior do que o jogo realmente tinha. Depois de alguns resets, conseguimos ajustar o rumo e levar o código da batalha a um estado bem sólido, em que mudanças pontuais podiam ser feitas sem comprometer o restante do sistema. A maior lição foi ver como as decisões tomadas em conjunto pelo time, nos resets seguintes, levaram a resultados muito melhores. Em projetos futuros, eu defenderia desde o início uma arquitetura dimensionada para o escopo real, definida de forma colaborativa.',
              ],
            },
          ],
        },
      ],
      note: 'O nome do jogo foi omitido por confidencialidade.',
    },
  },
}
