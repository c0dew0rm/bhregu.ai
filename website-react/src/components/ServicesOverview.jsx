import React, { useState } from 'react'

const IconStrategy = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="url(#grad1)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="18" stroke="url(#grad1)" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="8" fill="url(#grad1)"/>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconData = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="40" width="12" height="20" rx="2" fill="url(#grad2)"/>
    <rect x="26" y="32" width="12" height="28" rx="2" fill="url(#grad2)"/>
    <rect x="40" y="24" width="12" height="36" rx="2" fill="url(#grad2)"/>
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconML = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="16" width="32" height="32" rx="4" fill="url(#grad3)" opacity="0.2"/>
    <path d="M32 20L28 28L36 28L32 20Z" fill="url(#grad3)"/>
    <circle cx="24" cy="36" r="2" fill="url(#grad3)"/>
    <circle cx="32" cy="40" r="2" fill="url(#grad3)"/>
    <circle cx="40" cy="36" r="2" fill="url(#grad3)"/>
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconGenAI = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12L36 24L48 28L36 32L32 44L28 32L16 28L28 24L32 12Z" fill="url(#grad4)"/>
    <circle cx="32" cy="28" r="4" fill="url(#grad4)"/>
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconAutomation = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 32L28 24L28 28L44 28L44 24L52 32L44 40L44 36L28 36L28 40L20 32Z" fill="url(#grad5)"/>
    <defs>
      <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconProduct = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12L20 20L20 32L32 40L44 32L44 20L32 12Z" fill="url(#grad6)" opacity="0.2"/>
    <path d="M32 16L24 22L24 30L32 36L40 30L40 22L32 16Z" fill="url(#grad6)"/>
    <path d="M32 28L28 26L28 34L32 36L36 34L36 26L32 28Z" fill="url(#grad6)"/>
    <defs>
      <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const services = [
  {
    icon: <IconStrategy />,
    title: 'Strategy & Advisory',
    description: 'AI roadmap design, readiness assessment, and transformation consulting',
    details: ['AI Strategy & Roadmap', 'Enterprise Readiness Assessment', 'AI Transformation Consulting', 'ROI Modeling & Business Case']
  },
  {
    icon: <IconData />,
    title: 'Data & Foundation',
    description: 'Data strategy, engineering, and knowledge graph design',
    details: ['Data Strategy & Architecture', 'Data Engineering & Pipelines', 'Knowledge Graph Design', 'Data Privacy & Compliance']
  },
  {
    icon: <IconML />,
    title: 'ML Model Development',
    description: 'Custom ML models, fine-tuning, and multimodal AI solutions',
    details: ['Custom ML Models', 'LLM Fine-Tuning', 'Multimodal AI', 'Predictive Analytics']
  },
  {
    icon: <IconGenAI />,
    title: 'Generative AI & LLMs',
    description: 'Enterprise LLM architecture, RAG systems, and AI agents',
    details: ['Enterprise LLM Architecture', 'RAG Systems', 'Private LLM Deployment', 'AI Agents & Chatbots']
  },
  {
    icon: <IconAutomation />,
    title: 'Automation & Agents',
    description: 'AI agents, workflow automation, and autonomous systems',
    details: ['AI Agents for Operations', 'Workflow Automation', 'Autonomous Systems', 'Real-Time AI Systems']
  },
  {
    icon: <IconProduct />,
    title: 'Product Engineering',
    description: 'AI-first product design, MVP development, and integration',
    details: ['AI-First Product Design', 'AI Feature Integration', 'AI MVP & Prototyping', 'API & SDK Development']
  }
]

const ServicesOverview = () => {
  const [flipped, setFlipped] = useState({})

  const handleFlip = (index) => {
    setFlipped(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section id="services" className="services-overview">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            End-to-end AI consulting and implementation
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="flip-hint">Hover to explore</div>
                </div>
                <div className="flip-card-back">
                  <h3>{service.title}</h3>
                  <ul className="service-details-list">
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview

