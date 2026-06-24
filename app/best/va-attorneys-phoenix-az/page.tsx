import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in Phoenix, AZ | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in Phoenix, Arizona. Browse verified attorneys for VA claims, burn pit / PACT Act, PTSD, TBI, and BVA appeals across the Valley.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-phoenix-az' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the VA Regional Office for Phoenix veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Phoenix-area veterans are served by the Phoenix VA Regional Office located at 3333 N Central Ave, Phoenix, AZ 85012. This office processes initial claims, rating decisions, and regional office hearings for Arizona veterans. The Carl T. Hayden VA Medical Center in Phoenix is the primary VA hospital for the metro area, with additional community-based outpatient clinics (CBOCs) throughout the Valley in Mesa, Scottsdale, and Sun City.",
      },
    },
    {
      '@type': 'Question',
      name: 'What VA claim types are most common for Phoenix veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Phoenix has a large concentration of Gulf War era veterans, post-9/11 veterans from Fort Huachuca and Luke Air Force Base (now Luke Air Force Wing), and retirees from across the military branches who settled in the Valley. Common claims include PACT Act / burn pit toxic exposure (especially among OEF/OIF veterans), Gulf War undiagnosed illness claims, PTSD, TBI, hearing loss, and musculoskeletal injuries. Arizona also has a significant Native American veteran population served through Indian Health Service facilities — service connection for these veterans can require additional documentation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a VA attorney help me if my claim was already denied?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — a denial is often the starting point for attorney involvement. VA attorneys can represent you in the three appeal lanes: Supplemental Claim (new evidence), Higher-Level Review (senior rater review), and BVA appeal (Board of Veterans' Appeals). For complex denials involving nexus letters, C&P exam errors, or inadequate duty to assist, an attorney can marshal the medical evidence needed to overturn the decision. VA attorneys work on contingency — they collect a fee only when you win, capped by law at 20% of back pay.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a difference between a VA attorney, VSO, and claims agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. VSOs (Veterans Service Organizations like the DAV, VFW, and American Legion) provide free claim filing help but cannot charge for services and often cannot devote the same depth to complex appeals. Claims agents are VA-accredited non-attorneys who can represent you for a fee. VA-accredited attorneys are licensed lawyers with VA accreditation who can handle all stages including BVA and Court of Appeals for Veterans Claims (CAVC). For denied claims and complex appeals, an attorney is typically the strongest option.",
      },
    },
  ],
}

export default async function PhoenixBestPage() {
  const listings = await getListingsByCity('AZ', 'Phoenix')

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
          <Link href="/states/az" className="hover:text-brand-navy">Arizona</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Phoenix</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Phoenix, Arizona</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in Phoenix, AZ
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Phoenix is one of the largest veteran markets in the Southwest, with over 300,000 veterans
            in the metro area — a mix of active-duty retirees from Luke Air Force Base, post-9/11
            veterans, Gulf War era veterans, and a growing PACT Act claimant population. The Valley&apos;s
            VA attorney community handles everything from initial ratings to complex BVA appeals and
            toxic exposure claims.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Phoenix VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> Carl T. Hayden VA Medical Center (650 E Indian School Rd, Phoenix, AZ)</li>
            <li><strong>VA Regional Office:</strong> Phoenix VA Regional Office (3333 N Central Ave, Phoenix, AZ)</li>
            <li><strong>Common claim types:</strong> PACT Act / burn pit, Gulf War illness, PTSD, TBI, hearing loss, Luke AFB-related claims</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Arizona VA attorneys while we add more Phoenix listings:</p>
            <Link
              href="/states/az"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse Arizona VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Phoenix, AZ
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Arizona VA attorneys?</p>
            <p className="text-sm text-gray-600">Arizona has VA-accredited attorneys across Tucson, Flagstaff, and Sierra Vista serving veterans statewide.</p>
          </div>
          <Link
            href="/states/az"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Arizona Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Phoenix VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-dallas-tx', label: 'Dallas, TX' },
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/best/va-attorneys-san-antonio-tx', label: 'San Antonio, TX' },
              { href: '/best/va-attorneys-chicago-il', label: 'Chicago, IL' },
              { href: '/states/ca', label: 'California' },
              { href: '/states/tx', label: 'Texas' },
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

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Phoenix?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with veterans across the Valley who need help with their claims.</p>
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
