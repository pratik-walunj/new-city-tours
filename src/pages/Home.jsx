import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Camera } from 'lucide-react'

import HeroSlider       from '../components/sections/HeroSlider'
import WhyChooseUs      from '../components/sections/WhyChooseUs'
import StatsCounter     from '../components/sections/StatsCounter'
import NewsletterSection from '../components/sections/NewsletterSection'
import PackageCard      from '../components/ui/PackageCard'
import TestimonialCard  from '../components/ui/TestimonialCard'
import SectionTitle     from '../components/ui/SectionTitle'
import Reveal           from '../components/ui/Reveal'

import { getFeatured }  from '../data/packages'
import { destinations } from '../data/destinations'
import { testimonials } from '../data/testimonials'
import { galleryItems } from '../data/gallery'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function Home() {
  const featured = getFeatured()

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      {/* Hero */}
      <HeroSlider />

      {/* Featured Packages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Hand-picked journeys"
            title="Featured Nepal Tour Packages"
            sub="Six signature itineraries our travellers book again and again — each one refined over a decade of departures."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} delay={i * 80} />
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-cyan-800 hover:bg-cyan-700 text-white font-bold transition-colors"
            >
              View All Packages <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Popular Destinations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Where to next"
            title="Popular Destinations"
            sub="From the heritage squares of the valley to rhino country in the Terai — pick your Nepal."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 6).map((dest, i) => (
              <Reveal key={dest.name} delay={i * 70}>
                <Link
                  to={`/packages?destination=${dest.name}`}
                  className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={dest.thumb || dest.image}
                    alt={dest.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-orange-300 text-xs font-bold uppercase tracking-widest">{dest.tag}</p>
                    <h3 className="text-white text-2xl font-extrabold">{dest.name}</h3>
                    <p className="text-cyan-100/0 group-hover:text-cyan-100/90 max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-500 text-sm mt-1">
                      {dest.desc.slice(0, 80)}…
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1400&q=60)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative max-w-7xl mx-auto px-4">
          <SectionTitle
            light
            kicker="Traveller stories"
            title="What Our Guests Say"
            sub="Over 5,000 journeys and counting — here is what real travellers have told us."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="From the road"
            title="Moments From Our Tours"
            sub="A glimpse of the mountains, temples and wild riverbanks our travellers wake up to."
          />
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {galleryItems.slice(0, 8).map((item, i) => (
              <Reveal key={item.id} delay={i * 50}>
                <Link to="/gallery" className="group relative block rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/50 transition-colors duration-300 grid place-items-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold inline-flex items-center gap-1.5">
                      <Camera size={14} /> {item.label}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors"
            >
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Newsletter */}
      <NewsletterSection />
    </motion.div>
  )
}
