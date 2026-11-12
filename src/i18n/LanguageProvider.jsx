import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './context.js'
import { languages, strings } from '../data/strings.js'
import { contact } from '../data/contact.js'

const STORAGE_KEY = 'language'
const DEFAULT_LANG = 'en'
const isSupported = (code) => languages.some((l) => l.code === code)

// Saved choice first, then the browser's language, then English.
function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isSupported(saved)) return saved
  } catch {
    // storage blocked (private mode etc.): fall through
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt-BR' : DEFAULT_LANG
}

const lookup = (lang, key) =>
  key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), strings[lang])

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLanguage)

  const setLang = useCallback((code) => {
    if (!isSupported(code)) return
    setLangState(code)
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {
      // not persisted, but the switch still works for this visit
    }
  }, [])

  const t = useCallback(
    (key, vars = {}) => {
      const text = lookup(lang, key) ?? lookup(DEFAULT_LANG, key) ?? key
      return text.replace(/\{(\w+)\}/g, (match, name) => vars[name] ?? match)
    },
    [lang],
  )

  const pick = useCallback(
    (value) =>
      value && typeof value === 'object' && !Array.isArray(value)
        ? value[lang] ?? value[DEFAULT_LANG]
        : value,
    [lang],
  )

  // Keep <html lang>, the tab title and the meta description in the current language.
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = `${contact.name} — ${t('meta.titleRole')}`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description', { name: contact.name }))
  }, [lang, t])

  const value = useMemo(() => ({ lang, setLang, t, pick }), [lang, setLang, t, pick])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
