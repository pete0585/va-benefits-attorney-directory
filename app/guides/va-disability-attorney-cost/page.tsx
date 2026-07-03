import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Does a VA Disability Attorney Cost? (Contingency Fee Guide) | FindVAAttorney.com',
  description:
    'VA disability attorneys work on contingency — you pay nothing upfront. The fee is capped at 20% of your back pay and only owed if you win. Here is exactly how it works.',
  alternates: { canonical: 'https://findvaattorney.com/guides/va-disability-attorney-cost' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a VA disability attorney charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "VA disability attorneys work on contingency. The VA regulates attorney fees: the maximum allowed fee is 20% of your retroactive back pay (past-due benefits from the effective date of your claim). You pay nothing upfront, no hourly rate, and no retainer. If the attorney does not win your case, you owe them nothing. The contingency fee is deducted from the back pay award before it is disbursed — you never write a check; the VA withholds the fee automatically and pays the attorney directly.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the maximum a VA attorney can charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "VA law (38 U.S.C. § 5904) caps attorney fees at 20% of the past-due benefits awarded. No VA attorney can legally charge more than this — any fee agreement claiming more is unenforceable. VA attorneys cannot charge for the first year of representation (when representing at the regional office level), and the contingency agreement must be filed with the VA's Office of General Counsel.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much back pay can I expect if I win?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Back pay (past-due benefits) accumulates from your effective date — typically the date you first filed your claim — to the date of the decision. If your claim has been pending for 3 years and you are awarded a 70% disability rating, your back pay includes 3 years of 70% compensation. For a single veteran with no dependents, 70% is $1,663.06/month (2024 rate) — meaning 3 years of back pay would be approximately $60,000, and the maximum attorney fee would be $12,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do VA attorneys charge for expenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 20% fee covers the attorney\'s legal work. Separate "costs" (postage, copying, expert witness fees, independent medical examinations) are sometimes charged in addition to the contingency fee, depending on the attorney\'s fee agreement. Ask any attorney you are considering: "Does your 20% fee include all costs, or are expenses billed separately?" Reputable firms typically include standard costs in their fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a VSO help for free instead?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Veterans Service Organization (VSO) representatives provide free claim assistance. The choice is not either-or — you can work with a VSO for an initial claim and hire an attorney if the claim is denied and enters the appeals process. For complex appeals, BVA hearings, and CAVC appeals, attorney representation produces meaningfully better outcomes. The BVA appeal win rate for attorney-represented veterans is approximately 43% vs. 30% for unrepresented veterans.',
      },
    },
  ],
}

export default function VaAttorneyCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <Link href="/listings" className="hover:text-brand-navy">Find an Attorney</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorney Cost Guide</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            How Much Does a VA Disability Attorney Cost?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            VA disability attorneys work on contingency — you pay nothing upfront, nothing if
            you lose, and a capped percentage of your back pay only if you win. Here is exactly
            how the fee structure works.
          </p>
        </div>

        {/* Key numbers */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Maximum attorney fee', value: '20%', note: 'Of back pay only — regulated by VA law' },
            { label: 'Upfront cost', value: '$0', note: 'Contingency — no retainer, no hourly rate' },
            { label: 'Fee if you lose', value: '$0', note: 'You owe nothing if the case is not won' },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface rounded-xl border border-surface-border p-5 text-center">
              <div className="text-3xl font-bold text-brand-navy mb-1">{stat.value}</div>
              <div className="font-semibold text-gray-800 text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.note}</div>
            </div>
          ))}
        </div>

        <article className="prose-guide">
          <h2>How contingency fees work</h2>
          <p>
            When you hire a VA-accredited attorney, you sign a contingency fee agreement. The fee
            is a percentage of your back pay — the retroactive benefits owed from your claim&apos;s
            effective date to the date of the award decision. The VA actually withholds the attorney
            fee from your back pay and pays the attorney directly. You never write a check.
          </p>
          <p>
            The 20% cap is federal law. No VA attorney can charge more. The fee is only assessed
            on back pay — not on your ongoing monthly benefits. Your future monthly payment is yours
            in full.
          </p>

          <h2>A real example: what the numbers look like</h2>
          <p>
            A single veteran with no dependents files a claim in January 2022. After a denial and
            BVA appeal, the claim is awarded at 70% in January 2025 — 3 years after filing.
          </p>
          <ul>
            <li>70% VA rate (2024): $1,663.06/month</li>
            <li>3 years of back pay: ~$59,870</li>
            <li>Maximum 20% attorney fee: ~$11,974</li>
            <li>Veteran receives: ~$47,896 in back pay, plus $1,663.06/month going forward</li>
          </ul>
          <p>
            The attorney earns ~$12,000 for 3 years of legal work on your behalf — and you paid
            nothing out of pocket to get there.
          </p>

          <h2>When paying 20% is worth it</h2>
          <p>
            The 20% feels like a lot in the abstract. In practice, the math is almost always in
            the veteran&apos;s favor. Two reasons:
          </p>
          <ul>
            <li>Attorney-represented veterans win at meaningfully higher rates at the BVA (roughly 43% vs. 30% for unrepresented veterans)</li>
            <li>A win at a higher rating percentage produces not just one lump sum but higher monthly payments for the rest of your life</li>
          </ul>
          <p>
            The comparison is not paying 20% vs. paying nothing — it is paying 20% of a win vs.
            likely losing without representation.
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
              { href: '/guides/va-claim-denied-next-steps', label: 'VA Claim Denied: What to Do Next' },
              { href: '/guides/va-attorney-vs-vso', label: 'VA Attorney vs VSO: Which Do You Need?' },
              { href: '/guides/tdiu-explained', label: 'TDIU: Total Disability Individual Unemployability Explained' },
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
          <h2 className="text-xl font-bold text-white mb-2">Find a VA Disability Attorney</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-md mx-auto">
            Search VA-accredited attorneys by state. Free consultations available — you pay nothing until you win.
          </p>
          <Link
            href="/listings"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Find an Attorney <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
      </div>
    </>
  )
}
