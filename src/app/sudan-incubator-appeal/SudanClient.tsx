'use client'
import { motion } from 'framer-motion'

const donationLinks = [
  { label: 'Donate via Wonderful', href: 'https://wonderful.org/fundraisers/ndpqe', style: 'btn-primary' },
  { label: 'Donate via PayPal', href: 'https://www.paypal.com/GB/fundraiser/charity/3211295', style: 'btn-outline-brand' },
  { label: 'Donate via GoFundMe', href: 'https://www.gofundme.com/f/sudan-incubator-appeal', style: 'btn-outline-brand' },
  { label: 'Donate via KindLink', href: 'https://www.kindlink.com/fundraising/Saarah-s-Fund/sudan', style: 'btn-outline-brand' },
]

const photos = [
  { src: '/images/sudan-baby-1.jpeg', alt: 'Newborn baby in an Embrace low-cost incubator in Sudan' },
  { src: '/images/sudan-training-1.jpeg', alt: 'Healthcare workers being trained on low-cost incubators in Sudan' },
  { src: '/images/sudan-training-2.jpeg', alt: 'Medical staff training session on incubator use in Sudan' },
  { src: '/images/sudan-training-3.jpeg', alt: 'Incubator training session with healthcare workers in Sudan' },
]

export default function SudanClient() {
  return (
    <div className="section container-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

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
            Saarah's Fund is raising money to provide 50 low-cost incubators across Sudan. Each incubator costs £400 and is expected to save around 24 newborns during the next 12 months.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Sudan is facing a devastating humanitarian crisis. Hospitals are overwhelmed, medical supplies are scarce, and newborn babies are dying from conditions that are entirely preventable with the right equipment. These low-cost incubators — developed by Embrace Global — are robust, easy to use, and can be operated without a constant power supply, making them ideal for use in Sudan's challenging conditions.
          </p>
          <p className="text-[#FF6B9C] font-semibold text-lg">
            That's less than £20 to save a life. Even a small donation can make a huge difference.
          </p>
        </div>

        {/* Donation buttons */}
        <div className="gradient-bg rounded-3xl p-8 md:p-10 text-white text-center mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold mb-2">Donate to the Sudan Appeal</h2>
          <p className="text-white/80 text-sm mb-6">Your donation is Zakat eligible. Please donate today and help give the gift of life.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {donationLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Photo grid */}
        <h2 className="section-title text-center mb-8">Our Work in Sudan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ maxHeight: '380px' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* What your money does */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { amount: '£20', impact: 'Could help save one newborn life' },
            { amount: '£100', impact: 'Contributes towards a full incubator' },
            { amount: '£400', impact: 'Funds one complete incubator — saving up to 24 babies a year' },
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
            <iframe
              src="/ramadan-mubarak.pdf"
              className="w-full"
              style={{ height: '600px' }}
              title="Ramadan Mubarak card from Embrace Global"
            />
          </div>
          <p className="text-center mt-3">
            <a
              href="/ramadan-mubarak.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#FF6B9C] hover:underline underline-offset-4 font-medium"
            >
              Open in full screen →
            </a>
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="gradient-bg rounded-3xl p-10 text-white text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-3">Please Donate Today</h2>
          <p className="text-white/85 max-w-xl mx-auto leading-relaxed mb-6">
            Every pound you give goes directly to providing life-saving equipment for babies in Sudan. Thank you for your generosity and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {donationLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  )
}
