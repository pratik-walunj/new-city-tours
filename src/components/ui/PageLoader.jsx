import React from 'react'
import { Mountain } from 'lucide-react'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[80] bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <span className="relative inline-flex items-center justify-center w-20 h-20">
          <span className="absolute inset-0 rounded-3xl border-4 border-cyan-700/30 border-t-orange-500 animate-spin" />
          <Mountain size={32} className="text-white" />
        </span>
        <p className="mt-5 text-white font-extrabold tracking-tight">New City Tours &amp; Travels</p>
        <p className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mt-1">
          Loading your Himalaya…
        </p>
      </div>
    </div>
  )
}
