import { contact } from '../data/contact.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>
        © {year} {contact.name}
      </p>
    </footer>
  )
}
