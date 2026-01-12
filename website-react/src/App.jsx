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

  useEffect(() => {
    // Stage transitions aligned with Golden Circle: Why → How → What → Proof → Trust → Get Started
    const stageTargets = [
      { key: 'why', el: document.querySelector('#why') },
      { key: 'how', el: document.querySelector('#how') },
      { key: 'how', el: document.querySelector('#tech-stack') },
      { key: 'what', el: document.querySelector('#services') },
      { key: 'proof', el: document.querySelector('#quick-wins') },
      { key: 'trust', el: document.querySelector('.risk-mitigation') },
      { key: 'contact', el: document.querySelector('#contact') }
    ]
      .filter((t) => t.el)
      .map((t) => ({
        ...t,
        anchor: t.el.querySelector?.('.section-header') || t.el
      }))

    if (!stageTargets.length) return

    let rafId = null

    const updateStage = () => {
      rafId = null
      // Activate a stage when its section header crosses a viewport focus line.
      // This makes stage changes predictable both scrolling down AND up.
      const focusY = window.innerHeight * 0.6
      let current = stageTargets[0].key
      let best = Number.NEGATIVE_INFINITY

      for (const t of stageTargets) {
        const r = t.anchor.getBoundingClientRect()
        const delta = r.top - focusY
        // pick the closest anchor that is at/above the focus line
        if (delta <= 0 && delta > best) {
          best = delta
          current = t.key
        }
      }

      document.documentElement.dataset.stage = current
    }

    const requestUpdate = () => {
      if (rafId != null) return
      rafId = requestAnimationFrame(updateStage)
    }

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })
    updateStage()

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (rafId != null) cancelAnimationFrame(rafId)
    }
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

