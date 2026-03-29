'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full gradient-bg text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-t-3xl mt-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
        <div className="container-lg py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-3">Saarah's Fund</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                Making a difference in children's lives through your support. Every contribution helps us provide vital medical equipment and care to children in need.
              </p>
              <div className="flex gap-3">
                <a href="https://facebook.com/saarahsfund" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://linkedin.com/in/talibali1/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { text: 'Donate', href: '/donate' },
                  { text: 'About Saarah', href: '/about-saarah' },
                  { text: 'Our Impact', href: '/our-impact' },
                  { text: 'Where We Work', href: '/where-we-work' },
                  { text: 'Contact Us', href: '/contact-us' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Us</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                For inquiries and support, please don't hesitate to reach out.
              </p>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-center space-y-2">
            <p className="text-gray-500 text-sm">
              Hosted by{' '}
              <a href="https://www.kualo.com/free-charity-hosting" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors">
                Kualo Charity Web Hosting
              </a>
              {' '}- Kualo have been kind enough to include us in their free charity hosting project.
            </p>
            <p className="text-gray-500 text-sm">
              Saarah's Fund is registered with the UK Charities Commission. Charity Number:{' '}
              <a href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/?p_p_id=uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_regId=1143322&_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_subId=0"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors">
                1143322
              </a>
            </p>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Saarah's Fund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
