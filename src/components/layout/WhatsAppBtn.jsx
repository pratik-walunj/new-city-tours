import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/919918001088?text=Hello%2C%20I%20am%20interested%20in%20a%20Nepal%20tour%20package."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300"
    >
      <MessageCircle size={26} />
    </a>
  )
}
