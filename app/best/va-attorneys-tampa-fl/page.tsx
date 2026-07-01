import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Tampa, FL | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Tampa, Florida. Serving veterans at MacDill AFB, James A. Haley VAMC, and across the Tampa Bay metro for disability claims and PACT Act cases.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-tampa-fl' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the VA Regional Office serving Tampa veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Florida veterans are served by the St. Petersburg VA Regional Office, which handles disability claims for the entire state. The James A. Haley Veterans' Hospital in Tampa is the primary VA medical center for the Tampa Bay metro area — it is one of the largest VA hospitals in the United States and also houses significant VA research programs. Veterans seeking care at James A. Haley file their disability claims through St. Petersburg.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Florida have benefits or exemptions for disabled veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Florida offers substantial benefits for veterans with service-connected disabilities. Veterans with a 10% or greater service-connected disability rating are eligible for a property tax discount (equal to the disability percentage). Veterans rated at 100% P&T (Permanent and Total) receive a complete property tax exemption on their primary residence — one of the most generous in the country. Florida also has no state income tax, which benefits all residents including veterans receiving VA disability compensation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a VA attorney help veterans transitioning out of MacDill AFB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. VA attorneys can assist active duty service members within 180 days of separation filing pre-discharge claims (Benefits Delivery at Discharge / BDD program). For MacDill AFB veterans separating from CENTCOM or SOCOM assignments, which often involve multiple overseas deployments, building a comprehensive initial claim is particularly important. VA attorneys in Tampa are experienced with claims from special operations, CENTCOM deployments, and the unique service records associated with MacDill-assigned units.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there PACT Act burn pit claims from Tampa area veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Tampa Bay area has a large post-9/11 veteran population from MacDill AFB and the broader military community in the region. Many of these veterans deployed to Iraq, Afghanistan, and Southwest Asia and were exposed to open burn pits. The PACT Act (2022) created presumptive conditions for burn pit exposure including 20+ respiratory conditions and 40+ cancers. Tampa-area VA attorneys experienced with PACT Act claims can help veterans navigate the expanded eligibility and file for conditions that were previously denied.",
      },
    },
  ],
}

export default async function TampaVAAttorneysPage() {
  const listings = await getListingsByCity('FL', 'Tampa')

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
          <Link href="/states/fl" className="hover:text-brand-navy">Florida</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Tampa</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Tampa, Florida</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Tampa, FL
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Tampa Bay is home to one of the highest concentrations of military and veteran families in the country. MacDill Air Force Base — headquarters of US Central Command (CENTCOM) and US Special Operations Command (SOCOM) — sits at the southern tip of Tampa. James A. Haley Veterans&apos; Hospital is one of the largest and most active VA medical centers in the United States. Florida&apos;s no state income tax and property tax exemptions for disabled veterans make Tampa a major destination for retiring military families, and the VA attorney community here handles the full range of disability and appeals work.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Tampa Bay VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Regional Office:</strong> St. Petersburg VA Regional Office — handles all Florida disability claims</li>
            <li><strong>VA Medical Center:</strong> James A. Haley Veterans&apos; Hospital — 13000 Bruce B Downs Blvd, Tampa, FL</li>
            <li><strong>Major military installations:</strong> MacDill AFB (Tampa) — CENTCOM and SOCOM HQ</li>
            <li><strong>Common claim types:</strong> PTSD, TBI, PACT Act burn pit claims, musculoskeletal, hearing loss, MST, special operations-related injuries</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Florida VA attorneys while we add more Tampa listings:</p>
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
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Tampa, FL
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Florida VA attorneys?</p>
            <p className="text-sm text-gray-600">Florida VA attorneys also serve veterans in Orlando, Jacksonville, St. Petersburg, Fort Lauderdale, and across the state.</p>
          </div>
          <Link
            href="/states/fl"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Florida Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Tampa VA Attorney Questions</h2>
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
          <h2 className="font-semibold text-gray-900 mb-3">VA Attorneys in Other Florida Cities</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/states/fl', label: 'All Florida' },
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/best/va-attorneys-dallas-tx', label: 'Dallas, TX' },
              { href: '/best/va-attorneys-san-antonio-tx', label: 'San Antonio, TX' },
              { href: '/states/ga', label: 'Georgia' },
              { href: '/states/nc', label: 'North Carolina' },
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

        <div className="pt-8 border-t border-surface-border mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">Helpful VA Guides for Tampa Veterans</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/burn-pit-pact-act" className="text-brand-navy font-medium hover:underline">Burn Pit &amp; PACT Act Claims →</Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters for VA Claims →</Link>
          </div>
        </div>

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Tampa Bay?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with veterans in Tampa, MacDill, St. Pete, and Clearwater who need legal help with their VA claims.</p>
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
