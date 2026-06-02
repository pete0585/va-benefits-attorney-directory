import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Choose a VA Disability Attorney | FindVAAttorney.com',
  description: 'Not all VA attorneys are equal. Learn the 5 questions to ask before you hire, how contingency fees work, and what red flags to avoid when choosing your VA disability lawyer.',
  alternates: { canonical: 'https://findvaattorney.com/guides/how-to-choose' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What percentage does a VA attorney take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VA attorney fees are regulated by federal law. For cases decided after a Notice of Disagreement (after June 20, 2007), attorneys can charge up to 20% of retroactive back pay. For older claims, fees require VA approval. Most attorneys charge 20–33% of back pay. They collect nothing if you lose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I hire a large VA law firm or a solo attorney?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both can be excellent. Large firms like CCK Law or Hill & Ponton handle high volumes and have deep appellate infrastructure. Solo and boutique attorneys often provide more personal attention and direct access to the attorney handling your case. The most important factor is the attorney\'s specific experience with your claim type, not firm size.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the deadline to get an attorney after my VA denial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You have one year from the date of a VA rating decision to file a Notice of Disagreement. This is a hard deadline — missing it can result in losing your appeal rights entirely. If you received a denial, contact a VA attorney immediately. Do not wait.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I already have a VSO — can I switch to an attorney?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can change your representative at any time by submitting VA Form 21-22A (for attorneys) to replace your current VSO or representative. An attorney can pick up your case at any stage, including after a denial. Make sure to inform your VSO when you make the switch.',
      },
    },
  ],
}

const checklistItems = [
  { question: 'Are you currently VA-accredited with the Office of General Counsel?', why: 'Legally required to charge fees. Non-negotiable.' },
  { question: 'What percentage of your cases involve [your claim type]?', why: 'TDIU, MST, and burn pit cases are different specialties. Experience matters.' },
  { question: 'What is your fee structure, and do you handle any costs upfront?', why: 'Confirm contingency-only before signing anything.' },
  { question: 'Who will actually work on my case — you, or a paralegal?', why: 'Large firms sometimes use junior staff. Know who handles your file.' },
  { question: 'Have you taken cases to the CAVC?', why: 'CAVC experience signals serious appellate capability, not just rubber-stamping claims.' },
]

