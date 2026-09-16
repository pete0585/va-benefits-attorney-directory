import {articles as editorialArticles} from '@/lib/editorial-blog'
import type { MetadataRoute } from 'next'
import { getCityPageSlugs } from '@/lib/city-pages'
import { getAllSlugs } from '@/lib/data'
import { PRACTICE_AREAS, STATE_NAMES } from '@/lib/utils'

export const revalidate = 86400

async function originalSitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://findvaattorney.com').replace(/\/$/, '')
  const slugs = await getAllSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/listings`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const cityPages: MetadataRoute.Sitemap = getCityPageSlugs().map((slug) => ({
    url: `${BASE}/va-attorneys/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const practiceAreaPages: MetadataRoute.Sitemap = Object.keys(PRACTICE_AREAS).map((slug) => ({
    url: `${BASE}/categories/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const statePages: MetadataRoute.Sitemap = Object.keys(STATE_NAMES).map((abbr) => ({
    url: `${BASE}/listings?state=${abbr}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const listingPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE}/listings/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...cityPages, ...practiceAreaPages, ...statePages, ...listingPages]
}

export default async function editorialSitemap():Promise<MetadataRoute.Sitemap>{const existing=await originalSitemap();const site="https://findvaattorney.com";return [...existing,{url:site+'/blog',changeFrequency:'weekly'},...editorialArticles().map(p=>({url:site+'/blog/'+p.slug,lastModified:new Date(p.date),changeFrequency:'monthly' as const}))]}
