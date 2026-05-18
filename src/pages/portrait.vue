<template>
  <div class="portrait bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <!-- Hero Section avec animations -->
    <section class="text-center py-8 md:py-12 px-4">
      <h1
        class="text-4xl md:text-6xl font-serif tracking-wide text-[#2E2B29] mb-4 hero-title"
      >
        Portrait
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
          Le portrait, c'est cette image qu'on a envie d'afficher fièrement. Que
          ce soit pour capturer l'innocence d'un enfant, la complicité d'un
          regard, ou révéler la force et la beauté d'une personne, tout
          simplement. <br />
          J'ai une tendresse particulière pour les portraits féminins, pensés
          comme une parenthèse hors du temps. Une façon de se reconnecter à soi,
          de raviver une confiance oubliée ou simplement de se sentir libre,
          belle, et pleinement soi-même. <br />
          Et si j'accorde une place toute spéciale à la femme, j'affectionne
          tout autant photographier les enfants, avec leur spontanéité
          désarmante, et les hommes, dans toute leur authenticité.
        </p>
      </div>
    </section>

    <!-- Galerie photos responsive avec animations -->
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
              alt="Séance photo portrait par VDL Photographe à Clouange, Moselle"
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
              :alt="`Photo portrait ${index + 1}`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section philosophie portrait avec animations -->
    <section class="py-8 md:py-12 px-4" ref="philosophieSection">
      <div class="max-w-5xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 scroll-fade-in">
          <h2
            class="text-3xl md:text-4xl font-serif text-center mb-8 text-[#2E2B29]"
          >
            Votre Portrait Unique
          </h2>

          <div class="prose prose-lg max-w-none text-center">
            <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
              Ce moment est fait pour se lâcher, exprimer son monde et le
              partager (ou pas) avec d'autres.
              <strong>VOTRE PORTRAIT</strong> quoi.
            </p>

            <p class="text-lg leading-relaxed mb-8 text-[#2E2B29]">
              Vous avez une idée bien précise de votre portrait ?
              <nuxt-link
                to="/formulaire"
                class="text-[#C2A191] hover:text-[#ad8e80] font-semibold underline transition-colors duration-300"
              >
                Écrivez-moi
              </nuxt-link>
              et parlons de vos envies.
            </p>
          </div>

          <!-- Section avantages portrait avec animations -->
          <div class="grid md:grid-cols-3 gap-8 mt-12">
            <div class="text-center scroll-fade-in">
              <div
                class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-2xl">📸</span>
              </div>
              <h3 class="font-semibold text-[#2E2B29] mb-2">
                Expression Authentique
              </h3>
              <p class="text-[#2E2B29] text-sm">
                Révélez votre personnalité unique et votre beauté naturelle
              </p>
            </div>

            <div class="text-center scroll-fade-in">
              <div
                class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-2xl">✨</span>
              </div>
              <h3 class="font-semibold text-[#2E2B29] mb-2">
                Style Personnalisé
              </h3>
              <p class="text-[#2E2B29] text-sm">
                Adapté à vos envies, que ce soit pour les réseaux sociaux ou la
                maison
              </p>
            </div>

            <div class="text-center scroll-fade-in">
              <div
                class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-2xl">🎨</span>
              </div>
              <h3 class="font-semibold text-[#2E2B29] mb-2">
                Créativité Libre
              </h3>
              <p class="text-[#2E2B29] text-sm">
                Studio ou extérieur, classique ou original, tout est possible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section des collections avec animations -->
    <section
      class="py-12 md:py-16 px-4 bg-gradient-to-br from-[#C2A191]/5 to-[#ad8e80]/5"
      ref="collectionsSection"
    >
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2E2B29] scroll-fade-in"
        >
          Collections Portrait
        </h2>

        <div
          class="grid gap-8 max-w-4xl mx-auto justify-center lg:flex lg:justify-center"
        >
          <!-- Collection RAGGAZZA / RAGAZZO -->
          <!-- <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-fade-in"
          >
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection RAGGAZZA / RAGAZZO
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio ou en extérieur d'1h00
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">✨</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Supplément de 45€ si studio + extérieur (1h supplémentaire)
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📱</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    8 fichiers numériques Haute définition
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">75€</span>
              </div>
            </div>
          </div> -->

          <!-- Collection DIPINTO -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden scroll-fade-in"
          >
            <!-- Badge recommandé -->
            <div
              class="absolute top-4 right-4 bg-[#C2A191] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              RECOMMANDÉ
            </div>

            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection DIPINTO
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio ou en extérieur de 45 minutes
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">✨</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Supplément de 25€ si studio + extérieur (1h supplémentaire)
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📱</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    10 fichiers numériques Haute définition
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">95€</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Informations supplémentaires avec animations -->
        <div class="mt-12 bg-white rounded-2xl shadow-lg p-8 scroll-fade-in">
          <h3 class="text-2xl font-serif text-center mb-6 text-[#2E2B29]">
            Options de Séance
          </h3>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="text-center scroll-fade-in">
              <div
                class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-2xl">🏠</span>
              </div>
              <h4 class="font-semibold text-[#2E2B29] mb-2">Studio</h4>
              <p class="text-[#2E2B29] text-sm">
                Éclairage professionnel, décors variés, conditions contrôlées
              </p>
            </div>

            <div class="text-center scroll-fade-in">
              <div
                class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-2xl">🌿</span>
              </div>
              <h4 class="font-semibold text-[#2E2B29] mb-2">Extérieur</h4>
              <p class="text-[#2E2B29] text-sm">
                Lumière naturelle, décors authentiques, liberté de mouvement
              </p>
            </div>
          </div>

          <!-- <div class="mt-8 p-6 bg-[#C2A191]/10 rounded-lg scroll-fade-in">
            <h4 class="font-semibold text-[#2E2B29] mb-2 text-center">
              💡 Option Combinée
            </h4>
            <p class="text-[#2E2B29] text-sm text-center">
              Vous voulez le meilleur des deux mondes ? Combinez studio ET
              extérieur pour seulement
              <span class="font-semibold text-[#C2A191]">+45€</span>
              supplémentaires !
            </p>
          </div> -->
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
          <nuxt-link
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
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Photographe Portrait Professionnel Clouange, Moselle',
      meta: [
        { hid: 'description', name: 'description', content: 'Seances portrait professionnel et artistique a Clouange, Moselle. Femmes, enfants, hommes : revelez votre personnalite avec VDL Photographe. Des 95 euros.' },
        { hid: 'keywords', name: 'keywords', content: 'photographe portrait Clouange, portrait professionnel Moselle, photographe portrait Metz, portrait artistique Thionville, VDL Photographe' },
        { hid: 'og:title', property: 'og:title', content: 'Photographe Portrait Professionnel Clouange, Moselle | VDL Photographe' },
        { hid: 'og:description', property: 'og:description', content: 'Seances portrait professionnel et artistique a Clouange, Moselle. Femmes, enfants, hommes : revelez votre personnalite avec VDL Photographe. Des 95 euros.' },
        { hid: 'og:url', property: 'og:url', content: 'https://vdlphotographe.fr/portrait' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://vdlphotographe.fr/portrait' },
      ],
    }
  },


  name: "Portrait",
    data() {
    return {
      photos: [
        require("../assets/portrait_1.jpg"),
        require("../assets/portrait_2.jpg"),
        require("../assets/portrait_3.jpg"),
        require("../assets/portrait_4.jpg"),
        require("../assets/portrait_5.jpg"),
        require("../assets/portrait_6.jpg"),
       // require("../assets/portrait_7.jpg"),
       // require("../assets/portrait_8.jpg"),
       // require("../assets/portrait_9.jpg"),
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

/* Animation décalée pour les éléments de grille */
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

.scroll-fade-in:nth-child(5) {
  transition-delay: 0.5s;
}

.scroll-fade-in:nth-child(6) {
  transition-delay: 0.6s;
}

/* Animation pour les collections */
.grid .scroll-fade-in:nth-child(1) {
  transition-delay: 0.1s;
}

.grid .scroll-fade-in:nth-child(2) {
  transition-delay: 0.3s;
}

/* Animations pour la section philosophie */
.grid .scroll-fade-in:nth-child(1) {
  transition-delay: 0.1s;
}

.grid .scroll-fade-in:nth-child(2) {
  transition-delay: 0.2s;
}

.grid .scroll-fade-in:nth-child(3) {
  transition-delay: 0.3s;
}
</style>
