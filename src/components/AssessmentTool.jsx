'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { QUESTIONS, getDetailedReport } from '@/lib/data'

const PRIORITY_STYLES = {
  High: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  Medium: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  Low: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
}

function PriorityBadge({ priority }) {
  const style = PRIORITY_STYLES[priority] || PRIORITY_STYLES.Low
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${style.bg} ${style.text} ${style.border} border`}
    >
      {priority} Priority
    </span>
  )
}

function RegulationCard({ reg }) {
  return (
    <div className="bg-bg border border-border rounded-xl p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <h4 className="font-serif text-lg font-bold text-primary leading-snug">
          {reg.slug ? (
            <Link
              href={`/regulations/${reg.slug}`}
              className="hover:text-accent transition-colors print-link"
            >
              {reg.name}
            </Link>
          ) : (
            reg.name
          )}
        </h4>
        <PriorityBadge priority={reg.priority} />
      </div>
      {reg.whyApplies && (
        <p className="font-sans text-sm text-secondary leading-relaxed mb-4">
          {reg.whyApplies}
        </p>
      )}
      {reg.actions.length > 0 && (
        <div>
          <div className="font-sans text-xs font-bold uppercase tracking-wide text-accent mb-2">
            Key Action Items
          </div>
          <ul className="space-y-1.5">
            {reg.actions.map((action, i) => (
              <li
                key={i}
                className="flex items-start gap-2 font-sans text-sm text-secondary leading-relaxed"
              >
                <span className="text-accent mt-0.5 shrink-0">&#8226;</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function ActionPlanSection({ actionPlan }) {
  const sections = [
    {
      key: 'immediate',
      label: 'Immediate Actions',
      sublabel: 'This Month',
      items: actionPlan.immediate,
      accent: 'border-red-300',
    },
    {
      key: 'shortTerm',
      label: 'Short-Term Actions',
      sublabel: 'Next 90 Days',
      items: actionPlan.shortTerm,
      accent: 'border-amber-300',
    },
    {
      key: 'ongoing',
      label: 'Ongoing Actions',
      sublabel: 'Continuous',
      items: actionPlan.ongoing,
      accent: 'border-green-300',
    },
  ]

  return (
    <div className="space-y-5">
      {sections.map(
        (section) =>
          section.items.length > 0 && (
            <div
              key={section.key}
              className={`bg-bg border border-border rounded-xl p-5 sm:p-6 border-l-4 ${section.accent}`}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <h4 className="font-serif text-base font-bold text-primary">
                  {section.label}
                </h4>
                <span className="font-sans text-xs font-semibold text-secondary uppercase tracking-wide">
                  {section.sublabel}
                </span>
              </div>
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
      <h4 className="font-serif text-[15px] font-bold text-primary leading-snug mb-1.5">
        {reading.title}
      </h4>
      <p className="font-sans text-xs text-secondary leading-relaxed">
        {reading.reason}
      </p>
    </Link>
  )
}

function buildPdfHtml(result) {
  const priorityColors = {
    High: { bg: '#fef2f2', text: '#b91c1c', border: '#fecaca' },
    Medium: { bg: '#fffbeb', text: '#b45309', border: '#fde68a' },
    Low: { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
  }

  const actionBorderColors = {
    immediate: '#fca5a5',
    shortTerm: '#fcd34d',
    ongoing: '#86efac',
  }

  const regCardsHtml = result.regulationCards
    .map((reg) => {
      const pStyle = priorityColors[reg.priority] || priorityColors.Low
      const actionsHtml =
        reg.actions.length > 0
          ? `<div style="margin-top:12px;">
              <div style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#8E6C48;margin-bottom:6px;">Key Action Items</div>
              <ul style="margin:0;padding:0;list-style:none;">${reg.actions.map((a) => `<li style="font-family:'DM Sans',sans-serif;font-size:13px;color:#555;line-height:1.6;margin-bottom:4px;padding-left:14px;position:relative;"><span style="position:absolute;left:0;color:#8E6C48;">&#8226;</span>${a}</li>`).join('')}</ul>
            </div>`
          : ''
      const whyHtml = reg.whyApplies
        ? `<p style="font-family:'DM Sans',sans-serif;font-size:13px;color:#555;line-height:1.5;margin:8px 0 0;">${reg.whyApplies}</p>`
        : ''
      return `<div style="border:1px solid #ddd;padding:16px;margin-bottom:10px;page-break-inside:avoid;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
          <div style="font-family:'Playfair Display',Georgia,serif;font-size:16px;font-weight:700;color:#20262B;">${reg.name}</div>
          <span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;background:${pStyle.bg};color:${pStyle.text};border:1px solid ${pStyle.border};">${reg.priority} Priority</span>
        </div>
        ${whyHtml}
        ${actionsHtml}
      </div>`
    })
    .join('')

  const actionSections = [
    { key: 'immediate', label: 'Immediate Actions', sublabel: 'This Month', items: result.actionPlan.immediate },
    { key: 'shortTerm', label: 'Short-Term Actions', sublabel: 'Next 90 Days', items: result.actionPlan.shortTerm },
    { key: 'ongoing', label: 'Ongoing Actions', sublabel: 'Continuous', items: result.actionPlan.ongoing },
  ]

  const actionPlanHtml = actionSections
    .filter((s) => s.items.length > 0)
    .map(
      (s) =>
        `<div style="border:1px solid #ddd;border-left:4px solid ${actionBorderColors[s.key]};padding:16px;margin-bottom:10px;page-break-inside:avoid;">
          <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px;">
            <div style="font-family:'Playfair Display',Georgia,serif;font-size:15px;font-weight:700;color:#20262B;">${s.label}</div>
            <span style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;color:#555;text-transform:uppercase;letter-spacing:0.06em;">${s.sublabel}</span>
          </div>
          <ul style="margin:0;padding:0;list-style:none;">${s.items.map((item) => `<li style="display:flex;align-items:flex-start;gap:8px;font-family:'DM Sans',sans-serif;font-size:13px;color:#555;line-height:1.6;margin-bottom:6px;"><span style="display:inline-block;width:14px;height:14px;flex-shrink:0;border:1.5px solid #999;border-radius:2px;margin-top:3px;"></span><span>${item}</span></li>`).join('')}</ul>
        </div>`
    )
    .join('')

  const readingHtml =
    result.recommendedReading.length > 0
      ? `<div style="margin-bottom:32px;">
          <h3 style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#8E6C48;margin:0 0 16px;">Recommended Reading</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">${result.recommendedReading.map((r) => `<div style="border:1px solid #ddd;padding:14px;page-break-inside:avoid;"><div style="font-family:'Playfair Display',Georgia,serif;font-size:14px;font-weight:700;color:#20262B;margin-bottom:4px;">${r.title}</div><div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#555;line-height:1.5;">${r.reason}</div></div>`).join('')}</div>
        </div>`
      : ''

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>AIRegReady — AI Readiness Assessment Report</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
  @page { margin: 2cm; }
  body { margin:0; padding:0; background:#fff; color:#20262B; font-family:'DM Sans',sans-serif; }
  @media print {
    body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
</style>
</head>
<body>
  <div style="max-width:640px;margin:0 auto;padding:20px 0;">
    <!-- Header -->
    <div style="border-bottom:2px solid #ddd;padding-bottom:12px;margin-bottom:24px;">
      <div style="font-family:'Playfair Display',Georgia,serif;font-size:22px;font-weight:700;color:#20262B;">AIRegReady &mdash; AI Readiness Assessment</div>
      <div style="font-family:'DM Sans',sans-serif;font-size:13px;color:#555;margin-top:4px;">Generated ${result.generatedAt}</div>
    </div>

    <!-- Risk Level -->
    <div style="text-align:center;margin-bottom:32px;">
      <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#555;margin-bottom:6px;">Your Risk Level</div>
      <div style="font-family:'Playfair Display',Georgia,serif;font-size:40px;font-weight:700;color:${result.color};">${result.level}</div>
      <div style="width:100%;height:8px;background:#e5e5e5;border-radius:4px;margin:16px 0;overflow:hidden;">
        <div style="width:${result.pct}%;height:100%;background:${result.color};border-radius:4px;"></div>
      </div>
      <div style="font-family:'DM Sans',sans-serif;font-size:14px;color:#555;line-height:1.6;max-width:480px;margin:0 auto;">Score: ${result.pct}% &mdash; ${result.summary}</div>
    </div>

    <!-- Applicable Regulations -->
    <div style="margin-bottom:32px;">
      <h3 style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#8E6C48;margin:0 0 16px;">Applicable Regulations</h3>
      ${regCardsHtml}
    </div>

    <!-- Action Plan -->
    <div style="margin-bottom:32px;">
      <h3 style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#8E6C48;margin:0 0 16px;">Personalized Action Plan</h3>
      ${actionPlanHtml}
    </div>

    <!-- Recommended Reading -->
    ${readingHtml}

    <!-- Disclaimer -->
    <div style="border:1px solid #ccc;background:#f9f6f2;padding:16px;margin-bottom:24px;page-break-inside:avoid;">
      <p style="font-family:'DM Sans',sans-serif;font-size:13px;color:#765836;line-height:1.5;margin:0;">
        <strong>Important:</strong> This assessment provides general guidance based on your responses and does not constitute legal advice. Regulatory requirements vary by jurisdiction and specific use case. Consult with qualified legal counsel for compliance decisions specific to your organization.
      </p>
    </div>

    <!-- Footer -->
    <div style="border-top:1px solid #ddd;padding-top:12px;">
      <p style="font-family:'DM Sans',sans-serif;font-size:11px;color:#888;line-height:1.5;margin:0;">
        Generated by AIRegReady.com &mdash; This assessment is for informational purposes only and does not constitute legal advice.
      </p>
    </div>
  </div>
</body>
</html>`
}

