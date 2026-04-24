'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/data'

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section
      id="faq"
      className="py-24 px-6 max-w-[1280px] mx-auto"
      aria-labelledby="faq-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
        {/* Left column — heading */}
        <div className="lg:sticky lg:top-24">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            FAQ
          </div>
          <h2
            id="faq-heading"
            className="font-sans text-4xl sm:text-5xl font-black text-primary leading-[1.05] tracking-tight"
          >
            Common questions.<br />Straight answers.
          </h2>
          <p className="font-sans text-base text-secondary mt-4 leading-relaxed max-w-[40ch]">
            If you&apos;re new to this, start here. If you&apos;re not, skim
            for the edge cases.
          </p>
          <a
            href="/faq"
            className="inline-block mt-5 font-sans text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
          >
            See all questions &rarr;
          </a>
        </div>

        {/* Right column — accordion */}
        <div className="flex flex-col border-t border-border/70">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="border-b border-border/70"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full bg-transparent border-none py-5 flex justify-between items-baseline cursor-pointer gap-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className={`font-sans text-lg sm:text-xl font-black leading-snug tracking-tight transition-colors duration-300 ${
                      isOpen ? 'text-primary' : 'text-primary/90'
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`font-sans text-2xl text-secondary/80 leading-none flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[480px] opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-base text-secondary leading-relaxed max-w-[62ch]">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
