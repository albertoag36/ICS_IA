import { useState } from 'react';

// El componente Alert recibe varias props:
// - type: tipo de alerta ('information' o 'warning')
// - heading: título de la alerta
// - children: contenido principal
// - closable: si la alerta puede cerrarse
// - onClose: función que se ejecuta al cerrar
export function Alert({ type = 'information', heading, children, closable, onClose }) {
  // visible controla si la alerta se muestra o no
  const [visible, setVisible] = useState(true);

  // Si no es visible, el componente no renderiza nada
  if (!visible) {
    return null;
  }

  // Cuando el usuario pulsa el botón de cerrar,
  // ocultamos la alerta y, si existe, llamamos a la función onClose
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div>
      <div>
        {/* Mostramos un icono según el tipo de alerta */}
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>

      {/* Solo mostramos el botón si la alerta es cerrable */}
      {closable && (
        <button onClick={handleCloseClick}>
          <span>
            ❌
          </span>
        </button>
      )}

      {/* El contenido de la alerta puede ser texto, HTML o otros componentes */}
      <div>{children}</div>
    </div>
  );
}
