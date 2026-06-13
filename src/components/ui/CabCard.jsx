import React from 'react'
import { Users, Briefcase, Zap, CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const fmt = (n) => '₹' + n.toLocaleString('en-IN')

const BADGE_COLORS = {
  cyan:   'bg-cyan-100 text-cyan-800',
  orange: 'bg-orange-100 text-orange-700',
  emerald:'bg-emerald-100 text-emerald-800',
  violet: 'bg-violet-100 text-violet-800',
  amber:  'bg-amber-100 text-amber-800',
  rose:   'bg-rose-100 text-rose-700',
}

const RING_COLORS = {
  cyan:   'ring-cyan-200 hover:shadow-cyan-100',
  orange: 'ring-orange-200 hover:shadow-orange-100',
  emerald:'ring-emerald-200 hover:shadow-emerald-100',
  violet: 'ring-violet-200 hover:shadow-violet-100',
  amber:  'ring-amber-200 hover:shadow-amber-100',
  rose:   'ring-rose-200 hover:shadow-rose-100',
}

const BTN_COLORS = {
  cyan:   'bg-cyan-800 hover:bg-cyan-700',
  orange: 'bg-orange-500 hover:bg-orange-600',
  emerald:'bg-emerald-700 hover:bg-emerald-600',
  violet: 'bg-violet-700 hover:bg-violet-600',
  amber:  'bg-amber-600 hover:bg-amber-500',
  rose:   'bg-rose-600 hover:bg-rose-500',
}

export default function CabCard({ cab, delay = 0, onBook }) {
  const badgeCls = BADGE_COLORS[cab.color] || BADGE_COLORS.cyan
  const ringCls  = RING_COLORS[cab.color]  || RING_COLORS.cyan
  const btnCls   = BTN_COLORS[cab.color]   || BTN_COLORS.cyan

  return (
    <Reveal delay={delay}>
      <div
        className={`group bg-white rounded-2xl overflow-hidden shadow-md ring-1 ${ringCls} hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col`}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={cab.thumb || cab.image}
            alt={cab.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          {/* Badge */}
          {cab.badge && (
            <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${badgeCls}`}>
              {cab.badge}
            </span>
          )}
          {/* Category pill */}
          <span className="absolute top-3 right-3 bg-slate-900/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
            {cab.category}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-extrabold text-lg text-slate-900 leading-snug">{cab.name}</h3>

          {/* Specs row */}
          <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Users size={13} className="text-cyan-700" /> {cab.seats} seats
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase size={13} className="text-cyan-700" /> {cab.luggage}
            </span>
            {cab.ac && (
              <span className="inline-flex items-center gap-1.5">
                <Zap size={13} className="text-cyan-700" /> AC
              </span>
            )}
          </div>

          <p className="text-sm text-slate-500 mt-3 leading-relaxed flex-1">{cab.desc}</p>

          {/* Features */}
          <ul className="mt-3 grid grid-cols-2 gap-1">
            {cab.features.slice(0, 4).map((f) => (
              <li key={f} className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> {f}
              </li>
            ))}
          </ul>

          {/* Best for */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {cab.bestFor.map((b) => (
              <span key={b} className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-1 rounded-full">
                {b}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-400">Starting</p>
              <p className="text-lg font-extrabold text-slate-900">
                {fmt(cab.minFare)}
                <span className="text-xs font-medium text-slate-400"> / trip</span>
              </p>
              <p className="text-xs text-slate-400">{fmt(cab.pricePerKm)} / km</p>
            </div>
            <button
              onClick={() => onBook && onBook(cab)}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-colors ${btnCls}`}
            >
              Book Cab <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}