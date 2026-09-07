import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fbuqrnzofktepkzyfmhy.supabase.co',
      },
    ],
  },
  // Keep city page folders available when sitemap.ts reads the filesystem at runtime.
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./app/va-attorneys/**/*'],
  },
}

export default nextConfig
