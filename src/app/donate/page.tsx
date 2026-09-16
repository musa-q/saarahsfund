import { pageMetadata } from '@/lib/metadata'
import DonateClient from './DonateClient'
export const metadata = pageMetadata('/donate/', 'Donate', "Support Saarah's Fund's mission by making a donation.")
export default function Page() { return <DonateClient /> }
