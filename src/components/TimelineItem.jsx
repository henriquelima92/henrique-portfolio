import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/context.js'
import { formatDate } from '../i18n/format.js'
import { projects as allProjects } from '../data/projects/index.js'

// One entry of a timeline (a job or a degree).
export default function TimelineItem({ title, organization, location, start, end, summary, highlights, projects = [] }) {
  const { lang, t, pick } = useLanguage()
  const linked = projects.map((slug) => allProjects.find((p) => p.slug === slug)).filter(Boolean)
  const points = pick(highlights) ?? []

  return (
    <li className="timeline-item">
      <p className="timeline-dates">
        {formatDate(start, lang)} – {end ? formatDate(end, lang) : t('timeline.present')}
      </p>
      <div className="timeline-body">
        <h2>{pick(title)}</h2>
        <p className="timeline-org">
          {organization}
          {location && ` · ${location}`}
        </p>
        {summary && <p>{pick(summary)}</p>}
        {points.length > 0 && (
          <ul className="timeline-highlights">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {linked.length > 0 && (
          <p className="timeline-projects">
            <span>{t('timeline.relatedProjects')}</span>
            {linked.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="tag">
                {pick(p.title)}
              </Link>
            ))}
          </p>
        )}
      </div>
    </li>
  )
}
