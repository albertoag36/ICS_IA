import { useState } from "react"

export const InterruptorLuz = () => {
    const [encendida, setEncendida] = useState<boolean>(false)

    const colorBoton = {
        backgroundColor: encendida ? 'yellow': 'grey',
    }

    const manejarEncendido = () => (setEncendida(!encendida))
        
  return (
    <div>
        <div style={colorBoton}>
            <button onClick={manejarEncendido}>{encendida ? 'Apagar' : 'Encender'}</button>
        </div>
    </div>
  )
}
