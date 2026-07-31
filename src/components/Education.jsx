import { education, certifications, languages } from '../data.js'
import Reveal from './Reveal.jsx'

// Diplômes complémentaires (ajoutés ici directement, en plus de ceux définis dans data.js)
const extraEducation = [
  {
    title: 'DUT Génie Informatique — Option Génie Logiciel',
    meta: '2021 – 2023 · École Supérieure de Technologie — Université Moulay Ismaïl, Meknès',
  },
  {
    title: 'Baccalauréat — Sciences Physiques et Chimiques',
    meta: '2021 · Lycée Abderahman Ben Zidane, Meknès',
  },
]

const allEducation = [...education, ...extraEducation]

// Sépare "date · école" (peu importe l'ordre) en détectant la partie qui contient des chiffres
function splitMeta(meta) {
  const parts = meta.split('·').map((p) => p.trim())
  const dateIndex = parts.findIndex((p) => /\d/.test(p))
  const date = dateIndex !== -1 ? parts[dateIndex] : parts[parts.length - 1]
  const school = parts.filter((_, i) => i !== dateIndex).join(' · ')
  return { date, school }
}

// Projets académiques (ajoutés ici directement)
const academicProjects = [
  {
    title: 'Gestionnaire de CV',
    duree: '2025 | 1 mois',
    place: 'FSDM',
    desc: 'Développement d\u2019une application web de gestion de CVs avec recherche et export PDF',
    tech: 'Node.js, HTML, CSS, Express, JSON',
  },
  {
    title: 'Générateur de diagrammes UML',
    duree: '2025 | 1 mois',
    place: 'FSDM',
    desc: 'Développement d\u2019une application desktop pour générer des diagrammes UML',
    tech: 'Java, Swing, DOM, XMI, Git',
  },
  {
    title: 'Application web E-contact',
    duree: '2024 | 1 mois',
    place: 'EST Meknès',
    desc: 'Développement d\u2019une application web de gestion de contacts',
    tech: 'Jakarta EE, REST API, HTML5, CSS3, JavaScript',
  },
  {
    title: 'Application bancaire desktop',
    duree: '2024 | 1 mois',
    place: 'EST Meknès',
    desc: 'Développement d\u2019une application desktop de gestion bancaire',
    tech: 'Java, JavaFX, RMI',
  },
  {
    title: 'Gestion des clubs ESTM',
    duree: '2023 | 1 mois',
    place: 'EST Meknès',
    desc: 'Développement d\u2019une application mobile de gestion des clubs',
    tech: 'Kotlin, NoSQL, Android Studio, Git',
  },
  {
    title: 'Projet de fin d\u2019études (DUT)',
    duree: '2023 | 4 mois',
    place: 'EST Meknès',
    desc: 'Développement d\u2019une application web de gestion et suivi des activités agricoles',
    tech: 'Spring Boot, Thymeleaf, MongoDB, Arduino, Git, Google Maps API',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="split">
          <div>
            <Reveal>
              <div className="eyebrow">Formation</div>
              <h2 className="sectitle">Diplômes</h2>
            </Reveal>

            <Reveal style={{ marginTop: 36 }}>
              {allEducation.map((edu) => {
                const { date, school } = splitMeta(edu.meta)
                return (
                  <div className="edu-item" key={edu.title}>
                    <div className="edu-date">{date}</div>
                    <h3>{edu.title}</h3>
                    <div className="meta">{school}</div>
                  </div>
                )
              })}
            </Reveal>

            <Reveal style={{ marginTop: 44 }}>
              <div className="eyebrow">Langues</div>
              <div className="lang-row">
                {languages.map((lang) => (
                  <div className="lang-item" key={lang.name}>
                    <div className="lname">{lang.name}</div>
                    <div className="llevel">{lang.level}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="eyebrow">Certifications</div>
              <h2 className="sectitle">Attestations</h2>
            </Reveal>

            <Reveal className="cert-list" style={{ marginTop: 36 }}>
              {certifications.map((cert) => (
                <div className="cert-item" key={cert.name}>
                  <span className="name">{cert.name}</span>
                  <span className={`cert-status ${cert.status}`}>
                    {cert.status === 'done' ? 'obtenue' : 'en préparation'}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal style={{ marginTop: 64 }}>
          <div className="eyebrow">Projets Académiques</div>
          <h2 className="sectitle">Réalisations</h2>
        </Reveal>

        <Reveal className="academic-projects" style={{ marginTop: 36 }}>
          {academicProjects.map((proj) => (
            <div className="project-item" key={proj.title}>
              <div className="project-header">
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-duree">{proj.duree}</div>
              </div>
              <div className="project-place">{proj.place}</div>
              <div className="project-desc">{proj.desc}</div>
              <div className="project-tech-label">Technologies</div>
              <div className="project-tags">
                {proj.tech.split(',').map((t) => (
                  <span className="project-tag" key={t}>
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}