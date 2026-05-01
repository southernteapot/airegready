'use client'

import { useCallback, useMemo, useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const organizationOptions = [
  ['startup', 'Startup or founder'],
  ['small-business', 'Small business'],
  ['school-nonprofit', 'School or nonprofit'],
  ['consultant', 'Consultant'],
  ['regulated-organization', 'Regulated organization'],
  ['internal-team', 'Internal operations team'],
  ['other', 'Other'],
]

export default function PreviewRequestForm({ product }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organizationType, setOrganizationType] = useState('')
  const [useCase, setUseCase] = useState('')
  const [subscribe, setSubscribe] = useState(false)
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const messageId = useMemo(
    () => `preview-request-message-${product.slug}`,
    [product.slug]
  )

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()

      const trimmedEmail = email.trim().toLowerCase()
      const trimmedUseCase = useCase.trim()

      if (!EMAIL_RE.test(trimmedEmail)) {
        setStatus('error')
        setMessage('Please enter a valid email address.')
        return
      }

      if (trimmedUseCase.length < 12) {
        setStatus('error')
        setMessage('Please add a short note about your use case.')
        return
      }

      setStatus('loading')
      setMessage('')

      try {
        const response = await fetch('/api/preview-request', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productSlug: product.slug,
            name,
            email: trimmedEmail,
            organizationType,
            useCase: trimmedUseCase,
            subscribe,
            website,
            sourcePath: window.location.pathname,
          }),
        })
        const data = await response.json()

        if (!response.ok) {
          setStatus('error')
          setMessage(typeof data.error === 'string' ? data.error : 'Could not send the request. Please try again.')
          return
        }

        setStatus('success')
        setMessage(data.message || 'Thanks. Your preview request has been received.')
        setName('')
        setEmail('')
        setOrganizationType('')
        setUseCase('')
        setSubscribe(false)
      } catch {
        setStatus('error')
        setMessage('Could not connect. Please try again later.')
      }
    },
    [email, name, organizationType, product.slug, subscribe, useCase, website]
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`preview-name-${product.slug}`} className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#7B8DA3]">
            Name
          </label>
          <input
            id={`preview-name-${product.slug}`}
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={status === 'loading'}
            className="mt-2 min-h-12 w-full rounded-lg border border-[#C9D7E6] bg-white px-4 py-3 font-sans text-sm text-[#0B1B2F] outline-none transition placeholder:text-[#7B8DA3] focus:border-[#2F80C2] focus:ring-2 focus:ring-[#2F80C2]/20 disabled:opacity-70 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor={`preview-email-${product.slug}`} className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#7B8DA3]">
            Email
          </label>
          <input
            id={`preview-email-${product.slug}`}
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={status === 'loading'}
            aria-invalid={status === 'error' ? 'true' : undefined}
            aria-describedby={message ? messageId : undefined}
            className="mt-2 min-h-12 w-full rounded-lg border border-[#C9D7E6] bg-white px-4 py-3 font-sans text-sm text-[#0B1B2F] outline-none transition placeholder:text-[#7B8DA3] focus:border-[#2F80C2] focus:ring-2 focus:ring-[#2F80C2]/20 disabled:opacity-70 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor={`preview-org-${product.slug}`} className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#7B8DA3]">
          Organization type
        </label>
        <select
          id={`preview-org-${product.slug}`}
          name="organizationType"
          value={organizationType}
          onChange={(event) => setOrganizationType(event.target.value)}
          disabled={status === 'loading'}
          className="mt-2 min-h-12 w-full rounded-lg border border-[#C9D7E6] bg-white px-4 py-3 font-sans text-sm text-[#0B1B2F] outline-none transition focus:border-[#2F80C2] focus:ring-2 focus:ring-[#2F80C2]/20 disabled:opacity-70 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        >
          <option value="">Choose one</option>
          {organizationOptions.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`preview-use-case-${product.slug}`} className="font-sans text-xs font-black uppercase tracking-[0.14em] text-[#7B8DA3]">
          Primary use case
        </label>
        <textarea
          id={`preview-use-case-${product.slug}`}
          name="useCase"
          value={useCase}
          onChange={(event) => setUseCase(event.target.value)}
          disabled={status === 'loading'}
          rows={5}
          aria-invalid={status === 'error' ? 'true' : undefined}
          aria-describedby={message ? messageId : undefined}
          className="mt-2 w-full rounded-lg border border-[#C9D7E6] bg-white px-4 py-3 font-sans text-sm leading-relaxed text-[#0B1B2F] outline-none transition placeholder:text-[#7B8DA3] focus:border-[#2F80C2] focus:ring-2 focus:ring-[#2F80C2]/20 disabled:opacity-70 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          placeholder="Example: We need a starter governance file for staff AI use and vendor review."
          required
        />
      </div>
      <label className="flex gap-3 font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">
        <input
          type="checkbox"
          checked={subscribe}
          onChange={(event) => setSubscribe(event.target.checked)}
          disabled={status === 'loading'}
          className="mt-1 h-4 w-4 rounded border-[#C9D7E6]"
        />
        I am open to occasional follow-up about this package and related AIRegReady resources.
      </label>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="min-h-12 w-full rounded-lg bg-[#174EA6] px-5 py-3 font-sans text-sm font-bold text-white transition hover:bg-[#2C6BFF] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'loading' ? 'Sending...' : 'Send preview request'}
      </button>
      {message && (
        <p
          id={messageId}
          role={status === 'error' ? 'alert' : 'status'}
          className={`font-sans text-sm ${status === 'error' ? 'text-red-700 dark:text-red-300' : 'text-[#137A72] dark:text-teal-200'}`}
        >
          {message}
        </p>
      )}
      <noscript>
        <p className="font-sans text-sm leading-relaxed text-[#455571] dark:text-[#B2C9ED]">
          Preview requests require JavaScript. Email info@airegready.com with the
          package name and your use case.
        </p>
      </noscript>
    </form>
  )
}
