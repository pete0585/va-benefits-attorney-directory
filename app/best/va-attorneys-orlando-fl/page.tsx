import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Orlando, FL | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Orlando, FL. Kissimmee, Sanford, Lake Mary, Daytona Beach. No upfront fees — federally capped at 20% of past-due benefits.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-orlando-fl' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Which VA Regional Office handles Orlando veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Central Florida veterans are served by the VA Regional Office in St. Petersburg, FL. This office processes claims for all Florida veterans. Orlando veterans can also access outpatient care through the VA Orlando Healthcare System (Lake Nona VA Medical Center and surrounding CBOCs). The Lake Nona VA campus opened in 2016 and is one of the most modern VA facilities in the country, designed specifically to serve Florida\'s rapidly growing veteran population.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Orlando\'s veteran population unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Orlando has attracted significant veteran migration — particularly Space Force and Air Force veterans transitioning from Patrick SFB (Brevard County), Navy veterans from Jacksonville (NAS Jax), and Army veterans from deployments to Iraq and Afghanistan who resettled in Florida\'s favorable tax climate. Florida has no state income tax on VA disability payments or military retirement pay, making it a top destination. This creates high demand for VA attorneys experienced with Air Force and Space Force-specific claims.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are free VSO services available in Orlando?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Orange and Osceola Counties have Veterans Service Officers through the Florida Department of Veterans\' Affairs (FDVA). Orlando also has active chapters of the American Legion, VFW, DAV, and Disabled Veterans of America. The FDVA operates a full-service office in Orlando. VA-accredited attorneys in the Orlando area charge no upfront fees and are federally capped at 20% of past-due benefits after a final decision.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Florida offer good state veterans benefits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Florida has strong state-level veterans benefits: no state income tax on military retirement or VA disability pay; homestead exemption for veterans with certain disability ratings; free tuition at Florida public colleges and universities for children of veterans who died in service or have 100% P&T disability; Florida veteran preference in state employment; and an active FDVA network with offices throughout the state including Orlando.",
      },
    }
  ],
}

export default async function OrlandoVAAttorneysPage() {
  const listings = await getListingsByCity('FL', 'Orlando')

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
          <span className="text-gray-900 font-medium">VA Attorneys in Orlando, FL</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Orlando, FL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Orlando, FL
          </h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Orlando and Central Florida are home to one of the country's fastest-growing veteran populations. Patrick Space Force Base (formerly Patrick AFB), Naval Air Station Jacksonville (accessible from North Florida), and a major VA outpatient clinic network serve the region. Florida's veteran-friendly tax environment and warm climate have made the Orlando metro a top relocation destination for retirees and transitioning service members.
          </p>
        </div>

        {listings && listings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">VA Attorneys Near Orlando</h2>
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
          <h2 className="text-2xl font-semibold text-gray-800">Orlando VA Claims: Common Questions</h2>
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
