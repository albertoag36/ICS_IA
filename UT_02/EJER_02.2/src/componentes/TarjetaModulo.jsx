export const TarjetaModulo = ({ titulo, horas = 0, curso = '1º', children }) => {
  const esPrimero = curso === '1º'
  return (
    <div>
      <h3>{esPrimero ? '📘' : '📗'}{titulo}
      </h3>
      {horas > 0 && <p>{horas} horas semanales</p>}
      {children && <p>{children}</p>}
    </div>
  )
}