const tools = [
  {
    title: 'Compliance Tracker',
    desc: 'Monitor your compliance status across every applicable regulation in a single dashboard.',
    status: 'Coming Q3 2026',
  },
  {
    title: 'Policy Generator',
    desc: 'Generate customized AI governance policies, acceptable use documents, and risk assessments.',
    status: 'Coming Q4 2026',
  },
  {
    title: 'Regulatory Alerts',
    desc: 'Real-time monitoring of new AI regulations, enforcement actions, and guidance updates.',
    status: 'Coming Q3 2026',
  },
]

export default function ToolsTeaser() {
  return (
    <section
      id="tools"
      className="py-20 px-6 max-w-[1100px] mx-auto"
      aria-labelledby="tools-heading"
    >
      <div className="text-center mb-12">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          On the Horizon
        </div>
        <h2
          id="tools-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          What&apos;s Coming Next
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
          Practical tools to help you track regulatory obligations, generate
          compliance documentation, and stay current.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="bg-surface border border-border rounded-xl p-7 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <h3 className="font-sans text-[17px] font-bold text-primary mb-2">
              {tool.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed mb-4">
              {tool.desc}
            </p>
            <span className="font-sans text-xs font-bold text-accent uppercase tracking-wide">
              {tool.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
