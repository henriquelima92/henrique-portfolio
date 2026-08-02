export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} Your Name — built with React, deployed on GitHub Pages</p>
    </footer>
  )
}
