'use client'

import { useState } from 'react'
import { QUESTIONS, getRiskProfile } from '@/lib/data'

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
      setResult(getRiskProfile(newAnswers))
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
      <div className="text-center mb-12">
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

      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10">
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
          <div>
            <div className="text-center mb-8">
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
            <div className="mb-8">
              <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-accent mb-4">
                Regulations Likely Applicable to You
              </h4>
              {result.regulations.map((reg, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5 border-b border-border/60 font-sans text-[15px] text-secondary"
                >
                  <span className="text-accent text-sm">&bull;</span>
                  {reg}
                </div>
              ))}
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-[10px] p-5 mb-6">
              <p className="font-sans text-sm text-accent-dark leading-relaxed">
                <strong>Coming soon:</strong> Detailed compliance roadmaps,
                documentation templates, and automated tracking for each
                regulation. Join the newsletter to get early access.
              </p>
            </div>
            <button
              onClick={reset}
              className="bg-bg border border-border rounded-lg px-6 py-3 text-secondary font-sans text-sm font-semibold hover:text-primary hover:border-accent/50 transition-colors cursor-pointer"
            >
              &larr; Retake Assessment
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
