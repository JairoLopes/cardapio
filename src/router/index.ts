import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import { menuItems } from '@/data/menu'
import CategoryView from '@/views/CategoryView.vue'
import DailySpecialView from '@/views/DailySpecialView.vue' // Importa a nova view
import PromotionalView from '@/views/PromotionalView.vue' // Importa a nova view

// Obtém as categorias únicas do menu
const categories = Array.from(new Set(menuItems.map((item) => item.category)))

// Função para gerar o "slug" de uma categoria
const getCategorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, '-')

const routes = [
  {
    path: '/',
    // Redireciona para a primeira categoria como padrão
    redirect: `/${getCategorySlug(categories[0])}`,
  },
  {
    // Rota dinâmica para exibir itens de uma categoria específica
    path: '/:categorySlug',
    name: 'Category',
    component: CategoryView,
    props: (route: RouteLocationNormalized) => {
      // Encontra o nome da categoria original a partir do slug da URL
      const categoryName = categories.find((c) => getCategorySlug(c) === route.params.categorySlug)
      // Passa o nome da categoria como prop para a view, ou a primeira categoria se não encontrar
      return { category: categoryName || categories[0] }
    },
  },
  {
    // Nova rota para a página de "Prato do dia"
    path: '/prato-do-dia',
    name: 'DailySpecial',
    component: DailySpecialView,
  },
  {
    // Nova rota para a página de itens "Promocionais"
    path: '/promocional',
    name: 'Promotional',
    component: PromotionalView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Adiciona a função scrollBehavior para controlar a rolagem da página
  scrollBehavior(to, from, savedPosition) {
    // Se houver uma posição salva (ao usar o botão de voltar/avançar do navegador),
    // o Vue Router volta para essa posição.
    if (savedPosition) {
      return savedPosition
    }
    // Caso contrário (em uma navegação normal, como ao clicar em um link),
    // a página rola para o topo (posição 0).
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
