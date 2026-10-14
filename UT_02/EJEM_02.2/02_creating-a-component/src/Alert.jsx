export function Alert() {
  return (
    // COMO RENDERIZA UN ÚNICO ELEMENTO HTML, POR ESO SE ENVUELVE TODO EN UN DIV. SI NO SE HACE ASÍ, EL CÓDIGO NO FUNCIONARÁ CORRECTAMENTE.
    // TAMBIÉN PUEDE PONERSE UN FRAGMENTO DE REACT (<>), PERO EN ESTE CASO SE UTILIZA UN DIV PARA AGRUPAR LOS ELEMENTOS.
    <div>
      <div>
        {/* role="img" aria-label="Advertencia" son accesibilidad para lectores de pantalla y otros dispositivos de asistencia.
         no es necesario  para la funcionalidad del código, pero es una buena práctica para mejorar la accesibilidad de la aplicación. */}
        <span role="img" aria-label="Advertencia">
          ⚠️
        </span>
        <span>¡Oh no!</span>
      </div>
      <div>Algo salió mal</div>
    </div>
  );
}
