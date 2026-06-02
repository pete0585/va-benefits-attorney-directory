import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VA Attorney vs VSO: Which Do You Need? | FindVAAttorney.com',
  description: 'VSOs are free. Attorneys cost money. But for denied or undercounted claims, the difference in outcome is significant. Learn when each type of representative makes sense.',
  alternates: { canonical: 'https://findvaattorney.com/guides/va-attorney-vs-vso' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a VSO really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Veterans Service Organization representatives (from groups like the DAV, VFW, American Legion, and AMVETS) are federally prohibited from charging fees for VA representation. They are funded by their organizations and serve veterans at no cost. Free does not mean low quality — many VSO reps are highly experienced and effective.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have both a VSO and an attorney at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The VA only recognizes one representative of record at a time. If you want to switch from a VSO to an attorney (or vice versa), you submit VA Form 21-22A to designate the attorney as your new representative. Your prior representative is automatically removed when the new form is accepted.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Claims Agent vs. an Attorney?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Claims agents are non-attorney advocates who are VA-accredited and can charge fees (like attorneys). They can represent veterans through the BVA but cannot represent veterans at the U.S. Court of Appeals for Veterans Claims (CAVC), which requires a licensed attorney. For most disability claims, a good claims agent is comparable to an attorney. For CAVC appeals, you need an attorney.',
      },
    },
    {
      '@type': 'Question',
      name: 'My VSO helped me file but I got denied. Should I get an attorney now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — a denial is the most common trigger for switching to an attorney. VSOs are generally strongest at initial claim filing. When a claim is denied and you enter the appeals process (Notice of Disagreement, BVA, CAVC), the legal arguments become more complex and an attorney\'s expertise adds more value. You have one year from the denial date to file the NOD.',
      },
    },
  ],
}

const comparisonData = [
  { factor: 'Cost', vso: 'Free', attorney: 'Contingency (% of back pay, only if you win)' },
  { factor: 'Who they are', vso: 'Trained advocates, often veterans themselves', attorney: 'Licensed lawyers with VA accreditation' },
  { factor: 'Claim filing', vso: 'Strong — this is their core service', attorney: 'Can help, but most powerful on appeals' },
  { factor: 'BVA appeals', vso: 'Yes', attorney: 'Yes — with stronger legal arguments' },
  { factor: 'CAVC appeals', vso: 'No', attorney: 'Yes — only attorneys can represent at CAVC' },
  { factor: 'Legal arguments', vso: 'Basic to moderate', attorney: 'Full legal briefs and case law arguments' },
  { factor: 'Availability', vso: 'Regional offices, sometimes limited availability', attorney: 'Often available remotely and nationally' },
  { factor: 'Best for', vso: 'Initial claims, straightforward cases', attorney: 'Denied claims, appeals, complex cases' },
]

