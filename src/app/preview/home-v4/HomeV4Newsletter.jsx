'use client'

import { useCallback, useEffect, useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function HomeV4Newsletter() {
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
          setMessage(
            typeof data.error === 'string'
              ? data.error
              : 'Could not subscribe. Please try again.'
          )
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

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-xl border border-[#0FB4A6]/30 bg-[#E8F6F4] px-5 py-6 text-left"
      >
        <p className="font-sans text-sm font-bold text-[#0A7A6F]">
          You&rsquo;re on the list.
        </p>
        <p className="mt-1 font-sans text-xs leading-relaxed text-[#0A1F3A]/70">
          {message || 'Watch your inbox for the next AIRegReady briefing.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="home-v4-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="home-v4-newsletter-email"
          type="email"
          name="email"
          required
          placeholder="you@work-email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === 'loading'}
          aria-invalid={status === 'error' ? 'true' : undefined}
          aria-describedby={message ? 'home-v4-newsletter-message' : undefined}
          className="min-h-12 flex-1 rounded-lg border border-[#C8D6E6] bg-white px-4 py-3 font-sans text-sm text-[#0A1F3A] outline-none transition placeholder:text-[#7B8DA3] focus:border-[#1E5BA8] focus:ring-2 focus:ring-[#1E5BA8]/20 disabled:opacity-70"
        />
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="min-h-12 rounded-lg bg-[#0A1F3A] px-5 py-3 font-sans text-sm font-bold text-white transition hover:bg-[#11305A] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Subscribing&hellip;' : 'Get the briefing'}
        </button>
      </div>
      {message && (
        <p
          id="home-v4-newsletter-message"
          role={status === 'error' ? 'alert' : 'status'}
          className={`font-sans text-xs ${
            status === 'error'
              ? 'text-red-700'
              : 'text-[#0A7A6F]'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  )
}
