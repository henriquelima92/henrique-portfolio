import { contact } from '../data/contact.js'

// Last path segment of a profile URL, e.g. "https://github.com/foo/" -> "foo"
const handleFromUrl = (url) => url.replace(/\/+$/, '').split('/').pop()

// "5551981227149" -> "+55 51 98122-7149"
const formatPhone = (digits) =>
  digits.replace(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/, '+$1 $2 $3-$4')

export default function Contact() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Get In Touch</p>
        <h1>Contact</h1>
        <p>The best ways to reach me or find more of my work.</p>
      </header>
      <section className="contact-section">
        <div className="contact-links">
          <a className="contact-link" href={`mailto:${contact.email}`}>
            <span>Email</span>
            <span>{contact.email}</span>
          </a>
          <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <span>@{handleFromUrl(contact.github)}</span>
          </a>
          <a className="contact-link" href={contact.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <span>in/{handleFromUrl(contact.linkedin)}</span>
          </a>
          <a
            className="contact-link"
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <span>WhatsApp</span>
            <span>{formatPhone(contact.whatsapp)}</span>
          </a>
        </div>
      </section>
    </>
  )
}
