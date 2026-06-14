import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://findvaattorney.com'),
  title: {
    default: 'Find VA-Accredited Attorneys | FindVAAttorney.com',
    template: '%s | FindVAAttorney.com',
  },
  description: 'Find VA-accredited attorneys for your disability claim, appeal, or rating increase. Search 5,000+ VA-accredited lawyers by state and practice area — free to search.',
  keywords: ['VA disability attorney', 'VA accredited attorney', 'veterans benefits lawyer', 'VA disability lawyer', 'TDIU attorney', 'veterans disability appeal attorney'],
  openGraph: {
    type: 'website',
    siteName: 'FindVAAttorney.com',
    title: 'Find VA-Accredited Attorneys | FindVAAttorney.com',
    description: 'Find VA-accredited attorneys for your disability claim, appeal, or rating increase.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://findvaattorney.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
