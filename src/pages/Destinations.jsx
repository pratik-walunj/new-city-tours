import React from 'react'
import { motion } from 'framer-motion'
import PageBanner       from '../components/ui/PageBanner'
import DestinationCard  from '../components/ui/DestinationCard'
import SectionTitle     from '../components/ui/SectionTitle'
import { destinations } from '../data/destinations'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function Destinations() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <PageBanner
        image="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&q=85"
        kicker="Destinations"
        title="Seven Faces of Nepal"
        sub="Holy rivers, royal squares, rhino grasslands and a temple at 3,710 metres — choose where your story begins."
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Explore Nepal"
            title="Our Most-Loved Destinations"
            sub="From the heritage squares of the Kathmandu valley to the sacred grounds of Lumbini."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest, i) => (
              <DestinationCard key={dest.name} dest={dest} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
