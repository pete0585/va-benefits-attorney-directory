import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TDIU: Total Disability Based on Individual Unemployability | Find VA Attorney',
  description:
    'TDIU pays veterans below 100% at the 100% rate if their service-connected disabilities prevent gainful employment. Find a VA attorney who specializes in TDIU claims.',
  alternates: { canonical: 'https://findvaattorney.com/categories/tdiu-va-benefits' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is TDIU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TDIU — Total Disability Based on Individual Unemployability — is a VA benefit that allows veterans rated below 100% to receive compensation at the 100% disability rate if their service-connected disabilities prevent them from maintaining substantially gainful employment. TDIU recognizes that even a veteran rated at 70% may be effectively unable to work and should be compensated as if 100% disabled. In 2024, the 100% VA disability rate for a single veteran with no dependents is approximately $3,737/month — TDIU pays this same rate.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the rating requirements for schedular TDIU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Schedular TDIU (the standard pathway) requires: one service-connected disability rated at 60% or more; OR two or more service-connected disabilities with a combined rating of 70% or more, where at least one disability is rated at 40% or more. If you don't meet the schedular threshold, you may still qualify for extra-schedular TDIU if your disabilities clearly prevent substantially gainful employment — this requires referral to the VA's Director of Compensation Service and is a more complex claim requiring experienced legal representation.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does VA define "substantially gainful employment" for TDIU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The VA defines substantially gainful employment as employment that pays above the federal poverty threshold. If a veteran can only do marginal work — occasional part-time work or work in a protected environment like a family business — that may not constitute substantially gainful employment. The VA considers the veteran's full work history, education, and the cumulative impact of all service-connected disabilities together, not just the highest-rated condition alone.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why do TDIU claims need an attorney?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TDIU claims are among the most high-value VA claims — the difference between a 70% and a 100% rating is roughly $2,300/month in additional compensation, plus P&T benefits (Chapter 35 DEA educational benefits for dependents, Commissary access, CHAMPVA for dependents). Attorneys who specialize in TDIU know how to document unemployability through vocational expert assessments, employer statements, work history records, and medical evidence showing how the veteran's specific disabilities interact to prevent gainful employment. The back pay at stake in successful TDIU claims is often substantial.",
      },
    },
  ],
}

