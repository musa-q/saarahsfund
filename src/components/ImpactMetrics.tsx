'use client'
import { motion } from 'framer-motion'

const metrics = [
  { number: '300+', label: 'Incubators Provided', description: 'Helping save newborn lives' },
  { number: '7,000+', label: 'Babies Helped', description: 'Life-saving care provided' },
  { number: '£175,000+', label: 'Funds Raised', description: 'Over 13 years of impact' },
]

export default function ImpactMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <div className="card text-center hover:shadow-xl">
            <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-2">{metric.number}</div>
            <div className="font-semibold text-gray-800 text-lg mb-1">{metric.label}</div>
            <div className="text-gray-500 text-sm">{metric.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
