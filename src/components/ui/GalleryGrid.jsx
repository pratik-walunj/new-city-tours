import React, { useState } from 'react'
import { X, Camera } from 'lucide-react'
import Reveal from './Reveal'

export default function GalleryGrid({ items }) {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        {items.map((item, idx) => (
          <Reveal key={item.id} delay={(idx % 6) * 50} className="break-inside-avoid mb-5">
            <button
              onClick={() => setLightbox(item)}
              className="group relative block w-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={item.image}
                alt={item.label}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  item.tall ? 'h-72' : 'h-48'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-left">
                <p className="text-white text-sm font-bold">{item.label}</p>
                <p className="text-orange-300 text-xs font-semibold uppercase tracking-wider">{item.cat}</p>
              </div>
              <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={16} className="text-white drop-shadow" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 60 }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.label}
              className="w-full max-h-[75vh] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950/80 to-transparent rounded-b-3xl">
              <p className="text-white font-extrabold text-lg">{lightbox.label}</p>
              <p className="text-orange-300 text-xs font-bold uppercase tracking-wider">{lightbox.cat}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-white text-slate-900 grid place-items-center shadow-xl hover:scale-110 transition-transform"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
