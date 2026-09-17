import { useState } from 'react'
import { focusAreas, aboutStats } from '../data.js'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

export default function About() {
  const [openKey, setOpenKey] = useState(focusAreas[0].key)
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">{t(strings.about.eyebrow)}</div>

          <p className="about-lead">
            {t(strings.about.leadPre)}
            <span className="hl hl-primary">{t(strings.about.leadHighlight)}</span>
            {t(strings.about.leadPost)}
          </p>

          <p className="about-body">{t(strings.about.body)}</p>
        </Reveal>

        <Reveal className="about-stats">
          {aboutStats.map((stat) => (
            <div className="about-stat" key={stat.num}>
              <div className="about-stat-num">{stat.num}</div>
              <div className="about-stat-label">{t(stat.label)}</div>
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
                    <h3>{t(area.title)}</h3>
                    <p className="focus-summary">{t(area.summary)}</p>
                  </div>
                  <span className="focus-toggle">{isOpen ? '−' : '+'}</span>
                </div>
                <div className="focus-body" style={{ maxHeight: isOpen ? '320px' : '0px' }}>
                  <p>{t(area.details)}</p>
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
