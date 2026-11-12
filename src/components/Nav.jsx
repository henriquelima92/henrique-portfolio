import { NavLink } from 'react-router-dom'
import { contact } from '../data/contact.js'
import { useLanguage } from '../i18n/context.js'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const links = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/projects', key: 'nav.projects' },
  { to: '/skills', key: 'nav.skills' },
  { to: '/resume', key: 'nav.resume' },
  { to: '/contact', key: 'nav.contact' },
]

export default function Nav() {
  const { t } = useLanguage()

  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">~/{contact.name.toLowerCase().replace(/\s+/g, '-')}</span>
        <ul className="nav-links">
          {links.map(({ to, key, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
                {t(key)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Outside .nav-inner so it can sit at the screen's right edge, not the content's. */}
      <LanguageSwitcher />
    </nav>
  )
}
