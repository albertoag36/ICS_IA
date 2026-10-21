interface Producto {
    id: number;
    nombre: string;
    comprado: boolean
}

import { useState } from "react"

export const ListaCompra = () => {
    const [listaCompra, setListaCompra] = useState<Producto[]>([])
    const [valor, setValor] = useState<string>()

    const manejarInput = (e) => {
        setValor(e.target.value)
    }

    // REVISAR
    const manejarAniadir = () => {
        if (listaCompra.length != 0) {
            setListaCompra(lista => [...lista, {
                id: (lista.at(-1).id + 1),
                nombre: valor,
                comprado: false
            }])
        } else {
            setListaCompra([...listaCompra, {
                id: 1,
                nombre: valor,
                comprado: false
            }])
        }
        console.log(listaCompra.length)
    }

    const manejarEliminar = (e) => {

    }

    return (
        <div>
            <input type="text" onChange={manejarInput}></input>
            <button onClick={manejarAniadir}>Añadir</button>
            <br />
            <div>
                {listaCompra.map(elemento => (
                    <label key={elemento.id}>
                        <input type="radio" name="a" value={elemento.id} checked={elemento.comprado}></input>{elemento.nombre}
                        <button onClick={manejarEliminar}>Eliminar</button>
                        <br></br>
                    </label>
                ))}
            </div>
        </div>
    )
}
