'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { ASSESSMENT_SCHEMA_VERSION, QUESTIONS, getAssessmentReport } from '@/lib/data'

const PROGRESS_STORAGE_KEY = `airegready-assessment-progress-v${ASSESSMENT_SCHEMA_VERSION}`

function buildAnswerMapFromArray(answerArray) {
  const map = {}
  answerArray.forEach((a) => (map[a.qId] = a.values || a.value))
  return map
}

function computeMultiScore(question, values) {
  const options = values
    .map((v) => question.options.find((o) => o.value === v))
    .filter(Boolean)
  if (options.some((o) => o.score !== undefined)) {
    return options.reduce((max, o) => Math.max(max, o.score ?? 0), 0)
  }
  return Math.min(
    6,
    options.reduce((sum, o) => sum + (o.sensitivity || 0), 0)
  )
}

function findNextApplicableStep(currentStep, answerMap) {
  for (let i = currentStep + 1; i < QUESTIONS.length; i++) {
    const q = QUESTIONS[i]
    if (!q.appliesTo || q.appliesTo(answerMap)) return i
  }
  return null
}

function loadSavedProgress() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data?.version !== ASSESSMENT_SCHEMA_VERSION) return null
    if (!Array.isArray(data.answers) || data.answers.length === 0) return null
    if (typeof data.step !== 'number' || data.step < 0 || data.step >= QUESTIONS.length) return null
    return data
  } catch {
    return null
  }
}

function saveProgress(answers, step) {
  if (typeof window === 'undefined') return
  try {
    if (!answers || answers.length === 0) {
      window.localStorage.removeItem(PROGRESS_STORAGE_KEY)
      return
    }
    window.localStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify({
        version: ASSESSMENT_SCHEMA_VERSION,
        answers,
        step,
        savedAt: Date.now(),
      })
    )
  } catch {}
}

function clearSavedProgress() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(PROGRESS_STORAGE_KEY)
  } catch {}
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function rehydrateAnswersFromUrl() {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const encoded = params.get('r')
  if (!encoded) return null

  try {
    const decoded = atob(encoded)
    const urlParams = new URLSearchParams(decoded)
    if (urlParams.get('v') !== '2') return null
    const answers = []
    for (const q of QUESTIONS) {
      const raw = urlParams.get(`q${q.id}`)
      if (!raw) continue
      if (q.multi) {
        const values = raw.split(',').filter(Boolean)
        answers.push({ qId: q.id, values, score: computeMultiScore(q, values) })
      } else if (q.id === 5 && raw) {
        // Legacy share links recorded the data question as a single value.
        answers.push({ qId: q.id, values: [raw], score: computeMultiScore(q, [raw]) })
      } else {
        const opt = q.options.find((o) => o.value === raw)
        if (!opt) continue
        const answer = { qId: q.id, value: raw }
        if (opt.score !== undefined) answer.score = opt.score
        answers.push(answer)
      }
    }
    return answers.length > 0 ? answers : null
  } catch {
    return null
  }
}

/* ------------------------------------------------------------------ */
/*  Color maps for the three axes                                      */
/* ------------------------------------------------------------------ */

const READINESS_COLORS = {
  Exploring: '#9ca3af',
  'Internal Use': '#60a5fa',
  'Operational Use': '#0F5E9C',
  'Customer-Facing': '#22c55e',
  'Higher-Impact': '#15803d',
}

const GUARDRAIL_COLORS = {
  'Ad Hoc': '#f87171',
  Patchy: '#fbbf24',
  Structured: '#84cc16',
  Managed: '#4ade80',
}

