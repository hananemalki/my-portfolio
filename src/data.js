import cvFile from './cv hanane malki.pdf'

export const profile = {
  name: 'Malki Hanane',
  role: 'Java Full Stack Developer',
  pitch:
    "Développeuse Java Full Stack, spécialisée dans la conception et le développement d'applications web avec Java, Spring Boot, Angular et React. Je m'intéresse également à l'architecture logicielle, au DevOps et à l'intégration de solutions d'IA générative.",
  location: 'Casablanca, Maroc',
  availability: 'Disponible pour une opportunité en développement Java Full Stack',
  email: 'hanane.malki003@gmail.com',
  phone: '+212690022136',
  phoneDisplay: '+212 690022136',
  linkedin: 'https://linkedin.com/in/hanane-malki-1445312a7',
  github: 'https://github.com/hananemalki',
  cvFile: cvFile,
}

export const quickFacts = [
  { num: 'Java', label: 'Backend principal' },
  { num: 'Full Stack', label: 'Frontend & Backend' },
  { num: '3', label: 'stages en développement' },
]

export const navItems = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'education', label: 'Formation' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
]

export const experiences = [
  {
    company: 'Capgemini',
    logo: '/logos/cap.png',
    color: '#2563eb',
    active: false,
    badge: 'Stage PFE',
    period: '03 mars – 31 août 2026 · Stage de fin d’études',
    title: 'Développeuse Java Full Stack / IA Générative',
    desc:
      "Conception et développement d’un assistant intelligent permettant d’explorer la documentation technique interne en langage naturel, basé sur une architecture Advanced RAG.",
    tasks: [
      'Conception de l’architecture backend et développement des API REST avec Spring Boot',
      'Développement de l’interface web avec Angular',
      'Intégration de modèles LLM avec AWS Bedrock et LangChain4j',
      'Mise en place de la recherche vectorielle avec Qdrant',
      'Mise en cache des données et réponses avec Redis',
      'Intégration de l’API GitLab pour la documentation technique',
      'Conception d’une interface conversationnelle pour l’assistant intelligent',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Angular',
      'LangChain4j',
      'AWS Bedrock',
      'Qdrant',
      'Redis',
      'MySQL',
      'REST API',
      'GitLab API',
    ],
  },

  {
    company: 'MedYouIn',
    logo: '/logos/medyou.png',
    color: '#059669',
    active: false,
    badge: 'Stage',
    period: 'Avril – Mai 2024 · 2 mois',
    title: 'Développeuse Backend',
    desc:
      "Développement d’une API REST pour la gestion et le suivi du stock au sein de l’entreprise.",
    tasks: [
      'Conception et développement des endpoints REST',
      'Développement des opérations CRUD pour la gestion du stock',
      'Gestion de la base de données MySQL',
      'Tests et validation des API avec Postman',
      'Documentation des services avec Swagger',
    ],
    stack: [
      'Laravel',
      'PHP',
      'REST API',
      'MySQL',
      'Git',
      'Postman',
      'Swagger',
    ],
  },

  {
    company: 'RADEM',
    logo: '/logos/radem.png',
    color: '#749eeb',
    active: false,
    badge: 'Stage',
    period: 'Avril – Mai 2023 · 2 mois',
    title: 'Développeuse Web',
    desc:
      "Développement d’une application web destinée à automatiser la gestion et l’affectation des releveurs.",
    tasks: [
      'Développement des fonctionnalités frontend et backend',
      'Création d’interfaces web dynamiques',
      'Communication entre frontend et backend via API',
      'Gestion et manipulation des données',
      'Automatisation du processus d’affectation des releveurs',
    ],
    stack: [
      'Laravel',
      'React',
      'Node.js',
      'AJAX',
      'Axios',
      'MySQL',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Java & Spring',
    items: [
      'Java 17/21',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'REST API',
      'Maven',
      'Servlets & JSP',
      'Tomcat',
    ],
  },

  {
    title: 'Frontend',
    items: [
      'Angular',
      'React',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Axios',
    ],
  },

  {
    title: 'Architecture & Design Patterns',
    items: [
      'MVC',
      'DAO',
      'Repository',
      'Factory',
      'Singleton',
      'Builder',
      'Strategy',
      'SOLID',
      'Clean Code',
    ],
  },

  {
    title: 'Bases de données',
    items: [
      'MySQL',
      'Oracle',
      'SQL Server',
      'MongoDB',
      'SQL',
      'PL/SQL',
    ],
  },

  {
    title: 'DevOps & Cloud',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Docker',
      'Jenkins',
      'CI/CD',
      'AWS',
      'AWS Bedrock',
      'Amazon S3',
      'OCI',
    ],
  },

  {
    title: 'IA Générative',
    items: [
      'Prompt Engineering',
      'LangChain4j',
      'RAG',
      'Advanced RAG',
      'Fine-tuning',
      'Embeddings',
      'Qdrant',
      'ChromaDB',
      'FAISS',
      'Pinecone',
      'Claude',
      'GPT',
      'AI Agents',
    ],
  },

  {
    title: 'Tests & Qualité',
    items: [
      'JUnit 5',
      'Mockito',
      'Selenium',
      'Cucumber',
      'JMeter',
      'JaCoCo',
      'SonarQube',
      'Jest',
    ],
  },

  {
    title: 'Messaging',
    items: [
      'Apache Kafka',
      'Kafka Connect',
      'Confluent',
      'Event-Driven Architecture',
    ],
  },
]

