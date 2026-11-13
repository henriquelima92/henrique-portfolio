import TimelineItem from '../components/TimelineItem.jsx'
import { experience } from '../data/experience.js'
import { useLanguage } from '../i18n/context.js'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">{t('experience.eyebrow')}</p>
        <h1>{t('experience.title')}</h1>
        <p>{t('experience.intro')}</p>
      </header>
      <section className="timeline-section">
        <ol className="timeline">
          {experience.map((job) => (
            <TimelineItem
              key={`${job.company}-${job.start}`}
              title={job.role}
              organization={job.company}
              location={job.location}
              start={job.start}
              end={job.end}
              summary={job.summary}
              highlights={job.highlights}
              projects={job.projects}
            />
          ))}
        </ol>
      </section>
    </>
  )
}
