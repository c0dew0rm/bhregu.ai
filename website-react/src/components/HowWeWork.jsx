import React from 'react'

const IconDiscover = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="14" stroke="url(#gradHow1)" strokeWidth="2" fill="none" />
    <path d="M38 38L50 50" stroke="url(#gradHow1)" strokeWidth="3" strokeLinecap="round" />
    <path d="M22 28H34" stroke="url(#gradHow1)" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 22V34" stroke="url(#gradHow1)" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="gradHow1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconBuild = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="18" width="32" height="28" rx="6" fill="url(#gradHow2)" opacity="0.18" />
    <path d="M22 36L28 28L34 36L42 26" stroke="url(#gradHow2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="22" cy="36" r="2" fill="url(#gradHow2)" />
    <circle cx="28" cy="28" r="2" fill="url(#gradHow2)" />
    <circle cx="34" cy="36" r="2" fill="url(#gradHow2)" />
    <circle cx="42" cy="26" r="2" fill="url(#gradHow2)" />
    <defs>
      <linearGradient id="gradHow2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconDeploy = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 14L18 26H26V42H38V26H46L32 14Z" fill="url(#gradHow3)" opacity="0.2" />
    <path d="M32 18L22 28H28V42H36V28H42L32 18Z" fill="url(#gradHow3)" />
    <defs>
      <linearGradient id="gradHow3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconOperate = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 18C24 18 18 24 18 32C18 40 24 46 32 46C40 46 46 40 46 32C46 24 40 18 32 18Z" stroke="url(#gradHow4)" strokeWidth="2" />
    <path d="M32 24V32L38 36" stroke="url(#gradHow4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 32H18M46 32H50M32 14V18M32 46V50" stroke="url(#gradHow4)" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="gradHow4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const steps = [
  {
    icon: <IconDiscover />,
    title: 'Discover the “Why”',
    desc: 'Align leadership on purpose, risk, and ROI. Find the use-cases worth betting on.'
  },
  {
    icon: <IconBuild />,
    title: 'Design the “How”',
    desc: 'Architect data + LLM systems that are secure, measurable, and production-ready.'
  },
  {
    icon: <IconDeploy />,
    title: 'Ship the “What”',
    desc: 'Deliver pilots fast, then harden into reliable products with clear success metrics.'
  },
  {
    icon: <IconOperate />,
    title: 'Earn trust over time',
    desc: 'Monitoring, evaluation, drift, and governance so systems improve—not degrade.'
  }
]

export default function HowWeWork() {
  return (
    <section id="how" className="how-we-work">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How we work</h2>
          <p className="section-subtitle">
            A simple, repeatable approach that turns AI from experimentation into outcomes.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="how-card">
              <div className="how-icon">{s.icon}</div>
              <h3 className="how-title">{s.title}</h3>
              <p className="how-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


