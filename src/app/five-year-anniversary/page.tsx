import type { Metadata } from 'next'
import FiveYearClient from './FiveYearClient'
export const metadata: Metadata = { title: 'Five Year Anniversary', description: "Celebrating five years of making a difference." }
export default function Page() { return <FiveYearClient /> }
