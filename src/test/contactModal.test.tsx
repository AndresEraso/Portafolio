import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../App';
import { ContactModal } from '../components/ContactModal';
import { LanguageProvider } from '../i18n/LanguageProvider';
import { ThemeProvider } from '../theme/ThemeProvider';

describe('Modal de Contacto Profesional y Flujo de Interacción', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('no se renderiza en el DOM cuando isOpen es false', () => {
    render(
      <ThemeProvider>
        <LanguageProvider>
          <ContactModal isOpen={false} onClose={vi.fn()} />
        </LanguageProvider>
      </ThemeProvider>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('se abre correctamente desde el botón principal del Hero en App', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    );

    // Botón principal del Hero
    const heroTrigger = screen.getByRole('button', {
      name: /conversemos sobre oportunidades|let’s discuss opportunities/i,
    });
    expect(heroTrigger).toBeInTheDocument();

    await user.click(heroTrigger);

    // El diálogo modal debe estar visible
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText(/contacto profesional con duber andrés eraso/i)).toBeInTheDocument();
  });

  it('se cierra al hacer clic en el botón de cerrar y al presionar la tecla Escape', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    const { rerender } = render(
      <ThemeProvider>
        <LanguageProvider>
          <ContactModal isOpen={true} onClose={handleClose} />
        </LanguageProvider>
      </ThemeProvider>
    );

    // Clic en botón cerrar
    const closeBtn = screen.getByRole('button', { name: /cerrar ventana de contacto|close contact modal/i });
    await user.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);

    // Pulsar tecla Escape
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(2);

    rerender(
      <ThemeProvider>
        <LanguageProvider>
          <ContactModal isOpen={false} onClose={handleClose} />
        </LanguageProvider>
      </ThemeProvider>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('valida campos obligatorios y formato de correo electrónico', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <LanguageProvider>
          <ContactModal isOpen={true} onClose={vi.fn()} />
        </LanguageProvider>
      </ThemeProvider>
    );

    const submitBtn = screen.getByRole('button', { name: /enviar mensaje|send message/i });

    // Enviar formulario vacío
    await user.click(submitBtn);

    // Deben mostrarse los mensajes de validación
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0);

    // Ingresar correo inválido
    const emailInput = screen.getByPlaceholderText(/nombre@empresa\.com|name@company\.com/i);
    await user.type(emailInput, 'correo-invalido');
    await user.click(submitBtn);

    expect(screen.getByText(/ingresa un correo electrónico válido|please enter a valid email/i)).toBeInTheDocument();
  });

  it('permite alternar a la pestaña de canales directos y muestra los datos verificados', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <LanguageProvider>
          <ContactModal isOpen={true} onClose={vi.fn()} />
        </LanguageProvider>
      </ThemeProvider>
    );

    const channelsTab = screen.getByRole('tab', { name: /canales directos|direct channels/i });
    await user.click(channelsTab);

    // Debe mostrar la cuenta verificada de GitHub
    expect(screen.getByText(/github\.com\/andreseraso/i)).toBeInTheDocument();

    // Debe mostrar el correo institucional verificado
    expect(screen.getByText(/dubereraso@unicauca\.edu\.co/i)).toBeInTheDocument();

    // Debe mostrar la ubicación y disponibilidad
    expect(screen.getByText(/popayán, colombia/i)).toBeInTheDocument();
  });
});
