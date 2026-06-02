import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in New York City, NY | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in New York City. Browse verified attorneys specializing in VA claims, CAVC appeals, TDIU, and burn pit / PACT Act cases.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-new-york-ny' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the VA Regional Office for New York veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York veterans are served by the VA Regional Office in New York City (245 W 34th St). This is one of the largest and most experienced regional offices in the country. The New York VA Healthcare System includes the Manhattan VA, Brooklyn VA, and multiple community-based outpatient clinics across the five boroughs and surrounding areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do New York VA attorneys handle cases outside New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. VA law is federal, so New York-based attorneys routinely represent veterans across the country. New York City has a large concentration of VA attorneys with CAVC appellate experience — since CAVC hearings take place in Washington D.C. (or via video), geography is irrelevant. Many of the most specialized VA appellate attorneys are in New York.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common VA claim types for New York City veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York City veterans include a high proportion of Vietnam-era veterans (Agent Orange, PTSD), Gulf War veterans (toxic exposure, undiagnosed illness), and post-9/11 veterans with PTSD, TBI, and burn pit exposure claims. NYC also has a significant population of veterans affected by the 9/11 attacks who may have additional exposure-related claims under the VCF and VA systems.',
      },
    },
  ],
}

export default async function NewYorkBestPage() {
  const listings = await getListingsByCity('NY', 'New York City')
  const nycVariants = listings.length === 0
    ? await getListingsByCity('NY', 'New York')
    : listings

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
          <Link href="/states/ny" className="hover:text-brand-navy">New York</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in New York City</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">New York City, New York</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in New York City, NY
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            New York City has one of the most experienced VA attorney communities in the country, with particular strength in BVA and CAVC appellate work. NYC-based VA attorneys represent veterans nationally, and the city's 900,000+ veteran population includes large concentrations of Vietnam-era, Gulf War, and post-9/11 veterans. Every attorney listed here is VA-accredited.
          </p>
        </div>

        {/* Context box */}
        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">New York City VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Centers:</strong> Manhattan VA (423 E 23rd St), Brooklyn VA Healthcare System, and 8+ CBOCs in the metro area</li>
            <li><strong>Regional VA Office:</strong> New York VA Regional Office (245 W 34th St, Manhattan)</li>
            <li><strong>Common claim types in NYC:</strong> Vietnam-era Agent Orange, Gulf War syndrome, PTSD, CAVC appeals, TBI, burn pit/PACT Act, 9/11-related exposure</li>
          </ul>
        </div>

        {/* Listings */}
        {nycVariants.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">No attorneys with New York City listed as their primary city yet. Browse all New York VA attorneys:</p>
            <Link
              href="/states/ny"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse New York VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{nycVariants.length}</strong> VA-accredited attorney{nycVariants.length !== 1 ? 's' : ''} in New York City, NY
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {nycVariants.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        {/* See all NY */}
        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more New York VA attorneys?</p>
            <p className="text-sm text-gray-600">New York has 438+ VA-accredited attorneys across Buffalo, Albany, Syracuse, Rochester, and the metro area.</p>
          </div>
          <Link
            href="/states/ny"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All New York Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        {/* FAQ */}
        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">New York City VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/states/fl', label: 'Florida' },
              { href: '/states/tx', label: 'Texas' },
              { href: '/states/ca', label: 'California' },
              { href: '/states/va', label: 'Virginia' },
              { href: '/states/dc', label: 'Washington D.C.' },
              { href: '/states/pa', label: 'Pennsylvania' },
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
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in New York?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing on FindVAAttorney.com and connect with veterans across New York who need VA legal representation.</p>
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
