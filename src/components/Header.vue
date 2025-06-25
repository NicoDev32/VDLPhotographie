<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center px-4 py-4">
      <router-link to="/accueil" class="flex items-center">
        <img
          src="@/assets/logo_vdl_png.png"
          alt="Logo VDL"
          class="h-12 w-auto mr-3"
        />
        <div class="flex flex-col leading-tight">
          <span class="text-3xl font-signature text-gray-500">Vdl</span>
          <span class="text-xs tracking-widest text-gray-500 uppercase"
            >Photographe</span
          >
        </div>
      </router-link>

      <nav class="hidden md:flex space-x-6 text-gray-700 font-medium">
        <router-link
          to="/grossesse"
          class="text-gray-800 text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
          >Grossesse</router-link
        >
        <router-link
          to="/naissance"
          class="text-gray-800 text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
          >Naissance</router-link
        >
        <router-link
          to="/famille"
          class="text-gray-800 text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
          >Famille</router-link
        >
        <router-link
          to="/mariage"
          class="text-gray-800 text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
          >Mariage</router-link
        >
        <router-link
          to="/portrait"
          class="text-gray-800 text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
          >Portrait</router-link
        >

        <router-link
          to="/apropos"
          class="text-gray-800 text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
          >À propos</router-link
        >
        <router-link
          to="/formulaire"
          class="text-gray-800 text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
          >Contact</router-link
        >
      </nav>

      <!-- Menu burger mobile -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-8 h-8 text-gray-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-8 h-8 text-gray-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="menuOpen" class="md:hidden bg-white shadow-md">
      <div class="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
        <router-link
          @click="closeMenu"
          to="/grossesse"
          class="hover:text-pink-500"
          >Grossesse</router-link
        >
        <router-link
          @click="closeMenu"
          to="/naissance"
          class="hover:text-pink-500"
          >Naissance</router-link
        >
        <router-link
          @click="closeMenu"
          to="/famille"
          class="hover:text-pink-500"
          >Famille</router-link
        >
        <router-link
          @click="closeMenu"
          to="/mariage"
          class="hover:text-pink-500"
          >Mariage</router-link
        >
        <router-link
          @click="closeMenu"
          to="/portrait"
          class="hover:text-pink-500"
          >Portrait</router-link
        >
        <router-link
          @click="closeMenu"
          to="/apropos"
          class="hover:text-pink-500"
          >À propos
        </router-link>
        <router-link
          @click="closeMenu"
          to="/formulaire"
          class="hover:text-pink-500"
          >Contact</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
a.router-link-exact-active {
  color: rgb(203, 161, 144);
}
</style>
