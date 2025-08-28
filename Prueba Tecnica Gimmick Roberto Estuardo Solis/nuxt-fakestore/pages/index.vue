<template>
  <section>
    <h1 class="text-2xl font-bold mb-6">Productos</h1>

    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="n in 6" :key="n" class="animate-pulse border rounded p-4 h-64" />
    </div>

    <p v-else-if="!products.length" class="text-red-600">No se pudieron cargar productos.</p>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <NuxtLink
        v-for="p in products"
        :key="p.id"
        :to="'/products/' + p.id"
        class="border rounded p-4 hover:shadow transition"
      >
        <img :src="p.image" :alt="p.title" class="h-40 w-full object-contain mb-3" />
        <h2 class="font-semibold mb-1 truncate">{{ p.title }}</h2>
        <p class="text-green-700 font-bold text-lg">$ {{ p.price }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = ref<any[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await useFetch('https://fakestoreapi.com/products')
    products.value = data.value || []
  } catch {
    const local = await import('~/data/products.json') // fallback local
    products.value = (local as any).default || []
  } finally {
    loading.value = false
  }
})
</script>
