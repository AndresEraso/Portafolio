/**
 * ==========================================================================
 * TRADUCCIONES CENTRALIZADAS — español (predeterminado) e inglés.
 * --------------------------------------------------------------------------
 * Todo el texto visible del sitio vive en este archivo.
 *
 *  - Edita `es` para los textos en español y `en` para los textos en inglés.
 *  - `en` está tipado con la forma de `es` (`Dictionary`): si agregas una
 *    clave en un idioma y no en el otro, TypeScript mostrará un error.
 *  - Los nombres propios (empresa, universidad, tecnologías, credenciales
 *    oficiales, enlaces) NO están aquí, sino en `src/data/portfolio.ts`.
 *
 * Fuente del contenido: carpeta `Contenido/` (no modificada).
 * ==========================================================================
 */

export const LANGUAGES = ['es', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = 'es';

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}

/* ------------------------------------------------------------------------ */
/* ESPAÑOL                                                                  */
/* ------------------------------------------------------------------------ */
const es = {
  meta: {
    title: 'Duber Andrés Eraso Uni — Desarrollador Backend & Cloud',
    description:
      'Portafolio de Duber Andrés Eraso Uni, estudiante de Ingeniería de Sistemas en la Universidad del Cauca y desarrollador de back-end orientado a Backend, Cloud Computing (AWS), procesamiento de datos y sistemas distribuidos.',
  },

  a11y: {
    skipToContent: 'Saltar al contenido principal',
    primaryNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    moreSections: 'Mostrar más secciones',
    languageSwitcher: 'Idioma del sitio',
    switchToDark: 'Activar modo oscuro',
    switchToLight: 'Activar modo claro',
    opensInNewTab: '(se abre en una pestaña nueva)',
    homeLink: 'Duber Andrés Eraso Uni, ir al inicio',
    footerNav: 'Enlaces del pie de página',
  },

  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    education: 'Educación',
    softSkills: 'Habilidades blandas',
    languages: 'Idiomas',
    focus: 'Enfoque',
    contact: 'Contacto',
    more: 'Más',
    menu: 'Menú',
    preferences: 'Preferencias',
  },

  theme: {
    dark: 'Oscuro',
    light: 'Claro',
  },

  /* ---------------------------------------------------------------- Hero */
  hero: {
    greeting: 'Hola, soy',
    headlineStart: 'Construyo soluciones de software que conectan ',
    headlineHighlight: 'backend, datos y cloud.',
    intro:
      'Soy desarrollador de back-end y estudiante de Ingeniería de Sistemas, con experiencia en soporte y operación de procesos de datos en entornos cloud. Me interesa construir soluciones confiables, automatizar procesos y comprender cómo funcionan los sistemas distribuidos.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    roleLabel: 'Desarrollador de back-end en',
    studyLabel: 'Ingeniería de Sistemas',
    socialLabel: 'Perfiles profesionales',
    codeFile: 'perfil.ts',
    codeRole: 'Desarrollador de back-end',
    codeStatus: 'aprendiendo continuamente',
  },

  /* --------------------------------------------------------------- About */
  about: {
    title: 'Sobre mí',
    subtitle: 'Quién soy, qué experiencia estoy construyendo y hacia dónde quiero crecer.',
    paragraphs: [
      'Soy Duber Andrés Eraso Uni, estudiante de Ingeniería de Sistemas en la Universidad del Cauca y desarrollador de back-end en ST&T LTDA.',
      'Mi experiencia profesional está orientada al soporte, monitoreo y mantenimiento de procesos de datos en entornos cloud. Participo en el seguimiento de ejecuciones, el diagnóstico y la resolución de incidencias, el análisis de información y la revisión de procesos distribuidos. Esta experiencia me ha permitido comprender la importancia de la confiabilidad, la observabilidad y la calidad de los datos en sistemas que operan de manera continua.',
      'En el ámbito técnico, trabajo con lenguajes como Java, Scala y Python, y con herramientas y servicios relacionados con AWS, Apache Airflow, Amazon EMR, Amazon S3, Linux, SQL y APIs. También utilizo herramientas de colaboración y gestión de código dentro de equipos de desarrollo que trabajan con metodologías ágiles.',
      'Me interesa seguir profundizando en el diseño de soluciones backend, la automatización de procesos y la construcción de sistemas escalables y mantenibles. Disfruto aprender tecnologías nuevas, analizar problemas técnicos y colaborar con otras personas para encontrar soluciones.',
    ],
    closing:
      'Este portafolio reúne mi experiencia, formación y proyectos, y refleja mi evolución profesional en el desarrollo de software y las tecnologías cloud.',
    factsTitle: 'Perfil',
    facts: {
      location: 'Ubicación',
      education: 'Formación',
      educationValue: 'Ingeniería de Sistemas (en curso)',
      role: 'Cargo actual',
      roleValue: 'Desarrollador de back-end',
      profile: 'Perfil tecnológico',
      profileValue: 'Backend & Cloud, con experiencia complementaria en desarrollo web y bases de datos',
    },
    pillarsTitle: 'Experiencia y enfoque',
    pillars: {
      backend: {
        title: 'Backend Development',
        items: [
          'Programación y mantenimiento de soluciones de software.',
          'Trabajo con Java, Scala y Python.',
          'Uso de APIs y herramientas de desarrollo.',
        ],
      },
      cloud: {
        title: 'Cloud & Data',
        items: [
          'Trabajo con servicios y herramientas del ecosistema AWS.',
          'Monitoreo y soporte de procesos de datos.',
          'Diagnóstico de incidencias y análisis de ejecuciones.',
        ],
      },
      problemSolving: {
        title: 'Problem Solving',
        items: [
          'Investigación de errores.',
          'Análisis de información para identificar posibles causas.',
          'Colaboración con el equipo para resolver problemas técnicos.',
        ],
      },
    },
    quoteLabel: 'Filosofía de trabajo',
    quote:
      'Me gusta entender los problemas desde su origen, aprender continuamente y construir soluciones que funcionen de manera confiable.',
  },

  /* ---------------------------------------------------------- Tech stack */
  techStack: {
    title: 'Habilidades técnicas',
    subtitle:
      'Tecnologías organizadas por área y por el contexto en el que las he utilizado, priorizando las de mi experiencia profesional actual.',
    legendLabel: 'Contexto de uso',
    contexts: {
      work: 'Experiencia profesional',
      projects: 'Proyectos',
    },
    capabilitiesLabel: 'Capacidades asociadas',
    terms: {
      restApis: 'REST APIs',
      apiEndpoints: 'Endpoints de APIs',
      clusters: 'Entornos de clúster',
      clusterTemplates: 'Plantillas de clúster',
      networking: 'Fundamentos de redes',
      remoteAccess: 'Acceso a entornos remotos',
      scrum: 'Scrum',
    },
    categories: {
      languages: {
        title: 'Lenguajes de programación',
        description: 'Los lenguajes que utilizo en mi trabajo actual.',
        capabilities: [] as string[],
      },
      cloud: {
        title: 'Cloud Computing — AWS',
        description: 'Servicios del ecosistema AWS con los que trabajo en mi experiencia actual.',
        capabilities: [] as string[],
      },
      data: {
        title: 'Data Engineering & Distributed Systems',
        description: 'Soporte y operación de procesos de datos y sistemas distribuidos.',
        capabilities: [
          'Monitoreo de ejecuciones de pipelines',
          'Diagnóstico y resolución de errores',
          'Análisis de datos de entrada y salida',
          'Investigación de resultados incorrectos',
          'Seguimiento del estado de procesos distribuidos',
          'Soporte y mantenimiento de procesos de datos',
        ],
      },
      apis: {
        title: 'Backend & APIs',
        description: 'Desarrollo, mantenimiento y prueba de software backend.',
        capabilities: [
          'Desarrollo y mantenimiento de código',
          'Corrección de errores',
          'Pruebas e inspección de endpoints con Postman',
          'Análisis de respuestas de APIs',
          'Investigación de fallos en integraciones',
          'Trabajo con distintos repositorios y módulos',
        ],
      },
      databases: {
        title: 'Bases de datos',
        description: 'Tecnologías de bases de datos utilizadas en mi experiencia.',
        capabilities: [] as string[],
      },
      infrastructure: {
        title: 'Infraestructura y sistemas operativos',
        description: 'Experiencia complementaria en entornos Linux, clústeres y sistemas remotos.',
        capabilities: [] as string[],
      },
      collaboration: {
        title: 'Control de versiones y colaboración',
        description: 'Herramientas para trabajar en equipo y gestionar cambios de código.',
        capabilities: [
          'Trabajo con múltiples repositorios',
          'Seguimiento de tareas e incidencias',
          'Gestión de cambios de código',
          'Trabajo con prácticas de Scrum',
        ],
      },
      web: {
        title: 'Desarrollo web y otros proyectos',
        description: 'Tecnologías utilizadas en proyectos académicos y colaborativos.',
        capabilities: [] as string[],
      },
    },
  },

  /* ---------------------------------------------------------- Experience */
  experience: {
    title: 'Experiencia profesional',
    subtitle:
      'Experiencia práctica en un entorno empresarial: soporte, monitoreo, diagnóstico y mantenimiento de procesos de datos en la nube.',
    role: 'Desarrollador de back-end',
    present: 'Actualidad',
    current: 'Empleo actual',
    modality: 'Remoto',
    summary: [
      'Me desempeño como desarrollador de back-end en ST&T LTDA, participando en actividades de soporte, monitoreo, diagnóstico y mantenimiento de procesos de datos en entornos cloud. Mi trabajo incluye revisar la ejecución de pipelines, analizar logs y resultados, investigar incidencias, corregir errores y colaborar con el equipo para mantener la estabilidad y confiabilidad de los procesos.',
      'También trabajo con código distribuido en distintos repositorios y módulos, utilizando Java, Scala y Python, además de herramientas del ecosistema AWS, Apache Airflow, Amazon EMR, Amazon S3, Linux, SQL y Postman.',
      'Las actividades se desarrollan dentro de una dinámica de equipo que sigue la metodología Scrum e incluye seguimiento de tareas, atención de tickets, análisis técnico y colaboración para resolver problemas.',
    ],
    responsibilitiesTitle: 'Responsabilidades técnicas',
    tablistLabel: 'Áreas de responsabilidad',
    relatedTools: 'Herramientas relacionadas',
    groups: {
      monitoring: {
        title: 'Monitoreo y operación de pipelines',
        short: 'Monitoreo',
        items: [
          'Supervisar el estado de las ejecuciones de procesos de datos.',
          'Revisar que las ejecuciones hayan finalizado correctamente.',
          'Inspeccionar logs y resultados para identificar fallos.',
          'Detectar comportamientos anómalos durante la operación.',
          'Hacer seguimiento de procesos programados con las herramientas del entorno.',
        ],
      },
      incidents: {
        title: 'Diagnóstico y resolución de incidencias',
        short: 'Incidencias',
        items: [
          'Investigar errores detectados durante la ejecución de procesos.',
          'Analizar logs para identificar posibles causas.',
          'Corregir errores de software dentro del alcance de mis responsabilidades.',
          'Verificar el comportamiento del proceso después de aplicar una corrección.',
          'Atender tickets asignados al equipo de soporte.',
          'Colaborar con el equipo en el seguimiento y la resolución de incidencias.',
        ],
      },
      dataAnalysis: {
        title: 'Análisis y validación de datos',
        short: 'Datos',
        items: [
          'Examinar la información de entrada y salida de los procesos.',
          'Investigar resultados incorrectos o inconsistencias en los datos.',
          'Analizar el comportamiento del procesamiento para localizar posibles causas.',
          'Validar los resultados después de una corrección cuando corresponde.',
          'Colaborar en la identificación de problemas que afectan la calidad de los datos.',
        ],
      },
      software: {
        title: 'Desarrollo y mantenimiento de software',
        short: 'Software',
        items: [
          'Trabajar con Java, Scala y Python.',
          'Revisar y modificar código en distintos repositorios y módulos.',
          'Corregir errores de software.',
          'Utilizar herramientas de control de versiones.',
          'Probar endpoints y analizar respuestas de APIs con Postman.',
          'Trabajar con funciones serverless y sensores de flujos de trabajo cuando corresponde.',
        ],
      },
      cloud: {
        title: 'Infraestructura y servicios cloud',
        short: 'Cloud',
        items: [
          'Trabajar con servicios y herramientas del ecosistema AWS.',
          'Interactuar con entornos de procesamiento distribuido y clústeres.',
          'Consultar entornos Linux y sistemas remotos.',
          'Participar en actividades puntuales de configuración de clústeres y sus plantillas.',
          'Aplicar conocimientos básicos de redes cuando la actividad lo requiere.',
        ],
      },
      collaboration: {
        title: 'Colaboración y metodología de trabajo',
        short: 'Equipo',
        items: [
          'Participar en reuniones de seguimiento del equipo.',
          'Trabajar dentro de una dinámica basada en Scrum.',
          'Gestionar y atender tickets con las herramientas del equipo.',
          'Utilizar Jira para el seguimiento de tareas e incidencias.',
          'Colaborar mediante repositorios y control de versiones con Bitbucket.',
          'Comunicar hallazgos técnicos e investigar problemas junto al equipo.',
        ],
      },
    },
    techTitle: 'Tecnologías del puesto',
    techGroups: {
      languages: 'Lenguajes',
      cloud: 'Cloud',
      orchestration: 'Orquestación y procesamiento',
      systems: 'Sistemas y datos',
      apis: 'APIs y pruebas',
      collaboration: 'Colaboración',
    },
    confidentiality:
      'Por confidencialidad, se omiten nombres de clientes, sistemas internos y detalles operativos.',
    volunteerBadge: 'Voluntariado',
    icetex: {
      organization: 'Proyecto Comunitario ICETEX',
      badge: 'Voluntariado',
      role: 'Docente voluntario',
      period: '2023 – Actualidad',
      description:
        'Brindo clases de informática a estudiantes, fortaleciendo sus conocimientos en programación y tecnología.',
    },
  },

  /* ------------------------------------------------------------ Projects */
  projects: {
    title: 'Proyectos destacados',
    subtitle:
      'Casos de estudio que explican la necesidad, la solución, mi contribución real, las tecnologías verificadas y el estado actual.',
    labels: {
      status: 'Estado',
      type: 'Tipo',
      context: 'Contexto',
      problem: 'Necesidad',
      solution: 'Solución',
      contribution: 'Mi contribución',
      role: 'Mi rol',
      team: 'Trabajo en equipo',
      technologies: 'Tecnologías utilizadas',
      myArea: 'Mi área',
      teamArea: 'Resto del equipo',
      viewCode: 'Ver código',
      viewDetails: 'Ver detalles',
      hideDetails: 'Ocultar detalles',
      featured: 'Proyecto principal',
    },
    status: {
      inDevelopment: 'En desarrollo',
      completed: 'Finalizado',
    },
    kinds: {
      academic: 'Proyecto académico',
      collaborative: 'Proyecto colaborativo',
      personal: 'Proyecto personal',
    },
    items: {
      nimpeMisak: {
        type: 'Videojuego etnoeducativo',
        summary:
          'Iniciativa de videojuego etnoeducativo con perspectiva cultural, orientada a integrar exploración, narrativa y aprendizaje en una experiencia interactiva.',
        problem:
          'Explorar alternativas interactivas que apoyen la difusión y el aprendizaje de elementos culturales y lingüísticos de la comunidad Misak.',
        solution:
          'Un videojuego desarrollado en Unity, con una propuesta en formato 2.5D, que aborda la representación de la cosmovisión y la lengua Misak procurando tratarlas con respeto y contexto.',
        context:
          'Proyecto de grado relacionado con la comunidad Misak del territorio de San Antonio, en Morales, Cauca.',
        role: 'Proyecto de grado en desarrollo.',
        contribution: [] as string[],
        team: '',
        highlights: ['Proyecto de grado', 'Propuesta en 2.5D', 'Cosmovisión y lengua Misak'],
      },
      eventManager: {
        type: 'Aplicación web de gestión de eventos',
        summary:
          'Sistema para organizar y hacer seguimiento de eventos, publicaciones y participantes, con paneles diferenciados según el rol de cada usuario.',
        problem:
          'Centralizar la organización de eventos, publicaciones y participantes en una misma aplicación, con distintos niveles de acceso según el rol.',
        solution:
          'Aplicación web con frontend en React y TypeScript y backend en Laravel, que incluye inicio de sesión con Google, tablero de eventos, publicaciones, notificaciones y paneles por rol.',
        context: '',
        role: 'Desarrollo frontend (contribución principal).',
        contribution: [
          'Desarrollo de vistas y paneles por rol: mentor, coordinador, miembro activo, usuario interesado e invitado.',
          'Diseño responsivo de los paneles, el tablero de eventos y la gestión de usuarios.',
          'Integración de componentes del frontend con la API de eventos, perfil y publicaciones, reemplazando datos estáticos por datos reales.',
          'Creación de la página de publicaciones, el modal de notificaciones y mejoras en el inicio de sesión.',
          'Participación puntual en el backend: un endpoint de creación de usuarios y pruebas unitarias y de características.',
        ],
        team: 'Proyecto desarrollado por un equipo de cuatro colaboradores. La arquitectura general y el backend fueron trabajo conjunto del equipo; mi aporte se concentró en el frontend.',
        highlights: ['Frontend', 'Paneles por rol', 'Diseño responsivo'],
      },
    },
    more: {
      title: 'Más proyectos en GitHub',
      description: 'Explora mis repositorios y proyectos de software.',
      action: 'Ir a GitHub',
    },
  },

  /* ----------------------------------------------------------- Education */
  education: {
    title: 'Educación y certificaciones',
    subtitle:
      'Formación académica y credenciales, con enlace de verificación cuando existe uno público.',
    academicTitle: 'Formación académica',
    certificationsTitle: 'Certificaciones y formación complementaria',
    inProgress: 'En curso',
    start: 'Inicio',
    expectedCompletion: 'Finalización estimada',
    viewCredential: 'Ver credencial',
    verifiedOnCredly: 'Verificable en Credly',
    issuer: 'Emisor',
    platform: 'Plataforma de credencial',
    identifier: 'Identificador',
    topics: 'Temas abordados en la formación',
    groups: {
      security: 'Redes y ciberseguridad',
      ai: 'Inteligencia artificial',
    },
    types: {
      careerPath: 'Ruta de aprendizaje',
      course: 'Curso',
      bootcamp: 'Bootcamp',
      training: 'Formación complementaria',
    },
    aiAdvancedTopics: [
      'Redes neuronales convolucionales',
      'Segmentación',
      'Frameworks de inteligencia artificial',
      'Aprendizaje por refuerzo',
      'Algoritmos DQN, A3C y PPO',
      'Aplicaciones en juegos y robótica',
    ],
  },

  /* --------------------------------------------------------- Soft skills */
  softSkills: {
    title: 'Habilidades blandas',
    subtitle: 'Cómo trabajo, cómo colaboro y qué cualidades aporto a un equipo de desarrollo.',
    inPractice: 'En la práctica',
    secondaryTitle: 'También me caracterizan',
    featured: {
      learning: {
        title: 'Aprendizaje continuo',
        description:
          'Tengo disposición para aprender nuevas tecnologías, recibir retroalimentación y mejorar progresivamente mis capacidades técnicas.',
        practice: 'Adaptación a nuevas herramientas y tecnologías.',
      },
      proactivity: {
        title: 'Proactividad e iniciativa',
        description:
          'Identifico problemas, investigo posibles soluciones y contribuyo a las actividades del equipo sin esperar instrucciones cuando puedo actuar dentro de mis responsabilidades.',
        practice: 'Investigación de incidencias antes de escalar.',
      },
      teamwork: {
        title: 'Trabajo en equipo',
        description:
          'Disfruto colaborar con otras personas, compartir conocimientos y contribuir a que el equipo alcance sus objetivos.',
        practice: 'Colaboración en tareas e incidencias.',
      },
      problemSolving: {
        title: 'Resolución de problemas',
        description:
          'Me gusta investigar los errores, analizar sus posibles causas y trabajar para encontrar soluciones que contribuyan a la estabilidad de los sistemas.',
        practice: 'Investigación de incidencias técnicas.',
      },
      communication: {
        title: 'Comunicación efectiva',
        description:
          'Explico conceptos, procedimientos y soluciones a otras personas de manera paciente y comprensible.',
        practice: 'Explicación de hallazgos y apoyo a compañeros.',
      },
      analytical: {
        title: 'Pensamiento analítico',
        description:
          'Examino la información, identifico inconsistencias y organizo el análisis de un problema antes de proponer una solución.',
        practice: 'Análisis de logs y resultados de procesos.',
      },
    },
    secondary: {
      adaptability: {
        title: 'Adaptabilidad',
        description: 'Disposición para trabajar con diferentes herramientas, tecnologías, tareas y dinámicas de equipo.',
      },
      responsibility: {
        title: 'Responsabilidad y compromiso',
        description: 'Orientación al cumplimiento de las tareas asignadas y al seguimiento de las actividades del equipo.',
      },
      curiosity: {
        title: 'Curiosidad técnica',
        description: 'Interés por comprender cómo funcionan los sistemas y explorar alternativas para resolver problemas.',
      },
      patience: {
        title: 'Paciencia y empatía',
        description: 'Actitud respetuosa durante la colaboración, escucha activa y apoyo en los procesos de aprendizaje.',
      },
    },
  },

  /* ----------------------------------------------------------- Languages */
  languages: {
    title: 'Idiomas',
    subtitle: 'Los idiomas en los que me comunico, descritos con honestidad.',
    spanish: {
      name: 'Español',
      level: 'Idioma principal',
      description: 'Comunicación oral y escrita en contextos cotidianos, académicos y profesionales.',
    },
    english: {
      name: 'Inglés',
      level: 'Nivel aproximado B1–B2',
      levelNote: 'Autoevaluación · sin certificación formal',
      description:
        'Me desenvuelvo en inglés conversacional y puedo comunicarme con personas de diferentes contextos culturales. Tengo experiencia interactuando en inglés y busco seguir mejorando mi fluidez y confianza en entornos profesionales.',
      context: 'He vivido experiencias en Estados Unidos y he mantenido comunicación con personas de India.',
    },
    interface: {
      title: 'Idioma de navegación del sitio',
      text: 'Este portafolio está disponible en español e inglés. Puedes cambiar el idioma en cualquier momento desde el selector del encabezado.',
      current: 'Idioma actual del sitio:',
    },
  },

  /* --------------------------------------------------- Professional focus */
  focus: {
    title: 'Enfoque profesional',
    subtitle:
      'Áreas en las que quiero seguir creciendo y el tipo de problemas que me interesa resolver. Son objetivos de crecimiento, no logros alcanzados.',
    goalLabel: 'Objetivo de crecimiento',
    relatedLabel: 'Tecnologías relacionadas',
    connectionLabel: 'Conexión con mi experiencia',
    areas: {
      backend: {
        title: 'Backend Engineering',
        description:
          'Seguir desarrollando soluciones backend, APIs y componentes de software mantenibles, prestando atención a la calidad del código, la integración entre sistemas y la resolución de problemas.',
        connection: 'Mi trabajo actual con Java, Scala y Python.',
      },
      cloud: {
        title: 'Cloud Computing',
        description:
          'Profundizar en el uso de servicios cloud, especialmente AWS, para comprender mejor cómo se despliegan, operan y mantienen las aplicaciones y los procesos de datos.',
        connection: 'El uso de servicios y herramientas AWS en mi día a día.',
      },
      data: {
        title: 'Data Engineering & Distributed Systems',
        description:
          'Ampliar mis conocimientos sobre procesamiento distribuido, orquestación de flujos de trabajo y confiabilidad de procesos de datos, aprovechando la experiencia práctica adquirida en entornos empresariales.',
        connection: 'El monitoreo, diagnóstico y soporte de procesos de datos.',
      },
      automation: {
        title: 'Automatización y confiabilidad',
        description:
          'Me interesa mejorar la confiabilidad de los sistemas mediante la automatización de tareas, el análisis de errores y la mejora continua de los procesos de desarrollo y operación.',
        connection: 'La investigación de incidencias y la mejora de procesos.',
      },
    },
    philosophyLabel: 'Filosofía de desarrollo',
    philosophy:
      'Mi objetivo es construir software útil y mantenible, entender los sistemas más allá del código y seguir aprendiendo para aportar soluciones confiables a problemas reales.',
  },

  /* ------------------------------------------------------------- Contact */
  contact: {
    eyebrow: 'Contacto',
    title: '¿Hablamos?',
    text: '¿Tienes una oportunidad profesional, un proyecto interesante o te gustaría conversar sobre backend, cloud y desarrollo de software? Estaré encantado de conectar y conocer nuevas oportunidades.',
    channelsLabel: 'Canales de contacto',
    github: {
      label: 'GitHub',
      description: 'Explora mis repositorios y proyectos de software.',
      action: 'Ver GitHub',
    },
    linkedin: {
      label: 'LinkedIn',
      description: 'Conectemos y conversemos sobre oportunidades profesionales.',
      action: 'Conectar en LinkedIn',
    },
    email: {
      label: 'Correo electrónico',
      action: 'Enviar correo',
      copy: 'Copiar correo',
      copied: 'Correo copiado al portapapeles',
      copyError: 'No se pudo copiar. Selecciona la dirección manualmente.',
    },
    cv: {
      label: 'Hoja de vida',
      action: 'Descargar CV',
    },
    basedIn: 'Ubicado en',
  },

  /* -------------------------------------------------------------- Footer */
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Desarrollado con React 19 y TypeScript.',
    backToTop: 'Volver al inicio',
    tagline: 'Desarrollo de backend distribuido, procesamiento de datos y arquitecturas cloud en AWS.',
    socialHeading: 'Canales y Redes',
    socialSub: 'Conexión con perfiles profesionales y canales técnicos verificados.',
    navHeading: 'Navegación',
    statusOnline: 'SISTEMA // ONLINE',
    region: 'POPAYÁN, CO',
    channels: {
      githubDesc: 'Repositorios de código, pipelines y proyectos de software',
      linkedinDesc: 'Perfil profesional, trayectoria y red de contactos',
      emailDesc: 'Contacto directo para oportunidades y colaboraciones',
      whatsappDesc: 'Mensajería instantánea para comunicación directa',
      instagramDesc: 'Perfil técnico y actualizaciones profesionales',
    },
  },
};

