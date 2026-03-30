'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const TYPE_LABELS = {
  regulation: 'Regulation',
  article: 'Article',
  page: 'Page',
}

const TYPE_BADGE_CLASSES = {
  regulation: 'bg-accent/15 text-accent',
  article: 'bg-secondary/15 text-secondary',
  page: 'bg-border text-secondary',
}

const GROUP_ORDER = ['regulation', 'article', 'page']
const GROUP_LABELS = {
  regulation: 'Regulations',
  article: 'Articles',
  page: 'Pages',
}

function highlightMatch(text, query) {
  if (!query || query.length < 2) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-accent/20 text-primary rounded-sm px-0.5">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}

export default function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [searchIndex, setSearchIndex] = useState(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef(null)
  const overlayRef = useRef(null)
  const resultsRef = useRef(null)
  const router = useRouter()

  // Lazy-load search data when modal opens
  useEffect(() => {
    if (open && !searchIndex) {
      import('@/lib/search-data').then((mod) => {
        setSearchIndex(mod.getSearchIndex())
      })
    }
    if (open) {
      // Focus input after a frame so the overlay is rendered
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open, searchIndex])

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Keyboard shortcut: Cmd/Ctrl+K to open
  useEffect(() => {
    function handleGlobalKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleGlobalKey)
    return () => window.removeEventListener('keydown', handleGlobalKey)
  }, [])

  const closeSearch = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActiveIndex(-1)
  }, [])

  // Filter results
  const results = (() => {
    if (!searchIndex || query.length < 2) return []
    const q = query.toLowerCase()
    return searchIndex.filter((item) => {
      const haystack =
        `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase()
      return haystack.includes(q)
    })
  })()

  // Group results by type
  const grouped = GROUP_ORDER.map((type) => ({
    type,
    label: GROUP_LABELS[type],
    items: results.filter((r) => r.type === type),
  })).filter((g) => g.items.length > 0)

  // Flat list of all visible results for keyboard nav
  const flatResults = grouped.flatMap((g) => g.items)

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(-1)
  }, [query])

  function navigateTo(url) {
    closeSearch()
    router.push(url)
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      e.preventDefault()
      closeSearch()
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) =>
        prev < flatResults.length - 1 ? prev + 1 : 0
      )
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : flatResults.length - 1
      )
      return
    }
    if (e.key === 'Enter' && activeIndex >= 0 && flatResults[activeIndex]) {
      e.preventDefault()
      navigateTo(flatResults[activeIndex].url)
    }
  }

  // Scroll active result into view
  useEffect(() => {
    if (activeIndex < 0 || !resultsRef.current) return
    const el = resultsRef.current.querySelector(
      `[data-result-index="${activeIndex}"]`
    )
    if (el) {
      el.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  // Focus trap: keep focus inside the overlay
  function handleOverlayKeyDown(e) {
    if (e.key === 'Tab') {
      // Keep focus on the input (simple trap for this modal)
      e.preventDefault()
      inputRef.current?.focus()
    }
  }

  const showResults = query.length >= 2
  const noResults = showResults && results.length === 0

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="text-secondary hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-1.5 flex items-center"
        aria-label="Search site (Ctrl+K)"
        title="Search (Ctrl+K)"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </button>

      {/* Search overlay */}
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl flex flex-col items-center animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === overlayRef.current) closeSearch()
          }}
          onKeyDown={handleOverlayKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          {/* Close button */}
          <button
            onClick={closeSearch}
            className="absolute top-5 right-6 text-secondary hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-1"
            aria-label="Close search"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          {/* Search input area */}
          <div className="w-full max-w-2xl px-6 pt-20 sm:pt-24">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search regulations, articles, tools..."
                className="w-full pl-12 pr-4 py-4 text-lg font-sans bg-surface border border-border rounded-xl text-primary placeholder:text-secondary/60 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                aria-label="Search"
                aria-autocomplete="list"
                aria-controls="search-results"
                aria-activedescendant={
                  activeIndex >= 0 ? `search-result-${activeIndex}` : undefined
                }
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery('')
                    inputRef.current?.focus()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0.5"
                  aria-label="Clear search"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Hint */}
            {!showResults && (
              <p className="text-secondary/60 text-sm font-sans mt-3 text-center">
                Type at least 2 characters to search
              </p>
            )}
          </div>

          {/* Results */}
          {showResults && (
            <div
              ref={resultsRef}
              id="search-results"
              className="w-full max-w-2xl px-6 pt-4 pb-8 overflow-y-auto flex-1"
              role="listbox"
            >
              {noResults ? (
                <div className="text-center py-12">
                  <p className="text-secondary text-lg font-sans font-medium">
                    No results found
                  </p>
                  <p className="text-secondary/60 text-sm font-sans mt-2">
                    Try different keywords or browse the{' '}
                    <a
                      href="/regulations"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo('/regulations')
                      }}
                      className="text-accent hover:underline"
                    >
                      regulations
                    </a>{' '}
                    or{' '}
                    <a
                      href="/blog"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo('/blog')
                      }}
                      className="text-accent hover:underline"
                    >
                      blog
                    </a>{' '}
                    directly.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-secondary/60 text-xs font-sans mb-4">
                    {results.length} result{results.length !== 1 ? 's' : ''}{' '}
                    found
                  </p>
                  {grouped.map((group) => {
                    // Calculate the flat-index offset for this group
                    let offset = 0
                    for (const g of grouped) {
                      if (g.type === group.type) break
                      offset += g.items.length
                    }
                    return (
                      <div key={group.type} className="mb-6">
                        <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-accent mb-3">
                          {group.label}
                        </h3>
                        <div className="flex flex-col gap-2">
                          {group.items.map((item, i) => {
                            const flatIdx = offset + i
                            const isActive = flatIdx === activeIndex
                            return (
                              <a
                                key={item.url}
                                href={item.url}
                                id={`search-result-${flatIdx}`}
                                data-result-index={flatIdx}
                                role="option"
                                aria-selected={isActive}
                                onClick={(e) => {
                                  e.preventDefault()
                                  navigateTo(item.url)
                                }}
                                onMouseEnter={() => setActiveIndex(flatIdx)}
                                className={`block p-4 rounded-lg border transition-all no-underline ${
                                  isActive
                                    ? 'bg-accent/8 border-accent/30 shadow-sm'
                                    : 'bg-surface border-border hover:border-accent/20'
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="min-w-0 flex-1">
                                    <p className="text-primary font-sans font-medium text-[15px] leading-snug">
                                      {highlightMatch(item.title, query)}
                                    </p>
                                    <p className="text-secondary text-sm font-sans mt-1 line-clamp-2 leading-relaxed">
                                      {highlightMatch(item.description, query)}
                                    </p>
                                  </div>
                                  <span
                                    className={`shrink-0 text-[11px] font-sans font-medium px-2 py-0.5 rounded-full ${TYPE_BADGE_CLASSES[item.type]}`}
                                  >
                                    {TYPE_LABELS[item.type]}
                                  </span>
                                </div>
                              </a>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          )}

          {/* Footer hint */}
          <div className="w-full max-w-2xl px-6 pb-5">
            <div className="flex items-center justify-center gap-4 text-secondary/40 text-xs font-sans">
              <span>
                <kbd className="px-1.5 py-0.5 bg-surface border border-border rounded text-[11px] font-mono">
                  Esc
                </kbd>{' '}
                to close
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 bg-surface border border-border rounded text-[11px] font-mono">
                  &uarr;
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-surface border border-border rounded text-[11px] font-mono ml-0.5">
                  &darr;
                </kbd>{' '}
                to navigate
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 bg-surface border border-border rounded text-[11px] font-mono">
                  Enter
                </kbd>{' '}
                to select
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
