<template>
  <div class="naissance bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <Header />

    <!-- Hero Section avec animations -->
    <section class="text-center py-8 md:py-12 px-4">
      <h1
        class="text-4xl md:text-6xl font-serif tracking-wide text-[#2E2B29] mb-4 hero-title"
      >
        Naissance
      </h1>
      <p
        class="text-lg md:text-xl tracking-[0.3em] font-semibold text-[#C2A191] uppercase hero-subtitle"
      >
        Moselle & Alentours
      </p>

      <div class="max-w-4xl mx-auto mt-8">
        <p
          class="text-lg md:text-xl text-center leading-relaxed text-[#2E2B29]/80 hero-description"
        >
          Votre famille s'apprête à s'agrandir, toutes mes félicitations ! Que
          ce soit votre premier ou que vous ayez déjà toute une tribu, c'est un
          événement qui changera à jamais votre vie !
        </p>
      </div>
    </section>

    <!-- Galerie photos responsive -->
    <section class="py-8 md:py-12 px-4" ref="portfolioSection">
      <div class="max-w-7xl mx-auto">
        <!-- Carrousel pour desktop -->
        <div
          class="hidden md:block bg-gray-50 rounded-2xl p-6 mb-8 scroll-fade-in"
        >
          <div
            class="relative h-96 lg:h-[500px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              :src="photos[activePhoto]"
              alt="Séance photo nouveau-né par VDL Photographe à Clouange, Moselle"
              class="object-contain h-full max-w-full rounded-xl shadow-md border-2 border-white"
            />

            <!-- Boutons de navigation -->
            <button
              @click="previousPhoto()"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              @click="nextPhoto()"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <!-- Miniatures -->
          <div class="flex flex-wrap justify-center gap-3 mt-6">
            <div
              v-for="(photo, index) in photos"
              :key="index"
              @click="activePhoto = index"
              :class="{ 'ring-4 ring-[#C2A191]': activePhoto === index }"
              class="w-20 h-20 bg-cover bg-center bg-no-repeat rounded-xl cursor-pointer transition-all duration-300 shadow-md"
              :style="'background-image: url(' + photo + ')'"
            ></div>
          </div>
        </div>

        <!-- Grille pour mobile -->
        <div class="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(photo, index) in photos.slice(0, 6)"
            :key="index"
            class="group relative overflow-hidden rounded-xl aspect-square shadow-lg scroll-fade-in"
          >
            <img
              :src="photo"
              :alt="`Photo naissance ${index + 1}`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section texte avec animations -->
    <section class="py-8 md:py-12 px-4" ref="contentSection">
      <div class="max-w-5xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 scroll-fade-in">
          <div class="prose prose-lg max-w-none">
            <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
              Le temps passe tellement vite, j'en ai fait l'expérience avec mes
              2 petites princesses 👸. Quel plaisir de revoir les photos de leur
              naissance, entre 7 et 14 jours, photographier vos petits amours
              permet de garder un souvenir des premiers jours de vie de bébé.
            </p>

            <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
              Une séance pour nouveau-né peut varier entre 1h30 et 3h en
              fonction de ses besoins (faim, change, pleur, sommeil) c'est
              pourquoi je prends le temps pour chaque séance. N'hésitez pas à
              prendre le nécessaire de bébé (biberon ou maman 😊 pour les bébés
              allaités, change, doudou, tétine).
            </p>

            <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
              Une fois qu'ils grandissent on aime toujours les regarder avec
              bienveillance se développer et devenir des « grands ». Une fois
              que bébé tiens assis seul, des séances-vous sont proposés avec des
              décors pour immortaliser des moments tels que son premier
              anniversaire par exemple.
            </p>

            <p class="text-lg leading-relaxed text-[#2E2B29]">
              Si vous êtes intéressés par une séance,
              <router-link
                to="/formulaire"
                class="text-[#C2A191] hover:text-[#ad8e80] font-semibold underline transition-colors duration-300"
              >
                cliquez ici </router-link
              >.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section des collections avec animations -->
    <section
      class="py-12 md:py-16 px-4 bg-gradient-to-br from-[#C2A191]/5 to-[#ad8e80]/5"
      ref="collectionsSection"
    >
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2E2B29] scroll-fade-in"
        >
          Collections Naissance
        </h2>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Collection PUPPA / PUPPO -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-fade-in"
          >
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection PUPPA / PUPPO
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio entre 1h00 et 3h en fonction des besoins de
                    votre bébé
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">👶</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Bébé seul
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">👕</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Prêt d'accessoires et tenues possible
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    10 fichiers numériques Haute définition
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">145€</span>
              </div>
            </div>
          </div>

          <!-- Collection BAMBOLA/BAMBOLO -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-fade-in"
          >
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection BAMBOLA/BAMBOLO
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio entre 1h00 et 3h en fonction des besoins de
                    votre bébé
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">👨‍👩‍👧‍👦</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Bébé avec parents / frère et sœur
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">👕</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Prêt d'accessoires et tenues possible
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    15 fichiers numériques Haute définition
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">195€</span>
              </div>
            </div>
          </div>

          <!-- Collection BIMBA/ BIMBO -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-fade-in"
          >
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection BIMBA/ BIMBO
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio d'1h00
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">🪑</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Enfant tenant assis seul (de 6 mois à 3 ans)
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    8 fichiers numériques Haute définition
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">125€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section avec animations -->
    <section class="py-12 px-4" ref="ctaSection">
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="bg-gradient-to-r from-[#C2A191] to-[#ad8e80] rounded-2xl p-8 md:p-12 scroll-fade-in"
        >
          <h3 class="text-2xl md:text-3xl font-serif mb-4">
            Et si vous craquez pour plus d'images que prévu ?
          </h3>
          <p class="text-lg mb-8 opacity-90">
            Aucun souci, les photos supplémentaires sont à 12€ l'unité et le
            prix est dégressif en fonction du nombre de photos supplémentaires !
          </p>
          <router-link
            to="/formulaire"
            class="inline-flex items-center px-8 py-4 bg-white text-[#C2A191] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Réserver votre séance
            <svg
              class="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Naissance",
  components: { Footer, Header },
  data() {
    return {
      photos: [
        require("../assets/naissance_4.jpg"),
        require("../assets/NaissanceLina-8.jpg"),
        require("../assets/naissance_2.jpg"),
        require("../assets/naissance_3.jpg"),
        require("../assets/naissance_5.jpg"),
        require("../assets/naissance_6.jpg"),
        require("../assets/naissance_7.jpg"),
      //  require("../assets/naissance_8.jpg"),
      //  require("../assets/naissance_9.jpg"),
      ],
      activePhoto: 0,
    };
  },

  mounted() {
    // ✨ Initialiser les animations
    this.initAnimations();
    this.setupScrollObserver();

    // Gestion du clavier pour le carrousel
    document.addEventListener("keydown", (event) => {
      if (event.which == 37) this.previousPhoto();
      if (event.which == 39) this.nextPhoto();
    });
  },

  methods: {
    // 🎬 Animation des éléments du hero au chargement
    initAnimations() {
      setTimeout(() => {
        const heroTitle = document.querySelector(".hero-title");
        const heroSubtitle = document.querySelector(".hero-subtitle");
        const heroDescription = document.querySelector(".hero-description");

        if (heroTitle) heroTitle.classList.add("animate-in");
        setTimeout(() => {
          if (heroSubtitle) heroSubtitle.classList.add("animate-in");
        }, 300);
        setTimeout(() => {
          if (heroDescription) heroDescription.classList.add("animate-in");
        }, 600);
      }, 100);
    },

    // 🌊 Observer pour les animations au scroll
    setupScrollObserver() {
      const options = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      }, options);

      // Observer tous les éléments avec la classe scroll-fade-in
      const scrollElements = document.querySelectorAll(".scroll-fade-in");
      scrollElements.forEach((el) => observer.observe(el));
    },

    // 📸 Méthodes du carrousel
    nextPhoto() {
      this.activePhoto =
        this.activePhoto + 1 < this.photos.length ? this.activePhoto + 1 : 0;
    },

    previousPhoto() {
      this.activePhoto =
        this.activePhoto - 1 >= 0
          ? this.activePhoto - 1
          : this.photos.length - 1;
    },
  },
};
</script>

