import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
