import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Benefits Attorneys in Denver, CO | Find VA Attorney',
  description:
    'Find VA-accredited disability attorneys in Denver, Colorado. Serving veterans at Fort Carson, Buckley SFB, and across the Colorado Front Range for disability claims, PACT Act, and BVA appeals.',
  alternates: { canonical: 'https://findvaattorney.com/best/va-attorneys-denver-co' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the VA Regional Office for Colorado veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Denver VA Regional Office serves Colorado veterans and is located in Lakewood, CO (adjacent to Denver). This office handles initial disability claims, Supplemental Claims, Higher-Level Reviews, and regional hearings for veterans across Colorado. The Eastern Colorado VA Health Care System, including the Bruce W. Carter VA Medical Center in Denver, provides primary clinical services to the metro area.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a VA attorney help with a denied claim at the Denver VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. VA-accredited attorneys in Denver can represent veterans at all stages of the appeals process after an initial rating decision: Supplemental Claim (new evidence submission), Higher-Level Review (fresh look by a senior rater), Board of Veterans' Appeals (BVA), and the Court of Appeals for Veterans Claims (CAVC). VA attorneys work on contingency — no fee unless you win — and their fees are capped by federal law at 20% of past-due benefits.",
      },
    },
    {
      '@type': 'Question',
      name: "Does Colorado's marijuana legalization affect my VA disability claim?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Marijuana use does not disqualify you from receiving VA benefits or disability compensation. However, it can complicate some aspects of mental health ratings — VA providers cannot prescribe marijuana, and VA clinical notes documenting use may be reviewed during C&P exams. Veterans using cannabis for chronic pain, PTSD, or sleep should discuss documentation strategy with their VA attorney before C&P exams. Some nexus letter physicians in Colorado have specific experience navigating this intersection.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there VA attorneys in Colorado Springs near Fort Carson?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Several VA-accredited attorneys serve the Colorado Springs and Fort Carson area. Fort Carson veterans represent a significant portion of Colorado's disability claim volume given the base's size and its history of deploying combat units to Iraq and Afghanistan. Veterans near Fort Carson typically file claims with the Denver VA Regional Office. Denver-area attorneys routinely serve Colorado Springs clients via teleconference.",
      },
    },
  ],
}

export default async function DenverVAAttorneysPage() {
  const listings = await getListingsByCity('CO', 'Denver')

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
          <Link href="/states/co" className="hover:text-brand-navy">Colorado</Link>
          {' / '}
          <span className="text-gray-900 font-medium">VA Attorneys in Denver</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-navy mb-2">
            <MapPin className="w-4 h-4" aria-label="Location" />
            <span className="text-sm font-medium uppercase tracking-wide">Denver, Colorado</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            VA Benefits Attorneys in Denver, CO
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Colorado&apos;s veteran community centers around Fort Carson (one of the Army&apos;s largest installations, in Colorado Springs), Buckley Space Force Base in Aurora, and Peterson SFB. The Denver VA Regional Office in Lakewood handles disability claims for the entire state. Colorado veterans — particularly those returning from SW Asia deployments — frequently pursue claims for PTSD, TBI, musculoskeletal injuries, hearing loss, and PACT Act toxic exposure conditions. Denver&apos;s VA attorney community handles the full range of claims, from initial filings to complex BVA appeals.
          </p>
        </div>

        <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-brand-navy mb-2">Colorado VA Resources</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>VA Regional Office:</strong> Denver VA Regional Office — 155 Van Gordon St, Lakewood, CO 80228</li>
            <li><strong>VA Medical Center:</strong> Eastern Colorado VA HCS / Bruce W. Carter VAMC — Denver</li>
            <li><strong>Major bases:</strong> Fort Carson (Colorado Springs), Buckley SFB (Aurora), Peterson SFB (Colorado Springs), Schriever SFB</li>
            <li><strong>Common claim types:</strong> PTSD, TBI, musculoskeletal injuries, PACT Act burn pit claims, hearing loss, back injuries</li>
          </ul>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-8 text-center mb-8">
            <p className="text-gray-600 mb-4">Browse all Colorado VA attorneys while we add more Denver listings:</p>
            <Link
              href="/states/co"
              className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-block"
            >
              Browse Colorado VA Attorneys
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">{listings.length}</strong> VA-accredited attorney{listings.length !== 1 ? 's' : ''} in Denver, CO
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="bg-surface border border-surface-border rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Looking for more Colorado VA attorneys?</p>
            <p className="text-sm text-gray-600">Colorado Springs, Pueblo, Fort Collins, and Grand Junction veterans can also access statewide VA attorney representation.</p>
          </div>
          <Link
            href="/states/co"
            className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors whitespace-nowrap flex items-center gap-2"
          >
            All Colorado Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>

        <div className="border-t border-surface-border pt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Denver VA Attorney Questions</h2>
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
              { href: '/best/va-attorneys-dallas-tx', label: 'Dallas, TX' },
              { href: '/best/va-attorneys-houston-tx', label: 'Houston, TX' },
              { href: '/best/va-attorneys-los-angeles-ca', label: 'Los Angeles, CA' },
              { href: '/best/va-attorneys-phoenix-az', label: 'Phoenix, AZ' },
              { href: '/best/va-attorneys-san-antonio-tx', label: 'San Antonio, TX' },
              { href: '/states/co', label: 'All Colorado' },
              { href: '/states/ut', label: 'Utah' },
              { href: '/states/nm', label: 'New Mexico' },
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
          <h2 className="font-semibold text-gray-900 mb-3">Helpful VA Guides for Colorado Veterans</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters for VA Claims →</Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
            <Link href="/guides/burn-pit-pact-act" className="text-brand-navy font-medium hover:underline">Burn Pit &amp; PACT Act Claims →</Link>
          </div>
        </div>

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA-accredited attorney in Denver or Colorado Springs?</h2>
          <p className="text-gray-300 mb-4 text-sm">Claim your listing and connect with Colorado veterans searching for legal help with their disability claims.</p>
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
