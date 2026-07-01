import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Charlotte, NC | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Charlotte, NC. Serving veterans from Fort Liberty (Fort Bragg), the Carolinas VA HCS, and across the greater Charlotte metro.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-charlotte-nc' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the VA facility serving Charlotte, NC veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Carolinas VA Health Care System serves the Charlotte region with a VA Outpatient Clinic in Charlotte. The full VA Medical Center for the region is the W.G. (Bill) Hefner VAMC in Salisbury, NC. Veterans in Charlotte may also access care at the Durham VA Medical Center. For disability claims, Charlotte-area veterans file through the Winston-Salem VA Regional Office.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Charlotte VA attorneys help veterans from Fort Liberty (Fort Bragg)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Fort Liberty (formerly Fort Bragg) is approximately two hours from Charlotte, and many Fort Liberty veterans — particularly those who have separated and relocated to the Charlotte metro — work with Charlotte-area VA attorneys. Fort Liberty houses the XVIII Airborne Corps, 82nd Airborne Division, US Army Special Operations Command, and other major units, making Fort Liberty veteran claims particularly common and complex. Charlotte attorneys with military experience serve this population routinely.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a free consultation with a VA attorney in Charlotte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most VA-accredited attorneys offer free initial consultations and work on contingency — meaning you pay no attorney fees unless you win. Federal law caps VA attorney fees at 20% of past-due benefits awarded. This contingency structure means veterans with legitimate claims can access experienced legal representation regardless of their financial situation. There is no fee for the initial consultation in nearly all cases.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims do Charlotte attorneys handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Charlotte-area VA attorneys handle the full range of disability claims: initial ratings and Supplemental Claims, Higher-Level Reviews, Board of Veterans' Appeals (BVA) hearings and decisions, MST (military sexual trauma) claims, TDIU (Total Disability based on Individual Unemployability), PACT Act burn pit and toxic exposure claims, discharge upgrades, and Court of Appeals for Veterans Claims (CAVC) cases. Many also assist with dependency and indemnity compensation (DIC) for surviving family members.",
      },
    },
  ],
}

export default async function CharlotteVAAttorneysPage() {
  const listings = await getListingsByCity('NC', 'Charlotte')

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
          <Link href="/states/nc" className="hover:text-brand-navy">North Carolina</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Charlotte</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Charlotte, North Carolina</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Charlotte, NC
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Charlotte&apos;s rapid growth over the past decade has brought significant numbers of veteran transplants from military communities across the South and Southeast. Fort Liberty (formerly Fort Bragg) — the Army&apos;s largest installation and home to the 82nd Airborne and US Army Special Operations Command — is two hours from Charlotte, and a substantial portion of separating Fort Liberty veterans relocate to the Charlotte metro. The Carolinas VA Health Care System serves veterans across NC and SC, and Charlotte has well-established VA law practices experienced with the full spectrum of disability claims.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Charlotte Area VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Regional Office:</strong> Winston-Salem VA Regional Office — handles NC disability claims</li>
            <li><strong>VA Medical Center:</strong> W.G. Hefner VAMC (Salisbury, NC); Charlotte VA Outpatient Clinic</li>
            <li><strong>Major nearby installations:</strong> Fort Liberty / Fort Bragg (Fayetteville, NC — 2 hrs); Camp Lejeune (Jacksonville, NC — 2.5 hrs)</li>
            <li><strong>Common claim types:</strong> PTSD, TBI, airborne operations injuries, MST, PACT Act claims, musculoskeletal, Camp Lejeune contamination claims</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all North Carolina VA attorneys while we add more Charlotte listings:</p>
            <Link
              href="/states/nc"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse North Carolina VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Charlotte, NC
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more NC or SC VA attorneys?</p>
            <p className="text-sm text-gray-600">North Carolina and South Carolina VA attorneys also serve veterans in Raleigh, Fayetteville, Greensboro, and Columbia.</p>
          </div>
          <Link
            href="/states/nc"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All NC Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Charlotte VA Attorney Questions</h2>
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
          <h2 className="font-semibold text-gray-900 mb-3">VA Attorneys in Nearby Areas</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/states/nc', label: 'All North Carolina' },
              { href: '/states/sc', label: 'South Carolina' },
              { href: '/states/va', label: 'Virginia' },
              { href: '/best/va-attorneys-philadelphia-pa', label: 'Philadelphia, PA' },
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/best/va-attorneys-dallas-tx', label: 'Dallas, TX' },
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
          <h2 className="font-semibold text-gray-900 mb-3">Helpful VA Guides for Charlotte Veterans</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters for VA Claims →</Link>
            <Link href="/guides/mst-va-claim" className="text-brand-navy font-medium hover:underline">MST VA Claims →</Link>
            <Link href="/guides/burn-pit-pact-act" className="text-brand-navy font-medium hover:underline">Burn Pit &amp; PACT Act Claims →</Link>
          </div>
        </div>

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Charlotte or the Carolinas?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with veterans across NC and SC searching for disability claim and appeals representation.</p>
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
