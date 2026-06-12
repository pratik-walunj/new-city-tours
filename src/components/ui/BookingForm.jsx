import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Ticket, MessageCircle } from 'lucide-react'
import { packages } from '../../data/packages'

const fmt = (n) => '₹' + n.toLocaleString('en-IN')

export default function BookingForm({ presetSlug }) {
  const preset = packages.find((p) => p.slug === presetSlug)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    adults: 2,
    children: 0,
    pkg: preset ? preset.name : '',
    msg: '',
  })
  const [done, setDone] = useState(false)

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100 transition-colors'

  const sel = packages.find((p) => p.name === form.pkg)
  const adults = Math.max(1, parseInt(form.adults) || 1)
  const children = Math.max(0, parseInt(form.children) || 0)
  const total = sel ? sel.price * adults + Math.round(sel.price * 0.7) * children : 0

  const submit = () => {
    if (form.name && (form.email || form.phone) && form.pkg) setDone(true)
  }

  if (done) {
    return (
      <div className="bg-emerald-50 text-emerald-700 rounded-2xl p-8 text-center">
        <span className="w-14 h-14 rounded-full bg-emerald-500 text-white grid place-items-center mx-auto">
          <Check size={28} />
        </span>
        <p className="font-extrabold text-lg mt-4">Booking request received!</p>
        <p className="text-sm mt-1.5 text-emerald-600">
          Reference NCT-{Math.floor(1000 + Math.random() * 9000)} — our planner will contact{' '}
          <strong>{form.phone || form.email}</strong> within 4 working hours to confirm{' '}
          <strong>{form.pkg}</strong>.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-2xl bg-cyan-800 hover:bg-cyan-700 text-white font-bold text-sm transition-colors"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name *</span>
          <input value={form.name} onChange={upd('name')} placeholder="As on passport / ID" className={inputCls} />
        </label>
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email *</span>
          <input value={form.email} onChange={upd('email')} type="email" placeholder="you@example.com" className={inputCls} />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone / WhatsApp *</span>
          <input value={form.phone} onChange={upd('phone')} placeholder="+91 …" className={inputCls} />
        </label>
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Travel Date</span>
          <input value={form.date} onChange={upd('date')} type="date" className={inputCls} />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Adults (12+)</span>
          <input value={form.adults} onChange={upd('adults')} type="number" min="1" className={inputCls} />
        </label>
        <label>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Children (5–11)</span>
          <input value={form.children} onChange={upd('children')} type="number" min="0" className={inputCls} />
        </label>
      </div>
      <label>
        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Package *</span>
        <select value={form.pkg} onChange={upd('pkg')} className={inputCls + ' bg-white'}>
          <option value="">Choose a package…</option>
          {packages.map((p) => (
            <option key={p.slug}>{p.name}</option>
          ))}
        </select>
      </label>
      <label>
        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Message (optional)</span>
        <textarea
          value={form.msg}
          onChange={upd('msg')}
          rows={4}
          placeholder="Hotel upgrades, dietary needs, senior travellers, special occasions…"
          className={inputCls + ' resize-none'}
        />
      </label>

      {/* Live price estimate */}
      {sel && (
        <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-4 text-sm space-y-1">
          <div className="flex justify-between text-slate-600">
            <span>Adults × {adults}</span>
            <span className="font-semibold">{fmt(sel.price * adults)}</span>
          </div>
          {children > 0 && (
            <div className="flex justify-between text-slate-600">
              <span>Children × {children} (30% off)</span>
              <span className="font-semibold">{fmt(Math.round(sel.price * 0.7) * children)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-cyan-200 mt-1">
            <span>Estimated Total</span>
            <span className="text-cyan-800 text-lg">{fmt(total)}</span>
          </div>
          <p className="text-xs text-slate-400">Final quote depends on hotel category & season. Advance to confirm: 20%.</p>
        </div>
      )}

      <button
        onClick={submit}
        className="w-full px-7 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 transition-colors inline-flex items-center justify-center gap-2"
      >
        <Ticket size={18} /> Submit Booking Request
      </button>
      <a
        href="https://wa.me/919918001088"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-7 py-3.5 rounded-2xl bg-green-50 hover:bg-green-100 text-green-700 font-bold transition-colors inline-flex items-center justify-center gap-2"
      >
        <MessageCircle size={18} /> WhatsApp Enquiry
      </a>
      <p className="text-xs text-center text-slate-400">
        Nothing is charged at this step. Free cancellation up to 15 days before departure.
      </p>
    </div>
  )
}
