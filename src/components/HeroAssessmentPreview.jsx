import Link from 'next/link'

const OPTIONS = [
  'Figuring out where to start',
  'Using AI more effectively',
  'Setting policies or guardrails',
  'Understanding risk and compliance',
]

export default function HeroAssessmentPreview() {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 sm:p-7 shadow-[0_30px_60px_-40px_rgba(32,38,43,0.25)]">
      <div className="flex justify-between items-baseline pb-3 mb-5 border-b border-border/70">
        <div className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
          AI Readiness Assessment
        </div>
        <div className="font-mono text-[11px] text-secondary/80 tabular-nums">
          11 questions
        </div>
      </div>

      <div className="h-[3px] bg-border/60 rounded-full overflow-hidden mb-5">
        <div className="h-full w-[22%] bg-accent" />
      </div>

      <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-primary leading-snug tracking-tight mb-1.5">
        Start with the question you actually need answered.
      </h3>
      <p className="font-sans text-[13px] text-secondary mb-5 leading-relaxed">
        The full assessment turns your answers into a practical next-step
        report with frameworks worth watching and recommended reading.
      </p>

      <div className="grid gap-2 mb-5">
        {OPTIONS.map((label, index) => {
          return (
            <div
              key={label}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-md font-sans text-sm text-left transition-all border ${
                index === 0
                  ? 'border-primary bg-primary/[0.03] text-primary'
                  : 'border-border bg-transparent text-primary/90'
              }`}
            >
              <span
                className={`w-5 h-5 rounded grid place-items-center font-mono text-[11px] border ${
                  index === 0
                    ? 'bg-primary text-surface border-primary'
                    : 'bg-surface text-secondary border-border'
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              {label}
            </div>
          )
        })}
      </div>

      <div className="flex justify-between items-center font-sans text-xs text-secondary/80 pt-1">
        <span>Dedicated page, better performance</span>
        <Link
          href="/assessment"
          className="font-sans text-xs font-semibold text-accent hover:text-accent-dark transition-colors no-underline"
        >
          Take the full assessment &rarr;
        </Link>
      </div>
    </div>
  )
}
