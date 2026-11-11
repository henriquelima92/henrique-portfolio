import { Link } from 'react-router-dom'
import { contact } from '../data/contact.js'

export default function Home() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Game Developer / Software Engineer</p>
      <h1>{contact.name}</h1>
      <p className="hero-role">
        I build games and tools in Unity and C#, with a growing interest in web
        development. This site is itself one of my projects — replace this line
        with your own short pitch.
      </p>
      <div className="hero-actions">
        <Link to="/projects" className="btn btn-primary">
          view projects
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          get in touch
        </Link>
      </div>

      <div className="stat-panel">
        <div className="stat-item">
          <div className="stat-label">Role</div>
          <div className="stat-value">Game Developer</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Primary Stack</div>
          <div className="stat-value">C# · Unity</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Currently Learning</div>
          <div className="stat-value">React · Web Dev</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Based In</div>
          <div className="stat-value">{contact.city}, {contact.country}</div>
        </div>
      </div>
    </section>
  )
}
