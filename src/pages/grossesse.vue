<template>
  <div class="grossesse bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <!-- Hero Section avec animations -->
    <section class="text-center py-8 md:py-12 px-4">
      <h1
        class="text-4xl md:text-6xl font-serif tracking-wide text-[#2E2B29] mb-4 hero-title"
      >
        Grossesse
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
              alt="Séance photo grossesse par VDL Photographe à Clouange, Moselle"
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
              :alt="`Photo grossesse ${index + 1}`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section guide pratique -->
    <section class="py-8 md:py-12 px-4" ref="guideSection">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 scroll-fade-in">
          <h2
            class="text-3xl md:text-4xl font-serif text-center mb-8 text-[#2E2B29]"
          >
            Guide de votre séance grossesse
          </h2>

          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Préparation -->
            <div class="scroll-fade-in">
              <h3
                class="text-2xl font-serif text-[#C2A191] mb-6 flex items-center"
              >
                <span class="mr-3">📅</span>
                Préparation de votre séance
              </h3>

              <div class="prose prose-lg">
                <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
                  On prépare votre séance tout en douceur Pour réserver votre
                  séance, rien de plus simple : direction la page
                  <nuxt-link
                    to="/formulaire"
                    class="text-[#C2A191] hover:text-[#ad8e80] font-semibold underline transition-colors duration-300"
                  >
                    contact </nuxt-link
                  >. Remplissez le formulaire en choisissant la collection qui
                  vous fait envie. Idéalement, pour une séance grossesse, le 7e
                  mois est parfait… alors n'attendez pas trop pour bloquer la
                  date. Avant notre rendez-vous, on prendra un petit moment pour
                  échanger par téléphone : on discutera de vos envies, de ce que
                  vous adorez (et de ce que vous aimez moins) afin de créer une
                  séance sur-mesure et surtout 100% vous. Et pour que tout se
                  passe dans la bonne humeur : un petit mot magique… la
                  ponctualité.
                </p>

                <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
                  Pendant la séance : lâcher-prise & bonne humeur ! Le plus
                  important ? Soyez vous-même. Pas besoin de savoir poser, je
                  suis là pour vous guider tout au long de la séance. Faites-moi
                  confiance! Et en extérieur, c'est possible aussi ! Envie d'un
                  cadre naturel pour vos photos ? C'est tout à fait possible !
                  Je vous propose un lieu charmant à proximité du studio, et
                  pour cette parenthèse en plein air, un supplément de 25€ sera
                  appliqué pour une séance d'1 heure en extérieur.
                </p>

                <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
                  Après la séance, vous recevrez un lien vers une galerie privée
                  sur mon site avec une sélection de photos brutes. Prenez le
                  temps de faire votre sélection, tout en gardant en tête un
                  petit délai idéal de 7 à 10 jours - cela me permet de
                  finaliser vos retouches au plus vite et de vous livrer vos
                  souvenirs sans tarder. Une fois les retouches terminées, vos
                  jolies photos vous seront envoyées via SWISSTransfer.
                </p>
              </div>
            </div>

            <!-- Tenues à prévoir -->
            <div class="scroll-fade-in">
              <h3
                class="text-2xl font-serif text-[#C2A191] mb-6 flex items-center"
              >
                <span class="mr-3">👗</span>
                Côté tenues : simples, jolies et qui vous ressemblent !
              </h3>

              <div class="space-y-4">
                <div class="bg-[#FFFBF8] rounded-lg p-4">
                  <h4 class="font-semibold text-[#2E2B29] mb-3">
                    Pour Maman :
                  </h4>
                  <ul class="space-y-2 text-[#2E2B29]">
                    <li class="flex items-center">
                      <span class="text-[#C2A191] mr-2">✔️</span> Débardeur
                      blanc et/ou noir
                    </li>
                    <li class="flex items-center">
                      <span class="text-[#C2A191] mr-2">✔️</span> Un jean (celui
                      qui ne ferme plus)
                    </li>
                    <li class="flex items-center">
                      <span class="text-[#C2A191] mr-2">✔️</span> Chemisier
                      blanc ou noir
                    </li>
                    <li class="flex items-center">
                      <span class="text-[#C2A191] mr-2">✔️</span> Des
                      sous-vêtements (blancs, noirs ou couleur peau)
                    </li>
                    <li class="flex items-center">
                      <span class="text-[#C2A191] mr-2">✔️</span> Un ou deux
                      accessoires bébé si vous le souhaitez (chaussons, doudou…)
                    </li>
                    <li class="flex items-center">
                      <span class="text-[#C2A191] mr-2">✔️</span> Une tenue que
                      vous adorez porter
                    </li>
                  </ul>
                </div>

                <div class="bg-[#FFFBF8] rounded-lg p-4">
                  <h4 class="font-semibold text-[#2E2B29] mb-3">
                    Pour Papa & les enfants :
                  </h4>
                  <p class="text-[#2E2B29]">
                    Petit + : Je mets également à votre disposition des tenues,
                    voilages et accessoires spécialement pensés pour sublimer
                    les courbes et les émotions. Pas besoin de prévoir une
                    garde-robe complète, on compose ensemble ! Ce sont
                    simplement des petits conseils pour vous guider - si vous
                    n'avez pas tout, pas de panique, on s'adapte et tout se
                    passera à merveille, promis !
                  </p>
                  <!-- Ligne décorative de séparation -->
                  <div
                    class="flex justify-center items-center my-6 animate-fade-in-slow"
                  >
                    <span class="text-2xl mr-2">👨‍👩‍👧‍👦</span>
                    <div class="w-20 h-0.5 bg-[#C2A191] rounded-full"></div>
                    <span class="text-2xl ml-2">👕</span>
                  </div>
                  <p class="text-[#2E2B29]">
                    Un t-shirt ou une chemise blanche ou noire, un jean… et
                    l'idée, c'est que tout le monde soit raccord. Pour les
                    enfants, des tenues assorties suffisent à faire des
                    merveilles 😊.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section déroulement -->
    <section
      class="py-8 md:py-12 px-4 bg-gradient-to-br from-[#C2A191]/5 to-[#ad8e80]/5"
      ref="deroulementSection"
    >
      <div class="max-w-5xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 scroll-fade-in">
          <h2
            class="text-3xl md:text-4xl font-serif text-center mb-8 text-[#2E2B29]"
          >
            Déroulement & Conseils
          </h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-6 scroll-fade-in">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">📸</span>
                <div>
                  <h3 class="font-semibold text-[#C2A191] mb-2">
                    Pendant la séance
                  </h3>
                  <p class="text-[#2E2B29] leading-relaxed">
                    Soyez vous-même, laissez-moi vous guider lors de la séance,
                    faites-moi confiance 😉.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <span class="text-3xl">🌿</span>
                <div>
                  <h3 class="font-semibold text-[#C2A191] mb-2">
                    Séance extérieur
                  </h3>
                  <p class="text-[#2E2B29] leading-relaxed">
                    Si vous souhaitez réaliser des clichés à l'extérieur
                    également c'est tout à fait possible. Le lieu sera choisi
                    par mes soins aux alentours du studio et un supplément de
                    25€ sera facturé pour 1 heure.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6 scroll-fade-in">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">💻</span>
                <div>
                  <h3 class="font-semibold text-[#C2A191] mb-2">
                    Sélection des photos
                  </h3>
                  <p class="text-[#2E2B29] leading-relaxed">
                    Une sélection de photos brutes vous sera transmise via mon
                    site internet. Après votre sélection je procéderai aux
                    différentes retouches.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <span class="text-3xl">📤</span>
                <div>
                  <h3 class="font-semibold text-[#C2A191] mb-2">Livraison</h3>
                  <p class="text-[#2E2B29] leading-relaxed">
                    Une fois les photos retouchées, elles vous seront transmises
                    via WETRANSFER. Photos supplémentaires : 12€ la photo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section des collections -->
    <section class="py-12 md:py-16 px-4" ref="collectionsSection">
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2E2B29] scroll-fade-in"
        >
          Collections Grossesse
        </h2>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Collection BELLEZZA -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-fade-in"
          >
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection BELLEZZA
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio d'1h00 / Maman seule
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
                <span class="text-4xl font-bold text-[#C2A191]">195€</span>
              </div>
            </div>
          </div>

          <!-- Collection MERAVIGLIA -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-fade-in"
          >
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection MERAVIGLIA
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio de 1h30 / Maman avec Papa et Frère ou sœur
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">👗</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Prêt de tenues, voiles et accessoires
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📱</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    15 fichiers numériques Haute définition
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">250€</span>
              </div>
            </div>
          </div>

          <!-- Collection ELEGANZA -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden scroll-fade-in"
          >
            <!-- Badge populaire -->
            <div
              class="absolute top-4 right-4 bg-[#C2A191] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              PREMIUM
            </div>

            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection ELEGANZA
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio de 2h00 / Maman seule, Papa et Frère ou
                    Sœur
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">💄</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    1h de mise en beauté par une maquilleuse diplômée
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">👗</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Prêt de tenues, voiles et accessoires
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📱</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    20 fichiers numériques Haute définition
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">325€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
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
          <p class="text-lg mb-8 opacity-90">
            Réservez dès maintenant votre séance grossesse pour créer des
            souvenirs inoubliables !
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

