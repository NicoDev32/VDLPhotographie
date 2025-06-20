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
          <h2
            class="text-2xl md:text-3xl font-serif text-[#C2A191] mb-6 text-center"
          >
            Formulaire de contact
          </h2>

          <form class="space-y-4" @submit.prevent="envoyerContact">
            <!-- Nom et Prénom -->
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  for="nom"
                  class="block text-sm font-semibold mb-2 text-[#2E2B29]"
                  >Nom *</label
                >
                <input
                  v-model="form.nom"
                  type="text"
                  id="nom"
                  placeholder="Votre nom"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FFFBF8]"
                  :class="{ 'border-red-500': errors.nom }"
                />
              </div>
              <div>
                <label
                  for="prenom"
                  class="block text-sm font-semibold mb-2 text-[#2E2B29]"
                  >Prénom *</label
                >
                <input
                  v-model="form.prenom"
                  type="text"
                  id="prenom"
                  placeholder="Votre prénom"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FFFBF8]"
                  :class="{ 'border-red-500': errors.prenom }"
                />
              </div>
            </div>

            <!-- Email et Téléphone -->
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  for="email"
                  class="block text-sm font-semibold mb-2 text-[#2E2B29]"
                  >E-mail *</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  placeholder="votre@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FFFBF8]"
                  :class="{ 'border-red-500': errors.email }"
                />
              </div>
              <div>
                <label
                  for="telephone"
                  class="block text-sm font-semibold mb-2 text-[#2E2B29]"
                  >Téléphone</label
                >
                <input
                  v-model="form.telephone"
                  type="tel"
                  id="telephone"
                  placeholder="06 12 34 56 78"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FFFBF8]"
                />
              </div>
            </div>

            <!-- Type de projet -->
            <div>
              <label
                for="type-projet"
                class="block text-sm font-semibold mb-2 text-[#2E2B29]"
                >Type de projet</label
              >
              <select
                v-model="form.typeProjet"
                id="type-projet"
                class="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FFFBF8]"
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
              <label
                for="message"
                class="block text-sm font-semibold mb-2 text-[#2E2B29]"
              >
                Votre projet en quelques mots *
              </label>
              <textarea
                v-model="form.message"
                id="message"
                placeholder="Décrivez-nous votre projet, vos attentes, la date souhaitée, le lieu..."
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#FFFBF8] resize-vertical"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
            </div>

            <!-- Bouton -->
            <div class="text-center pt-4">
              <button
                type="submit"
                :disabled="!formulaireEstRempli"
                class="w-full md:w-auto bg-[#C2A191] hover:bg-[#ad8e80] font-semibold px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg border-2 border-[#C2A191] hover:border-[#ad8e80] disabled:opacity-50 disabled:cursor-not-allowed"
                style="color: #2E2B29 !important;"
              >
                📧 Envoyer le message
              </button>
            </div>
          </form>
        </div>

        <!-- Informations de contact et Google Map -->
        <div class="space-y-6 w-full overflow-hidden">
          <div
            class="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full overflow-hidden"
          >
            <h3 class="text-2xl font-serif text-[#C2A191] mb-6 text-center">
              Informations de contact
            </h3>
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-[#C2A191] rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[#2E2B29]">Email</h4>
                  <a
                    href="mailto:leonardi.nicolas@live.fr"
                    class="text-[#C2A191] hover:text-[#ad8e80] transition"
                  >
                    leonardi.nicolas@live.fr
                  </a>
                </div>
              </div>

              <!-- Téléphone -->
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-[#C2A191] rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[#2E2B29]">Téléphone</h4>
                  <a
                    href="tel:+33123456789"
                    class="text-[#C2A191] hover:text-[#ad8e80] transition"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <!-- Localisation -->
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-[#C2A191] rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 12l4.243-4.243M6.343 7.343L10.586 12 6.343 16.243"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-[#2E2B29]">Localisation</h4>
                  <p>Clouange, France</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Map -->
          <div class="rounded-lg overflow-hidden shadow-xl">
            <iframe
              class="w-full h-64 md:h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.1704724645214!2d6.059655615574469!3d49.265739579327464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794d189b6907dff%3A0xbfc2732c02ad5ce1!2sClouange%2C%2057150%20France!5e0!3m2!1sfr!2sfr!4v1718818320670!5m2!1sfr!2sfr"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
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
  components: { Footer, Header },
  data() {
    return {
      form: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        typeProjet: "",
        message: ""
      },
      errors: {}
    };
  },
  computed: {
      formulaireEstRempli() {
    return (
      this.form.nom.trim().length > 0 &&
      this.form.prenom.trim().length > 0 &&
      this.form.email.trim().length > 0 &&
      this.validerEmail(this.form.email) &&
      this.form.message.trim().length > 0
    );
  },
  formValide() {
    return Object.keys(this.errors).length === 0;
  }
  },
  methods: {
    validerEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validerFormulaire() {
      this.errors = {};
      if (!this.form.nom.trim()) this.errors.nom = true;
      if (!this.form.prenom.trim()) this.errors.prenom = true;
      if (!this.form.email.trim() || !this.validerEmail(this.form.email)) this.errors.email = true;
      if (!this.form.message.trim()) this.errors.message = true;
    },
        async envoyerContact() {
      this.sending = true;
      this.successMessage = "";
      this.errorMessage = "";

      try {
        const response = await fetch(process.env.VUE_APP_ROUTE_POST_CONTACT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Erreur lors de l'envoi.");
        }

        this.successMessage = data.message || "Message envoyé avec succès !";
        this.form = {
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          typeSite: "",
          message: "",
        };
      } catch (err) {
        this.errorMessage = err.message;
      } finally {
        this.sending = false;
      }
    },
  }
};
</script>

<style scoped>
/* Tailwind gère la mise en page, rien à ajouter ici */
</style>
