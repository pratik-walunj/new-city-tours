import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * Wraps children in a fade-up reveal triggered by IntersectionObserver.
 * Props:
 *   delay  — ms delay before transition starts (default 0)
 *   className — extra classes on the wrapper div
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}
