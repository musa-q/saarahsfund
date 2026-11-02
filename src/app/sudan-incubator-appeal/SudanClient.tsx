'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '@/components/Modal'
import { sudanUpdate, sudanDonationLinks } from '@/content/site'



const photos = [
  { src: '/images/sudan-baby-1.jpeg', alt: 'Newborn baby in an Embrace low-cost incubator in Sudan' },
  { src: '/images/sudan-training-1.jpeg', alt: 'Healthcare workers being trained on low-cost incubators in Sudan' },
  { src: '/images/sudan-training-2.jpeg', alt: 'Medical staff training session on incubator use in Sudan' },
  { src: '/images/sudan-training-3.jpeg', alt: 'Incubator training session with healthcare workers in Sudan' },
]

const dongolaPhotos = [
  { src: '/images/dongola-hospital.png', alt: "Collage of incubators and staff at Dongola Maternity Hospital, with a banner acknowledging Saarah's Fund", caption: 'Incubators installed at Dongola Maternity Hospital.' },
  { src: '/images/dongola-impact.jpeg', alt: 'Dongola impact summary: two operational incubators, 240 newborns reached and a 40% increase in neonatal care capacity', caption: 'Project impact reported in the May 2026 update.' },
]

export default function SudanClient() {
  const [lightbox, setLightbox] = useState<typeof photos[number] | null>(null)

  return (
    <div className="content section container-lg" data-page="sudan-incubator-appeal">
      <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block gradient-bg text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Urgent Appeal
          </div>
          <h1 className="page-title mb-3">Sudan Incubator Appeal</h1>
          <div className="w-24 h-1 gradient-bg rounded mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every hour, a baby dies in Sudan due to inadequate healthcare. Your donation can change that.
          </p>
        </div>

        {/* Appeal detail */}
        <div className="card border-l-4 border-l-[#FF6B9C] mb-10">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            {sudanUpdate.summary}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Sudan is facing a devastating humanitarian crisis. Hospitals are overwhelmed, medical supplies are scarce, and newborn babies are dying from conditions that are entirely preventable with the right equipment. These low-cost incubators, developed by Embrace Global, are robust, easy to use, and can be operated without a constant power supply, making them ideal for use in Sudan's challenging conditions.
          </p>
          <p className="text-[#a82258] font-semibold text-lg">
            {sudanUpdate.appeal}
          </p>
        </div>

        {/* Donation buttons */}
        <div className="gradient-bg rounded-3xl p-8 md:p-10 text-white text-center mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold mb-2">Donate to the Sudan Appeal</h2>
          <p className="text-white/80 text-sm mb-6">Your donation is Zakat eligible. Please donate today and help give the gift of life.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {sudanDonationLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <section aria-labelledby="dongola-heading" className="mb-12">
          <h2 id="dongola-heading" className="section-title mb-3">Dongola Maternity Hospital: incubators in use</h2>
          <p className="text-gray-600 text-sm mb-4">Update shared on 25 May 2026</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The two neonatal incubators funded by your donations in 2025 are installed and operational at Dongola Maternity Hospital. By this update, they had reached 240 newborns: 120 girls and 120 boys.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Neonatal care capacity increased by 40%.</li>
            <li>Emergency referrals for premature and critically ill newborns were reduced.</li>
            <li>Staff training strengthened local healthcare capacity.</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {dongolaPhotos.map((photo) => (
              <figure key={photo.src}>
                <button type="button" onClick={() => setLightbox(photo)} className="block w-full cursor-zoom-in" aria-label={`View full size: ${photo.alt}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-auto object-contain" />
                </button>
                <figcaption className="text-sm text-gray-600 mt-2">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Video update from the hospital</h3>
          <video controls playsInline preload="none" poster="/images/dongola-video-poster.jpg" aria-label="Dongola Maternity Hospital incubator feedback video" className="w-full aspect-video bg-black">
            <source src="/videos/dongola-hospital-feedback.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <p className="text-sm text-gray-600 mt-3">
            <a href="/videos/dongola-hospital-feedback.mp4" className="underline underline-offset-4">Open the hospital feedback video</a>
          </p>
        </section>

        {/* Photo grid */}
        <h2 className="section-title text-center mb-8">Our Work in Sudan</h2>
        <p className="text-gray-600 text-sm text-center mb-6">Click any photo to view full size</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setLightbox(photo)}
                className="w-full overflow-hidden rounded-2xl shadow-lg group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#FF6B9C] focus:ring-offset-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ maxHeight: '380px' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2.5">
                      <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* What your money does */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { amount: '£20', impact: 'Contributes towards newborn care equipment' },
            { amount: '£100', impact: 'Supports our incubator appeal' },
            { amount: '£400', impact: 'Helps provide incubators for babies in Sudan' },
          ].map((item) => (
            <div key={item.amount} className="card text-center">
              <div className="text-4xl font-extrabold gradient-text mb-2">{item.amount}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.impact}</p>
            </div>
          ))}
        </div>

        {/* Ramadan Mubarak Card */}
        <div className="mb-12">
          <h2 className="section-title text-center mb-3">Ramadan Mubarak</h2>
          <p className="text-gray-500 text-center text-sm mb-6">A message from our partners at Embrace Global</p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <a className="pdf-preview" href="/ramadan-mubarak.pdf"><img src="/images/ramadan-mubarak-preview.png" width={1051} height={1400} loading="lazy" decoding="async" alt="Ramadan Mubarak card from Embrace Global - open the original PDF" /></a>
          </div>
          <p className="text-center mt-3">
            <a
              href="/ramadan-mubarak.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a82258] hover:underline underline-offset-4 font-medium"
            >
              Open in full screen →
            </a>
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="gradient-bg rounded-3xl p-10 text-white text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-3">Please Donate Today</h2>
          <p className="text-white/85 max-w-xl mx-auto leading-relaxed mb-6">
            Your donation contributes towards vital equipment for babies in Sudan. Thank you for your generosity and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {sudanDonationLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </motion.div>

      {/* Lightbox */}
      {lightbox && (
        <Modal label={lightbox.alt} onClose={() => setLightbox(null)} className="bg-black/90 cursor-zoom-out">
          <button
            type="button"
            autoFocus
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </Modal>
      )}
    </div>
  )
}
