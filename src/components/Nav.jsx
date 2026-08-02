import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">~/your-name</span>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
              skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
