import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Prepare for Your VA C&P Exam | Guide | Find VA Attorney',
  description:
    'A VA Compensation and Pension exam can make or break your disability rating. Learn what to bring, what to say, and what red flags to watch for in the exam report.',
  alternates: { canonical: 'https://findvaattorney.com/guides/cp-exam-preparation' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I bring to a VA C&P exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bring everything that documents the current severity of your condition: private treatment records showing ongoing symptoms or treatment, a written personal statement describing how your condition affects your daily life and functioning, any buddy statements from family members, fellow veterans, or coworkers who can speak to your symptoms, notes about your worst days (not your average days), and any prior C&P exam results you have. The examiner is evaluating the current level of severity — comprehensive documentation of how the condition affects your life is the most valuable thing you can bring.",
      },
    },
    {
      '@type': 'Question',
      name: "Can I 'fail' a C&P exam?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There is no pass/fail — the C&P exam determines the severity of your service-connected condition and informs the rater's decision. However, a poorly documented or adversarial exam can result in a lower rating than your condition warrants. If the exam was inadequate — too short, no records review, examiner applied wrong diagnostic criteria — you can request a new exam through the appeals process. A VA attorney can identify when a C&P exam is inadequate and help you challenge it.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a VA C&P exam take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A thorough C&P exam for a complex condition should take 45–90 minutes or more. Simple single-condition exams may legitimately be shorter — 20–30 minutes for something straightforward like a single joint condition with clear documentation. A red flag: if you have PTSD, TBI, or multiple conditions and your exam took only 15 minutes, the exam may be inadequate. Courts have found very short C&P exams deficient when the conditions required more thorough evaluation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a VA attorney help if my C&P exam was inadequate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — this is one of the most valuable things a VA attorney does. An inadequate C&P exam is a legally challengeable issue in a VA appeal. Attorneys can identify when an exam failed to apply the correct diagnostic criteria (like the DSM-5 criteria for PTSD, or the correct range-of-motion protocol for joint conditions), failed to review available records, or rendered a conclusory opinion without adequate rationale. The remedy may be a new VA C&P exam, an Independent Medical Opinion (IMO) from a private expert, or both.",
      },
    },
  ],
}

