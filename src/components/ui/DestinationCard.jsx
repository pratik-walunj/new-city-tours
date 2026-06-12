import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function DestinationCard({ dest, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={dest.thumb || dest.image}
            alt={dest.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {dest.tag}
          </span>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-extrabold text-slate-900">{dest.name}</h3>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed flex-1">{dest.desc}</p>

          {/* Best time badge */}
          <p className="mt-3 text-xs font-semibold text-emerald-700 bg-emerald-50 inline-flex px-2.5 py-1 rounded-full w-fit">
            Best: {dest.bestTime}
          </p>

          {/* Attractions */}
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            Popular Attractions
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {dest.attractions.map((a) => (
              <span
                key={a}
                className="text-xs font-semibold bg-cyan-50 text-cyan-800 px-3 py-1.5 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>

          <Link
            to={`/packages?destination=${dest.name}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors"
          >
            View tours <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </Reveal>
  )
}
