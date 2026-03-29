'use client'
import { motion } from 'framer-motion'
import Slideshow from '@/components/Slideshow'

const images = [
  '/images/sa8-crop-u4525.jpg',
  '/images/s5-crop-u2326.jpg',
  '/images/img_0884.jpg',
  '/images/sa6-crop-u4488.jpg',
  '/images/sa2.jpg',
  '/images/16012010184.jpg',
  '/images/02012010161.jpg',
  '/images/image029.jpg',
]

export default function AboutSaarahClient() {
  return (
    <div className="section container-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="page-title text-center mb-2">About Saarah</h1>
        <div className="w-24 h-1 gradient-bg rounded mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <Slideshow images={images} className="h-72 md:h-80" />
          </div>
          <div className="md:col-span-3">
            <div className="card border-l-4 border-l-[#FF6B9C]">
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                We have set up Saarah's Fund in memory of Saarah, our beautiful and beloved 4 year old daughter, who passed away completely unexpectedly in her sleep on the 11th of March 2011.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                She was truly a miracle: born 11 weeks early, weighing 3lb 3oz, she overcame meningitis twice before she finally came home after 3 months. Then aged 1 she had pneumonia and a serious secondary infection. Remarkably she bounced back and for the next 3 years she enjoyed good health. Unfortunately the meningitis left its mark: hearing loss in one ear, nystagmus (wobbly eyes), very low muscle tone and developmental delay. However, through her courage and determination, she was overcoming all these challenges and had blossomed into a fun loving and outgoing little girl. She brought us so much love and joy and was a source of inspiration to all who knew her.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
