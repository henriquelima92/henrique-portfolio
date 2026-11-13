import TimelineItem from '../components/TimelineItem.jsx'
import { courses, degrees, spokenLanguages } from '../data/education.js'
import { useLanguage } from '../i18n/context.js'
import { formatDate } from '../i18n/format.js'

export default function Education() {
  const { lang, t, pick } = useLanguage()

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">{t('education.eyebrow')}</p>
        <h1>{t('education.title')}</h1>
        <p>{t('education.intro')}</p>
      </header>

      <section className="timeline-section">
        <h2 className="section-label">{t('education.degrees')}</h2>
        <ol className="timeline">
          {degrees.map((d) => (
            <TimelineItem
              key={d.school}
              title={d.degree}
              organization={d.school}
              location={d.location}
              start={d.start}
              end={d.end}
              summary={d.summary}
              projects={d.projects}
            />
          ))}
        </ol>
      </section>

      <section className="timeline-section">
        <h2 className="section-label">{t('education.courses')}</h2>
        <ul className="course-list">
          {courses.map((c) => (
            <li key={`${pick(c.title)}-${c.date}`} className="course">
              <span className="course-title">{pick(c.title)}</span>
              <span className="course-meta">
                {c.provider} · {formatDate(c.date, lang)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="timeline-section">
        <h2 className="section-label">{t('education.languages')}</h2>
        <ul className="course-list">
          {spokenLanguages.map((l) => (
            <li key={l.name.en} className="course">
              <span className="course-title">{pick(l.name)}</span>
              <span className="course-meta">{pick(l.level)}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
