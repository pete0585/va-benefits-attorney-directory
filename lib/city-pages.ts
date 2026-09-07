import { existsSync, readdirSync } from 'fs'
import { join } from 'path'

const CITY_PAGE_DIR = join(process.cwd(), 'app', 'va-attorneys')
const CITY_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*-[a-z]{2}$/

export function getSiteBaseUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://findvaattorney.com').replace(/\/$/, '')
}

export function getCityPageUrl(slug: string): string {
  return `${getSiteBaseUrl()}/va-attorneys/${slug}`
}

/** Discover static city routes from `app/va-attorneys/{city}-{state}/page.tsx`. */
export function getCityPageSlugs(): string[] {
  if (!existsSync(CITY_PAGE_DIR)) return []

  return readdirSync(CITY_PAGE_DIR, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isDirectory() || !CITY_SLUG_PATTERN.test(entry.name)) return false
      return existsSync(join(CITY_PAGE_DIR, entry.name, 'page.tsx'))
    })
    .map((entry) => entry.name)
    .sort()
}
