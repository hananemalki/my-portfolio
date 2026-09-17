import { profile } from '../data.js'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact">
          <div className="contact-inner">
            <div className="eyebrow eyebrow-dark">{t(strings.contact.eyebrow)}</div>
            <h2>{t(strings.contact.title)}</h2>

            <div className="cta-row">
              <Magnetic className="btn btn-primary" href={`mailto:${profile.email}`}>
                {t(strings.contact.emailCta)}
              </Magnetic>
              <Magnetic className="btn btn-ghost" href={`tel:${profile.phone}`}>
                {profile.phoneDisplay}
              </Magnetic>
            </div>

            <div className="social-row">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                {t(strings.contact.linkedin)}
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                {t(strings.contact.github)}
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
