import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/context.js'

export default function ProjectCard({ index, slug, title, description, tags, repoUrl, demoUrl }) {
  const { t, pick } = useLanguage()

  return (
    <article className="project-card">
      <span className="project-index">
        {t('projects.cardIndex')} / {String(index).padStart(2, '0')}
      </span>
      <h3>
        {/* The ::after of this link stretches over the whole card, making it clickable. */}
        <Link to={`/projects/${slug}`} className="project-card-link">
          {pick(title)}
        </Link>
      </h3>
      <p>{pick(description)}</p>
      <div className="tag-row">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noreferrer">
            {t('projects.repo')}
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer">
            {t('projects.play')}
          </a>
        )}
      </div>
    </article>
  )
}
