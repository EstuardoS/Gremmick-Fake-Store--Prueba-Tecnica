import { useCartStore } from '@/stores/cart'
export default defineNuxtPlugin((nuxtApp) => {
  const cart = useCartStore(nuxtApp.$pinia)
  const key = 'cart:items'
  const saved = localStorage.getItem(key)
  if (saved) cart.$patch({ items: JSON.parse(saved) })
  cart.$subscribe((_m, state) => localStorage.setItem(key, JSON.stringify(state.items)))
})
