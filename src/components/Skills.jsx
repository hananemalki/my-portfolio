import Reveal from './Reveal.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { strings } from '../strings.js'

const mainSkills = [
  { title: { fr: 'Backend', en: 'Backend' }, items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST API', 'Maven'] },
  { title: { fr: 'Frontend', en: 'Frontend' }, items: ['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: { fr: 'Bases de données', en: 'Databases' }, items: ['MySQL', 'Oracle', 'SQL Server', 'MongoDB', 'SQL', 'PL/SQL'] },
  { title: { fr: 'Architecture', en: 'Architecture' }, items: ['MVC', 'DAO', 'Repository', 'Factory', 'Singleton', 'Builder', 'Strategy', 'SOLID', 'Clean Code'] },
  { title: { fr: 'DevOps & Cloud', en: 'DevOps & Cloud' }, items: ['Git', 'GitLab CI/CD', 'Jenkins', 'Docker', 'AWS', 'Amazon S3', 'AWS Bedrock'] },
  { title: { fr: 'Tests', en: 'Testing' }, items: ['JUnit 5', 'Mockito', 'Selenium', 'Cucumber', 'JMeter', 'SonarQube', 'JaCoCo', 'Jest'] },
  { title: { fr: 'IA Générative', en: 'Generative AI' }, items: ['LangChain4j', 'RAG', 'Advanced RAG', 'Embeddings', 'Qdrant', 'Redis', 'LLM', 'AI Agents'] },
  { title: { fr: 'Messaging', en: 'Messaging' }, items: ['Apache Kafka', 'Kafka Connect', 'Confluent', 'Event-Driven Architecture'] },
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="skills">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">{t(strings.skills.eyebrow)}</div>
          <h2 className="sectitle">{t(strings.skills.title)}</h2>
          <p className="section-intro">{t(strings.skills.intro)}</p>
        </Reveal>

        <div className="skills-grid">
          {mainSkills.map((group, i) => (
            <Reveal className="skill-card" key={i}>
              <div className="skill-card-top">
                <span className="skill-number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t(group.title)}</h3>
              </div>
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

      </div>
    </section>
  )
}
