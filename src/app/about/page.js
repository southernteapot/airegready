import Breadcrumb from '@/components/Breadcrumb'
import Disclaimer from '@/components/Disclaimer'

export const metadata = {
  title: 'About AIRegReady',
  description:
    'AIRegReady provides plain-English, source-linked guidance on AI regulations. Learn what this site is, how content is produced, and what it is not.',
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
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4">
            About AIRegReady
          </h1>
          <p className="font-sans text-base text-secondary leading-relaxed">
            Plain-English AI regulatory guidance &mdash; source-linked,
            organized by framework, and built to be useful.
          </p>
        </header>

        <div className="flex flex-col gap-10">
          {/* What This Is */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3">
              What This Site Does
            </h2>
            <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
              <p>
                AI regulation is moving fast. New laws, frameworks, and
                enforcement actions appear regularly across jurisdictions, and
                the material is dense, fragmented, and often written in language
                that assumes you already understand it.
              </p>
              <p>
                AIRegReady exists to fix that. We take AI laws and regulatory
                frameworks &mdash; the EU AI Act, NIST AI RMF, U.S. state
                legislation, sector-specific rules, and international governance
                efforts &mdash; and turn them into clear, structured summaries
                that explain what each regulation actually requires, who it
                applies to, and what the practical implications are.
              </p>
              <p>
                Every summary links to the source document. Nothing is
                paraphrased behind a wall or presented without attribution. If
                you want to verify a claim or read the full text, the link is
                right there.
              </p>
            </div>
          </section>

          {/* Who It's For */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3">
              Who This Is For
            </h2>
            <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
              <p>
                Anyone trying to understand how AI regulation works in practice.
                That includes:
              </p>
              <ul className="flex flex-col gap-2 ml-1">
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Companies and teams that build, deploy, or use AI systems and
                    need to understand their regulatory obligations
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Compliance, legal, and policy professionals tracking the
                    evolving landscape
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Founders and product teams evaluating risk as they build with
                    AI
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Individuals affected by AI-driven decisions &mdash; in
                    hiring, lending, insurance, content moderation &mdash; who
                    want to understand what protections exist
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Researchers, journalists, and students studying AI
                    governance
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* How Content Is Produced */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3">
              How Content Is Produced
            </h2>
            <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
              <p>
                Regulatory summaries on AIRegReady are written by reviewing the
                actual legislative text, official guidance, and authoritative
                analyses. We read the source material and distill it into
                structured, plain-English explanations.
              </p>
              <p>
                Every regulation page includes a &ldquo;Source Documents&rdquo;
                section with direct links to official texts. Key facts,
                timelines, and penalty structures are drawn from the regulations
                themselves. Where interpretation is involved, we note it.
              </p>
              <p>
                Content is dated with a &ldquo;Last reviewed&rdquo; marker so
                you can see when it was last checked against the current state of
                the law. AI regulation changes frequently, and we work to keep
                summaries current.
              </p>
            </div>
          </section>

          {/* What This Is Not */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3">
              What This Is Not
            </h2>
            <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
              <p>
                AIRegReady is not a law firm, and this site does not provide
                legal advice. Regulatory summaries are simplified for clarity and
                do not capture every nuance of the underlying laws. If you need
                guidance on your specific compliance obligations, consult
                qualified legal counsel.
              </p>
              <p>
                This is also not a compliance product &mdash; at least not yet.
                Right now, AIRegReady is a free resource. We are building tools
                to help organizations track and manage AI compliance obligations,
                but those are not yet available.
              </p>
            </div>
          </section>

          {/* Vision */}
          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3">
              Where This Is Going
            </h2>
            <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
              <p>
                The long-term goal is to make AI compliance less painful. That
                starts with good information &mdash; organized, current, and
                actually readable. Over time, we plan to add tools that help you
                track which regulations apply to you, generate policy documents,
                and stay on top of changes as they happen.
              </p>
              <p>
                But the foundation is the content. If the explanations are not
                useful, nothing else matters.
              </p>
            </div>
          </section>
        </div>

        <Disclaimer />
      </div>
    </div>
  )
}
