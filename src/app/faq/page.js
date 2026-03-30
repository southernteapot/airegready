import FAQSection from '@/components/FAQSection'
import Breadcrumb from '@/components/Breadcrumb'
import { FAQ_ITEMS } from '@/lib/data'

export const metadata = {
  title: 'FAQ — Common Questions About AI Regulation',
  description:
    'Answers to common questions about AI compliance, the EU AI Act, U.S. state AI laws, penalties, and where to start with AI governance.',
  alternates: {
    canonical: 'https://airegready.com/faq',
  },
}

export default function FAQPage() {
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
      <div className="pt-28 pb-10 px-6">
        <div className="max-w-[760px] mx-auto">
          <Breadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
          />
        </div>
        <FAQSection />
      </div>
    </>
  )
}
