<!-- 
Esta view exibe os itens de uma categoria específica.
Ela recebe a categoria como uma prop e usa uma propriedade computada(computed)
para filtrar os itens do menu que pertencem a essa categoria.
Isso garante que a lista de itens seja reativa e
se atualize sempre que a prop category mudar. 
-->

<template>
  <main class="bg-slate-50 p-4 max-w-5xl mx-auto">
    <h2 class="text-xl font-semibold text-primary mt-6 mb-3">{{ category }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <MenuItem v-for="dish in filteredItems" :key="dish.id" :item="dish" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { menuItems } from '@/data/menu'
import MenuItem from '@/components/MenuItem.vue'

// Define a prop 'category' do tipo string. O TypeScript valida essa prop.
const props = defineProps<{ category: string }>()

// Propriedade computada que filtra a lista de `menuItems`.
// Ela é reativa e recalcula seu valor automaticamente sempre que `props.category` muda.
const filteredItems = computed(() => {
  // Retorna um novo array com os itens cuja categoria corresponde à prop atual
  return menuItems.filter((item) => item.category === props.category)
})
</script>
