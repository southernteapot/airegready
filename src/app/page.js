import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import HowItWorks from '@/components/HowItWorks'
import GuideSection from '@/components/GuideSection'
import AssessmentTool from '@/components/AssessmentTool'
import BlogSection from '@/components/BlogSection'
import WhySection from '@/components/WhySection'
import ResourcesSection from '@/components/ResourcesSection'
import FAQSection from '@/components/FAQSection'
import ToolsTeaser from '@/components/ToolsTeaser'
import Newsletter from '@/components/Newsletter'
import { FAQ_ITEMS } from '@/lib/data'

export const metadata = {
  title: 'AIRegReady — AI Compliance & Regulatory Guidance',
  description:
    'Navigate AI regulations with practical guidance, a free risk assessment tool, regulatory comparison tables, a 48-term compliance glossary, and timeline of key deadlines across the EU AI Act, NIST AI RMF, U.S. state AI laws, and global frameworks.',
  openGraph: {
    title: 'AIRegReady — AI Compliance & Regulatory Guidance',
    description:
      'Free AI compliance tools: risk assessment, regulatory comparison table, glossary of 48 key terms, and deadline timeline. Expert guidance on EU AI Act, NIST AI RMF, and U.S. state AI laws.',
  },
}

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
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <GuideSection />
      <AssessmentTool />
      <BlogSection />
      <WhySection />
      <ResourcesSection />
      <FAQSection />
      <ToolsTeaser />
      <Newsletter />
    </>
  )
}
