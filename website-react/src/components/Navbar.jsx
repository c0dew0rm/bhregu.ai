import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <span className="logo">Bhregu<span className="logo-accent">.ai</span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#why" onClick={(e) => handleNavClick(e, '#why')}>Why</a></li>
          <li><a href="#how" onClick={(e) => handleNavClick(e, '#how')}>How</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>What</a></li>
          <li><a href="#quick-wins" onClick={(e) => handleNavClick(e, '#quick-wins')}>Proof</a></li>
          <li><a href="#contact" className="btn btn-primary nav-cta" onClick={(e) => handleNavClick(e, '#contact')}>Get Started</a></li>
        </ul>
        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

