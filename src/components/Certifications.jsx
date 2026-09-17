import { certifications, languages } from '../data.js'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

export default function Certifications() {
  const { t } = useLanguage()

  const statusLabel = {
    done: t(strings.certifications.status.done),
    wip: t(strings.certifications.status.wip),
  }

  return (
    <section id="certifications" className="certifications">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">{t(strings.certifications.eyebrow)}</div>
          <h2 className="sectitle">{t(strings.certifications.title)}</h2>
          <p className="section-intro">{t(strings.certifications.intro)}</p>
        </Reveal>

        <div className="split" style={{ marginTop: '48px' }}>

          <Reveal className="cert-list">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.name} style={{ '--accent': cert.color }}>
                <div className="cert-icon">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt=""
                      onError={(e) => {
                        e.currentTarget.replaceWith(
                          Object.assign(document.createElement('span'), { textContent: cert.icon })
                        )
                      }}
                    />
                  ) : (
                    <span>{cert.icon}</span>
                  )}
                </div>

                <span className="name">{cert.name}</span>

                <span className={`cert-status ${cert.status}`}>
                  {statusLabel[cert.status] ?? cert.status}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal>
            <div className="flabel" style={{ marginBottom: '16px' }}>
              {t(strings.certifications.languagesLabel)}
            </div>

            <div className="lang-row">
              {languages.map((lang, i) => (
                <div className="lang-item" key={i}>
                  <span className="lang-dot"></span>
                  <div>
                    <div className="lname">{t(lang.name)}</div>
                    <div className="llevel">{lang.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}
