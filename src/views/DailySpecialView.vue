<template>
  <main class="bg-main-bg p-4 max-w-5xl mx-auto">
    <h2 class="text-xl font-semibold text-primary mt-6 mb-3">Prato do Dia</h2>
    <div v-if="dailySpecialItem" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <MenuItem :item="dailySpecialItem" />
    </div>
    <div v-else class="text-center text-gray-500 py-10">
      <p>Nenhum prato do dia foi definido hoje. Fique de olho nas novidades!</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { menuItems } from '@/data/menu'
import MenuItem from '@/components/MenuItem.vue'

// Propriedade computada para encontrar o prato do dia.
// A reatividade garante que, se os dados do menu mudarem,
// o prato do dia será reavaliado automaticamente.
const dailySpecialItem = computed(() => {
  // Retorna o primeiro item que tem a propriedade `isDailySpecial` como true
  return menuItems.find((item) => item.isDailySpecial)
})
</script>
