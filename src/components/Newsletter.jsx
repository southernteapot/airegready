'use client'

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'airegready_newsletter_subscribed'

function getSubscribedEmails() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function markSubscribed(email) {
  try {
    const list = getSubscribedEmails()
    if (!list.includes(email)) {
      list.push(email)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
    }
  } catch {
    // localStorage unavailable — no-op
  }
}

function isAlreadySubscribed(email) {
  return getSubscribedEmails().includes(email.trim().toLowerCase())
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  // Clear error after 5 seconds
  useEffect(() => {
    if (status !== 'error') return
    const timer = setTimeout(() => {
      setStatus('idle')
      setErrorMsg('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [status])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const trimmed = email.trim().toLowerCase()

      // Basic client-side validation
      if (!trimmed) {
        setStatus('error')
        setErrorMsg('Please enter your email address.')
        return
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        setStatus('error')
        setErrorMsg('Please enter a valid email address.')
        return
      }

      // Duplicate prevention via localStorage
      if (isAlreadySubscribed(trimmed)) {
        setStatus('error')
        setErrorMsg("You're already subscribed!")
        return
      }

      setStatus('loading')
      setErrorMsg('')

      try {
        const res = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: trimmed, website }),
        })

        const data = await res.json()

        if (!res.ok) {
          const err = data.error
          setStatus('error')
          setErrorMsg(typeof err === 'string' ? err : 'Something went wrong. Please try again.')
          return
        }

        markSubscribed(trimmed)
        setStatus('success')
      } catch {
        setStatus('error')
        setErrorMsg('Could not connect. Please try again later.')
      }
    },
    [email, website]
  )

  return (
    <section
      className="py-24 px-6 max-w-[680px] mx-auto text-center"
      aria-labelledby="newsletter-heading"
    >
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 sm:p-12">
        <h2
          id="newsletter-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-3"
        >
          Get Updates
        </h2>
        <p className="font-sans text-sm text-secondary leading-relaxed mb-7">
          New resources, AI regulation updates, and practical information
          &mdash; delivered weekly in plain English.
        </p>

        {status === 'success' ? (
          <div
            className="flex flex-col items-center gap-2 animate-fade-in"
            role="status"
          >
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent mb-1"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p className="font-sans text-sm text-accent font-semibold">
              You&apos;re subscribed!
            </p>
            <p className="font-sans text-xs text-secondary">
              Check your inbox for a confirmation.
            </p>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2.5 max-w-[420px] mx-auto"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                aria-invalid={status === 'error' ? 'true' : undefined}
                className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 text-primary font-sans text-sm outline-none focus:border-accent/50 transition-colors placeholder:text-secondary/60 disabled:opacity-60"
              />
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gradient-to-br from-accent to-accent-dark text-accent-text px-6 py-3 rounded-lg font-sans text-sm font-bold cursor-pointer whitespace-nowrap hover:shadow-[0_4px_24px_rgba(158,122,86,0.2)] transition-shadow border-none disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {status === 'error' && errorMsg && (
              <p
                id="newsletter-error"
                role="alert"
                className="mt-3 font-sans text-xs text-red-600 animate-fade-in"
              >
                {errorMsg}
              </p>
            )}

            {/* Progressive enhancement: message for no-JS users */}
            <noscript>
              <p className="mt-4 font-sans text-xs text-secondary">
                JavaScript is required for newsletter signup. Please enable
                JavaScript or email us directly.
              </p>
            </noscript>
          </>
        )}
      </div>
    </section>
  )
}
