import type { Metadata } from 'next'
import ContactClient from './ContactClient'
export const metadata: Metadata = { title: 'Contact Us', description: "Get in touch with Saarah's Fund." }
export default function Page() { return <ContactClient /> }
