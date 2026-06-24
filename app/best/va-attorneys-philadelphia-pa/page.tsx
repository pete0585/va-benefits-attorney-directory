import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Disability Attorneys in Philadelphia, PA | FindVAAttorney.com',
  description: 'Find VA-accredited disability attorneys in Philadelphia, Pennsylvania. Browse verified attorneys experienced with BVA appeals, PTSD, PACT Act claims, and rating increases.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-philadelphia-pa' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What VA facilities serve Philadelphia veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Philadelphia veterans are served by the Corporal Michael J. Crescenz VA Medical Center (3900 Woodland Ave), formerly known as the Philadelphia VA Medical Center. The PA Regional Office serving Philadelphia is the Philadelphia VA Regional Office at 5000 Wissahickon Ave. Veterans in South Jersey (Camden, Cherry Hill, Atlantic City) are also geographically close to Philadelphia VA attorneys and are served by the Philadelphia VARO for some benefits purposes.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of VA claims are common in Philadelphia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Philadelphia has a large Vietnam-era veteran population with Agent Orange-related claims (prostate cancer, ischemic heart disease, diabetes Type II, Parkinson's), as well as a significant post-9/11 veteran community with PACT Act / burn pit claims, PTSD, and TBI. The city also has a substantial Puerto Rican veteran community whose claims sometimes involve navigating service records from the Puerto Rico National Guard. MST claims and claims tied to the Naval Station Philadelphia (closed in 1991 BRAC) are also present in the regional claim mix.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I appeal a VA rating decision in Pennsylvania?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "After receiving a rating decision, you have one year to initiate an appeal. You have three paths: (1) Supplemental Claim — submit new and relevant evidence not previously considered; (2) Higher-Level Review — request a senior rater review the decision without new evidence; (3) BVA Direct Review — appeal to the Board of Veterans' Appeals. A VA attorney can advise on which path fits your situation — for cases involving insufficient nexus documentation or C&P exam errors, a Supplemental Claim with a strong nexus letter is often the fastest path. BVA appeals are appropriate for legal errors in the rating decision itself.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are VA attorneys in Philadelphia available for South Jersey veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Most Philadelphia VA attorneys serve veterans throughout the greater Delaware Valley — including South Jersey (Camden, Burlington, Gloucester, Atlantic, Cape May counties), Delaware, and portions of Maryland. VA law representation is federal, not state-licensed, so an attorney accredited by the VA can represent veterans anywhere in the country regardless of their physical office location. Many Philadelphia-area VA attorneys also offer telehealth consultations for veterans who prefer not to travel.",
      },
    },
  ],
}

export default async function PhiladelphiaBestPage() {
  const listings = await getListingsByCity('PA', 'Philadelphia')

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
          <Link href="/states/pa" className="hover:text-brand-navy">Pennsylvania</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Philadelphia</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Philadelphia, Pennsylvania</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Disability Attorneys in Philadelphia, PA
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Philadelphia has one of the largest Vietnam-era veteran populations on the East Coast,
            alongside a growing community of post-9/11 veterans filing PACT Act and toxic exposure
            claims. VA attorneys in the Philadelphia region serve veterans throughout the greater Delaware
            Valley — including South Jersey, Delaware, and Maryland — handling everything from
            Agent Orange presumptive claims to complex BVA appeals.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Philadelphia VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Medical Center:</strong> Corporal Michael J. Crescenz VA Medical Center (3900 Woodland Ave, Philadelphia)</li>
            <li><strong>VA Regional Office:</strong> Philadelphia VA Regional Office (5000 Wissahickon Ave, Philadelphia)</li>
            <li><strong>Common claim types:</strong> Agent Orange (Vietnam era), PACT Act / burn pit, PTSD, MST, Puerto Rican National Guard records issues, BVA appeals</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Pennsylvania VA attorneys while we add more Philadelphia listings:</p>
            <Link
              href="/states/pa"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse Pennsylvania VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Philadelphia, PA
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Pennsylvania VA attorneys?</p>
            <p className="text-sm text-gray-600">Pennsylvania has VA-accredited attorneys in Pittsburgh, Harrisburg, and throughout the state serving veterans across PA and South Jersey.</p>
          </div>
          <Link
            href="/states/pa"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Pennsylvania Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Philadelphia VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-new-york-ny', label: 'New York, NY' },
              { href: '/best/va-attorneys-miami-fl', label: 'Miami, FL' },
              { href: '/best/va-attorneys-chicago-il', label: 'Chicago, IL' },
              { href: '/best/va-attorneys-los-angeles-ca', label: 'Los Angeles, CA' },
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/states/ny', label: 'New York' },
              { href: '/states/nj', label: 'New Jersey' },
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
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Philadelphia?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with veterans in the greater Delaware Valley who need help with their disability claims.</p>
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
