import { getRegulation, getAllRegulationSlugs } from '@/lib/regulations'
import RegulationLayout from '@/components/RegulationLayout'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllRegulationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const regulation = getRegulation(slug)
  if (!regulation) return {}

  return {
    title: `${regulation.title} — Guide & Requirements`,
    description: regulation.description,
    alternates: {
      canonical: `https://airegready.com/regulations/${slug}`,
    },
    openGraph: {
      title: `${regulation.title} — AIRegReady`,
      description: regulation.description,
      url: `https://airegready.com/regulations/${slug}`,
    },
  }
}

export default async function RegulationPage({ params }) {
  const { slug } = await params
  const regulation = getRegulation(slug)
  if (!regulation) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${regulation.title} — Comprehensive Guide`,
    description: regulation.description,
    dateModified: new Date().toISOString().split('T')[0],
    publisher: {
      '@type': 'Organization',
      name: 'AIRegReady',
      url: 'https://airegready.com',
    },
    mainEntityOfPage: `https://airegready.com/regulations/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <RegulationLayout regulation={regulation} />
      </main>
    </>
  )
}
