import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WA_TIMINGS = encodeURIComponent("Hi! What are your store timings today?")
const WA_NUMBER = '919666599887'
const PHONE = '9494213930'
const MAPS_URL = 'https://maps.app.goo.gl/DN3GDy13VzV2heFw8'
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.597429362068!2d80.26344335449957!3d13.023259890279023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52675835aceab7%3A0x623e8ae656c18c36!2sMadurai%20Famous%20Jigarthanda%20LLP%20-%20Since%201977!5e0!3m2!1sen!2sin!4v1776924098292!5m2!1sen!2sin'

export default function FindUs() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="find-us" ref={sectionRef} className="py-24 md:py-32 bg-t-bg-alt relative z-[1]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-t-amber/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-t-amber text-xs font-bold tracking-widest uppercase mb-3">Come Visit Us</p>
          <h2 className="font-display text-t-text text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Find Us</h2>
          <p className="text-t-text/50 text-sm">We're right in the heart of Mandaveli — walk in anytime!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-t-amber/20 h-80 md:h-auto relative bg-t-surface">
            <iframe
              title="Huvos Co location"
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px', filter: 'var(--t-map-filter)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info card */}
          <div ref={contentRef} className="flex flex-col gap-5">
            <div className="bg-t-surface border border-t-amber/20 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-t-amber/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-t-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-t-amber text-xs font-bold uppercase tracking-widest mb-1">Address</p>
                  <p className="text-t-text text-sm leading-relaxed font-medium">
                    Madurai Famous Jigarthanda by HuvosCo<br />
                    Shop No. 205 (New) / 100 (Old)<br />
                    Ramakrishna Mutt Rd, Mandaveli<br />
                    Chennai, Tamil Nadu 600028
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-t-amber/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-t-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-t-amber text-xs font-bold uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-t-text text-sm font-medium">Sunday – Saturday</p>
                  <p className="text-t-gold text-sm font-bold">11:00 AM – 11:00 PM</p>
                  <p className="text-t-green text-xs mt-1 font-medium">● Open Now</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-t-amber/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-t-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-t-amber text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                  <a href={`tel:${PHONE}`} className="text-t-text text-sm font-medium hover:text-t-gold transition-colors">
                    +91 {PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-t-surface hover:bg-t-amber/10 border border-t-amber/30 hover:border-t-gold text-t-text hover:text-t-gold text-sm font-semibold py-3.5 rounded-xl transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_TIMINGS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-t-green hover:bg-t-green-dark text-white text-sm font-semibold py-3.5 rounded-xl transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
