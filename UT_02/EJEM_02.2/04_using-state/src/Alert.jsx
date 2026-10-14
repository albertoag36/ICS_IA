import { useState } from 'react';

export function Alert({ type = 'information', heading, children, closable }) {
  // `visible` indica si la alerta debe mostrarse; `setVisible` permite cambiarlo.


  const [visible, setVisible] = useState(true);

  // Cuando la alerta se cierra, no renderizamos ningún elemento.
  if (!visible) {
    return null;
  }

  return (
    <div>
      <div>
        {/* El icono cambia según el tipo de alerta. */}
        <span >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>

      {/* Solo mostramos el botón si la alerta se puede cerrar. */} 
      {/* {closable && (
        <button>
          <span>
            ❌
          </span>
        </button>
      )} */}

      
        {/* <button >
          <span>
            ❌
          </span>
        </button> */}
      

      {/* `children` contiene el contenido recibido entre las etiquetas Alert. */}
      <div>{children}</div>
    </div>
  );
}
