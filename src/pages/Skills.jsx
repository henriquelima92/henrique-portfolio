import SkillBar from '../components/SkillBar.jsx'
import { skillGroups } from '../data/skills.js'
import { useLanguage } from '../i18n/context.js'

export default function Skills() {
  const { t, pick } = useLanguage()

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">{t('skills.eyebrow')}</p>
        <h1>{t('skills.title')}</h1>
        <p>{t('skills.intro')}</p>
      </header>
      <section className="skills-section">
        {skillGroups.map((group) => (
          <div className="skills-category" key={group.category.en ?? group.category}>
            <h2>{pick(group.category)}</h2>
            {group.skills.map((skill) => (
              <SkillBar key={skill.name.en ?? skill.name} name={pick(skill.name)} level={skill.level} />
            ))}
          </div>
        ))}
      </section>
    </>
  )
}
