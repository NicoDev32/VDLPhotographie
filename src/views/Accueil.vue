<template>
  <div class="accueil bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <Header />

    <!-- Hero Section compact -->
    <section class="relative overflow-hidden py-4 md:py-8 px-4">
      <!-- Background decoratif -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-20 left-10 w-64 h-64 bg-[#C2A191] rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-48 h-48 bg-[#ad8e80] rounded-full blur-3xl"
        ></div>
      </div>

      <div class="relative max-w-6xl mx-auto text-center">
        <div>
          <h1
            class="text-3xl md:text-5xl lg:text-6xl font-serif tracking-wide leading-tight mb-4 hero-title"
          >
            <span class="block text-[#2E2B29]"> VALERIA DANIELE </span>
            <span class="block text-[#2E2B29] mt-1"> GUERRIN </span>
          </h1>

          <!-- Logo intégré élégamment -->
          <div
            class="flex items-center justify-center space-x-4 mb-4 hero-logo"
          >
            <div
              class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#C2A191]"
            ></div>
            <img
              src="@/assets/logo_vdl.jpg"
              alt="VLD Logo"
              class="h-32 md:h-32 w-auto object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <div
              class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#C2A191]"
            ></div>
          </div>

          <p
            class="text-lg md:text-xl tracking-[0.4em] font-semibold text-[#C2A191] uppercase hero-subtitle"
          >
            Photographe
          </p>
        </div>
      </div>
    </section>

    <!-- Slogan compact -->
    <section class="py-4 md:py-6 px-4 relative">
      <div class="max-w-4xl mx-auto text-center">
        <div>
          <h2
            class="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed hero-slogan"
          >
            <span class="block text-[#2E2B29]">Capturing Moments,</span>
            <span class="block text-[#C2A191] mt-1">Telling Stories</span>
          </h2>
        </div>
      </div>
    </section>

    <!-- Grille de photos EN PREMIER - plus visible -->
    <section class="py-6 md:py-12 px-4" ref="portfolioSection">
      <div class="max-w-7xl mx-auto">
        <div>
          <h3
            class="text-2xl md:text-3xl font-serif text-center mb-6 md:mb-10 text-[#2E2B29] scroll-fade-in"
          >
            Portfolio Highlights
          </h3>

          <!-- Grille responsive avec effets -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            <!-- Image 1 -->
            <div
              class="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-fade-in"
            >
              <img
                src="@/assets/portrait.jpg"
                alt="Portrait"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <h4 class="text-xl font-serif mb-2">Portrait</h4>
                <p class="text-sm opacity-90">
                  Capturer l'essence unique de chaque personne
                </p>
              </div>
            </div>

            <!-- Image 2 -->
            <div
              class="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-fade-in"
            >
              <img
                src="@/assets/couple.jpg"
                alt="Couple"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <h4 class="text-xl font-serif mb-2">Couple</h4>
                <p class="text-sm opacity-90">
                  L'amour immortalisé dans chaque regard
                </p>
              </div>
            </div>

            <!-- Image 3 -->
            <div
              class="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-fade-in"
            >
              <img
                src="@/assets/bouquet.jpg"
                alt="Bouquet"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <h4 class="text-xl font-serif mb-2">Détails</h4>
                <p class="text-sm opacity-90">
                  La beauté dans les plus petits détails
                </p>
              </div>
            </div>

            <!-- Image 4 -->
            <div
              class="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-fade-in"
            >
              <img
                src="@/assets/maman-bebe.jpg"
                alt="Maman et bébé"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <h4 class="text-xl font-serif mb-2">Famille</h4>
                <p class="text-sm opacity-90">Les premiers instants précieux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Onglets catégories redesignés -->
    <section class="py-8 md:py-16 px-4" ref="specialitiesSection">
      <div class="max-w-6xl mx-auto">
        <div>
          <h3
            class="text-2xl md:text-3xl font-serif text-center mb-8 md:mb-12 text-[#2E2B29] scroll-fade-in"
          >
            Nos Spécialités
          </h3>

          <!-- Navigation responsive -->
          <div
            class="flex flex-wrap justify-center gap-4 md:gap-8 scroll-fade-in"
          >
            <router-link
              to="/mariage"
              class="link-hover-effect px-6 py-3 text-lg font-serif text-[#2E2B29] hover:text-[#C2A191] transition-colors duration-300"
            >
              Mariage
            </router-link>

            <router-link
              to="/naissance"
              class="link-hover-effect px-6 py-3 text-lg font-serif text-[#2E2B29] hover:text-[#C2A191] transition-colors duration-300"
            >
              Naissance
            </router-link>

            <router-link
              to="/famille"
              class="link-hover-effect px-6 py-3 text-lg font-serif text-[#2E2B29] hover:text-[#C2A191] transition-colors duration-300"
            >
              Famille
            </router-link>

            <router-link
              to="/grossesse"
              class="link-hover-effect px-6 py-3 text-lg font-serif text-[#2E2B29] hover:text-[#C2A191] transition-colors duration-300"
            >
              Grossesse
            </router-link>

            <router-link
              to="/portrait"
              class="link-hover-effect px-6 py-3 text-lg font-serif text-[#2E2B29] hover:text-[#C2A191] transition-colors duration-300"
            >
              Portrait
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA finale -->
    <section
      class="py-12 md:py-20 px-4 bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10"
      ref="ctaSection"
    >
      <div class="max-w-4xl mx-auto text-center">
        <div>
          <h3
            class="text-3xl md:text-4xl font-serif mb-6 text-[#2E2B29] scroll-fade-in"
          >
            Prêt à créer vos souvenirs ?
          </h3>
          <p
            class="text-lg md:text-xl text-[#2E2B29]/80 mb-8 leading-relaxed scroll-fade-in"
          >
            Contactez-nous dès aujourd'hui pour discuter de votre projet
            photographique unique
          </p>
          <router-link
            to="/formulaire"
            class="inline-flex items-center px-10 py-4 bg-[#2E2B29] hover:bg-[#2E2B29]/90 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl scroll-fade-in"
          >
            Nous contacter
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Accueil",
  components: { Header, Footer },

  mounted() {
    this.initAnimations();
    this.setupScrollObserver();
  },

  methods: {
    initAnimations() {
      // Animation d'apparition pour les éléments du hero
      setTimeout(() => {
        const heroTitle = document.querySelector(".hero-title");
        const heroLogo = document.querySelector(".hero-logo");
        const heroSubtitle = document.querySelector(".hero-subtitle");
        const heroSlogan = document.querySelector(".hero-slogan");

        if (heroTitle) heroTitle.classList.add("animate-in");
        setTimeout(() => {
          if (heroLogo) heroLogo.classList.add("animate-in");
        }, 300);
        setTimeout(() => {
          if (heroSubtitle) heroSubtitle.classList.add("animate-in");
        }, 600);
        setTimeout(() => {
          if (heroSlogan) heroSlogan.classList.add("animate-in");
        }, 900);
      }, 100);
    },

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
  },
};
</script>

<style scoped>
/* Animations d'apparition initiales */
.hero-title,
.hero-logo,
.hero-subtitle,
.hero-slogan {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.hero-title.animate-in,
.hero-logo.animate-in,
.hero-subtitle.animate-in,
.hero-slogan.animate-in {
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

/* Animation spéciale pour les images du portfolio */
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

/* Animation pour les liens de navigation */
.scroll-fade-in a:nth-child(1) {
  transition-delay: 0.1s;
}

.scroll-fade-in a:nth-child(2) {
  transition-delay: 0.2s;
}

.scroll-fade-in a:nth-child(3) {
  transition-delay: 0.3s;
}

.scroll-fade-in a:nth-child(4) {
  transition-delay: 0.4s;
}

.link-hover-effect {
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

.link-hover-effect::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #c2a191;
  transition: width 0.4s ease;
}

.link-hover-effect:hover::after {
  width: 100%;
}
</style>
