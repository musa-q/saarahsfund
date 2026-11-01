import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/metadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/', '/about/', '/about-saarah/', '/contact-us/', '/donate/',
    '/five-year-anniversary/', '/news-and-events/', '/our-impact/',
    '/gaza-incubator-appeal/', '/sudan-incubator-appeal/', '/ten-year-anniversary/', '/useful-links/',
    '/where-we-work/', '/words-of-comfort/',
  ].map(path => ({ url: `${siteUrl}${path}` }))
}
