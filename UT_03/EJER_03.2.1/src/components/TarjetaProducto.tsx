export function TarjetaProducto(nombre, precio):[string, number] {
  return (
    <div>
      <p>{nombre}</p>
      <p>{precio}</p>
      <button>Añadir</button>
    </div>
  )
}
