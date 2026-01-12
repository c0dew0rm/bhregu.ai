import React from 'react'

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">Bhregu<span className="logo-accent">.ai</span></span>
            <p>Enterprise AI Consulting & Solutions</p>
            <div className="footer-social">
              <a href="mailto:hello@bhregu.ai" className="footer-email">hello@bhregu.ai</a>
            </div>
          </div>
          <div className="footer-links-grid">
            <div className="footer-link-group">
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
              <a href="#tech-stack" onClick={(e) => handleNavClick(e, '#tech-stack')}>Tech Stack</a>
            </div>
            <div className="footer-link-group">
              <a href="#quick-wins" onClick={(e) => handleNavClick(e, '#quick-wins')}>Quick Wins</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bhregu.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

