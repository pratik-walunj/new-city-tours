import React, { useState } from 'react'
import { Send, Check } from 'lucide-react'
import Reveal from '../ui/Reveal'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [done, setDone]   = useState(false)

  const submit = () => {
    if (email.includes('@')) setDone(true)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <Reveal>
          <span className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 mb-5 mx-auto">
            <Send size={26} />
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Get Departure Alerts &amp; Deals
          </h2>
          <p className="mt-3 text-slate-500">
            One email a month — new fixed departures, seasonal offers and Nepal travel tips. No spam, ever.
          </p>

          {done ? (
            <p className="mt-7 inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-semibold px-6 py-3.5 rounded-2xl">
              <Check size={18} /> You are subscribed — see you in your inbox!
            </p>
          ) : (
            <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                placeholder="you@example.com"
                className="flex-1 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100 text-sm transition-colors"
              />
              <button
                onClick={submit}
                className="px-7 py-3.5 rounded-2xl bg-cyan-800 hover:bg-cyan-700 text-white font-bold transition-colors"
              >
                Subscribe
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
