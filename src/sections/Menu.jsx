import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductCard from '../components/ProductCard'
import { MFJ_ITEMS, HUVOSCO_ITEMS } from '../data/menu'

gsap.registerPlugin(ScrollTrigger)

export default function Menu() {
  const [tab, setTab] = useState('mfj')
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.product-card')
    gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power2.out' }
    )
  }, [tab])

  const items = tab === 'mfj' ? MFJ_ITEMS : HUVOSCO_ITEMS

  return (
    <section id="menu" ref={sectionRef} className="py-24 md:py-32 bg-t-bg-alt relative z-[1]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-t-amber/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-t-amber/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div ref={headingRef} className="text-center mb-12">
          <p className="text-t-amber text-xs font-bold tracking-widest uppercase mb-3">What's Your Craving?</p>
          <h2 className="font-display text-t-text text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-t-text/50 text-sm max-w-md mx-auto">
            From the legendary Madurai classics to our own Huvos Co originals — there's something for every mood.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-t-surface border border-t-amber/20 rounded-full p-1 gap-1">
            <button
              onClick={() => setTab('mfj')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                tab === 'mfj'
                  ? 'bg-t-amber text-t-bg-deep'
                  : 'text-t-text/60 hover:text-t-text'
              }`}
            >
              Madurai Famous (15)
            </button>
            <button
              onClick={() => setTab('huvosco')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                tab === 'huvosco'
                  ? 'bg-t-amber text-t-bg-deep'
                  : 'text-t-text/60 hover:text-t-text'
              }`}
            >
              Huvos Co Originals (10)
            </button>
          </div>
        </div>

        {tab === 'huvosco' && (
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-t-maroon/20 border border-t-maroon/30 text-t-text/60 text-xs px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-t-pink inline-block" />
              Our own recipes, served under the Huvos Co brand
            </span>
          </div>
        )}

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((item) => (
            <div key={item.id} className="product-card">
              <ProductCard item={item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-t-text/30 text-xs">
            Prices shown are placeholders — visit us or WhatsApp for current pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
