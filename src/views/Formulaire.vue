<template>
  <main class="bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <Header />

    <!-- Hero -->
    <section class="text-center py-8 px-4">
      <h1 class="text-4xl md:text-5xl font-serif tracking-wide mb-2">
        CONTACT
      </h1>
      <p class="text-lg tracking-[0.3em] font-semibold">
        PARLONS DE VOTRE PROJET
      </p>
    </section>

    <!-- Formulaire -->
    <div class="max-w-7xl mx-auto px-4 pb-16 overflow-hidden">
      <div class="grid lg:grid-cols-2 gap-8 w-full">
        <div class="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h2
            class="text-2xl md:text-3xl font-serif text-[#C2A191] mb-6 text-center"
          >
            Formulaire de contact
          </h2>

          <form
            class="space-y-4"
            @submit.prevent="formulaireEstRempli ? envoyerContact() : validerFormulaire()"
          >
            <!-- Nom et prénom -->
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
                  class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8]"
                  :class="{
                    'border-gray-300': !errors.nom,
                    'border-red-500': errors.nom
                  }"
                />
                <p v-if="errors.nom" class="text-sm text-red-500 mt-1">
                  Nom requis.
                </p>
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
                  class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8]"
                  :class="{
                    'border-gray-300': !errors.prenom,
                    'border-red-500': errors.prenom
                  }"
                />
                <p v-if="errors.prenom" class="text-sm text-red-500 mt-1">
                  Prénom requis.
                </p>
              </div>
            </div>

            <!-- Email et téléphone -->
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
                  class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8]"
                  :class="{
                    'border-gray-300': !errors.email,
                    'border-red-500': errors.email
                  }"
                />
                <p v-if="errors.email" class="text-sm text-red-500 mt-1">
                  Email valide requis.
                </p>
              </div>
              <div>
                <label
                  for="telephone"
                  class="block text-sm font-semibold mb-2 text-[#2E2B29]"
                  >Téléphone *</label
                >
                <input
                  v-model="form.telephone"
                  type="tel"
                  id="telephone"
                  class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8]"
                  :class="{
                    'border-gray-300': !errors.telephone,
                    'border-red-500': errors.telephone
                  }"
                />
                <p v-if="errors.telephone" class="text-sm text-red-500 mt-1">
                  Minimum 10 chiffres requis.
                </p>
              </div>
            </div>

            <!-- Type de projet -->
            <div>
              <label
                for="typeProjet"
                class="block text-sm font-semibold mb-2 text-[#2E2B29]"
                >Type de projet *</label
              >
              <select
                v-model="form.typeProjet"
                id="typeProjet"
                class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8]"
                :class="{
                  'border-gray-300': !errors.typeProjet,
                  'border-red-500': errors.typeProjet
                }"
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
              <p v-if="errors.typeProjet" class="text-sm text-red-500 mt-1">
                Sélection obligatoire.
              </p>
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-semibold mb-2 text-[#2E2B29]"
                >Votre projet *</label
              >
              <textarea
                v-model="form.message"
                id="message"
                rows="4"
                class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8] resize-vertical"
                :class="{
                  'border-gray-300': !errors.message,
                  'border-red-500': errors.message
                }"
              ></textarea>
              <p v-if="errors.message" class="text-sm text-red-500 mt-1">
                Message requis.
              </p>
            </div>
            <!-- Politique de confidentialité -->
            <p class="text-sm text-center text-gray-600">
              En nous contactant, vous acceptez notre
              <button
                type="button"
                @click="showModal = true"
                class="text-[#C2A191] underline hover:text-[#ad8e80] transition"
              >
                politique de confidentialité
              </button>
            </p>

            <!-- Modale de politique de confidentialité -->
            <div
              v-if="showModal"
              class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            >
              <div
                class="bg-white rounded-xl shadow-xl p-6 w-11/12 max-w-lg mx-auto relative"
              >
                <h2 class="text-xl font-semibold mb-4 text-[#2E2B29]">
                  Politique de confidentialité
                </h2>
                <p class="text-sm text-gray-700 mb-6">
                  Les données saisies sont envoyées par e-mail à VDLPhotographe
                  afin de répondre à votre demande.
                  <br /><br />Elles ne sont pas stockées sur le site et seront
                  supprimées sous 6 mois.

                  <br /><br />Aucune donnée n'est partagée à des tiers.

                  <br /><br />
                  <a
                    href="mailto:Vdlphotographe@outlook.com"
                    class="text-sm text-[#2E2B29] hover:text-[#C2A191] transition"
                  >
                    📧 Contact : Vdlphotographe@outlook.com
                  </a>
                </p>
                <div class="text-right">
                  <button
                    @click="showModal = false"
                    class="px-4 py-2 bg-[#2E2B29] rounded-md transition-all duration-300 transform hover:bg-[#443f3c] hover:scale-105 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>

            <!-- Boutons -->
            <div class="text-center pt-4">
              <button
                v-if="formulaireEstRempli"
                type="submit"
                class="w-full md:w-auto bg-[#C2A191] hover:bg-[#ad8e80] font-semibold px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg border-2 border-[#C2A191] hover:border-[#ad8e80]"
                style="color: #2E2B29;"
              >
                📧 Envoyer le message
              </button>
              <button
                v-else
                type="button"
                disabled
                class="w-full md:w-auto bg-[#C2A191] font-semibold px-8 py-3 rounded-md border-2 border-[#C2A191] opacity-50 cursor-not-allowed shadow-md"
                style="color: #2E2B29;"
              >
                🚫 Formulaire incomplet
              </button>
            </div>
          </form>
        </div>

        <!-- Partie droite (infos + carte) non modifiée -->
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
                    href="mailto:Vdlphotographe@outlook.com"
                    class="text-[#C2A191] hover:text-[#ad8e80] transition"
                  >
                    Vdlphotographe@outlook.com
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
                    href="tel:+33619037490"
                    class="text-[#C2A191] hover:text-[#ad8e80] transition"
                  >
                    06 19 03 74 90
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
        message: "",
      },
      errors: {},
      sending: false,
      showModal: false,
    };
  },
  computed: {
    formulaireEstRempli() {
      return (
        this.form.nom.trim() &&
        this.form.prenom.trim() &&
        this.validerEmail(this.form.email) &&
        this.form.telephone.replace(/\D/g, "").length >= 10 &&
        this.form.typeProjet.trim() &&
        this.form.message.trim()
      );
    },
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
      if (!this.form.telephone || this.form.telephone.replace(/\D/g, "").length < 10) this.errors.telephone = true;
      if (!this.form.typeProjet.trim()) this.errors.typeProjet = true;
      if (!this.form.message.trim()) this.errors.message = true;
    },
    async envoyerContact() {
      this.validerFormulaire();
      if (Object.keys(this.errors).length > 0) return;

      this.sending = true;

      try {
        const response = await fetch(process.env.VUE_APP_ROUTE_POST_CONTACT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Erreur lors de l'envoi.");

        this.form = {
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          typeProjet: "",
          message: "",
        };
      } catch (err) {
        console.error(err);
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>
