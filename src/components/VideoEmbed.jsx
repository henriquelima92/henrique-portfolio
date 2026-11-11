// Turns a YouTube/Vimeo page link into an embed URL, or recognises a direct video file.
function parseVideo(url) {
  let u
  try {
    u = new URL(url)
  } catch {
    return null
  }
  const host = u.hostname.replace(/^(www\.|m\.)/, '')

  if (host === 'youtu.be') {
    return { kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}` }
  }
  if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    const id =
      u.searchParams.get('v') || u.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1]
    if (id) return { kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${id}` }
  }
  if (host === 'vimeo.com' || host === 'player.vimeo.com') {
    const id = u.pathname.match(/(\d+)/)?.[1]
    if (id) return { kind: 'iframe', src: `https://player.vimeo.com/video/${id}` }
  }
  if (/\.(mp4|webm|ogg|mov)$/i.test(u.pathname)) {
    return { kind: 'file', src: url }
  }
  return null
}

export default function VideoEmbed({ url, title }) {
  const video = parseVideo(url)

  // Unrecognised link: still offer it, just not embedded.
  if (!video) {
    return (
      <a className="video-fallback" href={url} target="_blank" rel="noreferrer">
        watch video →
      </a>
    )
  }

  return (
    <div className="video-frame">
      {video.kind === 'iframe' ? (
        <iframe
          src={video.src}
          title={`${title} video`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <video src={video.src} controls preload="metadata" />
      )}
    </div>
  )
}
