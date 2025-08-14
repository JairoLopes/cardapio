<template>
  <main class="bg-main-bg p-4 max-w-5xl mx-auto">
    <h2 class="text-xl font-semibold text-primary mt-6 mb-3">Promoções da Semana</h2>
    <div
      v-if="promotionalItems.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      <MenuItem v-for="dish in promotionalItems" :key="dish.id" :item="dish" />
    </div>
    <div v-else class="text-center text-gray-500 py-10">
      <p>No momento não temos promoções ativas. Volte em breve!</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { menuItems } from '@/data/menu'
import MenuItem from '@/components/MenuItem.vue'

// Propriedade computada que filtra a lista de `menuItems`
// para encontrar todos os itens com a propriedade `isPromotional` como true.
const promotionalItems = computed(() => {
  // Retorna um novo array contendo apenas os itens promocionais
  return menuItems.filter((item) => item.isPromotional)
})
</script>
