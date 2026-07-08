import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Boston, MA | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Boston, MA. Cambridge, Quincy, Braintree, Waltham, Lowell. No upfront fees — federally capped at 20% of past-due benefits.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-boston-ma' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Which VA Regional Office serves Boston veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Massachusetts veterans are served by the VA Regional Office in Boston (JFK Federal Building). This office processes claims for all Massachusetts veterans including those in Greater Boston, the MetroWest suburbs, Cape Cod, and the Islands. The VA Boston Healthcare System (with campuses in Jamaica Plain and West Roxbury) provides healthcare services separately. Boston has a large number of VA-accredited attorneys given the metro\'s concentration of educated veterans willing to pursue appeals.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims are common in Boston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Massachusetts veterans include many Guard and Reserve members from the Yankee Division who served in Iraq and Afghanistan, Air Force veterans from Hanscom AFB, and a significant Cold War-era veteran population. Claims common in Boston include PTSD, TBI, hearing loss, PACT Act burn pit exposure, and TDIU for veterans with multiple orthopedic or neurological conditions. Boston also has a significant MST claims community, with the Jamaica Plain campus running a dedicated MST program.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are free VSO services available in Greater Boston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Massachusetts Department of Veterans Services (DVS) funds a network of county and local veterans service offices including dedicated offices in Boston, Cambridge, Quincy, and Lowell. The Massachusetts Veterans Legal Help project provides free legal help for veterans with income limitations. American Legion, VFW, DAV, and AMVETS all have active Boston-area chapters. VA-accredited attorneys charge no upfront fees and are capped at 20% of past-due benefits.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Massachusetts have good state veterans benefits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Massachusetts has strong state-level benefits: a property tax exemption up to $400 per year for veterans ($750 for 10%+ disability); the Massachusetts Soldiers Home in Chelsea for aging veterans; waived tuition at all UMass campuses for children of KIA veterans; veterans preference in state civil service; and an excellent DVS network with local offices throughout the state. Massachusetts also has the POW/MIA Recognition Day and strong VA disability rating advocacy infrastructure.",
      },
    }
  ],
}

export default async function BostonVAAttorneysPage() {
  const listings = await getListingsByCity('MA', 'Boston')

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
          <span className="text-gray-900 font-medium">VA Attorneys in Boston, MA</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Boston, MA</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Boston, MA
          </h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Boston has a large veteran community connected to the region's many military installations — Hanscom AFB, Camp Edwards/JBCC, and the former Devens Army Reserve Center. Massachusetts veterans' attorneys are well-versed in both active-duty and National Guard Reserve member claims, including deployments under Title 10 and Title 32 that affect VA eligibility.
          </p>
        </div>

        {listings && listings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">VA Attorneys Near Boston</h2>
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
          <h2 className="text-2xl font-semibold text-gray-800">Boston VA Claims: Common Questions</h2>
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
