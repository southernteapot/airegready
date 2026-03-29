export default function Hero() {
  return (
    <section
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(158,122,86,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8 text-[13px] font-semibold text-accent font-sans uppercase tracking-wide relative">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse-dot_2s_infinite]" />
        AI Regulation is Accelerating
      </div>

      <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-bold text-primary leading-[1.1] max-w-[800px] mb-6 tracking-tight">
        Understand AI Regulation.{' '}
        <span className="bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent">
          Stay Compliant.
        </span>
      </h1>

      <p className="font-sans text-lg sm:text-[19px] text-secondary max-w-[600px] mb-10 leading-relaxed">
        AI laws are evolving fast and affecting everyone &mdash; from companies
        deploying AI to individuals impacted by automated decisions. We break
        down the regulations in plain language, with practical guidance and free
        tools.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#assessment"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-dark text-accent-text px-7 py-3.5 rounded-lg text-[15px] font-bold font-sans no-underline shadow-[0_4px_24px_rgba(158,122,86,0.18)] hover:shadow-[0_8px_32px_rgba(158,122,86,0.28)] hover:-translate-y-0.5 transition-all"
        >
          Free Risk Assessment &rarr;
        </a>
        <a
          href="#guide"
          className="inline-flex items-center gap-2 bg-surface border border-border text-primary px-7 py-3.5 rounded-lg text-[15px] font-semibold font-sans no-underline hover:border-accent/50 transition-colors"
        >
          Explore the Guide
        </a>
      </div>

      <div className="mt-16 flex gap-8 sm:gap-12 flex-wrap justify-center">
        {[
          ['6+', 'Regulatory Frameworks'],
          ['50+', 'Compliance Guides'],
          ['Free', 'Risk Assessment Tool'],
        ].map(([num, label]) => (
          <div key={label} className="text-center">
            <div className="font-serif text-3xl sm:text-[32px] font-bold text-accent">
              {num}
            </div>
            <div className="font-sans text-[13px] text-secondary mt-1 uppercase tracking-widest">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
