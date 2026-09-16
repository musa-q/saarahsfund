import HomeClient from './HomeClient'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('/', "Saarah's Fund", "Saarah's Fund supports sick babies and children in the UK and overseas through incubators and other vital projects.")

export default function Page() { return <HomeClient /> }
