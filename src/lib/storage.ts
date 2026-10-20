/**
 * Claves de almacenamiento local y utilidades seguras de lectura/escritura.
 *
 * IMPORTANTE: `index.html` contiene un pequeño script que lee estas mismas
 * claves antes de pintar la página (para evitar el parpadeo de tema).
 * Si cambias los nombres aquí, actualízalos también allí. Una prueba
 * automatizada (src/test/index-html.test.ts) verifica que coincidan.
 */
export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  language: 'portfolio-lang',
} as const;

export function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    // Modo privado, cookies bloqueadas o entorno sin localStorage.
    return null;
  }
}

export function writeStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Si no se puede persistir, la preferencia sigue funcionando durante la visita.
  }
}
