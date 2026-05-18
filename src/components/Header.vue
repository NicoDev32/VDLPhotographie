<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center px-4 py-4">
      <nuxt-link to="/" class="flex items-center">
        <img
          src="@/assets/logo_vdl_png.png"
          alt="Logo VDL"
          class="h-12 w-auto mr-3"
        />
        <div class="flex flex-col leading-tight">
          <span class="text-3xl font-signature text-gray-500">Vdl</span>
          <span class="text-xs tracking-widest text-gray-500 uppercase">Photographe</span>
        </div>
      </nuxt-link>

      <nav class="hidden lg:flex items-center lg:space-x-3 xl:space-x-7 text-gray-700 font-medium">
        <nuxt-link to="/grossesse" class="nav-link">
          <img src="@/assets/picto_grossesse.png" alt="" class="nav-icon lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Grossesse
        </nuxt-link>
        <nuxt-link to="/naissance" class="nav-link">
          <img src="@/assets/picto_naissance.png" alt="" class="nav-icon lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Naissance
        </nuxt-link>
        <nuxt-link to="/famille" class="nav-link">
          <img src="@/assets/picto_famille.png" alt="" class="nav-icon lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Famille
        </nuxt-link>
        <nuxt-link to="/mariage" class="nav-link">
          <img src="@/assets/picto_mariage.png" alt="" class="nav-icon lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Mariage
        </nuxt-link>
        <nuxt-link to="/portrait" class="nav-link">
          <img src="@/assets/picto_portrait.png" alt="" class="nav-icon lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Portrait
        </nuxt-link>
        <nuxt-link to="/apropos" class="nav-link">
          <img src="@/assets/picto_a_propos.png" alt="" class="nav-icon lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          À propos
        </nuxt-link>
        <nuxt-link to="/formulaire" class="nav-link">
          <img src="@/assets/picto_contact.png" alt="" class="nav-icon lg:w-4 lg:h-4 xl:w-5 xl:h-5 object-contain" />
          Contact
        </nuxt-link>

        <a href="tel:+33619037490" title="06 19 03 74 90" class="tel-btn">
          <svg width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </nav>

      <!-- Menu burger mobile -->
      <div class="lg:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-800">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-800">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="menuOpen" class="lg:hidden bg-white shadow-md">
      <div class="flex flex-col space-y-1 px-6 py-4 text-gray-700 font-medium">
        <nuxt-link @click.native="closeMenu" to="/grossesse" class="nav-link-mobile">
          <img src="@/assets/picto_grossesse.png" alt="" class="nav-icon w-5 h-5 object-contain" />
          Grossesse
        </nuxt-link>
        <nuxt-link @click.native="closeMenu" to="/naissance" class="nav-link-mobile">
          <img src="@/assets/picto_naissance.png" alt="" class="nav-icon w-5 h-5 object-contain" />
          Naissance
        </nuxt-link>
        <nuxt-link @click.native="closeMenu" to="/famille" class="nav-link-mobile">
          <img src="@/assets/picto_famille.png" alt="" class="nav-icon w-5 h-5 object-contain" />
          Famille
        </nuxt-link>
        <nuxt-link @click.native="closeMenu" to="/mariage" class="nav-link-mobile">
          <img src="@/assets/picto_mariage.png" alt="" class="nav-icon w-5 h-5 object-contain" />
          Mariage
        </nuxt-link>
        <nuxt-link @click.native="closeMenu" to="/portrait" class="nav-link-mobile">
          <img src="@/assets/picto_portrait.png" alt="" class="nav-icon w-5 h-5 object-contain" />
          Portrait
        </nuxt-link>
        <nuxt-link @click.native="closeMenu" to="/apropos" class="nav-link-mobile">
          <img src="@/assets/picto_a_propos.png" alt="" class="nav-icon w-5 h-5 object-contain" />
          À propos
        </nuxt-link>
        <nuxt-link @click.native="closeMenu" to="/formulaire" class="nav-link-mobile">
          <img src="@/assets/picto_contact.png" alt="" class="nav-icon w-5 h-5 object-contain" />
          Contact
        </nuxt-link>
        <a href="tel:+33619037490" class="flex items-center gap-2 py-3 text-gray-700 hover:text-[#C2A191] transition-colors duration-300">
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
/* Lien nav desktop */
.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4b4845;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
}
@media (min-width: 1280px) {
  .nav-link { font-size: 1.1rem; gap: 6px; }
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #C2A191;
  border-radius: 2px;
  transition: width 0.3s ease;
}
.nav-link:hover { color: #C2A191; }
.nav-link:hover::after { width: 100%; }

/* Lien actif desktop */
.nav-link.nuxt-link-exact-active {
  color: #C2A191;
}
.nav-link.nuxt-link-exact-active::after {
  width: 100%;
}
.nav-link.nuxt-link-exact-active .nav-icon {
  filter: invert(68%) sepia(20%) saturate(500%) hue-rotate(330deg) brightness(95%);
}

/* Lien nav mobile */
.nav-link-mobile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  font-weight: 600;
  color: #4b4845;
  text-decoration: none;
  border-left: 3px solid transparent;
  padding-left: 8px;
  transition: all 0.3s;
}
.nav-link-mobile:hover {
  color: #C2A191;
  border-left-color: #C2A191;
}
.nav-link-mobile.nuxt-link-exact-active {
  color: #C2A191;
  border-left-color: #C2A191;
  background-color: #C2A191/5;
}
.nav-link-mobile.nuxt-link-exact-active .nav-icon {
  filter: invert(68%) sepia(20%) saturate(500%) hue-rotate(330deg) brightness(95%);
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
.tel-btn:hover { background-color: #ad8e80; }

.tel-btn-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: #C2A191;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
