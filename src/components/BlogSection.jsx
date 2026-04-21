import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

export default function BlogSection() {
  const articles = getAllArticles()
  const featured = articles.find((article) => article.featured)
  const recent = articles.filter((article) => !article.featured).slice(0, 5)

  return (
    <section
      id="blog"
      className="py-24 px-6 max-w-[1280px] mx-auto"
      aria-labelledby="blog-heading"
    >
      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <div className="max-w-[620px]">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Latest Guidance
          </div>
          <h2
            id="blog-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-primary leading-[1.05] tracking-tight"
          >
            What&apos;s new in AI readiness.
          </h2>
          <p className="font-sans text-base text-secondary mt-3 leading-relaxed">
            Practical breakdowns of AI adoption, governance, and regulatory
            developments &mdash; and what they actually mean for you.
          </p>
        </div>
        <Link
          href="/blog"
          className="font-sans text-sm font-semibold text-accent hover:text-accent-dark transition-colors whitespace-nowrap"
        >
          All {articles.length} articles &rarr;
        </Link>
      </div>

      {/* Featured post — gap layout, no fixed min-height, prevents overlap */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="bg-surface border border-border/60 rounded-xl p-6 sm:p-8 mb-4 flex flex-col gap-5 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] relative overflow-hidden no-underline"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="flex flex-wrap gap-3 items-center">
            <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
              Featured
            </span>
            <span className="font-sans text-xs text-secondary">
              {featured.category} &middot; <time>{featured.displayDate}</time> &middot;{' '}
              {featured.readTime}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-[28px] font-bold text-primary leading-[1.15] tracking-tight">
            {featured.title}
          </h3>
          <p className="font-sans text-sm text-secondary leading-relaxed max-w-[680px]">
            {featured.description}
          </p>
        </Link>
      )}

      {/* Recent posts — 5 most recent non-featured */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recent.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-surface border border-border/60 rounded-xl p-6 flex flex-col gap-3 min-w-0 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] no-underline"
          >
            <div className="font-sans text-xs text-secondary">
              {post.category} &middot; <time>{post.displayDate}</time> &middot;{' '}
              {post.readTime}
            </div>
            <h3 className="font-sans text-base font-bold text-primary leading-snug">
              {post.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
