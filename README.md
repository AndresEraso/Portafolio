# Portafolio Profesional — Duber Andrés Eraso Uni

Sitio web profesional, bilingüe (Español / Inglés), responsivo y moderno para **Duber Andrés Eraso Uni**, estudiante de Ingeniería de Sistemas en la Universidad del Cauca y desarrollador orientado al **Backend, Cloud Computing (AWS), procesamiento de datos y sistemas distribuidos**.

El proyecto implementa una arquitectura limpia basada en **React 19**, **TypeScript**, **Vite** y un **sistema visual centralizado con CSS Variables**. Todo el contenido visual e informativo proviene exclusivamente de la especificación verificada ubicada en el directorio `Contenido/`.

---

## 🚀 Tecnologías Utilizadas

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador y Servidor Local:** [Vite](https://vite.dev/)
- **Estilos y Temas:** Vanilla CSS moderno con CSS Custom Properties (variables nativas) centralizadas en `src/styles/themes.css`.
- **Tipografías Locales:** `@fontsource-variable/inter`, `@fontsource-variable/space-grotesk` y `@fontsource-variable/jetbrains-mono` (cero dependencias de fuentes externas lentas o bloqueadas).
- **Iconografía:** [Lucide React](https://lucide.dev/) + iconos SVG optimizados.
- **Pruebas Automatizadas:** [Vitest](https://vitest.dev/) + [@testing-library/react](https://testing-library.com/) + jsdom.
- **Linter de Código:** [ESLint](https://eslint.org/) con configuración plana (flat config) y reglas oficiales de React Hooks.

---

## 📋 Requisitos Previos

- **Node.js:** Versión 18 o superior (probado y compatible con Node.js v24 y npm v11).
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge).

---

## 🛠️ Instalación y Comandos de Ejecución

Abre una terminal en la raíz del proyecto (`Portafolio/`):

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
Inicia el servidor local con recarga instantánea en caliente (HMR):
```bash
npm run dev
```
La aplicación se abrirá en `http://localhost:5173/`.

### 3. Ejecutar pruebas automatizadas
Ejecuta la suite completa de pruebas unitarias y de integración:
```bash
npm test
```
Para ejecutar pruebas en modo continuo (watch):
```bash
npm run test:watch
```

### 4. Ejecutar comprobaciones de calidad (TypeScript + Linter)
```bash
# Verificación de tipos TypeScript estricto:
npm run typecheck

# Análisis estático con ESLint:
npm run lint

# Verificación completa (Linter + Pruebas + Compilación):
npm run check
```

### 5. Compilar para producción
Genera el paquete estático ultra optimizado en la carpeta `dist/`:
```bash
npm run build
```

Para previsualizar la compilación de producción localmente:
```bash
npm run preview
```

---

## 🎨 Guía de Personalización Rápida

Todo el diseño y los datos están centralizados para que puedas personalizar la apariencia y la información sin tener que editar componentes individuales:

### 1. ¿Dónde cambiar los colores, tema oscuro y tema claro?
👉 **Archivo:** `src/styles/themes.css`

- En `:root, [data-theme='dark']`:
  - `--color-primary`: Color de acento azul eléctrico (`#5b8cff`).
  - `--color-secondary`: Color violeta complementario (`#a088ff`).
  - `--color-background`: Fondo oscuro principal (`#0a0e17`).
  - `--color-surface`: Fondo de tarjetas y barras (`#111725`).
  - `--color-text`: Color del texto principal claro (`#eef2fa`).
  - `--color-border`: Bordes sutiles (`#222c40`).
- En `[data-theme='light']`:
  - Colores calibrados para el tema claro con contraste de alta legibilidad.

### 2. ¿Dónde cambiar la tipografía, espaciado y radios de tarjetas?
👉 **Archivo:** `src/styles/themes.css` (Sección 1: Tokens Comunes)

- `--font-sans`: Familia tipográfica base (Inter).
- `--font-display`: Tipografía de títulos y números (Space Grotesk).
- `--font-mono`: Tipografía de código y etiquetas (JetBrains Mono).
- `--section-spacing`: Espaciado vertical entre secciones (`clamp(4.5rem, 3rem + 6vw, 8rem)`).
- `--card-radius`: Redondez de esquinas de las tarjetas (`var(--radius-lg)`).
- `--button-radius`: Redondez de los botones (`var(--radius-pill)` para bordes redondeados o `var(--radius-sm)` para rectangulares).
- `--card-hover-lift`: Elevación al pasar el cursor (`-3px` o `0` para estático).

### 3. ¿Dónde editar los textos en español e inglés?
👉 **Archivo:** `src/i18n/translations.ts`

- Todo el texto visible del sitio está centralizado en este archivo:
  - Objeto `es`: Textos en español (predeterminado).
  - Objeto `en`: Textos en inglés profesional.
- **Tipado estricto:** El objeto `en` está tipado con la forma de `es` (`Dictionary`). Si agregas una clave en un idioma y la olvidas en el otro, TypeScript te avisará con un error en tiempo de compilación.

### 4. ¿Dónde modificar los datos, experiencia, proyectos y enlaces?
👉 **Archivo:** `src/data/portfolio.ts`

- `PORTFOLIO_DATA.profile`: Nombre, ubicación, perfiles públicos (GitHub, LinkedIn, correo, enlace al CV).
- `PORTFOLIO_DATA.experience`: Puesto, empresa empleadora, fecha de inicio y tecnologías de la experiencia laboral.
- `PORTFOLIO_DATA.projects`: Lista de proyectos destacados, tecnologías, repositorios y estados.
- `PORTFOLIO_DATA.education`: Programa académico, institución y fechas estimadas.
- `PORTFOLIO_DATA.certifications`: Credenciales y certificaciones oficiales (Credly, Cisco, UTP).
- `PORTFOLIO_DATA.techCategories`: Categorías de habilidades técnicas clasificadas por contexto (`work` o `projects`).

### 5. ¿Cómo añadir una fotografía personal en el Hero?
Actualmente el Hero incluye una tarjeta tecnológica interactiva con un bloque de terminal/código para evitar fotos ficticias. Si deseas incorporar tu fotografía profesional:
1. Guarda tu foto en `public/images/duber-eraso.jpg`.
2. En `src/sections/Hero.tsx`, en el contenedor `<div className="hero__visual">`, puedes reemplazar o complementar el componente de terminal con una imagen:
   ```tsx
   <img
     src="./images/duber-eraso.jpg"
     alt="Duber Andrés Eraso Uni"
     className="hero__profile-img"
   />
   ```
3. En `src/sections/Hero.css`, agrega los estilos de tamaño y radio deseados.

### 6. ¿Cómo incorporar un CV (Hoja de Vida)?
1. Coloca tu archivo PDF en `public/documents/CV_Duber_Eraso.pdf`.
2. En `src/data/portfolio.ts`, actualiza la propiedad `resumeUrl`:
   ```typescript
   resumeUrl: './documents/CV_Duber_Eraso.pdf',
   ```
3. El botón "Descargar CV" / "Download Resume" aparecerá automáticamente tanto en la sección de Contacto como en el Hero.

### 7. ¿Cómo configurar un formulario de contacto real?
Por diseño y buenas prácticas, no se incluyen formularios decorativos que simulen envíos sin un backend real. Si deseas incorporar un formulario funcional:
1. Puedes utilizar un servicio como **Formspree**, **EmailJS** o **Resend**.
2. En `src/sections/Contact.tsx`, añade los campos de formulario apuntando al endpoint de tu servicio seguro.
3. Valida los campos antes de enviar y maneja las respuestas HTTP reales.

---

## 🌐 Opciones de Despliegue en Producción

El proyecto está configurado con rutas relativas (`base: './'` en `vite.config.ts`), lo que permite desplegarlo en cualquier proveedor sin modificaciones:

### Opción A: Vercel (Recomendado)
1. Conecta tu repositorio de GitHub en [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Haz clic en **Deploy**.

### Opción B: Netlify
1. Arrastra la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop) o conecta el repositorio.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

### Opción C: GitHub Pages
1. Instala `gh-pages` (`npm install -D gh-pages`).
2. Agrega en `package.json` el script: `"deploy": "npm run build && gh-pages -d dist"`.
3. Ejecuta `npm run deploy`.

---

## 📂 Estructura del Código Fuente

```text
Portafolio/
├── Contenido/               # Especificación original (11 archivos Markdown preservados)
├── public/                  # Recursos estáticos (favicon, documentos, imágenes)
│   └── favicon.svg
├── src/
│   ├── components/          # Componentes globales reutilizables
│   │   ├── Header.tsx       # Encabezado con navegación, idioma y tema
│   │   ├── MobileMenu.tsx   # Menú desplegable para móviles
│   │   ├── LanguageSwitcher.tsx # Selector de idioma ES / EN
│   │   ├── ThemeSwitcher.tsx    # Selector de tema Claro / Oscuro
│   │   ├── SectionHeading.tsx   # Encabezado modular para secciones
│   │   ├── Footer.tsx       # Pie de página dinámico
│   │   └── Icons.tsx        # Iconos SVG vectoriales (GitHub, LinkedIn)
│   ├── sections/            # Componentes específicos de cada sección
│   │   ├── Hero.tsx         # Sección 1: Inicio (Hero)
│   │   ├── About.tsx        # Sección 2: Sobre mí
│   │   ├── TechStack.tsx    # Sección 3: Habilidades técnicas (Tech Stack)
│   │   ├── Experience.tsx   # Sección 4: Experiencia profesional (ST&T LTDA)
│   │   ├── Projects.tsx     # Sección 5: Proyectos destacados (EventManager, Ñimpe Misak)
│   │   ├── Education.tsx    # Sección 6: Educación y certificaciones
│   │   ├── SoftSkills.tsx   # Sección 7: Habilidades blandas
│   │   ├── Languages.tsx    # Sección 8: Idiomas
│   │   ├── ProfessionalFocus.tsx # Sección 9: Enfoque profesional
│   │   └── Contact.tsx      # Sección 10: Contacto
│   ├── data/                # Datos centralizados y navegación
│   │   ├── portfolio.ts     # Información profesional verificada
│   │   └── navigation.ts    # Enlaces y anclas de navegación
│   ├── i18n/                # Sistema bilingüe
│   │   ├── translations.ts  # Textos en español e inglés tipados
│   │   ├── languageContext.ts
│   │   └── LanguageProvider.tsx
│   ├── theme/               # Sistema de temas
│   │   ├── themeContext.ts
│   │   └── ThemeProvider.tsx
│   ├── hooks/               # Custom hooks
│   │   ├── useLanguage.ts
│   │   ├── useTheme.ts
│   │   ├── useScrollSpy.ts  # Detección de sección activa al desplazarse
│   │   └── useScrollReveal.ts # Animación suave de entrada de elementos
│   ├── lib/                 # Utilidades
│   │   ├── storage.ts       # Lectura/escritura segura en localStorage
│   │   └── date.ts          # Formateador de fechas multilingüe
│   ├── styles/              # Sistema visual
│   │   ├── themes.css       # Tokens de diseño y variables CSS
│   │   └── globals.css      # Reset y estilos base
│   ├── test/                # Pruebas automatizadas (Vitest + Testing Library)
│   ├── App.tsx              # Componente principal ensamblador
│   └── main.tsx             # Punto de entrada de la aplicación
├── index.html               # Plantilla HTML con SEO y script anti-parpadeo
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🔒 Privacidad y Veracidad

Este portafolio cumple estrictamente con el principio de veracidad profesional:
- No se han inventado años de experiencia, cargos de arquitecto sénior ni resultados cuantificados no verificados.
- Por razones de confidencialidad laboral, no se publican nombres de clientes de ST&T LTDA, endpoints internos, nombres de clústeres privados ni detalles sensibles de arquitectura empresarial.
- Los enlaces a repositorios públicos (`EventManager` y el perfil de GitHub) y a insignias oficiales en **Credly** han sido verificados.
