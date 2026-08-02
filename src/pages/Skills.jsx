import SkillBar from '../components/SkillBar.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Competencies</p>
        <h1>Skills</h1>
        <p>A rough sense of where I'm strongest and where I'm actively growing.</p>
      </header>
      <section className="skills-section">
        {skillGroups.map((group) => (
          <div className="skills-category" key={group.category}>
            <h2>{group.category}</h2>
            {group.skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        ))}
      </section>
    </>
  )
}
