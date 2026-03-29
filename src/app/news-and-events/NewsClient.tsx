'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slideshow from '@/components/Slideshow'

const events = [
  {
    title: 'Oxford Half Marathon',
    date: 'October 8, 2017',
    description: 'On sunday, 8th October I completed the Oxford Half Marathon, to raise funds for our new appeal - Incubators Without Borders - so that we can provide incubators for new born babies wherever they are most needed. For example, we received a request for more incubators, this time for a hospital in Sana, Yemen. We have raised over £1,500, which is an amazing response. Thank you so much for your generosity. Thank you. Talib (father of Saarah Ali.)',
    image: '/images/oxford-marathon-medal.jpg',
    images: ['/images/oxford-marathon-medal.jpg'],
  },
  {
    title: "Marco's Thames Path Challenge",
    date: 'September 9, 2017',
    description: "Our dear friend Marco DiMauro successfully completed the 100 km Thames Path Challenge, finishing in an impressive 17 hours, 45 minutes and 44 seconds, placing 173rd out of over 1,200 participants. Marco raised £995.43 (including gift aid) for Saarah's Fund.",
    image: '/images/tpc1.jpg',
    images: ['/images/tpc1.jpg', '/images/2017-09-09 204833-crop-u13044.jpg', '/images/2017-09-09-20134656-crop-u13017.jpg'],
  },
  {
    title: 'Mount Snowdon Climb Challenge',
    description: "Our heartfelt thanks to everyone who participated in the Mount Snowdon Climb Challenge, raising over £3,000 for Saarah's Fund.",
    image: '/images/img-20160703-wa0017.jpg',
    images: ['/images/img-20160703-wa0017.jpg', '/images/img-20160703-wa0013.jpg', '/images/img-20160703-wa0012.jpg', '/images/img-20160703-wa0010.jpg', '/images/img-20160703-wa0020.jpg', '/images/img-20160703-wa0022.jpg'],
  },
  {
    title: 'Play Train at JR Hospital',
    description: "We were proud to support local causes with the purchase of a Play Train at the John Radcliffe Hospital in Oxford, bringing joy to young patients.",
    image: '/images/01040008.jpg',
    images: ['/images/01040008.jpg', '/images/01040006.jpg', '/images/JRTrainImage1.jpg', '/images/JRTrainImage2.jpg', '/images/JRTrainImage3.jpg'],
  },
]

const fundraising = [
  { year: '2016', activity: 'Snowdon Climb', image: '/images/img-20160703-wa0010.jpg' },
  { year: '2017', activity: 'Oxford Half Marathon', image: '/images/oxford-marathon-medal.jpg' },
  { year: '2017', activity: 'Thames Path Challenge', image: '/images/2017-09-09 204833-crop-u13044.jpg' },
  { year: '2017', activity: 'Milton Keynes Festival of Running', image: '/images/mk-festival-of-running.jpeg' },
  { year: '2022', activity: 'Oxford Half Marathon', image: '/images/2022-oxford-marathon.jpeg' },
  { year: '2022', activity: 'Three Peaks Challenge', image: '/images/3-peaks.jpg' },
  { year: '2023', activity: 'Oxford Half Marathon', image: '/images/oxford-half-image.jpg' },
  { year: '2024', activity: 'Tom Ali, Manchester Marathon', image: '/images/manchester-marathon.jpg', link: 'https://www.justgiving.com/page/tom-ali' },
]

export default function NewsClient() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  return (
    <div className="section container-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="page-title text-center mb-2">News &amp; Events</h1>
        <div className="w-24 h-1 gradient-bg rounded mx-auto mb-12" />

        <div className="space-y-8 mb-20">
          {events.map((event, i) => (
            <motion.div key={event.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="card overflow-hidden p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden cursor-pointer group" onClick={() => setSelectedEvent(event)} style={{ minHeight: 240 }}>
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ minHeight: 240 }} onError={(e) => { (e.target as HTMLImageElement).src = '/images/heart.png'; }} />
                    {event.date && (
                      <span className="absolute top-4 left-4 gradient-bg text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        {event.date}
                      </span>
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm mb-6">{event.description}</p>
                    </div>
                    <button onClick={() => setSelectedEvent(event)} className="btn-primary self-start text-sm py-2 px-5 flex items-center gap-2">
                      View Gallery
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="section-title text-center mb-10">Fundraising Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {fundraising.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="card p-0 overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img src={item.image} alt={item.activity} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
                </div>
                <div className="p-4">
                  <span className="gradient-text font-bold text-sm">{item.year}</span>
                  <p className="text-gray-700 font-medium text-sm mt-1 mb-2">{item.activity}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#FF6B9C] hover:underline font-medium">
                      View Campaign →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{selectedEvent.title}</h3>
                <button onClick={() => setSelectedEvent(null)} className="p-2 rounded-full hover:bg-gray-100 transition-colors ml-4">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <Slideshow images={selectedEvent.images} className="h-64 md:h-80 mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm">{selectedEvent.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
