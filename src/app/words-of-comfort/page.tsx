import type { Metadata } from 'next'
import WordsClient from './WordsClient'
export const metadata: Metadata = { title: 'Words of Comfort', description: 'A collection of comforting words and poems in memory of Saarah.' }
export default function Page() { return <WordsClient /> }
