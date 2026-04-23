import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const WA_NUMBER = '919666599887'
const WA_MSG = encodeURIComponent("Hi! I'm interested in Madurai Famous Jigarthanda at Mandaveli")

export default function Hero() {
  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const taglineRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)
  const bubblesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(imgRef.current,
        { scale: 0.75, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 1.6 }
      )
      .fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }, '-=0.8'
      )
      .fromTo(titleRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, '-=0.5'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }, '-=0.3'
      )
      .fromTo(taglineRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 }, '-=0.4'
      )
      .fromTo(ctaRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, '-=0.3'
      )

      gsap.to(imgRef.current, {
        y: -16,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-t-bg">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-t-amber/[7%] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-t-maroon/[8%] blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-t-amber/[5%] blur-[100px]" />
      </div>

      {/* Bubble particles */}
      <div ref={bubblesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-t-amber/20"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <div ref={badgeRef} className="inline-flex items-center gap-2 bg-t-amber/15 border border-t-amber/30 rounded-full px-4 py-1.5 mb-6 opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-t-gold inline-block" />
            <span className="text-t-gold text-xs font-semibold tracking-widest uppercase">Est. 1977 — Now in Mandaveli</span>
          </div>

          <div ref={titleRef} className="mb-4">
            <h1 className="font-display text-t-text text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] opacity-0">
              Madurai
            </h1>
            <h1 className="font-display text-gradient text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] opacity-0">
              Famous
            </h1>
            <h1 className="font-display text-t-text text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] opacity-0">
              Jigarthanda
            </h1>
          </div>

          <p ref={subtitleRef} className="text-t-text/50 text-sm font-medium tracking-widest uppercase mb-4 opacity-0">
            by Huvos Co · Mandaveli, Chennai
          </p>

          <p ref={taglineRef} className="text-t-text/80 text-lg sm:text-xl font-display italic mb-10 opacity-0">
            "Be Healthy...! Drink Healthy...!!"
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 order-btn flex items-center gap-2 bg-t-green hover:bg-t-green-dark text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-t-green/30 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </a>
            <button
              onClick={() => document.getElementById('find-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="opacity-0 flex items-center gap-2 border border-t-amber/40 hover:border-t-gold text-t-text hover:text-t-gold font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              Find Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product image side */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="relative">
            {/* Pulsing warm glow — makes the drink look even more tempting */}
            <div className="absolute inset-0 rounded-full blur-3xl scale-110 animate-pulse-ring bg-t-gold/[12%]" />
            <div className="absolute inset-0 rounded-full blur-2xl scale-95 bg-t-amber/[8%]" />

            {/* Steam wisps — cold drink, so they're very subtle gold wisps */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-5 pointer-events-none">
              <div className="steam-wisp" style={{ animationDelay: '0s', animationDuration: '3s' }} />
              <div className="steam-wisp" style={{ animationDelay: '1s', animationDuration: '2.6s', transform: 'skewX(5deg)' }} />
              <div className="steam-wisp" style={{ animationDelay: '1.8s', animationDuration: '3.2s', transform: 'skewX(-4deg)' }} />
            </div>

            <img
              ref={imgRef}
              src="/images/hero-product.png"
              alt="Madurai Famous Jigarthanda"
              className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-[420px] object-contain drop-shadow-2xl opacity-0"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-t-text/30 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-t-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
