<!-- components/ProductCard.vue -->
<template>
  <div class="border rounded p-4 shadow">
    <h2 class="font-semibold text-lg">{{ product.title }}</h2>
    <p class="text-gray-600">{{ product.description }}</p>
    <p class="text-green-600 font-bold mt-2">\${{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
