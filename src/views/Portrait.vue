<template>
  <div class="portrait bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <Header />

    <!-- Hero Section -->
    <section class="text-center py-8 md:py-12 px-4">
      <h1 class="text-4xl md:text-6xl font-serif tracking-wide text-[#2E2B29] mb-4">
        Portrait
      </h1>
      <p class="text-lg md:text-xl tracking-[0.3em] font-semibold text-[#C2A191] uppercase">
        Moselle & Alentours
      </p>
      
      <div class="max-w-4xl mx-auto mt-8">
        <p class="text-lg md:text-xl text-center leading-relaxed text-[#2E2B29]/80">
          Le portrait, cette photo que vous voulez mettre sur votre profil insta
          ou facebook, dans votre chambre ou dans le salon parce que vous avez le
          plus beau de tous les enfants, un vrai petit mannequin.
        </p>
      </div>
    </section>

    <!-- Galerie photos responsive -->
    <section class="py-8 md:py-12 px-4">
      <div class="max-w-7xl mx-auto">
        
        <!-- Carrousel pour desktop -->
        <div class="hidden md:block bg-gray-50 rounded-2xl p-6 mb-8">
          <div 
            class="relative h-96 lg:h-[500px] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden shadow-lg"
            :style="'background-image: url(' + photos[activePhoto] + ');'"
          >
            <!-- Boutons de navigation -->
            <button
              @click="previousPhoto()"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button
              @click="nextPhoto()"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
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
              class="w-20 h-20 bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
              :alt="`Photo portrait ${index + 1}`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section philosophie portrait -->
    <section class="py-8 md:py-12 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 class="text-3xl md:text-4xl font-serif text-center mb-8 text-[#2E2B29]">
            Votre Portrait Unique
          </h2>
          
          <div class="prose prose-lg max-w-none text-center">
            <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
              Ce moment est fait pour se lâcher, exprimer son monde et le partager (ou pas) avec
              d'autres. <strong>VOTRE PORTRAIT</strong> quoi.
            </p>

            <p class="text-lg leading-relaxed mb-8 text-[#2E2B29]">
              Vous avez une idée bien précise de votre portrait ? 
              <router-link 
                to="/formulaire" 
                class="text-[#C2A191] hover:text-[#ad8e80] font-semibold underline transition-colors duration-300"
              >
                Écrivez-moi
              </router-link> 
              et parlons de vos envies.
            </p>
          </div>

          <!-- Section avantages portrait -->
          <div class="grid md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📸</span>
              </div>
              <h3 class="font-semibold text-[#2E2B29] mb-2">Expression Authentique</h3>
              <p class="text-[#2E2B29] text-sm">
                Révélez votre personnalité unique et votre beauté naturelle
              </p>
            </div>
            
            <div class="text-center">
              <div class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">✨</span>
              </div>
              <h3 class="font-semibold text-[#2E2B29] mb-2">Style Personnalisé</h3>
              <p class="text-[#2E2B29] text-sm">
                Adapté à vos envies, que ce soit pour les réseaux sociaux ou la maison
              </p>
            </div>
            
            <div class="text-center">
              <div class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🎨</span>
              </div>
              <h3 class="font-semibold text-[#2E2B29] mb-2">Créativité Libre</h3>
              <p class="text-[#2E2B29] text-sm">
                Studio ou extérieur, classique ou original, tout est possible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section des collections -->
    <section class="py-12 md:py-16 px-4 bg-gradient-to-br from-[#C2A191]/5 to-[#ad8e80]/5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2E2B29]">
          Nos Collections Portrait
        </h2>
        
        <div class="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Collection RAGGAZZA / RAGAZZO -->
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
          </div>

          <!-- Collection DIPINTO -->
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <!-- Badge recommandé -->
            <div class="absolute top-4 right-4 bg-[#C2A191] text-white px-3 py-1 rounded-full text-xs font-semibold">
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
                    Séance en studio ou en extérieur d'1h30
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

        <!-- Informations supplémentaires -->
        <div class="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 class="text-2xl font-serif text-center mb-6 text-[#2E2B29]">
            Options de Séance
          </h3>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="text-center">
              <div class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏠</span>
              </div>
              <h4 class="font-semibold text-[#2E2B29] mb-2">Studio</h4>
              <p class="text-[#2E2B29] text-sm">
                Éclairage professionnel, décors variés, conditions contrôlées
              </p>
            </div>
            
            <div class="text-center">
              <div class="bg-[#C2A191]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🌿</span>
              </div>
              <h4 class="font-semibold text-[#2E2B29] mb-2">Extérieur</h4>
              <p class="text-[#2E2B29] text-sm">
                Lumière naturelle, décors authentiques, liberté de mouvement
              </p>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-[#C2A191]/10 rounded-lg">
            <h4 class="font-semibold text-[#2E2B29] mb-2 text-center">
              💡 Option Combinée
            </h4>
            <p class="text-[#2E2B29] text-sm text-center">
              Vous voulez le meilleur des deux mondes ? Combinez studio ET extérieur pour seulement 
              <span class="font-semibold text-[#C2A191]">+45€</span> supplémentaires !
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-gradient-to-r from-[#C2A191] to-[#ad8e80] rounded-2xl p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-serif mb-4">
            Prêt pour votre séance portrait ?
          </h3>
          <p class="text-lg mb-8 opacity-90">
            Discutons de vos idées et créons ensemble le portrait qui vous ressemble
          </p>
          <router-link
            to="/formulaire"
            class="inline-flex items-center px-8 py-4 bg-white font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            style="color: #C2A191 !important;"
          >
            Réserver votre séance
            <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
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
  name: "Portrait",
  components: { Footer, Header },
  data() {
    return {
      photos: [
        require("../assets/coeur.jpg"),
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-02-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-03-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-04-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-05-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-06-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-07-min.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-08-min.jpg",
        require("../assets/bapteme_tina.jpg"),
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
/* Aucun style CSS ici car tout est géré par Tailwind CSS */
</style>