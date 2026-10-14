import { useState, type ReactNode } from 'react';

// Aquí definimos qué datos puede recibir nuestro componente Alert.
// Es como una "plantilla" que dice: "este componente necesita un título,
// puede recibir un tipo, contenido y también un botón para cerrar".
type Props = {
  type?: string;        // Tipo de mensaje: warning, information, etc.
  heading: string;      // El texto principal del aviso
  children: ReactNode;  // El contenido que va dentro del aviso (requier el import de ReactNode)
  closable?: boolean;   // Si el usuario puede cerrar el aviso
  onClose?: () => void; // Función que se ejecuta cuando se cierra
};

// Este componente muestra un mensaje de alerta.
// Recibe un título, contenido y opcionalmente puede ser cerrable.
export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  // useState guarda si el aviso está visible o no.
  // Empezamos en true, porque al principio se muestra.
  const [visible, setVisible] = useState(true);

  // Si visible es false, significa que el usuario ha cerrado el aviso,
  // así que no devolvemos nada para que desaparezca de la pantalla.
  if (!visible) {
    return null;
  }

  // Esta función se llama cuando el usuario pulsa el botón de cerrar.
  // Primero ocultamos el aviso y luego ejecutamos onClose si se ha pasado.
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div>
      <div>
        {/* Aquí escogemos el icono según el tipo de alerta.
            Si es warning, mostramos una advertencia; si no, mostramos información. */}
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>

        {/* Este es el título que aparece junto al icono. */}
        <span>{heading}</span>
      </div>

      {/* Solo mostramos el botón de cerrar si la prop closable es true. */}
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}

      {/* Aquí va el contenido principal del mensaje. */}
      <div>{children}</div>
    </div>
  );
}
