import type { ReactNode } from "react"

type PropsTarjetaLibro = {
    titulo: string
    autor: string
    estado?: 'disponible' | 'prestado' | 'reservado',
    children?: ReactNode,
    alPrestar?: () => void
}

export const TarjetaLibro = ({titulo, autor, estado = 'disponible', children, alPrestar}:PropsTarjetaLibro) => {
  return (
    <div>
        <p>{titulo}</p>
        <p>{autor}</p>
        <p>{estado}</p>
        <p>{children}</p>
        {estado === 'disponible' && alPrestar !== null ? <button onClick={alPrestar}>Prestar</button> : null}
    </div>
  )
}
