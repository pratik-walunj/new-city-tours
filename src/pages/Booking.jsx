import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, BadgeCheck, Headphones } from 'lucide-react'
import PageBanner   from '../components/ui/PageBanner'
import BookingForm  from '../components/ui/BookingForm'
import Reveal       from '../components/ui/Reveal'
import { getBySlug } from '../data/packages'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function Booking() {
  const { slug } = useParams()
  const pkg = slug ? getBySlug(slug) : null

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <PageBanner
        image="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1400&q=85"
        kicker="Booking"
        title="Reserve Your Nepal Journey"
        sub="No payment now — submit the form, get a call to confirm details, then pay a small advance to lock your seats."
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-3 items-start">
          {/* Form */}
          <Reveal className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Booking Form</h2>
              <BookingForm presetSlug={slug} />
            </div>
          </Reveal>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 space-y-5">
            {/* Package preview */}
            {pkg && (
              <Reveal delay={80}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
                  <img
                    src={pkg.thumb || pkg.image}
                    alt={pkg.name}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-500">{pkg.type} Tour</p>
                    <h3 className="font-extrabold text-slate-900 text-lg mt-1">{pkg.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{pkg.destination}</p>
                    <p className="text-sm text-slate-500">{pkg.days} Days / {pkg.nights} Nights</p>
                    <p className="text-2xl font-extrabold text-cyan-800 mt-3">
                      ₹{pkg.price.toLocaleString('en-IN')}
                      <span className="text-xs font-medium text-slate-400"> / person</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Trust signals */}
            <Reveal delay={120}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-3 text-sm text-slate-600">
                <h4 className="font-bold text-slate-900">Why Book With Us</h4>
                {[
                  [Shield,     'Free cancellation up to 15 days'],
                  [BadgeCheck, 'Best price guarantee'],
                  [Headphones, '24x7 on-trip support'],
                ].map(([Icon, text]) => (
                  <p key={text} className="flex items-center gap-2.5">
                    <Icon size={16} className="text-emerald-500 shrink-0" />
                    {text}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* How it works */}
            <Reveal delay={160}>
              <div className="bg-cyan-50 rounded-2xl border border-cyan-100 p-6">
                <h4 className="font-bold text-slate-900 mb-4">How Booking Works</h4>
                <ol className="space-y-3 text-sm text-slate-600">
                  {[
                    ['1', 'Fill in the form & submit'],
                    ['2', 'Our planner calls within 4 hrs'],
                    ['3', 'Confirm dates & customise'],
                    ['4', 'Pay 20% advance online'],
                    ['5', 'Receive detailed itinerary'],
                  ].map(([step, text]) => (
                    <li key={step} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold grid place-items-center shrink-0">
                        {step}
                      </span>
                      {text}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </motion.div>
  )
}
