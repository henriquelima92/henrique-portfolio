import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects</h1>
        <p>Things I've built or contributed to, roughly in the order I made them.</p>
      </header>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={i + 1} {...project} />
        ))}
      </div>
    </>
  )
}
