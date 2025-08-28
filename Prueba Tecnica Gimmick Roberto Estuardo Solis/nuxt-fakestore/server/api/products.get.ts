// server/api/products.get.ts
import products from '../../data/products.json'

export default defineEventHandler(() => {
  return products
})
