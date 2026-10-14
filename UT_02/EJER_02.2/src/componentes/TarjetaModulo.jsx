export const TarjetaModulo = ({titulo = '', horas = 0, curso = '1º', children}) => {
  return (
    <div>
        <p>{titulo}</p>
        <p>{curso === '1º'? '📘' : '📗'}</p>
        <p>{horas > 0 ? horas + ' horas semanales' : ''}</p>
    </div>
  )
}