const RISK_COLORS = {
  Low: '#4ade80',
  Moderate: '#fbbf24',
  Elevated: '#fb923c',
  High: '#f87171',
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SnapshotCard({ title, label, colorMap }) {
  return (
    <div className="bg-bg border border-border rounded-xl p-5 text-center">
      <div className="font-sans text-xs font-bold uppercase tracking-wide text-secondary mb-2">
        {title}
      </div>
      <div
        className="font-sans text-lg sm:text-xl font-bold leading-tight"
        style={{ color: colorMap[label] || '#0F5E9C' }}
      >
        {label}
      </div>
    </div>
  )
}

function ActionLink({ href, className, children }) {
  if (!href) return null

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

function ProductCard({ product, featured = false }) {
  return (
    <div
      className={`bg-bg border rounded-xl p-5 sm:p-6 ${
        featured
          ? 'border-accent/50 shadow-[0_24px_70px_-54px_rgba(11,27,47,0.45)]'
          : 'border-border'
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h4 className="font-sans text-base font-bold text-primary leading-snug">
          {product.name}
        </h4>
        <span
          className={`font-sans text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full whitespace-nowrap ${
            featured ? 'text-accent bg-accent/10' : 'text-secondary bg-border/40'
          }`}
        >
          {product.priority}
        </span>
      </div>
      <p className="font-sans text-sm text-secondary leading-relaxed">
        {product.why}
      </p>
      {product.includes?.length > 0 && (
        <div className="mt-4">
          <div className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-secondary/80 mb-2">
            Includes
          </div>
          <div className="flex flex-wrap gap-2">
            {product.includes.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full bg-surface border border-border px-2.5 py-1 font-sans text-xs text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      {(product.href || product.learnHref) && (
        <div className="mt-5 flex flex-wrap gap-2 print:hidden">
          <ActionLink
            href={product.href}
            className="inline-flex items-center justify-center rounded-lg bg-accent text-accent-text px-4 py-2 font-sans text-sm font-semibold hover:bg-accent-dark transition-colors no-underline"
          >
            {product.ctaLabel || 'Ask about this pack'}
          </ActionLink>
          {product.learnHref && (
            <ActionLink
              href={product.learnHref}
              className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 font-sans text-sm font-semibold text-secondary hover:text-primary hover:border-accent/50 transition-colors no-underline"
            >
              {product.learnLabel || 'Learn more'}
            </ActionLink>
          )}
        </div>
      )}
    </div>
  )
}

function FrameworkCard({ framework }) {
  return (
    <div className="bg-bg border border-border rounded-xl p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h4 className="font-sans text-base font-bold text-primary leading-snug">
          {framework.slug ? (
            <Link
              href={`/regulations/${framework.slug}`}
              className="hover:text-accent transition-colors print-link"
            >
              {framework.name}
            </Link>
          ) : (
            framework.name
          )}
        </h4>
        <span className="font-sans text-xs font-bold uppercase tracking-wide text-accent bg-accent/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">
          {framework.priority}
        </span>
      </div>
      <p className="font-sans text-sm text-secondary leading-relaxed">
        {framework.why}
      </p>
    </div>
  )
}

function ActionPlanSection({ actionPlan }) {
  const sections = [
    { key: 'doNow', label: 'Do Now', items: actionPlan.doNow, accent: 'border-accent' },
    { key: 'next30', label: 'Next 30 Days', items: actionPlan.next30, accent: 'border-amber-300' },
    { key: 'later', label: 'Later', items: actionPlan.later, accent: 'border-green-300' },
  ]

  return (
    <div className="space-y-4">
      {sections.map(
        (section) =>
          section.items.length > 0 && (
            <div
              key={section.key}
              className={`bg-bg border border-border rounded-xl p-5 sm:p-6 border-l-4 ${section.accent}`}
            >
              <h4 className="font-sans text-base font-bold text-primary mb-3">
                {section.label}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-sans text-sm text-secondary leading-relaxed"
                  >
                    <span className="inline-block w-5 h-5 shrink-0 border border-border rounded mt-0.5 print-checkbox" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
      )}
    </div>
  )
}

function ReadingCard({ reading }) {
  return (
    <Link
      href={reading.href}
      className="block bg-bg border border-border rounded-xl p-4 sm:p-5 hover:border-accent/50 hover:bg-accent/[0.03] transition-all print-link"
    >
      <h4 className="font-sans text-sm font-bold text-primary leading-snug mb-1.5">
        {reading.title}
      </h4>
      <p className="font-sans text-xs text-secondary leading-relaxed">
        {reading.reason}
      </p>
    </Link>
  )
}

function EmailResultsCard({ shareUrl }) {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [linkCopied, setLinkCopied] = useState(false)

  const copyLink = useCallback(() => {
    if (!shareUrl) return
    navigator.clipboard.writeText(shareUrl).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }, [shareUrl])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const trimmed = email.trim().toLowerCase()
      if (!EMAIL_RE.test(trimmed)) {
        setStatus('error')
        setErrorMsg('Please enter a valid email address.')
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
          setStatus('error')
          setErrorMsg(
            typeof data.error === 'string'
              ? data.error
              : 'Could not subscribe. Please try again.'
          )
          return
        }
        setStatus('success')
      } catch {
        setStatus('error')
        setErrorMsg('Could not connect. Please try again later.')
      }
    },
    [email, website]
  )

  return (
    <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 sm:p-6 mb-8 print:hidden">
      <h3 className="font-sans text-base font-bold text-primary mb-1">
        Want to come back to this?
      </h3>
      <p className="font-sans text-sm text-secondary mb-4 leading-relaxed">
        Save your results link, or subscribe for weekly updates on AI resources
        and regulation in plain English.
      </p>

      <div className="flex flex-col sm:flex-row gap-2 mb-3">
        <input
          type="text"
          value={shareUrl}
          readOnly
          onClick={(e) => e.target.select()}
          className="flex-1 bg-bg border border-border rounded-lg px-3 py-2 text-xs text-secondary font-mono truncate min-w-0"
          aria-label="Shareable results URL"
        />
        <button
          type="button"
          onClick={copyLink}
          className="bg-bg border border-border rounded-lg px-4 py-2 text-sm font-semibold text-secondary hover:text-primary hover:border-accent/50 transition-colors whitespace-nowrap cursor-pointer"
        >
          {linkCopied ? 'Copied' : 'Copy Link'}
        </button>
      </div>

      {status === 'success' ? (
        <p className="font-sans text-sm text-accent font-semibold mt-3">
          You&apos;re subscribed. We&apos;ll send updates weekly.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 mt-3"
          noValidate
        >
          <label htmlFor="assessment-email" className="sr-only">
            Email address
          </label>
          <input
            id="assessment-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            disabled={status === 'loading'}
            aria-invalid={status === 'error' ? 'true' : undefined}
            className="flex-1 bg-bg border border-border rounded-lg px-3 py-2 text-sm text-primary outline-none focus:border-accent/50 transition-colors placeholder:text-secondary/60 disabled:opacity-60 min-w-0"
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
            className="bg-accent text-accent-text rounded-lg px-5 py-2 text-sm font-semibold hover:bg-accent-dark transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && errorMsg && (
        <p role="alert" className="mt-2 font-sans text-xs text-red-600">
          {errorMsg}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  PDF generation                                                     */
/* ------------------------------------------------------------------ */

function buildPdfHtml(result) {
  const whoYouAreHtml = result.whoYouAre
    ? `<div style="margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #d6e2ef;"><h3 style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#0F5E9C;margin:0 0 8px;">Who You Are</h3><p style="font-family:'DM Sans',sans-serif;font-size:14px;color:#20262B;line-height:1.6;margin:0;">${result.whoYouAre}</p></div>`
    : ''

  const preparednessHtml = result.preparedness
    ? `<div style="margin-bottom:28px;padding:20px;border:1px solid #c9d7e6;background:#f3f6fa;text-align:center;page-break-inside:avoid;"><div style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#0F5E9C;margin-bottom:8px;">AI Readiness Score</div><div style="font-family:'Playfair Display',Georgia,serif;font-size:48px;font-weight:700;color:#20262B;line-height:1;">${result.preparedness.score}<span style="font-family:'DM Sans',sans-serif;font-size:20px;color:#888;font-weight:600;"> / 100</span></div><div style="font-family:'Playfair Display',Georgia,serif;font-size:18px;font-weight:700;color:#0B4A7D;margin-top:8px;">${result.preparedness.label}</div></div>`
    : ''

  const summaryHtml = result.summary
    ? `<p style="font-family:'DM Sans',sans-serif;font-size:13px;color:#555;line-height:1.6;text-align:center;max-width:560px;margin:0 auto 28px;">${result.summary}</p>`
    : ''

  const snapshotHtml = [
    { title: 'AI Adoption', label: result.readiness.label, color: READINESS_COLORS[result.readiness.label] || '#0F5E9C' },
    { title: 'Guardrails', label: result.guardrails.label, color: GUARDRAIL_COLORS[result.guardrails.label] || '#fbbf24' },
    { title: 'Risk Exposure', label: result.risk.label, color: RISK_COLORS[result.risk.label] || '#fbbf24' },
  ]
    .map(
      (s) =>
        `<div style="text-align:center;padding:16px;border:1px solid #ddd;">
          <div style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#555;margin-bottom:6px;">${s.title}</div>
          <div style="font-family:'Playfair Display',Georgia,serif;font-size:18px;font-weight:700;color:${s.color};">${s.label}</div>
        </div>`
    )
    .join('')

  const peerContextHtml = result.peerContext
    ? `<p style="font-family:'DM Sans',sans-serif;font-style:italic;font-size:13px;color:#555;line-height:1.6;text-align:center;max-width:560px;margin:0 auto 28px;">${result.peerContext}</p>`
    : ''

  const gapsHtml =
    result.gaps?.length > 0
      ? `<div style="margin-bottom:28px;">
          <h3 style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#0F5E9C;margin:0 0 12px;">Top Gaps to Close</h3>
          <ul style="margin:0;padding:0;list-style:none;">${result.gaps.map((s) => `<li style="font-family:'DM Sans',sans-serif;font-size:13px;color:#555;line-height:1.6;margin-bottom:8px;padding-left:14px;position:relative;"><span style="position:absolute;left:0;color:#0F5E9C;">&#8226;</span>${s}</li>`).join('')}</ul>
        </div>`
      : ''

  const productsHtml =
    result.productRecommendations?.length > 0
      ? `<div style="margin-bottom:28px;">
          <h3 style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#0F5E9C;margin:0 0 12px;">Recommended for Your Situation</h3>
          ${result.productRecommendations.map((p) => `<div style="border:1px solid #ddd;padding:14px;margin-bottom:8px;page-break-inside:avoid;"><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px;"><div style="font-family:'Playfair Display',Georgia,serif;font-size:15px;font-weight:700;color:#20262B;">${p.name}</div><span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;background:#eaf4ff;color:#0F5E9C;border:1px solid #c9d7e6;">${p.priority}</span></div><div style="font-family:'DM Sans',sans-serif;font-size:13px;color:#555;line-height:1.5;">${p.why}</div></div>`).join('')}
        </div>`
      : ''

  const frameworksHtml =
    result.frameworks?.length > 0
      ? `<div style="margin-bottom:28px;">
          <h3 style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#0F5E9C;margin:0 0 12px;">Regulations &amp; Frameworks Worth Watching</h3>
          ${result.frameworks.map((f) => `<div style="border:1px solid #ddd;padding:14px;margin-bottom:8px;page-break-inside:avoid;"><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px;"><div style="font-family:'Playfair Display',Georgia,serif;font-size:15px;font-weight:700;color:#20262B;">${f.name}</div><span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;background:#eaf4ff;color:#0F5E9C;border:1px solid #c9d7e6;">${f.priority}</span></div><div style="font-family:'DM Sans',sans-serif;font-size:13px;color:#555;line-height:1.5;">${f.why}</div></div>`).join('')}
        </div>`
      : ''

  const readingHtml =
    result.recommendedReading?.length > 0
      ? `<div style="margin-bottom:28px;">
          <h3 style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#0F5E9C;margin:0 0 12px;">Recommended Reading</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">${result.recommendedReading.map((r) => `<div style="border:1px solid #ddd;padding:14px;page-break-inside:avoid;"><div style="font-family:'Playfair Display',Georgia,serif;font-size:14px;font-weight:700;color:#20262B;margin-bottom:4px;">${r.title}</div><div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#555;line-height:1.5;">${r.reason}</div></div>`).join('')}</div>
        </div>`
      : ''

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>AIRegReady \u2014 AI Readiness Assessment Report</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
  @page { margin: 2cm; }
  body { margin:0; padding:0; background:#fff; color:#20262B; font-family:'DM Sans',sans-serif; }
  @media print { body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
</style>
</head>
<body>
  <div style="max-width:640px;margin:0 auto;padding:20px 0;">
    <div style="border-bottom:2px solid #ddd;padding-bottom:12px;margin-bottom:24px;">
      <div style="font-family:'Playfair Display',Georgia,serif;font-size:22px;font-weight:700;color:#20262B;">AIRegReady &mdash; AI Readiness Assessment</div>
      <div style="font-family:'DM Sans',sans-serif;font-size:13px;color:#555;margin-top:4px;">Generated ${result.generatedAt}</div>
    </div>
    ${whoYouAreHtml}
    ${preparednessHtml}
    ${summaryHtml}
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:16px;">${snapshotHtml}</div>
    ${peerContextHtml}
    ${gapsHtml}
    ${productsHtml}
    ${frameworksHtml}
    ${readingHtml}
    <div style="border:1px solid #ccc;background:#f9f6f2;padding:16px;margin-bottom:24px;page-break-inside:avoid;">
      <p style="font-family:'DM Sans',sans-serif;font-size:13px;color:#765836;line-height:1.5;margin:0;">
        <strong>Important:</strong> This assessment provides general information based on your responses and does not constitute legal advice. Requirements vary by jurisdiction and situation. Consult qualified legal counsel for decisions specific to your circumstances.
      </p>
    </div>
    <div style="border-top:1px solid #ddd;padding-top:12px;">
      <p style="font-family:'DM Sans',sans-serif;font-size:11px;color:#888;line-height:1.5;margin:0;">
        Generated by AIRegReady.com &mdash; This assessment is for informational purposes only and does not constitute legal advice.
      </p>
    </div>
  </div>
</body>
</html>`
}

/* ------------------------------------------------------------------ */
/*  Report display                                                     */
/* ------------------------------------------------------------------ */

function ReportResults({ result, onReset }) {
  const handleDownloadPDF = useCallback(() => {
    const html = buildPdfHtml(result)
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      window.print()
      return
    }
    printWindow.document.write(html)
    printWindow.document.close()
    printWindow.onload = () => setTimeout(() => printWindow.print(), 400)
    setTimeout(() => { if (!printWindow.closed) printWindow.print() }, 1500)
  }, [result])

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    const params = new URLSearchParams()
    params.set('v', '2')
    Object.entries(result.answerMap).forEach(([qId, value]) => {
      params.set(`q${qId}`, Array.isArray(value) ? value.join(',') : value)
    })
    return `${window.location.origin}/assessment?r=${btoa(params.toString())}`
  }, [result.answerMap])

  const primaryRecommendation = result.primaryRecommendation
  const secondaryRecommendations = result.secondaryRecommendations || []

  if (result.shortTrack) {
    return (
      <div className="print-report">
        <div className="mb-8">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Your Starting Point
          </h3>
          <p className="font-sans text-base text-primary leading-relaxed">
            {result.whoYouAre}
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
            What This Means
          </h3>
          <p className="font-sans text-sm text-secondary leading-relaxed">
            {result.summary}
          </p>
          {result.marketContext && (
            <p className="font-sans text-sm text-secondary leading-relaxed mt-3">
              {result.marketContext}
            </p>
          )}
        </div>

        {result.actionPlan && (
          <div className="mb-10">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
              Recommended First Moves
            </h3>
            <ActionPlanSection actionPlan={result.actionPlan} />
          </div>
        )}

        {primaryRecommendation && (
          <div className="mb-10">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
              Start Here
            </h3>
            <ProductCard product={primaryRecommendation} featured />
          </div>
        )}

        {secondaryRecommendations.length > 0 && (
          <div className="mb-10">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
              Also Worth Considering
            </h3>
            <div className="space-y-3">
              {secondaryRecommendations.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        )}

        {result.recommendedReading?.length > 0 && (
          <div className="mb-10">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
              Worth Reading
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {result.recommendedReading.map((reading, i) => (
                <ReadingCard key={i} reading={reading} />
              ))}
            </div>
          </div>
        )}

        <EmailResultsCard shareUrl={shareUrl} />

        <div className="bg-accent/10 border border-accent/20 rounded-[10px] p-5 mb-8">
          <p className="font-sans text-sm text-accent-dark leading-relaxed">
            <strong>Important:</strong> This assessment provides general information based on your responses and does not constitute legal advice. Requirements vary by jurisdiction and situation. Consult qualified legal counsel for decisions specific to your circumstances.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 print:hidden">
          <button
            onClick={onReset}
            className="bg-bg border border-border rounded-lg px-6 py-3 text-secondary font-sans text-sm font-semibold hover:text-primary hover:border-accent/50 transition-colors cursor-pointer"
          >
            Start Over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="print-report">
      {/* Print-only header */}
      <div className="hidden print:block mb-6 pb-4 border-b border-border">
        <div className="font-sans text-2xl font-bold text-primary">
          AI Readiness Assessment Report
        </div>
        <div className="font-sans text-sm text-secondary mt-1">
          Generated {result.generatedAt} — AIRegReady.com
        </div>
      </div>

      {/* Who you are */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Who You Are
        </h3>
        <p className="font-sans text-base text-primary leading-relaxed">
          {result.whoYouAre}
        </p>
      </div>

      {/* Headline score */}
      {result.preparedness && (
        <div className="mb-10 bg-gradient-to-br from-accent/[0.06] to-transparent border border-accent/25 rounded-2xl p-6 sm:p-8 text-center">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Your AI Readiness Score
          </div>
          <div className="font-sans text-6xl sm:text-7xl font-bold text-primary tabular-nums leading-none">
            {result.preparedness.score}
            <span className="font-sans text-2xl sm:text-3xl text-secondary/70 font-semibold"> / 100</span>
          </div>
          <div className="font-sans text-xl sm:text-2xl text-accent-dark font-bold mt-3">
            {result.preparedness.label}
          </div>
          <div className="mt-5 max-w-[420px] mx-auto h-2 bg-border/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-700"
              style={{ width: `${result.preparedness.score}%` }}
            />
          </div>
          {result.summary && (
            <p className="mt-5 max-w-[560px] mx-auto font-sans text-sm text-secondary leading-relaxed">
              {result.summary}
            </p>
          )}
        </div>
      )}

      {/* Snapshot */}
      <div className="mb-6">
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
          The Three Axes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <SnapshotCard title="AI Adoption" label={result.readiness.label} colorMap={READINESS_COLORS} />
          <SnapshotCard title="Guardrails" label={result.guardrails.label} colorMap={GUARDRAIL_COLORS} />
          <SnapshotCard title="Risk Exposure" label={result.risk.label} colorMap={RISK_COLORS} />
        </div>
        {result.peerContext && (
          <p className="font-sans text-sm text-secondary italic leading-relaxed text-center max-w-[560px] mx-auto mt-5">
            {result.peerContext}
          </p>
        )}
      </div>

      {/* Top gaps */}
      {result.gaps?.length > 0 && (
        <div className="mb-10">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
            Top Gaps to Close
          </h3>
          <ul className="space-y-3">
            {result.gaps.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-sans text-sm text-secondary leading-relaxed"
              >
                <span className="text-accent mt-0.5 shrink-0">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.actionPlan && (
        <div className="mb-10">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
            Action Plan
          </h3>
          <ActionPlanSection actionPlan={result.actionPlan} />
        </div>
      )}

      {/* Product recommendations */}
      {primaryRecommendation && (
        <div className="mb-10">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
            Start Here
          </h3>
          <ProductCard product={primaryRecommendation} featured />
        </div>
      )}

      {secondaryRecommendations.length > 0 && (
        <div className="mb-10">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
            Also Worth Considering
          </h3>
          <div className="space-y-3">
            {secondaryRecommendations.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Frameworks */}
      {result.frameworks?.length > 0 && (
        <div className="mb-10">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
            Regulations & Frameworks Worth Watching
          </h3>
          <div className="space-y-3">
            {result.frameworks.map((fw, i) => (
              <FrameworkCard key={i} framework={fw} />
            ))}
          </div>
        </div>
      )}

      {/* Recommended reading */}
      {result.recommendedReading?.length > 0 && (
        <div className="mb-10">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
            Recommended Reading
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {result.recommendedReading.map((reading, i) => (
              <ReadingCard key={i} reading={reading} />
            ))}
          </div>
        </div>
      )}

      <EmailResultsCard shareUrl={shareUrl} />

      <div className="bg-accent/10 border border-accent/20 rounded-[10px] p-5 mb-8">
        <p className="font-sans text-sm text-accent-dark leading-relaxed">
          <strong>Important:</strong> This assessment provides general information
          based on your responses and does not constitute legal advice. Requirements
          vary by jurisdiction and situation. Consult qualified legal counsel for
          decisions specific to your circumstances.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 print:hidden">
        <button
          onClick={handleDownloadPDF}
          className="inline-flex items-center gap-2 bg-accent text-accent-text rounded-lg px-6 py-3 font-sans text-sm font-semibold hover:bg-accent-dark transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF Report
        </button>
        <button
          onClick={onReset}
          className="bg-bg border border-border rounded-lg px-6 py-3 text-secondary font-sans text-sm font-semibold hover:text-primary hover:border-accent/50 transition-colors cursor-pointer"
        >
          Start Over
        </button>
      </div>

      <div className="mt-8 pt-8 border-t border-border/60 print:hidden">
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
          Keep Going
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/checklist"
            className="block bg-bg border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all no-underline"
          >
            <div className="font-sans text-sm font-bold text-primary mb-1">
              AI Readiness Checklist
            </div>
            <p className="font-sans text-xs text-secondary">
              Work through a practical checklist based on what this assessment flagged
            </p>
          </Link>
          <Link
            href="/resources"
            className="block bg-bg border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all no-underline"
          >
            <div className="font-sans text-sm font-bold text-primary mb-1">
              Resource Library
            </div>
            <p className="font-sans text-xs text-secondary">
              Browse all our plain-English AI resources and frameworks
            </p>
          </Link>
        </div>
      </div>

      <div className="hidden print:block mt-8 pt-4 border-t border-border">
        <p className="font-sans text-xs text-secondary">
          This report was generated by the free AI Readiness Assessment tool at
          airegready.com. Content is for informational purposes only and does not
          constitute legal advice.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AssessmentTool() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [multiSelected, setMultiSelected] = useState([])
  const [result, setResult] = useState(null)
  const [resumeOffer, setResumeOffer] = useState(null)

  const currentQ = QUESTIONS[step]

  const applicableTotal = useMemo(() => {
    const answerMap = buildAnswerMapFromArray(answers)
    // If the current question isn't yet in answerMap, also account for whichever
    // branch it represents — include current in the count so progress reads right.
    const speculativeMap = { ...answerMap }
    if (currentQ && !(currentQ.id in speculativeMap)) {
      speculativeMap[currentQ.id] = null
    }
    return QUESTIONS.filter((q) => !q.appliesTo || q.appliesTo(speculativeMap)).length || QUESTIONS.length
  }, [answers, currentQ])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const rehydrated = rehydrateAnswersFromUrl()
    if (rehydrated) {
      setResult(getAssessmentReport(rehydrated))
      clearSavedProgress()
      return
    }

    const params = new URLSearchParams(window.location.search)
    const start = params.get('start')
    if (start) {
      const q1 = QUESTIONS[0]
      const option = q1.options.find((o) => o.value === start)
      if (option) {
        const answer = { qId: q1.id, value: start }
        if (option.score !== undefined) answer.score = option.score
        setAnswers([answer])
        const nextStep = findNextApplicableStep(0, { [q1.id]: start })
        setStep(nextStep !== null ? nextStep : 0)
        clearSavedProgress()
        return
      }
    }

    const saved = loadSavedProgress()
    if (saved) setResumeOffer(saved)
  }, [])

  useEffect(() => {
    if (result) return
    saveProgress(answers, step)
  }, [answers, step, result])

  const handleResume = () => {
    if (!resumeOffer) return
    setAnswers(resumeOffer.answers)
    setStep(resumeOffer.step)
    setResumeOffer(null)
  }

  const handleDeclineResume = () => {
    clearSavedProgress()
    setResumeOffer(null)
  }

  const handleSingleAnswer = (option) => {
    const answer = { qId: currentQ.id, value: option.value }
    if (option.score !== undefined) answer.score = option.score
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    const nextStep = findNextApplicableStep(step, buildAnswerMapFromArray(newAnswers))
    if (nextStep !== null) {
      setStep(nextStep)
    } else {
      finishAssessment(newAnswers)
    }
  }

  const toggleMultiSelect = (value) => {
    const option = currentQ.options.find((o) => o.value === value)
    const isExclusive = option?.exclusive

    setMultiSelected((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value)
      }
      if (isExclusive) {
        return [value]
      }
      const withoutExclusive = prev.filter((v) => {
        const opt = currentQ.options.find((o) => o.value === v)
        return !opt?.exclusive
      })
      return [...withoutExclusive, value]
    })
  }

  const handleMultiNext = () => {
    const newAnswers = [
      ...answers,
      { qId: currentQ.id, values: multiSelected, score: computeMultiScore(currentQ, multiSelected) },
    ]
    setAnswers(newAnswers)
    setMultiSelected([])

    const nextStep = findNextApplicableStep(step, buildAnswerMapFromArray(newAnswers))
    if (nextStep !== null) {
      setStep(nextStep)
    } else {
      finishAssessment(newAnswers)
    }
  }

  const finishAssessment = (finalAnswers) => {
    const report = getAssessmentReport(finalAnswers)
    setResult(report)
    clearSavedProgress()
    const telemetry = {
      schemaVersion: ASSESSMENT_SCHEMA_VERSION,
      shortTrack: report.shortTrack,
      entity: report.answerMap?.[1] || null,
      location: report.answerMap?.[2] || null,
      role: report.answerMap?.[3] || null,
      marketExposure: report.answerMap?.[7] || null,
      priority: report.answerMap?.[17] || null,
      readiness: report.readiness?.label || null,
      guardrails: report.guardrails?.label || null,
      risk: report.risk?.label || null,
      frameworkCount: report.frameworks?.length || 0,
      primaryRecommendation: report.primaryRecommendation?.slug || null,
      timestamp: new Date().toISOString(),
    }
    fetch('/api/assessment-complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(telemetry),
    }).catch(() => {})
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
    setMultiSelected([])
    setResult(null)
    setResumeOffer(null)
    clearSavedProgress()
    if (typeof window !== 'undefined' && window.location.search) {
      window.history.replaceState({}, '', window.location.pathname)
    }
  }

  return (
    <section
      id="assessment"
      className="py-24 px-6 max-w-[800px] mx-auto"
      aria-labelledby="assessment-heading"
    >
      <div className="text-center mb-14 print:hidden">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Free Tool
        </div>
        <h2
          id="assessment-heading"
          className="font-sans text-4xl sm:text-5xl font-bold text-primary"
        >
          How AI-Ready Is Your Work?
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
          A few short questions tailored to your role, market exposure, and use case,
          about 4 minutes. See where you stand, what gaps matter most, and what to do next.
        </p>
      </div>

      <div className={`bg-surface border-2 border-border/80 rounded-2xl p-6 sm:p-10 shadow-[0_12px_40px_-20px_rgba(32,38,43,0.18)] ${result ? 'print:border-0 print:p-0 print:bg-transparent print:shadow-none' : ''}`}>
        {/* Screen reader progress */}
        <div aria-live="polite" className="sr-only">
          {!result && `Question ${answers.length + 1} of ${applicableTotal}: ${currentQ.text}`}
        </div>

        {resumeOffer && !result && (
          <div className="mb-6 bg-accent/10 border border-accent/30 rounded-xl p-5 sm:p-6">
            <h3 className="font-sans text-lg font-bold text-primary mb-1">
              Pick up where you left off?
            </h3>
            <p className="font-sans text-sm text-secondary mb-4 leading-relaxed">
              You answered {resumeOffer.answers.length} question
              {resumeOffer.answers.length === 1 ? '' : 's'} earlier in this browser.
              Saved locally — nothing was sent to our servers.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleResume}
                className="bg-accent text-accent-text rounded-lg px-5 py-2 text-sm font-semibold hover:bg-accent-dark transition-colors cursor-pointer"
              >
                Resume
              </button>
              <button
                onClick={handleDeclineResume}
                className="bg-bg border border-border rounded-lg px-5 py-2 text-sm font-semibold text-secondary hover:text-primary hover:border-accent/50 transition-colors cursor-pointer"
              >
                Start fresh
              </button>
            </div>
          </div>
        )}

        {!result ? (
          <>
            {/* Progress bar */}
            <div className="flex justify-between items-center mb-8">
              <span className="font-sans text-xs text-secondary font-semibold">
                Question {answers.length + 1} of {applicableTotal}
              </span>
              <div className="w-[120px] h-1 bg-border rounded-full overflow-hidden" role="progressbar" aria-valuenow={answers.length + 1} aria-valuemin={1} aria-valuemax={applicableTotal} aria-label={`Question ${answers.length + 1} of ${applicableTotal}`}>
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-500"
                  style={{ width: `${((answers.length + 1) / applicableTotal) * 100}%` }}
                />
              </div>
            </div>

            {currentQ.type === 'dropdown' ? (
              /* Dropdown question (Q2 state) */
              <fieldset className="border-none p-0 m-0">
                <legend className="font-sans text-lg sm:text-xl font-semibold text-primary mb-2 leading-snug">
                  {currentQ.text}
                </legend>
                {currentQ.subtitle && (
                  <p className="font-sans text-sm text-secondary mb-5 leading-relaxed">
                    {currentQ.subtitle}
                  </p>
                )}
                <select
                  className="w-full bg-bg border border-border rounded-[10px] px-4 py-3 font-sans text-sm text-primary outline-none focus:border-accent transition-colors cursor-pointer"
                  defaultValue=""
                  onChange={(e) => {
                    const opt = currentQ.options.find((o) => o.value === e.target.value)
                    if (opt) handleSingleAnswer(opt)
                  }}
                  aria-label={currentQ.text}
                >
                  <option value="" disabled>Select one...</option>
                  {currentQ.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </fieldset>
            ) : currentQ.multi ? (
              /* Multi-select question */
              <fieldset className="border-none p-0 m-0">
                <legend className="font-sans text-lg sm:text-xl font-semibold text-primary mb-2 leading-snug">
                  {currentQ.text}
                </legend>
                {currentQ.subtitle && (
                  <p className="font-sans text-sm text-secondary mb-5">
                    {currentQ.subtitle}
                  </p>
                )}
                <div className="flex flex-col gap-2">
                  {currentQ.options.map((opt) => {
                    const selected = multiSelected.includes(opt.value)
                    return (
                      <button
                        key={opt.value}
                        onClick={() => toggleMultiSelect(opt.value)}
                        className={`flex items-center gap-3 border rounded-[10px] px-5 py-3.5 font-sans text-sm font-medium text-left transition-all cursor-pointer ${
                          selected
                            ? 'border-accent bg-accent/[0.08] text-primary'
                            : 'bg-bg border-border text-secondary hover:border-accent/50 hover:bg-accent/[0.04] hover:text-primary'
                        }`}
                        aria-pressed={selected}
                      >
                        <span
                          className={`inline-flex items-center justify-center w-5 h-5 shrink-0 rounded border transition-colors ${
                            selected
                              ? 'bg-accent border-accent text-accent-text'
                              : 'border-border bg-bg'
                          }`}
                        >
                          {selected && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                              <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
                <button
                  onClick={handleMultiNext}
                  disabled={multiSelected.length === 0}
                  className="mt-5 bg-gradient-to-br from-accent to-accent-dark text-accent-text px-7 py-3 rounded-lg text-sm font-bold font-sans shadow-[0_14px_32px_-22px_rgba(11,27,47,0.75)] hover:shadow-[0_18px_42px_-26px_rgba(11,27,47,0.85)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_14px_32px_-22px_rgba(11,27,47,0.75)] cursor-pointer"
                >
                  Next &rarr;
                </button>
              </fieldset>
            ) : (
              /* Single-select question */
              <fieldset className="border-none p-0 m-0">
                <legend className="font-sans text-lg sm:text-xl font-semibold text-primary mb-2 leading-snug">
                  {currentQ.text}
                </legend>
                {currentQ.subtitle && (
                  <p className="font-sans text-sm text-secondary mb-5 leading-relaxed">
                    {currentQ.subtitle}
                  </p>
                )}
                <div className={`flex flex-col gap-2.5 ${currentQ.subtitle ? '' : 'mt-4'}`}>
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSingleAnswer(opt)}
                      className="bg-bg border border-border rounded-[10px] px-5 py-3.5 text-secondary font-sans text-sm font-medium text-left transition-all hover:border-accent/50 hover:bg-accent/[0.04] hover:text-primary cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}
          </>
        ) : (
          <ReportResults result={result} onReset={reset} />
        )}
      </div>
    </section>
  )
}
