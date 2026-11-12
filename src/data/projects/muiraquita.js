export default {
  slug: 'muiraquita',
  title: 'Muiraquitã',
  tags: ['Unity', 'C#', 'VR', 'Android'],
  videoUrl: 'https://www.youtube.com/watch?v=xF2jNIqDlL4',
  repoUrl: '',
  demoUrl: '',

  content: {
    en: {
      description:
        'An educational virtual reality game for Android (Samsung Gear VR) that trains UNA-SUS/UFCSPA students and doctors in primary healthcare, set in a riverside community in rural Pará, Brazil. Winner of 1st place in the Serious Games category at SBGames 2018. I was the lead programmer and developer, responsible for the full technical implementation and for mentoring an intern.',
      sections: [
        {
          heading: 'About the project',
          paragraphs: [
            'Muiraquitã was developed in 2018 as part of a UNA-SUS project at UFCSPA (Federal University of Health Sciences of Porto Alegre), to support the training of healthcare professionals working in remote regions of Brazil. Instead of studying clinical cases on paper, players step into a riverside community in the Amazon state of Pará, where they explore the environment, talk to residents, take patient histories and decide on treatments.',
            'The goal was to use the immersion of virtual reality to bring students closer to a reality many of them had never experienced: the daily life, constraints and specific challenges of providing care far from major urban centers. The game was built by a multidisciplinary team: two game designers (one also handling audio), an artist/animator, two programmers (myself and an intern), and a medical student who helped develop the clinical content.',
            "We presented the game at SBGames 2018 (Brazilian Symposium on Computer Games and Digital Entertainment), Latin America's largest academic games conference, held in Foz do Iguaçu, Paraná, where it won first place in the Serious Games category.",
          ],
        },
        {
          heading: 'My work and technical challenges',
          paragraphs: [
            'I was responsible for the full development of the game in Unity: integrating the Samsung Gear VR, all NPC interaction logic, the save/load systems, and the interactive narrative built with Fungus. I also built custom ScriptableObject editors to organize gameplay data, making it easier for the team to structure and adjust content.',
          ],
          subsections: [
            {
              heading: 'Comfortable locomotion',
              paragraphs: [
                "The most interesting challenge was combining the Gear VR controller input with the camera's orbital movement without causing motion sickness. After testing several approaches, we found the root cause was continuous camera movement that the player's body couldn't feel. The solution was a point-and-click locomotion system: the player points to where they want to go and the character is repositioned through a fade-out/fade-in transition, with no visible movement. This eliminated the discomfort and made exploration comfortable even during longer sessions.",
              ],
            },
            {
              heading: 'Mobile VR performance',
              paragraphs: [
                'Rendering an environment full of characters and scenery on a phone, twice (once per eye), required serious optimization. We cut asset weight and reduced draw calls by combining textures into atlases, keeping the frame rate stable, which is essential for comfort in VR.',
              ],
            },
            {
              heading: "What I'd do differently",
              paragraphs: [
                'Mobile VR in 2018 was quite limited, and much of the complexity came from working around those limits. Looking back, I would simplify the systems we built considerably, with fewer layers and more direct solutions, making the project easier to maintain and extend.',
              ],
            },
          ],
        },
      ],
    },

    'pt-BR': {
      description:
        'Jogo educativo em realidade virtual para Android (Samsung Gear VR) que treina alunos e médicos da UNA-SUS/UFCSPA no atendimento inicial de saúde, em uma comunidade ribeirinha no interior do Pará. Vencedor do 1º lugar na categoria Serious Games da SBGames 2018. Atuei como programador e desenvolvedor principal, responsável por toda a implementação técnica e pela orientação de um estagiário.',
      sections: [
        {
          heading: 'Sobre o projeto',
          paragraphs: [
            'Muiraquitã foi desenvolvido em 2018 como parte de um projeto da UNA-SUS da UFCSPA, para apoiar a formação de profissionais de saúde que atuam em regiões remotas do Brasil. Em vez de estudar casos clínicos no papel, o jogador entra em uma comunidade ribeirinha no Pará, explora o ambiente, conversa com os moradores, faz a anamnese dos pacientes e define os tratamentos.',
            'A proposta era usar a imersão da realidade virtual para aproximar o aluno de um contexto que muitos nunca viveram: a rotina, as limitações e as particularidades do atendimento fora dos grandes centros. O projeto foi feito por uma equipe multidisciplinar: dois game designers (um deles também responsável pelo áudio), um artista e animador, dois programadores (eu e um estagiário) e um aluno de medicina que ajudou a construir o conteúdo clínico.',
            'Levamos o jogo para a SBGames 2018, o maior evento acadêmico de jogos digitais da América Latina, realizada em Foz do Iguaçu (PR), onde conquistamos o primeiro lugar na categoria Serious Games.',
          ],
        },
        {
          heading: 'Meu trabalho e desafios técnicos',
          paragraphs: [
            'Fui responsável pelo desenvolvimento completo do jogo em Unity: a integração com o Samsung Gear VR, toda a lógica de interação com NPCs, os sistemas de save/load e a narrativa interativa usando o Fungus. Também criei editores customizados de ScriptableObjects para organizar a gameplay, o que permitiu à equipe estruturar e ajustar o conteúdo com mais facilidade.',
          ],
          subsections: [
            {
              heading: 'Locomoção sem enjoo',
              paragraphs: [
                'O desafio mais interessante foi combinar o controle do Gear VR com o movimento orbital da câmera sem causar motion sickness. Testamos várias abordagens e percebemos que o problema estava no movimento contínuo da câmera, que o corpo do jogador não sente. A solução foi um sistema de locomoção por apontar e clicar: o jogador indica para onde quer ir e o personagem é reposicionado com uma transição de fade out/fade in, sem nenhum deslocamento visível. Isso eliminou o enjoo e tornou a exploração confortável mesmo em sessões mais longas.',
              ],
            },
            {
              heading: 'Desempenho em VR mobile',
              paragraphs: [
                'Rodar um ambiente com muitos personagens e elementos de cenário em um celular, renderizando para os dois olhos, exigiu bastante otimização. Reduzimos o peso dos assets e a quantidade de draw calls combinando texturas em atlas, o que manteve a taxa de quadros estável, algo essencial para o conforto em VR.',
              ],
            },
            {
              heading: 'O que eu faria diferente',
              paragraphs: [
                'A tecnologia de VR mobile em 2018 era bem limitada, e parte da complexidade veio de contornar essas limitações. Olhando hoje, eu simplificaria bastante os sistemas que construímos: menos camadas e soluções mais diretas, o que facilitaria a manutenção e a evolução do projeto.',
              ],
            },
          ],
        },
      ],
    },
  },
}
