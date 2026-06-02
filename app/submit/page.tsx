import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import SubmitForm from '@/components/SubmitForm'

export const metadata: Metadata = {
  title: 'Submit Your VA Attorney Listing — Free',
  description: 'Add your VA-accredited attorney profile to FindVAAttorney.com. Free to list. Verified listings receive contact forms and top search placement.',
  alternates: { canonical: 'https://findvaattorney.com/submit' },
}

export default function SubmitPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Add Your Listing</h1>
        <p className="text-gray-600 text-lg">
          Free basic listings for all VA-accredited attorneys. Upgrade to Verified for contact forms and top placement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { tier: 'Free', price: '$0', features: ['Name & location', 'VA registration number', 'Phone number', 'Basic profile'] },
          { tier: 'Verified', price: '$149/yr', features: ['Everything in Free', 'Photo & bio', 'Practice area tags', 'Contact form', 'Verified badge', 'Top search placement'], highlight: true },
          { tier: 'Featured', price: '$299/yr', features: ['Everything in Verified', '#1 position in your market', 'Featured badge', 'Category sponsorship slot', 'Monthly inquiry report'] },
        ].map((plan) => (
          <div key={plan.tier} className={`rounded-xl p-5 border ${plan.highlight ? 'border-brand-gold bg-brand-navy/5' : 'border-surface-border bg-white'}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900">{plan.tier}</h3>
              <span className={`text-sm font-semibold ${plan.highlight ? 'text-brand-navy' : 'text-gray-700'}`}>{plan.price}</span>
            </div>
            <ul className="space-y-1.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" aria-label="Included" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <SubmitForm />
    </div>
  )
}
