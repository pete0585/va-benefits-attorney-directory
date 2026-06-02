import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByPracticeArea } from '@/lib/data'
import { PRACTICE_AREAS } from '@/lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const label = PRACTICE_AREAS[slug]
  if (!label) return { title: 'Category Not Found' }

  return {
    title: `${label} Attorneys — VA-Accredited`,
    description: `Find VA-accredited attorneys specializing in ${label} claims. Verified experts who fight for veterans.`,
    alternates: { canonical: `https://findvaattorney.com/categories/${slug}` },
  }
}

export const revalidate = 3600

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const label = PRACTICE_AREAS[slug]

  if (!label) notFound()

  const listings = await getListingsByPracticeArea(slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-brand-navy">Home</Link>
        {' / '}
        <Link href="/listings" className="hover:text-brand-navy">Attorneys</Link>
        {' / '}
        <span className="text-gray-900 font-medium">{label}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{label} Attorneys</h1>
        <p className="text-gray-600">
          {listings.length} VA-accredited attorney{listings.length !== 1 ? 's' : ''} specializing in {label} claims.
        </p>
      </div>

      {listings.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">No attorneys found for this practice area yet.</p>
          <Link href="/listings" className="text-brand-navy hover:underline">Browse all attorneys</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      )}

      <div className="mt-10 bg-white rounded-xl border border-surface-border p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Other Practice Areas</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(PRACTICE_AREAS).filter(([key]) => key !== slug).map(([key, name]) => (
            <Link
              key={key}
              href={`/categories/${key}`}
              className="text-sm bg-surface border border-surface-border text-gray-700 hover:border-brand-navy/40 hover:text-brand-navy px-3 py-1.5 rounded-lg transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
