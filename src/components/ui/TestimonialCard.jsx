import React from 'react'
import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'

export default function TestimonialCard({ testimonial, delay = 0 }) {
  const { name, from, package: pkg, rating, text, avatar } = testimonial
  return (
    <Reveal delay={delay}>
      <figure className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
        <Quote size={28} className="text-orange-400" />
        <blockquote className="mt-4 text-cyan-50/90 leading-relaxed text-sm">{text}</blockquote>
        <figcaption className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-700 to-orange-500 text-white text-sm font-extrabold grid place-items-center shrink-0">
              {avatar}
            </span>
            <div>
              <p className="font-bold text-white text-sm">{name}</p>
              <p className="text-xs text-cyan-200/70">{from} • {pkg}</p>
            </div>
          </div>
          <span className="flex gap-0.5 shrink-0">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
            ))}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  )
}