export default async function TDIUVABenefitsPage() {
  const { listings } = await getListings({ practice_area: 'tdiu' })
  const fallback = listings.length === 0
  const { listings: allActive } = fallback ? await getListings() : { listings: [] }
  const displayListings = fallback ? allActive.slice(0, 15) : listings.slice(0, 15)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-navy">Find a VA Attorney</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">TDIU Claims</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            TDIU: Total Disability Based on Individual Unemployability
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            TDIU is one of the most valuable VA benefits a veteran can receive — and one of the
            most commonly overlooked. If your service-connected disabilities prevent you from
            maintaining substantially gainful employment, you may be entitled to compensation at
            the 100% rate even if your combined rating is below 100%.
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { stat: '$3,737+/mo', label: '100% VA disability rate (2024, single veteran)' },
            { stat: '60%', label: 'Minimum single-disability rating for schedular TDIU' },
            { stat: '70%/40%', label: 'Combined/single minimums for multi-disability TDIU' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-brand-navy">{stat}</p>
              <p className="text-sm text-gray-700 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Who Qualifies for TDIU?</h2>
            <div className="space-y-3">
              {[
                {
                  pathway: 'Schedular TDIU (standard pathway)',
                  criteria: 'One service-connected disability at 60%+ OR two or more service-connected disabilities with combined rating of 70%+, where at least one is rated 40%+. Must be unable to maintain substantially gainful employment.',
                },
                {
                  pathway: 'Extra-schedular TDIU',
                  criteria: "Doesn't meet schedular rating thresholds, but disabilities clearly prevent substantially gainful employment. Requires referral to VA's Director of Compensation Service. More complex — an attorney who has handled extra-schedular TDIU claims is essential.",
                },
                {
                  pathway: 'Permanent and Total (P&T) TDIU',
                  criteria: 'When TDIU is granted as permanent and total, the veteran also receives P&T benefits including Chapter 35 DEA educational benefits for dependents, possible Commissary and Exchange access, and CHAMPVA healthcare for eligible dependents.',
                },
              ].map(({ pathway, criteria }) => (
                <div key={pathway} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{pathway}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{criteria}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Conditions That Commonly Drive TDIU Claims</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { condition: 'PTSD', note: 'Chronic PTSD at 70%+ is a common TDIU driver — affects employment through hypervigilance, interpersonal difficulties, and inability to maintain consistent work attendance or performance.' },
                { condition: 'Traumatic Brain Injury (TBI)', note: 'Moderate-severe TBI often causes cognitive impairment, memory dysfunction, and personality changes that preclude gainful employment despite ratings that may not reflect the true functional impact.' },
                { condition: 'PTSD + Musculoskeletal combination', note: 'A common combination: PTSD at 50-70% plus back/knee/shoulder injuries from service may combine to 70% total while rendering the veteran unemployable together — classic schedular TDIU scenario.' },
                { condition: 'Chronic pain syndromes', note: 'Veterans with multiple musculoskeletal conditions — lumbar spine, bilateral knee, shoulder — may each be rated moderately but combine to prevent the physical demands of most available work.' },
                { condition: 'Cardiovascular conditions', note: 'Service-connected heart disease, hypertension with end-organ effects, and other cardiovascular conditions can contribute to unemployability arguments — especially in physical jobs.' },
                { condition: 'Toxic exposure-related conditions (PACT Act)', note: 'Veterans with PACT Act cancers or respiratory conditions who are unable to work due to treatment or residual effects may qualify for TDIU, often at favorable effective dates.' },
              ].map(({ condition, note }) => (
                <div key={condition} className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{condition}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">How Attorneys Document TDIU Claims</h2>
            <div className="space-y-3">
              {[
                { element: 'VA Form 21-8940 (Unemployability Application)', detail: "The official TDIU application — documents employment history, educational background, and the specific disabilities preventing work. A well-completed 21-8940 is the foundation of a strong TDIU claim. Vague or incomplete forms are a common reason for initial denials." },
                { element: 'Vocational expert assessment', detail: 'An independent vocational expert (VE) evaluates your work history, education, service-connected disabilities, and their combined functional impact — then provides an opinion on your employability in the national economy. VA attorneys use VEs to make the unemployability case in quantitative, documented terms.' },
                { element: 'Medical evidence of functional limitations', detail: "Private DBQs and physician statements that specifically address how the veteran's conditions affect their ability to sit, stand, concentrate, interact with others, and perform work tasks. 'Can't work due to disabilities' is insufficient — functional limitation must be documented in clinical terms." },
                { element: 'Employer statements and work history', detail: 'Documentation of terminations, accommodations, inability to maintain employment, disciplinary actions related to disability-related behavior, and failed work attempts. These create a factual record that the veteran has genuinely tried to maintain employment.' },
              ].map(({ element, detail }) => (
                <div key={element} className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{element}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {displayListings.length > 0 && (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Find a VA Attorney for TDIU</h2>
              <p className="text-sm text-gray-600">
                {fallback
                  ? 'Browse all VA-accredited attorneys — look for those listing TDIU as a practice area'
                  : `Showing ${displayListings.length} VA attorneys with TDIU experience`}
              </p>
            </div>
            <div className="space-y-4 mb-10">
              {displayListings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        )}

        <div className="space-y-5 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">TDIU Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">Related VA Guides</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters for VA Claims →</Link>
            <Link href="/guides/supplemental-claim-va" className="text-brand-navy font-medium hover:underline">How to File a Supplemental Claim →</Link>
            <Link href="/categories/pact-act-burn-pit-claims" className="text-brand-navy font-medium hover:underline">PACT Act Claims →</Link>
          </div>
        </div>

        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">VA attorney with TDIU experience?</h2>
          <p className="text-gray-300 mb-4 text-sm">Veterans searching for TDIU representation are using this directory. Claim your listing and reach them.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/listings"
              className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
            >
              Find a VA Attorney <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/submit"
              className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-block"
            >
              Claim Your Listing
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
