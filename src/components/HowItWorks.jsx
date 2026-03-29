const steps = [
  {
    num: '01',
    title: 'Browse Regulations',
    desc: 'Explore AI laws by framework or jurisdiction. Every summary links back to the actual regulatory text.',
  },
  {
    num: '02',
    title: 'Assess Your Risk',
    desc: 'Answer 7 questions to see which regulations likely apply to you and where your exposure is highest.',
  },
  {
    num: '03',
    title: 'Get Practical Guidance',
    desc: 'Understand what each regulation actually requires in plain language — and what steps to take next.',
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
          How It Works
        </div>
        <h2
          id="how-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          From Regulatory Chaos to Clarity
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[520px] mx-auto leading-relaxed">
          We do the hard work of reading dense regulatory text so you
          don&apos;t have to.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.num} className="text-center sm:text-left">
            <div className="font-serif text-4xl font-bold text-accent/30 mb-3">
              {step.num}
            </div>
            <h3 className="font-sans text-lg font-bold text-primary mb-2">
              {step.title}
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
