import { ProductType } from '../models/product'

export const getTotalPrice = (
  items: (ProductType & { quantity: number })[]
) => {
  return items.reduce((acc, item) => acc + item.preco * item.quantity, 0)
}
