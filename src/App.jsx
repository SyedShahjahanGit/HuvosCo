import { useState, useCallback } from 'react'
import { useLenis } from './hooks/useLenis'
import { ThemeProvider } from './contexts/ThemeContext'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Legacy from './sections/Legacy'
import Menu from './sections/Menu'
import Experience from './sections/Experience'
import FindUs from './sections/FindUs'
import Footer from './sections/Footer'

function AppInner() {
  const [preloaderDone, setPreloaderDone] = useState(false)
  const handlePreloaderComplete = useCallback(() => setPreloaderDone(true), [])
  useLenis()

  return (
    <div className="bg-t-bg min-h-screen">
      {/* Night mode ambient orbs — fixed to viewport for full-page atmosphere */}
      <div className="night-orbs-container fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="night-orb night-orb-1" />
        <div className="night-orb night-orb-2" />
        <div className="night-orb night-orb-3" />
        <div className="night-orb night-orb-4" />
      </div>

      <div className="relative z-[1]">
        <Preloader onComplete={handlePreloaderComplete} />
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider mx-auto max-w-7xl" />
          <Legacy />
          <div className="section-divider mx-auto max-w-7xl" />
          <Menu />
          <div className="section-divider mx-auto max-w-7xl" />
          <Experience />
          <div className="section-divider mx-auto max-w-7xl" />
          <FindUs />
        </main>
        <Footer />
        {preloaderDone && <WhatsAppButton />}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
