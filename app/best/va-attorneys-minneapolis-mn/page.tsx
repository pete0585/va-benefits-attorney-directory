import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Minneapolis, MN | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Minneapolis, MN. Saint Paul, Bloomington, Plymouth, Edina. No upfront fees — federally capped at 20% of past-due benefits.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-minneapolis-mn' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Which VA Regional Office handles Minneapolis veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Minnesota veterans are served by the VA Regional Office located in St. Paul, MN (adjacent to Minneapolis). This office processes initial claims, Supplemental Claims, Higher-Level Reviews, and regional hearings for all Minnesota veterans. The Minneapolis VA Health Care System (Minneapolis VA Medical Center) provides healthcare separately from claims decisions. Veterans from the Twin Cities metro area represent the largest single concentration of Minnesota VA claimants.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Minnesota veteran claims unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Minnesota National Guard\'s 34th Infantry Division (\'Red Bulls\') is among the most combat-deployed Guard units in U.S. history — with extended tours in Iraq, Afghanistan, and Kuwait. This creates high claim volume for PTSD, TBI from blast exposure, and musculoskeletal injuries from Guard members who may not have anticipated VA eligibility. PACT Act eligibility for burn pit exposure is also significant for Red Bulls veterans. Many Minnesota attorneys focus specifically on National Guard and Reserve member claims.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there veterans service organizations in Minneapolis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Minneapolis and St. Paul have active chapters of the American Legion, VFW, DAV, and Disabled Veterans of America. The Minnesota Department of Veterans Affairs (MDVA) offers free accredited claims assistance through county Veterans Service Officers (VSOs) — every Minnesota county has at least one VSO available at no charge. The Minneapolis Vet Center also provides readjustment counseling and benefits referrals.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Minnesota have good veterans benefits in addition to federal VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Minnesota has strong state-level veterans benefits including: free tuition at MnSCU colleges and universities for dependents of veterans with 100% P&T disability or who died in service; veterans property tax exemptions; bonus/credit programs for National Guard members; and excellent MDVA county VSO network providing free claims help. The state also has a Veterans Economic Opportunity Office supporting employment transitions.",
      },
    }
  ],
}

export default async function MinneapolisVAAttorneysPage() {
  const listings = await getListingsByCity('MN', 'Minneapolis')

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
          <span className="text-gray-900 font-medium">VA Attorneys in Minneapolis, MN</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Minneapolis, MN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Minneapolis, MN
          </h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Minneapolis and the Twin Cities metro serve a large veteran population including many veterans of the Army's 34th Infantry Division ('Red Bulls') — one of the most deployed National Guard divisions in U.S. history. Minnesota veterans' attorneys are experienced with deployment-related PTSD, TBI, and musculoskeletal claims from Guard and Reserve members who served in Iraq and Afghanistan.
          </p>
        </div>

        {listings && listings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">VA Attorneys Near Minneapolis</h2>
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
          <h2 className="text-2xl font-semibold text-gray-800">Minneapolis VA Claims: Common Questions</h2>
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
