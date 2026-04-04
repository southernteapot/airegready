const reasons = [
  {
    title: 'Built for Real Businesses',
    desc: 'Not enterprise consultants. Not AI evangelists. Guidance for founders and small teams making real decisions about AI adoption.',
  },
  {
    title: 'Plain English',
    desc: 'No buzzwords, no jargon walls. If we can\u2019t say it clearly, we won\u2019t say it.',
  },
  {
    title: 'Regulation as a Tool, Not a Threat',
    desc: 'AI rules exist. We help you understand them and use them as guardrails \u2014 not obstacles.',
  },
]

export default function WhySection() {
  return (
    <section
      className="py-20 px-6 max-w-[1100px] mx-auto"
      aria-labelledby="why-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Why AIRegReady
        </div>
        <h2
          id="why-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          Not AI Hype. Not Legalese. Practical Readiness.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="bg-surface border border-border rounded-xl p-7"
          >
            <h3 className="font-sans text-[17px] font-bold text-primary mb-2">
              {reason.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
