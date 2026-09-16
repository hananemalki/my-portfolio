import { certifications, languages } from '../data.js'
import Reveal from './Reveal.jsx'

const statusLabel = {
  done: 'Obtenue',
  wip: 'En cours',
}

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">Certifications</div>

          <h2 className="sectitle">
            Certifications &amp; langues
          </h2>

          <p className="section-intro">
            Une veille continue sur le cloud, l’architecture logicielle
            et l’IA générative, au-delà du parcours académique.
          </p>
        </Reveal>

        <div className="split" style={{ marginTop: '48px' }}>

          <Reveal className="cert-list">
            {certifications.map((cert) => (
              <div
                className="cert-card"
                key={cert.name}
                style={{ '--accent': cert.color }}
              >
                <div className="cert-icon">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt=""
                      onError={(e) => {
                        e.currentTarget.replaceWith(
                          Object.assign(document.createElement('span'), {
                            textContent: cert.icon,
                          })
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
              Langues
            </div>

            <div className="lang-row">
              {languages.map((lang) => (
                <div className="lang-item" key={lang.name}>
                  <span className="lang-dot"></span>
                  <div>
                    <div className="lname">{lang.name}</div>
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