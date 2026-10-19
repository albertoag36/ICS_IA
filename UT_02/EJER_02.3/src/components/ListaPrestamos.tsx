import { useState } from "react";

type Prestamo = {
  id: number;
  titulo: string;
  alumno: string;
  devuelto: boolean;
};

export const ListaPrestamos = () => {
  const prestamosIniciales: Prestamo[] = [{ id: 0, titulo: 'a', alumno: 'a', devuelto: false }, { id: 1, titulo: 'b', alumno: 'b', devuelto: true }]
  const [prestamos, setPrestamos] = useState<Prestamo[]>(prestamosIniciales) // Infiere Prestamo[]. Si lo inicializo con [] me da error porque react no sabe que prestamos en un Array de Prestamo
  const [prestamoSeleccionado, setPrestamoSeleccionado] = useState<Prestamo | null>(null)

  const marcarDevuelto = (id: number) => {
    setPrestamos(prestamos.map(prestamo => (
      prestamo.id === id ? { ...prestamo, devuelto: true } : prestamo
    )))

    if (prestamoSeleccionado?.id === id) {
      setPrestamoSeleccionado({ ...prestamoSeleccionado, devuelto: true })
    }
  }

  return (
    <div>
      {prestamos.map(prestamo => (
        <p key={prestamo.id}>
          <p>{prestamo.titulo}</p>
          <p>{prestamo.alumno}</p>
          <p>{prestamo.devuelto ? "Devuelto" : "Prestado"}</p>
          <button onClick={() => marcarDevuelto(prestamo.id)}>Marcar</button>
        </p>
      ))}
    </div>
  )
}
