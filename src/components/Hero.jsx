export default function Hero() {
  return (
    <section
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(158,122,86,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8 text-[13px] font-semibold text-accent font-sans uppercase tracking-wide relative">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse-dot_2s_infinite]" />
        Tracking 6 Regulatory Frameworks &mdash; Updated Weekly
      </div>

      <h1 className="font-serif text-[clamp(36px,5.5vw,64px)] font-bold text-primary leading-[1.1] max-w-[820px] mb-6 tracking-tight">
        AI Regulation, Explained{' '}
        <span className="bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent">
          for Real-World Use
        </span>
      </h1>

      <p className="font-sans text-lg sm:text-[19px] text-secondary max-w-[640px] mb-10 leading-relaxed">
        Plain-English summaries of AI laws and compliance guidance &mdash;
        organized by framework, built for teams actually using AI, and updated
        as rules evolve. No legalese, no fluff.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#assessment"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-dark text-accent-text px-7 py-3.5 rounded-lg text-[15px] font-bold font-sans no-underline shadow-[0_4px_24px_rgba(158,122,86,0.18)] hover:shadow-[0_8px_32px_rgba(158,122,86,0.28)] hover:-translate-y-0.5 transition-all"
        >
          Check Your AI Risk &rarr;
        </a>
        <a
          href="#guide"
          className="inline-flex items-center gap-2 bg-surface border border-border text-primary px-7 py-3.5 rounded-lg text-[15px] font-semibold font-sans no-underline hover:border-accent/50 transition-colors"
        >
          Browse Regulations
        </a>
      </div>
    </section>
  )
}
