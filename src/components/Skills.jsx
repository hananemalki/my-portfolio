import { skillGroups, methods } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Boîte à outils</div>
          <h2 className="sectitle">Compétences techniques</h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Reveal key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 20 }}>
          <div className="skill-card">
            <h3>Méthodes</h3>
            <div className="pill-row">
              {methods.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}