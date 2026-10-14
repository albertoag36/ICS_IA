export function Alert({ type = 'information', heading, children }) {
  // type: define el estilo o la importancia de la alerta.
  // Si no se pasa, usa 'information' por defecto.
  // heading: es el título que se mostrará dentro de la alerta.
  // children: es el contenido principal de la alerta, como texto o JSX.

  // La alerta muestra un icono según el valor de type.
  // En React, los props se reciben como parámetros del componente.
  return (
    <div>
      <div>
        {/* El texto alternativo describe el icono para lectores de pantalla. */}
        <span>
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        {/* Título de la alerta. */}
        <span>{heading}</span>
      </div>
      {/* Contenido principal de la alerta recibido como children. */}
      <div>{children}</div>
    </div>
  );
}

