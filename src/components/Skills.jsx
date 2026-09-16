import { skillGroups } from '../data.js'
import Reveal from './Reveal.jsx'

const mainSkills = [
  {
    title: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'REST API',
      'Maven'
    ]
  },

  {
    title: 'Frontend',
    items: [
      'Angular',
      'React',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Bootstrap'
    ]
  },

  {
    title: 'Bases de données',
    items: [
      'MySQL',
      'Oracle',
      'SQL Server',
      'MongoDB',
      'SQL',
      'PL/SQL'
    ]
  },

  {
    title: 'Architecture',
    items: [
      'MVC',
      'DAO',
      'Repository',
      'Factory',
      'Singleton',
      'Builder',
      'Strategy',
      'SOLID',
      'Clean Code'
    ]
  },

  {
    title: 'DevOps & Cloud',
    items: [
      'Git',
      'GitLab CI/CD',
      'Jenkins',
      'Docker',
      'AWS',
      'Amazon S3',
      'AWS Bedrock'
    ]
  },

  {
    title: 'Tests',
    items: [
      'JUnit 5',
      'Mockito',
      'Selenium',
      'Cucumber',
      'JMeter',
      'SonarQube',
      'JaCoCo',
      'Jest'
    ]
  },

  {
    title: 'IA Générative',
    items: [
      'LangChain4j',
      'RAG',
      'Advanced RAG',
      'Embeddings',
      'Qdrant',
      'Redis',
      'LLM',
      'AI Agents'
    ]
  },

  {
    title: 'Messaging',
    items: [
      'Apache Kafka',
      'Kafka Connect',
      'Confluent',
      'Event-Driven Architecture'
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">

        <Reveal>
          <div className="eyebrow">
            Stack technique
          </div>

          <h2 className="sectitle">
            Java Full Stack
          </h2>

          <p className="section-intro">
            Un stack orienté développement d’applications robustes,
            maintenables et évolutives.
          </p>
        </Reveal>

        <div className="skills-grid">

          {mainSkills.map((group) => (
            <Reveal
              className="skill-card"
              key={group.title}
            >

              <div className="skill-card-top">
                <span className="skill-number">
                  {String(mainSkills.indexOf(group) + 1).padStart(2, '0')}
                </span>

                <h3>{group.title}</h3>
              </div>

              <div className="pill-row">

                {group.items.map((item) => (
                  <span
                    className="pill"
                    key={item}
                  >
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