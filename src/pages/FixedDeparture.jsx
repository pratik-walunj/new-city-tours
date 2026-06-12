import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Check } from 'lucide-react'
import PageBanner from '../components/ui/PageBanner'
import Reveal     from '../components/ui/Reveal'
import { departures } from '../data/departures'
import { packages }   from '../data/packages'

const fmt = (n) => '₹' + n.toLocaleString('en-IN')

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function FixedDeparture() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', pkg: '' })
  const [sent, setSent] = useState(false)
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <PageBanner
        image="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1400&q=85"
        kicker="Fixed Departures"
        title="Guaranteed Group Departures, Every Month"
        sub="Set dates, set prices, escorted groups capped at 16 guests — just pick your month and pack."
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Table */}
          <Reveal>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ minWidth: 720 }}>
                  <thead>
                    <tr className="bg-cyan-900 text-white text-left">
                      {['Month', 'Package', 'Duration', 'Price / Person', 'Seats', ''].map((h) => (
                        <th key={h} className="px-5 py-4 font-bold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {departures.map((d) => (
                      <tr key={d.id} className="hover:bg-cyan-50/40 transition-colors">
                        <td className="px-5 py-4 font-semibold text-slate-800 whitespace-nowrap">{d.month}</td>
                        <td className="px-5 py-4">
                          <Link
                            to={`/package/${d.slug}`}
                            className="font-semibold text-cyan-800 hover:text-orange-500 transition-colors"
                          >
                            {d.pkg}
                          </Link>
                        </td>
                        <td className="px-5 py-4 text-slate-500 whitespace-nowrap">{d.duration}</td>
                        <td className="px-5 py-4 font-extrabold text-slate-900 whitespace-nowrap">{fmt(d.price)}</td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                              d.seats <= 5
                                ? 'bg-rose-50 text-rose-600'
                                : 'bg-emerald-50 text-emerald-600'
                            }`}
                          >
                            <Users size={12} />
                            {d.seats} {d.seats <= 5 ? 'left!' : 'seats'}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <Link
                            to={`/booking/${d.slug}`}
                            className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors whitespace-nowrap"
                          >
                            Book Now
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Bottom section */}
          <div className="mt-14 grid gap-10 lg:grid-cols-2 items-start">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-slate-900">Cannot Find Your Dates?</h2>
              <p className="mt-3 text-slate-500 leading-relaxed">
                We open new departures every season and run private versions of every group tour. Send an enquiry and our team will call you back within 4 working hours with options for your month.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Departures from Delhi, Mumbai, Pune & Gorakhpur',
                  'EMI options on tours above ₹25,000',
                  'Senior-citizen and family-friendly groups',
                  'Private departures on any date — min 2 persons',
                ].map((x) => (
                  <li key={x} className="flex gap-2.5 text-sm text-slate-600">
                    <Check size={17} className="text-emerald-500 shrink-0 mt-0.5" /> {x}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Enquiry form */}
            <Reveal delay={100}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-7">
                <h3 className="font-extrabold text-slate-900 text-lg">Departure Enquiry</h3>
                {sent ? (
                  <div className="mt-5 bg-emerald-50 text-emerald-700 rounded-2xl p-6 text-center">
                    <Check size={28} className="mx-auto" />
                    <p className="font-bold mt-2">Enquiry received!</p>
                    <p className="text-sm mt-1 text-emerald-600">
                      We will call {form.phone || form.email} shortly.
                    </p>
                  </div>
                ) : (
                  <div className="mt-5 grid gap-4">
                    <input
                      value={form.name}
                      onChange={upd('name')}
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-cyan-700"
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        value={form.email}
                        onChange={upd('email')}
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-cyan-700"
                      />
                      <input
                        value={form.phone}
                        onChange={upd('phone')}
                        placeholder="Phone / WhatsApp"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-cyan-700"
                      />
                    </div>
                    <select
                      value={form.pkg}
                      onChange={upd('pkg')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-cyan-700 bg-white"
                    >
                      <option value="">Interested package…</option>
                      {packages.map((p) => (
                        <option key={p.slug}>{p.name}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => form.name && (form.email || form.phone) && setSent(true)}
                      className="px-5 py-3.5 rounded-2xl bg-cyan-800 hover:bg-cyan-700 text-white font-bold transition-colors"
                    >
                      Send Enquiry
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
