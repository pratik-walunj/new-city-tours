import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Star } from 'lucide-react'
import Reveal from './Reveal'

const fmt = (n) => '₹' + n.toLocaleString('en-IN')

export default function PackageCard({ pkg, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-200/80 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100 h-full flex flex-col">
        {/* Image */}
        <Link to={`/package/${pkg.slug}`} className="block overflow-hidden relative">
          <img
            src={pkg.thumb || pkg.image}
            alt={pkg.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {pkg.type} Tour
          </span>
          <span className="absolute bottom-3 right-3 bg-slate-900/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
            <Clock size={11} /> {pkg.days}D / {pkg.nights}N
          </span>
        </Link>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg text-slate-900 leading-snug">{pkg.name}</h3>
            <span className="inline-flex items-center gap-1 text-sm shrink-0">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-800">{pkg.rating}</span>
              <span className="text-slate-400 text-xs">({pkg.reviews})</span>
            </span>
          </div>

          <p className="text-sm text-slate-500 mt-1 inline-flex items-center gap-1">
            <MapPin size={13} className="text-cyan-700 shrink-0" />
            {pkg.destination}
          </p>

          <p className="text-sm text-slate-500 mt-3 line-clamp-2 flex-1">{pkg.desc}</p>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-400">Starting from</p>
              <p className="text-xl font-extrabold text-cyan-800">
                {fmt(pkg.price)}
                <span className="text-xs font-medium text-slate-400"> /person</span>
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/package/${pkg.slug}`}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-cyan-800 bg-cyan-50 hover:bg-cyan-100 transition-colors"
              >
                Details
              </Link>
              <Link
                to={`/booking/${pkg.slug}`}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
