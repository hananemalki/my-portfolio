import { profile } from '../data.js'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

export default function Hero() {
  const { lang, t } = useLanguage()
  const cvFile = lang === 'en' && profile.cvFileEn ? profile.cvFileEn : profile.cvFile
  const specialty = lang === 'fr' ? strings.hero.specialtyFr : strings.hero.specialtyEn

  return (
    <section className="hero" id="top">
      <div className="hero-blob" aria-hidden="true"></div>
      <div className="hero-watermark" aria-hidden="true">{'</>'}</div>
      <div className="wrap">
        <Reveal>
          <div className="hero-kicker">
            {'<developer specialty='}<span>"{specialty}"</span>{'>'}
          </div>
          <h1>
            Malki <span className="accent">Hanane</span>
          </h1>
          <div className="role">{t(profile.role)}</div>
          <p className="pitch">{t(profile.pitch)}</p>

          <div className="cta-row">
            <Magnetic className="btn btn-primary" href={cvFile} download>
              {t(strings.hero.downloadCv)}
            </Magnetic>
            <Magnetic
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t(strings.hero.contactMe)}
            </Magnetic>
          </div>
          <div className="social-row">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={`mailto:${profile.email}`}>{t(strings.hero.email)}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
