import { createContext, useContext } from 'react'

export const LanguageContext = createContext(null)

// Returns { lang, setLang, t, pick }:
//   t('home.eyebrow')            -> interface text from src/data/strings.js
//   pick(project.description)    -> the current language from an { en, 'pt-BR' } value
export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return value
}
