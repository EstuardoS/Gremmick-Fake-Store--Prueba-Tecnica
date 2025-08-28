<template>
  <article v-if="product" class="grid md:grid-cols-2 gap-8">
    <div class="border rounded p-6">
      <img :src="product.image" :alt="product.title" class="mx-auto h-80 object-contain" />
    </div>
    <div>
      <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
      <p class="text-sm text-gray-500 mb-2">Categoría: {{ product.category }}</p>
      <p class="text-3xl text-green-700 font-bold mb-4">$ {{ product.price }}</p>
      <p class="text-gray-700 mb-6">{{ product.description }}</p>
      <button class="px-5 py-3 rounded bg-black text-white" @click="addToCart">
        Agregar al Carrito
      </button>
    </div>
  </article>
  <p v-else>Cargando...</p>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const route = useRoute()
const { data: product } = await useFetch(
  () => `https://fakestoreapi.com/products/${route.params.id}`
)
const cart = useCartStore()
function addToCart () {
  const p: any = product.value
  cart.add({ id: p.id, title: p.title, price: p.price, image: p.image }, 1)
}
</script>
