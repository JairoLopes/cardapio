<template>
  <div class="bg-main-bg min-h-screen text-gray-800 max-w-7xl mx-auto">
    <header class="bg-navbg border-b border-amber-200 p-1 shadow-sm sticky top-0 z-50">
      <div class="flex flex-col items-center justify-center p-2">
        <div class="flex items-center gap-4">
          <img src="/img/bistro-ammit.png" alt="Logo" class="w-46" />
        </div>

        <p class="text-sm text-third mt-2 font-semibold">Explore nossas Delícias</p>
      </div>

      <nav
        class="mt-4 p-3 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide md:justify-center"
      >
        <!-- Promoções -->
        <RouterLink
          to="/promocional"
          class="flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium transition-colors text-center"
          :class="{
            'bg-third text-white': $route.name === 'Promotional',
            'bg-third/30 text-primary hover:bg-amber-200': $route.name !== 'Promotional',
          }"
        >
          Promoções
        </RouterLink>

        <!-- Geral -->
        <RouterLink
          v-for="cat in categories"
          :key="cat"
          :to="`/${getCategorySlug(cat)}`"
          class="flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium transition-colors text-center"
          :class="{
            'bg-third text-white': $route.params.categorySlug === getCategorySlug(cat),
            'bg-third/30 text-primary hover:bg-amber-200':
              $route.params.categorySlug !== getCategorySlug(cat),
          }"
        >
          {{ cat }}
        </RouterLink>

        <!-- Prato do dia -->
        <RouterLink
          to="/prato-do-dia"
          class="flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium transition-colors text-center"
          :class="{
            'bg-third text-white': $route.name === 'DailySpecial',
            'bg-third/30 text-primary hover:bg-amber-200': $route.name !== 'DailySpecial',
          }"
        >
          Prato do Dia
        </RouterLink>
      </nav>
    </header>

    <RouterView />

    <InfoEnd />
  </div>
</template>

<script setup lang="ts">
import { menuItems } from '@/data/menu'
import { RouterLink, RouterView } from 'vue-router'
import InfoEnd from './components/InfoEnd.vue'

// Extrai as categorias únicas do array de itens do menu.
const categories = Array.from(new Set(menuItems.map((item) => item.category)))

// Função auxiliar para converter o nome da categoria em um "slug"
function getCategorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, '-')
}
</script>
