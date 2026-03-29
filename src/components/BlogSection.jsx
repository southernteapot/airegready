import { BLOG_POSTS } from '@/lib/data'

export default function BlogSection() {
  const featured = BLOG_POSTS.find((p) => p.featured)
  const rest = BLOG_POSTS.filter((p) => !p.featured)

  return (
    <section
      id="blog"
      className="py-20 px-6 max-w-[1100px] mx-auto"
      aria-labelledby="blog-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-gold mb-3">
          Latest Analysis
        </div>
        <h2
          id="blog-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-cream"
        >
          Insights &amp; Guides
        </h2>
        <p className="font-sans text-base text-silver mt-3 max-w-[540px] mx-auto leading-relaxed">
          Practical analysis of AI regulations, enforcement trends, and
          compliance strategies you can act on.
        </p>
      </div>

      {/* Featured post */}
      <article className="bg-white/[0.025] border border-white/[0.06] rounded-[14px] p-7 sm:p-9 mb-4 cursor-pointer transition-all duration-300 hover:border-gold/[0.35] hover:bg-white/[0.05] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-gold bg-gold/[0.08] px-2.5 py-1 rounded-full">
            Featured
          </span>
          <span className="font-sans text-[13px] text-dim">
            {featured.category} &middot;{' '}
            <time>{featured.date}</time> &middot; {featured.readTime}
          </span>
        </div>
        <h3 className="font-serif text-xl sm:text-[26px] font-bold text-cream mb-3 leading-tight">
          {featured.title}
        </h3>
        <p className="font-sans text-[15px] text-silver leading-relaxed max-w-[700px]">
          {featured.excerpt}
        </p>
      </article>

      {/* Other posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((post) => (
          <article
            key={post.title}
            className="bg-white/[0.025] border border-white/[0.06] rounded-xl p-7 cursor-pointer transition-all duration-300 hover:border-gold/[0.35] hover:bg-white/[0.05]"
          >
            <div className="font-sans text-xs text-dim mb-3">
              {post.category} &middot; <time>{post.date}</time> &middot;{' '}
              {post.readTime}
            </div>
            <h3 className="font-sans text-[17px] font-bold text-cream mb-2.5 leading-snug">
              {post.title}
            </h3>
            <p className="font-sans text-sm text-dim leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
