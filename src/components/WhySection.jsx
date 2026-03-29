const reasons = [
  {
    title: 'Plain English',
    desc: 'We translate dense regulatory text into clear, actionable summaries. If you can read a blog post, you can understand AI compliance.',
  },
  {
    title: 'Source-Linked',
    desc: 'Every summary traces back to the actual law, rule, or guidance document. Verify anything in one click.',
  },
  {
    title: 'Always Current',
    desc: 'AI regulation moves fast. We track changes across jurisdictions so you don\u2019t have to monitor the Federal Register yourself.',
  },
  {
    title: 'Built for Practitioners',
    desc: 'Designed for founders, product teams, and compliance leads navigating AI regulation in practice \u2014 not for academics.',
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
          Regulatory Guidance You Can Actually Use
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
