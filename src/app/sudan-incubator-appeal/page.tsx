import type { Metadata } from 'next'
import SudanClient from './SudanClient'

export const metadata: Metadata = {
  title: 'Sudan Incubator Appeal',
  description: "Saarah's Fund is raising money to provide 50 low-cost incubators across Sudan. Each incubator costs £400 and is expected to save around 24 newborns in the next 12 months.",
}

export default function Page() {
  return <SudanClient />
}
