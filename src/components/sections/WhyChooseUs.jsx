import React from 'react'
import { BadgeCheck, Headphones, Compass, Shield, Sparkles, Users } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

const REASONS = [
  { Icon: BadgeCheck, title: 'Best Price Guarantee',    desc: 'Direct local rates with zero hidden costs — find it cheaper and we match it.' },
  { Icon: Headphones, title: '24x7 Support',            desc: 'A real human on call in Kathmandu and India, from booking to fly-home.' },
  { Icon: Compass,    title: 'Expert Local Guides',     desc: 'Licensed guides born in the valleys and villages you travel through.' },
  { Icon: Shield,     title: 'Secure Booking',          desc: 'Encrypted payments, instant confirmations and flexible cancellation.' },
  { Icon: Sparkles,   title: 'Custom Tour Plans',       desc: 'Every itinerary bends to your dates, pace, diet and darshan wishes.' },
  { Icon: Users,      title: 'Trusted By Thousands',    desc: '5,000+ travellers and a 4.8★ average across 1,800+ verified reviews.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          kicker="Why choose us"
          title="Travel With People Who Know Nepal"
          sub="Not a marketplace, not a reseller — our own team on the ground at every stop of your journey."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="group p-7 rounded-2xl bg-slate-50 hover:bg-cyan-800 border border-slate-100 hover:border-cyan-800 transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20">
                <span className="w-12 h-12 rounded-xl bg-white text-cyan-800 group-hover:bg-orange-500 group-hover:text-white grid place-items-center shadow-sm transition-colors duration-300">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 font-bold text-lg text-slate-900 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 group-hover:text-cyan-100/85 transition-colors leading-relaxed">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
