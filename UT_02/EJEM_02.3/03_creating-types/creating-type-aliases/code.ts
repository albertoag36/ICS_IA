// Definimos un tipo de función llamado Purchase:
// recibe un número (cantidad) y no devuelve ningún valor (void)
type Purchase = (quantity: number) => void;

// Definimos un tipo de objeto llamado Product:
// - name: siempre obligatorio
// - unitPrice: opcional
// - purchase: una función que cumple con el tipo Purchase
type Product = { name: string; unitPrice?: number; purchase: Purchase };

// Creamos un objeto de tipo Product: una mesa
let table: Product = {
  name: "Table",
  purchase: (quantity) => console.log(`Purchased ${quantity} tables`),
};

// Llamamos a la función purchase del objeto table
table.purchase(4);

// Creamos otro objeto de tipo Product: una silla
let chair: Product = {
  name: "Chair",
  unitPrice: 40,
  purchase: (quantity) => console.log(`Purchased ${quantity} chairs`),
};

// Definimos un nuevo tipo que combina Product con un campo adicional:
// DiscountedProduct hereda todas las propiedades de Product
// y agrega "discount" como obligatorio
type DiscountedProduct = Product & { discount: number };

// Creamos un producto con descuento
let chairOnSale: DiscountedProduct = {
  name: "Chair on Sale",
  unitPrice: 30,
  discount: 5,
  purchase: (quantity) => console.log(`Purchased ${quantity} chairs on sale`),
};
