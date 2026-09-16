'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Donate', href: '/donate' },
  {
    label: 'About',
    submenu: [
      { label: 'About Us', href: '/about' },
      { label: 'About Saarah', href: '/about-saarah' },
      { label: 'Words of Comfort', href: '/words-of-comfort' },
    ],
  },
  {
    label: 'Our Work',
    submenu: [
      { label: 'Our Impact', href: '/our-impact' },
      { label: 'Where We Work', href: '/where-we-work' },
      { label: 'Sudan Incubator Appeal', href: '/sudan-incubator-appeal' },
      { label: 'News & Events', href: '/news-and-events' },
      { label: '5 Year Anniversary', href: '/five-year-anniversary' },
      { label: '10 Year Anniversary', href: '/ten-year-anniversary' },
    ],
  },
  { label: 'Useful Links', href: '/useful-links' },
  { label: 'Contact Us', href: '/contact-us' },
]

function DropdownMenu({ id, items, onClose }: { id: string; items: { label: string; href: string }[]; onClose: () => void }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 mt-2 w-52 glass rounded-2xl shadow-xl overflow-hidden z-50 py-2"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  )
}

export default function Navbar() {
  const pathname = usePathname().replace(/\/$/, '') || '/'
  return <Navigation key={pathname} pathname={pathname} />
}

function Navigation({ pathname }: { pathname: string }) {
  const headerRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const mobileTriggerRef = useRef<HTMLButtonElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const handleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  useEffect(() => {
    if (!openDropdown && !mobileOpen) return
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      if (mobileOpen) mobileTriggerRef.current?.focus()
      else triggerRef.current?.focus()
      setOpenDropdown(null)
      setMobileOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [openDropdown, mobileOpen])

  useEffect(() => {
    const breakpoint = window.matchMedia('(min-width: 1024px)')
    const closeMenus = () => {
      setOpenDropdown(null)
      setMobileOpen(false)
      setMobileExpanded(null)
    }
    breakpoint.addEventListener('change', closeMenus)
    return () => breakpoint.removeEventListener('change', closeMenus)
  }, [])

  return (
    <header ref={headerRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }} className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="container-lg">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/saarahsfundlogo5.png"
              alt="Saarah's Fund"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-extrabold text-xl gradient-text tracking-tight">
              Saarah's Fund
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="relative" onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenDropdown(null)
                }}>
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    aria-controls={`desktop-${item.label.replaceAll(' ', '-').toLowerCase()}`}
                    onClick={(event) => {
                      triggerRef.current = event.currentTarget
                      handleDropdown(item.label)
                    }}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      openDropdown === item.label ? 'bg-pink-50 text-pink-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                    <svg aria-hidden="true" className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <>
                    {openDropdown === item.label && (
                      <DropdownMenu id={`desktop-${item.label.replaceAll(' ', '-').toLowerCase()}`} items={item.submenu} onClose={() => setOpenDropdown(null)} />
                    )}
                  </>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href ? 'bg-pink-50 text-pink-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            ref={mobileTriggerRef}
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <nav id="mobile-navigation" aria-label="Main navigation" className="container-lg py-4 space-y-1 max-h-[calc(100dvh-4rem)] overflow-y-auto">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      aria-expanded={mobileExpanded === item.label}
                      aria-controls={`mobile-${item.label.replaceAll(' ', '-').toLowerCase()}`}
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      <span className="gradient-text">{item.label}</span>
                      <svg aria-hidden="true" className={`w-4 h-4 transition-transform text-gray-500 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <>
                      {mobileExpanded === item.label && (
                        <motion.div
                          id={`mobile-${item.label.replaceAll(' ', '-').toLowerCase()}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-1 space-y-1 overflow-hidden"
                        >
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-700"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                      pathname === item.href ? 'bg-pink-50 text-pink-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </>
    </header>
  )
}
