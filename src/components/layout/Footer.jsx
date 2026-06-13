// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Mountain, Phone, Mail, MessageCircle, MapPin, Heart, ChevronRight } from 'lucide-react'
// import { packages } from '../../data/packages'

// const QUICK = [
//   ['/about',            'About Us'],
//   ['/packages',        'Tour Packages'],
//   ['/fixed-departure', 'Fixed Departures'],
//   ['/destinations',    'Destinations'],
//   ['/gallery',         'Gallery'],
//   ['/blog',            'Travel Blog'],
//   ['/contact',         'Contact Us'],
// ]

// const SOCIALS = ['Facebook', 'Instagram', 'YouTube', 'Twitter']

// export default function Footer() {
//   const featured = packages.filter((p) => p.featured).slice(0, 5)
//   return (
//     <footer className="bg-slate-950 text-slate-300">
//       <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//         {/* Brand */}
//         <div>
//           <Link to="/" className="flex items-center gap-2.5 mb-5">
//             <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-900 text-white grid place-items-center">
//               <Mountain size={20} />
//             </span>
//             <span className="leading-tight">
//               <span className="block font-extrabold text-white">New City</span>
//               <span className="block text-xs font-bold tracking-widest uppercase text-orange-400">
//                 Tours &amp; Travels
//               </span>
//             </span>
//           </Link>
//           <p className="text-sm text-slate-400 leading-relaxed">
//             Crafting Nepal journeys since 2016 — pilgrimages, honeymoons, family holidays and high-altitude adventures, led by people who call the Himalaya home.
//           </p>
//           <div className="flex gap-2.5 mt-5">
//             {SOCIALS.map((s) => (
//               <button
//                 key={s}
//                 aria-label={s}
//                 className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange-500 grid place-items-center text-xs font-bold transition-colors"
//               >
//                 {s[0]}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-white font-bold mb-5">Quick Links</h4>
//           <ul className="space-y-2.5 text-sm">
//             {QUICK.map(([to, label]) => (
//               <li key={to}>
//                 <Link
//                   to={to}
//                   className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
//                 >
//                   <ChevronRight size={14} className="text-cyan-600" />
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Popular Tours */}
//         <div>
//           <h4 className="text-white font-bold mb-5">Popular Tours</h4>
//           <ul className="space-y-2.5 text-sm">
//             {featured.map((p) => (
//               <li key={p.slug}>
//                 <Link
//                   to={`/package/${p.slug}`}
//                   className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
//                 >
//                   <ChevronRight size={14} className="text-cyan-600" />
//                   {p.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="text-white font-bold mb-5">Contact</h4>
//           <ul className="space-y-3.5 text-sm">
//             <li className="flex gap-2.5">
//               <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
//               <span>Tridevi Marg, Thamel,<br />Kathmandu 44600, Nepal</span>
//             </li>
//             <li className="flex gap-2.5">
//               <Phone size={16} className="text-orange-400 shrink-0 mt-0.5" />
//               <a href="tel:+97798510 12345" className="hover:text-orange-400 transition-colors">
//                 +91 99180 01088
//               </a>
//             </li>
//             <li className="flex gap-2.5">
//               <MessageCircle size={16} className="text-orange-400 shrink-0 mt-0.5" />
//               <a href="https://wa.me/919918001088" className="hover:text-orange-400 transition-colors">
//                 WhatsApp: +91 99180 01088
//               </a>
//             </li>
//             <li className="flex gap-2.5">
//               <Mail size={16} className="text-orange-400 shrink-0 mt-0.5" />
//               <a href="mailto:hello@newcitytours.com" className="hover:text-orange-400 transition-colors">
//                 hello@newcitytours.com
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-4 py-5 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 justify-between items-center">
//           <span>© 2026 New City Tours &amp; Travels. All rights reserved.</span>
//           {/* <span className="flex items-center gap-1">
//             Nepal Tourism Board Licence No. 1845/072 • Made with
//             <Heart size={11} className="text-orange-500 fill-orange-500 mx-0.5" />
//             in the Himalaya
//           </span> */}
//         </div>
//       </div>
//     </footer>
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom'
import { Mountain, Phone, Mail, MessageCircle, MapPin, Heart, ChevronRight } from 'lucide-react'
import { packages } from '../../data/packages'

const QUICK = [
  ['/about',            'About Us'],
  ['/packages',        'Tour Packages'],
  ['/fixed-departure', 'Fixed Departures'],
  ['/destinations',    'Destinations'],
  ['/taxi-cab',        'Taxi & Cab Services'],
  ['/gallery',         'Gallery'],
  ['/blog',            'Travel Blog'],
  ['/contact',         'Contact Us'],
]

const SOCIALS = ['Facebook', 'Instagram', 'YouTube', 'Twitter']

export default function Footer() {
  const featured = packages.filter((p) => p.featured).slice(0, 5)
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-5">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-900 text-white grid place-items-center">
              <Mountain size={20} />
            </span>
            <span className="leading-tight">
              <span className="block font-extrabold text-white">New City</span>
              <span className="block text-xs font-bold tracking-widest uppercase text-orange-400">
                Tours &amp; Travels
              </span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Crafting Nepal journeys since 2016 — pilgrimages, honeymoons, family holidays and high-altitude adventures, led by people who call the Himalaya home.
          </p>
          <div className="flex gap-2.5 mt-5">
            {SOCIALS.map((s) => (
              <button
                key={s}
                aria-label={s}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange-500 grid place-items-center text-xs font-bold transition-colors"
              >
                {s[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {QUICK.map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
                >
                  <ChevronRight size={14} className="text-cyan-600" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Tours */}
        <div>
          <h4 className="text-white font-bold mb-5">Popular Tours</h4>
          <ul className="space-y-2.5 text-sm">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/package/${p.slug}`}
                  className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
                >
                  <ChevronRight size={14} className="text-cyan-600" />
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-5">Contact</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <span>Tridevi Marg, Thamel,<br />Kathmandu 44600, Nepal</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <a href="tel:+97798510 12345" className="hover:text-orange-400 transition-colors">
                +91 99180 01088
              </a>
            </li>
            <li className="flex gap-2.5">
              <MessageCircle size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <a href="https://wa.me/919918001088" className="hover:text-orange-400 transition-colors">
                WhatsApp: +91 99180 01088
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <a href="mailto:hello@newcitytours.com" className="hover:text-orange-400 transition-colors">
                hello@newcitytours.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 justify-between items-center">
          <span>© 2026 New City Tours &amp; Travels. All rights reserved.</span>
          {/* <span className="flex items-center gap-1">
            Nepal Tourism Board Licence No. 1845/072 • Made with
            <Heart size={11} className="text-orange-500 fill-orange-500 mx-0.5" />
            in the Himalaya
          </span> */}
        </div>
      </div>
    </footer>
  )
}
