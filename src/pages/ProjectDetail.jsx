import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import VideoEmbed from '../components/VideoEmbed.jsx'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  // The router keeps the scroll position between routes; start this page at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <header className="page-header">
        <p className="eyebrow">Not Found</p>
        <h1>Project not found</h1>
        <Link to="/projects" className="back-link">
          ← back to projects
        </Link>
      </header>
    )
  }

  const { title, description, details = [], tags, videoUrl, repoUrl, demoUrl } = project

  return (
    <>
      <header className="page-header">
        <Link to="/projects" className="back-link">
          ← all projects
        </Link>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="tag-row">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </header>
      <section className="project-detail">
        {videoUrl && <VideoEmbed url={videoUrl} title={title} />}
        {details.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {(repoUrl || demoUrl) && (
          <div className="project-detail-actions">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                play →
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                view repo →
              </a>
            )}
          </div>
        )}
      </section>
    </>
  )
}
