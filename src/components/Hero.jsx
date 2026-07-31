import { profile, quickFacts } from '../data.js'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-blob" aria-hidden="true"></div>
      <div className="hero-watermark" aria-hidden="true">{'</>'}</div>
      <div className="wrap">
        <Reveal>
          <div className="hero-kicker">{'<engineer role='}<span>"IA générative"</span>{'>'}</div>
          <h1>
            Malki <span className="accent">Hanane</span>
          </h1>
          <div className="role">{profile.role}</div>
          <p className="pitch">{profile.pitch}</p>
          <div className="loc">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location} — {profile.availability}
          </div>
          <div className="cta-row">
            <Magnetic className="btn btn-primary" href={profile.cvFile} download>
              Télécharger mon CV ↓
            </Magnetic>
            <Magnetic
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Me contacter
            </Magnetic>
          </div>
          <div className="social-row">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </div>
        </Reveal>

        {/* <Reveal>
          <div className="facts-card">
            <div className="flabel">Aperçu rapide</div>
            <div className="facts-grid">
              {quickFacts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <div className="num">{fact.num}</div>
                  <div className="label">{fact.label}</div>
                </div>
              ))}
              <div className="fact">
                <div className="num">RAG</div>
                <div className="label">spécialité actuelle</div>
              </div>
            </div>
            <div className="current">
              <span className="status-dot"></span>
              <span className="current-text">
                En mission chez <b>Capgemini</b> jusqu'en août 2026
              </span>
            </div>
          </div>
        </Reveal> */}
      </div>
    </section>
  )
}
