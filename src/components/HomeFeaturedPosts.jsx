import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

export default function HomeFeaturedPosts() {
  const articles = getAllArticles()
  const posts = articles.slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section
      className="py-24 px-6 max-w-[1280px] mx-auto"
      aria-labelledby="home-posts-heading"
    >
      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <div className="max-w-[620px]">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Latest Guidance
          </div>
          <h2
            id="home-posts-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-primary leading-[1.05] tracking-tight"
          >
            What&apos;s new.
          </h2>
        </div>
        <Link
          href="/blog"
          className="font-sans text-sm font-semibold text-accent hover:text-accent-dark transition-colors whitespace-nowrap"
        >
          All {articles.length} articles &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-surface border border-border/60 rounded-xl p-6 flex flex-col gap-3 min-w-0 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_2px_16px_rgba(158,122,86,0.08)] no-underline"
          >
            <div className="font-sans text-xs text-secondary">
              {post.category} &middot; <time>{post.displayDate}</time> &middot;{' '}
              {post.readTime}
            </div>
            <h3 className="font-serif text-xl font-bold text-primary leading-snug tracking-tight">
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
