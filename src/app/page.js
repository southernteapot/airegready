import Hero from '@/components/Hero'
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
  title: 'AIRegReady — AI Readiness for Startups & Small Businesses',
  description:
    'Practical guidance, lightweight guardrails, and risk-aware frameworks to help founders and small businesses adopt AI with confidence. Free AI readiness assessment, regulatory comparisons, and plain-English guidance on EU AI Act, NIST AI RMF, and U.S. state AI laws.',
  openGraph: {
    title: 'AIRegReady — AI Readiness for Startups & Small Businesses',
    description:
      'Get AI-ready with practical guidance, a free readiness assessment, regulatory comparisons, and plain-English breakdowns of AI governance frameworks.',
  },
}

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIRegReady',
    url: 'https://airegready.com',
    description:
      'Practical AI readiness guidance for founders, startups, and small businesses adopting AI.',
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
