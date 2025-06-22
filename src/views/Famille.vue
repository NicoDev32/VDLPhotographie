<template>
  <div class="famille bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <Header />

    <!-- Hero Section -->
    <section class="text-center py-8 md:py-12 px-4">
      <h1
        class="text-4xl md:text-6xl font-serif tracking-wide text-[#2E2B29] mb-4"
      >
        Famille
      </h1>
      <p
        class="text-lg md:text-xl tracking-[0.3em] font-semibold text-[#C2A191] uppercase"
      >
        Moselle & Alentours
      </p>

      <div class="max-w-4xl mx-auto mt-8">
        <p
          class="text-lg md:text-xl text-center leading-relaxed text-[#2E2B29]/80"
        >
          Oh l'amour ❤️! qu'il soit pour sa moitié, sa maman ou ses enfants ou
          encore pour toute la famille. Capturer des clichés est toujours un
          plaisir. Ça sent la joie, le bonheur, la douceur, l'amour bref tout un
          mélange d'émotion.
        </p>
      </div>
    </section>

    <!-- Galerie photos responsive -->
    <section class="py-8 md:py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Carrousel pour desktop -->
        <div class="hidden md:block bg-gray-50 rounded-2xl p-6 mb-8">
          <div
            class="relative h-96 lg:h-[500px] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              :src="photos[activePhoto]"
              alt="Photo principale"
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
            class="group relative overflow-hidden rounded-xl aspect-square shadow-lg"
          >
            <img
              :src="photo"
              :alt="`Photo famille ${index + 1}`"
              class="w-full h-full object-cover rounded-xl border-4 border-white"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section philosophie et approche -->
    <section class="py-8 md:py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2
            class="text-3xl md:text-4xl font-serif text-center mb-8 text-[#2E2B29]"
          >
            Notre Approche Famille
          </h2>

          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Philosophie -->
            <div>
              <h3
                class="text-2xl font-serif text-[#C2A191] mb-6 flex items-center"
              >
                <span class="mr-3">🌟</span>
                Liberté et Naturel
              </h3>

              <div class="prose prose-lg">
                <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
                  J'aime profiter de l'extérieur pour photographier les
                  amoureux, les enfants ou toute la famille. Vous êtes libres de
                  vos mouvements avec la possibilité d'utiliser l'espace dont
                  vous avez envie et moi je suis là (toujours) pour
                  photographier ce sourire, ce fou rire, ce baiser ou ce regard
                  si particulier.
                </p>

                <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
                  Vous êtes libre et donc libre de choisir la séance qui vous
                  correspond le plus. En intérieur ou en extérieur ou même les
                  deux, les seules choses sont de : se faire plaisir et me faire
                  confiance.
                </p>
              </div>
            </div>

            <!-- Options et tarifs -->
            <div>
              <h3
                class="text-2xl font-serif text-[#C2A191] mb-6 flex items-center"
              >
                <span class="mr-3">📍</span>
                Options de Séance
              </h3>

              <div class="space-y-6">
                <div class="bg-[#FFFBF8] rounded-lg p-6">
                  <h4
                    class="font-semibold text-[#2E2B29] mb-3 flex items-center"
                  >
                    <span class="text-[#C2A191] mr-2">🏠</span>
                    Studio
                  </h4>
                  <p class="text-[#2E2B29] mb-3">
                    Séances en studio avec matériel professionnel et décors
                    variés.
                  </p>
                </div>

                <div class="bg-[#FFFBF8] rounded-lg p-6">
                  <h4
                    class="font-semibold text-[#2E2B29] mb-3 flex items-center"
                  >
                    <span class="text-[#C2A191] mr-2">🌳</span>
                    Extérieur
                  </h4>
                  <p class="text-[#2E2B29] mb-3">
                    Séances en extérieur dans des lieux qui vous sont chers.
                  </p>
                </div>

                <div class="bg-[#FFFBF8] rounded-lg p-6">
                  <h4
                    class="font-semibold text-[#2E2B29] mb-3 flex items-center"
                  >
                    <span class="text-[#C2A191] mr-2">✨</span>
                    Combiné Studio + Extérieur
                  </h4>
                  <p class="text-[#2E2B29] mb-3">
                    Le meilleur des deux mondes !
                    <span class="font-semibold text-[#C2A191]"
                      >Supplément : +45€</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to action -->
          <div class="mt-12 text-center">
            <p class="text-lg text-[#2E2B29] mb-6">
              Si vous souhaitez réaliser des clichés à l'extérieur et qu'un
              endroit vous est cher, n'hésitez pas à me le notifier dans la
              partie commentaire sur ma page
              <router-link
                to="/formulaire"
                class="text-[#C2A191] hover:text-[#ad8e80] font-semibold underline transition-colors duration-300"
              >
                contact </router-link
              >.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section des collections -->
    <section
      class="py-12 md:py-16 px-4 bg-gradient-to-br from-[#C2A191]/5 to-[#ad8e80]/5"
    >
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2E2B29]"
        >
          Nos Collections Famille
        </h2>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Collection DOLCEZZA -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection DOLCEZZA
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance Couple en extérieur d'1h30
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📱</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    8 fichiers numériques HD
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">85€</span>
              </div>
            </div>
          </div>

          <!-- Collection MAMMA -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection MAMMA
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance Maman et moi en studio ou en extérieur d'1h30 (Max 2
                    enfants)
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📱</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    12 fichiers numériques HD
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">115€</span>
              </div>
            </div>
          </div>

          <!-- Collection FAMIGLIA -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <!-- Badge populaire -->
            <div
              class="absolute top-4 right-4 bg-[#C2A191] text-white px-3 py-1 rounded-full text-xs font-semibold"
            >
              POPULAIRE
            </div>

            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection FAMIGLIA
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance famille en studio ou en extérieur de 2h00 (parents et
                    2 enfants maximum)
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">👥</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Supplément de 10€ par personne supplémentaire
                  </p>
                </div>

                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📱</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    15 fichiers numériques HD
                  </p>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <span class="text-4xl font-bold text-[#C2A191]">135€</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Informations supplémentaires -->
        <div class="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 class="text-2xl font-serif text-center mb-6 text-[#2E2B29]">
            Informations importantes
          </h3>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="text-center">
              <div
                class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-2xl">🏠</span>
              </div>
              <h4 class="font-semibold text-[#2E2B29] mb-2">Studio</h4>
              <p class="text-[#2E2B29] text-sm">
                Séances en studio avec décors professionnels et éclairage adapté
              </p>
            </div>

            <div class="text-center">
              <div
                class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-2xl">🌳</span>
              </div>
              <h4 class="font-semibold text-[#2E2B29] mb-2">Extérieur</h4>
              <p class="text-[#2E2B29] text-sm">
                Séances en extérieur dans des lieux naturels ou qui vous sont
                chers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="bg-gradient-to-r from-[#C2A191] to-[#ad8e80] rounded-2xl p-8 md:p-12"
        >
          <h3 class="text-2xl md:text-3xl font-serif mb-4">
            Créons ensemble vos plus beaux souvenirs de famille
          </h3>
          <p class="text-lg mb-8 opacity-90">
            Réservez dès maintenant votre séance famille personnalisée
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
  name: "Famille",
  components: { Footer, Header },
  data() {
    return {
      photos: [
        require("../assets/famille_1.jpg"),
        require("../assets/famille_2.jpg"),
        require("../assets/famille_3.jpg"),
        require("../assets/famille_4.jpg"),
        require("../assets/famille_5.jpg"),
        require("../assets/famille_6.jpg"),
        require("../assets/famille_7.jpg"),
        require("../assets/famille_8.jpg"),
        require("../assets/famille_9.jpg"),
      ],
      activePhoto: 0,
    };
  },
  mounted() {
    document.addEventListener("keydown", (event) => {
      if (event.which == 37) this.previousPhoto();
      if (event.which == 39) this.nextPhoto();
    });
  },
  methods: {
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
/* Tailwind CSS gère tout, pas de styles supplémentaires ici */
</style>
