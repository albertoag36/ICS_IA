import { useState } from "react"

interface Producto {
    id: number,
    nombre: string,
    comprado: boolean
}

export const ListaCompra = () => {
    const [lista, setLista] = useState<Producto[]>([])
    const [nombre, setNombre] = useState<string>('')
    const manejarClick = () => {
        setLista(producto => [...lista, {
            id: Date.now(),
            nombre: nombre,
            comprado: false
        }])
        setNombre('')
    }
    return (
        <div>
            <input onChange={(e) => setNombre(e.target.value)} type="text"></input>
            <button onClick={manejarClick}>Añadir</button>
            <ul>
                {lista.map(producto => <li key={producto.id} style={{ textDecoration: producto.comprado ? 'line-through' : 'none' }}>{producto.nombre}
                    <input type="checkbox"/>
                    <button>Quitar</button>
                    </li>)}
            </ul>
        </div>
    )
}
