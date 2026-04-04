const themes = [
  {
    num: '01',
    title: 'Choose Practical Use Cases',
    desc: 'Start with AI applications that solve real problems for your business \u2014 not shiny demos.',
  },
  {
    num: '02',
    title: 'Set Lightweight Guardrails',
    desc: 'Put basic policies and guidelines in place before you scale \u2014 they don\u2019t have to be heavy.',
  },
  {
    num: '03',
    title: 'Understand Real Risks',
    desc: 'Know which regulatory and operational risks actually matter for your situation.',
  },
  {
    num: '04',
    title: 'Move With Confidence',
    desc: 'Adopt AI with a clear plan \u2014 not hype, not paralysis.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="py-20 px-6 max-w-[1100px] mx-auto"
      aria-labelledby="how-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Getting Started
        </div>
        <h2
          id="how-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          What You Need to Get AI-Ready
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[520px] mx-auto leading-relaxed">
          Whether you&apos;re adopting AI for the first time or tightening up
          what you already use.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {themes.map((theme) => (
          <div key={theme.num} className="text-center sm:text-left">
            <div className="font-serif text-4xl font-bold text-accent/30 mb-3">
              {theme.num}
            </div>
            <h3 className="font-sans text-lg font-bold text-primary mb-2">
              {theme.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {theme.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
