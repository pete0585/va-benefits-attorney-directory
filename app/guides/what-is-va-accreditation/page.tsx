import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is a VA-Accredited Attorney? How to Find One | FindVAAttorney.com',
  description: 'A VA-accredited attorney is the only type of lawyer who can legally charge fees for VA disability representation. Learn what accreditation means and how to find a qualified attorney.',
  alternates: { canonical: 'https://findvaattorney.com/guides/what-is-va-accreditation' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can any lawyer represent me before the VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under federal law (38 U.S.C. § 5904), only attorneys accredited by the VA Office of General Counsel can charge fees for representing veterans in VA benefit claims. A non-accredited attorney can help you, but cannot legally charge you for that representation. Always verify accreditation before hiring.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I verify a VA attorney\'s accreditation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can verify VA accreditation directly at the VA\'s official accreditation search tool at va.gov/ogc/apps/accreditation/. Search by the attorney\'s name and state. Every attorney listed on FindVAAttorney.com has been cross-referenced against the VA OGC database to confirm active accreditation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a VA-accredited attorney get paid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VA-accredited attorneys almost always work on contingency — meaning they only get paid if you win. Their fee is typically 20–33% of your retroactive back pay (the lump sum owed for the period before your claim was approved). The VA directly oversees attorney fee agreements and caps fees in most situations. You pay nothing upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I hire a VA-accredited attorney?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common trigger is a denial or an unsatisfactory rating after an initial claim decision. You have one year to file a Notice of Disagreement after a rating decision — do not let that deadline pass. An attorney adds the most value on appeals, complex cases involving multiple conditions, TDIU claims, and CAVC appellate work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a VA attorney, a claims agent, and a VSO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All three are VA-accredited, but they differ significantly. VSOs (Veterans Service Organizations like the DAV or VFW) provide free representation for initial claims. Claims agents are non-attorney advocates who are VA-accredited to charge fees. Attorneys are licensed lawyers with full legal authority who can represent you at every level including federal court (CAVC). For complex cases and appeals, an attorney provides the strongest representation.',
      },
    },
  ],
}

