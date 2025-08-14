<!-- 
Este componente é responsável por exibir o card individual de um item do cardápio.
Ele recebe os dados de um item como uma prop e formata o preço para o padrão brasileiro. 
-->

<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img :src="item.image" :alt="item.name" class="w-full h-40 object-cover" loading="lazy" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-secondary">{{ item.name }}</h3>
      <p class="text-sm text-gray-600 mt-1">{{ item.description }}</p>
      <div class="mt-4">
        <span class="text-third font-bold text-lg">
          {{ formatPrice(item.price) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* importa a interface MenuItem do arquivo '@/data/menu' */
import type { MenuItem } from '@/data/menu'

// Define a prop 'item', que deve ser do tipo `MenuItem` importado de '@/data/menu'.
// Isso garante a tipagem correta e o IntelliSense.
defineProps<{
  item: MenuItem
}>()

// Função para formatar o preço para a moeda brasileira (BRL)
function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency', // Formato de moeda
    currency: 'BRL', // Moeda: Real Brasileiro
  })
}
</script>
