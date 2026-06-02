import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByState, getStateCounts } from '@/lib/data'
import { STATE_NAMES } from '@/lib/utils'

interface PageProps {
  params: Promise<{ state: string }>
}

export async function generateStaticParams() {
  const counts = await getStateCounts()
  return counts.map(({ state }) => ({ state: state.toLowerCase() }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params
  const stateCode = state.toUpperCase()
  const stateName = STATE_NAMES[stateCode]
  if (!stateName) return { title: 'State Not Found' }

  return {
    title: `VA Disability Attorneys in ${stateName} | FindVAAttorney.com`,
    description: `Find VA-accredited attorneys in ${stateName} who specialize in disability claims, appeals, and rating increases. Search the only directory built exclusively for veterans seeking legal help.`,
    alternates: { canonical: `https://findvaattorney.com/states/${state.toLowerCase()}` },
  }
}

export const revalidate = 3600

const STATE_CONTEXT: Record<string, { vaOffice: string; veteranPop: string; tip: string }> = {
  FL: { vaOffice: 'Bay Pines, Orlando, West Palm Beach, and St. Petersburg VA Medical Centers', veteranPop: '1.5 million', tip: 'Florida has one of the highest concentrations of Vietnam and Gulf War veterans — attorneys here have deep experience with Agent Orange and burn pit claims.' },
  TX: { vaOffice: 'Houston, Dallas, San Antonio, and Temple VA Medical Centers', veteranPop: '1.5 million', tip: 'Texas has a large active-duty and retired military population concentrated near Fort Hood, Fort Bliss, and Joint Base San Antonio — many local attorneys specialize in combat-related TBI and PTSD claims.' },
  CA: { vaOffice: 'Los Angeles, San Francisco, San Diego, and Loma Linda VA Medical Centers', veteranPop: '1.6 million', tip: 'California has the largest veteran population in the country. Attorneys in San Diego and Los Angeles handle high volumes of Navy/Marine Corps claims.' },
  NY: { vaOffice: 'New York Harbor, Buffalo, and Syracuse VA Medical Centers', veteranPop: '900,000', tip: 'New York City has a large concentration of Vietnam-era veterans and a robust VA-accredited attorney community with CAVC appellate experience.' },
  VA: { vaOffice: 'Richmond, Hampton, and Salem VA Medical Centers', veteranPop: '750,000', tip: 'Virginia\'s proximity to the Pentagon and multiple military installations means many attorneys here handle DoD/VA overlap cases and military retirement pay issues.' },
  NC: { vaOffice: 'Durham, Fayetteville, and Salisbury VA Medical Centers', veteranPop: '700,000', tip: 'Fort Bragg (now Fort Liberty) drives high demand for PTSD and TBI claim representation among Army special operations veterans in the Fayetteville area.' },
  GA: { vaOffice: 'Augusta, Atlanta, and Dublin VA Medical Centers', veteranPop: '700,000', tip: 'Fort Benning and Fort Stewart concentrate Army veterans in south Georgia — local attorneys frequently handle combat infantry and airborne-related MSK claims.' },
  OH: { vaOffice: 'Cleveland, Cincinnati, Columbus, and Dayton VA Medical Centers', veteranPop: '650,000', tip: 'Ohio has a high concentration of veterans from the WWII and Korean War era in addition to recent OEF/OIF veterans — attorneys here handle a wide spectrum of claim types.' },
  PA: { vaOffice: 'Philadelphia, Pittsburgh, Wilkes-Barre, and Coatesville VA Medical Centers', veteranPop: '800,000', tip: 'Pennsylvania\'s Philadelphia and Pittsburgh markets are home to established VA law boutiques with strong BVA and CAVC appellate track records.' },
  IL: { vaOffice: 'Chicago and Hines VA Medical Centers', veteranPop: '650,000', tip: 'Illinois attorneys frequently represent veterans denied benefits for hearing loss, tinnitus, and musculoskeletal conditions from the Chicago area industrial and military population.' },
  DC: { vaOffice: 'Washington DC VA Medical Center', veteranPop: '25,000', tip: 'DC has a disproportionately high number of VA-accredited attorneys due to proximity to the VA Central Office, BVA, and CAVC — many handle appellate work nationally via remote representation.' },
  MI: { vaOffice: 'Ann Arbor, Battle Creek, Detroit, and Saginaw VA Medical Centers', veteranPop: '600,000', tip: 'Michigan\'s manufacturing and auto industry veterans face unique occupational disease overlap issues that experienced VA attorneys navigate.' },
  MA: { vaOffice: 'Boston, Bedford, and Northampton VA Medical Centers', veteranPop: '350,000', tip: 'Massachusetts has a strong contingent of VA attorneys at Boston-area firms with CAVC appellate expertise.' },
  IN: { vaOffice: 'Indianapolis, Marion, and Fort Wayne VA Medical Centers', veteranPop: '400,000', tip: 'Indiana veterans served heavily in Iraq and Afghanistan — local attorneys specialize in PTSD, TBI, and toxic exposure claims.' },
  NJ: { vaOffice: 'East Orange, Lyons, and Wilmington VA Medical Centers', veteranPop: '400,000', tip: 'New Jersey\'s proximity to New York City means many veterans access both NJ and NY-based attorneys for representation.' },
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params
  const stateCode = state.toUpperCase()
  const stateName = STATE_NAMES[stateCode]

  if (!stateName) notFound()

  const listings = await getListingsByState(stateCode)
  const context = STATE_CONTEXT[stateCode]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How many VA-accredited attorneys are in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `FindVAAttorney.com lists ${listings.length}+ VA-accredited attorneys in ${stateName}. The VA's Office of General Counsel maintains the authoritative list of all accredited practitioners — everyone in this directory has verified VA accreditation.`,
        },
      },
      {
        '@type': 'Question',
        name: `Do I need a ${stateName}-licensed attorney for my VA claim?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `No. VA law is federal, not state law. A VA-accredited attorney licensed in any state can represent you before the VA, regardless of where you live. Many veterans in ${stateName} work with attorneys in other states via phone and email — especially for BVA appeals in Washington D.C.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How does a VA attorney get paid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'VA attorneys work on contingency — they take a percentage (usually 20–33%) of your retroactive back pay if they win. If they lose, you owe nothing. The VA regulates attorney fees directly and caps fees for most cases. Many attorneys also offer free initial consultations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a VA attorney and a VSO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Veterans Service Organization (VSO) representative is free and helps veterans file initial claims. A VA-accredited attorney is a licensed lawyer who can represent you on appeals, file legal arguments, and is bound by professional ethics rules. For denied claims or appeals, an attorney generally gets better results.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <Link href="/listings" className="hover:text-brand-navy">Attorneys</Link>
          {' / '}
          <span className="text-gray-900 font-medium">{stateName}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in {stateName}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            {listings.length > 0
              ? `${listings.length}+ VA-accredited attorneys in ${stateName} who specialize in disability claims, appeals, and rating increases. Every attorney listed here is accredited by the VA Office of General Counsel.`
              : `Browse VA-accredited attorneys in ${stateName} who represent veterans in disability claims and appeals.`}
          </p>
        </div>

        {/* State context box */}
        {context && (
          <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
            <h2 className="font-semibold text-brand-navy mb-2">VA Resources in {stateName}</h2>
            <p className="text-sm text-gray-700 mb-2">
              <strong>VA Regional Offices & Medical Centers:</strong> {context.vaOffice}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Estimated veteran population:</strong> {context.veteranPop}
            </p>
            <p className="text-sm text-gray-700">{context.tip}</p>
          </div>
        )}

        {/* Listings */}
        {listings.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">No attorneys listed for {stateName} yet.</p>
            <Link href="/listings" className="text-brand-navy hover:underline font-medium">Browse all attorneys</Link>
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            {listings.length >= 50 && (
              <div className="text-center pt-4">
                <Link
                  href={`/listings?state=${stateCode}`}
                  className="bg-brand-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
                >
                  View all {stateName} attorneys
                </Link>
              </div>
            )}
          </div>
        )}

        {/* FAQ */}
        <div className="border-t border-surface-border pt-10 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            VA Attorney Questions — {stateName}
          </h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-surface-border p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Are you a VA-accredited attorney in {stateName}?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your free listing and connect directly with veterans who need your help.</p>
          <Link
            href="/submit"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-block"
          >
            Claim Your Listing
          </Link>
        </div>
      </div>
    </>
  )
}
