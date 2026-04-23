import { useState, useCallback } from 'react'
import { useLenis } from './hooks/useLenis'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Legacy from './sections/Legacy'
import Menu from './sections/Menu'
import Experience from './sections/Experience'
import FindUs from './sections/FindUs'
import Footer from './sections/Footer'

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)
  const handlePreloaderComplete = useCallback(() => setPreloaderDone(true), [])
  useLenis()

  return (
    <div className="bg-[#0a0804] min-h-screen">
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
  )
}
