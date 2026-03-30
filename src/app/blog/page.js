import { getAllArticles } from '@/lib/articles'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'AI Regulation Blog',
  description:
    'Practical analysis of AI laws, enforcement actions, and compliance developments. Written in plain English so you can act on them.',
  alternates: {
    canonical: 'https://airegready.com/blog',
  },
}

export default function BlogIndex() {
  const articles = getAllArticles()
  const featured = articles.find((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        />

        <div className="text-center mb-14">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Latest Updates
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
            What&apos;s Changing in AI Regulation
          </h1>
          <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
            Practical breakdowns of new AI laws, enforcement actions, and
            compliance developments &mdash; written so you can act on them.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <a
            href={`/blog/${featured.slug}`}
            className="bg-surface border border-border rounded-[14px] p-7 sm:p-9 mb-4 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] relative overflow-hidden no-underline"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                Featured
              </span>
              <span className="font-sans text-[13px] text-secondary">
                {featured.category} &middot;{' '}
                <time>{featured.displayDate}</time> &middot;{' '}
                {featured.readTime}
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-[26px] font-bold text-primary mb-3 leading-tight">
              {featured.title}
            </h2>
            <p className="font-sans text-[15px] text-secondary leading-relaxed max-w-[700px]">
              {featured.description}
            </p>
          </a>
        )}

        {/* Other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-surface border border-border rounded-xl p-7 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] no-underline"
            >
              <div className="font-sans text-xs text-secondary mb-3">
                {post.category} &middot; <time>{post.displayDate}</time>{' '}
                &middot; {post.readTime}
              </div>
              <h2 className="font-sans text-[17px] font-bold text-primary mb-2.5 leading-snug">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                {post.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
