import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data'
import { PRACTICE_AREAS, STATE_NAMES } from '@/lib/utils'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://findvaattorney.com'
  const slugs = await getAllSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/listings`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const practiceAreaPages: MetadataRoute.Sitemap = Object.keys(PRACTICE_AREAS).map((slug) => ({
    url: `${base}/categories/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const statePages: MetadataRoute.Sitemap = Object.keys(STATE_NAMES).map((abbr) => ({
    url: `${base}/listings?state=${abbr}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const listingPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}/listings/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...practiceAreaPages, ...statePages, ...listingPages]
}
