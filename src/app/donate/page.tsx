import type { Metadata } from 'next'
import DonateClient from './DonateClient'
export const metadata: Metadata = { title: 'Donate', description: "Support Saarah's Fund's mission by making a donation." }
export default function Page() { return <DonateClient /> }
