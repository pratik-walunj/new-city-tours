import React from 'react'
import Reveal from './Reveal'

/**
 * Standard centred section header.
 * Props: kicker, title, sub, light (bool — white text variant)
 */
export default function SectionTitle({ kicker, title, sub, light = false }) {
  return (
    <Reveal className="max-w-2xl mx-auto text-center mb-12">
      {kicker && (
        <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${light ? 'text-orange-300' : 'text-orange-500'}`}>
          {kicker}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 leading-relaxed ${light ? 'text-cyan-100/80' : 'text-slate-500'}`}>
          {sub}
        </p>
      )}
    </Reveal>
  )
}
