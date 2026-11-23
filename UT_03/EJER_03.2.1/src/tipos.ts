export interface Producto {
  id: string;
  nombre: string;
  precio: number; // euros
  stock: number;
}

// El carrito solo guarda lo imprescindible: qué producto y cuántas unidades.
export interface ItemCarrito {
  idProducto: string;
  cantidad: number;
}