export interface TechItem {
  name: string;
  context: 'work' | 'projects';
  iconName?: string;
}

export type TechDomainGroup = 'core' | 'ops' | 'complementary';

export type HoneycombCategoryKey =
  | 'backend'
  | 'cloud'
  | 'data'
  | 'databases'
  | 'tools'
  | 'frontend';

export type HoneycombTechKey =
  | 'java'
  | 'scala'
  | 'python'
  | 'aws'
  | 'awsS3'
  | 'awsEmr'
  | 'awsLambda'
  | 'awsApiGateway'
  | 'spark'
  | 'airflow'
  | 'hadoop'
  | 'sql'
  | 'mysql'
  | 'mongodb'
  | 'linux'
  | 'postman'
  | 'git'
  | 'bitbucket'
  | 'jira'
  | 'typescript'
  | 'javascript'
  | 'react'
  | 'tailwind'
  | 'csharp'
  | 'cpp'
  | 'unity';

export interface HoneycombTechItem {
  id: HoneycombTechKey;
  name: string;
  icon: string;
  accentColor: string;
  tileBg?: string;
  fullBleed?: boolean;
  context: 'work' | 'projects';
  category: HoneycombCategoryKey;
  priority?: boolean;
}

export interface TechCategory {
  id: string;
  titleKey: 'languages' | 'cloud' | 'data' | 'apis' | 'databases' | 'infrastructure' | 'collaboration' | 'web';
  domainGroup: TechDomainGroup;
  items: readonly TechItem[];
  highlight?: boolean;
}

export interface WorkExperienceData {
  id: 'stt';
  type: 'employment';
  company: string;
  role: string;
  startDate: string; // 'YYYY-MM'
  current: boolean;
  modality: string;
  technologies: {
    languages: readonly string[];
    cloud: readonly string[];
    orchestration: readonly string[];
    systems: readonly string[];
    apis: readonly string[];
    collaboration: readonly string[];
  };
}

export interface VolunteerExperienceData {
  id: 'icetex';
  type: 'volunteering';
  organization: string;
  role: string;
  startDate: string;
  current: boolean;
  period: string;
  description: string;
}

export type ExperienceItem = WorkExperienceData | VolunteerExperienceData;

export interface ExperienceData {
  company: string;
  role: string;
  startDate: string; // 'YYYY-MM'
  current: boolean;
  modality: string;
  technologies: {
    languages: readonly string[];
    cloud: readonly string[];
    orchestration: readonly string[];
    systems: readonly string[];
    apis: readonly string[];
    collaboration: readonly string[];
  };
}

export interface ProjectData {
  id: 'nimpeMisak' | 'eventManager';
  name: string;
  status: 'inDevelopment' | 'completed';
  kind: 'academic' | 'collaborative' | 'personal';
  technologies: readonly string[];
  repoUrl: string | null;
  demoUrl: string | null;
  hasDetailView: boolean;
}

export interface EducationData {
  institution: string;
  program: string;
  startDate: string;
  expectedCompletion: string;
  status: 'inProgress';
}

export interface CertificationData {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string | null;
  type: 'careerPath' | 'course' | 'bootcamp' | 'training';
  category: 'security' | 'ai';
  identifier?: string;
  platform?: string;
  hasTopics?: boolean;
}

