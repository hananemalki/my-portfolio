import { useState } from 'react'
import { focusAreas, aboutStats } from '../data.js'
import Reveal from './Reveal.jsx'

export default function About() {
  const [openKey, setOpenKey] = useState(focusAreas[0].key)

  return (
    <section id="about" className="about">
      <div className="wrap">
       <Reveal>
          <div className="eyebrow">À propos</div>

          <p className="about-lead">
            Développeuse <span className="hl hl-primary">
              Java Full Stack
            </span>, je conçois des applications web
            de bout en bout, du backend aux interfaces utilisateurs.
          </p>

          <p className="about-body">
            Je travaille principalement avec Java, Spring Boot, Angular
            et React pour développer des applications robustes et évolutives.
            Mon expérience m’a également permis de travailler sur les API REST,
            les architectures logicielles, les bases de données, le DevOps
            et l’intégration de solutions d’IA générative.
          </p>
        </Reveal>

        <Reveal className="about-stats">
          {aboutStats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <div className="about-stat-num">{stat.num}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="focus-grid">
          {focusAreas.map((area) => {
            const isOpen = openKey === area.key
            return (
              <div
                key={area.key}
                className={`focus-card ${isOpen ? 'open' : ''}`}
                style={{ '--accent': area.color }}
                onClick={() => setOpenKey(isOpen ? null : area.key)}
              >
                <div className="focus-head">
                  <span className="focus-icon">{area.icon}</span>
                  <div className="focus-heading">
                    <h3>{area.title}</h3>
                    <p className="focus-summary">{area.summary}</p>
                  </div>
                  <span className="focus-toggle">{isOpen ? '−' : '+'}</span>
                </div>
                <div className="focus-body" style={{ maxHeight: isOpen ? '320px' : '0px' }}>
                  <p>{area.details}</p>
                  <div className="focus-tags">
                    {area.tags.map((tag) => (
                      <span className="stack-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}