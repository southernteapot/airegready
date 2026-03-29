'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/data'

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
      className="py-20 px-6 max-w-[760px] mx-auto"
      aria-labelledby="faq-heading"
    >
      <div className="text-center mb-12">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          FAQ
        </div>
        <h2
          id="faq-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          Common Questions About AI Compliance
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
              <span
                className={`text-secondary text-xl font-light flex-shrink-0 transition-transform duration-300 select-none ${
                  open === i ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5">
                <p className="font-sans text-[15px] text-secondary leading-relaxed">
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
