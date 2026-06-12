import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PageBanner  from '../components/ui/PageBanner'
import GalleryGrid from '../components/ui/GalleryGrid'
import Reveal      from '../components/ui/Reveal'
import { galleryItems, galleryCategories } from '../data/gallery'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.cat === active)

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <PageBanner
        image="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1400&q=85"
        kicker="Gallery"
        title="Postcards From the Trail"
        sub="Real moments from real departures — mountains, temples, rivers and the people in between."
      />

      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter tabs */}
          <Reveal className="flex flex-wrap justify-center gap-2.5 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  active === cat
                    ? 'bg-cyan-800 text-white shadow-lg shadow-cyan-900/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <GalleryGrid items={filtered} />
        </div>
      </section>
    </motion.div>
  )
}
