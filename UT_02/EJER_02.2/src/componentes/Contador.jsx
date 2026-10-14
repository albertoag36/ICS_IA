import { useState } from "react"

export const Contador = ({ etiqueta = '', valorInicial = 0 }) => {
    const [valor, setValor] = useState(valorInicial)
    const manejarIncremento = () => setValor(valor + 1)
    const manejarDecremento  = () => setValor(valor - 1) 
    const manejarReinicio = () => setValor(valorInicial) 
    return ( 
        <div>
            <p>{valor}</p>
            <button onClick={manejarIncremento}>+1</button>
            <button onClick={manejarDecremento}>-1</button>
            <button onClick={manejarReinicio}>Reiniciar</button>
        </div>
    )
}
