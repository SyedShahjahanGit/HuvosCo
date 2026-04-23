const WA_NUMBER = '919666599887'
const WA_MSG = encodeURIComponent("Hi! I'd like to discuss a bulk order / partnership")

export default function Footer() {
  return (
    <footer className="bg-t-bg-deep border-t border-t-amber/15 py-12 relative z-[1]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img src="/images/huvosco-logo.png" alt="Huvos Co" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-display text-t-text font-semibold text-base leading-tight">Huvos Co</p>
                <p className="text-t-amber text-xs">Franchise partner of Madurai Famous Jigarthanda</p>
              </div>
            </div>
            <p className="text-t-text/30 text-xs max-w-xs text-center md:text-left leading-relaxed">
              Bringing 47 years of Madurai's finest jigarthanda to the streets of Chennai.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-t-amber text-xs font-bold uppercase tracking-widest mb-1">Quick Links</p>
            {[
              ['#hero', 'Home'],
              ['#menu', 'Menu'],
              ['#experience', 'Experience'],
              ['#find-us', 'Visit Us'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-t-text/50 hover:text-t-gold text-sm transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-t-amber text-xs font-bold uppercase tracking-widest mb-1">Reach Us</p>
            <a
              href="tel:9494213930"
              className="text-t-text/50 hover:text-t-gold text-sm transition-colors"
            >
              +91 9494213930
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-t-text/50 hover:text-t-green text-sm transition-colors"
            >
              WhatsApp: +91 9666599887
            </a>
            <a
              href="https://www.instagram.com/famousjigarthandamandaveli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-t-text/50 hover:text-t-pink text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @famousjigarthandamandaveli
            </a>
          </div>
        </div>

        <div className="border-t border-t-amber/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-t-text/25 text-xs">
            © 2024 Huvos Co. All rights reserved. Franchise partner of Madurai Famous Jigarthanda LLP.
          </p>
          <p className="text-t-text/20 text-xs">Made with ❤️ in Chennai</p>
        </div>
      </div>
    </footer>
  )
}
