import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agent Orange VA Claims: Presumptive Conditions & How to File | FindVAAttorney.com',
  description: "Agent Orange exposure creates presumptive service connection for 17+ conditions. Learn which conditions qualify, who is presumed exposed, and how to file or appeal an Agent Orange VA claim.",
  alternates: { canonical: 'https://findvaattorney.com/guides/agent-orange-claims' },
}

export const revalidate = 86400

const PRESUMPTIVE_CONDITIONS = [
  { condition: 'Ischemic Heart Disease', notes: 'Including coronary artery disease, angina' },
  { condition: 'Prostate Cancer', notes: 'All forms' },
  { condition: 'Lung Cancer', notes: 'And other respiratory cancers' },
  { condition: 'Bladder Cancer', notes: 'Added by PACT Act 2022' },
  { condition: 'Type 2 Diabetes Mellitus', notes: 'Including peripheral neuropathy secondary to diabetes' },
  { condition: "Parkinson's Disease", notes: 'Including Parkinsonism' },
  { condition: 'B-Cell Leukemias', notes: 'Including hairy cell leukemia, chronic lymphocytic leukemia' },
  { condition: 'Hodgkin Disease', notes: 'And Non-Hodgkin Lymphoma' },
  { condition: 'Soft Tissue Sarcomas', notes: 'Excluding osteosarcoma, chondrosarcoma, Kaposi sarcoma' },
  { condition: 'Chloracne', notes: 'Within one year of exposure' },
  { condition: 'AL Amyloidosis', notes: 'A rare plasma cell disorder' },
  { condition: 'Porphyria Cutanea Tarda', notes: 'Within one year of exposure' },
  { condition: 'Multiple Myeloma', notes: 'A plasma cell cancer' },
  { condition: 'Peripheral Neuropathy (early-onset)', notes: 'Within one year of exposure, resolves within two years after' },
  { condition: 'Hypothyroidism', notes: 'Added by PACT Act 2022' },
]

const FAQ = [
  {
    q: 'Who is presumed to have been exposed to Agent Orange?',
    a: "Veterans who served in Vietnam between January 9, 1962 and May 7, 1975 — including veterans who served in the inland waterways (Brown Water Navy), those who served on Thai military bases with Agent Orange perimeter spraying, veterans who served in Korean DMZ between September 1, 1967 and August 31, 1971, veterans who loaded or handled herbicide agents, and veterans who worked with military aircraft that were later found to have been contaminated by Agent Orange (C-123 aircraft crew and maintenance). The PACT Act expanded presumptive exposure to veterans whose service locations overlap with the VA's Agent Orange Location Database.",
  },
  {
    q: 'Does my child qualify for benefits if I was exposed to Agent Orange?',
    a: "Children of veterans exposed to Agent Orange may qualify for VA benefits if they have spina bifida (all forms, regardless of severity) or, for female Vietnam veterans' children, one of 18 covered birth defects. VA benefits for children with covered birth defects include monthly monetary allowance, healthcare through the VA, and vocational training. These benefits are separate from the veteran's own disability claim and are filed under a different program (Chapter 18 of Title 38).",
  },
  {
    q: 'My Agent Orange claim was denied years ago. Can I reopen it?',
    a: "Yes. Many Agent Orange claims were denied before the VA added conditions to the presumptive list. If your claim was denied before a condition became presumptive, or before your exposure was recognized (e.g., Blue Water Navy exposure was only formally recognized in 2019 via the Blue Water Navy Vietnam Veterans Act), you can file a Supplemental Claim with the new presumptive list as the 'new and relevant evidence.' Effective dates can be assigned retroactively to your original claim date in some circumstances — a VA attorney can help you maximize back pay by arguing the correct effective date.",
  },
  {
    q: 'I served on a ship offshore Vietnam. Am I covered (Blue Water Navy)?',
    a: "Yes. The Blue Water Navy Vietnam Veterans Act of 2019 extended Agent Orange presumptive exposure to veterans who served on open-sea vessels in the waters off the coast of Vietnam between January 9, 1962 and May 7, 1975. Previously, the VA required in-country boots-on-ground service for presumptive exposure. If your ship is on the VA's Blue Water Navy ships list (available on the VA website), you are presumed exposed and can claim any of the presumptive conditions without proving individual exposure.",
  },
  {
    q: 'What if I have a condition that is not on the presumptive list?',
    a: "You can still file a non-presumptive claim if you can establish a medical nexus — a link between your Agent Orange exposure and your condition — through a medical opinion. Many conditions have been linked to dioxin exposure in medical literature but are not on the VA's presumptive list. A VA attorney can help you obtain a private independent medical opinion (IMO) from a physician willing to write a nexus letter connecting your specific condition to dioxin/Agent Orange exposure. These nexus letters are the evidence that turns a denied non-presumptive claim into a service-connected disability.",
  },
]

