import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Baltimore, MD | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Baltimore, MD. Annapolis, Columbia, Towson, Fort Meade. No upfront fees — federally capped at 20% of past-due benefits.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-baltimore-md' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Which VA Regional Office handles Baltimore veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Maryland veterans are served by the VA Regional Office in Baltimore (Wabash Ave location). This office processes claims for all Maryland veterans and operates alongside the Baltimore VA Medical Center. Veterans in the Baltimore metro — including Fort Meade, NSA, and Andrews Air Force Base populations — represent a high concentration of Maryland claimants. The Baltimore VARO handles initial claims, Supplemental Claims, Higher-Level Reviews, and can schedule BVA hearings.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims are common for Baltimore-area veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Baltimore-area veterans include significant NSA and intelligence community veterans with complex PTSD and occupational stress claims, Army veterans from Fort Meade (some of the Army\'s most intensive cyber and intelligence training), and Maryland National Guard members. PACT Act burn pit claims are significant. Many Baltimore veterans also have hearing loss claims from artillery and vehicle operations. Baltimore attorneys handle both straightforward ratings cases and complex CAVC appeals.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are free VSO services available in Baltimore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Maryland Department of Veterans Affairs (MDVA) funds county Veterans Services officers throughout the state, including Baltimore City. The American Legion, VFW, DAV, and AMVETS have active Baltimore chapters providing free accredited claims assistance. Johns Hopkins\' Veterans and Military Families Center also provides referrals. VA-accredited attorneys in Baltimore charge no upfront fees and are federally capped at 20% of past-due benefits after a final decision.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Maryland offer state-level veterans benefits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Maryland offers a property tax exemption for veterans with 100% P&T disability (full exemption for income-eligible veterans). The Maryland Higher Education Commission offers tuition waivers at state schools for children of veterans with 100% P&T disability or killed in action. Maryland also has a Veterans Property Tax Credit for surviving spouses. The MDVA provides free claims assistance through its regional offices in Baltimore, Linthicum, and Salisbury.",
      },
    }
  ],
}

export default async function BaltimoreVAAttorneysPage() {
  const listings = await getListingsByCity('MD', 'Baltimore')

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
          <span className="text-gray-900 font-medium">VA Attorneys in Baltimore, MD</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Baltimore, MD</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Baltimore, MD
          </h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Baltimore has a large veteran population connected to Fort Meade, the National Security Agency, and Joint Base Andrews. The city also serves veterans from the National Capital Region who prefer Maryland-based legal representation. The VA Maryland Health Care System (Baltimore VA Medical Center) and VA Regional Office in Baltimore are the primary VA access points for Maryland veterans.
          </p>
        </div>

        {listings && listings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">VA Attorneys Near Baltimore</h2>
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
          <h2 className="text-2xl font-semibold text-gray-800">Baltimore VA Claims: Common Questions</h2>
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
