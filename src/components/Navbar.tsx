'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { directLinks, navigationGroups } from '@/content/navigation'

export default function Navbar() {
  const pathname = usePathname().replace(/\/$/, '') || '/'
  return <Navigation key={pathname} pathname={pathname} />
}

function Navigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const header = useRef<HTMLElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const closeGroups = () => header.current?.querySelectorAll('details').forEach(group => { group.open = false })
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setOpen(false)
        closeGroups()
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || document.querySelector('dialog[open]')) return
      const group = header.current?.querySelector<HTMLDetailsElement>('details[open]')
      if (group) {
        group.open = false
        group.querySelector('summary')?.focus()
      } else if (open) {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const breakpoint = matchMedia('(min-width: 1101px)')
    const reset = () => { setOpen(false); closeGroups() }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    breakpoint.addEventListener('change', reset)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
      breakpoint.removeEventListener('change', reset)
    }
  }, [open])

  return (
    <header className="site-header" ref={header}>
      <div className="header-inner">
        <Link className="brand" href="/">
          <Image src="/images/saarahsfundlogo5.png" alt="" width={45} height={45} priority />
          <span>Saarah’s Fund</span>
        </Link>
        <button ref={toggle} type="button" className="menu-toggle" aria-label="Menu" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
          Menu <span aria-hidden="true">☰</span>
        </button>
        <nav id="navigation" data-open={open} aria-label="Main navigation">
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
          {navigationGroups.map(group => (
            <details className="nav-group" key={group.label} onToggle={event => {
              const current = event.currentTarget
              if (current.open) header.current?.querySelectorAll('details').forEach(other => {
                if (other !== current) other.open = false
              })
            }}>
              <summary>{group.label}</summary>
              <div className="nav-dropdown">
                {group.links.map(item => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>)}
              </div>
            </details>
          ))}
          {directLinks.map(item => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>)}
        </nav>
        <Link href="/donate" className="button header-donate" aria-current={pathname === '/donate' ? 'page' : undefined}>Donate</Link>
      </div>
    </header>
  )
}