export const methods = [
  'Scrum',
  'Agile',
  'SAFe',
  'Jira',
  'Confluence',
]

export const education = [
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
      'DevOps',
      'Tests',
      'IA générative',
    ],
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
      'JEE',
      'Web',
      'REST API',
      'Bases de données',
      'Développement logiciel',
    ],
  },

  {
    title: 'Génie Informatique — Option Génie Logiciel',
    school:
      'École Supérieure de Technologie — Université Moulay Ismaïl, Meknès',
    period: '2021 – 2023',
    logo: '/logos/est.png',
    skills: [
      'Java',
      'Web',
      'JavaScript',
      'SQL',
      'Git',
      'Développement logiciel',
    ],
  },
]

/* Ajoute le fichier logo correspondant dans public/logos/ (voir noms ci-dessous).
   Si "logo" est absent ou introuvable, la carte retombe automatiquement
   sur l'emoji "icon" — aucune casse possible. */
export const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 — Certified Foundations Associate',
    status: 'done',
    icon: '☁️',
    logo: '/logos/oci.png',
    color: '#ea580c',
  },

  {
    name: 'Apache Kafka Foundations (Confluent)',
    status: 'done',
    icon: '☁️',
    logo: '/logos/kafka.jpg',
    color: '#1311a1',
  },

  {
    name: 'Generative AI Fundamentals',
    status: 'done',
    icon: '✦',
    logo: '/logos/cap.png',
    color: '#2563eb',

  },

  {
    name: 'Oracle Certified Professional — Java SE 17 Developer',
    status: 'wip',
    icon: '',
    logo: '/logos/oci.png',
    color: '#ea580c',
  },

]

export const focusAreas = [
  {
    key: 'java',
    icon: 'J',
    color: '#2563eb',
    title: 'Java Full Stack',
    summary:
      'Développement d’applications web avec Java, Spring Boot, Angular et React.',
    details:
      'Conception et développement d’applications web de bout en bout : API REST avec Spring Boot, persistance avec JPA/Hibernate et interfaces utilisateurs avec Angular ou React.',
    tags: [
      'Java',
      'Spring Boot',
      'Angular',
      'React',
      'REST API',
    ],
  },

  {
    key: 'architecture',
    icon: '</>',
    color: '#0f172a',
    title: 'Architecture logicielle',
    summary:
      'Conception de solutions structurées, maintenables et évolutives.',
    details:
      'Mise en pratique des architectures en couches, MVC, DAO et Repository ainsi que des principes SOLID, Clean Code et des Design Patterns.',
    tags: [
      'MVC',
      'Repository',
      'SOLID',
      'Design Patterns',
      'Clean Code',
    ],
  },

  {
    key: 'ia',
    icon: '{ }',
    color: '#7c3aed',
    title: 'IA Générative',
    summary:
      'Intégration de LLMs et architectures RAG dans des applications réelles.',
    details:
      'Expérience dans la conception de pipelines RAG et Advanced RAG, l’intégration de modèles LLM avec AWS Bedrock et LangChain4j ainsi que la recherche vectorielle avec Qdrant.',
    tags: [
      'RAG',
      'Advanced RAG',
      'LangChain4j',
      'AWS Bedrock',
      'Qdrant',
    ],
  },

  {
    key: 'devops',
    icon: '∞',
    color: '#059669',
    title: 'DevOps & Cloud',
    summary:
      'Automatisation, intégration continue et déploiement des applications.',
    details:
      'Utilisation des outils de versioning, CI/CD, conteneurisation et services cloud pour accompagner le développement jusqu’au déploiement.',
    tags: [
      'Git',
      'Docker',
      'Jenkins',
      'GitLab CI/CD',
      'AWS',
    ],
  },
]

