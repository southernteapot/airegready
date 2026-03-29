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
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 sm:p-12">
        <h2
          id="newsletter-heading"
          className="font-serif text-2xl sm:text-[30px] font-bold text-primary mb-3"
        >
          Stay Ahead of AI Regulation
        </h2>
        <p className="font-sans text-[15px] text-secondary leading-relaxed mb-7">
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
              className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 text-primary font-sans text-sm outline-none focus:border-accent/50 transition-colors placeholder:text-secondary/60"
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-accent to-accent-dark text-accent-text px-6 py-3 rounded-lg font-sans text-sm font-bold cursor-pointer whitespace-nowrap hover:shadow-[0_4px_24px_rgba(158,122,86,0.2)] transition-shadow border-none"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="font-sans text-[15px] text-accent font-semibold">
            &#10003; You&apos;re in. Watch your inbox.
          </div>
        )}
      </div>
    </section>
  )
}
