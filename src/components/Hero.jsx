import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'
import { getAllRegulations } from '@/lib/regulations'
import HeroAssessmentPreview from './HeroAssessmentPreview'

export default function Hero() {
  const articles = getAllArticles()
  const regulations = getAllRegulations()
  const latest = articles[0]
  const lastUpdated = latest?.displayDate
  const frameworkCount = regulations.length
  const articleCount = articles.length

  return (
    <section
      className="relative overflow-hidden px-6 pt-28 pb-20"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(158,122,86,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        {/* Left column — pitch */}
        <div>
          <div className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-accent mb-5 flex items-center gap-3">
            <span className="w-5 h-px bg-accent/70" />
            AI Readiness &middot; Plain English
          </div>

          <h1 className="font-serif text-[clamp(40px,5.5vw,68px)] font-bold text-primary leading-[1.02] tracking-tight mb-6">
            How <em className="italic text-accent-dark font-bold">AI&#8209;ready</em> is your work?
          </h1>

          <p className="font-sans text-lg text-secondary max-w-[58ch] leading-relaxed mb-8">
            The AI rules are multiplying. Most guides tell you to &quot;be
            compliant.&quot; We ask where you actually are, then tell you &mdash; in
            plain English &mdash; what matters for your situation and the next
            few things to do.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-dark text-accent-text px-7 py-3.5 rounded-lg text-sm font-bold font-sans no-underline shadow-[0_4px_24px_rgba(158,122,86,0.18)] hover:shadow-[0_8px_32px_rgba(158,122,86,0.28)] hover:-translate-y-0.5 transition-all"
            >
              Start the assessment &rarr;
            </Link>
            <Link
              href="/regulations"
              className="inline-flex items-center gap-2 bg-surface border border-border text-primary px-7 py-3.5 rounded-lg text-sm font-semibold font-sans no-underline hover:border-accent/50 transition-colors"
            >
              Browse regulations instead
            </Link>
          </div>

          {/* 3-stat row */}
          <div className="mt-10 pt-6 border-t border-border/70 grid grid-cols-3 gap-6 max-w-[440px]">
            <div>
              <div className="font-serif text-3xl font-bold text-primary tabular-nums leading-none">
                ~4
              </div>
              <div className="font-sans text-xs text-secondary mt-1.5 leading-tight">
                minutes to<br />your result
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary tabular-nums leading-none">
                {frameworkCount}
              </div>
              <div className="font-sans text-xs text-secondary mt-1.5 leading-tight">
                regulatory<br />frameworks
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary tabular-nums leading-none">
                $0
              </div>
              <div className="font-sans text-xs text-secondary mt-1.5 leading-tight">
                no login,<br />no email
              </div>
            </div>
          </div>
        </div>

        {/* Right column — assessment preview */}
        <div className="flex flex-col gap-3">
          <HeroAssessmentPreview />
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 px-1 font-sans text-xs text-secondary/80">
            <span>&middot; Written and maintained by a small editorial team &mdash; not a law firm.</span>
            <span>&middot; Educational &mdash; not legal advice.</span>
          </div>
          {lastUpdated && (
            <p className="px-1 font-sans text-xs text-secondary/70 tracking-wide">
              Last updated <time>{lastUpdated}</time>
              {articleCount ? ` · ${articleCount} articles` : ''}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
