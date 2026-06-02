import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in Miami, FL | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in Miami, Florida. Browse verified attorneys who specialize in VA claims, appeals, TDIU, and burn pit cases. Free to search.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-miami-fl' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many VA-accredited attorneys are in Miami, FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miami has one of the largest concentrations of VA-accredited attorneys in Florida. Florida overall has the third-highest veteran population in the country at approximately 1.5 million veterans, making South Florida a well-served market for VA disability legal representation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to use a Miami attorney for my VA claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. VA disability law is federal. Any VA-accredited attorney in the country can represent you, regardless of where you live. Many Miami veterans work with attorneys in Tampa, Jacksonville, Washington D.C., and nationally via remote consultations. The attorney\'s specialization matters more than their zip code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the VA Regional Office for Miami veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miami-area veterans are served by the VA Regional Office in St. Petersburg, FL. Initial claims and regional office decisions for South Florida veterans are processed there. For BVA appeals, hearings are held in Washington D.C. (in-person or via video).',
      },
    },
  ],
}

export default async function MiamiBestPage() {
  const listings = await getListingsByCity('FL', 'Miami')

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
          <Link href="/states/fl" className="hover:text-brand-navy">Florida</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Miami</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Miami, Florida</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in Miami, FL
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Miami is home to a large veteran community with strong ties to the Army, Navy, and Coast Guard. South Florida veterans face common claim types including PTSD, musculoskeletal injuries from service, and increasing numbers of PACT Act and burn pit claims from post-9/11 veterans. Every attorney below is VA-accredited and serves Miami-area veterans.
          </p>
        </div>

        {/* Context box */}
        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Miami VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> Miami VA Healthcare System (1201 NW 16th St, Miami)</li>
            <li><strong>Regional VA Office:</strong> Bay Pines VA Regional Office (St. Petersburg, FL)</li>
            <li><strong>Common claim types in South Florida:</strong> PTSD, MSK conditions, PACT Act / burn pit exposure, hearing loss, TBI</li>
          </ul>
        </div>

        {/* Listings */}
        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">No attorneys with Miami listed as their primary city yet. Browse all Florida VA attorneys:</p>
            <Link
              href="/states/fl"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse Florida VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Miami, FL
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        {/* See all FL */}
        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Florida VA attorneys?</p>
            <p className="text-sm text-gray-600">Florida has 640+ VA-accredited attorneys across Tampa, Jacksonville, Orlando, Fort Lauderdale, and more.</p>
          </div>
          <Link
            href="/states/fl"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Florida Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        {/* FAQ */}
        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Miami VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/best/va-attorneys-new-york-ny', label: 'New York, NY' },
              { href: '/states/tx', label: 'Texas' },
              { href: '/states/ca', label: 'California' },
              { href: '/states/ny', label: 'New York' },
              { href: '/states/nc', label: 'North Carolina' },
              { href: '/states/ga', label: 'Georgia' },
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

        {/* CTA */}
        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Is your listing missing or incomplete?</h2>
          <p className="text-gray-300 mb-4 text-sm">VA-accredited attorneys can claim and upgrade their listing for free.</p>
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
