import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import HowItWorks from '@/components/HowItWorks'
import GuideSection from '@/components/GuideSection'
import AssessmentTool from '@/components/AssessmentTool'
import BlogSection from '@/components/BlogSection'
import WhySection from '@/components/WhySection'
import FAQSection from '@/components/FAQSection'
import ToolsTeaser from '@/components/ToolsTeaser'
import Newsletter from '@/components/Newsletter'
import { FAQ_ITEMS } from '@/lib/data'

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIRegReady',
    url: 'https://airegready.com',
    description:
      'Practical AI regulatory guidance for organizations navigating compliance across jurisdictions.',
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
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <GuideSection />
        <AssessmentTool />
        <BlogSection />
        <WhySection />
        <FAQSection />
        <ToolsTeaser />
        <Newsletter />
      </main>
    </>
  )
}
