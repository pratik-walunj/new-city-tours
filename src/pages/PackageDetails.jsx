import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MapPin, Clock, Star, Check, Minus, Sparkles, Hotel,
  ChevronLeft, ChevronRight, Ticket, MessageCircle,
  Shield, BadgeCheck, Headphones, Bus, UtensilsCrossed, Users,
} from 'lucide-react'
import PackageCard from '../components/ui/PackageCard'
import Reveal      from '../components/ui/Reveal'
import { getBySlug, getRelated } from '../data/packages'

const fmt = (n) => '₹' + n.toLocaleString('en-IN')

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

function CheckItem({ ok, children }) {
  return (
    <li className="flex gap-2.5 text-sm text-slate-600">
      <span
        className={`mt-0.5 shrink-0 w-5 h-5 rounded-full grid place-items-center ${
          ok ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-500'
        }`}
      >
        {ok ? <Check size={11} /> : <Minus size={11} />}
      </span>
      {children}
    </li>
  )
}

export default function PackageDetails() {
  const { slug }    = useParams()
  const pkg         = getBySlug(slug) || getBySlug('kathmandu-pokhara-tour')
  const related     = getRelated(slug, 3)
  const [faq, setFaq] = useState(0)
  const [tab, setTab] = useState('overview')

  const TABS = ['overview', 'itinerary', 'inclusions', 'hotels', 'gallery', 'faqs']

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      {/* Banner */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/25 to-slate-950/75" />
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal>
            <Link
              to="/packages"
              className="inline-flex items-center gap-1.5 text-cyan-100/80 hover:text-white text-sm font-semibold mb-5 transition-colors"
            >
              <ChevronLeft size={16} /> All Packages
            </Link>
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              {pkg.type} Tour
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
              {pkg.name}
            </h1>
            <div className="mt-4 flex flex-wrap gap-5 text-cyan-50/90 text-sm font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} /> {pkg.destination}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} /> {pkg.days} Days / {pkg.nights} Nights
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star size={15} className="fill-amber-400 text-amber-400" />
                {pkg.rating} ({pkg.reviews} reviews)
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Sticky tab bar */}
          <div className="flex gap-2 flex-wrap mb-8 bg-white rounded-2xl border border-slate-100 shadow-sm p-2 sticky top-16 z-20">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-colors ${
                  tab === t
                    ? 'bg-cyan-800 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-3 items-start">
            {/* Left — main content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview */}
              {tab === 'overview' && (
                <Reveal>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                    <h2 className="text-xl font-extrabold text-slate-900">Overview</h2>
                    <p className="mt-3 text-slate-600 leading-relaxed">{pkg.desc}</p>
                    <h3 className="mt-7 font-bold text-slate-900">Trip Highlights</h3>
                    <ul className="mt-3 grid sm:grid-cols-2 gap-2.5">
                      {pkg.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-slate-600">
                          <Sparkles size={15} className="text-orange-500 shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {/* Itinerary */}
              {tab === 'itinerary' && (
                <Reveal>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                    <h2 className="text-xl font-extrabold text-slate-900">Day-Wise Itinerary</h2>
                    <div className="mt-6 relative pl-7 border-l-2 border-cyan-100 space-y-7">
                      {pkg.itinerary.map((it) => (
                        <div key={it.day} className="relative">
                          <span className="absolute -left-[38px] top-0 w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold grid place-items-center ring-4 ring-cyan-50">
                            {it.day}
                          </span>
                          <h3 className="font-bold text-slate-900">Day {it.day} — {it.title}</h3>
                          <p className="text-sm text-slate-500 mt-1 leading-relaxed">{it.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Inclusions */}
              {tab === 'inclusions' && (
                <div className="grid md:grid-cols-2 gap-7">
                  <Reveal>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 h-full">
                      <h2 className="text-lg font-extrabold text-slate-900">Inclusions</h2>
                      <ul className="mt-4 space-y-2.5">
                        {pkg.inclusions.map((x) => <CheckItem key={x} ok>{x}</CheckItem>)}
                      </ul>
                    </div>
                  </Reveal>
                  <Reveal delay={80}>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 h-full">
                      <h2 className="text-lg font-extrabold text-slate-900">Exclusions</h2>
                      <ul className="mt-4 space-y-2.5">
                        {pkg.exclusions.map((x) => <CheckItem key={x}>{x}</CheckItem>)}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              )}

              {/* Hotels */}
              {tab === 'hotels' && (
                <Reveal>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                    <h2 className="text-lg font-extrabold text-slate-900 inline-flex items-center gap-2">
                      <Hotel size={20} className="text-cyan-800" /> Hotel Details
                    </h2>
                    <ul className="mt-4 space-y-2.5">
                      {pkg.hotels.map((h) => <CheckItem key={h} ok>{h}</CheckItem>)}
                    </ul>
                    <p className="mt-4 text-xs text-slate-400">
                      Hotels can be upgraded to 4★ / 5★ on request — ask for a revised quote.
                    </p>
                  </div>
                </Reveal>
              )}

              {/* Gallery */}
              {tab === 'gallery' && (
                <Reveal>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                    <h2 className="text-lg font-extrabold text-slate-900">Tour Gallery</h2>
                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[pkg.image, ...Array(5).fill(null)].map((src, i) => (
                        <img
                          key={i}
                          src={src || `https://images.unsplash.com/photo-${['1605640840605-14ac1855827b','1544735716-392fe2489ffa','1589182373726-e4f658ab50f0','1561731216-c3a4d99437d5','1533130061792-64b345e4a833'][i % 5]}?w=400&q=70`}
                          alt={`Gallery ${i + 1}`}
                          className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* FAQs */}
              {tab === 'faqs' && (
                <Reveal>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                    <h2 className="text-lg font-extrabold text-slate-900">Frequently Asked Questions</h2>
                    <div className="mt-4 divide-y divide-slate-100">
                      {pkg.faqs.map((f, i) => (
                        <div key={i} className="py-4">
                          <button
                            onClick={() => setFaq(faq === i ? -1 : i)}
                            className="w-full flex justify-between items-center gap-4 text-left"
                          >
                            <span className="font-semibold text-slate-800 text-sm">{f.q}</span>
                            <ChevronRight
                              size={18}
                              className={`shrink-0 text-cyan-800 transition-transform duration-300 ${faq === i ? 'rotate-90' : ''}`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              faq === i ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-sm text-slate-500 leading-relaxed">{f.a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-5">
              <Reveal delay={100}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
                  <div className="bg-cyan-900 text-white p-6">
                    <p className="text-cyan-200 text-xs font-bold uppercase tracking-wider">Starting from</p>
                    <p className="text-4xl font-extrabold mt-1">
                      {fmt(pkg.price)}
                      <span className="text-sm font-medium text-cyan-200"> / person</span>
                    </p>
                  </div>
                  <div className="p-6 space-y-3.5 text-sm">
                    {[
                      [Clock,          'Duration',   `${pkg.days} Days / ${pkg.nights} Nights`],
                      [MapPin,         'Destination', pkg.destination],
                      [Users,          'Tour Type',   `${pkg.type} Tour`],
                      [Bus,            'Transport',   'Private AC Vehicle'],
                      [UtensilsCrossed,'Meals',       'Breakfast Included'],
                    ].map(([Icon, label, val]) => (
                      <div key={label} className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 text-slate-500">
                          <Icon size={14} className="text-cyan-800" /> {label}
                        </span>
                        <span className="font-semibold text-slate-800 text-right text-xs">{val}</span>
                      </div>
                    ))}
                    <Link
                      to={`/booking/${pkg.slug}`}
                      className="w-full mt-3 px-5 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Ticket size={18} /> Book Now
                    </Link>
                    <a
                      href="https://wa.me/919918001088"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-5 py-3 rounded-2xl bg-green-50 hover:bg-green-100 text-green-700 font-bold transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} /> WhatsApp Enquiry
                    </a>
                    <p className="text-xs text-center text-slate-400 pt-1">
                      Free cancellation up to 15 days before departure
                    </p>
                  </div>
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                    {[[Shield, 'Best price guarantee'], [BadgeCheck, 'Govt. registered operator'], [Headphones, '24x7 on-trip support']].map(([Icon, l]) => (
                      <p key={l} className="flex items-center gap-2">
                        <Icon size={13} className="text-emerald-500" /> {l}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          {/* Related Tours */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-7">Related Tours</h2>
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r, i) => (
                  <PackageCard key={r.slug} pkg={r} delay={i * 70} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
