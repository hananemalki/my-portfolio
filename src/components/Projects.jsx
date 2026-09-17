import { useState } from 'react'
import { professionalProjects, personalProjects } from '../data.js'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

const PER_PAGE = 2

export default function Projects() {
  const { t } = useLanguage()
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(professionalProjects.length / PER_PAGE)

  const current = professionalProjects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  function goTo(next) {
    if (next < 0 || next >= totalPages) return
    setPage(next)
  }

  const [personalPage, setPersonalPage] = useState(0)
  const personalTotalPages = Math.ceil(personalProjects.length / PER_PAGE)

  const currentPersonal = personalProjects.slice(
    personalPage * PER_PAGE,
    personalPage * PER_PAGE + PER_PAGE
  )

  function goToPersonal(next) {
    if (next < 0 || next >= personalTotalPages) return
    setPersonalPage(next)
  }

  return (
    <section id="projects" className="projects">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">{t(strings.projects.eyebrow)}</div>
          <h2 className="sectitle">{t(strings.projects.title)}</h2>
          <p className="section-intro">{t(strings.projects.intro)}</p>
        </Reveal>

        <div className="proj-grid" key={page}>
          {current.map((project) => (
            <Reveal className="proj-card" key={project.key} style={{ '--accent': project.color }}>
              <div className="proj-card-top">
                <span className="proj-badge-pro">{t(project.badge)}</span>
                {project.period && <span className="proj-period-pro">{t(project.period)}</span>}
              </div>

              <div className="proj-body-pro">
                <h3 className="proj-title">{t(project.title)}</h3>
                <p className="proj-desc">{t(project.desc)}</p>

                <div className="project-tech-label">{t(strings.projects.technologies)}</div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="proj-pagination">
            <button
              className="proj-nav-btn"
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              aria-label={t(strings.projects.prevProjects)}
            >
              ←
            </button>

            <div className="proj-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`proj-dot${i === page ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="proj-nav-btn"
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages - 1}
              aria-label={t(strings.projects.nextProjects)}
            >
              →
            </button>
          </div>
        )}

        <Reveal className="personal-projects-head">
          <div className="eyebrow">{t(strings.projects.personalEyebrow)}</div>
          <h2 className="sectitle">{t(strings.projects.personalTitle)}</h2>
          <p className="section-intro">{t(strings.projects.personalIntro)}</p>
        </Reveal>

        <div className="proj-grid" key={`personal-${personalPage}`}>
          {currentPersonal.map((project) => (
            <Reveal className="proj-card" key={project.key} style={{ '--accent': project.color }}>
              <div className="proj-card-top">
                <span className="proj-badge-pro">{t(project.badge)}</span>
                {project.period && <span className="proj-period-pro">{t(project.period)}</span>}
              </div>

              <div className="proj-body-pro">
                <h3 className="proj-title">{t(project.title)}</h3>
                <p className="proj-desc">{t(project.desc)}</p>

                <div className="project-tech-label">{t(strings.projects.technologies)}</div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {personalTotalPages > 1 && (
          <div className="proj-pagination">
            <button
              className="proj-nav-btn"
              onClick={() => goToPersonal(personalPage - 1)}
              disabled={personalPage === 0}
              aria-label={t(strings.projects.prevPersonal)}
            >
              ←
            </button>

            <div className="proj-dots">
              {Array.from({ length: personalTotalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`proj-dot${i === personalPage ? ' active' : ''}`}
                  onClick={() => goToPersonal(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="proj-nav-btn"
              onClick={() => goToPersonal(personalPage + 1)}
              disabled={personalPage === personalTotalPages - 1}
              aria-label={t(strings.projects.nextPersonal)}
            >
              →
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
