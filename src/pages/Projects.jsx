import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { useLanguage } from '../i18n/context.js'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">{t('projects.eyebrow')}</p>
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.intro')}</p>
      </header>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </>
  )
}
