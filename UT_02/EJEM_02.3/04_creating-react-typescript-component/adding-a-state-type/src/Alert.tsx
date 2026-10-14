import { useState, type ReactNode } from 'react';

// Definimos qué props puede recibir el componente Alert.
// Estas propiedades describen la información y el comportamiento del aviso.
type Props = {
  type?: string;       // Tipo de alerta: "warning" o "information".
  heading: string;     // Título principal del mensaje.
  children: ReactNode; // Contenido que va dentro del aviso.
  closable?: boolean;  // Si el usuario puede cerrar la alerta.
  onClose?: () => void; // Función opcional que se ejecuta al cerrar.
};

// El componente Alert renderiza un mensaje visual con un título, contenido y opcionalmente un botón para cerrarlo.
export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  // useState guarda si la alerta está visible o no.
  // Comienza en true para que se muestre al principio.
  const [visible, setVisible] = useState(true);

  // Si la alerta fue cerrada, no renderizamos nada.
  if (!visible) {
    return null;
  }

  // Función ejecutada al hacer clic en el botón de cerrar.
  // Primero ocultamos el componente y luego llamamos a onClose si existe.
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div>
      <div>
        {/* Elegimos el icono según el tipo de alerta. */}
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>

        {/* El texto principal del aviso. */}
        <span>{heading}</span>
      </div>

      {/* Solo renderizamos el botón si closable es true. */}
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}

      {/* Aquí se muestra el contenido detallado del mensaje. */}
      <div>{children}</div>
    </div>
  );
}
