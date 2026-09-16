import type { Metadata } from 'next'

export const siteUrl = 'https://www.saarahsfund.com'

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `${siteUrl}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: path === '/' ? title : `${title} | Saarah's Fund`,
      description,
      siteName: "Saarah's Fund",
    },
  }
}
