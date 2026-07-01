import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PACT Act Burn Pit Claims: Find a VA Attorney | Find VA Attorney',
  description:
    'The PACT Act added presumptive conditions for 3.5 million veterans exposed to burn pits and other toxics. Find a VA attorney who knows PACT Act claims.',
  alternates: { canonical: 'https://findvaattorney.com/categories/pact-act-burn-pit-claims' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the PACT Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics (PACT) Act was signed into law in August 2022. It is the largest expansion of VA benefits in decades, adding toxic exposure recognition to the VA benefits framework, creating 20+ new presumptive respiratory conditions and 40+ presumptive cancers for veterans exposed to burn pits and other toxics, and extending eligibility to an estimated 3.5 million post-9/11 veterans who were previously ineligible or denied.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a lawyer for a PACT Act claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You are not required to have an attorney, but PACT Act claims are more complex than standard disability claims and initial denial rates have been significant. The claim requires documentation of qualifying deployment locations, burn pit registry enrollment or evidence of exposure, and connection of your specific diagnosis to PACT Act presumptives. A VA attorney experienced with PACT Act claims can significantly increase both your rating percentage and your retroactive back pay. Attorneys work on contingency — no fee unless you win — so there is no out-of-pocket cost to retain one.",
      },
    },
    {
      '@type': 'Question',
      name: 'What cancers are presumptive under the PACT Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The PACT Act created presumptive status for over 40 cancers. Notable examples include: cancers of the head, neck, and throat; reproductive cancers; squamous cell carcinoma; urinary tract cancers; lymphatic and hematopoietic cancers including rare lymphomas and leukemias; glandular cancers; and cancers of the respiratory tract and gastrointestinal system. The complete list is extensive — if you have a cancer diagnosis and qualifying service, consult a PACT Act attorney to determine whether your specific cancer is covered.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much backpay can I get from a PACT Act claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Back pay for PACT Act claims depends on your effective date (typically your application date, or earlier if you can establish an earlier intent to file), your final combined disability rating, and your pay grade and dependent status. For veterans rated at 70-100% who have been out of service for years, retroactive awards of $50,000 to $200,000 or more are not uncommon. Some claims with earlier effective dates and higher ratings have produced significantly larger awards. This is why PACT Act claims warrant careful legal representation — the stakes are high.",
      },
    },
  ],
}

