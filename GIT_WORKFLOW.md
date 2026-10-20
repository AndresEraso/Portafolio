# Flujo de Trabajo Git Estandarizado (Git Workflow)

Esta guía documenta la estrategia de ramificación, integración y despliegue del repositorio del **Portafolio Profesional**. Su objetivo es garantizar estabilidad en producción, trazabilidad en el historial y seguridad en el manejo del código fuente.

---

## 1. Arquitectura de Ramas

El repositorio utiliza una variación estandarizada y simplificada de Git Flow adaptada a proyectos de ingeniería web:

```
[main]          ==================●===========================●=====> (Producción / Vercel)
                                 /                             /
[develop]       =========●======●===============●=============●=======> (Integración Continua)
                        /      /               /             /
[feature/...]          ●------●               ●-------------●         (Ramas de Tarea Aisladas)
```

| Rama | Propósito | Nivel de Estabilidad | Despliegue |
| :--- | :--- | :--- | :--- |
| `main` | Código en producción. Solo recibe cambios validados y promovidos desde `develop`. | **Máxima (Producción)** | Despliegue automático en Vercel |
| `develop` | Rama de integración. Aquí convergen las ramas de tarea validadas antes de pasar a producción. | **Alta (Staging / Pre-producción)** | Previsualizaciones y pruebas de integración |
| `feature/<ACRONIMO>` | Desarrollo de una tarea específica, mejora o corrección aislada. | **En desarrollo** | Local / Ramas de vista previa |

---

## 2. Convención para Nombrado de Ramas

Las ramas de tarea deben tener un nombre corto, claro y descriptivo utilizando el prefijo `feature/`, `fix/` o `refactor/` seguido de un acrónimo o slug significativo:

* **Características nuevas o mejoras:** `feature/<ACRONIMO>` (ej. `feature/ORC` para *Optimización para Reclutadores y Contacto*, `feature/I18N-EXP` para *Internacionalización de Experiencias*).
* **Corrección de errores (Bugs):** `fix/<ACRONIMO>` (ej. `fix/MODAL-TRAP` para corrección de trampa de foco).
* **Refactorizaciones técnicas:** `refactor/<ACRONIMO>` (ej. `refactor/THEME-TOKENS`).

---

## 3. Criterio de Granularidad: Tareas Pequeñas vs. Tareas Grandes

No se debe utilizar un número rígido de archivos como único criterio. Se debe priorizar la **separación lógica**, la **facilidad de revisión de código (code review)** y la **estabilidad del sistema**.

### Cambios Pequeños
* **Definición:** Ajustes tipográficos, correcciones de traducción de una sección, variables de estilos puntuales o pequeñas optimizaciones en componentes existentes que formen parte de la misma tarea.
* **Flujo:** Pueden mantenerse dentro de la rama de trabajo actual de la tarea. Se confirman con commits atómicos y claros. Se integran a `develop` una vez que el bloque de trabajo esté validado.

### Cambios Grandes o Independientes
* **Definición:** Nuevas funcionalidades transversales (ej. un modal de contacto con integración de API), rediseño de secciones completas, reestructuración arquitectónica o tareas que impacten múltiples módulos sin relación directa.
* **Flujo:** **Deben aislarse en una nueva rama de tarea**. Esto permite probar la funcionalidad de forma independiente sin comprometer el avance de otras tareas y facilita revertir cambios si es necesario sin afectar a `develop`.

---

## 4. Ciclo de Vida de una Tarea (Paso a Paso)

Antes de ejecutar cualquier comando de cambio de rama o confirmación, se deben verificar las condiciones del entorno local.

### Paso 1: Inspección Previa Obligatoria

Nunca asumas en qué rama estás ni si el árbol de trabajo está limpio:

```bash
# 1. Verificar estado del árbol de trabajo y archivos modificados
git status

# 2. Comprobar la rama activa
git branch --show-current

# 3. Listar todas las ramas locales y remotas
git branch -a

# 4. Asegurarse de que el remoto esté configurado correctamente
git remote -v
```

Si hay cambios pendientes no confirmados que no pertenecen a la nueva tarea:
```bash
# Guardar cambios temporales en el stash sin perderlos
git stash save "WIP: Cambios en progreso antes de iniciar nueva tarea"
```