// Ajoutez ces méthodes à votre export default dans Grossesse.vue

export default {
  head() {
    return {
      title: 'Photographe Grossesse Maternite Clouange, Moselle',
      meta: [
        { hid: 'description', name: 'description', content: 'Seance photo grossesse a Clouange et Moselle. Capturez ce moment unique avec douceur et poesie. Collections maternite des 195 euros. Photographe Metz, Thionville, Hayange.' },
        { hid: 'keywords', name: 'keywords', content: 'photographe grossesse Clouange, seance maternite Moselle, photographe grossesse Metz, femme enceinte Thionville, VDL Photographe' },
        { hid: 'og:title', property: 'og:title', content: 'Photographe Grossesse Maternite Clouange, Moselle | VDL Photographe' },
        { hid: 'og:description', property: 'og:description', content: 'Seance photo grossesse a Clouange et Moselle. Capturez ce moment unique avec douceur et poesie. Collections maternite des 195 euros. Photographe Metz, Thionville, Hayange.' },
        { hid: 'og:url', property: 'og:url', content: 'https://vdlphotographe.fr/grossesse' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://vdlphotographe.fr/grossesse' },
      ],
    }
  },


  name: "Grossesse",
    data() {
    return {
      photos: [
        require("../assets/GrossesseLauriane8.jpg"),
        require("../assets/grossesse_2.jpg"),
        require("../assets/grossesse_3.jpg"),
        require("../assets/grossesse_4.jpg"),
        require("../assets/grossesse_5.jpg"),
        require("../assets/grossesse_6.jpg"),
      //  require("../assets/grossesse_7.jpg"),
      //  require("../assets/grossesse_8.jpg"),
      //  require("../assets/grossesse_9.jpg"),
      ],
      activePhoto: 0,
    };
  },

  mounted() {
    // ✨ Ajouter les animations
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

    // 📸 Méthodes du carrousel (existantes)
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
