'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slideshow from '@/components/Slideshow'

const locations = [
  { country: 'Gaza', flag: '🇵🇸', projects: ['160 low-cost incubators (2024)'], description: 'Providing critical care for newborns in challenging circumstances.', videos: ['/videos/gaza-vid-1.mp4'] },
  { country: 'Syria', flag: '🇸🇾', projects: ['1 conventional incubator at Imaan Hospital (2015)', '6 conventional incubators at Imaan Hospital (2016)', '50 low-cost incubators following earthquakes (2023)', '20 low-cost incubators (2025)'], description: 'Supporting hospitals with life-saving equipment. Our incubators now help 30 children per month.', image: '/images/iman hospital.jpg', videos: ['/videos/syria-vid-1.mp4'] },
  { country: 'Yemen', flag: '🇾🇪', projects: ['1 conventional incubator (2017)', '3 conventional incubators (2022)', '2 conventional incubators (2024)', '20 low-cost incubators (2024)', '10 low-cost incubators (2025)'], description: 'Ongoing support for medical facilities caring for vulnerable newborns.', videos: ['/videos/yemen-vid-1.mp4', '/videos/yemen-vid-2.mp4'] },
  { country: 'Senegal', flag: '🇸🇳', projects: ['11 low-cost incubators following Tivaouane fire (2022)'], description: 'Emergency response following the tragic fire at Tivaouane maternity hospital.', videos: [] },
  { country: 'Sudan', flag: '🇸🇩', projects: ['2 conventional incubators (2025)', '20 low-cost incubators (2025)'], description: 'Latest project to support newborn care in Sudan.', videos: [] },
  { country: 'DR Congo', flag: '🇨🇩', projects: ['10 low-cost incubators (2025)'], description: 'Supporting newborn care facilities in the DRC with low-cost incubator technology.', videos: [] },
  { country: 'Ethiopia', flag: '🇪🇹', projects: ['10 low-cost incubators (2025)'], description: 'Providing essential newborn care equipment to Ethiopian medical facilities.', videos: [] },
  { country: 'United Kingdom', flag: '🇬🇧', projects: ["Play Train at Oxford Children's Hospital (2015)", "Equipment for Wheatley Nursery School (2015, 2022)", "RDA Abingdon Indoor Arena contribution (2021)"], description: "Supporting local children with special needs and those attending hospital.", images: ['/images/01040008.jpg', '/images/01040006.jpg', '/images/JRTrainImage1.jpg', '/images/JRTrainImage2.jpg', '/images/JRTrainImage3.jpg'], videos: [] },
]

type Location = typeof locations[0]

export default function WhereWeWorkClient() {
  const [selected, setSelected] = useState<Location | null>(null)

  return (
    <div className="section container-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="page-title text-center mb-2">Where We Work</h1>
        <div className="w-24 h-1 gradient-bg rounded mx-auto mb-6" />
        <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-5 leading-relaxed">
          From the UK to conflict zones across the globe, Saarah's Fund reaches children who need support most.
        </p>
        <p className="text-gray-500 text-center text-sm mb-12">Click on a country to learn more about our projects and impact.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {locations.map((loc, i) => (
            <motion.div key={loc.country} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <button className="card w-full text-left hover:shadow-xl hover:border-pink-200 border border-transparent cursor-pointer group transition-all" onClick={() => setSelected(loc)}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{loc.flag}</span>
                  <h3 className="font-bold text-gray-800 text-xl group-hover:text-[#FF6B9C] transition-colors">{loc.country}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{loc.description}</p>
                <span className="text-xs text-[#FF6B9C] font-medium mt-3 inline-block">View projects →</span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selected.flag}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{selected.country}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              {selected.images && selected.images.length > 0 && (
                <Slideshow images={selected.images} className="h-56 mb-5" />
              )}
              {selected.videos && selected.videos.length > 0 && (
                <div className="space-y-3 mb-5">
                  {selected.videos.map((v, i) => (
                    <video key={i} controls className="w-full rounded-xl bg-gray-900" style={{ maxHeight: 280 }}>
                      <source src={v} type="video/mp4" />
                    </video>
                  ))}
                </div>
              )}

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Our Projects</h4>
                <ul className="space-y-2 mb-4">
                  {selected.projects.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#FF6B9C] mt-0.5 flex-shrink-0">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm leading-relaxed">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
