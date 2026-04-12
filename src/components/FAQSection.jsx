'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/data'

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
      className="py-24 px-6 max-w-[840px] mx-auto"
      aria-labelledby="faq-heading"
    >
      <div className="text-center mb-14">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          FAQ
        </div>
        <h2
          id="faq-heading"
          className="font-serif text-4xl sm:text-5xl font-bold text-primary"
        >
          Common Questions About AI Readiness
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`bg-surface border rounded-xl overflow-hidden transition-colors duration-300 ${
              open === i ? 'border-accent/50' : 'border-border'
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full bg-transparent border-none py-5 px-6 flex justify-between items-center cursor-pointer gap-4"
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span
                className={`font-sans text-base font-semibold text-left transition-colors duration-300 ${
                  open === i ? 'text-accent' : 'text-primary'
                }`}
              >
                {item.q}
              </span>
              <svg
                className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${
                  open === i ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5">
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
