'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SlideshowProps {
  images: string[]
  autoPlay?: boolean
  interval?: number
  className?: string
  objectFit?: 'cover' | 'contain'
}

export default function Slideshow({ images, autoPlay = true, interval = 3000, className = '', objectFit = 'cover' }: SlideshowProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length])
  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length)

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, next, images.length])

  if (!images.length) return null

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className={`w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors z-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors z-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
