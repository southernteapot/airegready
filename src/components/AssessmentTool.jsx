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
        <div className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-gold mb-3">
          Free Tool
        </div>
        <h2
          id="assessment-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-cream"
        >
          AI Compliance Risk Assessment
        </h2>
        <p className="font-sans text-base text-silver mt-3 max-w-[540px] mx-auto leading-relaxed">
          Answer 7 questions. Get your risk profile and the regulations that
          likely apply to you.
        </p>
      </div>

      <div className="bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 sm:p-10">
        {!result ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <span className="font-sans text-[13px] text-dim font-semibold">
                Question {step + 1} of {QUESTIONS.length}
              </span>
              <div className="w-[120px] h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500"
                  style={{
                    width: `${((step + 1) / QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <h3 className="font-sans text-lg sm:text-xl font-semibold text-cream mb-6 leading-snug">
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
                  className="bg-white/[0.03] border border-white/[0.08] rounded-[10px] px-5 py-3.5 text-[#c0c0c6] font-sans text-[15px] font-medium text-left transition-all hover:border-gold/[0.35] hover:bg-gold/[0.06] hover:text-cream cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div>
            <div className="text-center mb-8">
              <div className="font-sans text-[13px] font-bold uppercase tracking-widest text-silver mb-2">
                Your Risk Level
              </div>
              <div
                className="font-serif text-4xl sm:text-5xl font-bold leading-none"
                style={{ color: result.color }}
              >
                {result.level}
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full my-5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${result.pct}%`,
                    background: result.color,
                  }}
                />
              </div>
              <p className="font-sans text-[15px] text-silver leading-relaxed max-w-[500px] mx-auto">
                {result.summary}
              </p>
            </div>
            <div className="mb-8">
              <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-gold mb-4">
                Regulations Likely Applicable to You
              </h4>
              {result.regulations.map((reg, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5 border-b border-white/[0.04] font-sans text-[15px] text-[#c0c0c6]"
                >
                  <span className="text-gold text-sm">&bull;</span>
                  {reg}
                </div>
              ))}
            </div>
            <div className="bg-gold/[0.08] border border-gold/[0.18] rounded-[10px] p-5 mb-6">
              <p className="font-sans text-sm text-gold leading-relaxed">
                <strong>Coming soon:</strong> Detailed compliance roadmaps,
                documentation templates, and automated tracking for each
                regulation. Join the newsletter to get early access.
              </p>
            </div>
            <button
              onClick={reset}
              className="bg-white/[0.04] border border-white/10 rounded-lg px-6 py-3 text-silver font-sans text-sm font-semibold hover:text-cream transition-colors cursor-pointer"
            >
              &larr; Retake Assessment
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
