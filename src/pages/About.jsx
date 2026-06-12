import React from 'react'
import { motion } from 'framer-motion'
import { Globe2, Sunrise, Award, BadgeCheck, Star } from 'lucide-react'
import PageBanner   from '../components/ui/PageBanner'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal       from '../components/ui/Reveal'
import WhyChooseUs  from '../components/sections/WhyChooseUs'

// const TEAM = [
//   {
//     name: 'Rajesh Shrestha',
//     role: 'Founder & Chief Explorer',
//     bio:  'Born in Bhaktapur, 22 Himalayan seasons on the road.',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
//   },
//   {
//     name: 'Anita Gurung',
//     role: 'Head of Operations',
//     bio:  'Keeps 40 departures a month running to the minute.',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
//   },
//   {
//     name: 'Vikram Joshi',
//     role: 'India Partnerships',
//     bio:  'Your first call in Pune, Mumbai or Delhi.',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
//   },
//   {
//     name: 'Pemba Sherpa',
//     role: 'Lead Mountain Guide',
//     bio:  'IFMGA certified, 9 times past Everest Base Camp.',
//     image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80',
//   },
// ]

const TIMELINE = [
  { year: '2016', title: 'Founded in Thamel',       desc: 'Two desks, one jeep and a promise: Nepal without middlemen.' },
  { year: '2018', title: '1,000th Traveller',        desc: 'Muktinath fixed departures launched for Indian pilgrims.' },
  { year: '2021', title: 'Rebuilt for Families',     desc: 'Custom family and senior-friendly circuits with medical support.' },
  { year: '2023', title: 'Nepal Tourism Award',      desc: 'Recognised for excellence in inbound pilgrimage tourism.' },
  { year: '2026', title: '5,000+ Guests',            desc: '250+ itineraries, offices in Kathmandu and Pokhara.' },
]

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <PageBanner
        image="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&q=85"
        kicker="About Us"
        title="A Decade of Showing Travellers Our Nepal"
        sub="New City Tours & Travels is a Kathmandu-born company run by guides, drivers and planners who grew up in the places you will visit."
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80"
              alt="Himalayan landscape"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Local Roots, Professional Standards</h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              We started in 2016 with a simple frustration: travellers were paying resellers for Nepal trips planned by people who had never crossed the border. So we built the opposite — a fully local team handling everything from airport pickup to the last prasad packet, at honest direct prices.
            </p>
            <p className="mt-3 text-slate-500 leading-relaxed">
              Today we run 250+ itineraries across Nepal with offices in Thamel, Pokhara Lakeside and partner contacts in Mumbai, Pune and Delhi. Every vehicle is ours. Every guide is salaried. Every hotel is inspected before we list it.
            </p>
            <div className="mt-7 grid sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-100">
                <Globe2 className="text-cyan-800" size={24} />
                <h3 className="font-bold text-slate-900 mt-3">Our Mission</h3>
                <p className="text-sm text-slate-500 mt-1.5">
                  Make every Nepal journey safe, seamless and deeply personal — at prices set by locals, not layers of agents.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
                <Sunrise className="text-orange-500" size={24} />
                <h3 className="font-bold text-slate-900 mt-3">Our Vision</h3>
                <p className="text-sm text-slate-500 mt-1.5">
                  To be South Asia's most trusted name for Himalayan pilgrimage and leisure travel by 2030.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Team */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="The people"
            title="Meet Our Team"
            sub="The faces behind 5,000 happy journeys."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 70}>
                <div className="group rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-500 mt-2">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=50)', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-slate-950/85" />
        <div className="relative max-w-4xl mx-auto px-4">
          <SectionTitle light kicker="Our journey" title="Milestones Along the Trail" />
          <div className="relative pl-8 border-l-2 border-cyan-700/50 space-y-10">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 80}>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/25" />
                  <p className="text-orange-400 font-extrabold text-xl">{item.year}</p>
                  <h3 className="text-white font-bold mt-1">{item.title}</h3>
                  <p className="text-cyan-100/70 text-sm mt-1">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Achievements */}
          <Reveal className="mt-14">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                [Award,      'Tourism Award 2023'],
                [BadgeCheck, 'Govt. Registered'],
                [Star,       '4.8★ on 1,800+ Reviews'],
              ].map(([Icon, label]) => (
                <div
                  key={label}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5"
                >
                  <Icon size={24} className="mx-auto text-orange-400" />
                  <p className="text-cyan-50 text-xs md:text-sm font-semibold mt-2">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}
