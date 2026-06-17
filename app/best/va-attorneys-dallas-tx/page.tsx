import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in Dallas, TX | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in Dallas, Texas. Browse verified attorneys who specialize in VA claims, TDIU, burn pit / PACT Act cases, and BVA appeals.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-dallas-tx' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the VA Regional Office for Dallas veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dallas-area veterans are served by the VA Regional Office in Waco, TX. The Waco VARO processes initial claims, rating decisions, and higher-level reviews for veterans across North Texas. The VA North Texas Health Care System (VANTHCS), with its main campus in Dallas and a large facility in Fort Worth, is the primary VA medical system for DFW veterans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there VA attorneys in Fort Worth or the DFW suburbs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The DFW Metroplex has VA attorneys across Dallas, Fort Worth, Plano, Arlington, Irving, Denton, and McKinney. Many VA attorneys licensed in Texas can represent veterans across the state regardless of where they are based — so if you don't find a specific Fort Worth attorney, a Dallas-area attorney can handle your case.",
      },
    },
    {
      '@type': 'Question',
      name: 'What service branches have the most veterans in Dallas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Dallas-Fort Worth area has significant Army, Air Force, and Marine Corps veteran populations. Naval Air Station Fort Worth JRB is an active reserve installation, and the region has historically had a large Guard/Reserve presence. Many DFW veterans served at Fort Hood (now Fort Liberty) before transitioning to civilian careers in Texas's strong job market. Army-related claims — PTSD, musculoskeletal, TBI from blast exposure — are among the most common in the Dallas market.",
      },
    },
  ],
}

export default async function DallasBestPage() {
  const listings = await getListingsByCity('TX', 'Dallas')

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
          <Link href="/states/tx" className="hover:text-brand-navy">Texas</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Dallas</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Dallas, Texas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in Dallas, TX
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Dallas-Fort Worth is home to over 300,000 veterans — one of the largest metropolitan veteran populations in the country. The DFW VA attorney community has deep experience with Army, Air Force, and Reserve component claims, PACT Act toxic exposure cases, and complex TDIU appeals. Every attorney listed here is VA-accredited by the Office of General Counsel.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Dallas VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> VA North Texas Health Care System — Dallas Division (4500 S Lancaster Rd)</li>
            <li><strong>VA Regional Office:</strong> Waco VA Regional Office (handles North Texas claims)</li>
            <li><strong>Common claim types in Dallas:</strong> PTSD, PACT Act / burn pit, TBI, musculoskeletal (Army/infantry), TDIU, hearing loss/tinnitus</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Texas VA attorneys while we add more Dallas listings:</p>
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
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Dallas, TX
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Texas VA attorneys?</p>
            <p className="text-sm text-gray-600">Texas has 395+ VA-accredited attorneys across Houston, San Antonio, Austin, El Paso, and more.</p>
          </div>
          <Link
            href="/states/tx"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Texas Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Dallas VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-los-angeles-ca', label: 'Los Angeles, CA' },
              { href: '/best/va-attorneys-chicago-il', label: 'Chicago, IL' },
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/best/va-attorneys-new-york-ny', label: 'New York, NY' },
              { href: '/states/fl', label: 'Florida' },
              { href: '/states/nc', label: 'North Carolina' },
              { href: '/states/ca', label: 'California' },
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
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Dallas?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with veterans in the DFW metro who are searching for legal help.</p>
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
