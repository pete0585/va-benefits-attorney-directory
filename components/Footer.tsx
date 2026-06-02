import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function Footer() {
  const topStates = [
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'IL', name: 'Illinois' },
  ]

  const practiceAreas = [
    { key: 'tdiu', label: 'TDIU Attorneys' },
    { key: 'mst', label: 'MST Attorneys' },
    { key: 'appeals', label: 'Appeals Attorneys' },
    { key: 'burn_pit', label: 'Burn Pit Attorneys' },
    { key: 'rating_increase', label: 'Rating Increase' },
    { key: 'ptsd', label: 'PTSD Claims' },
    { key: 'agent_orange', label: 'Agent Orange' },
    { key: 'cue', label: 'CUE Claims' },
  ]

  return (
    <footer className="bg-brand-navy-dark text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-7 h-7 bg-brand-gold rounded-sm">
                <Shield className="w-4 h-4 text-brand-navy" aria-label="Shield" />
              </div>
              <span className="text-white font-bold">
                Find<span className="text-brand-gold">VA</span>Attorney
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              The only directory built specifically for veterans seeking VA-accredited legal representation.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">By State</h3>
            <ul className="space-y-2">
              {topStates.slice(0, 5).map((s) => (
                <li key={s.abbr}>
                  <Link href={`/listings?state=${s.abbr}`} className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.slice(0, 5).map((pa) => (
                <li key={pa.key}>
                  <Link href={`/listings?practice_area=${pa.key}`} className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                    {pa.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/submit" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Submit Your Listing</Link></li>
              <li><Link href="/listings" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Browse All Attorneys</Link></li>
              <li>
                <a href="https://www.va.gov/ogc/apps/accreditation/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                  VA OGC Accreditation
                </a>
              </li>
              <li>
                <a href="https://www.va.gov/disability/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                  VA Disability Benefits
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-navy flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} FindVAAttorney.com. Not affiliated with the U.S. Department of Veterans Affairs.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>VA-Accredited Attorneys Only</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
