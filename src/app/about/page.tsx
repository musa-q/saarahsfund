import { pageMetadata } from '@/lib/metadata'
import AboutPage from './AboutClient'
export const metadata = pageMetadata('/about/', 'About Us', "Learn about Saarah's Fund, a children's charity supporting sick babies and children in the UK and overseas.")
export default function Page() { return <AboutPage /> }