export default function VAAttorneyVsVSOPage() {
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
          <span className="text-gray-900 font-medium">VA Attorney vs VSO</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            VA-Accredited Attorney vs VSO: Which Do You Need?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            This is the most common question veterans ask before getting help with their claims. The answer depends on where you are in the process — not on one being universally better than the other.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-surface-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="text-left px-4 py-3 font-semibold">Factor</th>
                <th className="text-left px-4 py-3 font-semibold">VSO Rep</th>
                <th className="text-left px-4 py-3 font-semibold">VA Attorney</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={row.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                  <td className="px-4 py-3 font-medium text-gray-900">{row.factor}</td>
                  <td className="px-4 py-3 text-gray-700">{row.vso}</td>
                  <td className="px-4 py-3 text-gray-700">{row.attorney}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <article className="prose-guide">
          <h2>What is a VSO?</h2>
          <p>
            A Veterans Service Organization representative is a trained advocate employed by a veterans' organization — the DAV (Disabled American Veterans), VFW, American Legion, AMVETS, or one of dozens of others. VSO representatives are VA-accredited, work for free, and are often veterans themselves.
          </p>
          <p>
            VSOs are strongest at initial claim preparation: gathering service records, completing VA forms, and submitting evidence packages. Their national networks and regional offices mean there is often a VSO near you. The biggest limitation is capacity — heavily utilized VSO offices may have limited time per case, especially for complex claims.
          </p>
          <p>
            The major national VSOs that can represent you at the BVA (not just initial claims):
          </p>
          <ul>
            <li>Disabled American Veterans (DAV)</li>
            <li>Veterans of Foreign Wars (VFW)</li>
            <li>American Legion</li>
            <li>AMVETS</li>
            <li>Paralyzed Veterans of America (PVA)</li>
            <li>State veterans affairs offices (state-employed VSO reps)</li>
          </ul>

          <h2>What is a VA-Accredited Attorney?</h2>
          <p>
            A VA-accredited attorney is a licensed lawyer who has been approved by the VA Office of General Counsel to charge fees for VA representation. They can represent you at every level — initial claim, Regional Office, Board of Veterans' Appeals, and the U.S. Court of Appeals for Veterans Claims (CAVC). Only attorneys can argue cases at the CAVC.
          </p>
          <p>
            The VA disability attorney contingency model means you pay nothing upfront. If an attorney wins your case, they collect a regulated percentage of your retroactive back pay. If they lose, you owe them nothing.
          </p>
          <p>
            The difference in outcome data is stark: veterans represented by attorneys at the BVA win 42.7% of appeals, compared to 29.7% for unrepresented veterans. VSO-represented veterans fall in between. For complex cases and appeals, attorney representation generally produces better results.
          </p>

          <h2>When to Use a VSO</h2>
          <p>
            A VSO is the right choice when:
          </p>
          <ul>
            <li>You are filing your first VA disability claim with a relatively straightforward condition (service-connected injury, documented illness)</li>
            <li>You have no prior denial history and are starting fresh</li>
            <li>Your case involves a condition clearly in your service records with strong nexus</li>
            <li>You want local, in-person assistance with form preparation</li>
            <li>You cannot afford any risk of attorney fees (though VA attorneys work on contingency, some veterans prefer zero-cost help)</li>
          </ul>

          <h2>When to Use an Attorney</h2>
          <p>
            An attorney becomes the stronger choice when:
          </p>
          <ul>
            <li><strong>Your claim was denied.</strong> This is the most common switching point. The appeals process requires legal argument, evidence reframing, and knowledge of case law — this is where attorney expertise earns its contingency fee.</li>
            <li><strong>You are pursuing TDIU.</strong> Total Disability Individual Unemployability claims require vocational evidence and medical nexus arguments that most VSO reps are not equipped to build effectively.</li>
            <li><strong>Your case is going to the BVA.</strong> BVA hearings are more formal proceedings where legal representation produces meaningfully better outcomes.</li>
            <li><strong>You need CAVC representation.</strong> Only attorneys can represent veterans at the U.S. Court of Appeals for Veterans Claims.</li>
            <li><strong>Your case involves MST.</strong> Military Sexual Trauma cases require specialized knowledge of MST-specific regulations and trauma-informed legal advocacy that experienced MST attorneys bring.</li>
            <li><strong>You have been waiting years.</strong> Significant back pay is at stake. The attorney's contingency fee is a fraction of what you stand to gain from stronger representation.</li>
          </ul>

          <h2>Can You Switch From a VSO to an Attorney?</h2>
          <p>
            Yes, at any time. Submit VA Form 21-22A designating your attorney as your new representative. Your VSO is automatically removed as your representative of record. There is no penalty for switching, and your claim history is preserved.
          </p>
          <p>
            If you switch mid-claim after a denial, your attorney will review your file and determine the best strategy — whether that is a supplemental claim with new evidence, a Notice of Disagreement, or a direct appeal to the BVA.
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
              { href: '/guides/how-to-choose', label: 'How to Choose a VA Disability Attorney' },
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
          <h2 className="text-xl font-bold text-white mb-2">Denied? Time to Get an Attorney.</h2>
          <p className="text-gray-300 mb-4 text-sm max-w-md mx-auto">
            If your claim has been denied or underrated, search VA-accredited attorneys who specialize in appeals. Free initial consultations available.
          </p>
          <Link
            href="/listings"
            className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Find an Attorney <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
      </div>
    </>
  )
}
