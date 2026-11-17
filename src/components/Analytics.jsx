import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Sends a GoatCounter page view on every route change. The script tag in
// index.html is loaded with `no_onload`, so it never counts on its own: with
// HashRouter its default path would always be "/" (it ignores the #fragment).
// GoatCounter skips localhost by itself, so the dev server isn't counted.
export default function Analytics() {
  const { pathname } = useLocation()

  useEffect(() => {
    const send = () => window.goatcounter.count({ path: pathname })

    if (window.goatcounter?.count) {
      send()
      return undefined
    }

    // First load: the async script may not have run yet.
    const script = document.querySelector('script[data-goatcounter]')
    script?.addEventListener('load', send, { once: true })
    return () => script?.removeEventListener('load', send)
  }, [pathname])

  return null
}
