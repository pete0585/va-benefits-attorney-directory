import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Atlanta, GA | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Atlanta, Georgia. Serving veterans from Fort Benning, Fort Gordon, and across the Atlanta metro for disability claims and BVA appeals.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-atlanta-ga' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the VA Regional Office for Atlanta veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Georgia veterans are served by the Atlanta VA Regional Office, located in Decatur, GA (adjacent to Atlanta). The Atlanta VARO handles disability claims, rating decisions, and regional hearings for veterans across Georgia. Georgia has historically been among the states with higher claim backlogs — having experienced legal representation can significantly shorten effective claim resolution time.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims are most common for Atlanta-area veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Atlanta's veteran population draws heavily from Fort Moore (formerly Fort Benning) — the Army's largest infantry training installation — and Fort Eisenhower (formerly Fort Gordon). Common Atlanta-area claim types include: PTSD from combat deployments, orthopedic injuries from infantry and airborne training, TBI from blast exposure (OEF/OIF veterans), hearing loss and tinnitus, PACT Act burn pit toxic exposure claims, and TDIU claims for veterans whose service-connected disabilities prevent gainful employment in Atlanta's job market.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Georgia have good veterans benefits beyond federal VA compensation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Georgia offers several state-level veterans benefits. Veterans with 100% P&T VA disability rating receive a full state income tax exemption on VA disability compensation (Georgia does not tax VA compensation at any rating level, as it is federally exempt). Property tax exemptions are available for disabled veterans in many Georgia counties. The Georgia Department of Veterans Service provides free claims assistance. Georgia's Warfighter Initiative offers legal assistance and financial counseling through a nonprofit network.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a VA attorney in Atlanta for a BVA appeal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Board of Veterans' Appeals (BVA) representation requires a VA-accredited attorney or claims agent. Atlanta has a growing VA attorney community handling BVA appeals — look for attorneys who specifically list BVA or Board appeals experience rather than those who only handle initial claims. BVA hearings can now be held by video conference, so veterans across Georgia can work with Atlanta attorneys without travel. Attorney fees are federally regulated at 20% of past-due benefits — there is no up-front cost.",
      },
    },
  ],
}

export default async function AtlantaVAAttorneysPage() {
  const listings = await getListingsByCity('GA', 'Atlanta')

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
          <Link href="/states/ga" className="hover:text-brand-navy">Georgia</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Atlanta</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Atlanta, Georgia</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Atlanta, GA
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Atlanta is the hub of veteran legal services in the Southeast. Georgia&apos;s large Army
            population — drawn from Fort Moore (Fort Benning) and Fort Eisenhower (Fort Gordon) — has
            created a strong base of OEF/OIF veterans in metro Atlanta. The Atlanta VA Regional Office
            in Decatur processes claims for the entire state. High OEF/OIF veteran concentration in
            Gwinnett, Cherokee, and DeKalb counties drives active demand for VA disability attorneys
            throughout the metro.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Atlanta Area VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> Atlanta VA Medical Center — 1670 Clairmont Rd, Decatur</li>
            <li><strong>Regional VA Office:</strong> Atlanta VA Regional Office — 1700 Clairmont Rd, Decatur</li>
            <li><strong>Major Georgia installations:</strong> Fort Moore (Columbus) — formerly Fort Benning; Fort Eisenhower (Augusta) — formerly Fort Gordon; Moody AFB (Valdosta); Robins AFB (Warner Robins)</li>
            <li><strong>Common claim types:</strong> PTSD, TBI/blast, musculoskeletal/infantry injuries, PACT Act burn pit, hearing loss/tinnitus, TDIU</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Georgia VA attorneys while we add more Atlanta listings:</p>
            <Link
              href="/states/ga"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse Georgia VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Atlanta, GA
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Georgia VA attorneys?</p>
            <p className="text-sm text-gray-600">Columbus (near Fort Moore), Augusta (near Fort Eisenhower), and Savannah-area veterans can also access Atlanta attorney representation via teleconference.</p>
          </div>
          <Link
            href="/states/ga"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Georgia Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Atlanta VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-charlotte-nc', label: 'Charlotte, NC' },
              { href: '/best/va-attorneys-tampa-fl', label: 'Tampa, FL' },
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/best/va-attorneys-dallas-tx', label: 'Dallas, TX' },
              { href: '/states/ga', label: 'All Georgia' },
              { href: '/states/sc', label: 'South Carolina' },
              { href: '/states/fl', label: 'Florida' },
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
          <h2 className="font-semibold text-gray-900 mb-3">Helpful VA Guides for Georgia Veterans</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters for VA Claims →</Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
            <Link href="/guides/supplemental-claim-va" className="text-brand-navy font-medium hover:underline">Supplemental Claims →</Link>
            <Link href="/categories/tdiu-va-benefits" className="text-brand-navy font-medium hover:underline">TDIU Benefits →</Link>
          </div>
        </div>

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Atlanta or Georgia?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and reach Georgia veterans searching for help with their disability claims.</p>
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
