import { pageMetadata } from '@/lib/metadata'
import NewsClient from './NewsClient'
export const metadata = pageMetadata('/news-and-events/', 'News & Events', "Stay updated with the latest news and events from Saarah's Fund.")
export default function Page() { return <NewsClient /> }
