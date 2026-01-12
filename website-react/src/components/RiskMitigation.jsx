import React from 'react'

const IconShield = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12L16 20L16 32C16 40 20 48 32 52C44 48 48 40 48 32L48 20L32 12Z" fill="url(#gradShield)" opacity="0.2"/>
    <path d="M32 16L20 22L20 32C20 38 23 44 32 47C41 44 44 38 44 32L44 22L32 16Z" fill="url(#gradShield)"/>
    <path d="M28 32L30 34L36 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="gradShield" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconLock = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="28" width="24" height="20" rx="2" fill="url(#gradLock)" opacity="0.2"/>
    <rect x="24" y="32" width="16" height="16" rx="2" fill="url(#gradLock)"/>
    <path d="M28 32V24C28 20 30 16 32 16C34 16 36 20 36 24V32" stroke="url(#gradLock)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="40" r="2" fill="white"/>
    <defs>
      <linearGradient id="gradLock" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconChart = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="36" width="8" height="16" rx="2" fill="url(#gradChart)"/>
    <rect x="28" y="28" width="8" height="24" rx="2" fill="url(#gradChart)"/>
    <rect x="40" y="32" width="8" height="20" rx="2" fill="url(#gradChart)"/>
    <line x1="12" y1="56" x2="52" y2="56" stroke="url(#gradChart)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="gradChart" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const risks = [
  {
    icon: <IconShield />,
    title: 'Hallucination Prevention',
    description: 'Human verification workflows and confidence thresholds to ensure accurate outputs'
  },
  {
    icon: <IconLock />,
    title: 'Data Privacy & Compliance',
    description: 'Private deployments with clear data retention policies and regulatory compliance'
  },
  {
    icon: <IconChart />,
    title: 'Model Drift Detection',
    description: 'Continuous monitoring with automated retraining triggers in managed service plans'
  }
]

const RiskMitigation = () => {
  return (
    <section className="risk-mitigation">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Risk Management & Trust</h2>
          <p className="section-subtitle">Proactive mitigation strategies for enterprise AI adoption</p>
        </div>
        <div className="risk-grid">
          {risks.map((risk, index) => (
            <div key={index} className="risk-item">
              <div className="risk-icon">{risk.icon}</div>
              <h4>{risk.title}</h4>
              <p>{risk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RiskMitigation