<style scoped>
/* Animations d'apparition initiales pour le hero */
.hero-title,
.hero-subtitle,
.hero-description {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.hero-title.animate-in,
.hero-subtitle.animate-in,
.hero-description.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Animations de scroll */
.scroll-fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.scroll-fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Animation décalée pour les collections */
.scroll-fade-in:nth-child(1) {
  transition-delay: 0.1s;
}

.scroll-fade-in:nth-child(2) {
  transition-delay: 0.2s;
}

.scroll-fade-in:nth-child(3) {
  transition-delay: 0.3s;
}

.scroll-fade-in:nth-child(4) {
  transition-delay: 0.4s;
}

/* Animation spéciale pour les éléments de la grille */
.grid .scroll-fade-in:nth-child(1) {
  transition-delay: 0.1s;
}

.grid .scroll-fade-in:nth-child(2) {
  transition-delay: 0.2s;
}

.grid .scroll-fade-in:nth-child(3) {
  transition-delay: 0.3s;
}

.grid .scroll-fade-in:nth-child(4) {
  transition-delay: 0.4s;
}

.grid .scroll-fade-in:nth-child(5) {
  transition-delay: 0.5s;
}

.grid .scroll-fade-in:nth-child(6) {
  transition-delay: 0.6s;
}
</style>
