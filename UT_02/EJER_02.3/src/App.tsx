import './App.css'
import { ListaPrestamos } from './components/ListaPrestamos'
import { TarjetaLibro } from './components/TarjetaLibro'

function App() {

  return (
    <>
      <TarjetaLibro
        titulo="Cien años de soledad"
        autor="Gabriel García Márquez"
        estado="disponible"
        alPrestar={() => console.log("Prestado: Cien años de soledad")}
      />
      <TarjetaLibro
        titulo="La sombra del viento"
        autor="Carlos Ruiz Zafón"
        estado="prestado"
      >
        <p>Devolución prevista: 30 de octubre</p>
      </TarjetaLibro>
      <TarjetaLibro
        titulo="Don Quijote de la Mancha"
        autor="Miguel de Cervantes"
        estado="reservado"
      />
      {/* <TarjetaLibro
        titulo="Don Quijote de la Mancha"
        autor="Miguel de Cervantes"
        estado="perdido"
      />

      El tipo "perdido" no se puede asignar al tipo 'disponible' | 'prestado' | 'reservado' */}
      {/* <TarjetaLibro
        autor="Miguel de Cervantes"
        estado="reservado"
      />

      La propiedad "titulo" falta en el tipo porque es obligatoria en "PropsTarjetaLibro" */}
      <ListaPrestamos />
    </>
  )
}

export default App
