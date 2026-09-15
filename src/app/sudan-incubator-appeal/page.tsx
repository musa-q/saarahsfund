import type { Metadata } from 'next'
import SudanClient from './SudanClient'
import { sudanUpdate } from '@/content/site'

export const metadata: Metadata = {
  title: 'Sudan Incubator Appeal',
  description: `${sudanUpdate.summary} ${sudanUpdate.appeal}`,
}

export default function Page() {
  return <SudanClient />
}
