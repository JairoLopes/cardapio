<template>
  <div class="bg-main-bg min-h-screen text-gray-800 max-w-7xl mx-auto">
    <header class="bg-navbg border-b border-amber-200 p-4 shadow-sm sticky top-0 z-50">
      <div
        v-if="isAtTop"
        class="relative flex items-center justify-between p-2 transition-opacity duration-300"
      >
        <!-- LOGO -->
        <h1 class="text-2xl font-bold text-primary">
          Bistrô do <br />
          campo
        </h1>

        <div class="text-right">
          <h1 class="text-xl font-bold text-primary">Nosso Cardápio</h1>
          <p class="text-primary text-sm">Explore nossas delícias!</p>
        </div>
      </div>

      <nav class="p-3 grid max-ssm:grid-cols-2 grid-cols-3 md:grid-cols-4 gap-2">
        <!-- ROTA DO PRATO DO DIA -->
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

        <!-- ROTA DAS PROMOÇÕES -->
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

        <!-- RESTANTE DAS ROTAS -->
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
      </nav>
    </header>

    <RouterView />

    <InfoEnd />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { menuItems } from '@/data/menu'
import { RouterLink, RouterView } from 'vue-router'
import InfoEnd from './components/InfoEnd.vue'

// Variável reativa para controlar se a página está no topo
const isAtTop = ref(true)

// A função de throttle é aprimorada para evitar o bug de oscilação
let timeoutId: ReturnType<typeof setTimeout> | null = null

function handleScroll() {
  // Limpa o timeout anterior para evitar execuções desnecessárias
  if (timeoutId !== null) {
    clearTimeout(timeoutId)
  }

  // Define um novo timeout para executar a lógica de scroll apenas após 50ms de inatividade
  timeoutId = setTimeout(() => {
    isAtTop.value = window.scrollY === 0
  }, 50)
}

// Extrai as categorias únicas do array de itens do menu.
const categories = Array.from(new Set(menuItems.map((item) => item.category)))

// Função auxiliar para converter o nome da categoria em um "slug"
function getCategorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, '-')
}

// Adiciona o listener de rolagem ao montar o componente
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Remove o listener de rolagem ao desmontar o componente
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (timeoutId !== null) {
    clearTimeout(timeoutId)
  }
})
</script>
