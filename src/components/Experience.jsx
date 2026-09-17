import { experiences } from '../data.js'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="exp">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">{t(strings.experience.eyebrow)}</div>
          <h2 className="sectitle">{t(strings.experience.title)}</h2>
          <p className="section-intro">{t(strings.experience.intro)}</p>
        </Reveal>

        <div className="experience-timeline">

          {experiences.map((exp) => (
            <Reveal key={exp.company} className="experience-card">

              <div className="experience-line">
                <div className={`experience-dot ${exp.active ? 'active' : ''}`}>
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} />
                  ) : (
                    <span>{exp.company.charAt(0)}</span>
                  )}
                </div>
              </div>

              <div className="experience-content">

                <div className="experience-top">
                  <div>
                    <div className="experience-company">
                      {exp.company}
                      {exp.badge && <span className="badge">{t(exp.badge)}</span>}
                    </div>
                    <h3 className="experience-title">{t(exp.title)}</h3>
                  </div>

                  <span className="experience-period">{t(exp.period)}</span>
                </div>

                <p className="experience-description">{t(exp.desc)}</p>

                {exp.tasks && (
                  <ul className="experience-tasks">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{t(task)}</li>
                    ))}
                  </ul>
                )}

                <div className="experience-tech">
                  {exp.stack.map((tech) => (
                    <span className="tech-badge" key={tech}>
                      {tech}
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
