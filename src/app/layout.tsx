import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MotionProvider from '@/components/MotionProvider'
import { siteUrl } from '@/lib/metadata'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Saarah's Fund", template: "%s | Saarah's Fund" },
  description: "Saarah's Fund is a children's charity providing life-saving incubators for newborns and supporting sick children in the UK and overseas.",
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    url: 'https://www.saarahsfund.com',
    siteName: "Saarah's Fund",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
