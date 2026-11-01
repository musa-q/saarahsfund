import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('/useful-links/', 'Useful Links', "Find helpful resources and support organisations recommended by Saarah's Fund.")

const links = [
  { name: 'See Saw', url: 'https://seesaw.org.uk/', description: 'Support for children and young people dealing with grief.' },
  { name: 'SSNAP', url: 'https://www.ssnap.org.uk/', description: 'Support for the Newborn and their Parents.' },
  { name: 'The Abingdon Group', url: 'https://rda-abingdon.org.uk/', description: 'Riding for the Disabled Association - Abingdon Group.' },
  { name: 'The Lullaby Trust', url: 'https://www.lullabytrust.org.uk/', description: 'Supporting families affected by sudden infant death.' },
  { name: 'The Meningitis Research Foundation', url: 'https://www.meningitis.org/', description: 'Research and support for those affected by meningitis.' },
  { name: 'The Nystagmus Network', url: 'https://nystagmusnetwork.org/', description: 'Support for people affected by nystagmus.' },
]

export default function UsefulLinksPage() {
  return (
    <div className="content section container-lg" data-page="useful-links">
      <h1 className="page-title text-center mb-2">Useful Links</h1>
      <div className="w-24 h-1 gradient-bg rounded mx-auto mb-12" />

      <div className="gradient-bg rounded-3xl p-8 text-white text-center mb-10">
        <p className="text-white/90 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          Below are some useful links to charities and organisations that provide support and services for children and families.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {links.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
            className="card hover:shadow-xl border border-transparent hover:border-pink-200 group transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-[#a82258] transition-colors">{link.name}</h3>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-[#a82258] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{link.description}</p>
          </a>
        ))}
      </div>

      <div className="card text-center">
        <p className="text-gray-500 leading-relaxed text-sm">
          These organisations provide valuable support and resources for families. If you know of other helpful organisations that should be listed here, please let us know through our Contact page.
        </p>
      </div>
    </div>
  )
}
