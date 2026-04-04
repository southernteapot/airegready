import Breadcrumb from '@/components/Breadcrumb'

export default function LegalPage() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Legal' }]}
        />

        <header className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4">
            Terms of Use &amp; Privacy Policy
          </h1>
          <p className="font-sans text-sm text-secondary">
            Last updated: March 30, 2026
          </p>
        </header>

        <div className="flex flex-col gap-14">
          {/* ===== TERMS OF USE ===== */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="uppercase text-xs font-sans font-semibold tracking-widest text-accent mb-4">
                Terms of Use
              </p>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                By accessing or using AIRegReady.com (&ldquo;the Site&rdquo;),
                you agree to the following terms. If you do not agree, please do
                not use the Site.
              </p>
            </div>

            {/* Educational Content Only */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Educational Content Only
              </h2>
              <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
                <p>
                  All content on AIRegReady &mdash; including regulatory
                  summaries, blog articles, guides, and assessment tool
                  results &mdash; is provided for educational and informational
                  purposes only. Nothing on this Site constitutes legal advice,
                  and no content should be relied upon as a substitute for
                  professional legal counsel.
                </p>
                <p>
                  Using the Site does not create a professional relationship of
                  any kind between you and AIRegReady. You should consult
                  qualified legal counsel before making decisions about your
                  specific compliance obligations.
                </p>
              </div>
            </section>

            {/* No Guarantee of Accuracy */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                No Guarantee of Accuracy
              </h2>
              <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
                <p>
                  We strive to keep content accurate and current, but AI
                  regulation evolves rapidly. We do not guarantee the accuracy,
                  completeness, or timeliness of any information on the Site.
                  Regulatory summaries are simplified for clarity and may not
                  capture every nuance of the underlying laws or guidance.
                </p>
                <p>
                  AIRegReady is not liable for any errors, omissions, or
                  outcomes resulting from your use of information on the Site.
                </p>
              </div>
            </section>

            {/* Risk Assessment Tool */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Risk Assessment Tool
              </h2>
              <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
                <p>
                  The AI Readiness Assessment tool provides a general,
                  informational estimate of potential regulatory exposure based
                  on the answers you provide. Results are not a compliance
                  determination and should not be treated as one.
                </p>
                <p>
                  The tool is designed to help you start thinking about which
                  regulations may be relevant to your situation. It is not a
                  replacement for a thorough legal or compliance review. You are
                  solely responsible for your own compliance decisions.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Intellectual Property
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                All original content on the Site &mdash; including text,
                graphics, logos, and site design &mdash; is the property of
                AIRegReady and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, or create derivative
                works from this content without prior written permission, except
                for brief quotations with attribution for non-commercial
                purposes.
              </p>
            </section>

            {/* Changes to Content and Terms */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Changes to Content and Terms
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                We reserve the right to modify, update, or remove any content on
                the Site at any time without notice. These Terms of Use may also
                be updated periodically. Continued use of the Site after changes
                constitutes acceptance of the revised terms. We encourage you to
                review this page from time to time.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Limitation of Liability
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                To the fullest extent permitted by applicable law, AIRegReady
                and its operators shall not be liable for any direct, indirect,
                incidental, consequential, or special damages arising out of or
                related to your use of, or inability to use, the Site or its
                content.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Governing Law
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                These terms are governed by and construed in accordance with
                applicable law. Any disputes arising from the use of this Site
                shall be resolved in accordance with applicable law and in the
                appropriate jurisdiction.
              </p>
            </section>
          </div>

          {/* Divider */}
          <hr className="border-border" />

          {/* ===== PRIVACY POLICY ===== */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="uppercase text-xs font-sans font-semibold tracking-widest text-accent mb-4">
                Privacy Policy
              </p>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                AIRegReady respects your privacy. This policy explains what
                data we collect, how we use it, and what control you have over
                it.
              </p>
            </div>

            {/* Data We Collect */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Data We Collect
              </h2>
              <div className="flex flex-col gap-3 font-sans text-[15px] text-secondary leading-relaxed">
                <p>We collect minimal data:</p>
                <ul className="flex flex-col gap-2 ml-1">
                  <li className="flex gap-2.5">
                    <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                    <span>
                      <strong className="font-semibold text-primary">
                        Email addresses
                      </strong>{' '}
                      &mdash; only if you voluntarily subscribe to our
                      newsletter. Your email is used solely to send you AI
                      compliance updates and will not be shared with third
                      parties.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-accent mt-1 text-[8px]">&#9679;</span>
                    <span>
                      <strong className="font-semibold text-primary">
                        Anonymous analytics
                      </strong>{' '}
                      &mdash; we use Cloudflare Web Analytics, which collects
                      aggregated, anonymous usage data (such as page views and
                      referral sources). This data cannot be used to identify
                      individual visitors.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Cookies and Tracking
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                AIRegReady does not use cookies for tracking purposes.
                Cloudflare Web Analytics operates via a lightweight JavaScript
                beacon that is entirely cookieless. No tracking cookies, pixels,
                or fingerprinting techniques are used on this Site.
              </p>
            </section>

            {/* Assessment Tool Data */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Assessment Tool Data
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                The AI Readiness Assessment tool processes all data
                entirely in your browser (client-side). Your answers and results
                are not transmitted to our servers, stored in any database, or
                shared with anyone. When you close or refresh the page, the data
                is gone.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Data Sharing
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                We do not sell, rent, or share your personal data with third
                parties. Email addresses collected through the newsletter are
                used exclusively by AIRegReady to deliver the content you
                subscribed to.
              </p>
            </section>

            {/* Data Deletion */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Data Deletion
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                If you would like to unsubscribe from the newsletter or request
                deletion of your email address from our records, you can email
                us at{' '}
                <a
                  href="mailto:info@airegready.com"
                  className="text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
                >
                  info@airegready.com
                </a>{' '}
                and we will process your request promptly.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Changes to This Policy
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                We may update this privacy policy from time to time. Changes
                will be reflected on this page with an updated &ldquo;Last
                updated&rdquo; date. We encourage you to review this page
                periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-serif text-xl font-bold text-primary mb-3">
                Contact
              </h2>
              <p className="font-sans text-[15px] text-secondary leading-relaxed">
                If you have questions about these terms or this privacy policy,
                contact us at{' '}
                <a
                  href="mailto:info@airegready.com"
                  className="text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
                >
                  info@airegready.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-sans text-xs text-secondary/80 leading-relaxed">
            <strong className="font-semibold">Disclaimer:</strong> Content on
            AIRegReady is educational and does not constitute legal advice.
            Consult qualified legal counsel for specific compliance obligations.
          </p>
        </div>
      </div>
    </div>
  )
}