export default function HowToChoosePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <span className="text-gray-900 font-medium">How to Choose a VA Disability Attorney</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            How to Choose a VA Disability Attorney
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            VA accreditation is the baseline — but within the 40,000+ accredited attorneys, quality varies enormously. Here is how to find someone who will actually fight for your benefits.
          </p>
        </div>

        <article className="prose-guide">
          <h2>Start with VA Accreditation — But Don't Stop There</h2>
          <p>
            Every attorney who charges fees for VA representation must be accredited by the VA Office of General Counsel. That is the legal floor. But accreditation does not tell you whether an attorney has handled a hundred TDIU cases or never tried one. It does not tell you whether they will give your case personal attention or pass it to a paralegal. It does not tell you whether they have ever argued before the Board of Veterans' Appeals.
          </p>
          <p>
            Verification is step one. After that, your evaluation criteria should be specialization, communication, and fee transparency.
          </p>

          <h2>Ask About Their Specialization</h2>
          <p>
            VA disability law has genuine sub-specialties. The legal arguments for a TDIU claim are fundamentally different from a Military Sexual Trauma claim, which is different from a CAVC appeal on a clear and unmistakable error theory. An attorney who handles fifty TDIU cases a year is far better positioned to win yours than a general VA practitioner who sees one or two annually.
          </p>
          <p>
            When you call for a free consultation, describe your claim type specifically and ask: <em>"What percentage of your caseload involves cases like mine?"</em> A qualified attorney will give you a direct answer. If they give you a vague response or pivot to generic reassurances, that tells you something.
          </p>
          <p>
            The major claim types where specialization matters most:
          </p>
          <ul>
            <li><strong>TDIU (Total Disability Individual Unemployability):</strong> Requires evidence that your service-connected conditions prevent gainful employment. Vocational evidence and medical nexus arguments are critical.</li>
            <li><strong>Military Sexual Trauma (MST):</strong> Requires trauma-informed approach, strong understanding of MST-specific rating regulations, and often involves fighting for in-service evidence in cases with poor documentation.</li>
            <li><strong>Burn pit and PACT Act claims:</strong> New and rapidly evolving area since the PACT Act passed in 2022. Attorneys need current knowledge of presumptive conditions and toxic exposure evidence standards.</li>
            <li><strong>CAVC appeals:</strong> Federal appellate court work. Only attorneys with specific federal court appellate experience should handle these — this is not standard BVA work.</li>
          </ul>

          <h2>Understand Contingency Fees Before You Sign</h2>
          <p>
            Most VA attorneys work on contingency: they take a percentage of your back pay only if you win. Federal law caps attorney fees for most VA cases at 20% of retroactive benefits. If an attorney quotes you a higher percentage or asks for upfront money for a standard disability claim, walk away.
          </p>
          <p>
            Your attorney fee agreement must be in writing. Read it before signing. Confirm:
          </p>
          <ul>
            <li>The exact percentage they will take from your back pay</li>
            <li>Whether they will cover any out-of-pocket costs (medical records, expert fees) during the case and whether those are reimbursed from your award or charged separately</li>
            <li>What happens if you decide to drop the case or change attorneys mid-claim</li>
          </ul>
          <p>
            The contingency model works in your favor: your attorney only gets paid when you win. That aligns incentives.
          </p>

          <h2>5 Questions to Ask Before You Hire</h2>
        </article>

        {/* Checklist */}
        <div className="space-y-3 mb-8">
          {checklistItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-surface-border p-4 flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-navy/10 flex items-center justify-center text-sm font-bold text-brand-navy">
                {i + 1}
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-0.5">&ldquo;{item.question}&rdquo;</p>
                <p className="text-sm text-gray-600">{item.why}</p>
              </div>
            </div>
          ))}
        </div>

        <article className="prose-guide">
          <h2>Red Flags to Watch For</h2>
          <p>
            Most VA attorneys are ethical and competent. But a few patterns should make you pause:
          </p>
          <ul>
            <li><strong>Guaranteeing a specific outcome.</strong> No attorney can guarantee what the VA will decide. Anyone who promises you a 100% rating or a specific back pay amount before reviewing your file is misleading you.</li>
            <li><strong>Asking for upfront money.</strong> Legitimate VA attorneys work on contingency. Upfront fees for a standard disability claim are a warning sign.</li>
            <li><strong>Vague answers about accreditation.</strong> Any qualified VA attorney can immediately cite their OGC registration number. Hesitation or deflection on this basic question is a red flag.</li>
            <li><strong>No written fee agreement.</strong> Federal VA regulations require a written fee agreement. An attorney who wants to proceed on a handshake is not following the rules.</li>
          </ul>

          <h2>Remote Representation Is Normal — Use It</h2>
          <p>
            VA law is federal. A VA-accredited attorney in Florida can represent a veteran living in Montana — the claim is processed at a regional VA office and eventually the BVA in Washington D.C., not in local courthouses. Remote representation via phone, email, and video is standard practice in VA disability law.
          </p>
          <p>
            This means the best attorney for your specific claim type might be across the country. Do not limit yourself geographically when the expertise for your particular situation exists elsewhere. The best TDIU attorneys, CAVC specialists, and MST-focused lawyers often take clients nationally.
          </p>
        </article>

        {/* FAQ */}
        <div className="border-t border-surface-border pt-8 mt-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Common Questions</h2>
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
              { href: '/guides/what-is-va-accreditation', label: 'What is a VA-Accredited Attorney?' },
              { href: '/guides/va-attorney-vs-vso', label: 'VA Attorney vs VSO: Which Do You Need?' },
              { href: '/guides/tdiu-explained', label: 'What is TDIU? Total Disability Explained' },
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
          <h2 className="text-xl font-bold text-white mb-2">Ready to Find Your Attorney?</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-md mx-auto">
            Search VA-accredited attorneys by state and practice area. Filter for free consultations, remote availability, and specialization.
          </p>
          <Link
            href="/listings"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Search Attorneys <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
      </div>
    </>
  )
}