function ReportResults({ result, onReset }) {
  const [copied, setCopied] = useState(false)

  const handleDownloadPDF = useCallback(() => {
    const html = buildPdfHtml(result)
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      // Fallback if popup is blocked
      window.print()
      return
    }
    printWindow.document.write(html)
    printWindow.document.close()
    // Wait for fonts to load before printing
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
      }, 400)
    }
    // Also trigger after a longer timeout as a fallback (some browsers don't fire onload reliably)
    setTimeout(() => {
      if (!printWindow.closed) {
        printWindow.print()
      }
    }, 1500)
  }, [result])

  const handleShare = useCallback(() => {
    const params = new URLSearchParams()
    Object.entries(result.answerMap).forEach(([qId, value]) => {
      params.set(`q${qId}`, value)
    })
    const url = `${window.location.origin}/assessment?r=${btoa(params.toString())}`
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }, [result.answerMap])

  return (
    <div className="print-report">
      {/* Print-only header */}
      <div className="hidden print:block mb-6 pb-4 border-b border-border">
        <div className="font-serif text-2xl font-bold text-primary">
          AI Readiness Assessment Report
        </div>
        <div className="font-sans text-sm text-secondary mt-1">
          Generated {result.generatedAt} — AIRegReady.com
        </div>
      </div>

      {/* Risk Score Header */}
      <div className="text-center mb-10">
        <div className="font-sans text-[13px] font-bold uppercase tracking-widest text-secondary mb-2">
          Your Risk Level
        </div>
        <div
          className="font-serif text-4xl sm:text-5xl font-bold leading-none"
          style={{ color: result.color }}
        >
          {result.level}
        </div>
        <div className="w-full h-1.5 bg-border rounded-full my-5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${result.pct}%`,
              background: result.color,
            }}
          />
        </div>
        <p className="font-sans text-[15px] text-secondary leading-relaxed max-w-[500px] mx-auto">
          {result.summary}
        </p>
      </div>

      {/* Applicable Regulations */}
      <div className="mb-10">
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-5">
          Applicable Regulations
        </h3>
        <div className="space-y-4">
          {result.regulationCards.map((reg, i) => (
            <RegulationCard key={i} reg={reg} />
          ))}
        </div>
      </div>

      {/* Personalized Action Plan */}
      <div className="mb-10">
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-5">
          Personalized Action Plan
        </h3>
        <ActionPlanSection actionPlan={result.actionPlan} />
      </div>

      {/* Recommended Reading */}
      {result.recommendedReading.length > 0 && (
        <div className="mb-10">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-5">
            Recommended Reading
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {result.recommendedReading.map((reading, i) => (
              <ReadingCard key={i} reading={reading} />
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-accent/10 border border-accent/20 rounded-[10px] p-5 mb-8">
        <p className="font-sans text-sm text-accent-dark leading-relaxed">
          <strong>Important:</strong> This assessment provides general guidance
          based on your responses and does not constitute legal advice. Regulatory
          requirements vary by jurisdiction and specific use case. Consult with
          qualified legal counsel for compliance decisions specific to your
          organization.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 print:hidden">
        <button
          onClick={handleDownloadPDF}
          className="inline-flex items-center gap-2 bg-accent text-accent-text rounded-lg px-6 py-3 font-sans text-sm font-semibold hover:bg-accent-dark transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF Report
        </button>
        <button
          onClick={handleShare}
          className="bg-bg border border-border rounded-lg px-6 py-3 text-secondary font-sans text-sm font-semibold hover:text-primary hover:border-accent/50 transition-colors cursor-pointer"
        >
          {copied ? 'Link Copied' : 'Share Results'}
        </button>
        <button
          onClick={onReset}
          className="bg-bg border border-border rounded-lg px-6 py-3 text-secondary font-sans text-sm font-semibold hover:text-primary hover:border-accent/50 transition-colors cursor-pointer"
        >
          Start Over
        </button>
      </div>

      {/* Print-only footer */}
      <div className="hidden print:block mt-8 pt-4 border-t border-border">
        <p className="font-sans text-xs text-secondary">
          This report was generated by the free AI Readiness Assessment tool
          at airegready.com. Content is educational and does not constitute legal
          advice.
        </p>
      </div>
    </div>
  )
}

export default function AssessmentTool() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  const handleAnswer = (option) => {
    const newAnswers = [
      ...answers,
      { qId: QUESTIONS[step].id, value: option.value, risk: option.risk },
    ]
    setAnswers(newAnswers)
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
    } else {
      const report = getDetailedReport(newAnswers)
      setResult(report)
      // Track completion — fire and forget
      fetch('/api/assessment-complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          riskLevel: report.riskLevel,
          score: report.score,
          regulationCount: report.regulations?.length || 0,
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {})
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
    setResult(null)
  }

  return (
    <section
      id="assessment"
      className="py-20 px-6 max-w-[720px] mx-auto"
      aria-labelledby="assessment-heading"
    >
      <div className="text-center mb-12 print:hidden">
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
          Free Tool
        </div>
        <h2
          id="assessment-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-primary"
        >
          How AI-Ready Is Your Organization?
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
          7 questions. 2 minutes. See where you stand &mdash; including which
          regulations you should know about and where to focus first.
        </p>
      </div>

      <div className={`bg-surface border border-border rounded-2xl p-6 sm:p-10 ${result ? 'print:border-0 print:p-0 print:bg-transparent' : ''}`}>
        {/* Screen reader announcement for question progress */}
        <div aria-live="polite" className="sr-only">
          {!result && `Question ${step + 1} of ${QUESTIONS.length}: ${QUESTIONS[step].text}`}
        </div>

        {!result ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <span className="font-sans text-[13px] text-secondary font-semibold">
                Question {step + 1} of {QUESTIONS.length}
              </span>
              <div className="w-[120px] h-1 bg-border rounded-full overflow-hidden" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={QUESTIONS.length} aria-label={`Question ${step + 1} of ${QUESTIONS.length}`}>
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-500"
                  style={{
                    width: `${((step + 1) / QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <fieldset className="border-none p-0 m-0">
              <legend className="font-sans text-lg sm:text-xl font-semibold text-primary mb-6 leading-snug">
                {QUESTIONS[step].text}
              </legend>
              <div className="flex flex-col gap-2.5">
                {QUESTIONS[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt)}
                    className="bg-bg border border-border rounded-[10px] px-5 py-3.5 text-secondary font-sans text-[15px] font-medium text-left transition-all hover:border-accent/50 hover:bg-accent/[0.04] hover:text-primary cursor-pointer"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </>
        ) : (
          <ReportResults result={result} onReset={reset} />
        )}
      </div>
    </section>
  )
}
