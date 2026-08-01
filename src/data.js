import cvFile from './cv hanane malki.pdf'

export const profile = {
  name: 'Malki Hanane',
  role: 'Développeuse Java — IA Générative & Qualité Logicielle',
  pitch:
    "Développeuse Java, spécialisée en IA générative et qualité logicielle. Solide expertise en développement d'applications back-end et en conception de solutions robustes, scalables et de haute qualité.",
  location: 'Casablanca, Maroc',
  availability: 'disponible pour un poste de développeuse Java / IA générative',
  email: 'hanane.malki003@gmail.com',
  phone: '+212690022136',
  phoneDisplay: '+212 690022136',
  linkedin: 'https://linkedin.com/in/hanane-malki-1445312a7',
  github: 'https://github.com/hananemalki',
  cvFile: cvFile,
}
export const quickFacts = [
  { num: '3', label: 'stages en développement & IA' },
  { num: '4', label: 'certifications obtenues' },
  { num: '2026', label: 'année de fin de master' },
]

export const navItems = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'skills', label: 'Compétences' },
  { id: 'education', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

export const experiences = [
  {
    company: 'Capgemini',
    active: true,
    badge: 'en cours',
    period: '03 mars – 31 août 2026 · Stage de fin d\u2019études',
    title: 'Assistant intelligent pour l\u2019exploration de documentation technique',
    desc: "Conception et développement d'un assistant basé sur une architecture Advanced RAG, permettant d'interroger en langage naturel la documentation technique interne.",
    stack: ['LangChain4j', 'Spring Boot', 'AWS Bedrock', 'Angular', 'Qdrant', 'Redis', 'MySQL', 'GitLab API', 'REST API'],
  },
  {
    company: 'MedYouIn',
    active: false,
    period: 'Avril – Mai 2024 · Stage de fin d\u2019études',
    title: 'API REST pour la gestion du stock',
    desc: "Développement d'une API REST complète pour la gestion et le suivi du stock, avec documentation et tests d'intégration.",
    stack: ['Laravel', 'REST API', 'MySQL', 'Git', 'Postman', 'Swagger'],
  },
  {
    company: 'RADEM',
    active: false,
    period: 'Avril – Mai 2023 · Stage',
    title: 'Automatisation de la gestion des releveurs',
    desc: "Application web pour automatiser la gestion et l'affectation des releveurs, remplaçant un processus manuel par un flux digitalisé.",
    stack: ['Laravel', 'React', 'Node.js', 'AJAX', 'Axios', 'MySQL'],
  },
]

export const skillGroups = [
  {
    title: 'IA Générative & LLMs',
    items: ['Prompt Engineering', 'LangChain4j', 'RAG', 'Advanced RAG', 'Fine-tuning', 'Embeddings', 'Qdrant', 'ChromaDB', 'FAISS', 'Pinecone', 'Claude', 'GPT', 'AI Agents'],
  },
  {
    title: 'Java & Spring',
    items: ['Java 17/21', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST API', 'Maven', 'Servlets & JSP', 'Tomcat'],
  },
  {
    title: 'Développement Web',
    items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'React', 'Angular', 'Node.js', 'Bootstrap'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS Bedrock', 'Amazon S3', 'EC2', 'IAM', 'CloudFormation', 'OCI', 'Docker', 'Git / GitHub / GitLab', 'Jenkins', 'CI/CD'],
  },
  {
    title: 'Data & Messaging',
    items: ['Apache Kafka', 'Kafka Connect', 'Confluent', 'Oracle', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    title: 'Tests & Qualité',
    items: ['JUnit 5', 'Mockito', 'Selenium', 'Cucumber', 'JMeter', 'JaCoCo', 'SonarQube', 'Jest'],
  },
]

export const methods = ['Scrum', 'Agile', 'SAFe', 'Jira', 'Confluence']

export const education = [
  {
    title: 'Master Spécialisé Qualité du Logiciel',
    meta: 'Faculté des Sciences Dhar El Mehraz — USMBA Fès · 2024–2026',
  },
  {
    title: "Licence Pro. Développement des Systèmes d'Information et de Communication (DSIC)",
    meta: 'ESTM — Université Moulay Ismaïl, Meknès · 2023–2024',
  },
]

export const certifications = [
  { name: 'Oracle Cloud Infrastructure 2025 — Certified Foundations Associate', status: 'done' },
  { name: 'Apache Kafka Foundations (Confluent)', status: 'done' },
  { name: 'Udemy — Generative AI Fundamentals', status: 'done' },
  { name: 'Oracle Certified Professional — OCI Foundations Associate', status: 'wip' },
  { name: 'Injaz Al-Maghrib — Entrepreneuriat (2025)', status: 'done' },
]

export const focusAreas = [
  {
    key: 'ia',
    icon: '{ }',
    color: '#3454d1',
    title: 'IA Générative',
    summary: "Architectures RAG, agents et LLMs appliqués à des cas d'usage réels.",
    details:
      "Conception de pipelines Advanced RAG (retrieval, ré-ranking, garde-fous), intégration de LLMs en production via AWS Bedrock, et prompt engineering pensé pour la fiabilité — pas seulement pour la démo.",
    tags: ['RAG', 'LangChain4j', 'AWS Bedrock', 'Vector DB', 'AI Agents'],
  },
  {
    key: 'java',
    icon: 'J',
    color: '#c2703d',
    title: 'Développement Java',
    summary: "Applications back-end robustes avec l'écosystème Java / Spring.",
    details:
      "Conception d'APIs REST avec Spring Boot, persistance via Spring Data JPA et Hibernate, architecture en couches propre et testable, du prototype jusqu'au déploiement.",
    tags: ['Java 17/21', 'Spring Boot', 'Spring MVC', 'Hibernate', 'Maven'],
  },
  {
    key: 'qa',
    icon: '✓',
    color: '#0f8b8b',
    title: 'Qualité Logicielle',
    summary: "Tests, CI/CD et rigueur d'ingénierie pour que le code tienne en production.",
    details:
      "Stratégies de tests à plusieurs niveaux (unitaires, intégration, end-to-end), intégration continue, revue de code et attention constante à la maintenabilité et à la couverture.",
    tags: ['JUnit 5', 'Selenium', 'SonarQube', 'CI/CD', 'JaCoCo'],
  },
]

export const aboutStats = [
  { num: '2026', label: "fin du Master Qualité du Logiciel" },
  { num: '3', label: 'stages en développement & IA' },
  { num: 'FR · EN · AR', label: 'langues de travail' },
]

export const languages = [
  { name: 'Français', level: 'DELF B2' },
  { name: 'Anglais', level: 'B2' },
  { name: 'Arabe', level: 'langue maternelle' },
]