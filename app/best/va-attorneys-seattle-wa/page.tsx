import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Seattle, WA | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Seattle, Washington. Serving veterans from Joint Base Lewis-McChord, Naval Station Everett, Naval Base Kitsap, and across Western Washington.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-seattle-wa' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which VA Regional Office handles Seattle veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Washington state veterans are served by the Seattle VA Regional Office, located on Beacon Hill in Seattle. This office processes initial disability claims, Supplemental Claims, Higher-Level Reviews, and regional hearings for veterans across Washington state. The VA Puget Sound Health Care System (with campuses in Seattle/American Lake) provides primary VA healthcare to Western Washington veterans.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims are common for JBLM and Puget Sound veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Joint Base Lewis-McChord (JBLM) is one of the Army's largest installations and has deployed extensively to Iraq and Afghanistan, generating high claim volume for: PTSD and combat-related mental health, TBI from blast exposure, musculoskeletal injuries from infantry and airborne service, hearing loss and tinnitus, PACT Act burn pit toxic exposure, and TDIU for veterans whose service-connected conditions prevent gainful employment. Naval Station Everett and Naval Base Kitsap generate Navy-specific claims including hearing loss from shipboard noise, MST, and service-related orthopedic conditions.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Washington state have good veterans benefits in addition to federal VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — Washington has one of the strongest state-level veterans benefits programs in the country. Notable benefits include: a property tax exemption for veterans with 80%+ VA disability rating (full exemption at 100% P&T), the Washington State Department of Veterans Affairs (WDVA) which provides free assistance with claims, a state College Fee Waiver for children of veterans with 100% P&T or who died in service, and veterans preference in state employment. Seattle's VA attorney community is well-versed in coordinating federal VA benefits with state programs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there VA attorneys in Tacoma or near Fort Lewis who can help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Seattle-Tacoma corridor has a strong VA attorney community given the concentration of JBLM, McChord, and related veteran populations between Tacoma and Olympia. Many Seattle-area attorneys regularly serve clients from Tacoma, Lakewood, Puyallup, and the greater Pierce County area. Some attorneys have offices in both Seattle and Tacoma. Teleconference representation for JBLM veterans in rural parts of Western Washington is also widely available.",
      },
    },
  ],
}

export default async function SeattleVAAttorneysPage() {
  const listings = await getListingsByCity('WA', 'Seattle')

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
          <Link href="/states/wa" className="hover:text-brand-navy">Washington</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Seattle</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Seattle, Washington</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Seattle, WA
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            The Seattle-Tacoma metro sits at the heart of one of the most military-dense regions on
            the West Coast. Joint Base Lewis-McChord (JBLM) — an Army and Air Force combined installation
            and one of the largest bases in the country — anchors the south end of the corridor. Naval
            Station Everett and Naval Base Kitsap serve the Navy. The VA Puget Sound Health Care System
            serves veterans across Western Washington. Seattle&apos;s VA attorney community handles
            the full range of claims — PTSD, TBI, PACT Act, TDIU, and complex BVA appeals.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Seattle Area VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> VA Puget Sound Health Care System — Seattle Division (1660 S Columbian Way) and American Lake Division (Tacoma)</li>
            <li><strong>Regional VA Office:</strong> Seattle VA Regional Office — 915 2nd Ave, Seattle</li>
            <li><strong>Major installations:</strong> Joint Base Lewis-McChord (Tacoma/Lakewood), Naval Station Everett, Naval Base Kitsap (Bremerton), McChord Field</li>
            <li><strong>Common claim types:</strong> PTSD, TBI/blast, PACT Act/burn pit, hearing loss/tinnitus, musculoskeletal, MST, TDIU</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Washington VA attorneys while we add more Seattle listings:</p>
            <Link
              href="/states/wa"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse Washington VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Seattle, WA
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Washington VA attorneys?</p>
            <p className="text-sm text-gray-600">Tacoma, Spokane, Vancouver, and Olympia-area veterans can also access Seattle-based attorney representation via teleconference.</p>
          </div>
          <Link
            href="/states/wa"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Washington Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Seattle VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-san-diego-ca', label: 'San Diego, CA' },
              { href: '/best/va-attorneys-phoenix-az', label: 'Phoenix, AZ' },
              { href: '/best/va-attorneys-denver-co', label: 'Denver, CO' },
              { href: '/states/wa', label: 'All Washington' },
              { href: '/states/or', label: 'Oregon' },
              { href: '/states/id', label: 'Idaho' },
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
          <h2 className="font-semibold text-gray-900 mb-3">Helpful VA Guides for Washington Veterans</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters for VA Claims →</Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
            <Link href="/guides/burn-pit-pact-act" className="text-brand-navy font-medium hover:underline">Burn Pit &amp; PACT Act Claims →</Link>
            <Link href="/categories/tdiu-va-benefits" className="text-brand-navy font-medium hover:underline">TDIU: Individual Unemployability →</Link>
          </div>
        </div>

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Seattle or Western Washington?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with JBLM, Navy, and Air Force veterans searching for VA legal help across the Puget Sound region.</p>
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
