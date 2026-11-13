export default {
  slug: 'rapala-fishing',
  title: 'Rapala',
  tags: ['Unity', 'C#', 'Mobile', 'Beamable'],
  videoUrl: 'https://www.youtube.com/watch?v=d2Sd3o_jpDY',
  repoUrl: '',
  demoUrl: '',

  content: {
    en: {
      description:
        "A fishing simulation game for Android and iOS, built in Unity for a client partnered with Rapala, one of the world's best-known fishing brands. The project started at Oktagon Games and was completed in 2023, after Oktagon was acquired by Fortis. I was one of the programmers, focusing on the metagame, backend integration and UI.",
      sections: [
        {
          heading: 'About the project',
          paragraphs: [
            'The game brings sport fishing to mobile: players battle fish to land their catch, upgrade their gear and move through a progression system designed for short sessions and frequent return visits, as is typical on mobile.',
            'It was developed in partnership with a client linked to the Rapala brand, by a team of 20 to 30 people across nearly every discipline: programmers, backend developers, game designers, UI artists, UX, animators and audio. Partway through development, Oktagon was acquired by Fortis, and the project continued through to completion under the new structure.',
          ],
        },
        {
          heading: 'My work and lessons learned',
          paragraphs: [
            'I worked mainly on the metagame, the progression layer and systems surrounding the fishing itself. I built the equipment upgrade mechanic, the backend integration and much of the UI, and also made adjustments to the core fish-fighting gameplay.',
          ],
          subsections: [
            {
              heading: 'Growing with Beamable',
              paragraphs: [
                "The game's backend also ran on Beamable, a platform I had already integrated on PIGGY: Hunt. Coming into the project already knowing the tool sped up our work considerably, and as the platform matured we were able to improve our own integration too. One example was the data pipeline between spreadsheets and the game: the same issue we had faced on PIGGY: Hunt came up again early on, but this time it was solved with the new tuning data model Beamable had introduced.",
              ],
            },
            {
              heading: "What I'd do differently",
              paragraphs: [
                "We ran into some issues integrating the Facebook SDK and configuring permissions, since access to those accounts and settings depended on the client. On a future project, I would push for the development team to have direct control over these integrations, so technical adjustments wouldn't be blocked waiting on third parties.",
              ],
            },
          ],
        },
      ],
      note: 'Unfortunately, the game is no longer available on the Play Store or the App Store.',
    },

    'pt-BR': {
      description:
        'Jogo de simulação de pesca para Android e iOS, desenvolvido em Unity para um cliente parceiro da Rapala, uma das marcas de pesca mais conhecidas do mundo. O projeto começou na Oktagon Games e foi finalizado em 2023, já depois da aquisição da Oktagon pela Fortis. Atuei como um dos programadores, com foco no metagame, na integração com o backend e na UI.',
      sections: [
        {
          heading: 'Sobre o projeto',
          paragraphs: [
            'O jogo leva a experiência da pesca esportiva para o celular: o jogador enfrenta os peixes em batalhas de captura, evolui seus equipamentos e avança por um sistema de progressão pensado para sessões curtas e retorno frequente, como é típico do mobile.',
            'O desenvolvimento foi feito em parceria com um cliente ligado à marca Rapala, por um time de 20 a 30 pessoas de praticamente todas as áreas: programadores, desenvolvedores de backend, game designers, artistas de UI, UX, animadores e áudio. No meio do caminho, a Oktagon foi adquirida pela Fortis, e o projeto seguiu até a conclusão sob a nova estrutura.',
          ],
        },
        {
          heading: 'Meu trabalho e aprendizados',
          paragraphs: [
            'Trabalhei principalmente no metagame, a camada de progressão e sistemas em volta da pesca. Desenvolvi a mecânica de aprimoramento de equipamentos, a integração com o backend e boa parte da UI. Também fiz ajustes no core da batalha contra o peixe.',
          ],
          subsections: [
            {
              heading: 'Evolução com a Beamable',
              paragraphs: [
                'O backend do jogo também usava a Beamable, plataforma que eu já tinha integrado no PIGGY: Hunt. Chegar ao projeto conhecendo a ferramenta acelerou bastante o trabalho, e acompanhar o amadurecimento da plataforma nos permitiu melhorar também a nossa própria integração. Um exemplo foi o pipeline de dados entre planilhas e jogo: o problema que já tínhamos enfrentado no PIGGY: Hunt voltou a aparecer no início, mas foi resolvido com o novo modelo de tuning data que a Beamable passou a oferecer.',
              ],
            },
            {
              heading: 'O que eu faria diferente',
              paragraphs: [
                'Tivemos alguns problemas na integração do SDK do Facebook e na configuração de permissões, porque o acesso a essas contas e configurações dependia do cliente. Em um próximo projeto, eu buscaria que o time de desenvolvimento tivesse controle direto sobre essas integrações, evitando que ajustes técnicos ficassem bloqueados esperando terceiros.',
              ],
            },
          ],
        },
      ],
      note: 'Infelizmente, o jogo não está mais disponível na Play Store nem na App Store.',
    },
  },
}
