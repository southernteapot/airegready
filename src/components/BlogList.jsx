'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

export default function BlogList({ articles }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = []
    const seen = new Set()
    for (const a of articles) {
      if (a.category && !seen.has(a.category)) {
        seen.add(a.category)
        cats.push(a.category)
      }
    }
    cats.sort()
    return cats
  }, [articles])

  const categoryCounts = useMemo(() => {
    const counts = { All: articles.length }
    for (const a of articles) {
      counts[a.category] = (counts[a.category] || 0) + 1
    }
    return counts
  }, [articles])

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return articles
    return articles.filter((a) => a.category === activeCategory)
  }, [articles, activeCategory])

  const featured = filtered.find((a) => a.featured)
  const rest = filtered.filter((a) => !a.featured)

  return (
    <>
      {/* Filter pills */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory('All')}
            className={`font-sans text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === 'All'
                ? 'bg-accent text-accent-text border-accent'
                : 'bg-surface text-secondary border-border hover:border-accent/50'
            }`}
          >
            All{' '}
            <span
              className={`ml-1 ${
                activeCategory === 'All'
                  ? 'text-accent-text/70'
                  : 'text-secondary/60'
              }`}
            >
              ({categoryCounts.All})
            </span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent text-accent-text border-accent'
                  : 'bg-surface text-secondary border-border hover:border-accent/50'
              }`}
            >
              {cat}{' '}
              <span
                className={`ml-1 ${
                  activeCategory === cat
                    ? 'text-accent-text/70'
                    : 'text-secondary/60'
                }`}
              >
                ({categoryCounts[cat]})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Article list with fade transition */}
      <div
        key={activeCategory}
        className="animate-fade-in"
      >
        {/* Featured post (only when visible in current filter) */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="bg-surface border border-border/70 rounded-2xl p-6 sm:p-8 mb-4 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_24px_70px_-54px_rgba(11,27,47,0.45)] relative overflow-hidden no-underline shadow-sm"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                Featured
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                {featured.category}
              </span>
              <span className="font-sans text-xs text-secondary">
                <time>{featured.displayDate}</time> &middot;{' '}
                {featured.readTime}
              </span>
            </div>
            <h2 className="font-sans text-xl sm:text-2xl font-black text-primary mb-3 leading-tight">
              {featured.title}
            </h2>
            <p className="font-sans text-sm text-secondary leading-relaxed max-w-[700px]">
              {featured.description}
            </p>
          </Link>
        )}

        {/* Other posts grid */}
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-surface border border-border/70 rounded-2xl p-6 block transition-all duration-300 hover:border-accent/50 hover:shadow-[0_24px_70px_-54px_rgba(11,27,47,0.45)] no-underline shadow-sm"
              >
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-sans text-xs text-secondary">
                    <time>{post.displayDate}</time> &middot; {post.readTime}
                  </span>
                </div>
                <h2 className="font-sans text-base font-bold text-primary mb-2.5 leading-snug">
                  {post.title}
                </h2>
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          !featured && (
            <div className="text-center py-16">
              <p className="font-sans text-secondary">
                No articles in this category yet.
              </p>
            </div>
          )
        )}
      </div>
    </>
  )
}
