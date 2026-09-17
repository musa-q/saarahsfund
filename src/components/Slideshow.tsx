'use client'
import { useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
}

export default function Slideshow({ images, autoPlay = true, interval = 3000, className = '', objectFit = 'cover' }: SlideshowProps) {
  const [current, setCurrent] = useState(0)
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const reducedMotion = useSyncExternalStore(subscribeMotionPreference, getMotionPreference, getServerMotionPreference)
  const activeIndex = current < images.length ? current : 0
  const rotating = autoPlay && !focused && !hovered && !reducedMotion && images.length > 1

  const next = useCallback(() => setCurrent((i) => images.length ? (i + 1) % images.length : 0), [images.length])
  const prev = () => setCurrent((i) => images.length ? (i - 1 + images.length) % images.length : 0)

  useEffect(() => {
    if (!rotating) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [rotating, interval, next])

  if (!images.length) return null

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Photo gallery"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
      }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={images[activeIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
          className="w-full h-full"
        >
          <img
            src={images[activeIndex]}
            alt={`Gallery photo ${activeIndex + 1} of ${images.length}`}
            className={`w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button type="button" aria-label="Previous photo" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors z-10">
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button type="button" aria-label="Next photo" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors z-10">
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>
          <p className="sr-only" aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">Photo {activeIndex + 1} of {images.length}</p>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-wrap justify-center max-w-[80%] z-10">
            {images.map((_, i) => (
              <button
                type="button"
                key={i}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === activeIndex ? 'true' : undefined}
                onClick={() => setCurrent(i)}
                className="flex h-6 w-6 items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span className={`h-2 rounded-full shadow ${i === activeIndex ? 'bg-white w-4' : 'bg-white/70 w-2'}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
