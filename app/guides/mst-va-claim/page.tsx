import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'MST VA Claims: How to File for Military Sexual Trauma Benefits | FindVAAttorney.com',
  description: 'Military sexual trauma (MST) VA claims require specialized documentation. Learn how MST claims work, what evidence the VA accepts, and when to work with a VA attorney.',
  alternates: { canonical: 'https://findvaattorney.com/guides/mst-va-claim' },
}

export const revalidate = 86400

const FAQ = [
  {
    q: 'What counts as military sexual trauma for VA purposes?',
    a: "The VA defines military sexual trauma (MST) as sexual assault or sexual harassment that occurred during active military, naval, or air service. This includes sexual assault (rape, groping, coerced sexual acts), and sexual harassment that was repeated, threatening, or pervasive. The MST definition is broad — it covers incidents involving any person during service, not only fellow service members. You do not need to have reported the incident at the time it occurred, and a formal military investigation or conviction is not required to file an MST-related disability claim.",
  },
  {
    q: 'What disabilities can be service-connected through MST?',
    a: "MST can establish service connection for PTSD, depression, anxiety disorders, eating disorders, substance use disorders, sexual dysfunction, and physical conditions caused by assault (chronic pelvic pain, gastrointestinal disorders, traumatic brain injury). PTSD is the most commonly service-connected condition through MST, but any condition that a VA examiner can link to the MST experience — with a nexus opinion — can be service-connected.",
  },
  {
    q: 'What if I have no records from the time of the incident?',
    a: "This is extremely common. MST survivors often do not report incidents at the time, which means there may be no official record in their service record (DD214, medical records, JAG records). The VA has special rules for MST claims: it must look for 'markers' — behavioral changes documented in service records such as increased absences, a sudden transfer, performance decline, behavioral changes, or a request for pregnancy testing or STI treatment that is otherwise unexplained. Personal statements, buddy statements from fellow service members, or records from civilian healthcare providers showing treatment shortly after service can also substitute for in-service documentation.",
  },
  {
    q: 'What is an MST coordinator at the VA?',
    a: "Every VA medical facility is required to have an MST Coordinator — a clinical staff member who helps connect MST survivors with mental health and other services. MST coordinators are also a resource during the claims process and can help connect veterans to VA MST-related counseling (which is available free even without a disability rating). However, MST coordinators are not claims advocates — they do not file claims or represent veterans in appeals. A VA accredited attorney handles the legal and evidentiary side of an MST claim.",
  },
  {
    q: 'Should I hire a VA attorney for an MST claim?',
    a: "MST claims are among the most complex in the VA system — they involve credibility determinations, unique evidence rules (the 'markers' standard), nexus opinions connecting MST to diagnosed conditions, and often C&P exams that require a trauma-informed examiner. Many MST survivors also have difficulty reliving the trauma in a bureaucratic appeals process. A VA attorney who is experienced with MST claims can: manage the evidence gathering so you do not have to re-live the incident repeatedly, ensure the VA applies the correct evidentiary standards, obtain independent nexus opinions, and appeal decisions that misapply the MST evidentiary rules.",
  },
]

export default function MSTVAClaimPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-brand-navy transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-navy transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-gray-900">MST VA Claims</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            MST VA Claims: How to File for Military Sexual Trauma Benefits
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Military sexual trauma (MST) is one of the most mishandled categories in the VA claims
            system. Many veterans are denied because raters do not apply the special evidentiary
            standards required by law for MST claims — standards designed specifically to account for
            the fact that most incidents are never formally reported. This guide explains those rules,
            what evidence the VA is required to consider, and how a VA attorney can help.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The MST evidentiary standard is different
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For standard PTSD claims, veterans typically need either a confirmed in-service stressor
              (documented in records) or corroboration from someone who witnessed the stressor. MST
              claims operate differently under VA regulations (38 CFR 3.304(f)(5)):
            </p>
            <div className="space-y-3">
              {[
                { title: 'No formal report required', detail: 'You do not need to have reported the MST at the time it occurred. The absence of a formal report cannot be used against you.' },
                { title: 'In-service documentation is not required', detail: 'If there is no official record of the assault, the VA must look for indirect evidence — called "markers" — of the event.' },
                { title: 'Markers the VA must look for', detail: 'Behavioral changes documented in service records: unexplained absences, transfer requests, performance decline, substance use, requests for STI testing or pregnancy testing, and clinical notes reflecting emotional distress or behavioral change.' },
                { title: 'Personal statements carry significant weight', detail: 'A detailed personal statement from the veteran is treated as credible evidence. The VA should not dismiss it without specific reasons.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What the VA often gets wrong on MST claims
            </h2>
            <div className="space-y-3">
              {[
                { flag: 'Treating the absence of a report as evidence it did not happen', why: 'Federal law (38 CFR 3.304(f)(5)) prohibits this. The majority of MST incidents are never formally reported.' },
                { flag: 'Failing to search service records for behavioral markers', why: 'The VA has a duty to assist. For MST claims, this duty explicitly includes searching for indirect evidence of the stressor.' },
                { flag: 'Ordering a C&P exam with a non-trauma-informed examiner', why: 'An inadequate C&P exam that re-traumatizes the veteran or dismisses their account without applying the proper standard is grounds for appeal.' },
                { flag: 'Denying PTSD service connection without discussing the MST nexus opinion', why: 'If a veteran has a diagnosis and a medical nexus linking PTSD to the MST, a denial must specifically explain why the nexus was not accepted.' },
              ].map((item) => (
                <div key={item.flag} className="rounded-xl border border-red-100 bg-red-50 p-4">
                  <p className="font-semibold text-red-700 text-sm">{item.flag}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Resources for MST survivors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'VA MST Coordinator', detail: 'Every VA facility has one. Free counseling is available for MST survivors regardless of disability rating.' },
                { name: 'VA MST Support Team', detail: 'Provides information, referrals, and advocacy. Contact through the White House VA Hotline (1-855-948-2311).' },
                { name: 'Make the Connection', detail: 'VA resource connecting veterans with mental health support and MST-specific services.' },
                { name: 'Veterans Law Judge at BVA', detail: 'BVA hearings for MST claims can be conducted by video — survivors do not need to travel to Washington DC.' },
              ].map((r) => (
                <div key={r.name} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{r.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </section>

          <div className="bg-brand-navy rounded-xl p-6">
            <h2 className="font-semibold text-white mb-2">Find a VA attorney experienced with MST claims</h2>
            <p className="text-sm text-gray-300 mb-4">
              MST claims require an attorney who understands the special evidentiary standards and can manage the process sensitively. Browse our directory.
            </p>
            <Link href="/listings" className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-gold-light transition-colors">
              Browse VA Attorneys <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/what-is-va-accreditation" className="text-sm text-brand-navy hover:opacity-80 font-medium">What is VA Accreditation? →</Link>
              <Link href="/guides/nexus-letter-va-claim" className="text-sm text-brand-navy hover:opacity-80 font-medium">Nexus Letters Explained →</Link>
              <Link href="/guides/tdiu-explained" className="text-sm text-brand-navy hover:opacity-80 font-medium">TDIU Explained →</Link>
              <Link href="/guides/va-disability-rating-explained" className="text-sm text-brand-navy hover:opacity-80 font-medium">VA Disability Ratings →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
