import Hero from '@/components/Hero'
import CountdownStrip from '@/components/CountdownStrip'
import TrustStrip from '@/components/TrustStrip'
import HowItWorks from '@/components/HowItWorks'
import WhySection from '@/components/WhySection'
import ResourcesSection from '@/components/ResourcesSection'
import AssessmentTool from '@/components/AssessmentTool'
import GuideSection from '@/components/GuideSection'
import ToolsTeaser from '@/components/ToolsTeaser'
import BlogSection from '@/components/BlogSection'
import FAQSection from '@/components/FAQSection'
import Newsletter from '@/components/Newsletter'
import { FAQ_ITEMS } from '@/lib/data'

export const metadata = {
  title: 'AIRegReady — AI Resources for Real-World Use',
  description:
    'Frameworks, assessments, and plain-English AI information for real-world use. Free readiness assessment, regulatory comparisons, and practical resources covering the EU AI Act, NIST AI RMF, U.S. state AI laws, and more.',
  openGraph: {
    title: 'AIRegReady — AI Resources for Real-World Use',
    description:
      'Frameworks, assessments, and plain-English AI information. Free readiness tools, regulatory comparisons, and practical resources.',
  },
}

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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <CountdownStrip />
      <TrustStrip />
      <HowItWorks />
      <WhySection />
      <ResourcesSection />
      <AssessmentTool />
      <GuideSection />
      <ToolsTeaser />
      <BlogSection />
      <FAQSection />
      <Newsletter />
    </>
  )
}
