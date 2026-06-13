import React, { useState, useEffect } from 'react'
import { X, Check, MapPin, Calendar, Users, Phone, Mail, MessageCircle } from 'lucide-react'
import { popularRoutes } from '../../data/cabs'

const fmt = (n) => (n ? '₹' + n.toLocaleString('en-IN') : '—')

export default function CabBookingModal({ cab, onClose }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    from: '', to: '', date: '', time: '',
    passengers: 2, notes: '',
  })
  const [done, setDone] = useState(false)
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const inputCls =
    'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100 transition-colors bg-white'

  const submit = () => {
    if (form.name && form.phone && form.from && form.to) setDone(true)
  }

  return (
    <div
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ zIndex: 70 }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center transition-colors"
          >
            <X size={16} />
          </button>
          <p className="text-cyan-200 text-xs font-bold uppercase tracking-widest mb-1">Book Your Cab</p>
          <h2 className="text-xl font-extrabold">{cab.name}</h2>
          <p className="text-cyan-200 text-sm mt-1">
            {cab.seats} seats · {cab.category} · from ₹{cab.minFare.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {done ? (
            <div className="py-8 text-center">
              <span className="w-16 h-16 rounded-full bg-emerald-500 text-white grid place-items-center mx-auto">
                <Check size={32} />
              </span>
              <h3 className="font-extrabold text-slate-900 text-lg mt-4">Booking Request Sent!</h3>
              <p className="text-slate-500 text-sm mt-2">
                Hi <strong>{form.name.split(' ')[0]}</strong> — our dispatch team will WhatsApp{' '}
                <strong>{form.phone}</strong> within 30 minutes to confirm your{' '}
                <strong>{cab.name}</strong>.
              </p>
              <div className="mt-5 flex gap-3 justify-center">
                <a
                  href={`https://wa.me/919822012345?text=Hi%2C%20I%20booked%20${encodeURIComponent(cab.name)}%20from%20${encodeURIComponent(form.from)}%20to%20${encodeURIComponent(form.to)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Personal info */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Your Details</p>
                <div className="grid gap-3">
                  <div className="relative">
                    <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.name}
                      onChange={upd('name')}
                      placeholder="Full name *"
                      className={inputCls + ' pl-9'}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        value={form.phone}
                        onChange={upd('phone')}
                        placeholder="Phone / WhatsApp *"
                        className={inputCls + ' pl-9'}
                      />
                    </div>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        value={form.email}
                        onChange={upd('email')}
                        type="email"
                        placeholder="Email (optional)"
                        className={inputCls + ' pl-9'}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Trip info */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Trip Details</p>
                <div className="grid gap-3">
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.from}
                      onChange={upd('from')}
                      placeholder="Pickup location *"
                      className={inputCls + ' pl-9'}
                    />
                  </div>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.to}
                      onChange={upd('to')}
                      placeholder="Drop location *"
                      className={inputCls + ' pl-9'}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        value={form.date}
                        onChange={upd('date')}
                        type="date"
                        className={inputCls + ' pl-9'}
                      />
                    </div>
                    <input
                      value={form.time}
                      onChange={upd('time')}
                      type="time"
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <Users size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.passengers}
                      onChange={upd('passengers')}
                      type="number"
                      min="1"
                      max={cab.seats}
                      placeholder="Number of passengers"
                      className={inputCls + ' pl-9'}
                    />
                  </div>
                </div>
              </div>

              {/* Quick route picker */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Or choose a popular route
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularRoutes.slice(0, 4).map((r) => (
                    <button
                      key={r.from + r.to}
                      onClick={() => setForm({ ...form, from: r.from, to: r.to })}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800 hover:bg-cyan-100 transition-colors"
                    >
                      {r.from} → {r.to}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                value={form.notes}
                onChange={upd('notes')}
                placeholder="Any special requests — child seat, early morning, flower decoration…"
                rows={2}
                className={inputCls + ' resize-none'}
              />

              <button
                onClick={submit}
                className="w-full py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 transition-colors"
              >
                Confirm Booking Request
              </button>
              <p className="text-center text-xs text-slate-400">
                No payment now — our driver will confirm and collect on the day.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}