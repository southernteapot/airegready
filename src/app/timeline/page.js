'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import Disclaimer from '@/components/Disclaimer'
import { timelineEvents } from '@/lib/timeline-data'

const SOURCE_COLORS = {
  'EU AI Act': { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200', dot: 'bg-blue-500' },
  'NIST AI RMF': { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', dot: 'bg-emerald-500' },
  'U.S. State Laws': { bg: 'bg-violet-50', text: 'text-violet-800', border: 'border-violet-200', dot: 'bg-violet-500' },
  'Federal Policy': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200', dot: 'bg-amber-500' },
  'Sector Rules': { bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-200', dot: 'bg-rose-500' },
  'Global Governance': { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200', dot: 'bg-teal-500' },
}

const ALL_SOURCES = Object.keys(SOURCE_COLORS)

const NOW = new Date(2026, 2, 30) // March 30, 2026

function getYear(parsedDate) {
  return parsedDate.getFullYear()
}

function formatDisplayDate(dateStr) {
  // Clean up date strings for display — show the original string as-is
  return dateStr
}

export default function TimelinePage() {
  const [activeSources, setActiveSources] = useState(new Set(ALL_SOURCES))
  const [timePeriod, setTimePeriod] = useState('all') // 'past' | 'upcoming' | 'all'

  function toggleSource(source) {
    setActiveSources((prev) => {
      const next = new Set(prev)
      if (next.has(source)) {
        // Don't allow deselecting all
        if (next.size > 1) next.delete(source)
      } else {
        next.add(source)
      }
      return next
    })
  }

  function selectAllSources() {
    setActiveSources(new Set(ALL_SOURCES))
  }

  const filteredEvents = useMemo(() => {
    return timelineEvents.filter((ev) => {
      if (!activeSources.has(ev.source)) return false
      if (timePeriod === 'past' && ev.parsedDate >= NOW) return false
      if (timePeriod === 'upcoming' && ev.parsedDate < NOW) return false
      return true
    })
  }, [activeSources, timePeriod])

  // Group events by year and insert a NOW marker
  const groupedWithNow = useMemo(() => {
    const items = []
    let currentYear = null
    let nowInserted = false
    const showNow = timePeriod === 'all'

    for (const ev of filteredEvents) {
      const year = getYear(ev.parsedDate)

      // Insert NOW marker before the first event that is >= NOW
      if (showNow && !nowInserted && ev.parsedDate >= NOW) {
        const nowYear = NOW.getFullYear()
        // If we haven't emitted this year's header yet, emit it before NOW
        if (currentYear !== nowYear) {
          currentYear = nowYear
          items.push({ type: 'year', year: nowYear })
        }
        items.push({ type: 'now' })
        nowInserted = true
      }

      // Emit year header if year changed (and not already emitted for NOW)
      if (year !== currentYear) {
        currentYear = year
        items.push({ type: 'year', year })
      }

      items.push({ type: 'event', ...ev })
    }

    // If NOW hasn't been inserted yet (all filtered events are in the past)
    if (showNow && !nowInserted) {
      const nowYear = NOW.getFullYear()
      if (currentYear !== nowYear) {
        items.push({ type: 'year', year: nowYear })
      }
      items.push({ type: 'now' })
    }

    return items
  }, [filteredEvents, timePeriod])

  const isPast = (parsedDate) => parsedDate < NOW

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Timeline' }]}
        />

        <header className="mb-10">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Key Dates
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4">
            AI Regulation Timeline
          </h1>
          <p className="font-sans text-base text-secondary leading-relaxed max-w-[640px]">
            Major milestones and key dates across AI frameworks and
            regulations
          </p>
        </header>

        {/* Filters */}
        <div className="mb-10 flex flex-col gap-5">
          {/* Source filter pills */}
          <div>
            <p className="font-sans text-xs font-medium text-secondary mb-2.5 uppercase tracking-wide">
              Filter by framework
            </p>
            <div className="flex flex-wrap gap-2">
              {ALL_SOURCES.map((source) => {
                const active = activeSources.has(source)
                const colors = SOURCE_COLORS[source]
                return (
                  <button
                    key={source}
                    onClick={() => toggleSource(source)}
                    className={`
                      font-sans text-sm px-3 py-1.5 rounded-full border transition-all duration-200
                      ${
                        active
                          ? `${colors.bg} ${colors.text} ${colors.border}`
                          : 'bg-transparent text-secondary/50 border-border/60 hover:border-border'
                      }
                    `}
                  >
                    {source}
                  </button>
                )
              })}
              {activeSources.size < ALL_SOURCES.length && (
                <button
                  onClick={selectAllSources}
                  className="font-sans text-sm px-3 py-1.5 rounded-full border border-border text-secondary hover:text-accent hover:border-accent transition-all duration-200"
                >
                  Show all
                </button>
              )}
            </div>
          </div>

          {/* Time period toggle */}
          <div>
            <p className="font-sans text-xs font-medium text-secondary mb-2.5 uppercase tracking-wide">
              Time period
            </p>
            <div className="inline-flex rounded-lg border border-border overflow-hidden">
              {[
                { value: 'all', label: 'All' },
                { value: 'past', label: 'Past Events' },
                { value: 'upcoming', label: 'Upcoming Deadlines' },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setTimePeriod(value)}
                  className={`
                    font-sans text-sm px-4 py-2 transition-all duration-200 border-r border-border last:border-r-0
                    ${
                      timePeriod === value
                        ? 'bg-accent text-accent-text font-medium'
                        : 'bg-surface text-secondary hover:text-primary'
                    }
                  `}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Event count */}
        <p className="font-sans text-sm text-secondary mb-6">
          Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
        </p>

        {/* Timeline */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-sans text-secondary">
              No events match your current filters.
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-px bg-border" />

            <div className="flex flex-col">
              {groupedWithNow.map((item, i) => {
                if (item.type === 'year') {
                  return (
                    <div key={`year-${item.year}-${i}`} className="relative flex items-center mb-4 mt-8 first:mt-0">
                      <div className="w-[31px] sm:w-[39px] flex justify-center relative z-10">
                        <div className="w-3 h-3 rounded-full bg-accent border-2 border-bg" />
                      </div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary ml-4">
                        {item.year}
                      </h2>
                    </div>
                  )
                }

                if (item.type === 'now') {
                  return (
                    <div key={`now-${i}`} className="relative flex items-center my-5">
                      <div className="w-[31px] sm:w-[39px] flex justify-center relative z-10">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent border-[3px] border-bg flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-bg" />
                        </div>
                      </div>
                      <div className="ml-4 flex items-center gap-3">
                        <span className="font-sans text-sm font-bold text-accent uppercase tracking-widest">
                          Now
                        </span>
                        <span className="font-sans text-xs text-secondary">
                          March 2026
                        </span>
                        <div className="h-px w-16 sm:w-32 bg-accent/40" />
                      </div>
                    </div>
                  )
                }

                // Event card
                const colors = SOURCE_COLORS[item.source]
                const past = isPast(item.parsedDate)

                return (
                  <div
                    key={`event-${i}`}
                    className={`relative flex mb-4 transition-opacity duration-300 ${past ? 'opacity-70' : 'opacity-100'}`}
                  >
                    {/* Dot */}
                    <div className="w-[31px] sm:w-[39px] flex-shrink-0 flex justify-center pt-4 relative z-10">
                      <div
                        className={`w-2.5 h-2.5 rounded-full border-2 border-bg ${
                          past ? 'bg-border' : colors.dot
                        }`}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`
                        ml-4 flex-1 rounded-lg border p-4 sm:p-5 transition-all duration-200
                        ${
                          past
                            ? 'bg-surface/60 border-border/60'
                            : 'bg-surface border-border hover:border-accent/40 hover:shadow-sm'
                        }
                      `}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`font-sans text-sm font-semibold ${
                            past ? 'text-secondary' : 'text-primary'
                          }`}
                        >
                          {formatDisplayDate(item.date)}
                        </span>
                        <Link
                          href={`/regulations/${item.sourceSlug}`}
                          className={`
                            inline-flex items-center font-sans text-xs px-2 py-0.5 rounded-full border transition-colors
                            ${colors.bg} ${colors.text} ${colors.border}
                            hover:opacity-80
                          `}
                        >
                          {item.source}
                        </Link>
                      </div>
                      <p
                        className={`font-sans text-[15px] leading-relaxed ${
                          past ? 'text-secondary' : 'text-primary'
                        }`}
                      >
                        {item.event}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <Disclaimer />
      </div>
    </div>
  )
}
