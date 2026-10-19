type Prestamo = {
  id: number;
  titulo: string;
  alumno: string;
  devuelto: boolean;
};

export const ListaPrestamos = ({id, titulo, alumno, devuelto}:Prestamo) => {

    
  return (
    <div>
        <p>{id}</p>
        <p>{titulo}</p>
        <p>{alumno}</p>
        <p>{devuelto}</p>
    </div>
  )
}
