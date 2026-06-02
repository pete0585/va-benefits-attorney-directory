import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { Shield, CheckCircle, TrendingUp, Users, Scale, ArrowRight } from 'lucide-react'
import SearchBar from '@/components/SearchBar'
import ListingCard from '@/components/ListingCard'
import { getFeaturedListings, getTotalCount } from '@/lib/data'
import { PRACTICE_AREAS, TOP_STATES, STATE_NAMES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Find VA-Accredited Attorneys | VA Disability Lawyer Directory',
  description: 'Denied? Underrated? Find a VA-accredited attorney who fights for veterans. Search the only directory built specifically for VA disability claims, appeals, and rating increases.',
  alternates: { canonical: 'https://findvaattorney.com' },
}

export const revalidate = 3600

async function HeroStats() {
  const total = await getTotalCount()
  return (
    <span className="text-4xl sm:text-5xl font-bold text-brand-gold">
      {total.toLocaleString()}+
    </span>
  )
}

async function FeaturedSection() {
  const featured = await getFeaturedListings()
  if (featured.length === 0) return null
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Featured Attorneys</h2>
        <Link href="/listings?tier=featured" className="text-sm text-brand-navy hover:underline font-medium flex items-center gap-1">
          View all <ArrowRight className="w-4 h-4" aria-label="Arrow" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {featured.map((l) => <ListingCard key={l.id} listing={l} />)}
      </div>
    </section>
  )
}

const practiceHighlights = [
  { key: 'tdiu', title: 'TDIU Claims', desc: 'Total Disability based on Individual Unemployability' },
  { key: 'appeals', title: 'BVA Appeals', desc: 'Board of Veterans\' Appeals representation' },
  { key: 'burn_pit', title: 'Burn Pit / PACT Act', desc: '3.5M veterans now eligible under the PACT Act' },
  { key: 'mst', title: 'Military Sexual Trauma', desc: 'Confidential, specialized MST representation' },
  { key: 'rating_increase', title: 'Rating Increases', desc: 'Fight for the rating you actually earned' },
  { key: 'ptsd', title: 'PTSD Claims', desc: 'Combat and non-combat PTSD disability claims' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">VA-Accredited Attorneys Only</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Denied? Underrated?<br />
              <span className="text-brand-gold">Find an attorney who fights for veterans.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              The only directory built specifically for veterans seeking VA-accredited legal representation.
              Search by state, practice area, and specialization — 100% free.
            </p>

            <Suspense fallback={null}>
              <SearchBar large className="max-w-2xl" />
            </Suspense>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-gold" aria-label="Check" />
                VA-accredited attorneys only
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-gold" aria-label="Check" />
                Search by state &amp; practice area
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-gold" aria-label="Check" />
                Free to search, always
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <Suspense fallback={<span className="text-4xl font-bold text-brand-gold">35,000+</span>}>
                <HeroStats />
              </Suspense>
              <p className="text-gray-400 text-sm mt-1">VA-Accredited Attorneys</p>
            </div>
            <div className="text-center">
              <span className="text-4xl sm:text-5xl font-bold text-brand-gold">50</span>
              <p className="text-gray-400 text-sm mt-1">States Covered</p>
            </div>
            <div className="text-center">
              <span className="text-4xl sm:text-5xl font-bold text-brand-gold">42.7%</span>
              <p className="text-gray-400 text-sm mt-1">Win Rate with Attorney vs. 29.7% Without</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why an Attorney */}
      <section className="bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why a VA-Accredited Attorney?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The VA denies 30-40% of initial disability claims. An accredited attorney knows the system — and knows how to fight back.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4 p-5 rounded-xl bg-surface border border-surface-border">
              <div className="shrink-0 w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-navy" aria-label="Win rate" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Higher Win Rate</h3>
                <p className="text-sm text-gray-600">42.7% BVA appeal success with attorney vs. 29.7% without. Representation matters.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-surface border border-surface-border">
              <div className="shrink-0 w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-brand-navy" aria-label="No upfront cost" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">No Upfront Cost</h3>
                <p className="text-sm text-gray-600">VA attorneys work on contingency — they only get paid if you win back pay. Zero risk to you.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-surface border border-surface-border">
              <div className="shrink-0 w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-navy" aria-label="Official credential" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Official Credential</h3>
                <p className="text-sm text-gray-600">Only VA-accredited attorneys can legally charge fees. Never hire a non-accredited rep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Browse by Practice Area</h2>
          <Link href="/listings" className="text-sm text-brand-navy hover:underline font-medium flex items-center gap-1">
            All attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {practiceHighlights.map((pa) => (
            <Link
              key={pa.key}
              href={`/listings?practice_area=${pa.key}`}
              className="flex items-start gap-4 p-4 bg-white rounded-xl border border-surface-border hover:border-brand-navy/40 hover:shadow-sm transition-all group"
            >
              <div className="shrink-0 w-10 h-10 bg-brand-navy/5 group-hover:bg-brand-navy/10 rounded-lg flex items-center justify-center transition-colors">
                <Scale className="w-5 h-5 text-brand-navy" aria-label={pa.title} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-navy text-sm transition-colors">{pa.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{pa.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured listings */}
      <Suspense fallback={null}>
        <FeaturedSection />
      </Suspense>

      {/* Browse by State */}
      <section className="bg-white border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {TOP_STATES.map((abbr) => (
              <Link
                key={abbr}
                href={`/listings?state=${abbr}`}
                className="flex items-center justify-between px-4 py-3 bg-surface border border-surface-border rounded-lg hover:border-brand-navy/40 hover:bg-brand-navy/5 transition-all text-sm font-medium text-gray-700 hover:text-brand-navy group"
              >
                <span>{STATE_NAMES[abbr]}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-navy transition-colors" aria-label="Arrow" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/listings" className="text-sm text-brand-navy hover:underline font-medium">
              View all 50 states →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA for Attorneys */}
      <section className="bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-brand-gold" aria-label="Attorneys" />
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">For VA Attorneys</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Your profile is already in our directory.</h2>
            <p className="text-gray-300 max-w-xl">
              Claim it to update your photo, bio, and practice areas — and start receiving inquiries from veterans who need exactly what you offer.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/submit"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-semibold px-6 py-3 rounded-lg text-center transition-colors whitespace-nowrap"
            >
              Add Your Listing
            </Link>
            <Link
              href="/listings"
              className="border border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg text-center transition-colors whitespace-nowrap"
            >
              Find Your Profile
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
