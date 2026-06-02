import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Burn Pit Claims and the PACT Act: What Veterans Need to Know | FindVAAttorney.com',
  description: 'The PACT Act made 3.5 million veterans newly eligible for VA benefits. Learn which conditions are now presumptive, how to file, and what to do if your burn pit claim is denied.',
  alternates: { canonical: 'https://findvaattorney.com/guides/burn-pit-pact-act' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the PACT Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics (PACT) Act of 2022 is the largest expansion of VA benefits in decades. It added toxic exposure to the VA benefits framework, created dozens of presumptive conditions for veterans exposed to burn pits and other toxins, and extended eligibility to millions of post-9/11 veterans who were previously denied or told to prove a direct service connection for conditions now recognized as presumptive.',
      },
    },
    {
      '@type': 'Question',
      name: 'What conditions are presumptive under the PACT Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The PACT Act added presumptive status for many cancers and respiratory conditions for veterans who served in areas with burn pits or other toxic exposures. Presumptive cancers include at least 23 types such as head cancer, neck cancer, respiratory cancer, reproductive cancer, and certain rare cancers. Constrictive bronchiolitis (a serious lung disease) is also presumptive for post-9/11 veterans. The list is long — consult the VA\'s full toxic exposure presumptive conditions page or a PACT Act attorney for your specific diagnosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'I was deployed to Iraq or Afghanistan. Am I automatically eligible under the PACT Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Service in Southwest Asia (Iraq, Afghanistan, Kuwait, Bahrain, Qatar, UAE, Oman, Saudi Arabia, and others) after August 2, 1990 qualifies you for the presumptive framework. You still need to file a claim and establish that you have a covered condition. Service in the Gulf War theater alone does not automatically generate a rating — you need a documented diagnosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'My original burn pit claim was denied before the PACT Act. What should I do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'File a supplemental claim with new and relevant evidence based on the PACT Act\'s presumptive conditions. The VA is re-adjudicating previously denied claims under the new presumptive framework. If your condition is now presumptive and you served in a covered theater, you have a strong basis for a supplemental claim. A PACT Act attorney can help you file correctly and maximize your retroactive back pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a deadline to file a PACT Act claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no absolute deadline for filing VA disability claims, but the earlier you file, the earlier your effective date (and retroactive back pay). The PACT Act created a five-year window (through 2027) during which previously denied claims can be re-adjudicated without the normal one-year appeal deadline. After 2027, standard appeal rules apply. File as soon as possible.',
      },
    },
  ],
}

const pactCancers = [
  'Head cancer', 'Neck cancer', 'Respiratory cancer (lung, larynx, bronchus, trachea)',
  'Reproductive cancer', 'Urinary tract cancer', 'Melanoma',
  'Any cancer VA determines warrants presumptive status', 'Constrictive bronchiolitis',
  'Obliterative bronchiolitis', 'Constrictive pericarditis',
]

