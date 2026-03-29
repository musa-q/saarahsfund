'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ImpactMetrics from '@/components/ImpactMetrics'
import Slideshow from '@/components/Slideshow'

const slideshowImages = [
  '/images/sa8-crop-u4525.jpg',
  '/images/iman hospital.jpg',
  '/images/sa2.jpg',
  '/images/01040008.jpg',
  '/images/img_0884.jpg',
  '/images/the difference youre making.jpg',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                <span className="gradient-text">Saving Newborn Lives.</span>
                <br />
                <span className="text-gray-800">Changing Children's Futures.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We provide life-saving incubators for newborns and fund life-enhancing projects for sick children and those with special needs — powered by compassion, commitment and your invaluable support.
              </p>
              <p className="text-[#FF6B9C] font-semibold text-lg mb-8">
                Every donation matters — just £20 could help save a life.
              </p>
              <Link href="/donate" className="btn-primary">
                Donate Now
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <Slideshow images={slideshowImages} className="h-72 md:h-[420px] shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sudan Appeal Banner */}
      <section className="py-12">
        <div className="container-lg">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="gradient-bg rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
              <div className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Urgent Appeal
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sudan Incubator Appeal</h2>
              <p className="text-white/90 text-lg font-semibold mb-3">
                Every hour, a baby dies in Sudan due to inadequate healthcare.
              </p>
              <p className="text-white/85 max-w-2xl mx-auto leading-relaxed mb-3 text-base md:text-lg">
                Saarah's Fund is raising money to provide 50 low-cost incubators across Sudan — each incubator costs £400 and is expected to save around 24 newborns during the next 12 months.
              </p>
              <p className="text-white font-semibold text-lg mb-8">
                That's less than £20 to save a life. Even a small donation can make a huge difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
                <a href="https://wonderful.org/fundraisers/ndpqe" target="_blank" rel="noopener noreferrer" className="btn-white">
                  Support via Wonderful
                </a>
                <a href="https://www.paypal.com/GB/fundraiser/charity/3211295" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                  Donate via PayPal
                </a>
                <a href="https://www.gofundme.com/f/sudan-incubator-appeal" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                  Donate via GoFundMe
                </a>
                <a href="https://www.kindlink.com/fundraising/Saarah-s-Fund/sudan" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                  Donate via KindLink
                </a>
              </div>
              <p className="text-white/80 text-sm mt-5">Your donation is Zakat eligible. Please donate today and help give the gift of life.</p>
              <div className="mt-5">
                <Link href="/sudan-incubator-appeal" className="text-white/90 hover:text-white text-sm underline underline-offset-4 font-medium transition-colors">
                  To find out more about our Sudan work, please click here →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sudan Appeal Photo */}
      <section className="pb-12">
        <div className="container-lg">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="/images/sudan-training-1.jpeg"
              alt="Sudan incubator training — healthcare workers being trained on low-cost incubators"
              className="w-full rounded-3xl shadow-xl object-cover max-h-[480px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section">
        <div className="container-lg">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title text-center mb-12">
            Our Impact
          </motion.h2>
          <ImpactMetrics />
        </div>
      </section>

      {/* Videos */}
      <section className="section bg-white/50">
        <div className="container-lg">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title text-center mb-12">
            See Our Work in Action
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Gaza Project', subtitle: 'Watch our work in Gaza', src: '/videos/gaza-vid-1.mp4' },
              { title: 'Yemen Project', subtitle: 'Watch our work in Yemen', src: '/videos/yemen-vid-2.mp4' },
              { title: 'Embrace Global Partnership', subtitle: 'Our global impact story', src: '/videos/embraceglobal.mp4' },
            ].map((video, i) => (
              <motion.div key={video.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="card">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{video.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{video.subtitle}</p>
                  <video controls className="w-full rounded-xl bg-gray-900" style={{ height: '240px', objectFit: 'cover' }}>
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-lg">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="gradient-bg rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
              <p className="text-white/85 max-w-2xl mx-auto leading-relaxed mb-8 text-lg">
                Your generosity enables the delivery of critical care to newborn babies in some of the world's most challenging circumstances and supports sick children and those with special needs in the UK and overseas.
              </p>
              <a href="https://wonderful.org/pay?ref=1143322" target="_blank" rel="noopener noreferrer" className="btn-white">
                Donate Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
