import { pageMetadata } from '@/lib/metadata'
import WordsClient from './WordsClient'
export const metadata = pageMetadata('/words-of-comfort/', 'Words of Comfort', 'A collection of comforting words and poems in memory of Saarah.')
export default function Page() { return <WordsClient /> }
