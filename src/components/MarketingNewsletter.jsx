'use client'

import { useCallback, useEffect, useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function MarketingNewsletter() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (status !== 'error') return
    const timer = setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [status])

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const trimmed = email.trim().toLowerCase()

      if (!trimmed) {
        setStatus('error')
        setMessage('Please enter your email address.')
        return
      }

      if (!EMAIL_RE.test(trimmed)) {
        setStatus('error')
        setMessage('Please enter a valid email address.')
        return
      }

      setStatus('loading')
      setMessage('')

      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: trimmed, website }),
        })
        const data = await response.json()

        if (!response.ok) {
          setStatus('error')
          setMessage(typeof data.error === 'string' ? data.error : 'Could not subscribe. Please try again.')
          return
        }

        setStatus('success')
        setMessage(data.message || 'Thanks for subscribing.')
        setEmail('')
      } catch {
        setStatus('error')
        setMessage('Could not connect. Please try again later.')
      }
    },
    [email, website]
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="marketing-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="marketing-newsletter-email"
          type="email"
          name="email"
          placeholder="work@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === 'loading'}
          aria-invalid={status === 'error' ? 'true' : undefined}
          aria-describedby={message ? 'marketing-newsletter-message' : undefined}
          className="min-h-12 flex-1 rounded-lg border border-[#C9D7E6] bg-white px-4 py-3 font-sans text-sm text-[#0B1B2F] outline-none transition placeholder:text-[#7B8DA3] focus:border-[#2F80C2] focus:ring-2 focus:ring-[#2F80C2]/20 disabled:opacity-70 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
          required
        />
        <input
          type="text"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="min-h-12 rounded-lg bg-[#0F5E9C] px-5 py-3 font-sans text-sm font-bold text-white transition hover:bg-[#0B4A7D] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Subscribing...' : 'Get updates'}
        </button>
      </div>
      {message && (
        <p
          id="marketing-newsletter-message"
          role={status === 'error' ? 'alert' : 'status'}
          className={`font-sans text-xs ${status === 'error' ? 'text-red-700 dark:text-red-300' : 'text-[#137A72] dark:text-teal-200'}`}
        >
          {message}
        </p>
      )}
      <noscript>
        <p className="font-sans text-xs leading-relaxed text-[#536684] dark:text-[#B2C9ED]">
          Newsletter signup requires JavaScript. Email info@airegready.com to
          request updates.
        </p>
      </noscript>
    </form>
  )
}
