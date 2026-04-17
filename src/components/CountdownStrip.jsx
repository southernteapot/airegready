'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const DEADLINES = [
  {
    label: 'Colorado AI Act',
    date: new Date('2026-06-30T00:00:00'),
    href: '/blog/colorado-ai-act-countdown',
    passedLabel: 'In effect',
  },
  {
    label: 'EU AI Act Annex III',
    date: new Date('2026-08-02T00:00:00'),
    href: '/regulations/eu-ai-act',
    passedLabel: 'Enforceable',
  },
]

function daysUntil(target) {
  const now = new Date()
  const diff = target.getTime() - now.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export default function CountdownStrip() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      aria-label="Upcoming AI regulation deadlines"
      className="border-y border-border/70 bg-surface/50"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-accent">
          Upcoming
        </span>

        {DEADLINES.map((d) => {
          const days = mounted ? daysUntil(d.date) : null
          const isPast = days !== null && days < 0

          return (
            <Link
              key={d.label}
              href={d.href}
              className="inline-flex items-center gap-2 font-sans text-sm text-secondary hover:text-primary transition-colors no-underline group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/70 group-hover:bg-accent transition-colors" />
              <span className="font-medium">{d.label}</span>
              <span className="font-mono tabular-nums text-xs text-accent font-semibold">
                {days === null
                  ? '\u2014'
                  : isPast
                  ? d.passedLabel
                  : `${days} day${days === 1 ? '' : 's'}`}
              </span>
            </Link>
          )
        })}

        <Link
          href="/timeline"
          className="font-sans text-xs text-secondary/80 hover:text-accent transition-colors no-underline"
        >
          Full timeline &rarr;
        </Link>
      </div>
    </section>
  )
}
