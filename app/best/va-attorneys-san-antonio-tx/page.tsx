import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in San Antonio, TX | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in San Antonio, Texas. The military capital of the US — attorneys experienced with Fort Sam Houston, Lackland AFB, and BAMC veterans.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-san-antonio-tx' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What VA facilities serve San Antonio veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "San Antonio is home to the Audie L. Murphy Memorial VA Hospital (7400 Merton Minter Blvd), the primary VA medical center serving South Texas veterans. The VA Regional Office for San Antonio is located at 5788 Eckert Rd. San Antonio also has the South Texas Veterans Health Care System with CBOCs in New Braunfels, Kerrville, and Laredo. The presence of Joint Base San Antonio — combining Lackland AFB, Fort Sam Houston, and Randolph AFB — means the local VA community is deeply experienced with active-duty injury and transition claims.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes San Antonio unique for VA disability claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "San Antonio is the largest military city in the United States — Joint Base San Antonio is the largest joint base in the DoD. This means SA attorneys handle a disproportionate share of medical retirement / Chapter 61 cases, IDES (Integrated Disability Evaluation System) cases where DoD and VA ratings may conflict, and complex claims from veterans who separated after significant combat injuries at Brooke Army Medical Center (BAMC). MST claims are also significant given the large female veteran population from Lackland and Fort Sam. SA attorneys understand military-specific documentation (Line of Duty determinations, MEB/PEB records) that civilian VA attorneys in other markets may not.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get TDIU if I cannot work due to my service-connected disability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Total Disability Individual Unemployability (TDIU) pays at the 100% rate even if your combined scheduler rating is below 100% — typically if you have a single disability rated at 60%+ or a combined rating of 70%+ with at least one disability rated at 40%+. If your service-connected conditions prevent you from maintaining substantially gainful employment, you may qualify for TDIU. A VA attorney can document your unemployability through vocational assessments, employer letters, and medical nexus opinions that the VA often does not seek on its own.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does a VA attorney cost anything upfront?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. VA-accredited attorneys work on contingency — they are paid only if you win, from a portion of your retroactive back pay. The VA controls attorney fees: they are capped at 20% of past-due benefits (the retroactive lump sum you receive when a higher rating is granted retroactively). There are no upfront fees, no hourly rates, and no cost if you do not prevail. This means veterans with any service-connected rating can access quality legal help without any financial risk.",
      },
    },
  ],
}

export default async function SanAntonioBestPage() {
  const listings = await getListingsByCity('TX', 'San Antonio')

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
          <span className="text-gray-900 font-medium">VA Attorneys in San Antonio</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">San Antonio, Texas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in San Antonio, TX
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            San Antonio is the military capital of the United States. Joint Base San Antonio — home to
            Lackland AFB, Fort Sam Houston, Randolph AFB, and Brooke Army Medical Center — means
            the local VA attorney community understands the military-specific claims that other markets
            rarely see: IDES disputes, Chapter 61 medical retirements, MST claims, and complex PACT
            Act toxic exposure cases from multiple combat deployments.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">San Antonio VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> Audie L. Murphy Memorial VA Hospital (7400 Merton Minter Blvd, San Antonio)</li>
            <li><strong>VA Regional Office:</strong> South Texas VA Regional Office (5788 Eckert Rd, San Antonio)</li>
            <li><strong>Key installations:</strong> Joint Base San Antonio (Lackland, Fort Sam Houston, Randolph AFB), BAMC</li>
            <li><strong>Common claim types:</strong> PACT Act, MST, IDES / medical retirement disputes, PTSD, TBI, hearing loss</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Texas VA attorneys while we add more San Antonio listings:</p>
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
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in San Antonio, TX
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
            <p className="text-sm text-gray-600">Texas has VA-accredited attorneys in Houston, Dallas, Austin, and El Paso serving veterans statewide.</p>
          </div>
          <Link
            href="/states/tx"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Texas Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">San Antonio VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/best/va-attorneys-dallas-tx', label: 'Dallas, TX' },
              { href: '/best/va-attorneys-phoenix-az', label: 'Phoenix, AZ' },
              { href: '/best/va-attorneys-los-angeles-ca', label: 'Los Angeles, CA' },
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/states/tx', label: 'All Texas' },
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
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in San Antonio?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with the largest military veteran population in the United States.</p>
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
