// One file per project in this folder; this list sets the order they appear in.
//
// Each project file exports:
//   slug      page URL (#/projects/<slug>); lowercase, dashes, unique
//   title     plain string for both languages, or { en, 'pt-BR' }
//   tags      short tech/tool names
//   videoUrl  youtube.com link, or '' for no video
//   repoUrl / demoUrl   '' hides the link
//   demoLabel optional { en, 'pt-BR' } text for the demo link (default: "play →")
//   content   { en, 'pt-BR' }, each with:
//     description  summary shown on the card and under the page title
//     sections     [{ heading, paragraphs: [...], subsections?: [{ heading, paragraphs, items? }] }]
//                  items: optional list of { heading, text }, shown as labelled bullet points
//     note         optional closing note shown after the sections (e.g. servers shut down)
import muiraquita from './muiraquita.js'
import bitmadness from './bitmadness.js'
import piggyHunt from './piggy-hunt.js'
import rapalaFishing from './rapala-fishing.js'
import mobileStrategyGame from './mobile-strategy-game.js'

export const projects = [muiraquita, bitmadness, piggyHunt, rapalaFishing, mobileStrategyGame]
