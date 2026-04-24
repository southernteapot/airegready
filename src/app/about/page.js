import Breadcrumb from '@/components/Breadcrumb'
import Disclaimer from '@/components/Disclaimer'

export const metadata = {
  title: 'About AIRegReady',
  description:
    'AIRegReady is a free AI resource hub with practical information, frameworks, assessments, and plain-English regulatory guidance for anyone using AI.',
  alternates: {
    canonical: 'https://airegready.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        />

        <header className="mb-10">
          <h1 className="font-sans text-3xl sm:text-4xl font-black text-primary leading-tight mb-4">
            About AIRegReady
          </h1>
          <p className="font-sans text-base text-secondary leading-relaxed">
            Practical AI resources &mdash; frameworks, assessments, and
            plain-English information for real-world use.
          </p>
        </header>

        <div className="flex flex-col gap-10">
          {/* What This Is */}
          <section>
            <h2 className="font-sans text-xl font-black text-primary mb-3">
              What This Site Does
            </h2>
            <div className="flex flex-col gap-3 font-sans text-sm text-secondary leading-relaxed">
              <p>
                AI is changing how people work, but the practical information
                around it &mdash; what tools to trust, what risks to watch for,
                what rules apply &mdash; is scattered, dense, and often written
                for lawyers or enterprise consultants.
              </p>
              <p>
                AIRegReady brings that information together in one place. We
                cover AI frameworks, governance approaches, regulatory
                requirements, and practical next steps &mdash; all in plain
                English. Whether you need to understand the EU AI Act, figure
                out what guardrails to put in place, or just get oriented on
                what matters, this is a starting point.
              </p>
              <p>
                Every regulatory summary links to the source document. Nothing
                is paraphrased behind a wall or presented without attribution.
                If you want to verify a claim or read the full text, the link
                is right there.
              </p>
            </div>
          </section>

          {/* Who It's For */}
          <section>
            <h2 className="font-sans text-xl font-black text-primary mb-3">
              Who This Is For
            </h2>
            <div className="flex flex-col gap-3 font-sans text-sm text-secondary leading-relaxed">
              <p>
                Anyone using AI in the real world. That includes:
              </p>
              <ul className="flex flex-col gap-2 ml-1">
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Founders and small businesses introducing AI into their
                    operations
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Solo operators, freelancers, and side-income builders using
                    AI tools in their work
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Teams at larger companies trying to put practical AI
                    policies in place
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Anyone exploring AI adoption and wanting to understand the
                    landscape before diving in
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    People affected by AI-driven decisions &mdash; in hiring,
                    lending, insurance &mdash; who want to understand what
                    protections exist
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* How Content Is Produced */}
          <section>
            <h2 className="font-sans text-xl font-black text-primary mb-3">
              How Content Is Produced
            </h2>
            <div className="flex flex-col gap-3 font-sans text-sm text-secondary leading-relaxed">
              <p>
                Regulatory summaries are written by reviewing the actual
                legislative text, official guidance, and authoritative analyses.
                We read the source material and distill it into structured,
                plain-English explanations.
              </p>
              <p>
                Every regulation page includes a &ldquo;Source Documents&rdquo;
                section with direct links to official texts. Key facts,
                timelines, and penalty structures are drawn from the regulations
                themselves. Where interpretation is involved, we note it.
              </p>
              <p>
                Content is dated with a &ldquo;Last reviewed&rdquo; marker so
                you can see when it was last checked. AI regulation changes
                frequently, and we work to keep everything current.
              </p>
            </div>
          </section>

          {/* What This Is Not */}
          <section>
            <h2 className="font-sans text-xl font-black text-primary mb-3">
              What This Is Not
            </h2>
            <div className="flex flex-col gap-3 font-sans text-sm text-secondary leading-relaxed">
              <p>
                AIRegReady is not a law firm, and this site does not provide
                legal advice. Regulatory summaries are simplified for clarity
                and do not capture every nuance of the underlying laws. If you
                need guidance on your specific situation, consult qualified
                legal counsel.
              </p>
              <p>
                This is also not a hype site, a sales funnel, or generic AI
                commentary. The goal is to be a genuinely useful resource
                &mdash; free, practical, and informational first.
              </p>
            </div>
          </section>

          {/* Vision */}
          <section>
            <h2 className="font-sans text-xl font-black text-primary mb-3">
              Where This Is Going
            </h2>
            <div className="flex flex-col gap-3 font-sans text-sm text-secondary leading-relaxed">
              <p>
                The foundation is good information &mdash; organized, current,
                and actually readable. Over time, we plan to add practical
                resources like checklists, policy templates, implementation
                guides, and tools that help you stay on top of changes as they
                happen.
              </p>
              <p>
                But the starting point is always the content. If the
                information is not useful, nothing else matters.
              </p>
            </div>
          </section>
        </div>

        <Disclaimer />
      </div>
    </div>
  )
}
