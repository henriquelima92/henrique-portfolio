export default function ProjectCard({ index, title, description, tags, repoUrl, demoUrl }) {
  return (
    <article className="project-card">
      <span className="project-index">PROJECT / {String(index).padStart(2, '0')}</span>
      <h3>{title}</h3>
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
