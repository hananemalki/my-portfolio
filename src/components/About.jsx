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
            Je conçois des logiciels fiables à l'intersection de deux disciplines :{' '}
            <span className="hl hl-primary">l'IA générative appliquée</span> et{' '}
            <span className="hl hl-teal">l'ingénierie de la qualité</span>.
          </p>
          <p className="about-body">
            Mon travail actuel porte sur l'architecture Advanced RAG pour rendre la documentation
            technique interne réellement interrogeable. Formée entre Fès et Meknès, je m'appuie sur
            des bases solides en Java/Spring et en tests logiciels pour livrer des systèmes qui
            tiennent la route en production, pas seulement en démo.
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