export default function BurnPitPACTActPage() {
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
          <span className="text-gray-900 font-medium">Burn Pit Claims and the PACT Act</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Burn Pit Claims and the PACT Act: What Veterans Need to Know
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            The PACT Act, signed in August 2022, is the biggest change to VA benefits in a generation. If you were exposed to burn pits, open-air waste sites, or toxic chemicals during service — and especially if you were previously denied — you need to read this.
          </p>
        </div>

        {/* Alert banner */}
        <div className="bg-brand-red/5 border border-brand-red/30 rounded-xl p-5 mb-8 flex gap-3">
          <AlertCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" aria-label="Alert" />
          <div>
            <p className="font-semibold text-brand-red mb-1">Previously denied? You may be eligible under the PACT Act.</p>
            <p className="text-sm text-gray-700">
              The VA is re-adjudicating claims denied before 2022 under the new presumptive framework. File a supplemental claim now — back pay is calculated from your original claim date, not the date you refile.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { value: '3.5M+', label: 'Veterans newly eligible', note: 'Under PACT Act presumptives' },
            { value: '23+', label: 'Presumptive cancers added', note: 'Many more conditions covered' },
            { value: '$0', label: 'Upfront cost', note: 'PACT Act attorneys work on contingency' },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-surface-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-brand-navy mb-1">{s.value}</div>
              <div className="text-sm font-medium text-gray-900 mb-0.5">{s.label}</div>
              <div className="text-xs text-gray-500">{s.note}</div>
            </div>
          ))}
        </div>

        <article className="prose-guide">
          <h2>What the PACT Act Changed</h2>
          <p>
            Before the PACT Act, veterans diagnosed with cancers or respiratory conditions linked to burn pit exposure faced a brutal catch-22: prove a direct service connection between a specific condition and a specific exposure event, despite the VA having almost no records of where burn pits were or what they burned. Most veterans were denied. Many died waiting.
          </p>
          <p>
            The PACT Act scrapped that framework for covered veterans. It created <strong>presumptive conditions</strong> — diagnoses where the VA presumes the service connection is established if you served in a covered theater. You no longer have to prove the link. If you served in Southwest Asia after 1990 and developed a covered cancer, the VA presumes it is service-connected.
          </p>
          <p>
            This does not mean every claim is automatically approved. You still need to file a claim, document your service in the covered theater, and provide a medical diagnosis. But the burden of proof is fundamentally different — you no longer have to prove the impossible.
          </p>

          <h2>Are You Eligible for Burn Pit Benefits?</h2>
          <p>
            To qualify for PACT Act presumptive benefits, you generally need:
          </p>
          <ul>
            <li><strong>Qualifying service location:</strong> Service in Southwest Asia (Iraq, Afghanistan, Kuwait, Bahrain, Qatar, UAE, Oman, Saudi Arabia, Jordan, Djibouti, Egypt, Jordan, and more) after August 2, 1990; service in Vietnam, Thailand, Korea, or other areas for Agent Orange and other older exposure claims; or service in specific locations added to the burn pit registry</li>
            <li><strong>Covered condition:</strong> A diagnosis that falls within the PACT Act presumptive list (cancers, constrictive bronchiolitis, and other conditions)</li>
            <li><strong>Discharge status:</strong> Other than dishonorable discharge</li>
          </ul>
          <p>
            Veterans exposed to radiation, Agent Orange, contaminated water at Camp Lejeune, or other toxic exposures from older conflicts also received significant new coverage under the PACT Act. This is not only a post-9/11 issue.
          </p>

          <h2>Presumptive Cancers and Conditions</h2>
          <p>
            The following are among the conditions now presumptive under the PACT Act for qualifying veterans:
          </p>
          <ul>
            {pactCancers.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p>
            This is not an exhaustive list. The VA added more than 25 specific cancer types and several respiratory conditions. The full list is in the VA's PACT Act implementation guidance. An attorney specializing in burn pit claims will know every condition on the list and can evaluate your specific diagnosis.
          </p>

          <h2>How to File a Burn Pit Claim Under the PACT Act</h2>
          <p>
            Filing process for a new PACT Act claim:
          </p>
          <ol>
            <li><strong>Register on the VA's Airborne Hazards and Open Burn Pit Registry</strong> (va.gov/disability/eligibility/hazardous-materials-exposure/airborne-hazards-open-burn-pit-registry/). This is optional but strengthens your claim with documented exposure history.</li>
            <li><strong>Gather service records</strong> showing deployment dates and locations. DD-214 and deployment orders are the foundation.</li>
            <li><strong>Obtain medical documentation</strong> for your diagnosis. A nexus letter from a physician explaining the connection between your service and your condition is valuable, though often not required for presumptive conditions.</li>
            <li><strong>File VA Form 21-526EZ</strong> (Application for Disability Compensation and Related Compensation Benefits) with the VA.</li>
          </ol>
          <p>
            If you were previously denied and are refiling: submit a Supplemental Claim (VA Form 20-0995) with evidence of your PACT Act eligibility. The effective date for your back pay will trace back to your original claim date, not the supplemental filing date — which can mean years of back pay.
          </p>

          <h2>What If Your Burn Pit Claim Is Denied?</h2>
          <p>
            Even under the PACT Act, claims get denied. Common reasons: the VA disputes that your condition falls within a presumptive category, questions about whether you served in a qualifying location, disagreements about diagnosis documentation, or clerical errors in the adjudication.
          </p>
          <p>
            A denial is not the end. The appeals path — Notice of Disagreement, Board of Veterans' Appeals, and if necessary the U.S. Court of Appeals for Veterans Claims — is where PACT Act attorneys do their most valuable work. The back pay at stake in burn pit cases is often substantial: years of denied benefits at higher ratings now eligible under the PACT Act framework.
          </p>
          <p>
            If you were denied before the PACT Act passed, do not assume that denial stands. File the supplemental claim. Many veterans have had previously closed cases reopened successfully under the new presumptive framework.
          </p>
        </article>

        {/* FAQ */}
        <div className="border-t border-surface-border pt-8 mt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">PACT Act — Frequently Asked Questions</h2>
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
              { href: '/categories/burn_pit', label: 'Find Burn Pit / PACT Act Attorneys' },
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
          <h2 className="text-xl font-bold text-white mb-2">Find a PACT Act Attorney</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-md mx-auto">
            VA-accredited attorneys specializing in burn pit and toxic exposure claims. Most handle PACT Act cases on contingency — you pay nothing unless you win.
          </p>
          <Link
            href="/categories/burn_pit"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Find Burn Pit Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
      </div>
    </>
  )
}
