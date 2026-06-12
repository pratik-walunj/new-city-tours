import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Send, Check } from 'lucide-react'
import PageBanner   from '../components/ui/PageBanner'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal       from '../components/ui/Reveal'
import { destinations } from '../data/destinations'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dest: '', msg: '' })
  const [sent, setSent] = useState(false)
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100 transition-colors'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <PageBanner
        image="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&q=85"
        kicker="Contact Us"
        title="Talk to a Real Nepal Expert"
        sub="WhatsApp, call or write — a planner from our Kathmandu office replies within 4 working hours."
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Get in touch"
            title="We Are Here to Help"
            sub="Reach us by form, phone or WhatsApp — whichever works best for you."
          />

          <div className="grid gap-10 lg:grid-cols-3 items-start">
            {/* Contact Form */}
            <Reveal className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Send Us a Message</h2>
                {sent ? (
                  <div className="bg-emerald-50 text-emerald-700 rounded-2xl p-8 text-center">
                    <span className="w-14 h-14 rounded-full bg-emerald-500 text-white grid place-items-center mx-auto">
                      <Check size={28} />
                    </span>
                    <p className="font-extrabold text-lg mt-4">
                      Message sent, {form.name.split(' ')[0] || 'traveller'}!
                    </p>
                    <p className="text-sm mt-1.5 text-emerald-600">
                      Our team will reach out on {form.phone || form.email} within 4 working hours.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <label>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Your Name *</span>
                        <input value={form.name} onChange={upd('name')} placeholder="Full name" className={inputCls} />
                      </label>
                      <label>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email *</span>
                        <input value={form.email} onChange={upd('email')} type="email" placeholder="you@example.com" className={inputCls} />
                      </label>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <label>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone / WhatsApp</span>
                        <input value={form.phone} onChange={upd('phone')} placeholder="+91 …" className={inputCls} />
                      </label>
                      <label>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Destination of Interest</span>
                        <select value={form.dest} onChange={upd('dest')} className={inputCls + ' bg-white'}>
                          <option value="">Select a destination…</option>
                          {destinations.map((d) => (
                            <option key={d.name}>{d.name}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Message</span>
                      <textarea
                        value={form.msg}
                        onChange={upd('msg')}
                        rows={5}
                        placeholder="Tell us about your dates, group size and dream trip…"
                        className={inputCls + ' resize-none'}
                      />
                    </label>
                    <button
                      onClick={() => form.name && (form.email || form.phone) && setSent(true)}
                      className="px-7 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 transition-colors inline-flex items-center gap-2 w-fit"
                    >
                      <Send size={17} /> Send Message
                    </button>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Contact Info */}
            <div className="space-y-6">
              <Reveal delay={80}>
                <div className="bg-cyan-900 text-white rounded-2xl p-7 shadow-xl">
                  <h3 className="font-extrabold text-lg mb-5">Company Information</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex gap-3">
                      <MapPin size={17} className="text-orange-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="block text-cyan-100">Head Office</strong>
                        Tridevi Marg, Thamel,<br />Kathmandu 44600, Nepal
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Phone size={17} className="text-orange-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="block text-cyan-100">Phone</strong>
                        <a href="tel:+97798510 12345" className="hover:text-orange-300 transition-colors">
                          +91 99180 01088
                        </a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <MessageCircle size={17} className="text-orange-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="block text-cyan-100">WhatsApp (India)</strong>
                        <a href="https://wa.me/919918001088" className="hover:text-orange-300 transition-colors">
                          +91 99180 01088
                        </a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Mail size={17} className="text-orange-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="block text-cyan-100">Email</strong>
                        <a href="mailto:hello@newcitytours.com" className="hover:text-orange-300 transition-colors">
                          hello@newcitytours.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Map placeholder */}
              <Reveal delay={140}>
                <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md h-52 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=70"
                    alt="Kathmandu map"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-xl inline-flex items-center gap-2.5 text-sm font-bold text-slate-800">
                      <MapPin size={17} className="text-orange-500" />
                      Thamel, Kathmandu
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Office hours */}
              <Reveal delay={180}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Office Hours</h4>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    <li className="flex justify-between"><span>Monday – Saturday</span><span className="font-semibold">9 AM – 7 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span className="font-semibold">10 AM – 5 PM</span></li>
                    <li className="flex justify-between text-emerald-600"><span>WhatsApp Support</span><span className="font-semibold">24x7</span></li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
