import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GoldenCircleProgress from './components/GoldenCircleProgress'
import HowWeWork from './components/HowWeWork'
import ServicesOverview from './components/ServicesOverview'
import DetailedServices from './components/DetailedServices'
import TechStack from './components/TechStack'
import QuickWins from './components/QuickWins'
import RiskMitigation from './components/RiskMitigation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Staggered reveals for a more "story" feel as you scroll.
    const revealTargets = document.querySelectorAll(
      '.section-header, .how-card, .tech-category, .flip-card, .additional-service-card, .quick-win-card, .risk-item, .contact-content'
    )

    revealTargets.forEach((el, idx) => {
      el.classList.add('reveal')
      // subtle stagger; resets naturally because elements are in different sections
      el.style.setProperty('--reveal-delay', `${Math.min(idx * 35, 240)}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )

    revealTargets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <GoldenCircleProgress />
      <Hero />
      <HowWeWork />
      <TechStack />
      <ServicesOverview />
      <DetailedServices />
      <QuickWins />
      <RiskMitigation />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

