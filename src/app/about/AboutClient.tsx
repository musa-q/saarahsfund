'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ImpactMetrics from '@/components/ImpactMetrics'

export default function AboutClient() {
  return (
    <div className="section container-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="page-title text-center mb-2">About Us</h1>
        <div className="w-24 h-1 gradient-bg rounded mx-auto mb-12" />

        <div className="card mb-8 border-l-4 border-l-[#FF6B9C]">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Saarah's Fund is a children's charity. We support sick babies and children, and children with special needs, both in the UK and overseas. We set up Saarah's Fund in memory of Saarah, our beautiful and beloved 4 year old daughter, who passed away completely unexpectedly in her sleep on the 11th of March 2011.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Through the generosity of family, friends and complete strangers alike, over the last 13 years, we have raised more than £175,000 for various causes. This includes over 300 incubators for hospitals in Gaza, Senegal, Syria and Yemen, an outdoor play train at the Oxford Children's Hospital, play equipment for the Wheatley Nursery, and a contribution towards the new indoor arena at RDA Abingdon, both of which Saarah used to attend.
          </p>
        </div>

        <div className="mb-12">
          <ImpactMetrics />
        </div>

        <div className="gradient-bg rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Support Our Mission</h2>
          <p className="text-white/85 mb-6 text-lg leading-relaxed">
            Help us continue providing vital support to children in need. Every donation makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wonderful.org/pay?ref=1143322" target="_blank" rel="noopener noreferrer" className="btn-white">
              Donate Now
            </a>
          </div>
          <p className="text-white/75 text-sm mt-5">
            Saarah's Fund is registered with the{' '}
            <a href="https://register-of-charities.charitycommission.gov.uk/en/constituency-search/-/charity-details/5020448/full-print" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              UK Charities Commission
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
