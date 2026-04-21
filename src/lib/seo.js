export const SITE_URL = 'https://airegready.com'

function normalizePath(path = '/') {
  if (!path) return '/'
  return path.startsWith('/') ? path : `/${path}`
}

export function absoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${SITE_URL}${normalizePath(path)}`
}

export function buildSocialImage(path, title) {
  return {
    url: absoluteUrl(path),
    width: 1200,
    height: 630,
    alt: title,
  }
}

export function buildPageMetadata({
  title,
  description,
  path,
  imagePath = '/opengraph-image',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
}) {
  const canonical = absoluteUrl(path)
  const image = buildSocialImage(imagePath, title)

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'AIRegReady',
      locale: 'en_US',
      type,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(section ? { section } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  }
}
