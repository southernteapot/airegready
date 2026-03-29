import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import GuideSection from '@/components/GuideSection'
import AssessmentTool from '@/components/AssessmentTool'
import BlogSection from '@/components/BlogSection'
import FAQSection from '@/components/FAQSection'
import ToolsTeaser from '@/components/ToolsTeaser'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import { FAQ_ITEMS } from '@/lib/data'

export default function Home() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavBar />
      <main>
        <Hero />
        <GuideSection />
        <AssessmentTool />
        <BlogSection />
        <FAQSection />
        <ToolsTeaser />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
