export default function SkillBar({ name, level }) {
  // level: 0-100, represents relative day-to-day fluency, not a formal certification score
  return (
    <div className="skill-row">
      <span className="skill-name">{name}</span>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}
