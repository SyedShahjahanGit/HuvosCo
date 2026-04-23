import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GALLERY = [
  { src: '/images/falooda.png', caption: 'Royal Falooda' },
  { src: '/images/mfj-trio.png', caption: 'The Signature Collection' },
  { src: '/images/rose-milk.png', caption: 'Rose Milk Jigarthanda' },
  { src: '/images/badam.png', caption: 'Badam Jigarthanda' },
  { src: '/images/chocolate-shake.png', caption: 'Chocolate Shake' },
  { src: '/images/classic-splash.png', caption: 'The Classic' },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      const cards = trackRef.current?.querySelectorAll('.gallery-card')
      if (cards) {
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: trackRef.current, start: 'top 85%' }
          }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 bg-t-bg relative overflow-hidden z-[1]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-t-maroon/[7%] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div ref={headingRef} className="mb-12">
          <p className="text-t-amber text-xs font-bold tracking-widest uppercase mb-3">The Experience</p>
          <h2 className="font-display text-t-text text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Every glass, a masterpiece
          </h2>
          <p className="text-t-text/50 text-sm max-w-md">
            Now serving at Mandaveli, Chennai — come experience the magic of Madurai in our store.
          </p>
        </div>

        {/* Gallery grid */}
        <div ref={trackRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className={`gallery-card relative rounded-2xl overflow-hidden bg-t-surface border border-t-amber/15 group ${
                i === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''
              }`}
              style={{ minHeight: i === 0 ? '360px' : '200px' }}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-t-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-t-text text-sm font-semibold">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Store coming soon note */}
        <div className="mt-12 p-6 bg-t-surface border border-t-amber/20 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-t-amber/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-t-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
            </svg>
          </div>
          <div>
            <p className="text-t-text font-semibold">Store photos coming soon</p>
            <p className="text-t-text/40 text-sm">We'll be adding photos of our Mandaveli store, the counter, and our team shortly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
