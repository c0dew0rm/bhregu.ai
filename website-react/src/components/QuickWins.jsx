import React from 'react'

const IconWorkshop = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16L16 24L16 36L32 44L48 36L48 24L32 16Z" fill="url(#gradWorkshop)" opacity="0.2"/>
    <path d="M32 20L20 26L20 34L32 40L44 34L44 26L32 20Z" fill="url(#gradWorkshop)"/>
    <rect x="28" y="40" width="8" height="4" rx="1" fill="url(#gradWorkshop)"/>
    <circle cx="32" cy="12" r="2" fill="url(#gradWorkshop)"/>
    <defs>
      <linearGradient id="gradWorkshop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconHealthCheck = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" stroke="url(#gradHealth)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="12" stroke="url(#gradHealth)" strokeWidth="2" fill="none"/>
    <path d="M32 20L32 28M32 36L32 44" stroke="url(#gradHealth)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 32L28 32M36 32L44 32" stroke="url(#gradHealth)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="gradHealth" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconRAG = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 32L28 24L28 28L44 28L44 24L52 32L44 40L44 36L28 36L28 40L20 32Z" fill="url(#gradRAG)"/>
    <circle cx="32" cy="32" r="3" fill="url(#gradRAG)"/>
    <defs>
      <linearGradient id="gradRAG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const quickWins = [
  {
    icon: <IconWorkshop />,
    title: 'Free C-Suite Workshop',
    duration: '2 Hours',
    description: 'Align leaders on what’s possible, what’s risky, and what’s worth doing next.',
    featured: false
  },
  {
    icon: <IconHealthCheck />,
    title: 'AI Health-Check',
    duration: '2 Weeks',
    description: 'A clear 90‑day roadmap + a scoped pilot with success metrics and governance.',
    featured: true
  },
  {
    icon: <IconRAG />,
    title: 'RAG in a Week',
    duration: '1 Week',
    description: 'A grounded Q&A demo over your documents—built for security and evaluation.',
    featured: false
  }
]

const QuickWins = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="quick-wins" className="quick-wins">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Proof (quick wins)</h2>
          <p className="section-subtitle">Start small, prove value fast, then scale responsibly.</p>
        </div>
        <div className="quick-wins-grid">
          {quickWins.map((win, index) => (
            <div key={index} className={`quick-win-card ${win.featured ? 'featured' : ''}`}>
              {win.featured && <div className="featured-badge">Popular</div>}
              <div className="quick-win-icon">{win.icon}</div>
              <h3>{win.title}</h3>
              <p className="quick-win-duration">{win.duration}</p>
              <p className="quick-win-description">{win.description}</p>
              <a 
                href="#contact" 
                className="quick-win-cta"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                {win.title === 'Free C-Suite Workshop' ? 'Book Workshop' : 
                 win.title === 'AI Health-Check' ? 'Get Started' : 'Request Demo'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickWins

