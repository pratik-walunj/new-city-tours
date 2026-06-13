import React, { useState } from 'react'
import { motion } from 'framer-motion'
import cabandtaxi from '../images/cabandtaxi.png'
import {
  Car, MapPin, Clock, Phone, MessageCircle, Check,
  ChevronRight, Star, Shield, Headphones, BadgeCheck,
  Users, Route, Heart, Mountain, Plane, IndianRupee,
  Zap, ArrowRight, CheckCircle2,
} from 'lucide-react'

import PageBanner       from '../components/ui/PageBanner'
import SectionTitle     from '../components/ui/SectionTitle'
import Reveal           from '../components/ui/Reveal'
import CabCard          from '../components/ui/CabCard'
import CabBookingModal  from '../components/ui/CabBookingModal'

import { cabs, popularRoutes, cabServices, cabWhyUs } from '../data/cabs'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

// ── Icon map for dynamic service icons ──────────────────────────
const ICON_MAP = {
  Plane, MapPin, Mountain, Route, Heart, Users,
  Clock, Shield, BadgeCheck, IndianRupee, Star, Headphones, Car,
}

const fmt = (n) => (n ? '₹' + n.toLocaleString('en-IN') : null)

// ── Quick-book bar ───────────────────────────────────────────────
function QuickBookBar({ onSearch }) {
  const [from, setFrom]   = useState('')
  const [to,   setTo]     = useState('')
  const [date, setDate]   = useState('')
  const [pax,  setPax]    = useState(2)

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-5 shadow-2xl">
      <p className="text-white/90 text-xs font-bold uppercase tracking-widest mb-3 text-center">
        Quick Cab Search
      </p>
      <div className="grid gap-3 md:grid-cols-[1fr,1fr,1fr,auto,auto]">
        {/* From */}
        <label className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3">
          <MapPin size={17} className="text-cyan-700 shrink-0" />
          <span className="flex-1 min-w-0">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Pickup</span>
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From…"
              className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-300"
            />
          </span>
        </label>

        {/* To */}
        <label className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3">
          <MapPin size={17} className="text-orange-500 shrink-0" />
          <span className="flex-1 min-w-0">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Drop</span>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To…"
              className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-300"
            />
          </span>
        </label>

        {/* Date */}
        <label className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3">
          <Clock size={17} className="text-cyan-700 shrink-0" />
          <span className="flex-1 min-w-0">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Date</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none"
            />
          </span>
        </label>

        {/* Passengers */}
        <label className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 min-w-[100px]">
          <Users size={17} className="text-cyan-700 shrink-0" />
          <span className="flex-1 min-w-0">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Pax</span>
            <input
              type="number"
              value={pax}
              min={1}
              max={25}
              onChange={(e) => setPax(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none"
            />
          </span>
        </label>

        <button
          onClick={() => onSearch({ from, to, date, pax })}
          className="rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 inline-flex items-center justify-center gap-2 transition-colors"
        >
          <Car size={18} /> Search
        </button>
      </div>
    </div>
  )
}

// ── Route fare table ─────────────────────────────────────────────
function RoutesTable() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ minWidth: 680 }}>
          <thead>
            <tr className="bg-cyan-900 text-white">
              <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider text-left">Route</th>
              <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider text-left">Distance</th>
              <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider text-left">Time</th>
              <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider text-left">Sedan</th>
              <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider text-left">SUV / MPV</th>
              <th className="px-5 py-4 font-bold text-xs uppercase tracking-wider text-left">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {popularRoutes.map((r) => (
              <tr key={r.from + r.to} className="hover:bg-cyan-50/40 transition-colors">
                <td className="px-5 py-4">
                  <span className="font-semibold text-slate-900 block">{r.from}</span>
                  <span className="text-slate-400 text-xs inline-flex items-center gap-1 mt-0.5">
                    <ArrowRight size={11} /> {r.to}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600 whitespace-nowrap">{r.km} km</td>
                <td className="px-5 py-4 text-slate-600 whitespace-nowrap">{r.time}</td>
                <td className="px-5 py-4 font-bold text-slate-900 whitespace-nowrap">
                  {r.sedanFare ? fmt(r.sedanFare) : <span className="text-slate-300">—</span>}
                </td>
                <td className="px-5 py-4 font-bold text-slate-900 whitespace-nowrap">
                  {r.suvFare
                    ? fmt(r.suvFare)
                    : r.jeepFare
                    ? <span className="text-emerald-700 font-bold">{fmt(r.jeepFare)} Jeep</span>
                    : <span className="text-slate-300">—</span>}
                </td>
                <td className="px-5 py-4 text-slate-400 text-xs">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3.5 bg-slate-50 text-xs text-slate-500 border-t border-slate-100">
        * Fares are indicative one-way (base). Tolls, night surcharge (10 PM – 6 AM) and parking extra.
        Return trips get a 10% discount.
      </div>
    </div>
  )
}

// ── Inline booking form (bottom of page) ────────────────────────
function InlineBookingForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    from: '', to: '', date: '', time: '',
    cabType: '', passengers: 2, notes: '',
  })
  const [done, setDone] = useState(false)
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100 transition-colors'

  const submit = () => {
    if (form.name && form.phone && form.from && form.to) setDone(true)
  }

  if (done) {
    return (
      <div className="bg-emerald-50 text-emerald-700 rounded-2xl p-8 text-center">
        <span className="w-14 h-14 rounded-full bg-emerald-500 text-white grid place-items-center mx-auto">
          <Check size={28} />
        </span>
        <p className="font-extrabold text-lg mt-4">Booking Request Received!</p>
        <p className="text-sm mt-1.5 text-emerald-600">
          Our dispatch team will call <strong>{form.phone}</strong> within 30 minutes to confirm your cab.
        </p>
        <a
          href={`https://wa.me/919918001088?text=Hi%2C%20I%20need%20a%20cab%20from%20${encodeURIComponent(form.from)}%20to%20${encodeURIComponent(form.to)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors"
        >
          <MessageCircle size={16} /> Also WhatsApp Us
        </a>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name *</span>
          <input value={form.name} onChange={upd('name')} placeholder="Your name" className={inputCls} />
        </label>
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone / WhatsApp *</span>
          <input value={form.phone} onChange={upd('phone')} placeholder="+91 or +977 …" className={inputCls} />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Pickup Location *</span>
          <input value={form.from} onChange={upd('from')} placeholder="Hotel / Airport / Area" className={inputCls} />
        </label>
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Drop Location *</span>
          <input value={form.to} onChange={upd('to')} placeholder="Destination" className={inputCls} />
        </label>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Date</span>
          <input value={form.date} onChange={upd('date')} type="date" className={inputCls} />
        </label>
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Time</span>
          <input value={form.time} onChange={upd('time')} type="time" className={inputCls} />
        </label>
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Passengers</span>
          <input value={form.passengers} onChange={upd('passengers')} type="number" min="1" max="25" className={inputCls} />
        </label>
      </div>
      <label>
        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Preferred Cab Type</span>
        <select value={form.cabType} onChange={upd('cabType')} className={inputCls + ' bg-white'}>
          <option value="">Any / Best available</option>
          {cabs.map((c) => (
            <option key={c.id} value={c.name}>{c.name} ({c.category}, {c.seats} seats)</option>
          ))}
        </select>
      </label>
      <label>
        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Special Requests</span>
        <textarea
          value={form.notes}
          onChange={upd('notes')}
          rows={3}
          placeholder="Child seat, flower decoration, early morning pickup, return trip…"
          className={inputCls + ' resize-none'}
        />
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={submit}
          className="flex-1 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 transition-colors inline-flex items-center justify-center gap-2"
        >
          <Car size={18} /> Confirm Cab Booking
        </button>
        <a
          href="https://wa.me/919918001088"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors inline-flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} /> Book via WhatsApp
        </a>
      </div>
      <p className="text-xs text-center text-slate-400">
        No payment now. Our dispatch confirms within 30 minutes via call or WhatsApp.
      </p>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────
export default function TaxiCab() {
  const [activeModal, setActiveModal]   = useState(null)   // cab object or null
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchResult, setSearchResult] = useState(null)

  const categories = ['All', ...new Set(cabs.map((c) => c.category))]

  const filteredCabs = activeCategory === 'All'
    ? cabs
    : cabs.filter((c) => c.category === activeCategory)

  const handleSearch = ({ pax }) => {
    const n = parseInt(pax) || 1
    const suggested = cabs.filter((c) => c.seats >= n)
    setSearchResult(suggested)
    // scroll to fleet section
    document.getElementById('fleet-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const displayCabs = searchResult || filteredCabs

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {/* ── Banner ─────────────────────────────────────────────── */}
      <PageBanner
        image= {cabandtaxi}
        kicker="Taxi & Cab Services"
        title="Nepal Taxi & Cab Services"
        sub="Airport transfers, city rides, hill-station day trips and multi-day hired cars — all vehicles GPS-tracked with licensed drivers."
      />

      {/* ── Quick-book bar  ────────────────────────────────────── */}
      <section className="bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <QuickBookBar onSearch={handleSearch} />
          </Reveal>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="What we offer"
            title="Cab Services Across Nepal"
            sub="From a quick airport run to a 10-day cross-country hire — one call or WhatsApp covers it all."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cabServices.map(({ icon, title, desc }, i) => {
              const Icon = ICON_MAP[icon] || Car
              return (
                <Reveal key={title} delay={i * 60}>
                  <div className="group p-7 rounded-2xl bg-slate-50 hover:bg-cyan-800 border border-slate-100 hover:border-cyan-800 transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20">
                    <span className="w-12 h-12 rounded-xl bg-white text-cyan-800 group-hover:bg-orange-500 group-hover:text-white grid place-items-center shadow-sm transition-colors duration-300">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 font-bold text-lg text-slate-900 group-hover:text-white transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 group-hover:text-cyan-100/85 transition-colors leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Fleet section ─────────────────────────────────────── */}
      <section id="fleet-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Our fleet"
            title="Choose Your Cab"
            sub="Six vehicle types for every trip size and budget — from a quick city sedan to a luxury chauffeur SUV."
          />

          {/* Search result banner */}
          {searchResult && (
            <Reveal>
              <div className="mb-7 bg-cyan-50 border border-cyan-200 rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
                <p className="text-sm text-cyan-800 font-semibold">
                  Showing {searchResult.length} cab{searchResult.length !== 1 && 's'} with enough seats for your party
                </p>
                <button
                  onClick={() => setSearchResult(null)}
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-900 underline"
                >
                  Show all
                </button>
              </div>
            </Reveal>
          )}

          {/* Category filter */}
          {!searchResult && (
            <Reveal className="flex flex-wrap gap-2.5 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-cyan-800 text-white shadow-lg shadow-cyan-900/20'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-cyan-300 hover:text-cyan-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </Reveal>
          )}

          {/* Cab grid */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {displayCabs.map((cab, i) => (
              <CabCard
                key={cab.id}
                cab={cab}
                delay={i * 60}
                onBook={() => setActiveModal(cab)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Routes Fare Table ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Fare guide"
            title="Popular Routes & Indicative Fares"
            sub="Fixed pricing on all common Nepal routes — no meter surprises, no end-of-trip extras."
          />
          <Reveal>
            <RoutesTable />
          </Reveal>

          <Reveal delay={100} className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              ['10%',   'Return trip discount on all routes'],
              ['Free',  'Meet & greet at both airports'],
              ['24 hr', 'Advance booking recommended'],
            ].map(([val, label]) => (
              <div
                key={label}
                className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5 text-center"
              >
                <p className="text-3xl font-extrabold text-cyan-800">{val}</p>
                <p className="text-sm text-slate-600 mt-1.5 font-semibold">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Why Book section ───────────────────────────────────── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=40)',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-slate-950/90" />
        <div className="relative max-w-7xl mx-auto px-4">
          <SectionTitle
            light
            kicker="Why choose us"
            title="Nepal's Most Trusted Cab Service"
            sub="Every vehicle tracked. Every driver screened. Every fare fixed before you get in."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cabWhyUs.map(({ icon, title, desc }, i) => {
              const Icon = ICON_MAP[icon] || Check
              return (
                <Reveal key={title} delay={i * 60}>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-full">
                    <span className="w-11 h-11 rounded-xl bg-orange-500/20 text-orange-400 grid place-items-center">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-cyan-100/70 leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            kicker="Simple process"
            title="Book a Cab in 3 Steps"
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { step: '01', icon: Car,      title: 'Choose Your Cab',     desc: 'Pick vehicle type based on your group size, destination and comfort preference.' },
              { step: '02', icon: Phone,    title: 'Confirm via Call / WhatsApp', desc: 'Our dispatch team confirms availability, driver name and exact fare within 30 minutes.' },
              { step: '03', icon: MapPin,   title: 'Ride & Pay',          desc: 'Driver arrives on time. Pay the fixed agreed fare at the end — no surprises.' },
            ].map(({ step, icon: Icon, title, desc }, i) => (
              <Reveal key={step} delay={i * 100}>
                <div className="relative text-center p-7 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-extrabold grid place-items-center shadow-lg shadow-orange-500/30">
                    {step}
                  </span>
                  <span className="mt-4 w-14 h-14 rounded-2xl bg-cyan-800 text-white grid place-items-center mx-auto">
                    <Icon size={26} />
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials strip ─────────────────────────────────── */}
      <section className="py-16 bg-cyan-900">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-10">
            <p className="text-orange-300 text-xs font-bold uppercase tracking-widest mb-2">Passenger Reviews</p>
            <h2 className="text-2xl font-extrabold text-white">Rated 4.9 / 5 by 3,200+ Riders</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: 'Meena Joshi', from: 'Mumbai', text: 'Spotless Crysta, uniformed driver, exactly on time at 4 AM for Nagarkot sunrise. Absolutely flawless service.', rating: 5 },
              { name: 'Sunil Kapoor', from: 'Delhi', text: 'Booked a HiAce for 10 pilgrims to Muktinath road route. The driver knew every hairpin and stop. Highly recommended.', rating: 5 },
              { name: 'Ananya Pillai', from: 'Bengaluru', text: 'Airport pickup at midnight — driver was there before we were. Air-con, chilled water, clean seats. Exactly what you need after a long flight.', rating: 5 },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <Star key={s} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-cyan-50/90 text-sm leading-relaxed">"{r.text}"</p>
                  <p className="mt-4 text-white font-bold text-sm">{r.name}</p>
                  <p className="text-cyan-300/70 text-xs">{r.from}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking form ───────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr,380px] items-start">
            {/* Form */}
            <Reveal>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Book Your Cab Now</h2>
                <p className="text-slate-500 text-sm mb-7">
                  Fill in the details below and our dispatch team will confirm within 30 minutes.
                </p>
                <InlineBookingForm />
              </div>
            </Reveal>

            {/* Info sidebar */}
            <div className="space-y-5">
              {/* Contact card */}
              <Reveal delay={80}>
                <div className="bg-cyan-900 text-white rounded-2xl p-7 shadow-xl">
                  <h3 className="font-extrabold text-lg mb-5">Cab Dispatch Desk</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex gap-3">
                      <Phone size={17} className="text-orange-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="block text-cyan-100">24x7 Dispatch</strong>
                        <a href="tel:+9199180 01088" className="hover:text-orange-300 transition-colors">
                          +91 99180 01088
                        </a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <MessageCircle size={17} className="text-orange-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="block text-cyan-100">WhatsApp Booking</strong>
                        <a href="https://wa.me/919918001088" className="hover:text-orange-300 transition-colors">
                          +91 99180 01088
                        </a>
                      </span>
                    </li>
                  </ul>
                  <div className="mt-5 pt-5 border-t border-white/10 space-y-2 text-xs text-cyan-200/80">
                    <p className="flex items-center gap-2"><Zap size={13} className="text-orange-400" /> Confirmation in 30 minutes</p>
                    <p className="flex items-center gap-2"><Shield size={13} className="text-orange-400" /> Fixed fares, no surprises</p>
                    <p className="flex items-center gap-2"><CheckCircle2 size={13} className="text-orange-400" /> No payment until trip ends</p>
                  </div>
                </div>
              </Reveal>

              {/* Fleet quick-list */}
              <Reveal delay={120}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h4 className="font-bold text-slate-900 mb-4">Our Fleet at a Glance</h4>
                  <ul className="space-y-3">
                    {cabs.map((c) => (
                      <li key={c.id} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2.5">
                          <Car size={14} className="text-cyan-700 shrink-0" />
                          <span className="font-semibold text-slate-800">{c.name}</span>
                        </span>
                        <span className="text-slate-500 text-xs">
                          {c.seats} seats · from {fmt(c.minFare)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* FAQ quick */}
              <Reveal delay={160}>
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                  <h4 className="font-bold text-slate-900 mb-4">Quick FAQs</h4>
                  <ul className="space-y-3.5 text-sm">
                    {[
                      ['Are fares fixed?',          'Yes — the price confirmed on booking is final. No extras except tolls & parking.'],
                      ['Can I hire a cab for multiple days?', 'Absolutely — multi-day hire available. Same driver throughout for continuity.'],
                      ['What about late-night pickups?', 'We operate 24x7. Night surcharge (10 PM–6 AM) of ₹100–200 applies.'],
                      ['Do you cover Pokhara too?', 'Yes — we have cabs based in both Kathmandu and Pokhara. Outstation from either city.'],
                    ].map(([q, a]) => (
                      <li key={q}>
                        <p className="font-semibold text-slate-800">{q}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{a}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ──────────────────────────────────────────────── */}
      {activeModal && (
        <CabBookingModal
          cab={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </motion.div>
  )
}