export interface SocialLinks {
  github: string;
  linkedin: string | null;
  email: string | null;
  whatsapp?: string | null;
  instagram?: string | null;
  resumeUrl: string | null;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Duber Andrés Eraso Uni',
    shortName: 'Duber Eraso',
    location: 'Popayán, Cauca, Colombia',
    role: 'Desarrollador de back-end / Backend Developer',
    headlineKey: 'hero',
    social: {
      github: 'https://github.com/AndresEraso',
      linkedin: null as string | null, // Configurar aquí cuando se disponga de la URL de LinkedIn
      email: 'dubereraso@unicauca.edu.co', // Correo profesional confirmado (Universidad del Cauca)
      whatsapp: null as string | null, // Configurar aquí cuando se disponga de enlace seguro (ej: 'https://wa.me/...')
      instagram: null as string | null, // Configurar aquí cuando se disponga de perfil profesional verificado
      resumeUrl: null as string | null, // Configurar aquí cuando se disponga del archivo (ej: './documents/CV_Duber_Eraso.pdf')
    } satisfies SocialLinks,
  },

  experience: {
    company: 'ST&T LTDA',
    role: 'Desarrollador de back-end',
    startDate: '2026-01',
    current: true,
    modality: 'Remoto',
    technologies: {
      languages: ['Java', 'Scala', 'Python'],
      cloud: ['AWS', 'Amazon S3', 'Amazon EMR', 'AWS Lambda', 'Amazon API Gateway'],
      orchestration: ['Apache Airflow', 'Apache Spark', 'Apache Hadoop'],
      systems: ['Linux', 'SQL', 'MySQL'],
      apis: ['Postman', 'REST APIs'],
      collaboration: ['Bitbucket', 'Jira', 'Git', 'Scrum'],
    },
  } satisfies ExperienceData,

  experiences: [
    {
      id: 'stt',
      type: 'employment',
      company: 'ST&T LTDA',
      role: 'Desarrollador de back-end',
      startDate: '2026-01',
      current: true,
      modality: 'Remoto',
      technologies: {
        languages: ['Java', 'Scala', 'Python'],
        cloud: ['AWS', 'Amazon S3', 'Amazon EMR', 'AWS Lambda', 'Amazon API Gateway'],
        orchestration: ['Apache Airflow', 'Apache Spark', 'Apache Hadoop'],
        systems: ['Linux', 'SQL', 'MySQL'],
        apis: ['Postman', 'REST APIs'],
        collaboration: ['Bitbucket', 'Jira', 'Git', 'Scrum'],
      },
    },
    {
      id: 'icetex',
      type: 'volunteering',
      organization: 'Proyecto Comunitario ICETEX',
      role: 'Docente voluntario',
      startDate: '2023',
      current: true,
      period: '2023 – Actualidad',
      description:
        'Brindo clases de informática a estudiantes, fortaleciendo sus conocimientos en programación y tecnología.',
    },
  ] satisfies readonly ExperienceItem[],

  techCategories: [
    {
      id: 'languages',
      titleKey: 'languages',
      domainGroup: 'core',
      highlight: true,
      items: [
        { name: 'Java', context: 'work', iconName: 'Coffee' },
        { name: 'Scala', context: 'work', iconName: 'CodeXml' },
        { name: 'Python', context: 'work', iconName: 'Terminal' },
        { name: 'TypeScript', context: 'projects', iconName: 'CodeXml' },
        { name: 'JavaScript', context: 'projects', iconName: 'CodeXml' },
        { name: 'C#', context: 'projects', iconName: 'CodeXml' },
        { name: 'C++', context: 'projects', iconName: 'CodeXml' },
      ],
    },
    {
      id: 'cloud',
      titleKey: 'cloud',
      domainGroup: 'core',
      highlight: true,
      items: [
        { name: 'Amazon S3', context: 'work', iconName: 'Database' },
        { name: 'Amazon EMR', context: 'work', iconName: 'Server' },
        { name: 'AWS Lambda', context: 'work', iconName: 'Zap' },
        { name: 'Amazon API Gateway', context: 'work', iconName: 'Network' },
      ],
    },
    {
      id: 'data',
      titleKey: 'data',
      domainGroup: 'core',
      highlight: true,
      items: [
        { name: 'Apache Spark', context: 'work', iconName: 'Cpu' },
        { name: 'Apache Hadoop', context: 'work', iconName: 'Boxes' },
        { name: 'Apache Airflow', context: 'work', iconName: 'Workflow' },
        { name: 'Amazon EMR', context: 'work', iconName: 'Server' },
        { name: 'Amazon S3', context: 'work', iconName: 'Database' },
        { name: 'SQL', context: 'work', iconName: 'Database' },
      ],
    },
    {
      id: 'apis',
      titleKey: 'apis',
      domainGroup: 'core',
      highlight: true,
      items: [
        { name: 'Java', context: 'work', iconName: 'Coffee' },
        { name: 'Scala', context: 'work', iconName: 'CodeXml' },
        { name: 'Python', context: 'work', iconName: 'Terminal' },
        { name: 'REST APIs', context: 'work', iconName: 'Workflow' },
        { name: 'Postman', context: 'work', iconName: 'Send' },
        { name: 'AWS Lambda', context: 'work', iconName: 'Zap' },
        { name: 'Amazon API Gateway', context: 'work', iconName: 'Network' },
      ],
    },
    {
      id: 'databases',
      titleKey: 'databases',
      domainGroup: 'ops',
      items: [
        { name: 'MySQL', context: 'work', iconName: 'Database' },
        { name: 'SQL', context: 'work', iconName: 'Database' },
      ],
    },
    {
      id: 'infrastructure',
      titleKey: 'infrastructure',
      domainGroup: 'ops',
      items: [
        { name: 'Linux', context: 'work', iconName: 'Terminal' },
        { name: 'Entornos de Clúster', context: 'work', iconName: 'Server' },
        { name: 'Plantillas de Clúster', context: 'work', iconName: 'Layers' },
        { name: 'Acceso Remoto', context: 'work', iconName: 'Monitor' },
        { name: 'Fundamentos de Redes', context: 'projects', iconName: 'Network' },
      ],
    },
    {
      id: 'collaboration',
      titleKey: 'collaboration',
      domainGroup: 'ops',
      items: [
        { name: 'Git', context: 'work', iconName: 'GitBranch' },
        { name: 'Bitbucket', context: 'work', iconName: 'FolderGit2' },
        { name: 'Jira', context: 'work', iconName: 'ListChecks' },
        { name: 'Scrum', context: 'work', iconName: 'Users' },
      ],
    },
    {
      id: 'web',
      titleKey: 'web',
      domainGroup: 'complementary',
      items: [
        { name: 'React', context: 'projects', iconName: 'CodeXml' },
        { name: 'Tailwind CSS', context: 'projects', iconName: 'Layers' },
        { name: 'Unity', context: 'projects', iconName: 'Gamepad2' },
      ],
    },
  ] satisfies readonly TechCategory[],

  techHoneycomb: [
    // Fila 1 (Core Backend & AWS Cloud)
    {
      id: 'java',
      name: 'Java',
      icon: '/icons/tech/java.svg',
      accentColor: '#E76F00',
      context: 'work',
      category: 'backend',
      priority: true,
    },
    {
      id: 'scala',
      name: 'Scala',
      icon: '/icons/tech/scala.svg',
      accentColor: '#DC322F',
      context: 'work',
      category: 'backend',
      priority: true,
    },
    {
      id: 'python',
      name: 'Python',
      icon: '/icons/tech/python.svg',
      accentColor: '#3776AB',
      context: 'work',
      category: 'backend',
      priority: true,
    },
    {
      id: 'aws',
      name: 'AWS',
      icon: '/icons/tech/aws.svg',
      accentColor: '#FF9900',
      tileBg: '#F8FAFC',
      context: 'work',
      category: 'cloud',
      priority: true,
    },
    {
      id: 'awsS3',
      name: 'Amazon S3',
      icon: '/icons/tech/aws-s3.svg',
      accentColor: '#7AA116',
      tileBg: '#7AA116',
      fullBleed: true,
      context: 'work',
      category: 'cloud',
      priority: true,
    },
    {
      id: 'awsEmr',
      name: 'Amazon EMR',
      icon: '/icons/tech/aws-emr.svg',
      accentColor: '#8C4FFF',
      tileBg: '#8C4FFF',
      fullBleed: true,
      context: 'work',
      category: 'cloud',
      priority: true,
    },
    {
      id: 'awsLambda',
      name: 'AWS Lambda',
      icon: '/icons/tech/aws-lambda.svg',
      accentColor: '#ED7100',
      tileBg: '#ED7100',
      fullBleed: true,
      context: 'work',
      category: 'cloud',
      priority: true,
    },
    // Fila 2 (AWS APIs, Datos Distribuidos & Bases de Datos)
    {
      id: 'awsApiGateway',
      name: 'Amazon API Gateway',
      icon: '/icons/tech/aws-apigateway.svg',
      accentColor: '#8C4FFF',
      tileBg: '#8C4FFF',
      fullBleed: true,
      context: 'work',
      category: 'cloud',
      priority: true,
    },
    {
      id: 'spark',
      name: 'Apache Spark',
      icon: '/icons/tech/spark.svg',
      accentColor: '#E25A1C',
      context: 'work',
      category: 'data',
      priority: true,
    },
    {
      id: 'airflow',
      name: 'Apache Airflow',
      icon: '/icons/tech/airflow.svg',
      accentColor: '#017CEE',
      context: 'work',
      category: 'data',
      priority: true,
    },
    {
      id: 'hadoop',
      name: 'Apache Hadoop',
      icon: '/icons/tech/hadoop.svg',
      accentColor: '#FFCC00',
      context: 'work',
      category: 'data',
      priority: true,
    },
    {
      id: 'sql',
      name: 'SQL',
      icon: '/icons/tech/sql.svg',
      accentColor: '#0078D4',
      context: 'work',
      category: 'databases',
      priority: true,
    },
    {
      id: 'mysql',
      name: 'MySQL',
      icon: '/icons/tech/mysql.svg',
      accentColor: '#00758F',
      context: 'work',
      category: 'databases',
    },
    // Fila 3 (NoSQL, Sistemas, APIs, Colaboración & Tipado)
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: '/icons/tech/mongodb.svg',
      accentColor: '#47A248',
      context: 'projects',
      category: 'databases',
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: '/icons/tech/linux.svg',
      accentColor: '#FCC624',
      context: 'work',
      category: 'tools',
    },
    {
      id: 'postman',
      name: 'Postman',
      icon: '/icons/tech/postman.svg',
      accentColor: '#FF6C37',
      context: 'work',
      category: 'tools',
    },
    {
      id: 'git',
      name: 'Git',
      icon: '/icons/tech/git.svg',
      accentColor: '#F05032',
      context: 'work',
      category: 'tools',
    },
    {
      id: 'bitbucket',
      name: 'Bitbucket',
      icon: '/icons/tech/bitbucket.svg',
      accentColor: '#2684FF',
      context: 'work',
      category: 'tools',
    },
    {
      id: 'jira',
      name: 'Jira',
      icon: '/icons/tech/jira.svg',
      accentColor: '#0052CC',
      context: 'work',
      category: 'tools',
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: '/icons/tech/typescript.svg',
      accentColor: '#3178C6',
      tileBg: '#007ACC',
      context: 'projects',
      category: 'frontend',
    },
    // Fila 4 (Web & Videojuegos)
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: '/icons/tech/javascript.svg',
      accentColor: '#F7DF1E',
      tileBg: '#F0DB4F',
      context: 'projects',
      category: 'frontend',
    },
    {
      id: 'react',
      name: 'React',
      icon: '/icons/tech/react.svg',
      accentColor: '#61DAFB',
      context: 'projects',
      category: 'frontend',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      icon: '/icons/tech/tailwindcss.svg',
      accentColor: '#38BDF8',
      context: 'projects',
      category: 'frontend',
    },
    {
      id: 'csharp',
      name: 'C#',
      icon: '/icons/tech/csharp.svg',
      accentColor: '#9B4993',
      context: 'projects',
      category: 'frontend',
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: '/icons/tech/cplusplus.svg',
      accentColor: '#00599C',
      context: 'projects',
      category: 'frontend',
    },
    {
      id: 'unity',
      name: 'Unity',
      icon: '/icons/tech/unity.svg',
      accentColor: '#94A3B8',
      tileBg: '#F1F5F9',
      context: 'projects',
      category: 'frontend',
    },
  ] satisfies readonly HoneycombTechItem[],

  projects: [
    {
      id: 'eventManager',
      name: 'EventManager',
      status: 'completed',
      kind: 'collaborative',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Laravel', 'PHP', 'MySQL'],
      repoUrl: 'https://github.com/maxskaink/EventManager',
      demoUrl: null,
      hasDetailView: true,
    },
    {
      id: 'nimpeMisak',
      name: 'Ñimpe Misak: La gente del agua',
      status: 'inDevelopment',
      kind: 'academic',
      technologies: ['Unity', 'C#'],
      repoUrl: null,
      demoUrl: null,
      hasDetailView: true,
    },
  ] satisfies readonly ProjectData[],

  education: {
    institution: 'Universidad del Cauca',
    program: 'Ingeniería de Sistemas',
    startDate: '2021-10',
    expectedCompletion: '2027-04',
    status: 'inProgress',
  } satisfies EducationData,

  certifications: [
    {
      id: 'cisco-junior-cybersecurity',
      name: 'Junior Cybersecurity Analyst Career Path',
      issuer: 'Cisco Networking Academy',
      date: '2025-11',
      credentialUrl: 'https://www.credly.com/badges/d5d62d40-cbd6-4197-bd8c-4261daeec74a',
      type: 'careerPath',
      category: 'security',
    },
    {
      id: 'ccna-intro-networks',
      name: 'CCNA: Introducción a las redes',
      issuer: 'Universidad del Cauca',
      date: '2025-04',
      credentialUrl: null,
      type: 'course',
      category: 'security',
    },
    {
      id: 'cisco-intro-cybersecurity',
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: '2025-09',
      credentialUrl: 'https://www.credly.com/badges/1fc67a0a-71fb-4c77-9c42-ed6dbe670dfb',
      type: 'course',
      category: 'security',
    },
    {
      id: 'utp-ai-advanced',
      name: 'Inteligencia Artificial Nivel Avanzado',
      issuer: 'Universidad Tecnológica de Pereira (UTP)',
      platform: 'Acreditta',
      credentialUrl: null,
      type: 'training',
      category: 'ai',
      hasTopics: true,
    },
    {
      id: 'utp-ai-basic',
      name: 'Bootcamp Inteligencia Artificial Nivel Básico',
      issuer: 'UTP-faceIT',
      date: '2024-09',
      identifier: 'IAEXP-C5',
      credentialUrl: null,
      type: 'bootcamp',
      category: 'ai',
    },
  ] satisfies readonly CertificationData[],
} as const;
