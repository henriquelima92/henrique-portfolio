import { resumes } from '../data/resume.js'
import { useLanguage } from '../i18n/context.js'

export default function Resume() {
  const { lang, t, pick } = useLanguage()

  // Offer the resume in the site's current language first.
  const ordered = [...resumes].sort((a, b) => (b.lang === lang) - (a.lang === lang))

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">{t('resume.eyebrow')}</p>
        <h1>{t('resume.title')}</h1>
        <p>{t('resume.intro')}</p>
      </header>
      <section className="contact-section">
        <div className="contact-links">
          {ordered.map(({ lang: code, label, file }) =>
            file ? (
              <a
                key={code}
                className="contact-link"
                // BASE_URL is the site's base path ('/henrique-portfolio/'), so this works on GitHub Pages.
                href={`${import.meta.env.BASE_URL}${file}`}
                download
              >
                <span>{pick(label)} · PDF</span>
                <span>{t('resume.download')}</span>
              </a>
            ) : (
              <div key={code} className="contact-link is-disabled">
                <span>{pick(label)} · PDF</span>
                <span>{t('resume.comingSoon')}</span>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  )
}
