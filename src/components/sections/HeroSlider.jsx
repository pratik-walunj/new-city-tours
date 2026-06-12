import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Calendar, Search, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { destinations } from '../../data/destinations'
import Pokhara from "../../images/Pokhara.jpg";

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1600&q=85',
    title: 'Explore Beautiful Nepal With New City Tours & Travels',
    sub:   'Discover Kathmandu, Pokhara, Chitwan, Lumbini and Muktinath with expertly crafted Nepal tour packages.',
  },
  {
    image: Pokhara,
    title: 'Honeymoons Above the Clouds',
    sub:   'Private sunrises, lakeside dinners and the Annapurna range as your backdrop — Nepal designed for two.',
  },
  {
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1600&q=85',
    title: 'Muktinath Darshan, Done Right',
    sub:   'Fly the Kali Gandaki gorge to the temple of liberation at 3,710 m — with pooja, oxygen support and expert care.',
  },
]

export default function HeroSlider() {
  const [idx, setIdx]     = useState(0)
  const [dest, setDest]   = useState('')
  const [dur,  setDur]    = useState('')
  const [date, setDate]   = useState('')

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIdx((i) => (i + 1) % SLIDES.length)

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={SLIDES[idx].image}
            alt={SLIDES[idx].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-slate-950/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 w-full pt-36 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-orange-300" />
            Nepal Tour Specialists Since 2016
          </motion.span>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg"
            >
              {SLIDES[idx].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={'s' + idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-lg text-cyan-50/90 max-w-xl"
            >
              {SLIDES[idx].sub}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/booking"
              className="px-7 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-2xl shadow-orange-500/40 hover:scale-105 transition-all"
            >
              Book Now
            </Link>
            <Link
              to="/packages"
              className="px-7 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 text-white font-bold transition-all"
            >
              View Packages
            </Link>
          </motion.div>

          {/* Pagination dots */}
          <div className="flex gap-2 mt-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? 'w-8 bg-orange-400' : 'w-3 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-5 shadow-2xl grid gap-3 md:grid-cols-4">
            {/* Destination */}
            <label className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3">
              <MapPin size={18} className="text-cyan-700 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Destination</span>
                <select
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none"
                >
                  <option value="">Anywhere in Nepal</option>
                  {destinations.map((d) => (
                    <option key={d.name}>{d.name}</option>
                  ))}
                </select>
              </span>
            </label>

            {/* Duration */}
            <label className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3">
              <Clock size={18} className="text-cyan-700 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Duration</span>
                <select
                  value={dur}
                  onChange={(e) => setDur(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none"
                >
                  <option value="">Any length</option>
                  <option value="short">Up to 4 days</option>
                  <option value="mid">5 – 7 days</option>
                  <option value="long">8+ days</option>
                </select>
              </span>
            </label>

            {/* Date */}
            <label className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3">
              <Calendar size={18} className="text-cyan-700 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Travel Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none"
                />
              </span>
            </label>

            {/* Search button */}
            <Link
              to={`/packages${dest ? `?destination=${dest}` : ''}${dur ? `${dest ? '&' : '?'}duration=${dur}` : ''}`}
              className="rounded-2xl bg-cyan-800 hover:bg-cyan-700 text-white font-bold px-7 py-3 inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Search size={18} /> Search
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Prev / Next arrows */}
      <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white grid place-items-center transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white grid place-items-center transition-colors">
        <ChevronRight size={20} />
      </button>
    </section>
  )
}
