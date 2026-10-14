import { Alert } from './Alert1';

function App() {
  return (
    <>
    {/* Título principal de la página */}
    <h1>Hola a todos</h1>
    {/*
      Usamos el componente Alert y le enviamos props:
      - type define el tipo de alerta.
      - heading define su título.
      El texto dentro del componente (en este caso: Everything is really good!) se recibe como children.
    */}
    {/* < Alert /> */}
    <Alert type="warning" heading="Advertencia">
      Everything is really good!
    </Alert>
  </>);
}

export default App;