export default async function PactActBurnPitClaimsPage() {
  const { listings } = await getListings({ practice_area: 'pact-act' })
  const fallback = listings.length === 0
  const { listings: allActive } = fallback ? await getListings() : { listings: [] }
  const displayListings = fallback ? allActive.slice(0, 20) : listings.slice(0, 20)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-navy">Find a VA Attorney</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">PACT Act &amp; Burn Pit Claims</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            PACT Act and Burn Pit Claims: Find a VA Attorney Who Knows Toxic Exposure
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            The PACT Act (2022) is the most significant expansion of VA benefits in decades — creating presumptive status for 40+ cancers and 20+ respiratory conditions for veterans exposed to burn pits, Agent Orange (expanded), and other toxics. Millions of veterans previously denied or told to prove a direct service connection are now potentially eligible. But initial claim denials remain common, and the backpay potential makes legal representation worthwhile.
          </p>
        </div>

        <div className="space-y-8 mb-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">What is the PACT Act?</h2>
            <p className="text-gray-600 mb-3">
              The <strong>Sergeant First Class Heath Robinson Honoring our Promise to Address Comprehensive Toxics (PACT) Act</strong>, signed August 10, 2022, is a landmark piece of veterans legislation that:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { stat: '3.5 million', label: 'Veterans newly eligible for VA benefits' },
                { stat: '40+ cancers', label: 'Now presumptive for qualifying veterans' },
                { stat: '20+ respiratory conditions', label: 'Including constrictive bronchiolitis, a severe burn pit-linked lung disease' },
              ].map(({ stat, label }) => (
                <div key={stat} className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-brand-navy">{stat}</p>
                  <p className="text-sm text-gray-700 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Who qualifies for PACT Act benefits?</h2>
            <div className="space-y-3">
              {[
                { group: 'Post-9/11 veterans (2001–present)', detail: 'Veterans who served in Iraq, Afghanistan, or Southwest Asia after August 2, 1990 and were exposed to open burn pits used for waste disposal on military installations. The Airborne Hazards and Open Burn Pit Registry enrollment strengthens claims but is not required.' },
                { group: 'Gulf War veterans (1990–2001)', detail: 'Gulf War illness presumptives are expanded; veterans with chronic multi-symptom illness and other undiagnosed conditions have additional coverage under PACT Act provisions.' },
                { group: 'Vietnam and Korean War veterans', detail: 'Agent Orange presumptive conditions are significantly expanded, including hypertension and monoclonal gammopathy of undetermined significance (MGUS). Veterans previously denied Agent Orange claims should review their status.' },
                { group: 'Veterans with documented toxic exposure', detail: 'Veterans with documented exposure to radiation, Camp Lejeune water contamination, or other identified environmental hazards at qualifying locations and time periods.' },
              ].map(({ group, detail }) => (
                <div key={group} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{group}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key PACT Act presumptive conditions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-3">Cancers (40+ types)</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {[
                    'Head and neck cancers (throat, larynx, tonsil, salivary gland)',
                    'Reproductive cancers (ovarian, uterine, testicular)',
                    'Urinary tract cancers (bladder, kidney, ureter)',
                    'Lymphatic cancers (Hodgkin\'s and non-Hodgkin\'s lymphoma)',
                    'Rare hematopoietic cancers (multiple myeloma, leukemia variants)',
                    'Respiratory cancers (lung, bronchus, trachea)',
                    'Many other cancer types — consult an attorney if you have any cancer diagnosis',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-navy mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-3">Respiratory Conditions (20+)</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {[
                    'Constrictive bronchiolitis (severe, often misdiagnosed)',
                    'Granulomatous disease of the lung',
                    'Sinusitis (all types)',
                    'Rhinitis (chronic)',
                    'Laryngitis and tracheitis',
                    'Gastroesophageal reflux disease (when related to service)',
                    'Sleep apnea (when related to burn pit exposure)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-navy mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why you need a VA attorney for PACT Act claims</h2>
            <div className="space-y-3">
              {[
                { reason: 'Large backpay potential', detail: 'PACT Act claims can be retroactive to the date of your original discharge in some circumstances. Veterans rated at 70–100% with years of service separation may have significant retroactive awards — legal representation is worth it.' },
                { reason: 'Complex deployment documentation', detail: 'Qualifying for PACT Act presumptives requires documentation of deployment to qualifying locations and time periods. Burn pit registry records, deployment orders, and unit records may all be needed.' },
                { reason: "VA Duty to Assist doesn't always run correctly", detail: 'The VA is required to assist veterans in obtaining records — but in practice, PACT Act claims development has been inconsistent. An attorney ensures the VA fulfills its obligations.' },
                { reason: 'Multiple conditions, multiple nexus issues', detail: 'Many veterans with PACT Act claims have cancer plus respiratory conditions plus other service-connected disabilities. Rating multiple conditions correctly and ensuring proper combined ratings requires experienced handling.' },
              ].map(({ reason, detail }) => (
                <div key={reason} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{reason}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {displayListings.length > 0 && (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Find a VA Attorney for PACT Act Claims</h2>
              <p className="text-sm text-gray-600">
                {fallback
                  ? 'Browse all VA-accredited attorneys — look for those listing PACT Act or toxic exposure as a practice area'
                  : `Showing ${displayListings.length} VA attorneys with PACT Act experience`}
              </p>
            </div>
            <div className="space-y-4 mb-10">
              {displayListings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="space-y-5 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">PACT Act Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">Related VA Guides</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/burn-pit-pact-act" className="text-brand-navy font-medium hover:underline">Burn Pit Claims: Full Guide →</Link>
            <Link href="/guides/agent-orange-claims" className="text-brand-navy font-medium hover:underline">Agent Orange Claims →</Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters →</Link>
          </div>
        </div>

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney with PACT Act experience?</h2>
          <p className="text-gray-300 mb-4 text-sm">Veterans searching for toxic exposure and PACT Act representation are actively using this directory. Claim your listing.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/listings"
              className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
            >
              Find a VA Attorney <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/submit"
              className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-block"
            >
              Claim Your Listing
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
