'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

const SECTIONS = [
  {
    title: 'AI Inventory',
    description: 'Know what you\'re using before you do anything else.',
    items: [
      'List every AI tool your team or business currently uses',
      'Note what each tool is used for and who uses it',
      'Identify which tools handle customer, client, or personal data',
      'Check whether any tools were adopted informally (without a review)',
      'Document which AI tools are free/trial vs. paid with contracts',
    ],
  },
  {
    title: 'Use Cases & Risk',
    description: 'Understand where AI is doing real work \u2014 and where the stakes are higher.',
    items: [
      'List the specific tasks or workflows where AI is involved',
      'Flag any use cases that affect decisions about people (hiring, pricing, eligibility)',
      'Flag any use cases involving sensitive data (health, financial, legal, personal)',
      'Note which use cases are customer-facing vs. internal-only',
      'Rank each use case as low, moderate, or high risk based on impact if something goes wrong',
    ],
  },
  {
    title: 'Policies & Guidelines',
    description: 'You don\'t need a manual. You need a few clear rules.',
    items: [
      'Write a simple AI acceptable use policy (even one page counts)',
      'Define which AI tools are approved and which are off-limits',
      'Set rules for what data can and cannot be put into AI tools',
      'Require human review for AI outputs used in important decisions or external communication',
      'Share your policy with everyone who uses AI \u2014 don\'t just file it away',
    ],
  },
  {
    title: 'Tool & Vendor Review',
    description: 'Know what you\'re agreeing to when you use an AI tool.',
    items: [
      'Read the privacy policy and terms for every AI tool you use',
      'Check whether tools use your data for training (and whether you can opt out)',
      'Verify where your data is stored and processed (especially for regulated data)',
      'Review vendor security practices \u2014 encryption, access controls, breach notification',
      'Keep a record of your review for each tool so you don\'t repeat the work',
    ],
  },
  {
    title: 'Regulatory Awareness',
    description: 'Know which rules might apply \u2014 you don\'t need to be an expert.',
    items: [
      'Check whether the EU AI Act applies to you (do any AI outputs affect people in the EU?)',
      'Check whether U.S. state AI laws apply (especially for hiring, lending, or insurance uses)',
      'Identify any sector-specific rules that apply (HIPAA, FCRA, ECOA, etc.)',
      'Review the NIST AI Risk Management Framework as a baseline reference',
      'Take the AIRegReady readiness assessment for a quick overview',
    ],
  },
  {
    title: 'Ongoing Habits',
    description: 'Readiness isn\'t a one-time project. Build a few simple habits.',
    items: [
      'Review your AI inventory when you add or remove tools (at least quarterly)',
      'Revisit your acceptable use policy as your AI usage changes',
      'Monitor regulatory developments in your industry and geography',
      'Keep records of AI-related decisions for auditing if needed',
      'Reassess your risk profile as your use of AI expands',
    ],
  },
]

