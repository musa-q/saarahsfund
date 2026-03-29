import type { Metadata } from 'next'
import WhereWeWorkClient from './WhereWeWorkClient'
export const metadata: Metadata = { title: 'Where We Work', description: "Discover the global reach of Saarah's Fund." }
export default function Page() { return <WhereWeWorkClient /> }
