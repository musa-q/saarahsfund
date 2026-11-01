import { pageMetadata } from '@/lib/metadata'
import { gazaAppeal } from '@/content/site'
import GazaClient from './GazaClient'

export const metadata = pageMetadata(`${gazaAppeal.href}/`, gazaAppeal.title, gazaAppeal.summary)

export default function Page() {
  return <GazaClient />
}
