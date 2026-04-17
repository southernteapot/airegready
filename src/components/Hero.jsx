import { BLOG_POSTS } from '@/lib/data'
import { getAllArticles } from '@/lib/articles'

export default function Hero() {
  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]
  const latest = getAllArticles()[0]
  const lastUpdated = latest?.displayDate

  return (
    <section
      className="min-h-[75vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-14 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(158,122,86,0.07)_0%,transparent_70%)] pointer-events-none" />

      <h1 className="font-serif text-[clamp(40px,6vw,72px)] font-bold text-primary leading-[1.1] mb-6 tracking-tight">
        AI Resources for Real-World Use
      </h1>

      <p className="font-sans text-lg sm:text-xl text-secondary max-w-[700px] mb-10 leading-relaxed">
        Frameworks, assessments, and plain-English information for startups,
        small businesses, and anyone using AI in the real world.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/assessment"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-dark text-accent-text px-7 py-3.5 rounded-lg text-sm font-bold font-sans no-underline shadow-[0_4px_24px_rgba(158,122,86,0.18)] hover:shadow-[0_8px_32px_rgba(158,122,86,0.28)] hover:-translate-y-0.5 transition-all"
        >
          Take the Assessment &rarr;
        </a>
        {featured && (
          <a
            href={`/blog/${featured.slug}`}
            className="inline-flex items-center gap-2 bg-surface border border-border text-primary px-7 py-3.5 rounded-lg text-sm font-semibold font-sans no-underline hover:border-accent/50 transition-colors max-w-[440px]"
          >
            <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent shrink-0">
              New
            </span>
            <span className="truncate">{featured.title}</span>
          </a>
        )}
      </div>

      {lastUpdated && (
        <p className="mt-8 font-sans text-xs text-secondary/70 tracking-wide">
          Last updated <time>{lastUpdated}</time>
        </p>
      )}
    </section>
  )
}
