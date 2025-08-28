<template>
  <section>
    <h1 class="text-2xl font-bold mb-6">Tu Carrito</h1>

    <div v-if="!items.length" class="text-gray-600">
      Aún no hay productos. <NuxtLink to="/" class="underline">Ir a la tienda</NuxtLink>.
    </div>

    <div v-else class="space-y-4">
      <div v-for="it in items" :key="it.id" class="flex items-center gap-4 border rounded p-4">
        <img :src="it.image" :alt="it.title" class="h-16 w-16 object-contain" />
        <div class="flex-1">
          <p class="font-medium line-clamp-2">{{ it.title }}</p>
          <p class="text-sm text-gray-500">Cantidad: {{ it.qty }}</p>
        </div>
        <p class="font-semibold">$ {{ (it.price * it.qty).toFixed(2) }}</p>
        <button class="text-red-600" @click="remove(it.id)">Quitar</button>
      </div>

      <div class="flex justify-end items-center gap-6 border-t pt-4">
        <p class="text-xl font-bold">Total: $ {{ totalPrice.toFixed(2) }}</p>
        <button class="px-5 py-3 rounded bg-black text-white" @click="clear">Vaciar carrito</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
const items = computed(()=>cart.items)
const totalPrice = computed(()=>cart.totalPrice)
const remove = (id:number)=>cart.remove(id)
const clear = ()=>cart.clear()
</script>