export type Dictionary = typeof es;

/* ------------------------------------------------------------------------ */
/* ENGLISH                                                                  */
/* ------------------------------------------------------------------------ */
const en: Dictionary = {
  meta: {
    title: 'Duber Andrés Eraso Uni — Backend & Cloud Developer',
    description:
      'Portfolio of Duber Andrés Eraso Uni, a Systems Engineering student at Universidad del Cauca and backend developer focused on Backend, Cloud Computing (AWS), data processing, and distributed systems.',
  },

  a11y: {
    skipToContent: 'Skip to main content',
    primaryNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    moreSections: 'Show more sections',
    languageSwitcher: 'Site language',
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
    opensInNewTab: '(opens in a new tab)',
    homeLink: 'Duber Andrés Eraso Uni, go to top',
    footerNav: 'Footer links',
  },

  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    softSkills: 'Soft Skills',
    languages: 'Languages',
    focus: 'Focus',
    contact: 'Contact',
    more: 'More',
    menu: 'Menu',
    preferences: 'Preferences',
  },

  theme: {
    dark: 'Dark',
    light: 'Light',
  },

  hero: {
    greeting: "Hi, I'm",
    headlineStart: 'I build software solutions connecting ',
    headlineHighlight: 'backend, data, and cloud.',
    intro:
      "I'm a backend developer and Systems Engineering student with experience supporting and operating data pipelines in cloud environments. I'm interested in building reliable solutions, automating processes, and understanding how distributed systems work.",
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    roleLabel: 'Backend Developer at',
    studyLabel: 'Systems Engineering',
    socialLabel: 'Professional profiles',
    codeFile: 'profile.ts',
    codeRole: 'Backend Developer',
    codeStatus: 'always learning',
  },

  about: {
    title: 'About me',
    subtitle: "Who I am, the experience I'm building, and where I want to grow.",
    paragraphs: [
      "I'm Duber Andrés Eraso Uni, a Systems Engineering student at Universidad del Cauca and a backend developer at ST&T LTDA.",
      'My professional experience focuses on supporting, monitoring, and maintaining data processes in cloud environments. My work includes monitoring executions, diagnosing and resolving incidents, analyzing data, and reviewing distributed processes. This experience has helped me understand the importance of reliability, observability, and data quality in systems that operate continuously.',
      'I work with programming languages such as Java, Scala, and Python, as well as AWS services and tools related to Apache Airflow, Amazon EMR, Amazon S3, Linux, SQL, and APIs. I also use collaboration and code management tools as part of teams that follow agile development practices.',
      "I'm interested in continuing to develop my skills in backend engineering, process automation, and the design of scalable and maintainable systems. I enjoy learning new technologies, analyzing technical problems, and working with others to find solutions.",
    ],
    closing:
      'This portfolio brings together my professional experience, education, and projects, reflecting my growth in software development and cloud technologies.',
    factsTitle: 'Profile',
    facts: {
      location: 'Location',
      education: 'Education',
      educationValue: 'Systems Engineering (in progress)',
      role: 'Current role',
      roleValue: 'Backend Developer',
      profile: 'Tech profile',
      profileValue: 'Backend & Cloud, with complementary experience in web development and databases',
    },
    pillarsTitle: 'Experience & focus',
    pillars: {
      backend: {
        title: 'Backend Development',
        items: [
          'Building and maintaining software solutions.',
          'Working with Java, Scala, and Python.',
          'Using APIs and development tools.',
        ],
      },
      cloud: {
        title: 'Cloud & Data',
        items: [
          'Working with services and tools from the AWS ecosystem.',
          'Monitoring and supporting data processes.',
          'Diagnosing incidents and analyzing executions.',
        ],
      },
      problemSolving: {
        title: 'Problem Solving',
        items: [
          'Investigating errors.',
          'Analyzing information to identify possible causes.',
          'Working with the team to solve technical problems.',
        ],
      },
    },
    quoteLabel: 'Work philosophy',
    quote: 'I enjoy understanding problems at their source, learning continuously, and building reliable solutions.',
  },

  techStack: {
    title: 'Technical Skills',
    subtitle:
      "Technologies grouped by area and by the context in which I've used them, prioritizing those from my current professional experience.",
    legendLabel: 'Context of use',
    contexts: {
      work: 'Professional experience',
      projects: 'Projects',
    },
    capabilitiesLabel: 'Related capabilities',
    terms: {
      restApis: 'REST APIs',
      apiEndpoints: 'API endpoints',
      clusters: 'Cluster environments',
      clusterTemplates: 'Cluster templates',
      networking: 'Networking fundamentals',
      remoteAccess: 'Remote environment access',
      scrum: 'Scrum',
    },
    categories: {
      languages: {
        title: 'Programming Languages',
        description: 'The languages I use in my current role.',
        capabilities: [],
      },
      cloud: {
        title: 'Cloud Computing — AWS',
        description: 'AWS services I work with in my current role.',
        capabilities: [],
      },
      data: {
        title: 'Data Engineering & Distributed Systems',
        description: 'Supporting and operating data processes and distributed systems.',
        capabilities: [
          'Monitoring pipeline executions',
          'Diagnosing and fixing errors',
          'Analyzing input and output data',
          'Investigating incorrect results',
          'Tracking the status of distributed processes',
          'Supporting and maintaining data processes',
        ],
      },
      apis: {
        title: 'Backend & APIs',
        description: 'Building, maintaining, and testing backend software.',
        capabilities: [
          'Writing and maintaining code',
          'Fixing bugs',
          'Testing and inspecting endpoints with Postman',
          'Analyzing API responses',
          'Investigating integration failures',
          'Working across multiple repositories and modules',
        ],
      },
      databases: {
        title: 'Databases',
        description: "Database technologies I've used in my work.",
        capabilities: [],
      },
      infrastructure: {
        title: 'Infrastructure & Operating Systems',
        description: 'Complementary experience with Linux, cluster environments, and remote systems.',
        capabilities: [],
      },
      collaboration: {
        title: 'Version Control & Collaboration',
        description: 'Tools for teamwork and managing code changes.',
        capabilities: [
          'Working with multiple repositories',
          'Tracking tasks and incidents',
          'Managing code changes',
          'Following Scrum practices',
        ],
      },
      web: {
        title: 'Web Development & Other Projects',
        description: 'Technologies used in academic and collaborative projects.',
        capabilities: [],
      },
    },
  },

  experience: {
    title: 'Professional Experience',
    subtitle:
      'Hands-on experience in an enterprise environment: supporting, monitoring, troubleshooting, and maintaining data processes in the cloud.',
    role: 'Backend Developer',
    present: 'Present',
    current: 'Current role',
    modality: 'Remote',
    summary: [
      'I work as a Backend Developer at ST&T LTDA, supporting, monitoring, troubleshooting, and maintaining data processes in cloud environments. My responsibilities include reviewing pipeline executions, analyzing logs and outputs, investigating incidents, fixing software issues, and collaborating with the team to maintain reliable processes.',
      'I also work with code across multiple repositories and modules, using Java, Scala, and Python, together with tools and services from the AWS ecosystem, Apache Airflow, Amazon EMR, Amazon S3, Linux, SQL, and Postman.',
      'My daily work involves technical investigation, ticket handling, code maintenance, and collaboration within a team that follows Scrum practices.',
    ],
    responsibilitiesTitle: 'Technical responsibilities',
    tablistLabel: 'Areas of responsibility',
    relatedTools: 'Related tools',
    groups: {
      monitoring: {
        title: 'Pipeline monitoring & operations',
        short: 'Monitoring',
        items: [
          'Monitor the status of data process executions.',
          'Check that executions have completed successfully.',
          'Inspect logs and outputs to identify failures.',
          'Detect unusual behavior during operation.',
          'Follow up on scheduled processes using the available tools.',
        ],
      },
      incidents: {
        title: 'Incident diagnosis & resolution',
        short: 'Incidents',
        items: [
          'Investigate errors detected while processes run.',
          'Analyze logs to identify possible causes.',
          'Fix software issues within the scope of my responsibilities.',
          'Verify process behavior after a fix is applied.',
          'Handle tickets assigned to the support team.',
          'Work with the team to track and resolve incidents.',
        ],
      },
      dataAnalysis: {
        title: 'Data analysis & validation',
        short: 'Data',
        items: [
          'Examine the input and output data of processes.',
          'Investigate incorrect results or data inconsistencies.',
          'Analyze processing behavior to locate possible causes.',
          'Validate results after a fix when needed.',
          'Help identify issues that affect data quality.',
        ],
      },
      software: {
        title: 'Software development & maintenance',
        short: 'Software',
        items: [
          'Work with Java, Scala, and Python.',
          'Review and modify code across multiple repositories and modules.',
          'Fix software bugs.',
          'Use version control tools.',
          'Test endpoints and analyze API responses with Postman.',
          'Work with serverless functions and workflow sensors when needed.',
        ],
      },
      cloud: {
        title: 'Cloud services & infrastructure',
        short: 'Cloud',
        items: [
          'Work with services and tools from the AWS ecosystem.',
          'Interact with distributed processing environments and clusters.',
          'Access Linux environments and remote systems.',
          'Take part in occasional cluster and cluster-template configuration tasks.',
          'Apply basic networking knowledge when a task requires it.',
        ],
      },
      collaboration: {
        title: 'Collaboration & ways of working',
        short: 'Team',
        items: [
          'Join the team’s follow-up meetings.',
          'Work within a Scrum-based team dynamic.',
          'Manage and handle tickets using the team’s tools.',
          'Use Jira to track tasks and incidents.',
          'Collaborate through repositories and version control with Bitbucket.',
          'Share technical findings and investigate issues with the team.',
        ],
      },
    },
    techTitle: 'Technologies in this role',
    techGroups: {
      languages: 'Languages',
      cloud: 'Cloud',
      orchestration: 'Orchestration & processing',
      systems: 'Systems & data',
      apis: 'APIs & testing',
      collaboration: 'Collaboration',
    },
    confidentiality:
      'For confidentiality reasons, client names, internal systems, and operational details are omitted.',
    volunteerBadge: 'Volunteering',
    icetex: {
      organization: 'Proyecto Comunitario ICETEX',
      badge: 'Volunteering',
      role: 'Volunteer Instructor',
      period: '2023 – Present',
      description:
        'I teach computer science classes to students, strengthening their knowledge in programming and technology.',
    },
  },

  projects: {
    title: 'Featured Projects',
    subtitle:
      'Case studies explaining the need, the solution, my actual contribution, verified technologies, and current status.',
    labels: {
      status: 'Status',
      type: 'Type',
      context: 'Context',
      problem: 'Need',
      solution: 'Solution',
      contribution: 'My Contribution',
      role: 'My role',
      team: 'Teamwork',
      technologies: 'Technologies Used',
      myArea: 'My area',
      teamArea: 'Rest of the team',
      viewCode: 'View code',
      viewDetails: 'View details',
      hideDetails: 'Hide details',
      featured: 'Main project',
    },
    status: {
      inDevelopment: 'In Development',
      completed: 'Completed',
    },
    kinds: {
      academic: 'Academic Project',
      collaborative: 'Collaborative Project',
      personal: 'Personal Project',
    },
    items: {
      nimpeMisak: {
        type: 'Ethno-educational video game',
        summary:
          'An ethno-educational video game initiative with a cultural perspective, designed to bring together exploration, storytelling, and learning in an interactive experience.',
        problem:
          'Explore interactive ways to support the dissemination and learning of cultural and linguistic elements of the Misak community.',
        solution:
          'A video game built with Unity, proposed in a 2.5D format, that represents the Misak worldview and language while aiming to treat them with respect and context.',
        context:
          'Undergraduate thesis project related to the Misak community of San Antonio, in Morales, Cauca (Colombia).',
        role: 'Undergraduate thesis project, in development.',
        contribution: [],
        team: '',
        highlights: ['Thesis project', '2.5D proposal', 'Misak worldview & language'],
      },
      eventManager: {
        type: 'Event management web application',
        summary:
          'A system to organize and track events, publications, and participants, with dashboards tailored to each user role.',
        problem:
          'Bring the organization of events, publications, and participants into a single application, with different access levels depending on the role.',
        solution:
          'A web application with a React and TypeScript frontend and a Laravel backend, including Google sign-in, an event board, publications, notifications, and role-based dashboards.',
        context: '',
        role: 'Frontend development (main contribution).',
        contribution: [
          'Built views and role-based dashboards: mentor, coordinator, active member, interested user, and guest.',
          'Made the dashboards, event board, and user management responsive.',
          'Connected frontend components to the events, profile, and publications API, replacing static data with real data.',
          'Created the publications page and the notifications modal, and improved the sign-in flow.',
          'Occasional backend work: a user-creation endpoint and unit and feature tests.',
        ],
        team: 'Built by a team of four contributors. The overall architecture and the backend were a joint team effort; my work focused on the frontend.',
        highlights: ['Frontend', 'Role-based dashboards', 'Responsive design'],
      },
    },
    more: {
      title: 'More projects on GitHub',
      description: 'Browse my repositories and software projects.',
      action: 'Go to GitHub',
    },
  },

  education: {
    title: 'Education & Certifications',
    subtitle: 'Academic background and credentials, with a verification link whenever a public one exists.',
    academicTitle: 'Academic Education',
    certificationsTitle: 'Certifications & Additional Training',
    inProgress: 'In Progress',
    start: 'Start',
    expectedCompletion: 'Expected Completion',
    viewCredential: 'View Credential',
    verifiedOnCredly: 'Verifiable on Credly',
    issuer: 'Issuer',
    platform: 'Credential platform',
    identifier: 'Identifier',
    topics: 'Topics covered in the program',
    groups: {
      security: 'Networking & Cybersecurity',
      ai: 'Artificial Intelligence',
    },
    types: {
      careerPath: 'Career path',
      course: 'Course',
      bootcamp: 'Bootcamp',
      training: 'Additional training',
    },
    aiAdvancedTopics: [
      'Convolutional neural networks',
      'Segmentation',
      'Artificial intelligence frameworks',
      'Reinforcement learning',
      'DQN, A3C, and PPO algorithms',
      'Applications in games and robotics',
    ],
  },

  softSkills: {
    title: 'Soft Skills',
    subtitle: 'How I work, how I collaborate, and what I bring to a development team.',
    inPractice: 'In practice',
    secondaryTitle: 'Other qualities',
    featured: {
      learning: {
        title: 'Continuous Learning',
        description:
          "I'm open to learning new technologies, receiving feedback, and steadily improving my technical skills.",
        practice: 'Adapting to new tools and technologies.',
      },
      proactivity: {
        title: 'Proactivity & Initiative',
        description:
          "I identify problems, look into possible solutions, and contribute to the team's work without waiting for instructions when I can act within my responsibilities.",
        practice: 'Investigating incidents before escalating them.',
      },
      teamwork: {
        title: 'Teamwork',
        description: 'I enjoy working with others, sharing knowledge, and helping the team reach its goals.',
        practice: 'Collaborating on tasks and incidents.',
      },
      problemSolving: {
        title: 'Problem Solving',
        description:
          'I like investigating errors, analyzing their possible causes, and working toward solutions that help keep systems stable.',
        practice: 'Investigating technical incidents.',
      },
      communication: {
        title: 'Effective Communication',
        description: 'I explain concepts, procedures, and solutions to others in a patient and clear way.',
        practice: 'Sharing findings and supporting teammates.',
      },
      analytical: {
        title: 'Analytical Thinking',
        description:
          'I examine information, spot inconsistencies, and structure my analysis of a problem before proposing a solution.',
        practice: 'Analyzing logs and process outputs.',
      },
    },
    secondary: {
      adaptability: {
        title: 'Adaptability',
        description: 'Willing to work with different tools, technologies, tasks, and team dynamics.',
      },
      responsibility: {
        title: 'Responsibility & Commitment',
        description: "Focused on completing assigned tasks and following up on the team's activities.",
      },
      curiosity: {
        title: 'Technical Curiosity',
        description: 'Interested in understanding how systems work and exploring alternatives to solve problems.',
      },
      patience: {
        title: 'Patience & Empathy',
        description: 'A respectful attitude when collaborating, active listening, and support for learning processes.',
      },
    },
  },

  languages: {
    title: 'Languages',
    subtitle: 'The languages I communicate in, described honestly.',
    spanish: {
      name: 'Spanish',
      level: 'Native language',
      description: 'Spoken and written communication in everyday, academic, and professional contexts.',
    },
    english: {
      name: 'English',
      level: 'Approximate level B1–B2',
      levelNote: 'Self-assessed · no formal certification',
      description:
        "I'm comfortable communicating in conversational English with people from different cultural backgrounds. I have experience interacting in English and I'm working on improving my fluency and confidence in professional settings.",
      context: "I've had experiences in the United States and have kept in touch with people from India.",
    },
    interface: {
      title: 'Site language',
      text: 'This portfolio is available in Spanish and English. You can switch languages at any time using the selector in the header.',
      current: 'Current site language:',
    },
  },

  focus: {
    title: 'Professional Focus',
    subtitle:
      "Areas where I want to keep growing and the kinds of problems I'm interested in solving. These are growth goals, not achievements.",
    goalLabel: 'Growth goal',
    relatedLabel: 'Related technologies',
    connectionLabel: 'Connection to my experience',
    areas: {
      backend: {
        title: 'Backend Engineering',
        description:
          'Continue building backend solutions, APIs, and maintainable software components, with a focus on code quality, system integration, and problem-solving.',
        connection: 'My current work with Java, Scala, and Python.',
      },
      cloud: {
        title: 'Cloud Computing',
        description:
          'Deepen my knowledge of cloud services, especially AWS, to better understand how applications and data processes are deployed, operated, and maintained.',
        connection: 'Using AWS services and tools in my daily work.',
      },
      data: {
        title: 'Data Engineering & Distributed Systems',
        description:
          'Expand my knowledge of distributed processing, workflow orchestration, and data pipeline reliability, building on the practical experience gained in enterprise environments.',
        connection: 'Monitoring, troubleshooting, and supporting data processes.',
      },
      automation: {
        title: 'Automation & Reliability',
        description:
          "I'm interested in improving system reliability through task automation, error analysis, and continuous improvement of development and operational processes.",
        connection: 'Investigating incidents and improving processes.',
      },
    },
    philosophyLabel: 'Development philosophy',
    philosophy:
      'My goal is to build useful and maintainable software, understand systems beyond the code, and keep learning to deliver reliable solutions to real-world problems.',
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's connect.",
    text: "Do you have a professional opportunity, an interesting project, or would you like to talk about backend, cloud, and software development? I'd be happy to connect and explore new opportunities.",
    channelsLabel: 'Contact channels',
    github: {
      label: 'GitHub',
      description: 'Browse my repositories and software projects.',
      action: 'View GitHub',
    },
    linkedin: {
      label: 'LinkedIn',
      description: "Let's connect and talk about professional opportunities.",
      action: 'Connect on LinkedIn',
    },
    email: {
      label: 'Email',
      action: 'Send email',
      copy: 'Copy email',
      copied: 'Email copied to clipboard',
      copyError: "Couldn't copy. Please select the address manually.",
    },
    cv: {
      label: 'Resume',
      action: 'Download Resume',
    },
    basedIn: 'Based in',
  },

  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React 19 and TypeScript.',
    backToTop: 'Back to top',
    tagline: 'Distributed backend development, data processing, and AWS cloud architectures.',
    socialHeading: 'Channels & Networks',
    socialSub: 'Connection with professional profiles and verified technical channels.',
    navHeading: 'Navigation',
    statusOnline: 'SYSTEM // ONLINE',
    region: 'POPAYAN, CO',
    channels: {
      githubDesc: 'Code repositories, pipelines, and software projects',
      linkedinDesc: 'Professional profile, trajectory, and network',
      emailDesc: 'Direct contact for opportunities and collaborations',
      whatsappDesc: 'Instant messaging for direct communication',
      instagramDesc: 'Technical profile and professional updates',
    },
  },
};

export const translations: Record<Language, Dictionary> = { es, en };
