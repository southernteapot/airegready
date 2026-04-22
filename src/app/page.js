import Hero from '@/components/Hero'
import CountdownStrip from '@/components/CountdownStrip'
import HomeFeaturedPosts from '@/components/HomeFeaturedPosts'
import Newsletter from '@/components/Newsletter'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'AIRegReady — AI Resources for Real-World Use',
  description:
    'Frameworks, assessments, and plain-English AI information for real-world use. Free readiness assessment, regulatory comparisons, and practical resources covering the EU AI Act, NIST AI RMF, U.S. state AI laws, and more.',
  path: '/',
})

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIRegReady',
    url: 'https://airegready.com',
    description:
      'AI resources, frameworks, and plain-English information for real-world use.',
    sameAs: [],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <CountdownStrip />
      <HomeFeaturedPosts />
      <Newsletter />
    </>
  )
}
