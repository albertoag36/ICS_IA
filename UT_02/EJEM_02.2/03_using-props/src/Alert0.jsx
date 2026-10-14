export function Alert(props) {
  // Las propiedades del componente se reciben agrupadas en el objeto props.
  return (
    <div>
      <div>
        {/* Muestra el icono de advertencia si type es 'warning'; en otro caso, muestra información. */}
        <span>
          {props.type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        {/* Muestra el título recibido mediante props.heading. */}
        <span>{props.heading}</span>
      </div>
      {/* Muestra el contenido anidado dentro de <Alert0> mediante props.children. */}
      <div>{props.children}</div>
    </div>
  );
}
