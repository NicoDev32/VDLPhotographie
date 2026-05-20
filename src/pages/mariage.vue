<template>
  <div
    class="mariage bg-gradient-to-br from-[#FFFBF8] via-[#FFF8F0] to-[#F8F4F0] text-[#2E2B29] min-h-screen"
  >
    <!-- Hero Section Magnifique avec animations -->
    <section class="relative py-10 md:py-16 px-4">
      <!-- Decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#C2A191] to-[#D4B5A0] rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-[#E6C7B8] to-[#C2A191] rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <div class="relative max-w-7xl mx-auto text-center">
        <!-- Main title with elegant animation -->
        <div class="mb-4 md:mb-6">
          <h1
            class="text-6xl md:text-8xl lg:text-9xl font-serif tracking-wider mb-6 relative hero-title"
          >
            <span
              class="block bg-gradient-to-r from-[#2E2B29] via-[#C2A191] to-[#2E2B29] bg-clip-text leading-none"
            >
              Mariage
            </span>
            <div
              class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#C2A191] to-transparent"
            ></div>
          </h1>

          <p
            class="text-xl md:text-2xl text-[#C2A191] font-light tracking-[0.3em] uppercase mb-2 hero-subtitle"
          >
            L'Art de Capturer l'Amour
          </p>

          <p
            class="text-lg md:text-xl text-[#2E2B29]/70 font-light italic max-w-3xl mx-auto leading-relaxed hero-description"
          >
            "Chaque regard, chaque sourire, chaque larme de joie... Votre
            journée la plus précieuse mérite d'être immortalisée avec poésie."
          </p>
        </div>
      </div>
    </section>

    <!-- Galerie Compacte et Élégante avec animations -->
    <section class="py-16 px-4" ref="galerieSection">
      <div class="max-w-7xl mx-auto">
        <!-- Title de section -->
        <!-- <div class="text-center mb-16 scroll-fade-in">
          <h2 class="text-4xl md:text-5xl font-serif text-[#2E2B29] mb-4">
            Moments Éternels
          </h2>
          <div class="w-24 h-0.5 bg-[#C2A191] mx-auto mb-6"></div>
          <p class="text-lg text-[#2E2B29]/70 max-w-2xl mx-auto">
            Découvrez l'élégance et l'émotion à travers notre galerie de
            mariages d'exception
          </p>
        </div> -->

        <!-- Grid Compact 4 colonnes avec animations -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <!-- Image 1 -->
          <div
            class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 scroll-fade-in"
          >
            <img
              src="~/assets/MariageCassandra&Quentin.jpg"
              alt="Couple amoureux"
              class="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 class="text-sm font-serif mb-1 text-white">L'Émotion Pure</h3>
              <p class="text-xs opacity-90 text-white">Capturer l'essence</p>
            </div>
          </div>

          <!-- Image 2 -->
          <div
            class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 scroll-fade-in"
          >
            <img
              src="~/assets/mariage2.jpg"
              alt="Bouquet de mariée"
              class="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 class="text-sm font-serif mb-1 text-white">
                Détails Précieux
              </h3>
              <p class="text-xs opacity-90 text-white">Votre histoire</p>
            </div>
          </div>

          <!-- Image 3 -->
          <div
            class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 scroll-fade-in"
          >
            <img
              src="~/assets/mariage6.jpg"
              alt="Photographe femme"
              class="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 class="text-sm font-serif mb-1 text-white">Savoir-Faire</h3>
              <p class="text-xs opacity-90 text-white">Approche artistique</p>
            </div>
          </div>

          <!-- Image 4 -->
          <div
            class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 scroll-fade-in"
          >
            <img
              src="~/assets/mariage5.jpg"
              alt="Couple de dos sur la plage"
              class="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 class="text-sm font-serif mb-1 text-white">Complicité</h3>
              <p class="text-xs opacity-90 text-white">Amour éternel</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Services Mariage avec animations -->
    <section
      class="py-1 px-4 bg-white/50 backdrop-blur-sm"
      ref="collectionsSection"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 scroll-fade-in">
          <h2 class="text-4xl md:text-5xl font-serif text-[#2E2B29] mb-4">
            Collections Mariage
          </h2>
          <div class="w-24 h-0.5 bg-[#C2A191] mx-auto mb-6"></div>
          <p class="text-lg text-[#2E2B29]/70 max-w-2xl mx-auto">
            Des formules sur-mesure pour que votre jour J soit parfaitement
            raconté !
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Collection AFFETTO -->
          <div
            class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden scroll-fade-in"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#C2A191]/5 to-[#E6C7B8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div class="relative z-10">
              <div class="text-center mb-8">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-[#C2A191] to-[#E6C7B8] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span class="text-white text-2xl">💕</span>
                </div>
                <h3 class="text-2xl font-serif text-[#2E2B29] mb-2">
                  Collection AFFETTO
                </h3>
                <p class="text-sm text-[#C2A191] font-medium">L'Essentiel</p>
              </div>

              <div class="space-y-3 mb-8">
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >Rendez-vous préalable d'organisation</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >Préparatifs des mariés</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >Cérémonie civile et/ou religieuse</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]">Photos de couple</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >L'ensemble des photos HD retouchées après tri remises sur
                    une clé USB</span
                  >
                </div>
              </div>

              <div class="text-center">
                <!-- <div class="text-3xl font-bold text-[#C2A191] mb-2">
                  À partir de
                </div> -->
                <div class="text-2xl font-serif text-[#2E2B29]">
                  À partir de 795€
                </div>
              </div>
            </div>
          </div>

          <!-- Collection TENEREZZA -->
          <div
            class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border-2 border-[#C2A191] scroll-fade-in"
          >
            <div
              class="absolute top-0 right-0 mt-2 bg-[#C2A191] px-4 py-1 rounded-bl-xl text-xs font-semibold tracking-wider"
            >
              POPULAIRE
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#C2A191]/10 to-[#E6C7B8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div class="relative z-10">
              <div class="text-center mb-8">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-[#C2A191] to-[#E6C7B8] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span class="text-white text-2xl">💖</span>
                </div>
                <h3 class="text-2xl font-serif text-[#2E2B29] mb-2">
                  Collection TENEREZZA
                </h3>
                <p class="text-sm text-[#C2A191] font-medium">Le Complet</p>
              </div>

              <div class="space-y-3 mb-8">
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >Tout de la collection AFFETTO</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]">Vin d'honneur</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]">Photos de groupe</span>
                </div>
                <!-- <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]">Reportage cocktail</span>
                </div> -->
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >L'ensemble des photos HD retouchées après tri remises sur
                    une clé USB</span
                  >
                </div>
              </div>

              <div class="text-center">
                <!-- <div class="text-3xl font-bold text-[#C2A191] mb-2">
                  À partir de
                </div> -->
                <div class="text-2xl font-serif text-[#2E2B29]">
                  À partir de 1195€
                </div>
              </div>
            </div>
          </div>

          <!-- Collection AMORE -->
          <div
            class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden scroll-fade-in"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#C2A191]/5 to-[#E6C7B8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div class="relative z-10">
              <div class="text-center mb-8">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-[#C2A191] to-[#E6C7B8] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span class="text-white text-2xl">💝</span>
                </div>
                <h3 class="text-2xl font-serif text-[#2E2B29] mb-2">
                  Collection AMORE
                </h3>
                <p class="text-sm text-[#C2A191] font-medium">L'Intégral</p>
              </div>

              <div class="space-y-3 mb-8">
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >Tout de la collection TENEREZZA</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >Soirée jusqu'à la pièce montée</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]">Première danse</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >L'ensemble des photos HD retouchées après tri remises sur
                    une clé USB</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-[#C2A191]">✓</span>
                  <span class="text-sm text-[#2E2B29]"
                    >Sélection de 30 photos pour votre album, à partir des
                    images reçues</span
                  >
                </div>
              </div>

              <div class="text-center">
                <!-- <div class="text-3xl font-bold text-[#C2A191] mb-2">
                  À partir de
                </div> -->
                <div class="text-2xl font-serif text-[#2E2B29]">
                  À partir de 1395€
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Note déplacement -->
    <div class="px-4 py-8 bg-[#FAF5F0]">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-start gap-4 bg-white border border-[#C2A191]/30 rounded-2xl px-6 py-5 shadow-sm scroll-fade-in">
          <div class="shrink-0 w-10 h-10 rounded-full bg-[#C2A191]/15 flex items-center justify-center mt-0.5">
            <svg class="w-5 h-5 text-[#C2A191]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div>
            <p class="text-sm font-semibold text-[#2E2B29] mb-1 tracking-wide uppercase">Frais de déplacement</p>
            <p class="text-sm text-[#2E2B29]/70 leading-relaxed">
              Inclus dans tous les forfaits jusqu'à 40 km du Home-Studio (Clouange). Au-delà, des frais supplémentaires pourront vous être communiqués.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Final -->
    <section class="relative overflow-hidden py-24 px-4 bg-[#FFFBF8]" ref="ctaSection">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#C2A191] rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-[#E6C7B8] rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto text-center scroll-fade-in">
        <p class="text-sm tracking-[0.35em] uppercase text-[#C2A191] font-semibold mb-6">Votre histoire commence ici</p>

        <h2 class="text-3xl md:text-5xl font-serif text-[#2E2B29] mb-4 leading-tight">
          Votre Jour J mérite<br/>
          <span class="text-[#C2A191]">l'Excellence</span>
        </h2>

        <div class="flex items-center justify-center gap-3 my-6">
          <div class="w-16 h-px bg-[#C2A191]"></div>
          <div class="w-2 h-2 rounded-full bg-[#C2A191]"></div>
          <div class="w-16 h-px bg-[#C2A191]"></div>
        </div>

        <p class="text-base md:text-lg text-[#2E2B29]/60 mb-10 leading-relaxed font-light">
          Ensemble, créons des souvenirs qui traverseront les générations
        </p>

        <nuxt-link
          to="/formulaire"
          class="inline-flex items-center px-10 py-4 bg-[#2E2B29] hover:bg-[#2E2B29]/85 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Me contacter
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Photographe Mariage Clouange, Metz, Thionville, Moselle',
      meta: [
        { hid: 'description', name: 'description', content: 'Photographe de mariage a Clouange, Metz, Thionville et Luxembourg. Immortalisez votre jour J avec VDL Photographe. Collections des 795 euros. Devis gratuit.' },
        { hid: 'keywords', name: 'keywords', content: 'photographe mariage Clouange, photographe mariage Metz, photographe mariage Thionville, photographe mariage Luxembourg, mariage Moselle, VDL Photographe' },
        { hid: 'og:title', property: 'og:title', content: 'Photographe Mariage Clouange, Metz, Thionville, Moselle | VDL Photographe' },
        { hid: 'og:description', property: 'og:description', content: 'Photographe de mariage a Clouange, Metz, Thionville et Luxembourg. Immortalisez votre jour J avec VDL Photographe. Collections des 795 euros. Devis gratuit.' },
        { hid: 'og:url', property: 'og:url', content: 'https://vdlphotographe.fr/mariage' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://vdlphotographe.fr/mariage' },
      ],
    }
  },


  name: "Mariage",
  
  mounted() {
    // ✨ Initialiser les animations
    this.initAnimations();
    this.setupScrollObserver();
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
        }, 400);
        setTimeout(() => {
          if (heroDescription) heroDescription.classList.add("animate-in");
        }, 800);
      }, 200);
    },

    // 🌊 Observer pour les animations au scroll
    setupScrollObserver() {
      const options = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
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
/* Animations d'apparition initiales pour le hero */
.hero-title,
.hero-subtitle,
.hero-description {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease-out;
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
  transform: translateY(30px);
  transition: opacity 0.9s ease-out, transform 0.9s ease-out;
}

.scroll-fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Animation décalée pour les éléments de galerie */
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

/* Animation spéciale pour les collections */
.grid .scroll-fade-in:nth-child(1) {
  transition-delay: 0.1s;
}

.grid .scroll-fade-in:nth-child(2) {
  transition-delay: 0.3s;
}

.grid .scroll-fade-in:nth-child(3) {
  transition-delay: 0.5s;
}

/* Animation plus lente pour le hero mariage */
.hero-title {
  transition-duration: 1.2s;
}

.hero-subtitle {
  transition-duration: 1s;
}

.hero-description {
  transition-duration: 0.8s;
}
</style>
