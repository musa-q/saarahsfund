import type { Metadata } from 'next'
import NewsClient from './NewsClient'
export const metadata: Metadata = { title: 'News & Events', description: "Stay updated with the latest news and events from Saarah's Fund." }
export default function Page() { return <NewsClient /> }
