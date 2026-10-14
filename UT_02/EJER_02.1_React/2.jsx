// --- 2.1 ---
export function saludo() {
    return <p>¡Hola, clase!</p>;
}

// La clausula return y el <p> tiene que ir con un espacio de por medio
export function saludo() {
    return <p>¡Hola, clase!</p>;
}

// --- 2.2 ---
export function Tarjeta() {
    return (
    <h2>Desarrollo Web en Entorno Cliente</h2>
    <p>Segundo curso de DAW</p>
    );
}

// El contenido html dentro del return tiene que ir dentro de un contenedor <div></div>
export function Tarjeta() {
    return (
        <div>
            <h2>Desarrollo Web en Entorno Cliente</h2>
            <p>Segundo curso de DAW</p>
        </div>
    );
}

// --- 2.3 ---
// Archivo: src/Pie.jsx
function Pie() {
    return <footer>© Departamento de Informática</footer>;
}

// Archivo: src/App.jsx
import { Pie } from './Pie';

// No se ha exportado la función Pie()
export function Pie() {
    return <footer>© Departamento de Informática</footer>;
}

// --- 2.4 ---
// Archivo: src/Cabecera.jsx
export function Cabecera() {
    return <header>Mi aplicación</header>;
}

// Archivo: src/App.jsx
import Cabecera from './Cabecera';

// Falta añadir el tipo de archivo que es Cabecera
import Cabecera from './Cabecera.jsx';

// --- 2.5 ---
export function Fecha() {
    const anioActual = new Date().getFullYear();
    return <p>Estamos en el año anioActual</p>;
}

// No estás llamando a anioActual dentro del elemento <p></p> del HTML 
export function Fecha() {
    const anioActual = new Date().getFullYear();
    return <p>Estamos en el año {anioActual}</p>;
}