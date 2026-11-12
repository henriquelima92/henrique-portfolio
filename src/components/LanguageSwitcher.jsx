import { useLanguage } from '../i18n/context.js'
import { languages } from '../data/strings.js'

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={t('nav.language')}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={code === lang ? 'active' : ''}
          aria-pressed={code === lang}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