export default function AgentOrangeClaimsPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-brand-navy transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-navy transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-gray-900">Agent Orange VA Claims</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            Agent Orange VA Claims: Presumptive Conditions and How to File
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Agent Orange was a tactical herbicide used in Vietnam from 1962 to 1971. Decades of research
            have established links between dioxin exposure and dozens of serious diseases. The VA maintains
            a list of presumptive conditions — meaning if you were exposed to Agent Orange and you have one
            of these conditions, the VA must service-connect it without requiring you to prove the link.
            This guide explains who qualifies, what conditions are covered, and what to do if your claim
            was denied.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Agent Orange presumptive conditions
            </h2>
            <p className="text-gray-600 mb-4">
              If you were exposed to Agent Orange and have a diagnosis of any of the following conditions,
              the VA must presume it is service-connected — no nexus letter required:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-brand-navy text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">Condition</th>
                    <th className="text-left p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {PRESUMPTIVE_CONDITIONS.map((row, i) => (
                    <tr key={row.condition} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium text-gray-900">{row.condition}</td>
                      <td className="p-3 text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">List reflects VA presumptive schedule as of 2024. The PACT Act (2022) added several conditions. Consult a VA attorney for the most current list.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who is presumed exposed?
            </h2>
            <div className="space-y-3">
              {[
                { group: 'Vietnam veterans (boots on ground)', detail: 'Service in Vietnam or inland waterways between January 9, 1962 and May 7, 1975.' },
                { group: 'Blue Water Navy veterans', detail: 'Service on open-sea vessels in waters off Vietnam during the same period (added via 2019 law).' },
                { group: 'Korean DMZ veterans', detail: 'Service between September 1, 1967 and August 31, 1971 in a unit that served in the Korean DMZ.' },
                { group: 'Thai base veterans', detail: 'Veterans who served on Thai military bases where herbicides were used along perimeter defense.' },
                { group: 'C-123 aircraft veterans', detail: 'Veterans who flew or maintained C-123 aircraft used for Ranch Hand herbicide missions, through the mid-1980s.' },
              ].map((item) => (
                <div key={item.group} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex gap-3">
                  <span className="text-brand-navy font-bold mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.group}</p>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </section>

          <div className="bg-brand-navy rounded-xl p-6">
            <h2 className="font-semibold text-white mb-2">Need help with an Agent Orange claim?</h2>
            <p className="text-sm text-gray-300 mb-4">
              VA attorneys handle Agent Orange cases on contingency — no upfront cost. They work to maximize your rating and back pay.
            </p>
            <Link href="/listings" className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-gold-light transition-colors">
              Find a VA Attorney <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/nexus-letter-va-claim" className="text-sm text-brand-navy hover:opacity-80 font-medium">Nexus Letters Explained →</Link>
              <Link href="/guides/burn-pit-pact-act" className="text-sm text-brand-navy hover:opacity-80 font-medium">Burn Pit / PACT Act Claims →</Link>
              <Link href="/guides/va-disability-rating-explained" className="text-sm text-brand-navy hover:opacity-80 font-medium">VA Disability Ratings →</Link>
              <Link href="/guides/tdiu-explained" className="text-sm text-brand-navy hover:opacity-80 font-medium">TDIU Explained →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
