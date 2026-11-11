import { contact } from '../data/contact.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} {contact.name} — built with React, deployed on GitHub Pages</p>
    </footer>
  )
}
