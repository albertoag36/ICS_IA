Bloque A. Tipos básicos (TypeScript Playground) ---------------------------

A1. ¿Qué tipo se infiere? Sin ejecutar nada, escribe como comentario el tipo que TypeScript infiere para cada variable. Después compruébalo pasando el cursor por encima.

let ciudad = 'Oviedo'; --> :string
let habitantes = 220000; --> :number
let esCapital = true; --> :boolean
const notas = [7.5, 8, 9.25]; --> :number[]
const fechaExamen = new Date(2026, 11, 15); :Date
let pendiente;

Pregunta: ¿por qué pendiente no tiene un tipo útil? Corrígelo con una anotación para que solo admita textos.


Porque no está inicializada. Para que admita textos sería let pendiente:string = ''

---------------------------------------------------------------------------
A2. Encuentra los errores. El siguiente código tiene cuatro errores de tipo. Localízalos, explica cada uno en un comentario y corrígelos sin usar any.

function calcularMedia(notas: number[]): number {
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

const media: string = calcularMedia([6, 7, 8]);
calcularMedia([6, '7', 8]);

const hoy = new Date();
hoy.sumarDias(3);

let aprobado = true;
aprobado = 'sí';


---------------------------------------------------------------------------
A3. Funciones con tipos. Escribe una función calcularPrecioFinal que reciba un precio, un porcentaje de IVA y un descuento opcional (también en porcentaje) y devuelva el precio final. Anota los parámetros y el tipo de retorno.

const calcularPrecioFinal = (precio:number, iva:number, descuento:number = 0):number => {
    const precioConDescuento = precio * (1 - descuento / 100);
    const precioFinal = precioConDescuento * (1 + iva / 100);
    return Math.round(precioFinal * 100) / 100;
}

---------------------------------------------------------------------------
A4. De any a unknown. El siguiente código compila, pero falla en ejecución.

const respuesta: any = JSON.parse('{"titulo": "Dune", "paginas": 412}');
console.log(respuesta.autor.toUpperCase());

1. Explica por qué TypeScript no avisa del error.


2. Cambia `any` por `unknown` y observa qué ocurre.


3. Escribe una guarda de tipo `esLibro(valor: unknown): valor is Libro`, siendo `type Libro = { titulo: string; paginas: number }`. Úsala para mostrar el título solo cuando los datos sean válidos.


---------------------------------------------------------------------------
A5. Pregunta teórica. Explica con tus palabras la diferencia entre unknown y never, y pon un ejemplo de función que devuelva never.


Bloque B. Crear tipos (TypeScript Playground) -----------------------------

B1. Alias de tipo y propiedades opcionales. Crea un alias Libro con estas propiedades:

Propiedad	        Tipo	    ¿Obligatoria?
isbn	            texto	    Sí
titulo	            texto	    Sí
autor	            texto	    Sí
anioPublicacion	    número	    Sí
paginas	            úmero	    No

Declara dos libros, uno con paginas y otro sin ella. Después intenta asignar libro.editorial = 'Anaya' y explica el error.

type Libro = {
    isbn: string,
    titulo: string,
    autor: string,
    anioPublicacion: number,
    paginas?: number
}

const libroSinPaginas: Libro = {isbn: 'a', titulo: 'a', autor: 'a', anioPublicacion: 0}
const libroConPaginas: Libro = {isbn: 'a', titulo: 'a', autor: 'a', anioPublicacion: 0, paginas: 0}

libroConPaginas.editorial = "Anaya" --> Da error porque editorial no existe en el type Libro

---------------------------------------------------------------------------
B2. Tipos de unión. Crea un tipo EstadoPrestamo que solo admita 'disponible', 'prestado' o 'reservado'. Añádelo como propiedad estado al tipo Libro. Comprueba que estado: 'perdido' da error.

type EstadoPrestamo = "disponible" | "prestado" | "reservado";

type Libro = {
    isbn: string,
    titulo: string,
    autor: string,
    anioPublicacion: number,
    paginas?: number
    estado: EstadoPrestamo
}
const libroSinPaginas: Libro = {isbn: 'a', titulo: 'a', autor: 'a', anioPublicacion: 0, estado: 'disponible'}
const libroConPaginas: Libro = {isbn: 'a', titulo: 'a', autor: 'a', anioPublicacion: 0, paginas: 0, estado: 'prestado'}

libroConPaginas.estado = "perdido"

---------------------------------------------------------------------------
B3. Tipos de función. Crea un alias `Prestar` para una función que recibe el nombre de un alumno y no devuelve nada. Crea después un tipo `LibroPrestable` que sea la intersección de `Libro` con `{ prestar: Prestar }`. Declara un objeto de ese tipo cuya función `prestar` muestre en consola `"<titulo> prestado a <alumno>"`. No anotes el tipo del parámetro de la función: deja que TypeScript lo infiera.

type Prestar = (nombreAlumno: string) => void

type Libro = {
    isbn: string,
    titulo: string,
    autor: string,
    anioPublicacion: number,
    paginas?: number
}

type LibroPrestar = Libro & {prestar: Prestar}

const libroPrestar: LibroPrestar = {isbn: 'a', titulo: 'a', autor: 'a', anioPublicacion: 0, prestar(nombreAlumno) { (console.log(`${this.titulo} prestado a ${nombreAlumno}`))}}

libroPrestar.prestar('A')

---------------------------------------------------------------------------
B4. Interface frente a type. Reescribe `Libro` como `interface`. Crea `interface LibroDigital extends Libro` con la propiedad `tamanoMB: number`.

interface Libro  {
    isbn: string,
    titulo: string,
    autor: string,
    anioPublicacion: number,
    paginas?: number
}

interface LibroDigital extends Libro {
    tamanoMb: number
}

const libroConPaginas: LibroDigital = {isbn: 'a', titulo: 'a', autor: 'a', anioPublicacion: 0, paginas: 0, tamanoMb: 1}

---------------------------------------------------------------------------
Responde: ¿podrías definir `EstadoPrestamo` con una `interface`? ¿Por qué?

No se puede porque interface sirve para formas de objeto, mientras que type sirve para dar nombre a cualquier tipo