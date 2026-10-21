import { useState } from "react"

export const ContadorLimitado = () => {
    const [valor, setValor] = useState<number>(0)

    const manejarSumar = () => {
        if (valor < 10) setValor(valor => valor + 1)
    }

    const manejarRestar = () => {
        if (valor > 0) setValor(valor => valor - 1)
    }

    const manejarReiniciar = () => {
        setValor(0)
    }
    return (
        <div>
            <p>{valor}</p>
            {(valor === 10) && <p>Máximo alcanzado</p>}
            <button onClick={manejarSumar} disabled={(valor === 10)}>Sumar</button>
            <button onClick={manejarRestar} disabled={(valor === 0)}>Restar</button>
            <button onClick={manejarReiniciar}>Reiniciar</button>
        </div>
    )
}