import { getAllArticles } from '@/lib/articles'
import Breadcrumb from '@/components/Breadcrumb'
import BlogList from '@/components/BlogList'

export const metadata = {
  title: 'AI Guidance & Updates',
  description:
    'Practical analysis of AI adoption, governance, regulatory developments, and what they mean for real-world use. Written in plain English.',
  alternates: {
    canonical: 'https://airegready.com/blog',
  },
}

export default function BlogIndex() {
  const articles = getAllArticles()

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        />

        <div className="text-center mb-14">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Latest Guidance
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
            What&apos;s New in AI Readiness
          </h1>
          <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
            Practical breakdowns of AI adoption, governance, regulatory
            developments, and what they mean for you.
          </p>
        </div>

        <BlogList articles={articles} />
      </div>
    </div>
  )
}
