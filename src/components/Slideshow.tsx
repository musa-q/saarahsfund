'use client'

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import Modal from '@/components/Modal'

const motionPreference = '(prefers-reduced-motion: reduce)'
const subscribeMotionPreference = (onChange: () => void) => {
  const query = window.matchMedia(motionPreference)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}
const getMotionPreference = () => window.matchMedia(motionPreference).matches
const getServerMotionPreference = () => false

interface SlideshowProps {
  images: string[]
  autoPlay?: boolean
  interval?: number
  className?: string
  objectFit?: 'cover' | 'contain'
  label?: string
}

const photoDescriptions: Record<string, string> = {
  '/images/sudan-baby-1.jpeg': 'A newborn receiving care in an Embrace infant warmer in Sudan',
  '/images/sa8-crop-u4525.jpg': 'Saarah smiling outdoors in a green cardigan',
  '/images/iman hospital.jpg': 'Incubator care at Imaan Hospital in Syria',
  '/images/sa2.jpg': 'A family photograph of Saarah',
  '/images/img_0884.jpg': 'Saarah with her family',
  '/images/01040008.jpg': 'The play train at Oxford Children’s Hospital',
  '/images/the difference youre making.jpg': 'A project update showing the difference your support makes',
}

export default function Slideshow({ images, autoPlay = false, interval = 3000, className = '', objectFit = 'cover', label = 'Photo gallery' }: SlideshowProps) {
  const [current, setCurrent] = useState(0)
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const reducedMotion = useSyncExternalStore(subscribeMotionPreference, getMotionPreference, getServerMotionPreference)
  const activeIndex = current < images.length ? current : 0
  const rotating = autoPlay && !focused && !hovered && !lightbox && !reducedMotion && images.length > 1
  const advance = useCallback((step: number) => setCurrent(index => images.length ? (index + step + images.length) % images.length : 0), [images.length])

  useEffect(() => {
    if (!rotating) return
    const timer = setInterval(() => advance(1), interval)
    return () => clearInterval(timer)
  }, [rotating, interval, advance])

  if (!images.length) return null
  const alt = photoDescriptions[images[activeIndex]] || `${label} — photo ${activeIndex + 1} of ${images.length}`

  return (
    <>
      <div role="region" aria-roledescription="carousel" aria-label={label} className={`gallery ${className}`}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            advance(event.key === 'ArrowRight' ? 1 : -1)
          }
        }}>
        <a className="gallery-photo" href={images[activeIndex]} onClick={event => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
          event.preventDefault(); setLightbox(true)
        }}>
          <img src={images[activeIndex]} alt={alt} width={574} height={1020} decoding="async" style={{ objectFit }} />
        </a>
        {images.length > 1 && <div className="gallery-controls">
          <button type="button" aria-label="Previous photo" onClick={() => advance(-1)}>←</button>
          <span className="gallery-count" aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">{activeIndex + 1} / {images.length}</span>
          <button type="button" aria-label="Next photo" onClick={() => advance(1)}>→</button>
        </div>}
        <noscript><details><summary>See all {images.length} photos</summary>{images.map((src, i) => <a className="block" href={src} key={src}>Photo {i + 1}</a>)}</details></noscript>
      </div>
      {lightbox && <Modal label={alt} onClose={() => setLightbox(false)} className="photo-overlay">
        <div className="photo-modal">
          <button type="button" className="photo-close" aria-label="Close photograph" autoFocus onClick={() => setLightbox(false)}>Close ×</button>
          <img src={images[activeIndex]} alt={alt} />
          <p>{alt}</p>
        </div>
      </Modal>}
    </>
  )
}
