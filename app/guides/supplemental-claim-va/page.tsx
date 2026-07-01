import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to File a VA Supplemental Claim (and Why You Should) | Find VA Attorney',
  description:
    "A VA Supplemental Claim lets you reopen a denied or underrated claim with new evidence. It's one of the fastest AMA appeal lanes — here's how to use it correctly.",
  alternates: { canonical: 'https://findvaattorney.com/guides/supplemental-claim-va' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a VA Supplemental Claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Supplemental Claim is one of three appeal lanes available under the Appeals Modernization Act (AMA). It allows veterans to reopen a previously denied claim — or request a higher rating — by submitting new and relevant evidence that was not part of the original record. The VA reviews Supplemental Claims with fresh eyes and has a 125-day processing goal, making it often faster than the Higher-Level Review or Board of Veterans' Appeals lanes.",
      },
    },
    {
      '@type': 'Question',
      name: 'What counts as "new and relevant" evidence for a Supplemental Claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "New evidence is evidence that did not previously exist or was not submitted with your original claim. Relevant means it tends to prove or disprove something material to the claim. Examples include: a private nexus letter from an independent medical expert, a new Disability Benefits Questionnaire (DBQ) from your own doctor, buddy statements (lay evidence) from fellow service members or family, recently declassified service records, new medical research linking your condition to your MOS or deployment, and records from private treatment not previously submitted.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is a Supplemental Claim better than a Higher-Level Review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "They serve different purposes. A Higher-Level Review (HLR) is for cases where you believe the VA made a legal or factual error in the existing record — no new evidence is submitted. A Supplemental Claim is for cases where you have new evidence that wasn't in the original record. If your denial was due to lack of medical evidence (a common scenario), a Supplemental Claim with a nexus letter or private DBQ is almost always the right lane. If the VA clearly misinterpreted the evidence it had, an HLR may be appropriate.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should I hire an attorney for a Supplemental Claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Simple Supplemental Claims — adding a clear service record or medical record that was missed — may not require an attorney. Complex cases almost always do: claims going from 0% to 100%, TDIU applications, cases requiring strong nexus arguments (conditions that aren't presumptive), cases where the VA has denied multiple times, and situations where the new evidence is a complex nexus letter that needs to be framed correctly. VA attorneys work on contingency — no fee unless you win — so the financial risk of seeking legal help is low.",
      },
    },
  ],
}

const evidence_types = [
  {
    type: 'Private nexus letter (independent medical opinion)',
    detail: "The most powerful piece of new evidence in most denied claims. A qualified physician reviews your service records and current diagnosis and provides a formal opinion that your condition 'is at least as likely as not' connected to your military service. This is especially important when the VA's own C&P exam produced a negative opinion.",
  },
  {
    type: 'Private Disability Benefits Questionnaire (DBQ)',
    detail: "DBQs are VA-standardized forms that document your current disability status and its impact on daily functioning. A private DBQ from your own treating physician — rather than a VA C&P examiner — often produces a more favorable and accurate assessment of severity.",
  },
  {
    type: 'Buddy statements (lay evidence)',
    detail: "Written statements from fellow service members, family members, or others who witnessed your in-service injury/event or have observed your disability. Lay evidence that specifically corroborates an in-service event or describes observable symptoms can be 'new and relevant' if not previously submitted.",
  },
  {
    type: 'New service records or treatment records',
    detail: "Service Treatment Records (STRs), unit records, or private treatment records that weren't obtained during the original claim development. The VA has a Duty to Assist in obtaining records — if it failed to get records you identified, that may support an error argument in addition to the new evidence.",
  },
  {
    type: 'Medical literature and research',
    detail: "Peer-reviewed research linking your specific condition to your MOS, deployment location, occupational hazard, or military service in general. Especially relevant for conditions with a growing research base that didn't exist when your original claim was filed.",
  },
]

