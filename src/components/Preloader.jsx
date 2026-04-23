import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const panelRef = useRef(null)
  const badgeRef = useRef(null)
  const mfj1Ref = useRef(null)
  const mfj2Ref = useRef(null)
  const lineRef = useRef(null)
  const byRef = useRef(null)
  const logoRef = useRef(null)
  const taglineRef = useRef(null)
  const overlayRef = useRef(null)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          onCompleteRef.current?.()
        },
      })

      // Phase 1: badge slides down
      tl.fromTo(badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        0.3
      )

      // Phase 2: "MADURAI FAMOUS" — clip-path reveal left to right
      tl.fromTo(mfj1Ref.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power3.inOut' },
        0.7
      )

      // Phase 3: "JIGARTHANDA" — clip-path reveal left to right, slightly delayed
      tl.fromTo(mfj2Ref.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power3.inOut' },
        1.0
      )

      // Phase 4: golden sweep line scales in from left
      tl.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.6, ease: 'power3.inOut' },
        1.4
      )

      // Phase 5: "by" + Huvos Co logo fade in
      tl.fromTo([byRef.current, logoRef.current],
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 },
        1.6
      )

      // Phase 6: tagline fades in
      tl.fromTo(taglineRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        2.0
      )

      // Hold for a beat
      tl.to({}, { duration: 0.5 }, 2.5)

      // Exit Phase: the inner content fades slightly as panel lifts
      tl.to([badgeRef.current, mfj1Ref.current, mfj2Ref.current,
              lineRef.current, byRef.current, logoRef.current, taglineRef.current],
        { opacity: 0, y: -10, duration: 0.3, ease: 'power2.in', stagger: 0.02 },
        3.0
      )

      // Curtain wipe: panel slides UP
      tl.to(panelRef.current,
        {
          y: '-100%',
          duration: 0.9,
          ease: 'power4.inOut',
        },
        3.15
      )
    }, containerRef)

    return () => {
      ctx.revert()
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] pointer-events-none"
    >
      {/* The sliding curtain panel */}
      <div
        ref={panelRef}
        className="absolute inset-0 bg-[#060503] flex flex-col items-center justify-center"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#c8860a]/8 blur-[100px] pointer-events-none" />

        {/* Content lockup */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 select-none">

          {/* Badge */}
          <div ref={badgeRef} className="flex items-center gap-2 mb-8 opacity-0">
            <div className="w-8 h-px bg-[#c8860a]/50" />
            <span className="text-[#c8860a] text-[10px] font-bold tracking-[0.3em] uppercase">
              Since 1977
            </span>
            <div className="w-8 h-px bg-[#c8860a]/50" />
          </div>

          {/* MADURAI FAMOUS */}
          <div
            ref={mfj1Ref}
            className="font-display text-[#f5e6c8]/90 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase"
            style={{ clipPath: 'inset(-10% 100% -10% 0)', lineHeight: '1.15' }}
          >
            Madurai Famous
          </div>

          {/* JIGARTHANDA */}
          <div
            ref={mfj2Ref}
            className="font-display text-[#e9a820] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase mt-1 pb-2"
            style={{ clipPath: 'inset(-10% 100% -20% 0)', lineHeight: '1.15' }}
          >
            Jigarthanda
          </div>

          {/* Sweep line */}
          <div
            ref={lineRef}
            className="w-48 sm:w-64 h-px bg-gradient-to-r from-[#c8860a] via-[#e9a820] to-[#c8860a] my-6"
            style={{ transformOrigin: 'left center', transform: 'scaleX(0)' }}
          />

          {/* Huvos Co row */}
          <div className="flex items-center gap-3">
            <span
              ref={byRef}
              className="text-[#f5e6c8]/40 text-xs font-medium tracking-widest uppercase opacity-0"
            >
              by
            </span>
            <div ref={logoRef} className="flex items-center gap-2.5 opacity-0">
              <img
                src="/images/huvosco-logo.png"
                alt="Huvos Co"
                className="w-8 h-8 rounded-full object-cover border border-[#c8860a]/30"
              />
              <span className="font-display text-[#f5e6c8] text-lg font-semibold tracking-wide">
                Huvos Co
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="font-display italic text-[#f5e6c8]/40 text-sm mt-6 opacity-0"
          >
            "Be Healthy...! Drink Healthy...!!"
          </p>
        </div>

        {/* Bottom progress bar */}
        <ProgressBar />
      </div>
    </div>
  )
}

function ProgressBar() {
  const barRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(barRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 3.0, ease: 'power1.inOut', delay: 0.3 }
    )
  }, [])

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-px bg-[#f5e6c8]/10 overflow-hidden rounded-full">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[#c8860a] to-[#e9a820] rounded-full"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
    </div>
  )
}
