import { pageMetadata } from '@/lib/metadata'
import ContactClient from './ContactClient'
export const metadata = pageMetadata('/contact-us/', 'Contact Us', "Get in touch with Saarah's Fund.")
export default function Page() { return <ContactClient /> }
