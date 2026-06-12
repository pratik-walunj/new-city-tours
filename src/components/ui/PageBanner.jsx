import React from 'react'
import { motion } from 'framer-motion'

/**
 * Full-width hero banner for inner pages.
 * Props: image, kicker, title, sub
 */
export default function PageBanner({ image, kicker, title, sub }) {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/75" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {kicker && (
            <p className="text-orange-300 text-xs font-bold tracking-widest uppercase mb-3">
              {kicker}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl leading-tight">
            {title}
          </h1>
          {sub && (
            <p className="mt-4 text-cyan-50/85 max-w-2xl text-lg leading-relaxed">{sub}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
