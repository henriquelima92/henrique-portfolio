import { useLanguage } from '../i18n/context.js'

// Turns a youtube.com link (watch?v=, /embed/, /shorts/) into an embed URL.
function youtubeEmbedUrl(url) {
  let u
  try {
    u = new URL(url)
  } catch {
    return null
  }
  if (u.hostname.replace(/^(www\.|m\.)/, '') !== 'youtube.com') return null

  const id = u.searchParams.get('v') || u.pathname.match(/^\/(?:embed|shorts)\/([^/?]+)/)?.[1]
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null
}

export default function VideoEmbed({ url, title }) {
  const { t } = useLanguage()
  const src = youtubeEmbedUrl(url)

  // Not a youtube.com link: still offer it, just not embedded.
  if (!src) {
    return (
      <a className="video-fallback" href={url} target="_blank" rel="noreferrer">
        {t('projects.watchVideo')}
      </a>
    )
  }

  return (
    <div className="video-frame">
      <iframe
        src={src}
        title={t('projects.videoTitle', { title })}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