export default function WhatIsVAAccreditationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <span className="text-gray-900 font-medium">What is a VA-Accredited Attorney?</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            What is a VA-Accredited Attorney? How to Find One
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Not every attorney can legally charge fees for VA disability work. Understanding VA accreditation is the single most important thing a veteran can do before hiring legal help.
          </p>
        </div>

        {/* Key callout */}
        <div className="bg-brand-navy/5 border-l-4 border-brand-navy rounded-r-xl p-5 mb-8 flex gap-3">
          <Shield className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" aria-label="Shield" />
          <div>
            <p className="font-semibold text-brand-navy mb-1">Federal law protects veterans from unauthorized fee charging.</p>
            <p className="text-sm text-gray-700">Under 38 U.S.C. § 5904, only VA-accredited attorneys can charge fees for VA benefit representation. If a non-accredited lawyer charges you, that is a federal violation — report it to the VA OGC.</p>
          </div>
        </div>

        {/* Content */}
        <article className="prose-guide">
          <h2>What VA Accreditation Actually Means</h2>
          <p>
            The VA Office of General Counsel (OGC) accredits attorneys who want to charge fees for representing veterans in disability claims and appeals. To get accredited, an attorney must complete an application, pass a character and fitness review, and certify that they understand the rules governing VA practice.
          </p>
          <p>
            Accreditation is not a specialty certification or a sign of superior skill — it is a legal prerequisite. Think of it like a license: you would not hire a contractor who is not licensed to work on your house. You should not hire a VA attorney who is not accredited to represent you before the VA.
          </p>
          <p>
            Roughly 40,000 attorneys, claims agents, and VSO representatives are currently VA-accredited. That sounds like a lot, but most attorneys in your city are not on the list. A general practice attorney who handles car accidents and wills almost certainly has no VA accreditation and cannot legally charge fees for VA work.
          </p>

          <h2>VA Accreditation vs. Non-Accredited Attorneys</h2>
          <p>
            Here is the practical difference between working with an accredited versus non-accredited attorney on a VA claim:
          </p>
          <ul>
            <li><strong>Accredited attorney:</strong> Can charge fees (typically contingency on back pay), can represent you at every stage from initial claim through Board of Veterans' Appeals (BVA) and U.S. Court of Appeals for Veterans Claims (CAVC), has agreed to VA ethical standards, is searchable in the official OGC database</li>
            <li><strong>Non-accredited attorney:</strong> Cannot legally charge fees for VA representation, has no standing to represent you at the BVA or CAVC, is not subject to VA ethical oversight for this work</li>
          </ul>
          <p>
            A non-accredited attorney can still help you prepare paperwork, review medical records, or give general advice — they just cannot charge you for VA representation specifically, and they cannot appear on your behalf before the VA.
          </p>

          <h2>Why You Need a VA-Accredited Attorney</h2>
          <p>
            The VA denies 30–40% of initial disability claims. Of those that go to appeal, veterans represented by accredited attorneys win 42.7% of BVA appeals — compared to 29.7% for unrepresented veterans. That gap is not because attorneys are magic. It is because they know what evidence to gather, how to frame arguments under the rating schedule, and when to push harder.
          </p>
          <p>
            VA law is surprisingly technical. The rating schedule (38 CFR Part 4) has hundreds of specific diagnostic codes. A rating examiner can legally give you a lower rating than you deserve if you do not know the exact criteria to cite. An attorney who handles these cases every day knows the schedule cold.
          </p>
          <p>
            For TDIU claims, CAVC appeals, MST cases, and complex multi-condition claims, the difference between going it alone and having an attorney can be tens of thousands of dollars in back pay and hundreds of dollars per month in ongoing benefits.
          </p>

          <h2>What Cases Do VA-Accredited Attorneys Handle?</h2>
          <ul>
            <li>Initial disability claims and supplemental claim filings</li>
            <li>Notice of Disagreement (NOD) and Board of Veterans' Appeals (BVA) appeals</li>
            <li>Total Disability based on Individual Unemployability (TDIU)</li>
            <li>Military Sexual Trauma (MST) claims</li>
            <li>Burn pit and toxic exposure claims under the PACT Act</li>
            <li>Agent Orange, herbicide, and radiation exposure claims</li>
            <li>Rating increase requests and new and material evidence submissions</li>
            <li>Clear and Unmistakable Error (CUE) motions</li>
            <li>U.S. Court of Appeals for Veterans Claims (CAVC) representation</li>
            <li>Department of Defense disability retirement appeals</li>
          </ul>

          <h2>How to Find a VA-Accredited Attorney Near You</h2>
          <p>
            Start with FindVAAttorney.com — every attorney in this directory has been verified against the VA OGC accreditation database. You can filter by state, practice area, and availability. VA law is federal, so you are not limited to attorneys in your city; remote representation is common and legal.
          </p>
          <p>
            When evaluating attorneys, ask specifically: <em>"Are you currently VA-accredited with the Office of General Counsel?"</em> Ask for their VA registration number so you can verify it yourself at the VA's official search tool. Any qualified attorney will answer that question without hesitation.
          </p>
          <p>
            Most VA attorneys offer free initial consultations. Use that conversation to assess their experience with your specific claim type — a TDIU case requires different expertise than a burn pit claim or a CAVC appeal.
          </p>
        </article>

        {/* FAQ Section */}
        <div className="border-t border-surface-border pt-8 mt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-surface-border p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related guides */}
        <div className="bg-surface rounded-xl border border-surface-border p-5 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">Related Guides</h2>
          <ul className="space-y-2">
            {[
              { href: '/guides/how-to-choose', label: 'How to Choose a VA Disability Attorney' },
              { href: '/guides/va-attorney-vs-vso', label: 'VA Attorney vs VSO: Which Do You Need?' },
              { href: '/guides/tdiu-explained', label: 'What is TDIU? Total Disability Explained' },
              { href: '/guides/burn-pit-pact-act', label: 'Burn Pit Claims and the PACT Act' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-brand-navy hover:underline flex items-center gap-1.5 text-sm font-medium">
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-label="Arrow" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy rounded-xl p-6 text-center">
          <CheckCircle className="w-8 h-8 text-brand-gold mx-auto mb-3" aria-label="Check" />
          <h2 className="text-xl font-bold text-white mb-2">Find a VA-Accredited Attorney</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-md mx-auto">
            Every attorney in this directory has verified VA accreditation. Search by state and practice area — 100% free for veterans.
          </p>
          <Link
            href="/listings"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Browse Accredited Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
      </div>
    </>
  )
}
