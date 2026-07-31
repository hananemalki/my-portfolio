import { experiences } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="exp">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Parcours</div>
          <h2 className="sectitle">Expérience professionnelle</h2>
        </Reveal>

        <div className="exp-list">
          {experiences.map((exp) => (
            <Reveal key={exp.company} className="exp-item">
              <div className={`exp-node ${exp.active ? 'active' : ''}`}>
                <span className="pulse"></span>
              </div>
              <div className="exp-header">
                <h3>{exp.company}</h3>
                {exp.badge && <span className="badge">{exp.badge}</span>}
              </div>
              <div className="period">{exp.period}</div>
              <div className="role-title">{exp.title}</div>
              <p className="desc">{exp.desc}</p>
              <div className="stack-row">
                {exp.stack.map((tech) => (
                  <span className="stack-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}