'use client'
import { motion } from 'framer-motion'
import ImpactMetrics from '@/components/ImpactMetrics'
import { charityTotals } from '@/content/site'

const timelineEvents = [
  { year: 2015, events: ["Funded 1 conventional incubator at the Imaan Hospital in Syria", "Installed a Play Train in Community Paediatrics at Oxford Children's Hospital", "Provided two bikes and a giant floor mirror for Wheatley Nursery School"] },
  { year: 2016, events: ["Funded 6 additional conventional incubators at the Imaan Hospital in Syria", "Successful Snowdon Climb fundraising event"] },
  { year: 2017, events: ["Funded 1 conventional incubator in Yemen", "Oxford Half Marathon fundraising event", "Thames Path Challenge", "Milton Keynes Festival of Running"] },
  { year: 2021, events: ["Contributed towards the Riding for the Disabled Indoor Arena at RDA Abingdon"] },
  { year: 2022, events: ["Funded 11 low-cost incubators in Senegal following the fire at the maternity hospital in Tivaouane in which 11 babies tragically lost their lives", "Funded 3 conventional incubators in Yemen", "Provided sensory toys for Wheatley Nursery School", "Oxford Half Marathon fundraising event", "Three Peaks Challenge"] },
  { year: 2023, events: ["Funded 50 low-cost incubators in Northern Syria following the devastating earthquakes in Syria and Turkiye in February 2023", "Oxford Half Marathon fundraising event"] },
  { year: 2024, events: ["Funded 20 low-cost incubators in Yemen", "Funded 160 low-cost incubators in Gaza", "Funded 2 conventional incubators in Yemen", "Tom Ali Manchester Marathon fundraising event"] },
  { year: 2025, events: ["Funded 2 conventional incubators in Sudan", "Funded 20 low-cost incubators in Syria"] },
]

const lowCostIncubatorProjects = [
  { period: '2022', location: 'Senegal', count: 11, detail: 'following the Tivaouane maternity hospital fire' },
  { period: '2023', location: 'Northern Syria', count: 50, detail: 'following the earthquakes in Syria and Turkiye' },
  { period: '2024', location: 'Yemen', count: 20 },
  { period: '2024', location: 'Gaza', count: 160 },
  { period: '2025', location: 'Syria', count: 20 },
  { period: '2025', location: 'Yemen', count: 10 },
  { period: '2025', location: 'DR Congo', count: 10 },
  { period: '2025', location: 'Ethiopia', count: 10 },
  { period: 'By May 2026', location: 'Sudan', count: 100, detail: 'including the 20 funded in 2025' },
  { location: 'Tanzania', count: 10 },
  { location: 'Zambia', count: 10 },
] as const

const lowCostIncubatorTotal = lowCostIncubatorProjects.reduce((total, project) => total + project.count, 0)

export default function OurImpactClient() {
  return (
    <div className="section container-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="page-title text-center mb-2">Our Impact</h1>
        <div className="w-24 h-1 gradient-bg rounded mx-auto mb-6" />
        <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Through your support, we've been able to make a significant difference in children's lives across multiple countries.
        </p>

        <div className="mb-16">
          <ImpactMetrics />
        </div>

        {/* Detailed Breakdown */}
        <h2 className="section-title text-center mb-4">Selected Historical Projects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          The low-cost incubator records below total 411 funded. Alongside our conventional incubators and UK projects, they show selected parts of our wider work rather than a complete breakdown of the charity-wide totals above.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="card border-l-4 border-l-[#FF6B9C]">
            <h3 className="text-xl font-bold text-[#a82258] text-center mb-5">{lowCostIncubatorTotal} Low-Cost Incubators Funded</h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              {lowCostIncubatorProjects.map((project) => (
                <p key={`${'period' in project ? project.period : 'undated'}-${project.location}`}>
                  {'period' in project ? <><strong>{project.period}:</strong>{' '}</> : null}
                  {project.count} in {project.location}
                  {'detail' in project ? `, ${project.detail}` : ''}
                </p>
              ))}
            </div>
            <p className="text-gray-500 text-xs italic text-center mt-4">Each low-cost incubator is used by an average of 2 babies each month</p>
          </div>
          <div className="card border-l-4 border-l-[#4EADFF]">
            <h3 className="text-xl font-bold text-[#165e9a] text-center mb-5">15 Conventional Incubators</h3>
            <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <p><strong>2015:</strong> 1 at the Imaan Hospital in Syria</p>
              <p><strong>2016:</strong> 6 at the Imaan Hospital in Syria</p>
              <p><strong>2017:</strong> 1 in Yemen</p>
              <p><strong>2022:</strong> 3 in Yemen</p>
              <p><strong>2024:</strong> 2 in Yemen</p>
              <p><strong>2025:</strong> 2 in Sudan</p>
            </div>
          </div>
        </div>
        <div className="card mb-16">
          <h3 className="text-xl font-bold text-gray-800 text-center mb-5">UK Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 leading-relaxed">
            <div>
              <p className="mb-2"><strong>2015:</strong> A Play Train in Community Paediatrics at the Oxford Children's Hospital</p>
              <p><strong>2015:</strong> Two bikes and a giant floor mirror for Wheatley Nursery School</p>
            </div>
            <div>
              <p className="mb-2"><strong>2021:</strong> Contribution towards the Riding for the Disabled Indoor Arena at RDA Abingdon</p>
              <p><strong>2022:</strong> Sensory toys for Wheatley Nursery School</p>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="gradient-bg rounded-3xl p-10 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-8">Key Impact Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: charityTotals.babiesHelped, desc: 'Babies helped across our work' },
              { stat: '360', desc: 'Children helped annually in Syria (30 per month)' },
              { stat: '24', desc: 'Lives saved annually per low-cost incubator' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-4xl font-extrabold mb-2">{item.stat}</div>
                <div className="text-white/80 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <h2 className="section-title text-center mb-10">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B9C] to-[#4EADFF]" />
          <div className="space-y-8">
            {timelineEvents.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className={`relative pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:ml-0 md:pr-12' : 'md:ml-[calc(50%+2rem)]'}`}>
                <div className="absolute left-2.5 md:left-auto md:right-auto top-4 w-3 h-3 rounded-full gradient-bg" style={i % 2 === 0 ? { right: 'auto', left: '8px' } : { left: '8px' }} />
                <div className="card">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{item.year}</h3>
                  <ul className="space-y-1">
                    {item.events.map((event, j) => (
                      <li key={j} className="text-gray-500 text-sm flex items-start gap-2">
                        <span className="text-[#a82258] mt-1 flex-shrink-0">•</span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="gradient-bg rounded-3xl p-10 text-white text-center mt-16">
          <h2 className="text-2xl font-bold mb-3">Join Us in Making a Difference</h2>
          <p className="text-white/85 max-w-2xl mx-auto leading-relaxed">
            Saarah's Fund is dedicated to improving the lives of sick babies and their families, both in the UK and overseas. Through your generous support, we continue to make a positive impact in the lives of children and families who need it most.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
