import Breadcrumb from '@/components/Breadcrumb'
import Disclaimer from '@/components/Disclaimer'

export const metadata = {
  title: 'About',
  description:
    'AIRegReady is a practical AI governance document catalog and readiness resource for teams that need plain-English templates, trackers, and guidance.',
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
            Practical AI governance documents, frameworks, assessments, and
            plain-English guidance for internal readiness work.
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
                AIRegReady is a practical catalog of AI governance documents
                for teams that need to write a policy, review a vendor, train
                staff, document AI use, or track regulatory topics without
                buying enterprise tooling.
              </p>
              <p>
                The site combines plain-English regulatory explainers with
                editable resource kits, checklists, trackers, playbooks, and
                readiness prompts. The goal is to help teams create better
                internal records and better questions for qualified counsel.
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
                Founders, new business owners, consultants, and operators who need practical AI governance records.
                That includes:
              </p>
              <ul className="flex flex-col gap-2 ml-1">
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    People starting or growing a business and introducing AI
                    into their operations
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Schools, nonprofits, and lean operations teams formalizing
                    AI use
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                  <span>
                    Lean teams and departments trying to put practical AI
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
                    Consultants who need educational templates and workshop
                    materials for client conversations
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
                This is also not a compliance guarantee, legal-services
                substitute, or generic AI commentary site. The goal is practical
                readiness support: clearer records, clearer roles, and better
                preparation for legal or operational review.
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
                The foundation is practical information and editable documents
                that teams can adapt. Over time, AIRegReady will connect the
                catalog to delivery formats, product pages, and update workflows
                for the document kits already being drafted.
              </p>
              <p>
                The boundary stays the same: educational resources only, not
                legal advice or a promise that a template satisfies a specific
                obligation.
              </p>
            </div>
          </section>
        </div>

        <Disclaimer />
      </div>
    </div>
  )
}
