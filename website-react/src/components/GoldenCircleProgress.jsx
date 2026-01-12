import React, { useEffect, useState } from 'react'

const steps = [
  { key: 'why', label: 'Why', target: '#why' },
  { key: 'how', label: 'How', target: '#how' },
  { key: 'what', label: 'What', target: '#services' }
]

export default function GoldenCircleProgress() {
  const [active, setActive] = useState('why')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const items = steps
      .map((s) => ({ ...s, el: document.querySelector(s.target) }))
      .filter((s) => s.el)

    if (items.length === 0) return

    let rafId = null

    const update = () => {
      rafId = null

      // Show the widget after you start scrolling past the hero a bit.
      setVisible(window.scrollY > 120)

      // Determine the active step by "closest section to viewport focus line".
      const focusY = window.innerHeight * 0.45
      let bestKey = items[0].key
      let bestDist = Number.POSITIVE_INFINITY

      for (const item of items) {
        const r = item.el.getBoundingClientRect()
        const center = r.top + r.height / 2
        const dist = Math.abs(center - focusY)
        if (dist < bestDist) {
          bestDist = dist
          bestKey = item.key
        }
      }

      setActive(bestKey)
    }

    const requestUpdate = () => {
      if (rafId != null) return
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (rafId != null) cancelAnimationFrame(rafId)
    }
  }, [])

  const handleClick = (target) => (e) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <div className={`gc-progress ${visible ? 'is-visible' : ''}`} aria-label="Golden Circle progress">
      <div className="gc-progress-inner">
        {steps.map((s, idx) => {
          const isActive = active === s.key
          const isDone = steps.findIndex((x) => x.key === active) > idx
          return (
            <button
              key={s.key}
              className={`gc-step ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
              onClick={handleClick(s.target)}
              type="button"
            >
              <span className="gc-dot" aria-hidden="true"></span>
              <span className="gc-label">{s.label}</span>
            </button>
          )
        })}
        <div className={`gc-line ${active}`} aria-hidden="true"></div>
      </div>
    </div>
  )
}


