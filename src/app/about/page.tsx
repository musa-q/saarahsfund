import type { Metadata } from 'next'
import AboutPage from './AboutClient'
export const metadata: Metadata = { title: 'About Us', description: "Learn about Saarah's Fund, a children's charity supporting sick babies and children in the UK and overseas." }
export default function Page() { return <AboutPage /> }
