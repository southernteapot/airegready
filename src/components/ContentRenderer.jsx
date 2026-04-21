import Link from 'next/link'

function isInternalHref(href) {
  return href.startsWith('/')
}

function isHashHref(href) {
  return href.startsWith('#')
}

export function renderText(text) {
  if (!text) return null
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/)
    if (linkMatch) {
      const label = linkMatch[1]
      const href = linkMatch[2]

      if (isInternalHref(href)) {
        return (
          <Link
            key={i}
            href={href}
            className="text-accent underline decoration-accent/30 hover:decoration-accent transition-colors"
          >
            {label}
          </Link>
        )
      }

      if (isHashHref(href)) {
        return (
          <a
            key={i}
            href={href}
            className="text-accent underline decoration-accent/30 hover:decoration-accent transition-colors"
          >
            {label}
          </a>
        )
      }

      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/30 hover:decoration-accent transition-colors"
        >
          {label}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      )
    }

    const boldMatch = part.match(/^\*\*(.*?)\*\*$/)
    if (boldMatch) {
      return (
        <strong key={i} className="font-semibold text-primary">
          {boldMatch[1]}
        </strong>
      )
    }

    return part
  })
}

export function ContentBlock({ content }) {
  if (!content) return null
  return content.split("\n\n").map((p, i) => (
    <p
      key={i}
      className="font-sans text-sm text-secondary leading-relaxed mb-4 last:mb-0"
    >
      {renderText(p)}
    </p>
  ))
}
