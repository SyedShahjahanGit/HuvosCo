import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Legacy() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
      gsap.fromTo(rightRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
      gsap.fromTo(timelineRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="legacy" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-[#0a0804]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#c8860a]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5">
        {/* Timeline badge */}
        <div className="flex items-center gap-4 mb-16" ref={timelineRef} style={{ transformOrigin: 'left center' }}>
          <div className="flex items-center gap-3 bg-[#c8860a]/10 border border-[#c8860a]/20 rounded-full px-5 py-2">
            <span className="text-[#e9a820] font-bold text-sm">Est. 1977</span>
            <div className="w-24 h-px bg-gradient-to-r from-[#c8860a] to-[#e9a820]" />
            <span className="text-[#f5e6c8]/60 text-sm">Mandaveli, Chennai</span>
            <div className="w-px h-4 bg-[#c8860a]/40" />
            <span className="text-[#e9a820] font-bold text-sm">2024</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story */}
          <div ref={leftRef}>
            <p className="text-[#c8860a] text-xs font-bold tracking-widest uppercase mb-4">The Legacy</p>
            <h2 className="font-display text-[#f5e6c8] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              47 years of<br />
              <span className="text-gradient">Madurai's finest</span>
            </h2>
            <p className="text-[#f5e6c8]/70 text-base leading-relaxed mb-6">
              Madurai's renowned beverage, Madurai Famous Jigarthanda boasts a rich history dating back to 1977 when Mr. P. Sheik Meeran introduced it through push carts. Perfectly named for its body cooling properties.
            </p>
            <div className="w-12 h-px bg-[#c8860a] mb-6" />
            <p className="text-[#f5e6c8]/60 text-sm leading-relaxed italic">
              HuvosCo was started by two jigarthanda-fan cousins who thought — why just drink it and feel the love? We can do better by spreading it, owning a franchise, and bringing it to the masses of Chennai.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: '47+', sub: 'Years of Heritage' },
                { label: '1977', sub: 'Founded in Madurai' },
                { label: '100%', sub: 'Authentic Recipe' },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-[#120e08] border border-[#c8860a]/20 rounded-xl px-5 py-3 text-center">
                  <div className="text-[#e9a820] font-bold text-xl font-display">{label}</div>
                  <div className="text-[#f5e6c8]/40 text-xs mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration + logo */}
          <div ref={rightRef} className="flex flex-col items-center gap-8">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-[#8b1a2c]/5 rounded-2xl" />
              <img
                src="/images/madurai-store-illustration.png"
                alt="Original Madurai Famous Jigarthanda store"
                className="w-full object-contain rounded-2xl opacity-80"
                style={{ filter: 'sepia(20%) saturate(80%)' }}
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-[#c8860a]/70 text-xs italic">The original Madurai store — where it all began</p>
              </div>
            </div>
            <img
              src="/images/huvosco-logo.png"
              alt="Huvos Co"
              className="w-24 h-24 object-contain rounded-full border border-[#c8860a]/20 p-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
