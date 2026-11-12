import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { useLanguage } from '../i18n/context.js'

export default function Home() {
  const { t, pick } = useLanguage()

  return (
    <section className="hero">
      <p className="hero-eyebrow">{t('home.eyebrow')}</p>
      <h1>{contact.name}</h1>
      <p className="hero-role">{t('home.pitch')}</p>
      <div className="hero-actions">
        <Link to="/projects" className="btn btn-primary">
          {t('home.viewProjects')}
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          {t('home.getInTouch')}
        </Link>
      </div>

      <div className="stat-panel">
        <div className="stat-item">
          <div className="stat-label">{t('home.roleLabel')}</div>
          <div className="stat-value">{t('home.roleValue')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">{t('home.stackLabel')}</div>
          <div className="stat-value">C# · Unity</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">{t('home.learningLabel')}</div>
          <div className="stat-value">{t('home.learningValue')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">{t('home.basedInLabel')}</div>
          <div className="stat-value">
            {contact.city}, {pick(contact.country)}
          </div>
        </div>
      </div>
    </section>
  )
}
