import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Mountain, Phone, Mail, MessageCircle } from 'lucide-react'

const NAV_LINKS = [
  { to: '/',                 label: 'Home' },
  { to: '/about',            label: 'About' },
  { to: '/packages',        label: 'Packages' },
  { to: '/fixed-departure', label: 'Fixed Departure' },
  { to: '/destinations',    label: 'Destinations' },
  { to: '/gallery',         label: 'Gallery' },
  { to: '/blog',            label: 'Blog' },
  { to: '/contact',         label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome   = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  const solid = scrolled || !isHome

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top Bar */}
      <div
        className={`hidden md:block bg-slate-900 text-cyan-100 text-xs overflow-hidden transition-all duration-300 ${
          scrolled ? 'max-h-0' : 'max-h-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+97798510 12345" className="inline-flex items-center gap-1.5 hover:text-orange-300 transition-colors">
              <Phone size={12} /> +91 99180 01088
            </a>
            <a href="mailto:hello@newcitytours.com" className="inline-flex items-center gap-1.5 hover:text-orange-300 transition-colors">
              <Mail size={12} /> hello@newcitytours.com
            </a>
            <a href="https://wa.me/919918001088" className="inline-flex items-center gap-1.5 hover:text-orange-300 transition-colors">
              <MessageCircle size={12} /> WhatsApp: +91 99180 01088
            </a>
          </div>
          <span className="text-orange-300 font-semibold">
            Govt. Registered • 10+ Years in Nepal Tourism
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`transition-all duration-300 ${
          solid
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5'
            : 'bg-white/10 backdrop-blur-md border-b border-white/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-700 to-cyan-900 text-white grid place-items-center shadow-md">
              <Mountain size={20} />
            </span>
            <span className="leading-tight">
              <span className={`block font-extrabold tracking-tight transition-colors ${solid ? 'text-slate-900' : 'text-white'}`}>
                New City
              </span>
              <span className={`block text-xs font-bold tracking-widest uppercase transition-colors ${solid ? 'text-orange-500' : 'text-orange-300'}`}>
                Tours &amp; Travels
              </span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-orange-500'
                      : solid
                      ? 'text-slate-700 hover:text-cyan-800 hover:bg-cyan-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/booking"
              className="ml-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/30 transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={`lg:hidden p-2 rounded-lg transition-colors ${solid ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl">
            <div className="px-4 py-3 grid gap-1">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                      isActive ? 'bg-cyan-50 text-cyan-800' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/booking"
                className="mt-1 px-3 py-3 rounded-xl bg-orange-500 text-white font-bold text-center text-sm"
              >
                Book Now
              </Link>
              <div className="px-3 py-3 text-xs text-slate-500 border-t border-slate-100 mt-1 space-y-1.5">
                <p className="inline-flex items-center gap-1.5"><Phone size={12} /> +91 99180 01088</p>
                <p className="inline-flex items-center gap-1.5"><Mail size={12} /> hello@newcitytours.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
