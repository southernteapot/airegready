'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      className="py-20 px-6 max-w-[600px] mx-auto text-center"
      aria-labelledby="newsletter-heading"
    >
      <div className="bg-gold/[0.08] border border-gold/[0.18] rounded-2xl p-8 sm:p-12">
        <h2
          id="newsletter-heading"
          className="font-serif text-2xl sm:text-[30px] font-bold text-cream mb-3"
        >
          Stay Ahead of AI Regulation
        </h2>
        <p className="font-sans text-[15px] text-silver leading-relaxed mb-7">
          Weekly analysis of new AI laws, enforcement actions, and compliance
          strategies. No spam, no fluff.
        </p>
        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email) setSubmitted(true)
            }}
            className="flex flex-col sm:flex-row gap-2.5 max-w-[420px] mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-cream font-sans text-sm outline-none focus:border-gold/[0.35] transition-colors placeholder:text-dim"
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-gold to-gold-dark text-charcoal px-6 py-3 rounded-lg font-sans text-sm font-bold cursor-pointer whitespace-nowrap hover:shadow-[0_4px_24px_rgba(200,164,110,0.2)] transition-shadow border-none"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="font-sans text-[15px] text-gold font-semibold">
            &#10003; You&apos;re in. Watch your inbox.
          </div>
        )}
      </div>
    </section>
  )
}
