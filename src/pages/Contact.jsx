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
          <a className="contact-link" href="mailto:you@example.com">
            <span>Email</span>
            <span>you@example.com</span>
          </a>
          <a
            className="contact-link"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span>@yourusername</span>
          </a>
          <a
            className="contact-link"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <span>in/yourusername</span>
          </a>
        </div>
      </section>
    </>
  )
}
