import { useState } from "react"

export const AvisoCookies = ({ children, onAceptar, onRechazar }) => {
    const [visible, setVisible] = useState(true)
    const manejarAceptar = () => {
        setVisible(false)
        onAceptar?.()
    }

    const manejarRechazar = () => {
        setVisible(false)
        onRechazar?.()
    }

    if (!visible) return null

    return (
        <div>
            <p>{children}</p>
            <button onClick={manejarAceptar}>Aceptar</button>
            <button onClick={manejarRechazar}>Rechazar</button>
        </div>
    )
}
