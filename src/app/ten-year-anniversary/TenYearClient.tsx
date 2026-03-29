'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const milestones = [
  { year: '2011', title: 'In Memory of Saarah', description: "Saarah passed away unexpectedly in her sleep on March 11th, 2011, inspiring the creation of our charity.", image: '/images/16012010184.jpg' },
  { year: '2015', title: 'First Major Projects', description: "Our first incubator at Imaan Hospital Syria and the Play Train at Oxford Children's Hospital.", image: '/images/iman hospital.jpg' },
  { year: '2021', title: 'Incubators4Yemen and RDA Abingdon Appeals', description: "In 2021 we launched our Incubators4Yemen Appeal and also our Riding for the Disabled Abingdon appeal for their new Indoor Arena.", image: '/images/yemen-2.jpg' },
  { year: '2024', title: 'Major Gaza Response', description: '160 incubators provided to Gaza, our largest single deployment, helping thousands of babies.', image: '/images/gaza-2.jpg' },
]

export default function TenYearClient() {
  return (
    <div className="section container-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="page-title text-center mb-2">10 Year Anniversary Appeal</h1>
        <div className="w-24 h-1 gradient-bg rounded mx-auto mb-6" />
        <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          In 2021, we marked 10 years since Saarah's passing. A decade of hope, healing, and helping children across the world.
        </p>

        <h2 className="section-title text-center mb-10">A Decade of Making a Difference</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
              <div className="card hover:shadow-xl">
                <div className="h-52 overflow-hidden rounded-xl mb-4">
                  <img src={m.image} alt={m.title} className="w-full h-full object-contain bg-gray-50 hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display='none'}} />
                </div>
                <span className="gradient-text font-extrabold text-2xl block mb-1">{m.year}</span>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="gradient-bg rounded-3xl p-10 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-8">By Our 10th Anniversary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '£100,000+', desc: 'Raised by 2021' },
              { stat: 'Multiple Countries', desc: 'UK, Syria, Yemen supported' },
              { stat: 'Thousands', desc: 'Of children helped' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-3xl font-extrabold mb-2">{item.stat}</div>
                <div className="text-white/80 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="section-title mb-3">Continue Saarah's Legacy</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
            Help us continue making a difference in children's lives. Every donation, no matter the size, contributes to saving lives and bringing hope to families in need.
          </p>
          <a href="https://wonderful.org/pay?ref=1143322" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Donate Now
          </a>
        </div>
      </motion.div>
    </div>
  )
}
