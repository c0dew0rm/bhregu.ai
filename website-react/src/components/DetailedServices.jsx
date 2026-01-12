import React, { useEffect, useRef } from 'react'

const additionalServices = [
  {
    title: 'MLOps & Infrastructure',
    items: ['Model Deployment & Scaling', 'Cloud Optimization', 'Model Monitoring & Retraining', 'Cost Optimization']
  },
  {
    title: 'Industry Solutions',
    items: ['Healthcare AI', 'FinTech & Risk Intelligence', 'Retail & Customer Intelligence', 'Manufacturing AI']
  },
  {
    title: 'Security & Trust',
    items: ['AI Security Testing', 'Model Explainability', 'Bias Detection', 'Secure Architecture']
  },
  {
    title: 'Support & Partnership',
    items: ['Managed AI Services', 'Continuous Improvement', 'Product Maintenance', 'Strategic Advisory']
  }
]

const DetailedServices = () => {
  const scrollContainerRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    let rafId = null
    let isScrolling = false

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const handleScroll = () => {
      if (!scrollContainerRef.current || !sectionRef.current) return
      if (isScrolling) return

      isScrolling = true

      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        const section = sectionRef.current
        const container = scrollContainerRef.current
        const rect = section.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionHeight = rect.height

        // Only scroll when section is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate when scroll should start (when section enters viewport)
          const scrollStart = windowHeight - sectionHeight * 0.3 // Start when 30% of section is visible
          const scrollEnd = windowHeight + sectionHeight * 0.7 // End when 70% has passed
          
          // Calculate progress based on section position
          const scrollPosition = windowHeight - rect.top
          const scrollRange = scrollEnd - scrollStart
          
          // Normalize progress (0 to 1)
          let progress = (scrollPosition - scrollStart) / scrollRange
          progress = Math.max(0, Math.min(1, progress)) // Clamp between 0 and 1
          
          // Apply easing for smoother motion
          const easedProgress = easeInOutCubic(progress)
          
          // Calculate max scroll distance
          const maxScroll = container.scrollWidth - container.clientWidth
          
          // Apply horizontal scroll
          if (maxScroll > 0) {
            container.scrollLeft = easedProgress * maxScroll
          }
        }
        
        isScrolling = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="detailed-services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Additional Capabilities</h2>
          <p className="section-subtitle">Extended services to support your AI journey</p>
        </div>
        <div className="additional-services-container">
          <div ref={scrollContainerRef} className="additional-services-scroll">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-service-card">
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailedServices

