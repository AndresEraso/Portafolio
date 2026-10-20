export interface TechItem {
  name: string;
  context: 'work' | 'projects';
  iconName?: string;
}

export interface TechCategory {
  id: string;
  titleKey: 'languages' | 'cloud' | 'data' | 'apis' | 'databases' | 'infrastructure' | 'collaboration' | 'web';
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
      linkedin: null as string | null, // Configurar aquí cuando se disponga de la URL
      email: null as string | null, // Configurar aquí cuando se disponga del correo
      resumeUrl: null as string | null, // Configurar aquí cuando se disponga del archivo (ej: '/documents/CV_Duber_Eraso.pdf')
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
      items: [
        { name: 'MySQL', context: 'work', iconName: 'Database' },
        { name: 'SQL', context: 'work', iconName: 'Database' },
      ],
    },
    {
      id: 'infrastructure',
      titleKey: 'infrastructure',
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
      items: [
        { name: 'React', context: 'projects', iconName: 'CodeXml' },
        { name: 'Tailwind CSS', context: 'projects', iconName: 'Layers' },
        { name: 'Unity', context: 'projects', iconName: 'Gamepad2' },
      ],
    },
  ] satisfies readonly TechCategory[],

  projects: [
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
