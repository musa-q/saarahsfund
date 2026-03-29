import type { Metadata } from 'next'
import TenYearClient from './TenYearClient'
export const metadata: Metadata = { title: '10 Year Anniversary Appeal', description: "Celebrating 10 years of Saarah's Fund." }
export default function Page() { return <TenYearClient /> }
