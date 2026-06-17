import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Ratings Explained: How the VA Calculates Your Combined Rating | FindVAAttorney.com',
  description: 'The VA uses a non-intuitive "whole person" math to combine multiple disability ratings. Learn how combined ratings work, what the key thresholds are, and how to maximize your rating.',
  alternates: { canonical: 'https://findvaattorney.com/guides/va-disability-rating-explained' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the VA calculate a combined disability rating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The VA uses a 'whole person' method that does NOT add percentages together. Start with 100% (your whole body). Your highest rating reduces that — a 50% rating leaves 50% remaining efficiency. The next disability is applied to that remainder: a 30% rating of 50% = 15% additional disability. Combined so far: 65%. This continues for each condition. The final number is rounded to the nearest 10%. This is why two 50% ratings don't equal 100% — they equal 75%, rounded to 80%.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the key VA disability rating thresholds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most significant thresholds: 0% service-connected (no monetary compensation, but establishes connection for future increases and some benefits). 10-20%: minimal monthly compensation (~$165-$338/mo). 30%+: dependent-based rate additions begin. 50%+: significant monthly compensation increase (~$1,075+/mo), VA healthcare priority group 1 access. 70%+: individual unemployability (TDIU) becomes available with one condition rated 70%+. 100% schedular: maximum compensation (~$3,621+/mo), education benefits for dependents, commissary access. TDIU (P&T): equivalent compensation and benefits to 100% even if combined rating is lower.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is TDIU and how do I qualify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Total Disability based on Individual Unemployability (TDIU) pays veterans at the 100% rate if their service-connected disabilities prevent substantially gainful employment — even if their combined rating is less than 100%. You qualify if: (1) you have one condition rated 60%+ or two or more conditions with a combined rating of 70%+ where at least one is 40%+, AND (2) you cannot maintain substantially gainful employment due to those conditions. VA Form 21-8940 is the application. Many veterans who qualify are never told about TDIU — a VA attorney can identify and file for it.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a higher rating if my conditions have gotten worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — you can file for an increased rating at any time if your service-connected condition has worsened since your last rating decision. File VA Form 21-526EZ with updated medical evidence documenting the worsening. The key is having current medical records that reflect your current level of impairment, ideally with a Disability Benefits Questionnaire (DBQ) completed by a treating provider. If your rating has been stagnant for years but your symptoms have worsened, this is worth pursuing.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a protected or permanent rating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A rating becomes 'protected' (cannot be reduced without clear error) after: 5 continuous years at the same rating (5-year protection), or 20 continuous years at any rating (20-year protection, becomes 'permanent and total'). At 20 years, the VA cannot reduce your rating to zero even if your condition improves. Permanent and Total (P&T) ratings also waive the Survivor Benefit Plan requirement for Dependency and Indemnity Compensation (DIC) to surviving spouses.",
      },
    },
  ],
}

const ratingThresholds = [
  { rating: '0%', pay: '$0/mo', notes: 'Service connection established. Opens door to future increases and some non-monetary VA benefits.' },
  { rating: '10%', pay: '~$175/mo', notes: 'Minimum monetary threshold. Often the starting point for conditions like tinnitus, minor musculoskeletal injuries.' },
  { rating: '30%', pay: '~$524/mo', notes: 'Dependent pay additions begin. Marriage and children add to the monthly amount.' },
  { rating: '50%', pay: '~$1,075/mo', notes: 'Major income level. VA healthcare Priority Group 1 access. Significant for combined rating strategy.' },
  { rating: '70%', pay: '~$1,716/mo', notes: 'TDIU threshold if one condition. Significant compensation increase. Often the target in multi-condition appeals.' },
  { rating: '100% Schedular', pay: '~$3,737/mo', notes: 'Maximum schedular compensation. Education benefits for dependents (DEA/Chapter 35). Commissary access.' },
  { rating: 'TDIU (P&T)', pay: '100% rate', notes: 'Individual Unemployability at 100% rate. Available even with lower combined ratings if unemployability is established.' },
]

export default function VADisabilityRatingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-navy">Guides</Link>
          <span>/</span>
          <span>VA Disability Ratings Explained</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            VA Disability Ratings Explained
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            The VA&apos;s combined rating system is one of the most confusing things veterans deal with — because it doesn&apos;t work the way most people expect. Two 50% ratings don&apos;t equal 100%. Three 30% ratings don&apos;t equal 90%. Understanding how it works is the foundation for any rating appeal strategy.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Combined Rating Formula</h2>
            <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-brand-navy mb-2">The Whole Person Method</p>
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                <li>Start with 100 (your whole person)</li>
                <li>Apply your highest-rated condition first: 100 × (1 - rating) = remaining efficiency</li>
                <li>Apply next condition to that remainder: remainder × (1 - next rating) = new remaining</li>
                <li>Continue for each condition, highest to lowest rating</li>
                <li>Total disability = 100 - final remaining efficiency</li>
                <li>Round to nearest 10% (5% rounds up)</li>
              </ol>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-sm">
              <p className="font-semibold text-gray-900 mb-2">Example: 50% + 30% + 20%</p>
              <p className="text-gray-600">100 - 50 = 50 remaining → 50 × (1-0.30) = 35 remaining → 35 × (1-0.20) = 28 remaining → total disability = 72% → rounded to <strong className="text-gray-900">70%</strong></p>
              <p className="text-gray-600 mt-1 text-xs">Not 100%. Not 72%. 70% — after rounding down from 72.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Rating Thresholds</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="text-left p-3 rounded-tl-lg">Rating</th>
                    <th className="text-left p-3">Monthly Pay</th>
                    <th className="text-left p-3 rounded-tr-lg">What Changes</th>
                  </tr>
                </thead>
                <tbody>
                  {ratingThresholds.map(({ rating, pay, notes }, i) => (
                    <tr key={rating} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-semibold text-brand-navy border-t border-gray-100">{rating}</td>
                      <td className="p-3 text-gray-900 border-t border-gray-100">{pay}</td>
                      <td className="p-3 text-gray-600 border-t border-gray-100">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Rates shown are base rates for a veteran with no dependents (2024 rates). Rates increase annually with COLA.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Get Help Maximizing Your Rating</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings" className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-flex items-center gap-2">
              Find a VA Attorney <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters: What They Are and Why You Need One →</Link>
            <Link href="/guides/tdiu-explained" className="text-brand-navy font-medium hover:underline">TDIU Explained →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
