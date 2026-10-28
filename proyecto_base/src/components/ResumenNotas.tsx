// APARTADO 3 · Componente ResumenNotas
// Ahora muestra datos fijos. Hay que convertirlo en un componente configurable mediante props.

type Props = {
  titulo?: string,
  media: number,
  aprobados: number,
  total: number
}

export function ResumenNotas({ titulo = 'Resumen', media, aprobados, total }: Props) {
  return (
    <section className="resumen">
      <h2>{titulo}</h2>
      <p>
        Nota media: <strong>{media}</strong>
      </p>
      <p>Módulos aprobados: {aprobados} de {total}</p>
      {aprobados === total ? <p>¡Enhorabuena, todo aprobado!</p> : <p>Tienes módulos pendientes</p>}
    </section>
  );
}
