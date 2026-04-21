import { getRegulation, getAllRegulationSlugs } from '@/lib/regulations'
import { getArticlesForRegulation } from '@/lib/articles'
import RegulationLayout from '@/components/RegulationLayout'
import { buildPageMetadata } from '@/lib/seo'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllRegulationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const regulation = getRegulation(slug)
  if (!regulation) return {}

  return buildPageMetadata({
    title: `${regulation.title} — Guide & Requirements`,
    description: regulation.description,
    path: `/regulations/${slug}`,
    imagePath: `/regulations/${slug}/opengraph-image`,
    type: 'article',
    modifiedTime: regulation.lastReviewedIso,
    section: 'AI Regulation',
  })
}

export default async function RegulationPage({ params }) {
  const { slug } = await params
  const regulation = getRegulation(slug)
  if (!regulation) notFound()

  const relatedArticles = getArticlesForRegulation(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${regulation.title} — Comprehensive Guide`,
    description: regulation.description,
    ...(regulation.lastReviewedIso ? { dateModified: regulation.lastReviewedIso } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'AIRegReady',
      url: 'https://airegready.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://airegready.com/regulations/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RegulationLayout regulation={regulation} relatedArticles={relatedArticles} />
    </>
  )
}
