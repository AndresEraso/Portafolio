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
    title: 'Duber Andrés Eraso Uni — Backend Developer & Cloud Engineer (AWS)',
    description:
      'Portafolio profesional de Duber Andrés Eraso Uni, estudiante de Ingeniería de Sistemas en la Universidad del Cauca y desarrollador especializado en Backend, Cloud Computing (AWS), procesamiento distribuido de datos y arquitecturas escalables.',
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
    closeModal: 'Cerrar ventana de contacto (tecla Escape)',
    contactModalDialog: 'Ventana emergente de contacto profesional',
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
      'Desarrollador backend y estudiante de Ingeniería de Sistemas en Unicauca. Opero, diagnostico y mantengo pipelines de datos distribuidos en AWS con Java, Scala y Python.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Conversemos sobre oportunidades',
    roleLabel: 'Desarrollador de back-end en',
    studyLabel: 'Ingeniería de Sistemas',
    socialLabel: 'Perfiles',
    codeFile: 'perfil.ts',
    codeRole: 'Desarrollador de back-end',
    codeStatus: 'activo',
  },

  /* --------------------------------------------------------------- About */
  about: {
    title: 'Sobre mí',
    subtitle: 'Backend, AWS Cloud y confiabilidad en procesos de datos distribuidos.',
    paragraphs: [
      'Estudiante de Ingeniería de Sistemas en la Universidad del Cauca y desarrollador de back-end en ST&T LTDA.',
      'Trabajo en monitoreo, diagnóstico y mantenimiento de pipelines de datos en AWS con Java, Scala, Python, Spark, Airflow y SQL bajo metodologías ágiles.',
    ],
    closing: 'Enfocado en construir software confiable, automatizar procesos y resolver incidencias de raíz.',
    factsTitle: 'Resumen',
    facts: {
      location: 'Ubicación',
      education: 'Formación',
      educationValue: 'Ingeniería de Sistemas (en curso)',
      role: 'Cargo actual',
      roleValue: 'Desarrollador de back-end',
      profile: 'Especialidad',
      profileValue: 'Backend, AWS Cloud & Sistemas Distribuidos',
    },
    pillarsTitle: 'Pilares técnicos',
    pillars: {
      backend: {
        title: 'Backend',
        items: ['Servicios mantenibles en Java, Scala y Python, integración de REST APIs y pruebas.'],
      },
      cloud: {
        title: 'Cloud & Datos',
        items: ['Operación y soporte de pipelines con AWS (S3, EMR, Lambda), Spark y Airflow.'],
      },
      problemSolving: {
        title: 'Diagnóstico',
        items: ['Análisis de logs, validación de calidad de datos y resolución ágil de incidencias.'],
      },
    },
    quoteLabel: 'Enfoque',
    quote: 'Entender los problemas desde su origen y construir soluciones confiables.',
  },

  /* ---------------------------------------------------------- Tech stack */
  techStack: {
    title: 'Habilidades técnicas',
    subtitle:
      'Pasa el cursor sobre cualquier hexágono o haz clic para ver mi experiencia real con cada tecnología.',
    legendLabel: 'Contexto',
    contexts: {
      work: 'Experiencia laboral (ST&T LTDA)',
      projects: 'Proyectos y formación',
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
    subtitle: 'Operación de procesos de datos en cloud y docencia comunitaria en programación.',
    role: 'Desarrollador de back-end',
    present: 'Actualidad',
    current: 'Empleo actual',
    modality: 'Remoto',
    summary: [
      'Soporte, monitoreo, diagnóstico y mantenimiento de pipelines de datos distribuidos en AWS con Java, Scala, Python, Spark y Airflow bajo metodología Scrum.',
    ],
    responsibilitiesTitle: 'Responsabilidades clave',
    tablistLabel: 'Áreas de responsabilidad',
    relatedTools: 'Herramientas relacionadas',
    groups: {
      monitoring: {
        title: 'Monitoreo y operación de pipelines',
        short: 'Monitoreo',
        items: [
          'Supervisar ejecuciones programadas y estado de pipelines.',
          'Inspeccionar logs y salidas para detectar anomalías.',
        ],
      },
      incidents: {
        title: 'Diagnóstico y resolución de incidencias',
        short: 'Incidencias',
        items: [
          'Analizar logs para identificar causas raíz de fallos.',
          'Corregir errores de software y verificar el proceso post-ajuste.',
          'Atender tickets de soporte junto al equipo.',
        ],
      },
      dataAnalysis: {
        title: 'Análisis y validación de datos',
        short: 'Datos',
        items: [
          'Validar datos de entrada/salida e investigar inconsistencias.',
          'Asegurar la calidad de resultados tras correcciones técnicas.',
        ],
      },
      software: {
        title: 'Desarrollo y mantenimiento de software',
        short: 'Software',
        items: [
          'Mantenimiento de módulos en Java, Scala y Python.',
          'Pruebas de endpoints REST con Postman y funciones serverless.',
        ],
      },
      cloud: {
        title: 'Infraestructura y servicios cloud',
        short: 'Cloud',
        items: [
          'Operación cotidiana con AWS (S3, EMR, Lambda, API Gateway).',
          'Acceso a entornos Linux remotos y revisión de plantillas de clúster.',
        ],
      },
      collaboration: {
        title: 'Colaboración y metodología de trabajo',
        short: 'Equipo',
        items: [
          'Trabajo ágil con Scrum, seguimiento en Jira y repositorios en Bitbucket.',
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
    subtitle: 'Proyectos seleccionados con mi rol concreto, tecnologías verificadas y estado real.',
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
          'Videojuego 2.5D en Unity para difundir la lengua y cosmovisión de la comunidad Misak (Morales, Cauca).',
        problem:
          'Apoyar de forma interactiva el aprendizaje cultural y lingüístico de la comunidad Misak.',
        solution:
          'Propuesta interactiva 2.5D en Unity construida con respeto cultural y contexto territorial.',
        context:
          'Trabajo de grado vinculado a la comunidad Misak de San Antonio, Morales, Cauca.',
        role: 'Investigación y desarrollo de trabajo de grado (Unicauca).',
        contribution: [] as string[],
        team: '',
        highlights: ['Trabajo de grado', 'Unity 2.5D', 'Lengua Misak'],
      },
      eventManager: {
        type: 'Aplicación web de gestión de eventos',
        summary:
          'Plataforma web con paneles por rol para gestionar eventos, publicaciones, participantes y notificaciones.',
        problem:
          'Unificar la gestión de eventos y usuarios con permisos diferenciados según cada rol.',
        solution:
          'Aplicación React + TypeScript conectada a API REST en Laravel con autenticación Google y MySQL.',
        context: '',
        role: 'Frontend principal (paneles por rol, integración API REST y UI responsiva) + endpoint y tests en backend.',
        contribution: [
          'Paneles responsivos para 5 roles: mentor, coordinador, miembro, interesado e invitado.',
          'Integración de eventos, perfil, publicaciones y notificaciones con API REST.',
          'Endpoint backend de usuarios y pruebas automatizadas.',
        ],
        team: 'Equipo de 4 desarrolladores; lideré el frontend e integraciones con la API.',
        highlights: ['Frontend & API REST', '5 paneles por rol', 'Código público'],
      },
    },
    more: {
      title: 'Más en GitHub',
      description: 'Repositorios y prácticas de ingeniería de software.',
      action: 'Ir a GitHub',
    },
  },

  /* ----------------------------------------------------------- Education */
  education: {
    title: 'Educación y certificaciones',
    subtitle: 'Formación universitaria en curso y credenciales verificables.',
    academicTitle: 'Formación universitaria',
    certificationsTitle: 'Certificaciones verificables',
    inProgress: 'En curso',
    start: 'Inicio',
    expectedCompletion: 'Grado estimado',
    viewCredential: 'Ver credencial',
    verifiedOnCredly: 'Ver en Credly',
    issuer: 'Emisor',
    platform: 'Plataforma',
    identifier: 'ID',
    topics: 'Temas',
    groups: {
      security: 'Redes y ciberseguridad',
      ai: 'Inteligencia artificial',
    },
    types: {
      careerPath: 'Ruta profesional',
      course: 'Curso',
      bootcamp: 'Bootcamp',
      training: 'Formación',
    },
    aiAdvancedTopics: [
      'Redes convolucionales',
      'Segmentación',
      'Aprendizaje por refuerzo (DQN, A3C, PPO)',
    ],
  },

  /* --------------------------------------------------------- Soft skills */
  softSkills: {
    title: 'Habilidades blandas',
    subtitle: 'Cómo colaboro y resuelvo problemas dentro de un equipo de ingeniería.',
    inPractice: 'En la práctica',
    secondaryTitle: 'Cualidades complementarias',
    featured: {
      learning: {
        title: 'Aprendizaje continuo',
        description: 'Rápida adopción de herramientas cloud, lenguajes y buenas prácticas.',
        practice: 'Adaptación ágil al stack.',
      },
      proactivity: {
        title: 'Proactividad',
        description: 'Investigación previa de errores y propuestas de solución antes de escalar.',
        practice: 'Diagnóstico autónomo.',
      },
      teamwork: {
        title: 'Trabajo en equipo',
        description: 'Colaboración activa en Scrum, revisión técnica y soporte compartido.',
        practice: 'Sinergia en sprints.',
      },
      problemSolving: {
        title: 'Resolución de problemas',
        description: 'Búsqueda de causas raíz en logs y datos para estabilizar sistemas.',
        practice: 'Corrección de raíz.',
      },
      communication: {
        title: 'Comunicación clara',
        description: 'Explicación concisa de hallazgos técnicos a compañeros y estudiantes.',
        practice: 'Claridad técnica.',
      },
      analytical: {
        title: 'Pensamiento analítico',
        description: 'Validación estructurada de entradas, salidas y trazas distribuidas.',
        practice: 'Análisis de logs y datos.',
      },
    },
    secondary: {
      adaptability: {
        title: 'Adaptabilidad',
        description: 'Versatilidad entre herramientas y prioridades.',
      },
      responsibility: {
        title: 'Compromiso',
        description: 'Seguimiento riguroso de tickets y entregas.',
      },
      curiosity: {
        title: 'Curiosidad técnica',
        description: ' Comprensión profunda de sistemas distribuidos.',
      },
      patience: {
        title: 'Empatía',
        description: 'Escucha activa y vocación docente.',
      },
    },
  },

  /* ----------------------------------------------------------- Languages */
  languages: {
    title: 'Idiomas',
    subtitle: 'Comunicación cotidiana, académica y técnica.',
    spanish: {
      name: 'Español',
      level: 'Nativo',
      description: 'Comunicación profesional y técnica fluida.',
    },
    english: {
      name: 'Inglés',
      level: 'B1–B2 Conversacional',
      levelNote: 'Autoevaluación práctica',
      description: 'Lectura técnica diaria e interacción conversacional intercultural.',
      context: 'Experiencia comunicativa en Estados Unidos y con equipos de India.',
    },
    interface: {
      title: 'Idioma del sitio',
      text: 'Disponible en ES / EN desde el encabezado.',
      current: 'Idioma actual:',
    },
  },

  /* --------------------------------------------------- Professional focus */
  focus: {
    title: 'Enfoque profesional',
    subtitle: 'Áreas estratégicas en las que enfoco mi crecimiento como ingeniero.',
    goalLabel: 'Foco',
    relatedLabel: 'Stack',
    connectionLabel: 'Base actual',
    areas: {
      backend: {
        title: 'Backend Engineering',
        description: 'Diseño de servicios mantenibles, APIs limpias e integración confiable entre sistemas.',
        connection: 'Java, Scala y Python en producción.',
      },
      cloud: {
        title: 'Cloud Computing (AWS)',
        description: 'Despliegue, operación y optimización de cargas de trabajo y almacenamiento en AWS.',
        connection: 'S3, EMR, Lambda y API Gateway.',
      },
      data: {
        title: 'Datos & Sistemas Distribuidos',
        description: 'Orquestación, procesamiento a escala y calidad de datos en pipelines continuos.',
        connection: 'Spark, Hadoop, Airflow y SQL.',
      },
      automation: {
        title: 'Automatización & Confiabilidad',
        description: 'Observabilidad, diagnóstico preventivo y reducción de tareas operativas manuales.',
        connection: 'Monitoreo y soporte de pipelines.',
      },
    },
    philosophyLabel: 'Principio',
    philosophy: 'Construir software útil, mantenible y confiable para problemas reales.',
  },

  /* ------------------------------------------------------------- Contact */
  contact: {
    eyebrow: 'Contacto profesional',
    title: 'Conversemos sobre oportunidades profesionales',
    text: 'Estoy abierto a conocer oportunidades en desarrollo de software, backend y tecnologías cloud, así como a colaborar en proyectos de ingeniería de software.',
    openModalBtn: 'Abrir asistente de contacto',
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

  /* ------------------------------------------------------- Contact Modal */
  contactModal: {
    badge: 'SYS.CONNECT // ASISTENTE DE CONTACTO',
    title: 'Contacto profesional con Duber Andrés Eraso',
    subtitle: 'Elige cómo prefieres comunicarte: formulario de mensaje directo o canales verificados.',
    formTab: 'Enviar mensaje',
    channelsTab: 'Canales directos',
    nameLabel: 'Tu nombre completo',
    namePlaceholder: 'Ej. María Gómez / Tech Recruiter',
    emailLabel: 'Tu correo de contacto',
    emailPlaceholder: 'nombre@empresa.com',
    subjectLabel: 'Asunto de la conversación',
    subjectPlaceholder: 'Ej. Oportunidad Backend Developer / AWS',
    messageLabel: 'Detalles de la oportunidad o consulta',
    messagePlaceholder: 'Describe brevemente el puesto, proyecto o requerimientos tecnológicos...',
    submitBtn: 'Enviar mensaje',
    sendingBtn: 'Preparando...',
    mailtoBtn: 'Abrir en tu cliente de correo (mailto)',
    successTitle: 'Mensaje preparado con éxito',
    successDesc: 'Se ha abierto tu cliente de correo predeterminado con los datos completados para enviar a Duber Eraso.',
    sendAnother: 'Redactar otro mensaje',
    close: 'Cerrar',
    copyEmail: 'Copiar correo',
    copied: 'Copiado',
    verifiedNote: 'Canal verificado con respuesta habitual en menos de 24 horas laborables.',
    directEmailLabel: 'Correo electrónico profesional',
    locationLabel: 'Ubicación y modalidad',
    locationVal: 'Popayán, Colombia (Disponible para trabajo Remoto / Híbrido)',
    validation: {
      nameRequired: 'Por favor ingresa tu nombre o el de tu organización.',
      emailRequired: 'Por favor ingresa tu dirección de correo electrónico.',
      emailInvalid: 'Por favor ingresa un correo electrónico válido (ej. usuario@dominio.com).',
      subjectRequired: 'Por favor especifica un asunto para el contacto.',
      messageRequired: 'Por favor escribe un mensaje (mínimo 10 caracteres).',
    },
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

  /* --------------------------------------------------- Workspace & UX Tabs */
  workspace: {
    consoleLabel: 'CONSOLA MODULAR // NAVEGACIÓN POR PESTAÑAS',
    shortcutHint: 'Teclas [1–5] para cambiar de módulo',
    tablistLabel: 'Módulos principales del portafolio',
    nextModule: 'Siguiente módulo',
    prevModule: 'Módulo anterior',
    tabs: {
      experience: {
        code: '01',
        label: 'Experiencia & Carrera',
        short: 'Experiencia',
        desc: 'Backend, AWS Cloud y docencia voluntaria',
      },
      projects: {
        code: '02',
        label: 'Proyectos Seleccionados',
        short: 'Proyectos',
        desc: 'Casos de estudio, arquitectura y mi rol real',
      },
      stack: {
        code: '03',
        label: 'Especialidad & Stack',
        short: 'Stack & AWS',
        desc: 'Foco principal en Backend, AWS y Datos Distribuidos',
      },
      profile: {
        code: '04',
        label: 'Perfil & Credenciales',
        short: 'Perfil & Certs',
        desc: 'Sobre mí, Unicauca, certificaciones e idiomas',
      },
      contact: {
        code: '05',
        label: 'Contacto Directo',
        short: 'Contacto',
        desc: 'Asistente de mensajes y canales verificados',
      },
    },
    profileSubTabs: {
      label: 'Subsecciones de perfil',
      overview: 'Sobre mí & Educación',
      competencies: 'Competencias & Idiomas',
      all: 'Ver perfil completo',
    },
    careerArc: {
      label: 'TRAYECTORIA & CONTEXTO PROFESIONAL',
      step1Title: 'Ingeniería de Sistemas',
      step1Meta: '2021 – Presente · Universidad del Cauca',
      step2Title: 'Docente Voluntario de Informática',
      step2Meta: '2023 – Presente · Proyecto Comunitario ICETEX',
      step3Title: 'Desarrollador de Back-end & Cloud',
      step3Meta: 'Ene 2026 – Presente · ST&T LTDA (AWS · Spark · Airflow)',
    },
    techFilters: {
      label: 'Filtrar tecnologías por enfoque',
      core: 'Especialidad Principal: Backend, AWS & Datos',
      ops: 'Infraestructura, BD & Flujo Ágil',
      complementary: 'Web & Otros Proyectos',
      all: 'Todas las áreas',
      focusedBanner:
        'Vista enfocada en mi especialidad #1 (Backend, Cloud AWS y sistemas de datos distribuidos) para facilitar la revisión técnica.',
    },
    projectFilters: {
      label: 'Filtrar proyectos por categoría',
      all: 'Todos',
      completed: 'Finalizados',
      research: 'Trabajo de grado',
      roleBadge: 'Mi rol',
      verifiedRepo: 'Código público',
      activeThesis: 'En desarrollo',
    },
    quickBrief: {
      localTime: 'Hora local (UTC-5)',
      focusLabel: 'Especialidad',
      focusValue: 'Backend · AWS Cloud · Pipelines de Datos',
    },
  },

  /* ------------------------------------------------ Honeycomb Tech Stack */
  honeycomb: {
    filterLabel: 'Resaltar área en el panal',
    all: 'Todo el panal',
    clickToPin: 'Clic para abrir ficha completa',
    closeModal: 'Cerrar detalle',
    categories: {
      backend: 'Backend & Lenguajes',
      cloud: 'AWS Cloud',
      data: 'Datos Distribuidos',
      databases: 'Bases de Datos',
      tools: 'Sistemas, APIs & Flujo Ágil',
      frontend: 'Web & Videojuegos',
    },
    items: {
      java: {
        role: 'Lenguaje Backend Principal',
        desc: 'Desarrollo, mantenimiento y corrección de módulos backend empresariales en producción.',
        tags: ['ST&T LTDA', 'Backend', 'Sistemas distribuidos'],
      },
      scala: {
        role: 'Backend & Procesamiento Distribuido',
        desc: 'Mantenimiento y soporte de procesos de datos escalables sobre Spark y entornos cloud.',
        tags: ['ST&T LTDA', 'Apache Spark', 'Pipelines'],
      },
      python: {
        role: 'Automatización, Datos & Backend',
        desc: 'Scripts de soporte, sensores de flujos en Airflow, validación de datos y automatización.',
        tags: ['ST&T LTDA', 'Airflow', 'AWS Lambda'],
      },
      aws: {
        role: 'Ecosistema Cloud Principal',
        desc: 'Operación cotidiana de servicios cloud para almacenamiento, cómputo distribuido y APIs.',
        tags: ['ST&T LTDA', 'Cloud Computing', 'Operación'],
      },
      awsS3: {
        role: 'Almacenamiento Cloud de Datos',
        desc: 'Inspección y validación de datos de entrada/salida en buckets de pipelines distribuidos.',
        tags: ['AWS', 'Data Lakes', 'Pipelines'],
      },
      awsEmr: {
        role: 'Clústeres Big Data Administrados',
        desc: 'Seguimiento de ejecuciones distribuidas, logs y revisión de plantillas de clúster.',
        tags: ['AWS', 'Spark & Hadoop', 'Clústeres'],
      },
      awsLambda: {
        role: 'Cómputo Serverless',
        desc: 'Soporte y mantenimiento de funciones serverless e integraciones basadas en eventos.',
        tags: ['AWS', 'Serverless', 'Eventos'],
      },
      awsApiGateway: {
        role: 'Gestión de APIs en AWS',
        desc: 'Exposición, integración e inspección de endpoints de servicios backend en la nube.',
        tags: ['AWS', 'REST APIs', 'Integración'],
      },
      spark: {
        role: 'Procesamiento Distribuido de Datos',
        desc: 'Monitoreo, diagnóstico de fallos y validación de resultados en jobs distribuidos.',
        tags: ['Big Data', 'Scala & Python', 'EMR'],
      },
      airflow: {
        role: 'Orquestación de Pipelines',
        desc: 'Supervisión de DAGs programados, sensores de flujos, logs e investigación de alertas.',
        tags: ['Orquestación', 'DAGs', 'Monitoreo'],
      },
      hadoop: {
        role: 'Ecosistema de Datos Distribuidos',
        desc: 'Soporte en entornos de clúster y almacenamiento/procesamiento distribuido.',
        tags: ['Sistemas Distribuidos', 'Clústeres', 'Big Data'],
      },
      sql: {
        role: 'Consultas y Validación de Datos',
        desc: 'Análisis de consistencia, cruce de registros y verificación de calidad en bases de datos.',
        tags: ['Calidad de datos', 'Consultas', 'Análisis'],
      },
      mysql: {
        role: 'Base de Datos Relacional',
        desc: 'Modelado relacional y consultas en entornos laborales y aplicaciones web (EventManager).',
        tags: ['Relacional', 'ST&T LTDA', 'EventManager'],
      },
      mongodb: {
        role: 'Base de Datos NoSQL',
        desc: 'Manejo de colecciones orientadas a documentos para datos flexibles.',
        tags: ['NoSQL', 'Documentos', 'Bases de datos'],
      },
      linux: {
        role: 'Sistemas Operativos & Entornos Remotos',
        desc: 'Acceso por terminal a servidores remotos, inspección de logs y operación en clústeres.',
        tags: ['Terminal SSH', 'Servidores', 'Logs'],
      },
      postman: {
        role: 'Pruebas e Inspección de APIs',
        desc: 'Validación de endpoints REST, análisis de respuestas HTTP y diagnóstico de integraciones.',
        tags: ['REST APIs', 'Testing', 'Debugging'],
      },
      git: {
        role: 'Control de Versiones',
        desc: 'Gestión de ramas, fusiones limpias y trabajo colaborativo en múltiples repositorios.',
        tags: ['Git Flow', 'Repositorios', 'Colaboración'],
      },
      bitbucket: {
        role: 'Repositorios Empresariales',
        desc: 'Gestión de código fuente, pull requests y revisión colaborativa en el entorno laboral.',
        tags: ['ST&T LTDA', 'Pull Requests', 'Git'],
      },
      jira: {
        role: 'Gestión Ágil e Incidencias',
        desc: 'Seguimiento de tickets de soporte, tareas de sprint y trazabilidad bajo Scrum.',
        tags: ['Scrum', 'Tickets', 'ST&T LTDA'],
      },
      typescript: {
        role: 'Desarrollo Web Tipado',
        desc: 'Construcción de interfaces mantenibles y tipadas como EventManager y este portafolio.',
        tags: ['EventManager', 'Tipado estático', 'Frontend'],
      },
      javascript: {
        role: 'Lenguaje para la Web',
        desc: 'Interactividad en aplicaciones web e integración asíncrona con servicios REST.',
        tags: ['ES6+', 'APIs Web', 'Proyectos'],
      },
      react: {
        role: 'Interfaces Basadas en Componentes',
        desc: 'Desarrollo de paneles por rol, vistas dinámicas y consumo de APIs en EventManager.',
        tags: ['EventManager', 'Componentes', 'UI'],
      },
      tailwind: {
        role: 'Estilos Responsivos Utility-First',
        desc: 'Maquetación adaptable de tableros y vistas por rol en proyectos colaborativos.',
        tags: ['EventManager', 'Responsive UI', 'CSS'],
      },
      csharp: {
        role: 'Lógica e Interacción en Unity',
        desc: 'Programación de mecánicas, eventos e interacción en el proyecto Ñimpe Misak.',
        tags: ['Ñimpe Misak', 'Scripting', 'POO'],
      },
      cpp: {
        role: 'Programación Base y Algoritmos',
        desc: 'Fundamentos sólidos de estructuras de datos, memoria y resolución algorítmica.',
        tags: ['Unicauca', 'Algoritmos', 'Sistemas'],
      },
      unity: {
        role: 'Motor Interactivo 2.5D / 3D',
        desc: 'Desarrollo del videojuego etnoeducativo Ñimpe Misak como trabajo de grado.',
        tags: ['Trabajo de grado', '2.5D', 'C#'],
      },
    },
  },

  pageTabs: {
    tablistLabel: 'Pestañas principales del portafolio',
    continueReading: 'Siguiente sección',
    backToStart: 'Volver al inicio',
    tabs: {
      tab1: {
        label: 'Perfil',
        short: 'Perfil',
        hint: 'Inicio y Sobre mí',
        nextTitle: 'Habilidades técnicas',
      },
      tab2: {
        label: 'Trayectoria',
        short: 'Trayectoria',
        hint: 'Habilidades técnicas, Experiencia y Proyectos',
        nextTitle: 'Educación y certificaciones',
      },
      tab3: {
        label: 'Formación',
        short: 'Formación',
        hint: 'Educación, Habilidades blandas, Idiomas y Enfoque',
        nextTitle: 'Contacto profesional',
      },
      tab4: {
        label: 'Contacto',
        short: 'Contacto',
        hint: 'Contacto profesional',
        nextTitle: 'Inicio',
      },
    },
  },
};

export type Dictionary = typeof es;

/* ------------------------------------------------------------------------ */
/* ENGLISH                                                                  */
/* ------------------------------------------------------------------------ */
const en: Dictionary = {
  meta: {
    title: 'Duber Andrés Eraso Uni — Backend Developer & Cloud Engineer (AWS)',
    description:
      'Portfolio of Duber Andrés Eraso Uni, Systems Engineering student at Universidad del Cauca and Backend Developer focused on AWS Cloud Computing, data pipelines, and distributed architectures.',
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
    closeModal: 'Close contact modal (Escape key)',
    contactModalDialog: 'Professional contact modal dialog',
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

  /* ---------------------------------------------------------------- Hero */
  hero: {
    greeting: "Hi, I'm",
    headlineStart: 'I build software solutions connecting ',
    headlineHighlight: 'backend, data, and cloud.',
    intro:
      'Backend developer and Systems Engineering student at Unicauca. I operate, troubleshoot, and maintain distributed data pipelines on AWS using Java, Scala, and Python.',
    ctaProjects: 'Explore projects',
    ctaContact: 'Let’s discuss opportunities',
    roleLabel: 'Backend Developer at',
    studyLabel: 'Systems Engineering',
    socialLabel: 'Profiles',
    codeFile: 'profile.ts',
    codeRole: 'Backend Developer',
    codeStatus: 'active',
  },

  about: {
    title: 'About me',
    subtitle: 'Backend, AWS Cloud, and distributed data pipeline reliability.',
    paragraphs: [
      'Systems Engineering student at Universidad del Cauca and Backend Developer at ST&T LTDA.',
      'Focused on monitoring, troubleshooting, and maintaining cloud data pipelines on AWS with Java, Scala, Python, Spark, Airflow, and SQL in agile teams.',
    ],
    closing: 'Focused on building reliable software, automating workflows, and resolving root-cause incidents.',
    factsTitle: 'Summary',
    facts: {
      location: 'Location',
      education: 'Education',
      educationValue: 'Systems Engineering (in progress)',
      role: 'Current role',
      roleValue: 'Backend Developer',
      profile: 'Specialty',
      profileValue: 'Backend, AWS Cloud & Distributed Systems',
    },
    pillarsTitle: 'Core pillars',
    pillars: {
      backend: {
        title: 'Backend',
        items: ['Maintainable services in Java, Scala, and Python, REST API integration, and testing.'],
      },
      cloud: {
        title: 'Cloud & Data',
        items: ['Pipeline operations and support with AWS (S3, EMR, Lambda), Spark, and Airflow.'],
      },
      problemSolving: {
        title: 'Diagnostics',
        items: ['Log analysis, data quality validation, and agile incident resolution.'],
      },
    },
    quoteLabel: 'Focus',
    quote: 'Understand problems at their root and deliver reliable software.',
  },

  techStack: {
    title: 'Technical Skills',
    subtitle:
      'Hover over any hexagon or click to inspect my hands-on experience with each technology.',
    legendLabel: 'Context',
    contexts: {
      work: 'Professional work (ST&T LTDA)',
      projects: 'Projects & education',
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
    subtitle: 'Cloud data pipeline operations and volunteer computer science teaching.',
    role: 'Backend Developer',
    present: 'Present',
    current: 'Current role',
    modality: 'Remote',
    summary: [
      'Supporting, monitoring, troubleshooting, and maintaining distributed data pipelines on AWS using Java, Scala, Python, Spark, and Airflow in a Scrum team.',
    ],
    responsibilitiesTitle: 'Key responsibilities',
    tablistLabel: 'Areas of responsibility',
    relatedTools: 'Related tools',
    groups: {
      monitoring: {
        title: 'Pipeline monitoring & operations',
        short: 'Monitoring',
        items: [
          'Supervise scheduled runs and distributed pipeline health.',
          'Inspect logs and outputs to detect operational anomalies.',
        ],
      },
      incidents: {
        title: 'Incident diagnosis & resolution',
        short: 'Incidents',
        items: [
          'Analyze logs to isolate root causes of runtime failures.',
          'Fix software defects and validate post-deployment behavior.',
          'Collaborate on support tickets and incident tracking.',
        ],
      },
      dataAnalysis: {
        title: 'Data analysis & validation',
        short: 'Data',
        items: [
          'Validate input/output datasets and investigate inconsistencies.',
          'Verify data quality after applying fixes.',
        ],
      },
      software: {
        title: 'Software development & maintenance',
        short: 'Software',
        items: [
          'Maintain multi-repository modules in Java, Scala, and Python.',
          'Test REST endpoints with Postman and serverless workflows.',
        ],
      },
      cloud: {
        title: 'Cloud services & infrastructure',
        short: 'Cloud',
        items: [
          'Daily operations across AWS (S3, EMR, Lambda, API Gateway).',
          'Access remote Linux environments and review cluster templates.',
        ],
      },
      collaboration: {
        title: 'Collaboration & ways of working',
        short: 'Team',
        items: [
          'Agile Scrum workflow, Jira issue tracking, and Bitbucket version control.',
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
    subtitle: 'Selected projects showing my concrete role, verified stack, and current status.',
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
          '2.5D Unity video game promoting the language and worldview of the Misak community (Morales, Cauca).',
        problem:
          'Support interactive learning of cultural and linguistic heritage of the Misak community.',
        solution:
          '2.5D interactive experience in Unity designed with cultural respect and local context.',
        context:
          'Undergraduate thesis connected with the Misak community of San Antonio, Morales, Cauca.',
        role: 'Undergraduate thesis R&D (Systems Engineering · Unicauca).',
        contribution: [],
        team: '',
        highlights: ['Thesis project', 'Unity 2.5D', 'Misak language'],
      },
      eventManager: {
        type: 'Event management web application',
        summary:
          'Role-based web platform to manage events, publications, participants, and real-time notifications.',
        problem:
          'Centralize event and participant management with role-based permissions in one platform.',
        solution:
          'React + TypeScript frontend integrated with a Laravel REST API, Google sign-in, and MySQL.',
        context: '',
        role: 'Lead frontend contributor (role dashboards, REST API integration & responsive UI) + backend endpoint & tests.',
        contribution: [
          'Responsive dashboards for 5 user roles: mentor, coordinator, member, interested user, and guest.',
          'REST API integration for events, user profiles, publications, and notifications.',
          'User-creation backend endpoint and automated unit/feature tests.',
        ],
        team: '4-developer team; I led frontend implementation and API integrations.',
        highlights: ['Frontend & REST API', '5 role dashboards', 'Public repo'],
      },
    },
    more: {
      title: 'More on GitHub',
      description: 'Software engineering repositories and code.',
      action: 'Go to GitHub',
    },
  },

  education: {
    title: 'Education & Certifications',
    subtitle: 'Undergraduate degree in progress and verifiable credentials.',
    academicTitle: 'University Degree',
    certificationsTitle: 'Verified Certifications',
    inProgress: 'In Progress',
    start: 'Start',
    expectedCompletion: 'Expected Graduation',
    viewCredential: 'View Credential',
    verifiedOnCredly: 'Verify on Credly',
    issuer: 'Issuer',
    platform: 'Platform',
    identifier: 'ID',
    topics: 'Topics',
    groups: {
      security: 'Networking & Cybersecurity',
      ai: 'Artificial Intelligence',
    },
    types: {
      careerPath: 'Career path',
      course: 'Course',
      bootcamp: 'Bootcamp',
      training: 'Training',
    },
    aiAdvancedTopics: [
      'Convolutional networks',
      'Segmentation',
      'Reinforcement learning (DQN, A3C, PPO)',
    ],
  },

  softSkills: {
    title: 'Soft Skills',
    subtitle: 'How I collaborate and solve problems in engineering teams.',
    inPractice: 'In practice',
    secondaryTitle: 'Complementary traits',
    featured: {
      learning: {
        title: 'Continuous Learning',
        description: 'Fast adoption of cloud services, languages, and engineering practices.',
        practice: 'Rapid stack ramp-up.',
      },
      proactivity: {
        title: 'Proactivity',
        description: 'Investigating incidents and proposing fixes before escalating.',
        practice: 'Autonomous diagnostics.',
      },
      teamwork: {
        title: 'Teamwork',
        description: 'Active Scrum collaboration, shared debugging, and peer support.',
        practice: 'Sprint synergy.',
      },
      problemSolving: {
        title: 'Problem Solving',
        description: 'Tracing root causes across logs and datasets to keep pipelines stable.',
        practice: 'Root-cause fixes.',
      },
      communication: {
        title: 'Clear Communication',
        description: 'Concise explanation of technical findings to teammates and students.',
        practice: 'Technical clarity.',
      },
      analytical: {
        title: 'Analytical Thinking',
        description: 'Structured validation of inputs, outputs, and distributed execution traces.',
        practice: 'Log & data analysis.',
      },
    },
    secondary: {
      adaptability: {
        title: 'Adaptability',
        description: 'Versatile across tools and priorities.',
      },
      responsibility: {
        title: 'Ownership',
        description: 'Reliable ticket follow-through.',
      },
      curiosity: {
        title: 'Technical Curiosity',
        description: 'Deep interest in distributed systems.',
      },
      patience: {
        title: 'Empathy',
        description: 'Active listening and teaching mindset.',
      },
    },
  },

  languages: {
    title: 'Languages',
    subtitle: 'Everyday, academic, and technical communication.',
    spanish: {
      name: 'Spanish',
      level: 'Native',
      description: 'Fluent professional and technical communication.',
    },
    english: {
      name: 'English',
      level: 'B1–B2 Conversational',
      levelNote: 'Practical self-assessment',
      description: 'Daily technical reading and cross-cultural conversational fluency.',
      context: 'Communication experience in the United States and with teams in India.',
    },
    interface: {
      title: 'Site language',
      text: 'Switch ES / EN anytime in the header.',
      current: 'Current language:',
    },
  },

  focus: {
    title: 'Professional Focus',
    subtitle: 'Strategic engineering domains where I focus my growth.',
    goalLabel: 'Focus',
    relatedLabel: 'Stack',
    connectionLabel: 'Current base',
    areas: {
      backend: {
        title: 'Backend Engineering',
        description: 'Maintainable backend services, clean APIs, and reliable system integrations.',
        connection: 'Java, Scala & Python in production.',
      },
      cloud: {
        title: 'Cloud Computing (AWS)',
        description: 'Deploying, operating, and maintaining cloud workloads and data services on AWS.',
        connection: 'S3, EMR, Lambda & API Gateway.',
      },
      data: {
        title: 'Data & Distributed Systems',
        description: 'Workflow orchestration, distributed processing, and data quality at scale.',
        connection: 'Spark, Hadoop, Airflow & SQL.',
      },
      automation: {
        title: 'Automation & Reliability',
        description: 'Observability, root-cause diagnostics, and reducing manual operational toil.',
        connection: 'Pipeline monitoring & support.',
      },
    },
    philosophyLabel: 'Principle',
    philosophy: 'Build useful, maintainable, and reliable software for real-world problems.',
  },

  contact: {
    eyebrow: 'Professional Contact',
    title: 'Discussing Professional Opportunities',
    text: 'Open to exploring opportunities in software engineering, backend systems, and cloud architectures (AWS), as well as collaborating on impactful technical projects.',
    openModalBtn: 'Open contact assistant',
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

  /* ------------------------------------------------------- Contact Modal */
  contactModal: {
    badge: 'SYS.CONNECT // CONTACT ASSISTANT',
    title: 'Professional Contact with Duber Andrés Eraso',
    subtitle: 'Choose how you prefer to connect: direct message form or verified technical channels.',
    formTab: 'Send message',
    channelsTab: 'Direct channels',
    nameLabel: 'Your full name',
    namePlaceholder: 'e.g. Sarah Miller / Tech Recruiter',
    emailLabel: 'Your contact email',
    emailPlaceholder: 'name@company.com',
    subjectLabel: 'Conversation subject',
    subjectPlaceholder: 'e.g. Backend Developer Role / AWS Opportunity',
    messageLabel: 'Opportunity or inquiry details',
    messagePlaceholder: 'Briefly describe the role, project, or technical requirements...',
    submitBtn: 'Send message',
    sendingBtn: 'Preparing...',
    mailtoBtn: 'Open in email client (mailto)',
    successTitle: 'Message prepared successfully',
    successDesc: 'Your default email client has been opened with your pre-filled details addressed to Duber Eraso.',
    sendAnother: 'Compose another message',
    close: 'Close',
    copyEmail: 'Copy email',
    copied: 'Copied',
    verifiedNote: 'Verified channel with typical response time within 24 business hours.',
    directEmailLabel: 'Professional email address',
    locationLabel: 'Location & modality',
    locationVal: 'Popayán, Colombia (Available for Remote / Hybrid work)',
    validation: {
      nameRequired: 'Please enter your name or company name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address (e.g. user@domain.com).',
      subjectRequired: 'Please specify a subject for the contact.',
      messageRequired: 'Please provide a message (at least 10 characters).',
    },
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

  workspace: {
    consoleLabel: 'MODULAR WORKBENCH // TABBED NAVIGATION',
    shortcutHint: 'Keys [1–5] to switch module',
    tablistLabel: 'Main portfolio modules',
    nextModule: 'Next module',
    prevModule: 'Previous module',
    tabs: {
      experience: {
        code: '01',
        label: 'Experience & Career',
        short: 'Experience',
        desc: 'Backend, AWS Cloud & volunteer teaching',
      },
      projects: {
        code: '02',
        label: 'Selected Projects',
        short: 'Projects',
        desc: 'Case studies, architecture & my concrete role',
      },
      stack: {
        code: '03',
        label: 'Core Specialty & Stack',
        short: 'Stack & AWS',
        desc: 'Primary focus on Backend, AWS & Distributed Data',
      },
      profile: {
        code: '04',
        label: 'Profile & Credentials',
        short: 'Profile & Certs',
        desc: 'About me, Unicauca, certifications & languages',
      },
      contact: {
        code: '05',
        label: 'Direct Contact',
        short: 'Contact',
        desc: 'Message assistant & verified channels',
      },
    },
    profileSubTabs: {
      label: 'Profile subsections',
      overview: 'About & Education',
      competencies: 'Soft Skills & Languages',
      all: 'Full profile view',
    },
    careerArc: {
      label: 'CAREER PROGRESSION & CONTEXT',
      step1Title: 'Systems Engineering',
      step1Meta: '2021 – Present · Universidad del Cauca',
      step2Title: 'Volunteer Computer Science Instructor',
      step2Meta: '2023 – Present · Proyecto Comunitario ICETEX',
      step3Title: 'Backend & Cloud Developer',
      step3Meta: 'Jan 2026 – Present · ST&T LTDA (AWS · Spark · Airflow)',
    },
    techFilters: {
      label: 'Filter technologies by focus',
      core: 'Core Specialty: Backend, AWS & Data',
      ops: 'Infrastructure, DB & Agile Workflow',
      complementary: 'Web & Other Projects',
      all: 'All domains',
      focusedBanner:
        'View focused on my #1 specialty (Backend, AWS Cloud, and distributed data pipelines) for streamlined technical review.',
    },
    projectFilters: {
      label: 'Filter projects by category',
      all: 'All',
      completed: 'Completed',
      research: 'Thesis',
      roleBadge: 'My role',
      verifiedRepo: 'Public repo',
      activeThesis: 'In development',
    },
    quickBrief: {
      localTime: 'Local time (UTC-5)',
      focusLabel: 'Specialty',
      focusValue: 'Backend · AWS Cloud · Data Pipelines',
    },
  },

  honeycomb: {
    filterLabel: 'Highlight domain in honeycomb',
    all: 'Full honeycomb',
    clickToPin: 'Click to open full card',
    closeModal: 'Close details',
    categories: {
      backend: 'Backend & Languages',
      cloud: 'AWS Cloud',
      data: 'Distributed Data',
      databases: 'Databases',
      tools: 'Systems, APIs & Agile',
      frontend: 'Web & Game Dev',
    },
    items: {
      java: {
        role: 'Core Backend Language',
        desc: 'Building, maintaining, and debugging enterprise backend modules in production.',
        tags: ['ST&T LTDA', 'Backend', 'Distributed systems'],
      },
      scala: {
        role: 'Backend & Distributed Processing',
        desc: 'Maintaining and supporting scalable data workflows on Spark and cloud clusters.',
        tags: ['ST&T LTDA', 'Apache Spark', 'Pipelines'],
      },
      python: {
        role: 'Automation, Data & Backend',
        desc: 'Support scripts, Airflow workflow sensors, data validation, and task automation.',
        tags: ['ST&T LTDA', 'Airflow', 'AWS Lambda'],
      },
      aws: {
        role: 'Primary Cloud Ecosystem',
        desc: 'Daily cloud operations across storage, distributed compute, and API services.',
        tags: ['ST&T LTDA', 'Cloud Computing', 'Operations'],
      },
      awsS3: {
        role: 'Cloud Object Storage',
        desc: 'Inspecting and validating input/output datasets across distributed data pipelines.',
        tags: ['AWS', 'Data Lakes', 'Pipelines'],
      },
      awsEmr: {
        role: 'Managed Big Data Clusters',
        desc: 'Tracking distributed job runs, execution logs, and cluster template configurations.',
        tags: ['AWS', 'Spark & Hadoop', 'Clusters'],
      },
      awsLambda: {
        role: 'Serverless Compute',
        desc: 'Supporting and maintaining event-driven serverless functions and integrations.',
        tags: ['AWS', 'Serverless', 'Events'],
      },
      awsApiGateway: {
        role: 'Cloud API Management',
        desc: 'Exposing, integrating, and inspecting cloud backend REST endpoints.',
        tags: ['AWS', 'REST APIs', 'Integration'],
      },
      spark: {
        role: 'Distributed Data Processing',
        desc: 'Monitoring jobs, diagnosing runtime failures, and validating distributed outputs.',
        tags: ['Big Data', 'Scala & Python', 'EMR'],
      },
      airflow: {
        role: 'Workflow Orchestration',
        desc: 'Supervising scheduled DAGs, workflow sensors, execution logs, and alerts.',
        tags: ['Orchestration', 'DAGs', 'Monitoring'],
      },
      hadoop: {
        role: 'Distributed Data Ecosystem',
        desc: 'Supporting cluster environments and distributed storage/processing workflows.',
        tags: ['Distributed Systems', 'Clusters', 'Big Data'],
      },
      sql: {
        role: 'Data Querying & Validation',
        desc: 'Consistency checks, record reconciliation, and data quality verification.',
        tags: ['Data quality', 'Queries', 'Analytics'],
      },
      mysql: {
        role: 'Relational Database',
        desc: 'Relational modeling and querying across work environments and web apps (EventManager).',
        tags: ['Relational', 'ST&T LTDA', 'EventManager'],
      },
      mongodb: {
        role: 'NoSQL Document Database',
        desc: 'Working with document-oriented collections for flexible data structures.',
        tags: ['NoSQL', 'Documents', 'Databases'],
      },
      linux: {
        role: 'OS & Remote Environments',
        desc: 'SSH terminal access to remote servers, log inspection, and cluster operations.',
        tags: ['SSH Terminal', 'Servers', 'Logs'],
      },
      postman: {
        role: 'API Testing & Inspection',
        desc: 'Testing REST endpoints, inspecting HTTP payloads, and debugging integrations.',
        tags: ['REST APIs', 'Testing', 'Debugging'],
      },
      git: {
        role: 'Version Control',
        desc: 'Branch workflows, clean merges, and multi-repository team collaboration.',
        tags: ['Git Flow', 'Repositories', 'Collaboration'],
      },
      bitbucket: {
        role: 'Enterprise Repositories',
        desc: 'Source code management, pull requests, and collaborative code review at work.',
        tags: ['ST&T LTDA', 'Pull Requests', 'Git'],
      },
      jira: {
        role: 'Agile & Incident Tracking',
        desc: 'Managing support tickets, sprint tasks, and issue resolution in Scrum.',
        tags: ['Scrum', 'Tickets', 'ST&T LTDA'],
      },
      typescript: {
        role: 'Typed Web Development',
        desc: 'Building type-safe, maintainable UIs such as EventManager and this portfolio.',
        tags: ['EventManager', 'Static typing', 'Frontend'],
      },
      javascript: {
        role: 'Web Programming Language',
        desc: 'Interactive web features and asynchronous REST API integrations.',
        tags: ['ES6+', 'Web APIs', 'Projects'],
      },
      react: {
        role: 'Component-Based UIs',
        desc: 'Built role-based dashboards, dynamic views, and API integrations in EventManager.',
        tags: ['EventManager', 'Components', 'UI'],
      },
      tailwind: {
        role: 'Utility-First Responsive CSS',
        desc: 'Responsive layout styling for role dashboards and collaborative web views.',
        tags: ['EventManager', 'Responsive UI', 'CSS'],
      },
      csharp: {
        role: 'Unity Game Logic & Scripting',
        desc: 'Implementing interactive mechanics and events for the Ñimpe Misak project.',
        tags: ['Ñimpe Misak', 'Scripting', 'OOP'],
      },
      cpp: {
        role: 'Systems & Algorithmic Foundations',
        desc: 'Strong foundation in data structures, memory management, and algorithms.',
        tags: ['Unicauca', 'Algorithms', 'Systems'],
      },
      unity: {
        role: '2.5D / 3D Interactive Engine',
        desc: 'Developing the Ñimpe Misak ethno-educational video game thesis project.',
        tags: ['Thesis project', '2.5D', 'C#'],
      },
    },
  },

  pageTabs: {
    tablistLabel: 'Main portfolio tabs',
    continueReading: 'Next section',
    backToStart: 'Back to start',
    tabs: {
      tab1: {
        label: 'Profile',
        short: 'Profile',
        hint: 'Home & About',
        nextTitle: 'Technical Skills',
      },
      tab2: {
        label: 'Career',
        short: 'Career',
        hint: 'Tech Stack, Experience & Projects',
        nextTitle: 'Education & Certifications',
      },
      tab3: {
        label: 'Education',
        short: 'Education',
        hint: 'Education, Soft Skills, Languages & Focus',
        nextTitle: 'Professional Contact',
      },
      tab4: {
        label: 'Contact',
        short: 'Contact',
        hint: 'Professional Contact',
        nextTitle: 'Home',
      },
    },
  },
};

export const translations: Record<Language, Dictionary> = { es, en };
