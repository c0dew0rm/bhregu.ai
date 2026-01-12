import React from 'react'

const IconOrchestration = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="16" width="40" height="32" rx="4" fill="url(#gradTech1)" opacity="0.2"/>
    <circle cx="24" cy="28" r="3" fill="url(#gradTech1)"/>
    <circle cx="32" cy="28" r="3" fill="url(#gradTech1)"/>
    <circle cx="40" cy="28" r="3" fill="url(#gradTech1)"/>
    <path d="M20 36L28 40L36 36L44 40" stroke="url(#gradTech1)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="gradTech1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconServing = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="24" height="24" rx="4" fill="url(#gradTech2)" opacity="0.2"/>
    <path d="M28 28L36 32L28 36L28 28Z" fill="url(#gradTech2)"/>
    <circle cx="32" cy="32" r="2" fill="url(#gradTech2)"/>
    <defs>
      <linearGradient id="gradTech2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconRAG = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="16" stroke="url(#gradTech3)" strokeWidth="2" fill="none"/>
    <path d="M32 20L32 28M32 36L32 44" stroke="url(#gradTech3)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 32L28 32M36 32L44 32" stroke="url(#gradTech3)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="gradTech3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconMonitoring = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="24" width="32" height="24" rx="2" fill="url(#gradTech4)" opacity="0.2"/>
    <path d="M20 32L28 28L36 34L44 30" stroke="url(#gradTech4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="32" r="2" fill="url(#gradTech4)"/>
    <circle cx="28" cy="28" r="2" fill="url(#gradTech4)"/>
    <circle cx="36" cy="34" r="2" fill="url(#gradTech4)"/>
    <circle cx="44" cy="30" r="2" fill="url(#gradTech4)"/>
    <defs>
      <linearGradient id="gradTech4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconData = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="32" height="28" rx="2" fill="url(#gradTech5)" opacity="0.2"/>
    <rect x="20" y="24" width="8" height="8" rx="1" fill="url(#gradTech5)"/>
    <rect x="32" y="24" width="8" height="8" rx="1" fill="url(#gradTech5)"/>
    <rect x="44" y="24" width="8" height="8" rx="1" fill="url(#gradTech5)"/>
    <rect x="20" y="36" width="8" height="8" rx="1" fill="url(#gradTech5)"/>
    <rect x="32" y="36" width="8" height="8" rx="1" fill="url(#gradTech5)"/>
    <defs>
      <linearGradient id="gradTech5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const IconSecurity = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12L16 20L16 32C16 40 20 48 32 52C44 48 48 40 48 32L48 20L32 12Z" fill="url(#gradTech6)" opacity="0.18" />
    <path d="M32 16L20 22L20 32C20 38 23 44 32 47C41 44 44 38 44 32L44 22L32 16Z" stroke="url(#gradTech6)" strokeWidth="2" fill="none" />
    <path d="M28 32L30 34L36 28" stroke="url(#gradTech6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="gradTech6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
)

const techCategories = [
  {
    icon: <IconOrchestration />,
    title: 'MLOps / Orchestration',
    blurb: 'Track experiments, orchestrate pipelines, and operationalize training.',
    tags: ['MLflow', 'Kubeflow', 'Prefect', 'Airflow']
  },
  {
    icon: <IconServing />,
    title: 'Model Serving / Inference',
    blurb: 'Deploy models with predictable latency, cost, and reliability.',
    tags: ['BentoML', 'TorchServe', 'Triton', 'Managed Endpoints']
  },
  {
    icon: <IconRAG />,
    title: 'LLM Orchestration / RAG',
    blurb: 'Grounded answers with retrieval, evaluation, and secure access.',
    tags: ['LangChain', 'LlamaIndex', 'Milvus', 'Pinecone']
  },
  {
    icon: <IconMonitoring />,
    title: 'Monitoring & Governance',
    blurb: 'Quality, drift, and auditability—so trust is measurable.',
    tags: ['Evidently.ai', 'Fiddler', 'WhyLabs', 'Custom Audit Logs']
  },
  {
    icon: <IconData />,
    title: 'Data Infrastructure',
    blurb: 'Pragmatic foundations: streaming, storage, features, and access control.',
    tags: ['PostgreSQL', 'Kafka', 'Feast', 'S3']
  },
  {
    icon: <IconSecurity />,
    title: 'Security & Privacy',
    blurb: 'Isolation, access control, and audit trails—built for enterprise risk.',
    tags: ['VPC / On‑prem', 'IAM / RBAC', 'KMS / Vault', 'Audit Logs']
  }
]

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How we build (tooling)</h2>
          <p className="section-subtitle">
            A cloud‑agnostic reference stack. We adapt to your constraints and integrate with what you already run.
          </p>
        </div>
        <div className="tech-categories">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <div className="tech-category-icon">{category.icon}</div>
              <h4>{category.title}</h4>
              <p className="tech-category-blurb">{category.blurb}</p>
              <div className="tech-tags">
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

