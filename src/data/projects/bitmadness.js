export default {
  slug: 'bitmadness',
  title: 'Bitmadness',
  tags: ['Unity', 'C#', 'PC'],
  videoUrl: 'https://www.youtube.com/watch?v=hjUX7h1n-Kw',
  repoUrl: '',
  demoUrl: '',

  content: {
    en: {
      description:
        "A 3D puzzle game for PC where players link connectors to close a circuit between two points. Built in Unity as my final project for a postgraduate program at PUCRS and selected for the student games showcase at SBGames 2018. I was the lead programmer, responsible for all of the game's systems.",
      sections: [
        {
          heading: 'About the project',
          paragraphs: [
            'Bitmadness started as the final project for my postgraduate program at PUCRS (Pontifical Catholic University of Rio Grande do Sul), built around a simple idea: the player explores the environment and connects pieces to form a closed circuit between point A and point B. Every connection changes the path of the energy, and solving each level means thinking carefully about the order and placement of each connector.',
            'The game was made for puzzle lovers, with no educational goal, focused entirely on fun and challenge. The team was three classmates from the same program: me as lead programmer, a second programmer in a supporting role, and an artist who created the 3D models and textures.',
            'We brought Bitmadness to the student games showcase at SBGames 2018 (Brazilian Symposium on Computer Games and Digital Entertainment) in Foz do Iguaçu, Paraná. Our booth drew a big crowd, and visitors even started an informal competition to see who could finish the game the fastest, a great sign that the core mechanic was engaging.',
          ],
        },
        {
          heading: 'My work and lessons learned',
          paragraphs: [
            "I developed all of the game's systems: character movement, object interaction, the door system, cameras, audio and tutorials. Since the project had a small, well-defined scope, development went smoothly without major technical roadblocks.",
          ],
          subsections: [
            {
              heading: "What I'd do differently",
              paragraphs: [
                "Two decisions worked well for a project this size but wouldn't scale:",
              ],
              items: [
                {
                  heading: 'Connection detection',
                  text: "Checking which connectors were linked relied entirely on Unity's physics. It worked, but with more levels and pieces it would become fragile and expensive. Today I would model the circuit as a graph and check the connection between A and B with plain logic, without depending on collisions.",
                },
                {
                  heading: 'Level structure',
                  text: 'Each level was a separate Unity scene, so every new level increased the size of the executable. A better approach would be to describe levels as data (for example, ScriptableObjects or JSON) and load them into a single scene, making the game lighter and new levels easier to create.',
                },
              ],
            },
          ],
        },
      ],
    },

    'pt-BR': {
      description:
        'Jogo de puzzle 3D para PC em que o jogador precisa ligar conectores para fechar um circuito entre dois pontos. Desenvolvido em Unity como projeto final da pós-graduação na PUCRS e selecionado para a mostra de jogos de estudantes da SBGames 2018. Atuei como programador principal, responsável por todos os sistemas do jogo.',
      sections: [
        {
          heading: 'Sobre o projeto',
          paragraphs: [
            'Bitmadness nasceu como projeto final da pós-graduação na PUCRS, com uma ideia simples: o jogador explora o ambiente e conecta peças para formar um circuito fechado entre o ponto A e o ponto B. Cada conexão muda o caminho da energia, e resolver a fase exige pensar na ordem e na posição de cada conector.',
            'O jogo foi feito para quem gosta de puzzles, sem propósito educativo, com foco total em diversão e desafio. A equipe tinha três colegas da mesma turma: eu como programador principal, um segundo programador dando suporte e uma artista responsável pelos modelos 3D e texturas.',
            'Levamos o Bitmadness para a mostra de jogos de estudantes da SBGames 2018, em Foz do Iguaçu (PR). O estande atraiu bastante público, e os próprios visitantes acabaram criando uma competição informal para ver quem completava o jogo mais rápido, um ótimo sinal de que a mecânica era envolvente.',
          ],
        },
        {
          heading: 'Meu trabalho e aprendizados',
          paragraphs: [
            'Desenvolvi todos os sistemas do jogo: movimentação do personagem, interação com objetos, sistema de portas, câmeras, áudio e tutoriais. Por ser um projeto de escopo pequeno e bem definido, o desenvolvimento correu sem grandes obstáculos técnicos.',
          ],
          subsections: [
            {
              heading: 'O que eu faria diferente',
              paragraphs: [
                'Duas decisões funcionaram bem para o tamanho do projeto, mas não escalariam:',
              ],
              items: [
                {
                  heading: 'Detecção de conexões',
                  text: 'A verificação de quais conectores estavam ligados foi feita inteiramente com a física da Unity. Funcionou bem, mas com mais fases e peças se tornaria frágil e custosa. Hoje eu modelaria o circuito como um grafo, verificando a conexão entre A e B por lógica, sem depender de colisões.',
                },
                {
                  heading: 'Estrutura das fases',
                  text: 'Cada fase era uma cena separada da Unity, então cada nova fase aumentava o tamanho do executável. O ideal seria descrever as fases como dados (por exemplo, em ScriptableObjects ou JSON) e carregá-las em uma única cena, o que deixaria o jogo mais leve e facilitaria a criação de novos níveis.',
                },
              ],
            },
          ],
        },
      ],
    },
  },
}
