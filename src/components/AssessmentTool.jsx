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

function ReportResults({ result, onReset }) {
  const [copied, setCopied] = useState(false)

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

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
          AI Compliance Risk Assessment Report
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
          onClick={handlePrint}
          className="bg-accent text-accent-text rounded-lg px-6 py-3 font-sans text-sm font-semibold hover:bg-accent-dark transition-colors cursor-pointer"
        >
          Download Report (PDF)
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
          This report was generated by the free AI Compliance Risk Assessment tool
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
      setResult(getDetailedReport(newAnswers))
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
          See Which AI Rules May Apply to You
        </h2>
        <p className="font-sans text-base text-secondary mt-3 max-w-[540px] mx-auto leading-relaxed">
          7 questions. 2 minutes. Get a personalized risk profile and a list of
          the regulations you should be paying attention to.
        </p>
      </div>

      <div className={`bg-surface border border-border rounded-2xl p-6 sm:p-10 ${result ? 'print:border-0 print:p-0 print:bg-transparent' : ''}`}>
        {!result ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <span className="font-sans text-[13px] text-secondary font-semibold">
                Question {step + 1} of {QUESTIONS.length}
              </span>
              <div className="w-[120px] h-1 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-500"
                  style={{
                    width: `${((step + 1) / QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <h3 className="font-sans text-lg sm:text-xl font-semibold text-primary mb-6 leading-snug">
              {QUESTIONS[step].text}
            </h3>
            <div
              className="flex flex-col gap-2.5"
              role="radiogroup"
              aria-label={QUESTIONS[step].text}
            >
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
          </>
        ) : (
          <ReportResults result={result} onReset={reset} />
        )}
      </div>
    </section>
  )
}