export default function SupplementalClaimGuide() {
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
          <span>Supplemental Claims</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            How to File a VA Supplemental Claim (and Why You Should)
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            A denied claim isn&apos;t necessarily a dead end. The VA&apos;s Supplemental Claim lane
            exists specifically to let veterans reopen decisions with new evidence — and when that
            new evidence is a strong independent nexus letter, the outcome often reverses the denial.
            Here&apos;s how to use it.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is a Supplemental Claim?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Appeals Modernization Act (AMA), effective February 2019, created three appeal
              lanes for veterans who disagree with a VA rating decision:
            </p>
            <div className="space-y-3">
              {[
                { lane: 'Supplemental Claim', desc: 'Submit new and relevant evidence to reopen a denied or underrated claim. VA has a 125-day processing goal. Can be filed at any time — no deadline after AMA.', recommended: true },
                { lane: 'Higher-Level Review (HLR)', desc: 'Request a fresh review of the existing record by a senior VA rater. No new evidence — appropriate when you believe the VA made an error in the existing record. Same-level VA review, not an independent appeals board.' },
                { lane: "Board of Veterans' Appeals (BVA)", desc: 'Appeal to an independent Veterans Law Judge. Longest processing time (1-2+ years average) but most powerful — veterans can request a BVA hearing and can submit new evidence with this lane. Often preceded by HLR or Supplemental Claim.', recommended: false },
              ].map(({ lane, desc, recommended }) => (
                <div key={lane} className={`border rounded-xl p-4 ${recommended ? 'border-brand-navy/40 bg-brand-navy/5' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{lane}</p>
                    {recommended && <span className="text-xs bg-brand-navy text-white px-2 py-0.5 rounded-full">Often best first step</span>}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to File a Supplemental Claim</h2>
            <div className="space-y-3">
              {[
                'Your original claim was denied for lack of medical evidence or nexus — and you now have a private nexus letter or DBQ',
                'Your rating was assigned lower than your actual disability severity — new private DBQ documents the true severity',
                'Your claim was denied because the VA said your condition wasn\'t service-connected — and you have new research or medical literature supporting the connection',
                'You have buddy statements or lay evidence that corroborate your in-service event but were never submitted',
                'New service records have surfaced that weren\'t obtained during original development',
                'Your condition has worsened and you want a rating increase — even if not appealing a prior denial',
              ].map((scenario) => (
                <div key={scenario} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-brand-navy mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{scenario}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to File</h2>
            <div className="space-y-3">
              {[
                { step: '1. Gather your new evidence', detail: 'Compile every piece of new evidence before filing. Do not submit the Supplemental Claim without the evidence attached — this is the most common mistake. A bare-bones Supplemental Claim with a promise to submit evidence later is weaker than waiting until you have everything.' },
                { step: '2. Complete VA Form 20-0995', detail: 'The Decision Review Request: Supplemental Claim form (VA Form 20-0995) is available at va.gov, at your VA Regional Office, or through your attorney. Identify the specific condition(s) and decision dates you are challenging.' },
                { step: '3. Attach all new evidence', detail: 'Submit your nexus letter, private DBQ, buddy statements, and any other new evidence simultaneously with the form. Submit by certified mail with return receipt, or through the VA\'s online portal. If submitting by mail, keep copies of everything.' },
                { step: '4. Preserve your effective date', detail: 'For rating purposes, your effective date is typically the date the VA receives your Supplemental Claim (or your original Intent to File, if you filed one). File as soon as you have your evidence ready — waiting reduces your back-pay window.' },
                { step: '5. Monitor and respond', detail: 'The VA will issue a Rating Decision within approximately 125 days. If the decision is still unfavorable, you may file another Supplemental Claim with additional evidence, request HLR, or appeal to the BVA.' },
              ].map(({ step, detail }) => (
                <div key={step} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{step}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Counts as New and Relevant Evidence</h2>
            <div className="space-y-3">
              {evidence_types.map(({ type, detail }) => (
                <div key={type} className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{type}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Timeline: What to Expect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The VA has a 125-day processing goal for Supplemental Claims — typically faster than
              Higher-Level Reviews (125 days) and significantly faster than BVA appeals (1-2+ years).
              However, complex claims, missing records, or VA workload can extend the timeline. Monitoring
              your claim status through VA.gov and ensuring all evidence was received is important.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If your Supplemental Claim results in an award, back pay runs from the date the VA
              received your Supplemental Claim (or earlier if you have an earlier Intent to File).
              For claims involving significant rating increases — especially going from 0% to 70%+
              or achieving P&T status — the back pay calculation can produce substantial one-time payments.
            </p>
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
          <h3 className="font-semibold text-gray-900 mb-3">Find a VA Attorney for Your Supplemental Claim</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings" className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-flex items-center gap-2">
              Find a VA Attorney <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters Explained →</Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings →</Link>
            <Link href="/categories/tdiu-va-benefits" className="text-brand-navy font-medium hover:underline">TDIU Claims →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
