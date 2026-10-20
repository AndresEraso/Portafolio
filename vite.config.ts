import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Rutas relativas: permite publicar en la raíz de un dominio o en un subdirectorio
  // (por ejemplo, GitHub Pages) sin cambiar la configuración.
  base: './',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
});
