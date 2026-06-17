import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in Chicago, IL | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in Chicago, Illinois. Browse verified attorneys who specialize in VA claims, TDIU, burn pit / PACT Act cases, and BVA appeals.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-chicago-il' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the VA Regional Office for Chicago veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chicago-area veterans are served by the Edward Hines Jr. VA Regional Office in Hines, Illinois (just west of Chicago). Initial claims, C&P exams, and regional office hearings for Cook County and surrounding Illinois counties are processed through this office. The Edward Hines Jr. VA Hospital is the primary VA medical center for the Chicago metro.",
      },
    },
    {
      '@type': 'Question',
      name: 'What VA claim types are common for Chicago veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chicago's veteran population reflects the city's diverse demographics and includes a large National Guard and Reserve component — which creates unique service-connection issues since Guard/Reserve members may have activated for combat deployments but have gaps in continuous service. Common claim types include PTSD, PACT Act toxic exposure, musculoskeletal injuries, hearing loss from combat or heavy equipment exposure, TBI, and TDIU for veterans who transitioned out of service with disabilities affecting their civilian employment.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long do VA appeals take in Illinois?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "VA appeal timelines vary significantly by path chosen. Supplemental claims (new evidence submissions) typically resolve in 125 days nationally. Higher-Level Reviews average 125 days as well. BVA appeals (Board of Veterans' Appeals) take considerably longer: direct review cases average 12-18 months; hearings before a VLJ can take 2-3 years. A VA attorney can help you choose the appeal path most likely to resolve your case efficiently and file your evidence correctly the first time.",
      },
    },
  ],
}

export default async function ChicagoBestPage() {
  const listings = await getListingsByCity('IL', 'Chicago')

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
          <Link href="/states/il" className="hover:text-brand-navy">Illinois</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Chicago</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Chicago, Illinois</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in Chicago, IL
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Chicago is the largest veteran market in the Midwest, with approximately 150,000 veterans in the metro area and a concentration of post-9/11 Guard and Reserve veterans who activated for Iraq and Afghanistan deployments. The city&apos;s VA attorney community handles the full range of disability claims — PTSD, PACT Act toxic exposure, TBI, MST, and complex TDIU and rating appeals at the BVA level.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Chicago VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> Edward Hines Jr. VA Hospital (5000 S 5th Ave, Hines, IL)</li>
            <li><strong>VA Regional Office:</strong> Edward Hines Jr. VA Regional Office (Hines, IL)</li>
            <li><strong>Common claim types in Chicago:</strong> PTSD, TBI, PACT Act / burn pit, Guard/Reserve service-connection issues, TDIU, hearing loss</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Illinois VA attorneys while we add more Chicago listings:</p>
            <Link
              href="/states/il"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse Illinois VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Chicago, IL
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Illinois VA attorneys?</p>
            <p className="text-sm text-gray-600">Illinois has VA-accredited attorneys across Springfield, Peoria, Rockford, and downstate communities.</p>
          </div>
          <Link
            href="/states/il"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Illinois Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Chicago VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/best/va-attorneys-new-york-ny', label: 'New York, NY' },
              { href: '/states/fl', label: 'Florida' },
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
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Chicago?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with veterans in the Chicago metro who are searching for legal help.</p>
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
