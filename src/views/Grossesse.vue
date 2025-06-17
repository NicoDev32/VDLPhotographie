<template>
  <div class="grossesse bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <Header />

    <!-- Hero Section -->
    <section class="text-center py-8 md:py-12 px-4">
      <h1 class="text-4xl md:text-6xl font-serif tracking-wide text-[#2E2B29] mb-4">
        Grossesse
      </h1>
      <p class="text-lg md:text-xl tracking-[0.3em] font-semibold text-[#C2A191] uppercase">
        Moselle & Alentours
      </p>
      
      <div class="max-w-4xl mx-auto mt-8">
        <p class="text-lg md:text-xl text-center leading-relaxed text-[#2E2B29]/80">
          Votre famille s'apprête à s'agrandir, toutes mes félicitations ! Que ce
          soit votre premier ou que vous ayez déjà toute une tribu, c'est un
          événement qui changera à jamais votre vie !
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
              :alt="`Photo grossesse ${index + 1}`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section guide pratique -->
    <section class="py-8 md:py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 class="text-3xl md:text-4xl font-serif text-center mb-8 text-[#2E2B29]">
            Guide de votre séance grossesse
          </h2>
          
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Préparation -->
            <div>
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6 flex items-center">
                <span class="mr-3">📅</span>
                Préparation de votre séance
              </h3>
              
              <div class="prose prose-lg">
                <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
                  Afin de prendre rendez-vous, il vous suffit de vous rendre sur ma page 
                  <router-link 
                    to="/formulaire" 
                    class="text-[#C2A191] hover:text-[#ad8e80] font-semibold underline transition-colors duration-300"
                  >
                    contact
                  </router-link> 
                  et de remplir le formulaire avec la collection de votre choix. L'idéal serait de prendre
                  rendez-vous lors du 7ème mois de grossesse.
                </p>

                <p class="text-lg leading-relaxed mb-6 text-[#2E2B29]">
                  Le jour de votre venue nous discuterons brièvement de vos souhaits et de
                  vos envies. Afin que la séance se passe dans la plus grande sérénité,
                  merci de bien vouloir respecter l'horaire donné.
                </p>
              </div>
            </div>

            <!-- Tenues à prévoir -->
            <div>
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6 flex items-center">
                <span class="mr-3">👗</span>
                Tenues à prévoir
              </h3>
              
              <div class="space-y-4">
                <div class="bg-[#FFFBF8] rounded-lg p-4">
                  <h4 class="font-semibold text-[#2E2B29] mb-3">Pour Maman :</h4>
                  <ul class="space-y-2 text-[#2E2B29]">
                    <li class="flex items-center"><span class="text-[#C2A191] mr-2">✔️</span> Débardeur blanc et/ou noir</li>
                    <li class="flex items-center"><span class="text-[#C2A191] mr-2">✔️</span> Jean qui ne se ferme pas</li>
                    <li class="flex items-center"><span class="text-[#C2A191] mr-2">✔️</span> Chemisier blanc ou noir</li>
                    <li class="flex items-center"><span class="text-[#C2A191] mr-2">✔️</span> Sous-vêtements adaptés</li>
                    <li class="flex items-center"><span class="text-[#C2A191] mr-2">✔️</span> Accessoire bébé (doudou, chaussons)</li>
                    <li class="flex items-center"><span class="text-[#C2A191] mr-2">✔️</span> 1 tenue que vous adorez porter</li>
                  </ul>
                </div>
                
                <div class="bg-[#FFFBF8] rounded-lg p-4">
                  <h4 class="font-semibold text-[#2E2B29] mb-3">Pour Papa & les enfants :</h4>
                  <p class="text-[#2E2B29]">
                    Chemise ou t-shirt noir/blanc, jean. Il faut que vous soyez raccord avec votre moitié. 
                    Pour les enfants : tenues assorties 😊
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section déroulement -->
    <section class="py-8 md:py-12 px-4 bg-gradient-to-br from-[#C2A191]/5 to-[#ad8e80]/5">
      <div class="max-w-5xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 class="text-3xl md:text-4xl font-serif text-center mb-8 text-[#2E2B29]">
            Déroulement & Conseils
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">📸</span>
                <div>
                  <h3 class="font-semibold text-[#C2A191] mb-2">Pendant la séance</h3>
                  <p class="text-[#2E2B29] leading-relaxed">
                    Soyez vous-même, laissez-moi vous guider lors de la séance, faites-moi confiance 😉.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <span class="text-3xl">🌿</span>
                <div>
                  <h3 class="font-semibold text-[#C2A191] mb-2">Séance extérieur</h3>
                  <p class="text-[#2E2B29] leading-relaxed">
                    Si vous souhaitez réaliser des clichés à l'extérieur également c'est tout à fait possible. 
                    Le lieu sera choisi par mes soins aux alentours du studio et un supplément de 45€ sera facturé pour 1 heure.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">💻</span>
                <div>
                  <h3 class="font-semibold text-[#C2A191] mb-2">Sélection des photos</h3>
                  <p class="text-[#2E2B29] leading-relaxed">
                    Une sélection de photos brutes vous sera transmise via mon site internet. 
                    Après votre sélection je procéderai aux différentes retouches.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <span class="text-3xl">📤</span>
                <div>
                  <h3 class="font-semibold text-[#C2A191] mb-2">Livraison</h3>
                  <p class="text-[#2E2B29] leading-relaxed">
                    Une fois les photos retouchées, elles vous seront transmises via WETRANSFER. 
                    Photos supplémentaires : 9€ la photo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section des collections -->
    <section class="py-12 md:py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2E2B29]">
          Nos Collections Grossesse
        </h2>
        
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Collection BELLEZZA -->
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-center">
              <h3 class="text-2xl font-serif text-[#C2A191] mb-6">
                Collection BELLEZZA
              </h3>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <span class="text-[#C2A191] text-xl">📷</span>
                  <p class="text-sm text-[#2E2B29] leading-relaxed">
                    Séance en studio d'1h30 / Maman seule
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
                <span class="text-4xl font-bold text-[#C2A191]">85€</span>
              </div>
            </div>
          </div>

          <!-- Collection MERAVIGLIA -->
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
                <span class="text-4xl font-bold text-[#C2A191]">125€</span>
              </div>
            </div>
          </div>

          <!-- Collection ELEGANZA -->
          <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <!-- Badge populaire -->
            <div class="absolute top-4 right-4 bg-[#C2A191] text-white px-3 py-1 rounded-full text-xs font-semibold">
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
                    Séance en studio de 3h00 / Maman seule, Papa et Frère ou Sœur
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
                <span class="text-4xl font-bold text-[#C2A191]">210€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-gradient-to-r from-[#C2A191] to-[#ad8e80] rounded-2xl p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-serif mb-4">
            Immortalisez cette période magique
          </h3>
          <p class="text-lg mb-8 opacity-90">
            Réservez dès maintenant votre séance grossesse pour créer des souvenirs inoubliables
          </p>
          <router-link
            to="/formulaire"
            class="inline-flex items-center px-8 py-4 bg-white text-[#C2A191] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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
  name: "Grossesse",
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
        require("../assets/mariage_maria.jpg"),
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