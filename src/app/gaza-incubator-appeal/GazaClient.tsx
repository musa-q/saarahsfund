'use client'
import { motion } from 'framer-motion'
import { gazaAppeal } from '@/content/site'

export default function GazaClient() {
  return (
    <div className="content section container-lg" data-page="gaza-incubator-appeal">
      <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="text-center mb-12">
          <div className="inline-block gradient-bg text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Urgent Appeal
          </div>
          <h1 className="page-title mb-3">{gazaAppeal.title}</h1>
          <div className="w-24 h-1 gradient-bg rounded mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">{gazaAppeal.summary}</p>
        </div>

        <div className="gradient-bg rounded-3xl p-8 md:p-10 text-white text-center mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold mb-3">Donate to the Gaza Appeal</h2>
          <p className="text-white/90 mb-6">Please donate and share the appeal to help us reach more babies.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {gazaAppeal.donationLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <section aria-labelledby="gaza-work" className="mb-12">
          <h2 id="gaza-work" className="section-title text-center mb-6">Our Work in Gaza</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-8">
            In 2024, Saarah's Fund provided 160 low-cost incubators for Gaza. Help us continue supporting newborn care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <img src="/images/gaza-1.jpg" alt="Healthcare workers with a newborn in a low-cost incubator in Gaza" className="w-full h-auto rounded-2xl shadow-lg" />
            <img src="/images/gaza-2.jpg" alt="Healthcare worker holding a newborn in a low-cost incubator in Gaza" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </section>

        <section aria-labelledby="gaza-video" className="card max-w-4xl mx-auto">
          <h2 id="gaza-video" className="text-2xl font-bold text-gray-800 mb-4">Watch Our Work in Gaza</h2>
          <video controls preload="none" aria-label="Gaza incubator project" className="w-full rounded-xl bg-gray-900">
            <source src="/videos/gaza-vid-1.mp4" type="video/mp4" />
          </video>
        </section>
      </motion.div>
    </div>
  )
}
