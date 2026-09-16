import { pageMetadata } from '@/lib/metadata'
import SudanClient from './SudanClient'
import { sudanUpdate } from '@/content/site'

export const metadata = pageMetadata('/sudan-incubator-appeal/', 'Sudan Incubator Appeal', `${sudanUpdate.summary} ${sudanUpdate.appeal}`)

export default function Page() {
  return <SudanClient />
}
