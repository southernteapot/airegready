export default function Hero() {
  return (
    <section
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(200,164,110,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-gold/[0.08] border border-gold/[0.18] rounded-full px-4 py-1.5 mb-8 text-[13px] font-semibold text-gold font-sans uppercase tracking-wide relative">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-[pulse-dot_2s_infinite]" />
        AI Regulation is Accelerating
      </div>

      <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-bold text-cream leading-[1.1] max-w-[800px] mb-6 tracking-tight">
        Navigate AI Compliance{' '}
        <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">
          with Confidence
        </span>
      </h1>

      <p className="font-sans text-lg sm:text-[19px] text-silver max-w-[580px] mb-10 leading-relaxed">
        Expert regulatory guidance for a fast-moving landscape. Clear analysis of
        AI laws, practical compliance frameworks, and tools to manage your
        obligations &mdash; all in one place.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#assessment"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-gold to-gold-dark text-charcoal px-7 py-3.5 rounded-lg text-[15px] font-bold font-sans no-underline shadow-[0_4px_24px_rgba(200,164,110,0.2)] hover:shadow-[0_8px_32px_rgba(200,164,110,0.3)] hover:-translate-y-0.5 transition-all"
        >
          Free Risk Assessment &rarr;
        </a>
        <a
          href="#guide"
          className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 text-cream px-7 py-3.5 rounded-lg text-[15px] font-semibold font-sans no-underline hover:bg-white/[0.08] transition-colors"
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
            <div className="font-serif text-3xl sm:text-[32px] font-bold text-gold">
              {num}
            </div>
            <div className="font-sans text-[13px] text-dim mt-1 uppercase tracking-widest">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
