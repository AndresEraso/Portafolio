import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './i18n/LanguageProvider';
import { ThemeProvider } from './theme/ThemeProvider';

// Tipografías servidas localmente
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/jetbrains-mono';

// Tokens de diseño y estilos globales
import './styles/themes.css';
import './styles/globals.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
