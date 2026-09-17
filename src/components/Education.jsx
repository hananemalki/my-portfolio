import Reveal from './Reveal.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

const formations = [
  {
    title: { fr: 'Master Spécialisé en Qualité du Logiciel', en: "Specialized Master's in Software Quality" },
    school: {
      fr: 'Faculté des Sciences Dhar El Mehraz — Université Sidi Mohamed Ben Abdellah, Fès',
      en: 'Faculty of Sciences Dhar El Mehraz — Sidi Mohamed Ben Abdellah University, Fez',
    },
    period: '2024 – 2026',
    logo: '/logos/fsdm.png',
    skills: [
      { fr: 'Java', en: 'Java' },
      { fr: 'Spring Boot', en: 'Spring Boot' },
      { fr: 'Architecture logicielle', en: 'Software architecture' },
      { fr: 'Tests logiciels', en: 'Software testing' },
      { fr: 'DevOps', en: 'DevOps' },
      { fr: 'IA générative', en: 'Generative AI' },
    ],
  },
  {
    title: {
      fr: "Licence professionnelle — Développement des Systèmes d'Information et de Communication",
      en: "Professional Bachelor's — Information & Communication Systems Development",
    },
    school: {
      fr: 'École Supérieure de Technologie — Université Moulay Ismaïl, Meknès',
      en: 'Higher School of Technology — Moulay Ismaïl University, Meknes',
    },
    period: '2023 – 2024',
    logo: '/logos/est.png',
    skills: [
      { fr: 'Java', en: 'Java' },
      { fr: 'Web', en: 'Web' },
      { fr: 'JEE', en: 'JEE' },
      { fr: 'Bases de données', en: 'Databases' },
      { fr: 'REST API', en: 'REST API' },
      { fr: 'Développement logiciel', en: 'Software development' },
    ],
  },
  {
    title: { fr: 'Génie Informatique — Option Génie Logiciel', en: 'Computer Engineering — Software Engineering Track' },
    school: {
      fr: 'École Supérieure de Technologie — Université Moulay Ismaïl, Meknès',
      en: 'Higher School of Technology — Moulay Ismaïl University, Meknes',
    },
    period: '2021 – 2023',
    logo: '/logos/est.png',
    skills: [
      { fr: 'Java', en: 'Java' },
      { fr: 'Spring', en: 'Spring' },
      { fr: 'HTML', en: 'HTML' },
      { fr: 'CSS', en: 'CSS' },
      { fr: 'JavaScript', en: 'JavaScript' },
      { fr: 'SQL', en: 'SQL' },
      { fr: 'Git', en: 'Git' },
    ],
  },
]

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="education">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">{t(strings.education.eyebrow)}</div>
          <h2 className="sectitle">{t(strings.education.title)}</h2>
          <p className="section-intro">{t(strings.education.intro)}</p>
        </Reveal>

        <div className="education-list">
          {formations.map((item, i) => (
            <Reveal key={i} className="education-card">

              <div className="education-logo">
                <img src={item.logo} alt={t(item.school)} />
              </div>

              <div className="education-content">
                <div className="education-header">
                  <div>
                    <h3>{t(item.title)}</h3>
                    <p className="education-school">{t(item.school)}</p>
                  </div>
                  <span className="education-period">{item.period}</span>
                </div>

                <div className="education-skills">
                  {item.skills.map((skill, j) => (
                    <span className="tech-badge" key={j}>
                      {t(skill)}
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
