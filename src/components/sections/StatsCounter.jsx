import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCounter } from '../../hooks/useCounter'

const STATS = [
  { label: 'Happy Travelers',  value: 5000,  suffix: '+' },
  { label: 'Tour Packages',    value: 250,   suffix: '+' },
  { label: 'Years Experience', value: 10,    suffix: '+' },
  { label: 'Fixed Departures', value: 1500,  suffix: '+' },
]

function StatItem({ stat }) {
  const [ref, active] = useScrollReveal(0.3)
  const n = useCounter(stat.value, active)
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-white">
        {n.toLocaleString('en-IN')}{stat.suffix}
      </p>
      <p className="mt-2 text-cyan-200 text-sm font-semibold uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-16 bg-cyan-900 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-cyan-700/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <StatItem key={s.label} stat={s} />
        ))}
      </div>
    </section>
  )
}