function buildChecklistPdfHtml(checked) {
  const sectionsHtml = SECTIONS.map((section) => {
    const itemsHtml = section.items
      .map((item, i) => {
        const key = `${section.title}-${i}`
        const isChecked = checked.has(key)
        return `<li style="display:flex;align-items:flex-start;gap:8px;font-family:'Inter',sans-serif;font-size:13px;color:#333;line-height:1.6;margin-bottom:6px;">
          <span style="display:inline-block;width:14px;height:14px;flex-shrink:0;border:1.5px solid ${isChecked ? '#0F5E9C' : '#999'};border-radius:2px;margin-top:3px;background:${isChecked ? '#0F5E9C' : 'transparent'};color:#fff;text-align:center;line-height:14px;font-size:10px;">${isChecked ? '\u2713' : ''}</span>
          <span${isChecked ? ' style="text-decoration:line-through;color:#999;"' : ''}>${item}</span>
        </li>`
      })
      .join('')

    return `<div style="margin-bottom:24px;page-break-inside:avoid;">
      <h3 style="font-family:'Libre Baskerville',Georgia,serif;font-size:16px;font-weight:700;color:#20262B;margin:0 0 4px;">${section.title}</h3>
      <p style="font-family:'Inter',sans-serif;font-size:12px;color:#666;margin:0 0 12px;">${section.description}</p>
      <ul style="margin:0;padding:0;list-style:none;">${itemsHtml}</ul>
    </div>`
  }).join('')

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>AIRegReady \u2014 AI Readiness Checklist</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap');
  @page { margin: 2cm; }
  body { margin:0; padding:0; background:#fff; color:#20262B; font-family:'Inter',sans-serif; }
  @media print { body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
</style>
</head>
<body>
  <div style="max-width:640px;margin:0 auto;padding:20px 0;">
    <div style="border-bottom:2px solid #ddd;padding-bottom:12px;margin-bottom:24px;">
      <div style="font-family:'Libre Baskerville',Georgia,serif;font-size:22px;font-weight:700;color:#20262B;">AI Readiness Checklist</div>
      <div style="font-family:'Inter',sans-serif;font-size:13px;color:#555;margin-top:4px;">AIRegReady.com &mdash; Generated ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
    </div>
    ${sectionsHtml}
    <div style="border-top:1px solid #ddd;padding-top:12px;margin-top:16px;">
      <p style="font-family:'Inter',sans-serif;font-size:11px;color:#888;line-height:1.5;margin:0;">
        This checklist is for informational purposes only and does not constitute legal advice. Visit airegready.com for more resources.
      </p>
    </div>
  </div>
</body>
</html>`
}

export default function ChecklistClient() {
  const [checked, setChecked] = useState(new Set())

  const toggle = (key) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const totalItems = SECTIONS.reduce((sum, s) => sum + s.items.length, 0)
  const checkedCount = checked.size
  const pct = Math.round((checkedCount / totalItems) * 100)

  const handleDownloadPDF = useCallback(() => {
    const html = buildChecklistPdfHtml(checked)
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      window.print()
      return
    }
    printWindow.document.write(html)
    printWindow.document.close()
    printWindow.onload = () => setTimeout(() => printWindow.print(), 400)
    setTimeout(() => { if (!printWindow.closed) printWindow.print() }, 1500)
  }, [checked])

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Checklist' }]}
        />

        <header className="mb-10">
          <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
            Free Resource
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl font-black text-primary leading-tight mb-4">
            AI Readiness Checklist
          </h1>
          <p className="font-sans text-base text-secondary leading-relaxed max-w-[640px]">
            A practical free checklist for founders, new business owners,
            consultants, operators, and lean teams using AI. Use it to see what
            to inventory, what rules to write, which risks to flag, and what
            habits to build before AI use spreads further. Check off items as
            you go.
          </p>
        </header>

        {/* Progress bar */}
        <div className="bg-surface border border-border/60 rounded-xl p-5 mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="font-sans text-sm font-semibold text-primary">
              Progress
            </span>
            <span className="font-sans text-sm text-secondary">
              {checkedCount} of {totalItems} items ({pct}%)
            </span>
          </div>
          <div className="w-full h-2 bg-border/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Checklist sections */}
        <div className="flex flex-col gap-8">
          {SECTIONS.map((section) => {
            const sectionChecked = section.items.filter(
              (_, i) => checked.has(`${section.title}-${i}`)
            ).length
            const allDone = sectionChecked === section.items.length

            return (
              <section
                key={section.title}
                className={`bg-surface border rounded-xl p-6 sm:p-8 transition-colors ${
                  allDone ? 'border-accent/40' : 'border-border/60'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h2 className="font-sans text-xl font-black text-primary">
                    {section.title}
                  </h2>
                  <span className="font-sans text-xs font-semibold text-secondary whitespace-nowrap ml-4">
                    {sectionChecked}/{section.items.length}
                  </span>
                </div>
                <p className="font-sans text-sm text-secondary mb-5">
                  {section.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item, i) => {
                    const key = `${section.title}-${i}`
                    const isChecked = checked.has(key)
                    return (
                      <li key={key}>
                        <label
                          className={`flex items-start gap-3 w-full text-left font-sans text-sm leading-relaxed transition-colors cursor-pointer ${
                            isChecked ? 'text-secondary/60 line-through' : 'text-secondary'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggle(key)}
                            className="sr-only"
                          />
                          <span
                            aria-hidden="true"
                            className={`inline-flex items-center justify-center w-5 h-5 shrink-0 rounded border mt-0.5 transition-colors ${
                              isChecked
                                ? 'bg-accent border-accent text-accent-text'
                                : 'border-border bg-bg'
                            }`}
                          >
                            {isChecked && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <span>{item}</span>
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </section>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-10">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 bg-accent text-accent-text rounded-lg px-6 py-3 font-sans text-sm font-semibold hover:bg-accent-dark transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </button>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 bg-bg border border-border rounded-lg px-6 py-3 text-secondary font-sans text-sm font-semibold hover:text-primary hover:border-accent/50 transition-colors no-underline"
          >
            Take the Assessment
          </Link>
        </div>

        {/* Related resources */}
        <div className="mt-12 pt-8 border-t border-border/60">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
            Related Resources
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/catalog/ai-governance-starter-kit"
              className="block bg-surface border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all no-underline"
            >
              <div className="font-sans text-sm font-black text-primary mb-1">
                AI Governance Starter Kit
              </div>
              <p className="font-sans text-xs text-secondary">
                Turn the checklist gaps into editable inventory, policy, risk, and update documents
              </p>
            </Link>
            <Link
              href="/ai-governance-checklist"
              className="block bg-surface border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all no-underline"
            >
              <div className="font-sans text-sm font-black text-primary mb-1">
                Governance Checklist Guide
              </div>
              <p className="font-sans text-xs text-secondary">
                A plain-English path for new businesses that need minimum viable AI governance
              </p>
            </Link>
            <Link
              href="/assessment"
              className="block bg-surface border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all no-underline"
            >
              <div className="font-sans text-sm font-black text-primary mb-1">
                AI Readiness Assessment
              </div>
              <p className="font-sans text-xs text-secondary">
                A few quick questions to see where you stand and what to focus on
              </p>
            </Link>
            <Link
              href="/blog/ai-compliance-startups"
              className="block bg-surface border border-border/60 rounded-xl p-5 hover:border-accent/50 transition-all no-underline"
            >
              <div className="font-sans text-sm font-black text-primary mb-1">
                AI Compliance for Startups
              </div>
              <p className="font-sans text-xs text-secondary">
                Where to start when resources are limited
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
