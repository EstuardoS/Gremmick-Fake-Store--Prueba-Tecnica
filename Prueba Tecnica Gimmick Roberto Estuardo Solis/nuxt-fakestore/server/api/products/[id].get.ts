// server/api/products/[id].get.ts
import products from '../../../data/products.json'

export default defineEventHandler((event) => {
  const id = Number(event.context.params?.id)
  return products.find((p) => p.id === id)
})
