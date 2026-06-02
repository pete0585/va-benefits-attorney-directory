import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is TDIU? Total Disability Individual Unemployability Explained | FindVAAttorney.com',
  description: 'TDIU pays veterans at the 100% disability rate even if their combined rating is below 100%. Learn who qualifies, how to apply, and why most successful TDIU claims involve an attorney.',
  alternates: { canonical: 'https://findvaattorney.com/guides/tdiu-explained' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What rating do you need to qualify for TDIU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the standard (scheduler) criteria, you need either: (1) a single service-connected disability rated at 60% or more, or (2) multiple disabilities with a combined rating of at least 70%, where at least one individual disability is rated at 40% or more. However, VA can also grant extra-scheduler TDIU when these thresholds are not met if the evidence clearly shows the veteran cannot work due to service-connected conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does TDIU pay per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDIU pays at the 100% disability rate, which in 2024 is $3,737.85 per month for a veteran with no dependents. With a spouse it is $3,946.25/month. These amounts are adjusted annually. TDIU recipients get the same monthly payment as veterans with a 100% schedular rating, even though their combined rating may be lower.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I work if I have TDIU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDIU recipients cannot engage in "substantially gainful employment." The VA defines this as employment earning above the poverty threshold (approximately $14,580/year in 2024). Marginal employment or protected work environments (sheltered workshops) generally do not disqualify TDIU. Exceeding the earnings threshold triggers a VA review. Consult your attorney before taking any employment while receiving TDIU.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TDIU last forever?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDIU can be granted as permanent and total (P&T), which is not subject to routine future exams. It can also be granted on a temporary basis subject to review. Veterans who are 55 or older generally receive P&T status automatically. If you are under 55 with a TDIU grant, your rating can theoretically be reduced if the VA determines your condition improved — another reason to have an attorney watch your file.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TDIU better than a 100% schedular rating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For monthly compensation, TDIU and a 100% schedular rating pay the same amount. However, a 100% schedular rating (based solely on the rating schedule without unemployability) has some advantages: it is not affected by employment income, and it does not require demonstrating inability to work. If you can reach 100% on the schedular rating alone, that is generally more stable long-term.',
      },
    },
  ],
}

