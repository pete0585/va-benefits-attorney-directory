import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Washington, DC | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Washington, DC. Northern Virginia, Southern Maryland. No upfront fees — federally capped at 20% of past-due benefits.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-washington-dc' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Which VA Regional Office serves Washington, DC veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Washington, DC veterans are served by the VA Regional Office located in Washington, DC. Veterans in Northern Virginia and Southern Maryland are also typically served by this office. The Washington DC VARO handles initial claims, Supplemental Claims, Higher-Level Reviews, and regional hearings for veterans across the National Capital Region. The DC area also has direct access to the Board of Veterans\' Appeals (BVA) in Washington for contested hearings.",
      },
    },
    {
      '@type': 'Question',
      name: 'What VA facilities are in Washington, DC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Washington DC VA Medical Center in NW DC serves National Capital Region veterans for inpatient and outpatient care. The Veteran Benefits Administration\'s Central Office is also in DC, giving the region unique access to appeals personnel. Several community-based outpatient clinics (CBOCs) serve DC, Northern Virginia, and Southern Maryland veterans. The American Legion, DAV, and VFW all have national headquarters in or near DC, providing free VSO claims assistance.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims are common for DC metro veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "DC metro veterans include many federal government employees, intelligence community members, and high-ranking military retirees — groups with complex claims including PTSD from combat and classified operations, MST, TBI from field service, and TDIU for veterans whose service-connected disabilities prevent employment. DC attorneys also handle CAVC (Court of Appeals for Veterans Claims) appeals, which is physically located in DC.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get VA legal help for free in Washington, DC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Veteran Service Organizations (VSOs) — the American Legion, DAV, VFW, Vietnam Veterans of America — all have significant presences in DC and provide free accredited claims assistance. The DC Bar Pro Bono Center has a veterans legal assistance program. VA-accredited attorneys who charge contingency fees are federally capped at 20% of past-due benefits after a final decision — no upfront fees for representation after initial denial.",
      },
    }
  ],
}

export default async function WashingtonVAAttorneysPage() {
  const listings = await getListingsByCity('DC', 'Washington')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <Link href="/listings" className="hover:text-brand-navy">Find a VA Attorney</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Washington, DC</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Washington, DC</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Washington, DC
          </h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Washington, DC is home to the VA Central Office, several major VA medical facilities, and the region's highest concentration of VA-accredited disability attorneys. Veterans from the National Capital Region — including active duty transitioning at Fort Myer, Bolling, and Joint Base Anacostia-Bolling — benefit from a deep pool of attorneys specializing in complex claims, Board of Veterans Appeals hearings, and CAVC appeals.
          </p>
        </div>

        {listings && listings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">VA Attorneys Near Washington</h2>
              <Link href="/listings" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                All VA Attorneys <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border p-12 text-center mb-12">
            <p className="text-gray-500 mb-4">Browse all VA disability attorneys.</p>
            <Link href="/listings" className="inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search VA Attorneys <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Washington VA Claims: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/listings" className="text-sm text-brand-blue hover:opacity-80 font-medium">All VA Attorneys →</Link>
            <Link href="/guides/va-disability-attorney-cost" className="text-sm text-brand-blue hover:opacity-80 font-medium">How Much Does a VA Attorney Cost? →</Link>
            <Link href="/guides/va-claim-denied-next-steps" className="text-sm text-brand-blue hover:opacity-80 font-medium">VA Claim Denied — What Next? →</Link>
            <Link href="/guides/va-disability-rating-appeal" className="text-sm text-brand-blue hover:opacity-80 font-medium">How to Appeal Your VA Rating →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
