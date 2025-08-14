<template>
  <footer
    class="text-center py-8 bg-main-bg text-primary border-t-2 border-primary/40 shadow-2xl mt-7"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <div class="mb-4 md:mb-0">
          <h2 class="text-2xl font-bold text-primary">Bistrô do Campo</h2>
        </div>

        <div class="flex flex-col items-center md:items-start text-sm">
          <p class="mb-2">Endereço: Rua dos Sabores, 123 - Cidade Saborosa</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>

        <div class="flex space-x-4 mt-4 md:mt-0 text-primary">
          <a
            href="#"
            class="text-xl transition-colors duration-200 [@media(hover:hover)]:hover:text-[color:var(--color-secondary)]"
          >
            <v-icon name="ri-instagram-line" scale="1.8" />
          </a>
          <a href="#" class="text-xl">
            <v-icon name="ri-whatsapp-fill" scale="1.8" />
          </a>
        </div>

        <!-- Desenvolvedor -->
        <div class="mt-6">
          <p class="text-xs mt-4">
            Desenvolvido por:
            <a
              class="text-primary font-bold underline"
              href="https://jairolopes-dev.vercel.app/"
              target="_blank"
            >
              Jairo Lopes
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