export default function CPExamPreparationPage() {
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
          <span>C&amp;P Exam Preparation</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            How to Prepare for Your VA C&amp;P Exam: What Veterans Need to Know
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            A Compensation and Pension exam is not a treatment appointment — it&apos;s an evaluation the VA uses to determine the severity of your service-connected disability. What you say and what you bring can directly affect your rating. Most veterans are not prepared for what these exams actually involve. This guide explains what matters most.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is a C&amp;P exam?</h2>
            <p className="text-gray-600 mb-4">
              A Compensation and Pension (C&amp;P) exam is ordered by the VA when you file a disability claim or appeal. The purpose is to evaluate your current diagnosis and the severity of your service-connected condition — not to treat it. The examiner documents findings, completes a Disability Benefits Questionnaire (DBQ), and the VA rater uses that DBQ to assign your rating.
            </p>
            <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-xl p-5">
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>C&amp;P exams are not treatment:</strong> Do not expect the examiner to help you or give you medical advice.</li>
                <li><strong>The examiner may work for a contractor:</strong> VA uses contracted companies (LHI/Optum, QTC, VES) for many exams; quality varies significantly across contractors and individual examiners.</li>
                <li><strong>You cannot choose your examiner.</strong></li>
                <li><strong>The exam informs — but does not decide — your rating:</strong> A rater reviews the DBQ alongside your service records and medical evidence to make the final decision.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Before your exam: what to gather</h2>
            <div className="space-y-3">
              {[
                { item: 'Private treatment records', detail: 'Any records from non-VA providers showing current treatment, diagnoses, and symptoms. These should be submitted to the VA before the exam if possible so the examiner has them.' },
                { item: 'Personal statement (lay statement)', detail: "A written description from you of how your condition affects your daily life — work limitations, sleep disruption, pain levels on bad days, activities you can no longer do. This is critical evidence. Write it out in detail before the exam." },
                { item: 'Buddy statements', detail: 'Written statements from spouses, family members, fellow veterans, or coworkers who have witnessed how your condition affects you. VA regulations require raters to consider lay evidence.' },
                { item: 'Notes on your worst days', detail: "Be prepared to describe your worst days — not your average days. C&P exams often produce underrating because veterans describe how they're 'managing' rather than how bad things get." },
                { item: 'Prior C&P exam results', detail: 'If you have had previous C&P exams, bring them or know what they said. Knowing what the last examiner documented helps you address any gaps or inaccuracies.' },
                { item: 'Nexus letters or IMOs', detail: 'If you have obtained an independent medical opinion or nexus letter from a private physician, bring a copy. The examiner may or may not review it, but it should be in your claims file.' },
              ].map(({ item, detail }) => (
                <div key={item} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The day of your exam: what to say and what not to say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="font-semibold text-green-900 mb-3">Do say</p>
                <ul className="text-sm text-green-800 space-y-2">
                  {[
                    'Describe your worst days and worst weeks',
                    'Be specific: "I can\'t lift more than 10 lbs without pain," not "it hurts sometimes"',
                    'Describe functional limitations at work and at home',
                    'Be honest about PTSD symptoms — don\'t minimize to seem strong',
                    'Mention every symptom, even ones that seem minor',
                    'Note how long symptoms last and how often they occur',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="font-semibold text-red-900 mb-3">Do not say</p>
                <ul className="text-sm text-red-800 space-y-2">
                  {[
                    '"I\'m fine" or "I\'m managing okay"',
                    '"It\'s not that bad" or "I push through it"',
                    'Anything that minimizes severity to seem strong',
                    '"I have good days and bad days" without describing how bad the bad days are',
                    'Vague answers about symptoms without specific functional detail',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-600 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What the examiner is evaluating</h2>
            <p className="text-gray-600 mb-4">
              C&amp;P examiners are looking for three things required to support a disability rating:
            </p>
            <div className="space-y-3">
              {[
                { element: 'Current diagnosis', desc: 'A present, diagnosed medical condition that can be rated under the VA Schedule of Ratings.' },
                { element: 'Nexus (service connection)', desc: "A medical opinion that the condition was caused by, worsened by, or is otherwise related to military service. This is often the most contested element in denied claims." },
                { element: 'Severity / functional impairment', desc: "How significantly the condition affects your ability to function — at work, in daily activities, in relationships. The rating percentage is determined by severity, not just the presence of a diagnosis." },
              ].map(({ element, desc }) => (
                <div key={element} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{element}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">After the exam: what happens next</h2>
            <p className="text-gray-600 mb-4">
              After the exam, the examiner writes a DBQ (Disability Benefits Questionnaire) — a structured form corresponding to your specific condition or conditions. The VA rater then reviews your claims file, including the DBQ, service records, and all submitted medical evidence, and issues a rating decision. This process typically takes several months.
            </p>
            <p className="text-gray-600">
              You are entitled to request a copy of your C&amp;P exam DBQ through your VA claims file. Reviewing it before your rating decision arrives can help you identify whether the examiner documented your symptoms accurately — and whether there are grounds for a challenge if your rating is lower than expected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Red flags in a C&amp;P exam report</h2>
            <p className="text-gray-600 mb-4">
              These phrases in a C&amp;P report often indicate an inadequate or challengeable exam:
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <ul className="text-sm text-amber-900 space-y-2">
                {[
                  '"Veteran did not appear to be in distress" — appearance in a 15-minute exam doesn\'t reflect severity of chronic conditions',
                  '"Veteran reported good days and bad days" — without context about how bad the bad days are, this can be used to deny higher ratings',
                  'No mention of reviewing your private treatment records or service records',
                  'Exam lasted under 20 minutes for a complex condition (PTSD, TBI, multiple musculoskeletal injuries)',
                  'Opinion rendered without rationale — "I conclude the condition is not related to service" with no explanation',
                  'Wrong diagnostic criteria applied (e.g., using older PTSD criteria instead of DSM-5)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber-700 mt-0.5 flex-shrink-0">⚠</span>
                    <span>{item}</span>
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
          <h3 className="font-semibold text-gray-900 mb-3">Find a VA Attorney Who Can Help With C&amp;P Exam Issues</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings" className="bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-navy-dark transition-colors inline-flex items-center gap-2">
              Find a VA Attorney <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guides/nexus-letter-va-claim" className="text-brand-navy font-medium hover:underline">Nexus Letters Explained →</Link>
            <Link href="/guides/va-disability-rating-explained" className="text-brand-navy font-medium hover:underline">VA Disability Ratings Explained →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
