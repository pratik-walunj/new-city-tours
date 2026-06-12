import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar      from './components/layout/Navbar'
import Footer      from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import WhatsAppBtn from './components/layout/WhatsAppBtn'
import PageLoader  from './components/ui/PageLoader'

const Home           = lazy(() => import('./pages/Home'))
const About          = lazy(() => import('./pages/About'))
const Packages       = lazy(() => import('./pages/Packages'))
const PackageDetails = lazy(() => import('./pages/PackageDetails'))
const FixedDeparture = lazy(() => import('./pages/FixedDeparture'))
const Destinations   = lazy(() => import('./pages/Destinations'))
const Gallery        = lazy(() => import('./pages/Gallery'))
const Blog           = lazy(() => import('./pages/Blog'))
const Contact        = lazy(() => import('./pages/Contact'))
const Booking        = lazy(() => import('./pages/Booking'))

export default function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                   element={<Home />} />
            <Route path="/about"              element={<About />} />
            <Route path="/packages"           element={<Packages />} />
            <Route path="/package/:slug"      element={<PackageDetails />} />
            <Route path="/fixed-departure"    element={<FixedDeparture />} />
            <Route path="/destinations"       element={<Destinations />} />
            <Route path="/gallery"            element={<Gallery />} />
            <Route path="/blog"               element={<Blog />} />
            <Route path="/contact"            element={<Contact />} />
            <Route path="/booking"            element={<Booking />} />
            <Route path="/booking/:slug"      element={<Booking />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <ScrollToTop />
      <WhatsAppBtn />
    </>
  )
}
