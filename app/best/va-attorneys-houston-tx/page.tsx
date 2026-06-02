import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in Houston, TX | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in Houston, Texas. Browse verified attorneys who specialize in VA claims, TDIU, burn pit / PACT Act cases, and BVA appeals.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-houston-tx' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the VA Regional Office for Houston veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Houston-area veterans are served by the VA Regional Office in Waco, TX. Initial claims, rating decisions, and regional office hearings for veterans in the Houston area are processed through the Waco VARO. Michael E. DeBakey VA Medical Center in Houston is the primary VA medical facility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are there so many veterans in Houston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Texas has approximately 1.5 million veterans — one of the highest veteran populations in the country. The Houston metro area draws veterans because of its strong job market, affordable cost of living compared to other major metros, and proximity to Joint Reserve Base Houston and other Texas military installations. Many post-9/11 veterans who served at Fort Hood (now Fort Liberty) or Fort Bliss relocated to Houston after service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims are most common in Houston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Houston VA attorneys frequently handle PTSD claims (high Army and deployment population), musculoskeletal injuries from infantry and combat arms service, PACT Act / burn pit toxic exposure claims, hearing loss and tinnitus, TBI from blast exposure, and TDIU claims for veterans who cannot maintain employment due to service-connected conditions.',
      },
    },
  ],
}

export default async function HoustonBestPage() {
  const listings = await getListingsByCity('TX', 'Houston')

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
          <Link href="/states/tx" className="hover:text-brand-navy">Texas</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Houston</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Houston, Texas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in Houston, TX
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Houston is one of the largest veteran markets in the country, with a strong concentration of post-9/11 Army and Air Force veterans. The city has a well-developed VA attorney community experienced in PTSD, combat-related TBI, PACT Act toxic exposure claims, and TDIU cases. Every attorney listed here is VA-accredited and available to Houston-area veterans.
          </p>
        </div>

        {/* Context box */}
        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Houston VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> Michael E. DeBakey VA Medical Center (2002 Holcombe Blvd, Houston)</li>
            <li><strong>Regional VA Office:</strong> Waco VA Regional Office (Waco, TX)</li>
            <li><strong>Common claim types in Houston:</strong> PTSD, TBI from blast exposure, PACT Act / burn pit, musculoskeletal conditions, hearing loss/tinnitus, TDIU</li>
          </ul>
        </div>

        {/* Listings */}
        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">No attorneys with Houston listed as their primary city yet. Browse all Texas VA attorneys:</p>
            <Link
              href="/states/tx"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse Texas VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Houston, TX
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        {/* See all TX */}
        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Texas VA attorneys?</p>
            <p className="text-sm text-gray-600">Texas has 395+ VA-accredited attorneys across Dallas, San Antonio, Austin, El Paso, and more.</p>
          </div>
          <Link
            href="/states/tx"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Texas Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        {/* FAQ */}
        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Houston VA Attorney Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-surface-border p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other cities */}
        <div className="bg-surface rounded-xl border border-surface-border p-5 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">VA Attorneys in Other Cities</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/best/va-attorneys-new-york-ny', label: 'New York, NY' },
              { href: '/states/fl', label: 'Florida' },
              { href: '/states/ca', label: 'California' },
              { href: '/states/nc', label: 'North Carolina' },
              { href: '/states/va', label: 'Virginia' },
              { href: '/states/dc', label: 'Washington D.C.' },
              { href: '/states/ga', label: 'Georgia' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm bg-white border border-surface-border text-gray-700 hover:border-brand-navy/40 hover:text-brand-navy px-3 py-1.5 rounded-lg transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Houston?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with veterans in the Houston metro who are searching for legal help.</p>
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
