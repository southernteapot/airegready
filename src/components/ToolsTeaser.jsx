const tools = [
  {
    title: 'Policy & Use Templates',
    desc: 'Starter documents for acceptable use policies, vendor review checklists, and team AI guidelines.',
  },
  {
    title: 'Implementation Guides',
    desc: 'Step-by-step guidance for common AI adoption scenarios, from first pilot to scaling.',
  },
  {
    title: 'Regulatory Alerts',
    desc: 'Get notified when AI laws change in the jurisdictions and industries you care about.',
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
          Coming Soon
        </div>
        <h2
          id="tools-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          AI Readiness Starter Kit
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
          Practical tools we&apos;re building for startups and small businesses
          getting AI-ready.
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
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {tool.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
