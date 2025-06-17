<template>
  <main class="bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <Header />
    
    <!-- Hero Section -->
    <section class="text-center py-8 px-4">
      <h1 class="text-4xl md:text-5xl font-serif tracking-wide mb-2">
        CONTACT
      </h1>
      <p class="text-lg tracking-[0.3em] font-semibold">
        PARLONS DE VOTRE PROJET
      </p>
    </section>

    <!-- Container principal -->
    <div class="max-w-7xl mx-auto px-4 pb-16 overflow-hidden">
      <div class="grid lg:grid-cols-2 gap-8 w-full">
        
        <!-- Formulaire de contact -->
        <div class="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h2 class="text-2xl md:text-3xl font-serif text-[#C2A191] mb-6 text-center">
            Formulaire de contact
          </h2>

          <form class="space-y-4">
            <!-- Nom et Prénom en ligne -->
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="nom" class="block text-sm font-semibold mb-2 text-[#2E2B29]">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  placeholder="Votre nom"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C2A191] focus:border-transparent transition-all duration-200 bg-[#FFFBF8]"
                />
              </div>
              <div>
                <label for="prenom" class="block text-sm font-semibold mb-2 text-[#2E2B29]">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  placeholder="Votre prénom"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C2A191] focus:border-transparent transition-all duration-200 bg-[#FFFBF8]"
                />
              </div>
            </div>

            <!-- Email et Téléphone en ligne -->
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="email" class="block text-sm font-semibold mb-2 text-[#2E2B29]">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="votre@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C2A191] focus:border-transparent transition-all duration-200 bg-[#FFFBF8]"
                />
              </div>
              <div>
                <label for="telephone" class="block text-sm font-semibold mb-2 text-[#2E2B29]">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  placeholder="06 12 34 56 78"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C2A191] focus:border-transparent transition-all duration-200 bg-[#FFFBF8]"
                />
              </div>
            </div>

            <!-- Type de projet -->
            <div>
              <label for="type-projet" class="block text-sm font-semibold mb-2 text-[#2E2B29]">
                Type de projet
              </label>
              <select
                id="type-projet"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C2A191] focus:border-transparent transition-all duration-200 bg-[#FFFBF8]"
              >
                <option value="">Sélectionnez votre projet</option>
                <option value="Mariage">Mariage</option>
                <option value="Naissance">Naissance</option>
                <option value="Baptême">Baptême</option>
                <option value="Grossesse">Grossesse</option>
                <option value="Famille">Famille</option>
                <option value="Portrait">Portrait</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-semibold mb-2 text-[#2E2B29]">
                Votre projet en quelques mots *
              </label>
              <textarea
                id="message"
                placeholder="Décrivez-nous votre projet, vos attentes, la date souhaitée, le lieu..."
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C2A191] focus:border-transparent transition-all duration-200 bg-[#FFFBF8] resize-vertical"
              ></textarea>
            </div>

            <!-- Bouton d'envoi -->
            <div class="text-center pt-4">
              <button
                type="button"
                class="w-full md:w-auto bg-[#C2A191] hover:bg-[#ad8e80] font-semibold px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg border-2 border-[#C2A191] hover:border-[#ad8e80]"
                style="color: #2E2B29 !important;"
              >
                📧 Envoyer le message
              </button>
            </div>
          </form>
        </div>

        <!-- Informations de contact et Map -->
        <div class="space-y-6 w-full overflow-hidden">
          
          <!-- Informations de contact -->
          <div class="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full overflow-hidden">
            <h3 class="text-2xl font-serif text-[#C2A191] mb-6 text-center">
              Informations de contact
            </h3>
            
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-[#C2A191] rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[#2E2B29]">Email</h4>
                  <a href="mailto:leonardi.nicolas@live.fr" class="text-[#C2A191] hover:text-[#ad8e80] transition">
                    leonardi.nicolas@live.fr
                  </a>
                </div>
              </div>

              <!-- Téléphone -->
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-[#C2A191] rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[#2E2B29]">Téléphone</h4>
                  <a href="tel:+33123456789" class="text-[#C2A191] hover:text-[#ad8e80] transition">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <!-- Localisation -->
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-[#C2A191] rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[#2E2B29]">Zone d'intervention</h4>
                  <p class="text-gray-600">Clouange & Moselle</p>
                </div>
              </div>

              <!-- Horaires -->
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-[#C2A191] rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[#2E2B29]">Disponibilité</h4>
                  <p class="text-gray-600">7j/7 sur rendez-vous</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Maps -->
          <div class="bg-white rounded-lg shadow-xl overflow-hidden">
            <div class="p-4 bg-[#C2A191]">
              <h3 class="text-xl font-serif text-white text-center">
                Nous trouver à Clouange
              </h3>
            </div>
            <div class="relative h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.8547448743873!2d6.1234567!3d49.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b1b2e4e5df%3A0x40a5fb99a3b5e0!2sClouange%2C%20France!5e0!3m2!1sfr!2sfr!4v1644000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
                title="Localisation Clouange"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- Section informations complémentaires -->
      <div class="mt-12 bg-gradient-to-r from-[#C2A191] to-[#ad8e80] rounded-lg shadow-xl p-8">
        <h3 class="text-2xl font-serif mb-6 text-center">
          Pourquoi choisir VLD Photographe ?
        </h3>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="space-y-3">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-lg">Qualité professionnelle</h4>
            <p class="text-opacity-90">Matériel haut de gamme et expertise reconnue</p>
          </div>
          <div class="space-y-3">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-lg">Réactivité</h4>
            <p class="text-opacity-90">Réponse garantie sous 24h</p>
          </div>
          <div class="space-y-3">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-lg">Passion</h4>
            <p class="text-opacity-90">Chaque projet est unique et précieux</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </main>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Formulaire",
  components: { Footer, Header }
};
</script>

<style scoped>
/* Aucun style CSS ici car tout est géré par Tailwind CSS */
</style>