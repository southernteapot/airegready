'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const OPTIONS = [
  { key: 'A', label: 'Figuring out where to start' },
  { key: 'B', label: 'Using AI more effectively' },
  { key: 'C', label: 'Setting policies or guardrails' },
  { key: 'D', label: 'Understanding risk & compliance' },
  { key: 'E', label: 'Choosing tools and workflows' },
  { key: 'F', label: 'Figuring out what to do next' },
]

export default function HeroAssessmentPreview() {
  const [selected, setSelected] = useState('B')
  const router = useRouter()

  const goToAssessment = () => {
    router.push('/assessment')
  }

  return (
    <div className="bg-surface border border-border rounded-xl p-6 sm:p-7 shadow-[0_30px_60px_-40px_rgba(32,38,43,0.25)]">
      {/* Card header */}
      <div className="flex justify-between items-baseline pb-3 mb-5 border-b border-border/70">
        <div className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
          AI Readiness Assessment
        </div>
        <div className="font-mono text-[11px] text-secondary/80 tabular-nums">
          Q 01 / 11
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] bg-border/60 rounded-full overflow-hidden mb-5">
        <div className="h-full w-[9%] bg-accent" />
      </div>

      {/* Question */}
      <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-primary leading-snug tracking-tight mb-1.5">
        What do you most want help with right now?
      </h3>
      <p className="font-sans text-[13px] text-secondary mb-5 leading-relaxed">
        We&apos;ll use this to prioritize your results &mdash; you can change
        direction anytime.
      </p>

      {/* Options */}
      <div className="grid gap-2 mb-5">
        {OPTIONS.map((opt) => {
          const isSel = selected === opt.key
          return (
            <button
              key={opt.key}
              onClick={() => setSelected(opt.key)}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-md font-sans text-sm text-left transition-all border ${
                isSel
                  ? 'border-primary bg-primary/[0.03] text-primary'
                  : 'border-border bg-transparent text-primary/90 hover:border-accent/70 hover:bg-accent/[0.04]'
              }`}
            >
              <span
                className={`w-5 h-5 rounded grid place-items-center font-mono text-[11px] border ${
                  isSel
                    ? 'bg-primary text-surface border-primary'
                    : 'bg-surface text-secondary border-border'
                }`}
              >
                {opt.key}
              </span>
              {opt.label}
            </button>
          )
        })}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center font-sans text-xs text-secondary/80 pt-1">
        <span>
          Tap a choice to continue
        </span>
        <button
          onClick={goToAssessment}
          className="font-sans text-xs font-semibold text-accent hover:text-accent-dark transition-colors"
        >
          Take the full assessment &rarr;
        </button>
      </div>
    </div>
  )
}