export default function TDIUExplainedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <span className="text-gray-900 font-medium">What is TDIU?</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            What is TDIU? Total Disability Individual Unemployability Explained
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            TDIU is one of the most valuable — and most commonly denied — VA benefits available. If your service-connected disabilities prevent you from working, TDIU pays you at the 100% rate even if your combined rating is only 70% or 80%.
          </p>
        </div>

        {/* Key stat box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Monthly TDIU payment (2024)', value: '$3,737+', note: 'Same as 100% schedular rating' },
            { label: 'Veterans receiving TDIU', value: '385,000+', note: 'As of recent VA data' },
            { label: 'TDIU denial rate at initial filing', value: '40-50%', note: 'Appeals succeed more often with attorney' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-surface-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-brand-navy mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-900 mb-0.5">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.note}</div>
            </div>
          ))}
        </div>

        <article className="prose-guide">
          <h2>What TDIU Actually Is</h2>
          <p>
            Total Disability Individual Unemployability — TDIU, sometimes called IU — is a VA rating that pays veterans at the 100% compensation rate when they cannot maintain substantially gainful employment due to their service-connected disabilities. It is not a separate disability rating. It is a way to receive 100% compensation even if the combined math of your service-connected conditions does not reach 100% on the rating schedule.
          </p>
          <p>
            The logic: a veteran with a 70% combined rating who cannot hold any job because of their service-connected conditions is functionally as disabled as a veteran rated at 100%. TDIU bridges that gap.
          </p>

          <h2>Who Qualifies for TDIU?</h2>
          <p>
            The standard (scheduler) TDIU qualification thresholds:
          </p>
          <ul>
            <li><strong>Single disability route:</strong> One service-connected disability rated at 60% or higher</li>
            <li><strong>Multiple disability route:</strong> Combined rating of 70%+ with at least one individual disability rated at 40%+</li>
          </ul>
          <p>
            If you do not meet those thresholds but your service-connected conditions clearly prevent you from working, you can still qualify through <strong>extra-scheduler TDIU</strong>. This requires VA Central Office approval and is harder to obtain, but it exists for veterans whose situations fall outside the standard criteria.
          </p>
          <p>
            Beyond the rating thresholds, TDIU requires showing that your service-connected conditions — not unrelated health issues or personal circumstances — are what prevent gainful employment. This is where most TDIU claims run into difficulty.
          </p>

          <h2>TDIU vs 100% Schedular Rating</h2>
          <p>
            Monthly compensation is identical between TDIU and a 100% schedular rating. The practical differences:
          </p>
          <ul>
            <li><strong>Employment restrictions:</strong> TDIU recipients cannot earn above the poverty threshold from employment without risking their benefits. A 100% schedular veteran can work without restriction.</li>
            <li><strong>Stability:</strong> 100% schedular ratings based on permanent conditions are more stable long-term. TDIU can be reviewed if the VA believes your ability to work has changed.</li>
            <li><strong>Combined rating math:</strong> You can earn a 100% schedular rating by stacking conditions to reach 100% on the rating schedule. Many veterans pursue this path in parallel with TDIU.</li>
          </ul>

          <h2>How to File a TDIU Claim</h2>
          <p>
            The primary form for TDIU is VA Form 21-8940 (Application for Increased Compensation Based on Unemployability). You submit this along with supporting evidence — medical records documenting your service-connected conditions, employment history, and a letter from your physician explaining why your conditions prevent sustained employment.
          </p>
          <p>
            Vocational expert opinions — from a professional evaluating your ability to perform the tasks required in your work history — significantly strengthen TDIU claims. Most veterans do not know this evidence type exists. Many attorneys include vocational expert review as part of their TDIU case preparation.
          </p>

          <h2>Why Most TDIU Claims Need an Attorney</h2>
          <p>
            TDIU claims have a high denial rate at initial filing. The reasons vary: insufficient medical nexus evidence, the VA arguing the veteran's conditions do not prevent all gainful employment, raters disagreeing about the combined effects of multiple conditions, or simply inadequate documentation.
          </p>
          <p>
            An experienced TDIU attorney knows how to build the medical and vocational evidence record that the VA needs to approve the claim. They know which C&P exam results to challenge, how to request an independent medical opinion, and how to frame the legal argument that ties your specific conditions to your inability to maintain employment.
          </p>
          <p>
            At the Board of Veterans' Appeals, where TDIU cases go after denial, veterans represented by attorneys win at significantly higher rates than those going it alone. For a benefit worth $44,000+ per year, the attorney's contingency fee on back pay is a fraction of the lifetime value of getting the claim right.
          </p>
        </article>

        {/* FAQ */}
        <div className="border-t border-surface-border pt-8 mt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">TDIU — Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-surface-border p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="bg-surface rounded-xl border border-surface-border p-5 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">Related Guides</h2>
          <ul className="space-y-2">
            {[
              { href: '/guides/what-is-va-accreditation', label: 'What is a VA-Accredited Attorney?' },
              { href: '/guides/how-to-choose', label: 'How to Choose a VA Disability Attorney' },
              { href: '/guides/va-attorney-vs-vso', label: 'VA Attorney vs VSO: Which Do You Need?' },
              { href: '/categories/tdiu', label: 'Find TDIU Attorneys Near You' },
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
          <h2 className="text-xl font-bold text-white mb-2">Find a TDIU Attorney</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-md mx-auto">
            Search VA-accredited attorneys who specialize in TDIU claims. Most offer free initial consultations and work on contingency.
          </p>
          <Link
            href="/categories/tdiu"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Find TDIU Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
      </div>
    </>
  )
}
