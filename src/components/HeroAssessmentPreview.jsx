import Link from 'next/link'
import { QUESTIONS } from '@/lib/data'

const Q1 = QUESTIONS[0]

export default function HeroAssessmentPreview() {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 sm:p-7 shadow-[0_30px_60px_-40px_rgba(32,38,43,0.25)]">
      <div className="flex justify-between items-baseline pb-3 mb-5 border-b border-border/70">
        <div className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
          AI Readiness Assessment
        </div>
        <div className="font-mono text-[11px] text-secondary/80 tabular-nums">
          ~4 minutes
        </div>
      </div>

      <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-primary leading-snug tracking-tight mb-1.5">
        {Q1.text}
      </h3>
      {Q1.subtitle && (
        <p className="font-sans text-[13px] text-secondary mb-5 leading-relaxed">
          {Q1.subtitle}
        </p>
      )}

      <div className="grid gap-2">
        {Q1.options.map((option, index) => (
          <Link
            key={option.value}
            href={`/assessment?start=${option.value}`}
            className="flex items-center gap-3 px-3.5 py-3 rounded-md font-sans text-sm text-left border border-border bg-transparent text-primary/90 hover:border-accent hover:bg-accent/5 hover:text-primary transition-all no-underline"
          >
            <span className="w-5 h-5 rounded grid place-items-center font-mono text-[11px] bg-surface text-secondary border border-border flex-shrink-0">
              {String.fromCharCode(65 + index)}
            </span>
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
