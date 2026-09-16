import { education } from '../data.js'
import Reveal from './Reveal.jsx'

const formations = [
  {
    title: 'Master Spécialisé en Qualité du Logiciel',
    school:
      'Faculté des Sciences Dhar El Mehraz — Université Sidi Mohamed Ben Abdellah, Fès',
    period: '2024 – 2026',
    logo: '/logos/fsdm.png',
    skills: [
      'Java',
      'Spring Boot',
      'Architecture logicielle',
      'Tests logiciels',
      'DevOps',
      'IA générative'
    ]
  },

  {
    title:
      'Licence professionnelle — Développement des Systèmes d’Information et de Communication',
    school:
      'École Supérieure de Technologie — Université Moulay Ismaïl, Meknès',
    period: '2023 – 2024',
    logo: '/logos/est.png',
    skills: [
      'Java',
      'Web',
      'JEE',
      'Bases de données',
      'REST API',
      'Développement logiciel'
    ]
  },

  {
    title: 'Génie Informatique — Option Génie Logiciel',
    school:
      'École Supérieure de Technologie — Université Moulay Ismaïl, Meknès',
    period: '2021 – 2023',
    logo: '/logos/est.png',
    skills: [
      'Java',
      'Spring',
      'HTML',
      'CSS',
      'JavaScript',
      'SQL',
      'Git'
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">Formation</div>

          <h2 className="sectitle">
            Parcours académique
          </h2>

          <p className="section-intro">
            Une formation orientée développement logiciel, architecture
            et technologies web.
          </p>
        </Reveal>

        <div className="education-list">

          {formations.map((item) => (
            <Reveal
              key={item.title}
              className="education-card"
            >

              <div className="education-logo">
                <img
                  src={item.logo}
                  alt={item.school}
                />
              </div>

              <div className="education-content">

                <div className="education-header">

                  <div>
                    <h3>{item.title}</h3>

                    <p className="education-school">
                      {item.school}
                    </p>
                  </div>

                  <span className="education-period">
                    {item.period}
                  </span>

                </div>

                <div className="education-skills">

                  {item.skills.map((skill) => (
                    <span
                      className="tech-badge"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}