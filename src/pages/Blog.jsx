import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import PageBanner   from '../components/ui/PageBanner'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal       from '../components/ui/Reveal'
import { blogs }    from '../data/blogs'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

export default function Blog() {
  const [featured, ...rest] = blogs

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      <PageBanner
        image="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1400&q=85"
        kicker="Travel Journal"
        title="Nepal, Written by People Who Live It"
        sub="Guides, season-watching and honest advice from our team on the ground."
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            kicker="Latest articles"
            title="Stories From the Himalaya"
            sub="Practical guides, destination deep-dives and travel inspiration from our team."
          />

          {/* Featured post */}
          <Reveal className="mb-10">
            <article className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 grid md:grid-cols-2">
              <div className="overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full w-fit mb-4">
                  {featured.category}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="mt-3 text-slate-500 leading-relaxed">{featured.excerpt}</p>
                <p className="mt-4 text-xs text-slate-400 flex gap-4">
                  <span className="inline-flex items-center gap-1.5"><Calendar size={12} />{featured.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={12} />{featured.readTime} min read</span>
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-orange-500 transition-colors w-fit">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          </Reveal>

          {/* Rest of posts */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {rest.map((blog, i) => (
              <Reveal key={blog.id} delay={i * 60}>
                <article className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">
                      {blog.category}
                    </span>
                    <h3 className="font-extrabold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug text-sm flex-1">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2">{blog.excerpt}</p>
                    <p className="mt-3 text-xs text-slate-400 flex gap-3">
                      <span className="inline-flex items-center gap-1"><Calendar size={11} />{blog.date}</span>
                      <span className="inline-flex items-center gap-1"><Clock size={11} />{blog.readTime} min</span>
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors">
                      Read more <ArrowRight size={13} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
