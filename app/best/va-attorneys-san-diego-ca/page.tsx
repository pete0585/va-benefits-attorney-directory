import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in San Diego, CA | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in San Diego, California. Serving veterans at Camp Pendleton, Naval Base San Diego, MCAS Miramar, and across San Diego and Imperial counties.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-san-diego-ca' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the VA Regional Office for San Diego veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "San Diego-area veterans are served by the VA Regional Office in Los Angeles, CA — which handles disability claims and rating decisions for Southern California veterans. The VA San Diego Healthcare System on Rose Canyon Road serves the clinical healthcare needs of veterans in San Diego and Imperial counties. San Diego-area attorneys regularly handle claims processed through the LA VARO.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims are most common for San Diego veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "San Diego's enormous active-duty and veteran community generates high claim volume across all categories. Common claims include: PTSD and combat-related mental health (driven by Marine and Navy combat deployments from Camp Pendleton and Naval Base San Diego), musculoskeletal injuries from infantry and combat arms service, hearing loss and tinnitus (particularly from aircraft and weapons exposure at MCAS Miramar and NAS North Island), PACT Act burn pit and toxic exposure claims for post-9/11 veterans, and MST-related claims given the Navy and Marine concentration.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there VA attorneys in San Diego who specialize in Marine Corps claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. San Diego's proximity to Camp Pendleton — one of the largest Marine Corps installations in the world — means several San Diego VA attorneys have substantial experience with Marine Corps-specific claims. Marines commonly pursue claims for PTSD, combat-related physical injuries, hearing loss from weapons and aircraft noise, traumatic brain injury from blast exposure, and PACT Act toxic exposure from Iraq and Afghanistan deployments. Look for attorneys who specifically list Marine Corps or combat arms experience.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a VA attorney help with a C&P exam that went wrong in San Diego?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. If your Compensation and Pension (C&P) exam produced an unfavorable opinion — which is common — a VA attorney can help you challenge it through the appeals process. The most effective response is a well-written independent nexus letter from a medical expert who reviews your service records and provides a favorable opinion. San Diego VA attorneys work with independent medical examiners (IMEs) experienced in VA claim standards and can obtain the medical evidence needed to counter a negative C&P finding.",
      },
    },
  ],
}

export default async function SanDiegoVAAttorneysPage() {
  const listings = await getListingsByCity('CA', 'San Diego')

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
          <span className="text-gray-900 font-medium">VA Attorneys in San Diego</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">San Diego, California</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in San Diego, CA
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            San Diego is one of the most heavily militarized cities in the country — home to Naval Base
            San Diego (the largest surface ship base on the West Coast), Camp Pendleton (one of the
            largest Marine Corps installations in the world), MCAS Miramar, NAS North Island, and Naval
            Medical Center San Diego. The resulting veteran population is massive, diverse in era and
            branch, and generates high claim volume for VA disability attorneys. California has no state
            income tax on military retirement pay, making San Diego a retirement destination for career
            service members as well.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">San Diego VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> VA San Diego Healthcare System — 3350 La Jolla Village Dr, San Diego</li>
            <li><strong>Regional VA Office:</strong> Los Angeles VA Regional Office (handles Southern California claims)</li>
            <li><strong>Major installations:</strong> Naval Base San Diego, Camp Pendleton (USMC), MCAS Miramar, NAS North Island, Naval Medical Center San Diego</li>
            <li><strong>Common claim types:</strong> PTSD, TBI/blast exposure, MST, PACT Act burn pit, hearing loss/tinnitus, musculoskeletal (infantry/combat arms), TDIU</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all California VA attorneys while we add more San Diego listings:</p>
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
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in San Diego, CA
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
            <p className="text-sm text-gray-600">Los Angeles, San Francisco, Sacramento, and Riverside-area VA attorneys also serve Southern California veterans.</p>
          </div>
          <Link
            href="/states/ca"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All California Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">San Diego VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-phoenix-az', label: 'Phoenix, AZ' },
              { href: '/best/va-attorneys-dallas-tx', label: 'Dallas, TX' },
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/states/ca', label: 'All California' },
              { href: '/states/az', label: 'Arizona' },
              { href: '/states/nv', label: 'Nevada' },
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
          <h2 className="font-semibold text-gray-900 mb-3">Helpful VA Guides for San Diego Veterans</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters for VA Claims →</Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
            <Link href="/guides/burn-pit-pact-act" className="text-brand-navy font-medium hover:underline">Burn Pit &amp; PACT Act Claims →</Link>
            <Link href="/guides/mst-va-claim" className="text-brand-navy font-medium hover:underline">MST VA Claims →</Link>
          </div>
        </div>

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in San Diego?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with the largest military veteran community on the West Coast.</p>
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
