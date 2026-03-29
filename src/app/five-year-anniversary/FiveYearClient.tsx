'use client'
import { motion } from 'framer-motion'
import Slideshow from '@/components/Slideshow'

const achievements = [
  { title: 'Medical Equipment Support', description: 'Provided vital medical equipment to hospitals and healthcare facilities, including life-saving incubators for premature babies.', image: '/images/iman hospital.jpg' },
  { title: 'Local Community Impact', description: 'Supported local initiatives including the Play Train at JR Hospital Oxford and equipment for Wheatley Integrated Nursery.', image: '/images/01040008.jpg' },
  { title: 'International Outreach', description: 'Extended our support internationally, making a significant impact in Syria through medical equipment donations.', image: '/images/the difference youre making.jpg' },
]

export default function FiveYearClient() {
  return (
    <div className="section container-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="page-title text-center mb-2">Five Years of Impact</h1>
        <div className="w-24 h-1 gradient-bg rounded mx-auto mb-12" />

        <div className="card mb-8 overflow-hidden p-0">
          <div className="h-1 gradient-bg" />
          <div className="p-6 md:p-8">
            <Slideshow images={['/images/iman hospital.jpg', '/images/the difference youre making.jpg', '/images/screen shot 2016-07-19 at 061806.jpg', '/images/screen shot 2016-07-19 at 061847.jpg']} className="h-64 mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">Five Years of Making a Difference</h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto leading-relaxed">
              Since our inception, Saarah's Fund has been dedicated to improving the lives of children through medical support and care initiatives. Your generous support has enabled us to make a lasting impact both locally and internationally.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div className="card hover:shadow-xl">
                <div className="h-44 overflow-hidden rounded-xl mb-4">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="gradient-bg rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Looking to the Future</h2>
          <p className="text-white/85 max-w-2xl mx-auto leading-relaxed mb-4">
            As we continue beyond our five-year milestone, we remain committed to our mission of supporting babies and children. The legacy of Saarah continues to inspire our work and drive positive change in children's lives.
          </p>
          <p className="text-white/85 max-w-2xl mx-auto leading-relaxed">
            We want to thank everyone who has supported us throughout this journey. Together, we look forward to helping many more children and families in the years to come.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
