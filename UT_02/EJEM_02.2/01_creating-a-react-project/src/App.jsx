import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Importando los estilos específicos del componente App
import './App.css'

function App() {
 
  return (
    // <></> son fragmentos vacíos que permiten agrupar múltiples elementos JSX sin agregar nodos adicionales al DOM.
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* En React el atributo class se reemplaza por className, ya que class es una palabra reservada en JavaScript. 
      // Por lo tanto, para asignar clases CSS a los elementos JSX, se utiliza className en lugar de class. */}
      <div className="card">      
        <p>
          HMR (Hot Module Replacement) actualiza los cambios en la aplicación al guardar,
          sin recargar toda la página.
        </p>
      </div>
      <p className="read-the-docs">
        Haz clic en los logos de Vite y React para obtener más información
      </p>
    </>
  )
}

export default App
