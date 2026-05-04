<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center px-4 py-4">
      <router-link to="/" class="flex items-center">
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

      <nav class="hidden lg:flex items-center lg:space-x-3 xl:space-x-7 text-gray-700 font-medium">
        <router-link
          to="/grossesse"
          class="flex items-center lg:gap-1 xl:gap-1.5 text-gray-800 lg:text-sm xl:text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
        >
          <img src="@/assets/picto_grossesse.png" alt="" class="lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Grossesse
        </router-link>
        <router-link
          to="/naissance"
          class="flex items-center lg:gap-1 xl:gap-1.5 text-gray-800 lg:text-sm xl:text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
        >
          <img src="@/assets/picto_naissance.png" alt="" class="lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Naissance
        </router-link>
        <router-link
          to="/famille"
          class="flex items-center lg:gap-1 xl:gap-1.5 text-gray-800 lg:text-sm xl:text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
        >
          <img src="@/assets/picto_famille.png" alt="" class="lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Famille
        </router-link>
        <router-link
          to="/mariage"
          class="flex items-center lg:gap-1 xl:gap-1.5 text-gray-800 lg:text-sm xl:text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
        >
          <img src="@/assets/picto_mariage.png" alt="" class="lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Mariage
        </router-link>
        <router-link
          to="/portrait"
          class="flex items-center lg:gap-1 xl:gap-1.5 text-gray-800 lg:text-sm xl:text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
        >
          <img src="@/assets/picto_portrait.png" alt="" class="lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Portrait
        </router-link>
        <router-link
          to="/apropos"
          class="flex items-center lg:gap-1 xl:gap-1.5 text-gray-800 lg:text-sm xl:text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
        >
          <img src="@/assets/picto_a_propos.png" alt="" class="lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          À propos
        </router-link>
        <router-link
          to="/formulaire"
          class="flex items-center lg:gap-1 xl:gap-1.5 text-gray-800 lg:text-sm xl:text-lg font-semibold hover:text-rose-400 transition-colors duration-300"
        >
          <img src="@/assets/picto_contact.png" alt="" class="lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Contact
        </router-link>

        <!-- Téléphone -->
        <a
          href="tel:+33619037490"
          title="06 19 03 74 90"
          class="tel-btn"
        >
          <svg width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </nav>

      <!-- Menu burger mobile -->
      <div class="lg:hidden">
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
    <div v-if="menuOpen" class="lg:hidden bg-white shadow-md">
      <div class="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
        <router-link @click="closeMenu" to="/grossesse" class="flex items-center gap-2 hover:text-pink-500">
          <img src="@/assets/picto_grossesse.png" alt="" class="w-5 h-5 object-contain" />
          Grossesse
        </router-link>
        <router-link @click="closeMenu" to="/naissance" class="flex items-center gap-2 hover:text-pink-500">
          <img src="@/assets/picto_naissance.png" alt="" class="w-5 h-5 object-contain" />
          Naissance
        </router-link>
        <router-link @click="closeMenu" to="/famille" class="flex items-center gap-2 hover:text-pink-500">
          <img src="@/assets/picto_famille.png" alt="" class="w-5 h-5 object-contain" />
          Famille
        </router-link>
        <router-link @click="closeMenu" to="/mariage" class="flex items-center gap-2 hover:text-pink-500">
          <img src="@/assets/picto_mariage.png" alt="" class="w-5 h-5 object-contain" />
          Mariage
        </router-link>
        <router-link @click="closeMenu" to="/portrait" class="flex items-center gap-2 hover:text-pink-500">
          <img src="@/assets/picto_portrait.png" alt="" class="w-5 h-5 object-contain" />
          Portrait
        </router-link>
        <router-link @click="closeMenu" to="/apropos" class="flex items-center gap-2 hover:text-pink-500">
          <img src="@/assets/picto_a_propos.png" alt="" class="w-5 h-5 object-contain" />
          À propos
        </router-link>
        <router-link @click="closeMenu" to="/formulaire" class="flex items-center gap-2 hover:text-pink-500">
          <img src="@/assets/picto_contact.png" alt="" class="w-5 h-5 object-contain" />
          Contact
        </router-link>
        <a href="tel:+33619037490" class="flex items-center gap-2 hover:text-pink-500">
          <span class="tel-btn-mobile">
            <svg width="16" height="16" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          06 19 03 74 90
        </a>
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

.tel-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #C2A191;
  border-radius: 50%;
  margin-left: 8px;
  flex-shrink: 0;
  transition: background-color 0.3s;
}
.tel-btn:hover {
  background-color: #ad8e80;
}

.tel-btn-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #C2A191;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
