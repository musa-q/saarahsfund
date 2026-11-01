'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Modal from '@/components/Modal'
import { gazaAppeal } from '@/content/site'

const platforms = [
  { name: 'Wonderful.org', description: 'Support our campaigns through Wonderful.org. Choose specific projects to support.', link: 'https://wonderful.org/charities/1143322', icon: '/images/wonderful.svg' },
  { name: 'JustGiving', description: 'Donate through JustGiving, a trusted platform for charitable giving in the UK.', link: 'https://checkout.justgiving.com/gbr4stupkl', icon: '/images/heart.png' },
]

const campaigns = [
  { title: gazaAppeal.title, link: gazaAppeal.href },
  { title: 'Save Newborn Lives - Sudan Incubator Appeal', link: '/sudan-incubator-appeal' },
]

export default function DonateClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="content section container-lg" data-page="donate">
      <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="page-title text-center mb-2">Support Our Mission</h1>
        <div className="w-24 h-1 gradient-bg rounded mx-auto mb-12" />

        <div className="gradient-bg rounded-3xl p-8 text-white text-center mb-10">
          <p className="text-white/90 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Your generous support helps us provide vital medical equipment and care to children in need. Every contribution makes a lasting difference in a child's life.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <button onClick={() => setModalOpen(true)} className="btn-primary flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>
            View Active Campaigns
          </button>
        </div>

        <h2 className="section-title text-center mb-8">Choose How to Donate</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {platforms.map((platform, i) => (
            <motion.div key={platform.name} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="card flex flex-col h-full hover:shadow-xl">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img src={platform.icon} alt={platform.name} className="h-12 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <h3 className="font-bold text-gray-800 text-center text-lg mb-2">{platform.name}</h3>
                <p className="text-gray-500 text-sm text-center leading-relaxed mb-4 flex-1">{platform.description}</p>
                <a href={platform.link} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-6 w-full justify-center">
                  Donate Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="gradient-bg rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Other Ways to Help</h2>
          <p className="text-white/85 max-w-2xl mx-auto leading-relaxed text-base">
            Beyond donations, you can support our mission by spreading awareness, volunteering, or organising fundraising events. Contact us to learn more about how you can get involved.
          </p>
        </div>
      </motion.div>

      {/* Campaigns Modal */}
      {modalOpen && (
        <Modal label="Choose a Campaign to Support" onClose={() => setModalOpen(false)} className="bg-black/50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[90dvh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Choose a Campaign to Support</h3>
                <p className="text-gray-500 text-sm mt-1">Select from our current fundraising campaigns</p>
              </div>
              <button type="button" aria-label="Close dialog" autoFocus onClick={() => setModalOpen(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors ml-4 flex-shrink-0">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="space-y-3">
              {campaigns.map((campaign) => (
                <Link key={campaign.link} href={campaign.link} onClick={() => setModalOpen(false)}
                  className="block p-4 rounded-2xl bg-gray-50 hover:bg-pink-50 border border-gray-100 hover:border-pink-200 transition-colors group">
                  <span className="font-medium text-gray-800 group-hover:text-pink-600 transition-colors">{campaign.title}</span>
                  <span className="block text-xs text-gray-600 mt-1">View appeal and donation options →</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </Modal>
      )}
    </div>
  )
}
