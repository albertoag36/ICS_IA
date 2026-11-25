import { useReducer } from "react";

interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

interface LineaCarrito {
    producto: Producto;
    cantidad: number;
}

type Accion =
    | { tipo: "anadir"; producto: Producto }
    | { tipo: "quitar"; idProducto: number }
    | { tipo: "cambiarCantidad"; idProducto: number; cantidad: number }
    | { tipo: "vaciar" };

const catalogo: Producto[] = [
    { id: 1, nombre: "Teclado mecánico", precio: 59.9 },
    { id: 2, nombre: "Ratón inalámbrico", precio: 24.5 },
    { id: 3, nombre: "Alfombrilla XL", precio: 12 },
    { id: 4, nombre: "Monitor 27 pulgadas", precio: 219, }
];

const lineaCarrito: LineaCarrito[] = []

const reductor = (lineaCarrito: LineaCarrito[], accion: Accion) => {
    switch (accion.tipo) {
        case 'anadir':
            return lineaCarrito.map(linea => {
                if (linea.producto.id === accion.producto.id) {
                    return [...linea, {cantidad: linea.cantidad + 1}]
                }
                return [...linea] 
            })
            
        case 'quitar':
            break
        case 'cambiarCantidad':
            break
        case 'vaciar':
            break
        default:
            return lineaCarrito
    }
}

export function Carrito() {
    const [estado, despachado] = useReducer(reductor, catalogo)
    return (
        <div>Carrito</div>
    )
}