### Paso 2: Crear la Rama de Tarea desde `develop`

Toda nueva tarea debe nacer de la versión más actualizada de `develop`:

```bash
# 1. Cambiar a develop
git checkout develop

# 2. Descargar los últimos cambios del remoto (si aplica)
git pull origin develop

# 3. Crear y cambiar a la rama de tarea específica
git checkout -b feature/MI-TAREA
```

### Paso 3: Desarrollo, Validación Local y Prevención de Secretos

Durante el desarrollo:
1. Realiza pruebas locales y comprueba el compilador de TypeScript y linter:
   ```bash
   npm run check
   npm run build
   ```
2. **Revisión estricta de seguridad (Diff Check):**
   ```bash
   git status
   git diff
   ```
   **CRÍTICO:** Comprueba que **NO** se incluyan:
   * Archivos `.env` ni `.env.local` con credenciales reales.
   * Carpetas privadas o con especificaciones internas no destinadas al repositorio público (ej. `Contenido/`).
   * Directorios de dependencias o compilados (`node_modules/`, `dist/`).

### Paso 4: Confirmación Atómica (Commits Claros)

Agrupa archivos lógicamente relacionados y usa mensajes claros siguiendo la convención Conventional Commits:

```bash
git add src/components/ContactModal.tsx src/components/ContactModal.css
git commit -m "feat(contact): implement accessible contact modal with focus trap and email support"
```

### Paso 5: Publicar la Rama de Tarea en el Remoto

```bash
git push -u origin feature/MI-TAREA
```

### Paso 6: Integración en `develop`

Una vez completada y probada la tarea:

```bash
# 1. Cambiar a develop y actualizar
git checkout develop
git pull origin develop

# 2. Integrar la rama de tarea
git merge feature/MI-TAREA

# 3. Ejecutar validaciones en develop
npm run check
npm run build

# 4. Publicar develop actualizado
git push origin develop
```

### Paso 7: Promoción a `main` (Producción)

Solo después de verificar que `develop` funciona de manera estable y sin regresiones:

```bash
# 1. Cambiar a main
git checkout main
git pull origin main

# 2. Integrar los cambios validados de develop
git merge develop

# 3. Publicar en producción (activa despliegue en Vercel)
git push origin main
```

---

## 5. Manejo de Conflictos y Recuperación Segura

### En caso de conflicto durante un `merge`:
1. Identifica los archivos en conflicto con `git status`.
2. Abre los archivos marcados con `<<<<<<<`, `=======` y `>>>>>>>`, analiza las diferencias y resuelve conservando la lógica correcta.
3. Vuelve a ejecutar la compilación (`npm run build`) para verificar que no haya errores de sintaxis.
4. Agrega los archivos resueltos y finaliza el merge:
   ```bash
   git add <archivo-resuelto>
   git commit -m "merge: resolve conflicts between develop and feature/MI-TAREA"
   ```

### Si deseas cancelar un merge en progreso:
```bash
git merge --abort
```

### Comandos Prohibidos en el Repositorio
* **NUNCA utilices `git push --force`** ni `git push -f` en `main` o `develop`. Esto sobrescribe el historial compartido y puede borrar trabajo publicado.
* **NUNCA utilices `git reset --hard` indiscriminadamente** si tienes trabajo sin confirmar, ya que destruirá permanentemente tus cambios locales.
* Utiliza alternativas seguras como `git stash`, ramas de respaldo (`git branch backup-rama`) o `git revert` para deshacer commits específicos de forma no destructiva.

---

## 6. Lista de Verificación (Checklist) Pre-Merge

Antes de fusionar a `develop` o `main`, verifica:

- [ ] `git status` no muestra archivos no deseados o temporales.
- [ ] No hay archivos `.env` ni credenciales en el `git diff`.
- [ ] `npm run check` pasa sin errores de TypeScript ni linter.
- [ ] `npm run build` genera la carpeta `dist/` correctamente sin advertencias críticas.
- [ ] La aplicación funciona adecuadamente en los 4 modos: Español Claro/Oscuro e Inglés Claro/Oscuro.
- [ ] El modal de contacto atrapa el foco del teclado y lo devuelve al botón que lo abrió al pulsar Escape o cerrar.
- [ ] El formulario valida campos requeridos y ofrece fallback seguro a `mailto:`.
