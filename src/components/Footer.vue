<template>
  <footer
    class="bg-gradient-to-br from-[#2E2B29] via-[#3A3530] to-[#2E2B29] relative overflow-hidden"
  >
    <!-- Decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-10 w-64 h-64 bg-[#C2A191] rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-48 h-48 bg-[#D4B5A0] rounded-full blur-3xl"
      ></div>
    </div>

    <!-- Footer content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="mb-8">
            <h3 class="text-3xl md:text-4xl font-serif mb-4 text-[#C2A191]">
              VALERIA DANIELE LEONARDI
            </h3>
            <p
              class="text-lg text-[#D4B5A0] font-light tracking-[0.2em] uppercase mb-4"
            >
              Photographe Professionnelle
            </p>
            <p class="text-[#E6C7B8] leading-relaxed max-w-md">
              Spécialisée dans les mariages, événements, nouveau-né, portraits,
              familles… Capturer vos moments, raconter vos histoires.
            </p>
          </div>

          <!-- Contact Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <div
                class="w-10 h-10 bg-[#C2A191] rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-[#2E2B29]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <a
                href="tel:0619037490"
                class="text-lg font-medium text-[#C2A191] hover:text-[#D4B5A0] transition-colors duration-300"
              >
                06 19 03 74 90
              </a>
            </div>

            <div class="flex items-center space-x-4">
              <div
                class="w-10 h-10 bg-[#C2A191] rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-[#2E2B29]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <a
                href="mailto:Vdlphotographe@outlook.com"
                class="text-lg font-medium text-[#C2A191] hover:text-[#D4B5A0] transition-all duration-300 transform hover:translate-x-1"
              >
                Vdlphotographe@outlook.com
              </a>
            </div>

            <div class="flex items-center space-x-4">
              <div
                class="w-10 h-10 bg-[#C2A191] rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-[#2E2B29]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <span class="text-lg font-medium text-[#C2A191]">
                Moselle & Alentours
              </span>
            </div>
          </div>
        </div>

        <!-- Services Section -->
        <div>
          <h4 class="text-xl font-serif mb-6 text-[#C2A191]">Prestations</h4>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/mariage"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300 flex items-center space-x-2"
              >
                <img
                  src="@/assets/picto_mariage.png"
                  alt="Mariage"
                  class="w-6 h-6 object-contain brightness-0 invert"
                />
                <span>Mariage</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/grossesse"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300 flex items-center space-x-2"
              >
                <img
                  src="@/assets/picto_grossesse.png"
                  alt="Grossesse"
                  class="w-6 h-6 object-contain brightness-0 invert"
                />
                <span>Grossesse</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/naissance"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300 flex items-center space-x-2"
              >
                <img
                  src="@/assets/picto_naissance.png"
                  alt="Naissance"
                  class="w-6 h-6 object-contain brightness-0 invert"
                />
                <span>Naissance</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/famille"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300 flex items-center space-x-2"
              >
                <img
                  src="@/assets/picto_famille.png"
                  alt="Famille"
                  class="w-6 h-6 object-contain brightness-0 invert"
                />
                <span>Famille</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/portrait"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300 flex items-center space-x-2"
              >
                <img
                  src="@/assets/picto_portrait.png"
                  alt="Portrait"
                  class="w-6 h-6 object-contain brightness-0 invert"
                />
                <span>Portrait</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-serif mb-6 text-[#C2A191]">Liens Rapides</h4>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300 flex items-center space-x-2"
              >
                <img
                  src="@/assets/picto_accueil.png"
                  alt="Contact"
                  class="w-6 h-6 object-contain brightness-0 invert"
                />
                <span>Accueil</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/formulaire"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300 flex items-center space-x-2 font-medium"
              >
                <img
                  src="@/assets/picto_contact.png"
                  alt="Contact"
                  class="w-6 h-6 object-contain brightness-0 invert"
                />
                <span>Contact</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/apropos"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300 flex items-center space-x-2 font-medium"
              >
                <img
                  src="@/assets/picto_a_propos.png"
                  alt="A propos"
                  class="w-6 h-6 object-contain brightness-0 invert"
                />
                <span>À Propos</span>
              </router-link>
            </li>
            <li v-show="false">
              <a
                href="#"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300"
              >
                Témoignages
              </a>
            </li>
            <li v-show="false">
              <a
                href="#"
                class="text-[#D4B5A0] hover:text-[#C2A191] transition-colors duration-300"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social Media & Bottom Section -->
      <div class="border-t border-[#C2A191]/30 mt-12 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <!-- Social Media -->
          <div class="flex items-center space-x-1">
            <span class="text-lg font-medium mr-4 text-[#C2A191]">
              Suivez-nous :
            </span>

            <a
              href="https://www.facebook.com/p/VDLphotographe-100063617104628/"
              target="_blank"
              aria-label="VDL Photographe sur Facebook"
              rel="noopener noreferrer"
              class="group w-12 h-12 bg-[#C2A191]/20 rounded-full flex items-center justify-center hover:bg-[#C2A191] transition-all duration-300 transform hover:scale-110"
            >
              <svg
                class="w-6 h-6 text-[#C2A191] group-hover:text-[#2E2B29] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/vdlphotographe/"
              target="_blank"
              aria-label="VDL Photographe sur Instagram"
              rel="noopener noreferrer"
              class="group w-12 h-12 bg-[#C2A191]/20 rounded-full flex items-center justify-center hover:bg-[#C2A191] transition-all duration-300 transform hover:scale-110"
            >
              <svg
                class="w-6 h-6 text-[#C2A191] group-hover:text-[#2E2B29] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="mailto:Vdlphotographe@outlook.com"
              aria-label="Envoyer un email à VDL Photographe"
              class="group w-12 h-12 bg-[#C2A191]/20 rounded-full flex items-center justify-center hover:bg-[#C2A191] transition-all duration-300 transform hover:scale-110"
            >
              <svg
                class="w-6 h-6 text-[#C2A191] group-hover:text-[#2E2B29] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
          </div>

          <!-- Copyright -->
          <div class="text-center">
            <p class="text-[#D4B5A0] text-sm">
              © {{ currentYear }} Valeria Daniele Leonardi Photography. Tous droits réservés.
            </p>
            <p class="mt-1">
              <a
                href="https://www.lehubduweb.fr/"
                class="font-serif italic uppercase tracking-[0.25em] transition-colors duration-200"
                style="font-size:5px; opacity:0.28; color:rgba(194,161,145,.28); line-height:1;"
              >
                Le Hub du Web
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
/* Aucun style CSS ici car tout est géré par Tailwind CSS */
</style>
