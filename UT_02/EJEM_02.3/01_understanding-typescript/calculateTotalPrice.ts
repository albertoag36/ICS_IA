function calculateTotalPrice(
  product: { name: string; unitPrice: number },
  quantity: number,
  discount: number
) {
    // const priceWithoutDiscount = product.price * quantity; // error 'price' no existe'

  const priceWithoutDiscount = product.unitPrice * quantity;
  const discountAmount = priceWithoutDiscount * discount;
  return priceWithoutDiscount - discountAmount;
}












