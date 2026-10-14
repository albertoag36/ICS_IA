import { useState } from "react"

export const AvisoCookies = ({ children, onAceptar = false, onRechazar = false }) => {
    const [visible, setVisible] = useState()
    const manejarAceptar = () => {
        if (onAceptar) {
            console.log('Cookies aceptadas')
        }
    }
    const manejarRechazar = () => {
        if (onRechazar) {
            console.log('Cookies rechazadas')
        }
    }
    return (
        <div>
            <button onClick={manejarAceptar}>Aceptar</button>
            <button onClick={manejarRechazar}>Rechazar</button>
        </div>
    )
}
