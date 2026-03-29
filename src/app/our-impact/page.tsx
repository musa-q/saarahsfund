import type { Metadata } from 'next'
import OurImpactClient from './OurImpactClient'
export const metadata: Metadata = { title: 'Our Impact', description: "Discover the impact of Saarah's Fund across the globe." }
export default function Page() { return <OurImpactClient /> }
