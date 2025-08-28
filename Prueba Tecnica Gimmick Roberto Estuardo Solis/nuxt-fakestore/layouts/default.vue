<template>
  <div>
    <header class="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <nav class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold">FakeStore</NuxtLink>
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="hover:underline">Inicio</NuxtLink>
          <NuxtLink to="/cart" class="hover:underline">
            Carrito: <span class="font-semibold">{{ total }}</span>
          </NuxtLink>
        </div>
      </nav>
    </header>
    <main class="mx-auto max-w-6xl px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
const total = computed(()=>cart.totalItems)
</script>
