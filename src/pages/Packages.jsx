import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Filter, Mountain, ChevronLeft, ChevronRight } from 'lucide-react'
import PageBanner   from '../components/ui/PageBanner'
import PackageCard  from '../components/ui/PackageCard'
import Reveal       from '../components/ui/Reveal'
import { packages } from '../data/packages'
import { destinations } from '../data/destinations'

const PER_PAGE   = 6
const TOUR_TYPES = ['Group', 'Family', 'Honeymoon', 'Pilgrimage', 'Wildlife', 'Adventure']

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function Packages() {
  const [searchParams] = useSearchParams()

  const [dest,  setDest]  = useState(searchParams.get('destination') || '')
  const [dur,   setDur]   = useState(searchParams.get('duration')    || '')
  const [price, setPrice] = useState('')
  const [type,  setType]  = useState('')
  const [page,  setPage]  = useState(1)

  const filtered = useMemo(() => {
    return packages.filter((p) => {
      if (dest  && !p.destination.toLowerCase().includes(dest.toLowerCase())) return false
      if (dur   === 'short' && p.days > 4)               return false
      if (dur   === 'mid'   && (p.days < 5 || p.days > 7)) return false
      if (dur   === 'long'  && p.days < 8)               return false
      if (price === 'lt20'  && p.price >= 20000)         return false
      if (price === '20to30'&& (p.price < 20000 || p.price > 30000)) return false
      if (price === 'gt30'  && p.price <= 30000)         return false
      if (type  && p.type !== type)                       return false
      return true
    })
  }, [dest, dur, price, type])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  const resetFilters = () => { setDest(''); setDur(''); setPrice(''); setType(''); setPage(1) }
  const onChange = (setter) => (e) => { setter(e.target.value); setPage(1) }

  const selectCls =
    'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 outline-none focus:border-cyan-700 transition-colors'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <PageBanner
        image="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1400&q=85"
        kicker="Tour Packages"
        title="Find Your Perfect Nepal Itinerary"
        sub="Filter by destination, length, budget and travel style — every package is fully customisable."
      />

      <section className="py-14 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">

          {/* Filter Bar */}
          <Reveal>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-5 flex flex-wrap gap-4 items-end -mt-20 relative z-10">
              <span className="hidden md:grid w-11 h-11 rounded-xl bg-cyan-800 text-white place-items-center shrink-0 self-end">
                <Filter size={20} />
              </span>

              <div className="flex-1 min-w-[140px]">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Destination
                </label>
                <select value={dest} onChange={onChange(setDest)} className={selectCls}>
                  <option value="">All destinations</option>
                  {destinations.map((d) => (
                    <option key={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1 min-w-[120px]">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Duration
                </label>
                <select value={dur} onChange={onChange(setDur)} className={selectCls}>
                  <option value="">Any</option>
                  <option value="short">Up to 4 days</option>
                  <option value="mid">5 – 7 days</option>
                  <option value="long">8+ days</option>
                </select>
              </div>

              <div className="flex-1 min-w-[140px]">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Price
                </label>
                <select value={price} onChange={onChange(setPrice)} className={selectCls}>
                  <option value="">Any budget</option>
                  <option value="lt20">Under ₹20,000</option>
                  <option value="20to30">₹20,000 – ₹30,000</option>
                  <option value="gt30">Above ₹30,000</option>
                </select>
              </div>

              <div className="flex-1 min-w-[130px]">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Tour Type
                </label>
                <select value={type} onChange={onChange(setType)} className={selectCls}>
                  <option value="">All types</option>
                  {TOUR_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={resetFilters}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:text-cyan-800 hover:bg-cyan-50 transition-colors self-end"
              >
                Reset
              </button>
            </div>
          </Reveal>

          {/* Results count */}
          <p className="mt-8 mb-5 text-sm text-slate-500 font-semibold">
            {filtered.length} package{filtered.length !== 1 && 's'} found
          </p>

          {/* Grid or empty state */}
          {filtered.length === 0 ? (
            <Reveal>
              <div className="bg-white rounded-2xl border border-slate-100 p-14 text-center">
                <Mountain size={38} className="mx-auto text-slate-300 mb-4" />
                <h3 className="font-bold text-slate-900 text-lg">No packages match these filters</h3>
                <p className="text-sm text-slate-500 mt-2">
                  Try widening the budget or duration — or ask us for a fully custom plan.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-cyan-800 text-white font-semibold text-sm hover:bg-cyan-700 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((pkg, i) => (
                <PackageCard key={pkg.slug} pkg={pkg} delay={i * 60} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 hover:border-cyan-700 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-colors ${
                    currentPage === i + 1
                      ? 'bg-cyan-800 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setPage(currentPage + 1)}
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 hover:border-cyan-700 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
