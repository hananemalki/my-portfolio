import { useState } from 'react'
import { experiences } from '../data.js'
import Reveal from './Reveal.jsx'

const TASKS_PREVIEW = 3

export default function Experience() {
  const [expanded, setExpanded] = useState({})

  function toggle(company) {
    setExpanded((prev) => ({ ...prev, [company]: !prev[company] }))
  }

  return (
    <section id="experience" className="exp">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">Expérience</div>
          <h2 className="sectitle">Mon parcours professionnel</h2>
          <p className="section-intro">
            Des expériences orientées développement logiciel, architecture
            backend et applications web full stack.
          </p>
        </Reveal>

        <div className="experience-timeline">
          {experiences.map((exp) => {
            const isOpen = expanded[exp.company]
            const hasMore = exp.tasks && exp.tasks.length > TASKS_PREVIEW
            const visibleTasks = isOpen
              ? exp.tasks
              : exp.tasks?.slice(0, TASKS_PREVIEW)

            return (
              <Reveal
                key={exp.company}
                className="experience-card"
                style={{ '--accent': exp.color }}
              >
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
                        {exp.badge && (
                          <span className="badge-pro">{exp.badge}</span>
                        )}
                        {exp.active && (
                          <span className="current-flag">
                            <span className="current-dot" />
                            En cours
                          </span>
                        )}
                      </div>
                      <h3 className="experience-title">{exp.title}</h3>
                    </div>

                    <span className="experience-period">{exp.period}</span>
                  </div>

                  <p className="experience-description">{exp.desc}</p>

                  {exp.tasks && (
                    <>
                      <ul className="experience-tasks">
                        {visibleTasks.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>

                      {hasMore && (
                        <button
                          className="tasks-toggle"
                          onClick={() => toggle(exp.company)}
                        >
                          {isOpen
                            ? '− Réduire'
                            : `+ ${exp.tasks.length - TASKS_PREVIEW} autres missions`}
                        </button>
                      )}
                    </>
                  )}

                  <div className="experience-tech">
                    {exp.stack.map((tech) => (
                      <span className="exp-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}