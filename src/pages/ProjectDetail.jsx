import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import VideoEmbed from '../components/VideoEmbed.jsx'
import { projects } from '../data/projects/index.js'
import { useLanguage } from '../i18n/context.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, pick } = useLanguage()
  const project = projects.find((p) => p.slug === slug)

  // The router keeps the scroll position between routes; start this page at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <header className="page-header">
        <p className="eyebrow">{t('projects.notFoundEyebrow')}</p>
        <h1>{t('projects.notFoundTitle')}</h1>
        <Link to="/projects" className="back-link">
          {t('projects.backToProjects')}
        </Link>
      </header>
    )
  }

  const { tags, videoUrl, repoUrl, demoUrl, demoLabel } = project
  const title = pick(project.title)
  const { description, sections = [], note } = pick(project.content)

  return (
    <>
      <header className="page-header">
        <Link to="/projects" className="back-link">
          {t('projects.allProjects')}
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
        {sections.map((section) => (
          <div className="project-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {section.subsections?.map((sub) => (
              <div className="project-subsection" key={sub.heading}>
                <h3>{sub.heading}</h3>
                {sub.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {sub.items && (
                  <ul className="project-items">
                    {sub.items.map((item) => (
                      <li key={item.heading}>
                        <span className="project-item-heading">{item.heading}.</span> {item.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
        {note && <p className="project-note">{note}</p>}
        {(repoUrl || demoUrl) && (
          <div className="project-detail-actions">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                {pick(demoLabel) ?? t('projects.play')}
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                {t('projects.viewRepo')}
              </a>
            )}
          </div>
        )}
      </section>
    </>
  )
}
