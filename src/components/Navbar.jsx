import { useEffect, useRef, useState } from 'react'

const WA_NUMBER = '919666599887'
const WA_MSG = encodeURIComponent("Hi! I'm interested in Madurai Famous Jigarthanda at Mandaveli")

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? 'bg-[#0a0804]/95 backdrop-blur-md border-b border-[#c8860a]/20 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 cursor-pointer">
            <img src="/images/huvosco-logo.png" alt="Huvos Co" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-[#f5e6c8] text-sm font-semibold hidden sm:block leading-tight">
              Huvos Co<br />
              <span className="text-[#c8860a] font-normal text-xs">× Madurai Famous Jigarthanda</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[['menu', 'Menu'], ['experience', 'Experience'], ['find-us', 'Visit Us']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[#f5e6c8]/70 hover:text-[#e9a820] text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {label}
              </button>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25d366] hover:bg-[#1da851] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Order Now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-[#f5e6c8] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#f5e6c8] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#f5e6c8] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-[#060503]/98 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {[['hero', 'Home'], ['menu', 'Menu'], ['experience', 'Experience'], ['find-us', 'Visit Us']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-display text-3xl text-[#f5e6c8] hover:text-[#e9a820] transition-colors cursor-pointer"
          >
            {label}
          </button>
        ))}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25d366] text-white text-lg font-semibold px-8 py-3 rounded-full mt-4"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Order via WhatsApp
        </a>
      </div>
    </>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
