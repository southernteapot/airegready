import { BLOG_POSTS } from '@/lib/data'

export default function BlogSection() {
  const featured = BLOG_POSTS.find((p) => p.featured)
  const recent = BLOG_POSTS.filter((p) => !p.featured).slice(0, 5)

  return (
    <section
      id="blog"
      className="py-20 px-6 max-w-[1100px] mx-auto"
      aria-labelledby="blog-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Latest Updates
        </div>
        <h2
          id="blog-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          What&apos;s Changing in AI Regulation
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
          Practical breakdowns of new AI laws, enforcement actions, and
          compliance developments &mdash; written so you can act on them.
        </p>
      </div>

      {/* Featured post */}
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
            <time>{featured.date}</time> &middot; {featured.readTime}
          </span>
        </div>
        <h3 className="font-serif text-xl sm:text-[26px] font-bold text-primary mb-3 leading-tight">
          {featured.title}
        </h3>
        <p className="font-sans text-[15px] text-secondary leading-relaxed max-w-[700px]">
          {featured.excerpt}
        </p>
      </a>

      {/* Recent posts — 5 most recent non-featured */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recent.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-surface border border-border rounded-xl p-7 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] no-underline"
          >
            <div className="font-sans text-xs text-secondary mb-3">
              {post.category} &middot; <time>{post.date}</time> &middot;{' '}
              {post.readTime}
            </div>
            <h3 className="font-sans text-[17px] font-bold text-primary mb-2.5 leading-snug">
              {post.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {post.excerpt}
            </p>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/blog"
          className="font-sans text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
        >
          View all {BLOG_POSTS.length} articles &rarr;
        </a>
      </div>
    </section>
  )
}