export const aboutStats = [
  {
    num: 'Java',
    label: 'Backend principal',
  },

  {
    num: 'Full Stack',
    label: 'Frontend + Backend',
  },

  {
    num: '2026',
    label: 'Fin du Master',
  },
]

export const languages = [
  {
    name: 'Français',
    level: 'DELF B2',
  },

  {
    name: 'Anglais',
    level: 'B2',
  },

  {
    name: 'Arabe',
    level: '',
  },
]

/* Chaque projet attend deux visuels dans public/ :
   - image  : capture d'écran / bannière du projet (ratio ~16:9)
   - icon   : petit logo (celui de l'entreprise du stage, ou un logo
              dédié au projet si c'est un projet académique)
   Si un fichier est absent ou introuvable, la carte retombe
   automatiquement sur un monogramme — aucune casse possible pendant
   que tu ajoutes les fichiers un par un. */
export const professionalProjects = [
  {
    key: 'smart-assistant',
    image: '/projects/smart-assistant.png',
    icon: '/logos/cap.png',
    color: '#2563eb',
    badge: 'Stage · Capgemini',
    title: 'Smart Assistant — Assistant documentaire intelligent',
    period: 'Mars – Août 2026',
    desc:
      "Assistant intelligent capable de collecter automatiquement les SFD d'une équipe, les pages Confluence associées ainsi que les projets déployés sur GitLab, puis d'extraire et de nettoyer ce contenu avant de l'indexer dans une base vectorielle. Une interface de chat permet ensuite d'interroger l'ensemble de ces sources en langage naturel.",
    tags: [
      'Java',
      'Spring Boot',
      'Angular',
      'Redis',
      'Qdrant',
      'MySQL',
      'GitLab API',
      'Confluence API',
      'RAG',
    ],
  },

  {
    key: 'e-agri',
    image: '/logos/Eagri.jpg',
    icon: '/logos/est.png',
    color: '#059669',
    badge: 'Projet académique - PFE',
    title: 'E-Agri — Aide à la décision agricole',
    period: 'Mars – Juin 2023',

    desc:
      "Application qui prend en entrée les coordonnées GPS d'une zone agricole et restitue les données météorologiques ainsi que les prévisions associées. Elle propose, selon la zone, les cultures adaptées et des recommandations d'amélioration, en s'appuyant sur des relevés de capteurs connectés.",
    tags: [
      'Spring Boot',
      'Java',
      'Thymeleaf',
      'Google Maps API',
      'MongoDB',
      'Arduino',

    ],
  },

  {
    key: 'releveurs-spa',
    image: '/logos/ce.png',
    icon: '/logos/radem.png',
    color: '#7c3aed',
    badge: 'Stage · RADEM',
    title: 'Gestion des releveurs — SPA géolocalisée',
    period: 'Avril – Mai 2023',
    desc:
      "Application web (Single Page Application) dédiée à l'affectation des releveurs de compteurs aux comptes utilisateurs selon des zones géographiques précises, avec gestion des comptes et suivi des affectations.",
    tags: [
      'React',
      'Angular',
      'Node.js',
      'SPA',
      'REST API',
      'MySQL',
    ],
  },
]

/* Projets personnels / académiques réalisés en dehors des stages,
   même structure que professionalProjects pour pouvoir réutiliser
   le composant Projects (ou un composant dédié PersonalProjects). */
export const personalProjects = [
  {
    key: 'gestionnaire-cv',
    color: '#d97706',
    badge: 'Projet personnel · FSDM Fès',
    title: 'Gestionnaire de CV',
    period: '2025 · 1 mois',
    desc:
      "Développement d'une application web de gestion des CV avec recherche dynamique et export PDF. Manipulation de données JSON et implémentation d'une interface utilisateur avec JavaScript (ES6).",
    tags: [
      'Node.js',
      'JavaScript (ES6)',
      'HTML',
      'CSS',
      'Express',
      'JSON',
    ],
  },

  {
    key: 'generateur-uml',
    color: '#0891b2',
    badge: 'Projet personnel · FSDM Fès',
    title: 'Générateur de diagrammes UML',
    period: '2025 · 2 mois',
    desc:
      "Développement d'une application de bureau pour la génération automatique de diagrammes UML, après analyse approfondie de projets Java.",
    tags: [
      'Java',
      'Swing',
      'DOM',
      'XMI',
      'JUnit',
      'Git',
    ],
  },
]