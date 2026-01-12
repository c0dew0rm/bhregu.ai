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
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Business with
            <span className="gradient-text"> Enterprise AI Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Strategic AI consulting, custom model development, and end-to-end implementation 
            to accelerate your AI transformation journey.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#contact')
              if (target) {
                const offsetTop = target.offsetTop - 80
                window.scrollTo({ top: offsetTop, behavior: 'smooth' })
              }
            }}>Start Your AI Journey</a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#services')
              if (target) {
                const offsetTop = target.offsetTop - 80
                window.scrollTo({ top: offsetTop, behavior: 'smooth' })
              }
            }}>Explore Services</a>
          </div>
          <div className="hero-stats">
            <StatItem number={100} label="AI Projects Delivered" />
            <StatItem number={50} label="Enterprise Clients" />
            <StatItem text="24/7" label="Support & Partnership" />
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

