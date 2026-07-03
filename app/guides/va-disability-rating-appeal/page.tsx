import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Appeal a VA Disability Rating: Attorney vs DIY | FindVAAttorney.com',
  description:
    'Disagree with your VA disability rating percentage? Here is how the appeals process works, when you need an attorney, and how much it costs.',
  alternates: { canonical: 'https://findvaattorney.com/guides/va-disability-rating-appeal' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I appeal if the VA agrees I have a service-connected condition but gives me a 0% rating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — a 0% rating means the condition is service-connected but not currently disabling enough to warrant compensation. You can appeal the rating percentage if you have medical evidence showing the condition is more severe than the VA rated. A 0% rating is still valuable because it establishes service connection — if the condition worsens, upgrading from 0% to 10%+ only requires evidence of severity, not a new nexus argument.",
      },
    },
    {
      '@type': 'Question',
      name: 'What evidence do I need to get a higher disability rating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "VA disability ratings are based on the severity of symptoms as documented in medical records — compared to the VA's Schedule for Rating Disabilities (VASRD). To get a higher rating, you need: current medical records showing more severe symptoms than the original rating reflected; a physician's opinion specifically addressing the VASRD rating criteria and why your condition meets a higher percentage; nexus buddy statements from people who can describe how your condition impacts your daily function and employment; and if relevant, a vocational expert opinion for TDIU claims.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a rating appeal and a rating increase claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A rating appeal challenges the original decision within one year of the rating decision — it asks the VA to revisit what was decided using existing evidence or new evidence from that period. A rating increase claim is a new claim you can file at any time, asserting that your condition has worsened since the last rating. If more than a year has passed since your rating decision, you file a rating increase (Supplemental Claim) rather than an appeal. A rating increase resets the effective date to the new filing date.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does TDIU count as a 100% rating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TDIU (Total Disability Individual Unemployability) pays you at the 100% compensation rate even if your combined scheduler rating is less than 100%. To qualify, you typically need a single disability rated at 60%+ OR multiple disabilities with at least one rated at 40%+ and a combined rating of 70%+. You must also demonstrate that your service-connected disabilities prevent you from maintaining substantially gainful employment. A rating appeal attorney can help you build the vocational and medical evidence required for a TDIU claim.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a VA rating appeal take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Timeline varies significantly by appeal lane: Supplemental Claim: 4-8 months average. Higher-Level Review: 4-6 months average. BVA Appeal (direct review, no hearing): 1-2 years average. BVA Appeal with hearing: 2-4 years average. CAVC appeal: add 1-2 years if the BVA rules against you and you appeal further. While waiting, your effective date is preserved — so the final back pay award includes all compensation back to when you filed.",
      },
    },
  ],
}

export default function VaRatingAppealPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <Link href="/listings" className="hover:text-brand-navy">Find an Attorney</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Disability Rating Appeal</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            How to Appeal a VA Disability Rating: Attorney vs DIY
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your rating percentage determines your monthly compensation — and the difference between
            a 70% and an 80% rating is hundreds of dollars per month for life. Here is how to appeal
            a rating you believe is too low, and when an attorney makes sense.
          </p>
        </div>

        <article className="prose-guide">
          <h2>What the rating percentage actually means</h2>
          <p>
            VA disability ratings are assigned in 10% increments from 0% to 100%. Each percentage
            corresponds to a monthly compensation rate. The difference between rating levels adds
            up significantly over a lifetime:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-surface-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="text-left px-4 py-3">Rating</th>
                  <th className="text-left px-4 py-3">Monthly (Veteran Only, 2024)</th>
                  <th className="text-left px-4 py-3">Annual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rating: '50%', monthly: '$1,075.16', annual: '$12,902' },
                  { rating: '60%', monthly: '$1,361.88', annual: '$16,343' },
                  { rating: '70%', monthly: '$1,716.28', annual: '$20,595' },
                  { rating: '80%', monthly: '$1,995.01', annual: '$23,940' },
                  { rating: '90%', monthly: '$2,241.91', annual: '$26,903' },
                  { rating: '100%', monthly: '$3,737.85', annual: '$44,854' },
                ].map((row, i) => (
                  <tr key={row.rating} className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.rating}</td>
                    <td className="px-4 py-3 text-gray-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-gray-700">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The difference between 70% and 80% is $278/month — $3,336/year — for life. An attorney
            who successfully appeals a rating from 70% to 80% earns their contingency fee within
            the first year of increased payments.
          </p>

          <h2>When DIY rating appeal works</h2>
          <p>
            DIY appeal makes sense when: the denial reason is clear and the fix is straightforward
            (missing medical records, C&P exam notes that did not capture severity), you have a
            strong personal physician willing to write a detailed rating opinion, and the claim is
            at the Supplemental Claim stage (not BVA or CAVC).
          </p>

          <h2>When you need an attorney</h2>
          <p>
            Hire an attorney when: the appeal is at the BVA or CAVC level; the service connection
            argument requires nexus evidence from an independent medical examiner; the rating dispute
            involves complex VASRD interpretation; or your claim involves MST, burn pits, Agent
            Orange, or another specialized nexus area where physician opinions must be crafted carefully.
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

        <div className="bg-surface rounded-xl border border-surface-border p-5 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">Related Guides</h2>
          <ul className="space-y-2">
            {[
              { href: '/guides/va-disability-rating-explained', label: 'How VA Disability Ratings Are Calculated' },
              { href: '/guides/tdiu-explained', label: 'TDIU: Total Disability Individual Unemployability' },
              { href: '/guides/va-disability-attorney-cost', label: 'How Much Does a VA Disability Attorney Cost?' },
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

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Think Your Rating Is Too Low?</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-md mx-auto">
            Find a VA-accredited attorney who handles rating appeals. Free consultation — no fee unless you win.
          </p>
          <Link
            href="/listings"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Find a Rating Appeal Attorney <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
      </div>
    </>
  )
}
