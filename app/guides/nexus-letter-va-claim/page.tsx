import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nexus Letters for VA Claims: What They Are and Why You Need One | FindVAAttorney.com',
  description: "A nexus letter connects your current diagnosis to your military service — and it's often the difference between a granted and a denied VA claim. Here's what a strong nexus letter looks like.",
  alternates: { canonical: 'https://findvaattorney.com/guides/nexus-letter-va-claim' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a nexus letter for a VA claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A nexus letter is a medical opinion from a doctor or qualified clinician that establishes the connection (nexus) between your current diagnosed condition and your military service. The VA requires this connection — called service nexus — to grant disability compensation. Without a nexus letter, the VA often relies solely on its own Compensation and Pension (C&P) exam, which frequently produces unfavorable opinions. A strong independent nexus letter gives the VA evidence to grant your claim.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes a nexus letter strong enough for the VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A strong nexus letter must: (1) state the veteran's diagnosis clearly, (2) reference the veteran's service records and in-service events that caused or contributed to the condition, (3) use VA legal standards — 'at least as likely as not' (50%+ probability) — rather than vague language like 'possibly related', (4) cite relevant medical literature to support the opinion if appropriate, (5) be written by a physician with credentials relevant to the condition, and (6) avoid hedged or equivocal conclusions ('may be related', 'cannot rule out'). The 'at least as likely as not' standard is critical — that's the threshold for service connection.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who can write a nexus letter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Any licensed physician (MD, DO), physician assistant (PA), nurse practitioner (NP), or relevant specialist can write a nexus letter. The VA gives more weight to opinions from specialists relevant to the condition — a psychiatrist for PTSD, an orthopedic surgeon for musculoskeletal conditions, an audiologist for hearing loss. Your VA treating provider can write a nexus letter but often won't because they're told not to. An independent medical expert (IME) hired specifically for your claim will write one — these are common in veteran legal cases.",
      },
    },
    {
      '@type': 'Question',
      name: 'My VA C&P exam was negative. Can a nexus letter override it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — a well-reasoned independent nexus letter can overcome a negative C&P exam opinion. The VA cannot simply ignore contrary medical evidence; it must explain why it gives one opinion more weight than another. A nexus letter from an independent medical expert that cites literature, addresses the C&P examiner's rationale, and is more detailed and better reasoned than the C&P opinion can flip a denied claim on appeal. This is one of the most common uses of nexus letters in VA appeals.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a nexus letter cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Independent nexus letters from medical experts typically cost $300-$1,500 depending on the complexity of the condition and the credentials of the writer. Some VA attorneys advance the cost of nexus letters and recover it from the contingency fee. If you need a nexus letter and can't afford it, ask your attorney about whether they can advance the cost or refer you to lower-cost IME services. The investment is almost always worth it when the claim involves significant back pay.",
      },
    },
  ],
}

export default function NexusLetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-navy">Guides</Link>
          <span>/</span>
          <span>Nexus Letters</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            Nexus Letters for VA Claims: What They Are and Why You Need One
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            The VA denies claims every day not because a veteran doesn&apos;t have a real service-connected condition — but because there&apos;s no medical opinion on record making the connection explicit. A nexus letter fixes that. It is often the single most important piece of evidence in a VA claim or appeal.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The VA Service Connection Standard</h2>
            <div className="space-y-3">
              {[
                { type: 'Direct service connection', desc: "Your condition was caused by an in-service event, injury, or illness. Example: knee injury from a jump landing documented in your service medical records. A nexus letter states the knee condition 'was caused by' that event." },
                { type: 'Secondary service connection', desc: 'Your condition was caused or worsened by an already service-connected condition. Example: depression secondary to service-connected chronic pain. A nexus letter states the depression is "at least as likely as not" caused or aggravated by the pain condition.' },
                { type: 'Aggravation', desc: 'A pre-existing condition was aggravated beyond its natural progression by military service. More complex to establish — requires baseline evidence of the pre-existing condition and documentation of how service worsened it.' },
                { type: 'Presumptive', desc: 'For conditions on the VA presumptive list (Agent Orange, PACT Act, Gulf War illness), no nexus letter is needed — the connection is presumed by law. But nexus letters are still useful for rating level and secondary conditions.' },
              ].map(({ type, desc }) => (
                <div key={type} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{type}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What a Strong Nexus Letter Includes</h2>
            <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5">
              <ul className="text-sm text-gray-700 space-y-2">
                {[
                  "Writer's credentials, specialty, and license number",
                  "Review of the veteran's service records, STRs, and relevant treatment history",
                  "Current diagnosis with clinical basis",
                  "Explicit statement using VA legal standard: 'at least as likely as not related to military service'",
                  "Medical rationale for the opinion — not just a conclusion",
                  "Citation of relevant medical literature if available",
                  "Address to the VA or Board of Veterans' Appeals specifically",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-navy mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Find a VA Attorney Who Can Help With Nexus Letters</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings" className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-flex items-center gap-2">
              Find a VA Attorney <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
            <Link href="/guides/tdiu-explained" className="text-brand-navy font-medium hover:underline">TDIU Explained →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
