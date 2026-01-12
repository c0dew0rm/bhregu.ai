import React, { useEffect, useRef } from 'react'

const StatItem = ({ number, text, label }) => {
  const [count, setCount] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          if (number) {
            animateCounter()
          }
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible, number])

  const animateCounter = () => {
    const duration = 2000
    const increment = number / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current < number) {
        setCount(Math.floor(current))
      } else {
        setCount(number)
        clearInterval(timer)
      }
    }, 16)
  }

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {text ? text : `${count}+`}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const Hero = () => {
  return (
    <section id="why" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            We believe AI should be
            <span className="gradient-text"> trustworthy, useful, and measurable</span>
          </h1>
          <p className="hero-subtitle">
            Not hype. Not demos. Real systems that improve decisions, protect data, and deliver ROI—built with governance from day one.
          </p>
          <div className="golden-circle">
            <div className="golden-step">
              <div className="golden-pill">Why</div>
              <div className="golden-text">Purpose & belief</div>
            </div>
            <div className="golden-connector" aria-hidden="true"></div>
            <div className="golden-step">
              <div className="golden-pill">How</div>
              <div className="golden-text">Process & architecture</div>
            </div>
            <div className="golden-connector" aria-hidden="true"></div>
            <div className="golden-step">
              <div className="golden-pill">What</div>
              <div className="golden-text">Deliverables & outcomes</div>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#contact')
              if (target) {
                const offsetTop = target.offsetTop - 80
                window.scrollTo({ top: offsetTop, behavior: 'smooth' })
              }
            }}>Book a Consult</a>
            <a href="#how" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#how')
              if (target) {
                const offsetTop = target.offsetTop - 80
                window.scrollTo({ top: offsetTop, behavior: 'smooth' })
              }
            }}>See How We Work</a>
          </div>
          <div className="hero-stats">
            <StatItem text="2 weeks" label="AI Health-Check" />
            <StatItem text="7 days" label="RAG demo" />
            <StatItem text="Private" label="On‑prem / VPC ready" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero

