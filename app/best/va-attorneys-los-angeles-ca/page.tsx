import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in Los Angeles, CA | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in Los Angeles, California. Browse verified attorneys who specialize in VA claims, TDIU, PACT Act cases, and BVA appeals.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-los-angeles-ca' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the VA Regional Office for Los Angeles veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los Angeles-area veterans are served by the VA Regional Office in Los Angeles, located at 11000 Wilshire Blvd. Initial claims, rating decisions, and regional office hearings for veterans in Southern California are processed through this office. The VA Greater Los Angeles Healthcare System (GLA) at Wilshire Blvd is the primary VA medical facility for the metro area.',
      },
    },
    {
      '@type': 'Question',
      name: 'What VA claim types are most common in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Los Angeles has a diverse veteran population spanning all service branches — Army, Marine Corps, Navy, Air Force, and Coast Guard. Common claim types include PTSD (particularly from combat deployment and military sexual trauma), PACT Act toxic exposure claims, musculoskeletal injuries from infantry and support MOS service, TBI from blast or training injuries, hearing loss, and TDIU for veterans who cannot maintain substantially gainful employment due to service-connected conditions.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does it cost money to hire a VA attorney in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No upfront cost — federal law prohibits VA attorneys from charging fees until after a favorable decision is issued. VA attorneys work on contingency: they receive a percentage (capped at 33%) of retroactive back pay after a successful appeal. If they don't win, you pay nothing. The only out-of-pocket costs are for independent medical exams or nexus letters, which some attorneys advance and recover from the fee.",
      },
    },
  ],
}

export default async function LosAngelesBestPage() {
  const listings = await getListingsByCity('CA', 'Los Angeles')

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
          <Link href="/states/ca" className="hover:text-brand-navy">California</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Los Angeles</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Los Angeles, California</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in Los Angeles, CA
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Los Angeles has one of the largest veteran populations in the country — over 300,000 veterans across the five-county metro area. The city&apos;s VA attorney community is experienced in the full range of disability claims: combat-related PTSD, PACT Act toxic exposure, TBI, military sexual trauma, and complex TDIU cases. Every attorney listed here is VA-accredited by the Office of General Counsel.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Los Angeles VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> VA Greater Los Angeles Healthcare System (11301 Wilshire Blvd)</li>
            <li><strong>VA Regional Office:</strong> Los Angeles VA Regional Office (11000 Wilshire Blvd)</li>
            <li><strong>Common claim types in LA:</strong> PTSD, PACT Act / burn pit, TBI, MST, hearing loss/tinnitus, TDIU, musculoskeletal</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all California VA attorneys while we add more LA listings:</p>
            <Link
              href="/states/ca"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse California VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Los Angeles, CA
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more California VA attorneys?</p>
            <p className="text-sm text-gray-600">California has 400+ VA-accredited attorneys across San Diego, San Francisco, Sacramento, Fresno, and more.</p>
          </div>
          <Link
            href="/states/ca"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All California Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Los Angeles VA Attorney Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-surface-border p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface rounded-xl border border-surface-border p-5 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">VA Attorneys in Other Cities</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/best/va-attorneys-chicago-il', label: 'Chicago, IL' },
              { href: '/best/va-attorneys-dallas-tx', label: 'Dallas, TX' },
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/best/va-attorneys-new-york-ny', label: 'New York, NY' },
              { href: '/states/fl', label: 'Florida' },
              { href: '/states/nc', label: 'North Carolina' },
              { href: '/states/va', label: 'Virginia' },
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

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Los Angeles?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with veterans in the LA metro who are searching for legal help.</p>
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
