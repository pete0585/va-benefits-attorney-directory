import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Claim Denied: Do You Need an Attorney? Your Next Steps | FindVAAttorney.com',
  description:
    'A VA claim denial is not the end. You have 1 year to appeal, three lane options, and documented evidence showing attorney-represented veterans win at significantly higher rates.',
  alternates: { canonical: 'https://findvaattorney.com/guides/va-claim-denied-next-steps' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do I have to appeal a VA claim denial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the AMA (Appeals Modernization Act), you have one year from the date of your rating decision to file a Notice of Disagreement (NOD) and choose an appeal lane. The one-year window is firm — missing it means starting over with a new claim, which resets your effective date and potentially forfeits years of back pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three appeal lanes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the AMA, veterans choose one of three lanes when appealing a denial: (1) Supplemental Claim — submit new and relevant evidence to the Regional Office; fastest path if you have new medical evidence. (2) Higher-Level Review — a senior VA rater reviews the existing record without new evidence; appropriate if you believe the original rater made a clear error of fact or law. (3) Board of Veterans\' Appeals (BVA) Appeal — appeal directly to a Veterans Law Judge; choose between a direct review, evidence submission, or a hearing before a judge. Each lane has different timelines and strategic tradeoffs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why was my VA claim denied?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common denial reasons include: (1) No service connection established — the VA does not see a link between your condition and military service. (2) Insufficient medical evidence — no diagnosis, no documented severity, or no nexus letter from a physician. (3) Missed C&P exam — missing your Compensation and Pension exam almost always results in denial. (4) Wrong effective date — dispute if the VA used a later date than your original filing. (5) Rating percentage disagreement — the condition is service-connected but rated lower than warranted.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a nexus letter and do I need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A nexus letter is a medical opinion from a physician stating that your current condition is "at least as likely as not" connected to your military service. This is the standard of proof the VA uses for service connection. For many denied claims, the missing piece is a nexus letter from a qualified physician. VA-accredited attorneys know how to obtain nexus letters from independent medical examiners (IMEs) and how to frame them to meet the VA\'s evidentiary standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get an attorney or try to appeal on my own?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Attorney representation significantly improves appeal outcomes. At the Board of Veterans\' Appeals, attorney-represented veterans win approximately 43% of appeals vs. 30% for unrepresented veterans. The cost is a contingency fee (max 20% of back pay) — you pay nothing until you win, and nothing if you lose. For straightforward Supplemental Claims with strong new evidence, self-representation can work. For BVA appeals, CAVC appeals, or complex service connection cases, attorney representation is worth the fee.',
      },
    },
  ],
}

export default function VaClaimDeniedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <Link href="/listings" className="hover:text-brand-navy">Find an Attorney</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Claim Denied: Next Steps</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            VA Claim Denied: Do You Need an Attorney?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A denial is not the final word. You have one year, three appeal lanes, and the option
            to bring in an attorney who only gets paid when you win. Here is what to do next.
          </p>
        </div>

        {/* Alert */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <p className="font-bold text-red-800 mb-1">⏱ You have 1 year from the denial date to appeal.</p>
          <p className="text-red-700 text-sm">Missing this window means starting over with a new claim — which resets your effective date and forfeits back pay. Act now.</p>
        </div>

        <article className="prose-guide">
          <h2>Step 1: Read the denial letter carefully</h2>
          <p>
            The rating decision letter explains exactly why the VA denied your claim. Common reasons:
          </p>
          <ul>
            <li><strong>No service connection</strong> — the VA did not find a link between your condition and military service</li>
            <li><strong>Missing nexus</strong> — no physician opinion connecting your condition to service</li>
            <li><strong>Missed C&P exam</strong> — if you did not attend your Compensation and Pension exam, the denial is almost automatic</li>
            <li><strong>Insufficient evidence of severity</strong> — condition is service-connected but not documented as disabling enough to warrant a rating</li>
            <li><strong>Wrong rating percentage</strong> — condition is service-connected but rated lower than the evidence supports</li>
          </ul>
          <p>
            The denial reason determines your strategy. A nexus problem is solved differently than
            a rating percentage dispute.
          </p>

          <h2>Step 2: Choose your appeal lane</h2>
          <p>
            Under the Appeals Modernization Act (AMA), you choose one of three lanes:
          </p>
          <ul>
            <li><strong>Supplemental Claim</strong> — new and relevant evidence submitted to the Regional Office. Best if you have new medical records, a new nexus letter, or a buddy statement you did not include originally. Fastest lane — typically 4-6 months.</li>
            <li><strong>Higher-Level Review (HLR)</strong> — a senior VA rater reviews the existing record without new evidence. Use when you believe the original decision contained a clear error of law or fact, not a missing evidence problem. No new evidence can be added.</li>
            <li><strong>Board of Veterans&apos; Appeals (BVA)</strong> — appeal to a Veterans Law Judge. Choose between a direct review, evidence-only submission, or a hearing. The most powerful lane for complex cases — and where attorney representation makes the biggest difference. Wait times: 1-2+ years.</li>
          </ul>

          <h2>Step 3: Decide on representation</h2>
          <p>
            For a Supplemental Claim with strong new evidence, you may be able to succeed without an attorney.
            For everything else — especially BVA appeals — attorney representation is worth the contingency fee.
          </p>
          <p>
            VA-accredited attorneys know how to build nexus letters, obtain independent medical examiners,
            frame legal arguments, and cross-examine VA-appointed physicians at BVA hearings. The
            win-rate data backs this up: 43% for attorney-represented veterans vs. 30% for unrepresented
            veterans at the BVA.
          </p>
        </article>

        {/* FAQ */}
        <div className="border-t border-surface-border pt-8 mt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Common Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-surface-border p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related guides */}
        <div className="bg-surface rounded-xl border border-surface-border p-5 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">Related Guides</h2>
          <ul className="space-y-2">
            {[
              { href: '/guides/va-disability-attorney-cost', label: 'How Much Does a VA Disability Attorney Cost?' },
              { href: '/guides/supplemental-claim-va', label: 'How to File a VA Supplemental Claim' },
              { href: '/guides/nexus-letter-va-claim', label: 'What is a Nexus Letter and Why You Need One' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-brand-navy hover:underline flex items-center gap-1.5 text-sm font-medium">
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-label="Arrow" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Get a Free Consultation</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-md mx-auto">
            Most VA disability attorneys offer free case evaluations. You pay nothing unless you win.
          </p>
          <Link
            href="/listings"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Find an Attorney Now <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
      </div>
    </>
  )
}
