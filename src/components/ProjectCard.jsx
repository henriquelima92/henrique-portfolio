import { Link } from 'react-router-dom'

export default function ProjectCard({ index, slug, title, description, tags, repoUrl, demoUrl }) {
  return (
    <article className="project-card">
      <span className="project-index">PROJECT / {String(index).padStart(2, '0')}</span>
      <h3>
        {/* The ::after of this link stretches over the whole card, making it clickable. */}
        <Link to={`/projects/${slug}`} className="project-card-link">
          {title}
        </Link>
      </h3>
      <p>{description}</p>
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
            repo →
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer">
            play →
          </a>
        )}
      </div>
    </article>
  )
}
