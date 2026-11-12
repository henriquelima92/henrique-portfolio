import { contact } from '../data/contact.js'
import { useLanguage } from '../i18n/context.js'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>
        © {year} {contact.name} — {t('footer.builtWith')}
      </p>
    </footer>
  )
}
