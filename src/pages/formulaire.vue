<template>
  <main class="bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <!-- Hero avec animations -->
    <section class="text-center py-8 px-4">
      <h1 class="text-4xl md:text-5xl font-serif tracking-wide mb-2 hero-title">
        CONTACT
      </h1>
      <p class="text-lg tracking-[0.3em] font-semibold hero-subtitle">
        PARLONS DE VOTRE PROJET
      </p>
    </section>

    <!-- Formulaire avec animations -->
    <div
      class="max-w-7xl mx-auto px-4 pb-16 overflow-hidden"
      ref="formulaireSection"
    >
      <div class="grid lg:grid-cols-2 gap-8 w-full">
        <div class="bg-white rounded-lg shadow-xl p-6 md:p-8 scroll-fade-in">
          <h2
            class="text-2xl md:text-3xl font-serif text-[#C2A191] mb-6 text-center"
          >
            Formulaire de contact
          </h2>

          <form class="space-y-4" @submit.prevent="gererSubmit()">
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
                  @input="champsTouches = true"
                  type="text"
                  id="nom"
                  class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8] transition-all duration-300"
                  :class="{
                    'border-gray-300': !errorsComputed.nom,
                    'border-red-500': errorsComputed.nom,
                  }"
                />
                <p v-if="errorsComputed.nom" class="text-sm text-red-500 mt-1">
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
                  @input="champsTouches = true"
                  type="text"
                  id="prenom"
                  class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8] transition-all duration-300"
                  :class="{
                    'border-gray-300': !errorsComputed.prenom,
                    'border-red-500': errorsComputed.prenom,
                  }"
                />
                <p
                  v-if="errorsComputed.prenom"
                  class="text-sm text-red-500 mt-1"
                >
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
                  @input="champsTouches = true"
                  type="email"
                  id="email"
                  class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8] transition-all duration-300"
                  :class="{
                    'border-gray-300': !errorsComputed.email,
                    'border-red-500': errorsComputed.email,
                  }"
                />
                <p
                  v-if="errorsComputed.email"
                  class="text-sm text-red-500 mt-1"
                >
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
                  @input="champsTouches = true"
                  type="tel"
                  id="telephone"
                  class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8] transition-all duration-300"
                  :class="{
                    'border-gray-300': !errorsComputed.telephone,
                    'border-red-500': errorsComputed.telephone,
                  }"
                />
                <p
                  v-if="errorsComputed.telephone"
                  class="text-sm text-red-500 mt-1"
                >
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
                @input="champsTouches = true"
                id="typeProjet"
                class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8] transition-all duration-300"
                :class="{
                  'border-gray-300': !errorsComputed.typeProjet,
                  'border-red-500': errorsComputed.typeProjet,
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
              <p
                v-if="errorsComputed.typeProjet"
                class="text-sm text-red-500 mt-1"
              >
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
                @input="champsTouches = true"
                id="message"
                rows="4"
                class="w-full px-4 py-3 border rounded-md bg-[#FFFBF8] resize-vertical transition-all duration-300"
                :class="{
                  'border-gray-300': !errorsComputed.message,
                  'border-red-500': errorsComputed.message,
                }"
              ></textarea>
              <p
                v-if="errorsComputed.message"
                class="text-sm text-red-500 mt-1"
              >
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
                class="bg-white rounded-xl shadow-xl p-6 w-11/12 max-w-lg mx-auto relative modal-enter"
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
                type="submit"
                class="w-full md:w-auto bg-[#C2A191] hover:bg-[#ad8e80] font-semibold px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg border-2 border-[#C2A191] hover:border-[#ad8e80]"
                :class="{
                  'opacity-50 cursor-not-allowed': !formulaireEstRempli,
                }"
                style="color: #2e2b29"
              >
                {{
                  formulaireEstRempli
                    ? "📧 Envoyer le message"
                    : "🚫 Formulaire incomplet"
                }}
              </button>
            </div>
          </form>
        </div>

        <!-- Informations de contact et Google Map avec animations -->
        <div class="space-y-6 w-full overflow-hidden">
          <div
            class="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full overflow-hidden scroll-fade-in"
          >
            <h3 class="text-2xl font-serif text-[#C2A191] mb-6 text-center">
              Informations de contact
            </h3>
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center space-x-4 scroll-fade-in">
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
              <div class="flex items-center space-x-4 scroll-fade-in">
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
              <div class="flex items-center space-x-4 scroll-fade-in">
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

          <!-- Google Map avec animations -->
          <div class="rounded-lg overflow-hidden shadow-xl scroll-fade-in">
            <iframe
              class="w-full h-64 md:h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.1704724645214!2d6.059655615574469!3d49.265739579327464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794d189b6907dff%3A0xbfc2732c02ad5ce1!2sClouange%2C%2057150%20France!5e0!3m2!1sfr!2sfr!4v1718818320670!5m2!1sfr!2sfr"
              frameborder="0"
              style="border: 0"
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

    <!-- Popup de chargement avec animations -->
    <div
      v-if="sending"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 popup-enter"
    >
      <div
        class="bg-white rounded-xl shadow-xl p-6 w-11/12 max-w-sm mx-auto text-center"
      >
        <div class="flex flex-col items-center space-y-4">
          <svg
            class="animate-spin h-8 w-8 text-[#C2A191]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
            />
          </svg>
          <p class="text-[#2E2B29] font-semibold">Envoi du message...</p>
          <p class="text-sm text-gray-500">Merci de patienter</p>
        </div>
      </div>
    </div>

    <!-- Popup succès avec animations -->
    <div
      v-if="successPopup"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 popup-enter"
    >
      <div
        class="bg-white rounded-xl shadow-xl p-6 w-11/12 max-w-sm mx-auto text-center"
      >
        <h2 class="text-xl font-semibold text-[#2E2B29] mb-2">Merci 📬</h2>
        <p class="text-sm text-gray-600 mb-4">
          Votre message a bien été transmis.
        </p>
        <p class="text-sm text-[#C2A191]">Redirection vers l'accueil...</p>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  head() {
    return {
      title: 'Contact - Photographe Clouange, Devis Photo Moselle',
      meta: [
        { hid: 'description', name: 'description', content: 'Contactez VDL Photographe a Clouange (57150) pour votre projet photo. Devis gratuit pour mariage, grossesse, famille, portrait et naissance en Moselle et Luxembourg.' },
        { hid: 'keywords', name: 'keywords', content: 'contact photographe Clouange, devis photo Moselle, reservation seance Metz, photographe Thionville, VDL Photographe' },
        { hid: 'og:title', property: 'og:title', content: 'Contact - Photographe Clouange, Devis Photo Moselle | VDL Photographe' },
        { hid: 'og:description', property: 'og:description', content: 'Contactez VDL Photographe a Clouange (57150) pour votre projet photo. Devis gratuit pour mariage, grossesse, famille, portrait et naissance en Moselle et Luxembourg.' },
        { hid: 'og:url', property: 'og:url', content: 'https://vdlphotographe.fr/formulaire' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://vdlphotographe.fr/formulaire' },
      ],
    }
  },


  name: "Formulaire",
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
 // Champs que l'utilisateur a déjà touchés (modifiés ou visités)
     champsTouches: false,
      errors: {},
      sending: false,
      showModal: false,
      successPopup: false,
      // Flag pour savoir si l'utilisateur a déjà tenté de soumettre
      tentativeSubmit: true, // ACTIVÉ dès le début
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
    // Computed pour les erreurs en temps réel
    errorsComputed() {
  const errors = {};

  if (this.champsTouches && !this.form.nom.trim()) {
    errors.nom = true;
  }

  if (this.champsTouches && !this.form.prenom.trim()) {
    errors.prenom = true;
  }

  if (
    this.champsTouches &&
    (!this.form.email.trim() || !this.validerEmail(this.form.email))
  ) {
    errors.email = true;
  }

  if (
    this.champsTouches &&
    (!this.form.telephone || this.form.telephone.replace(/\D/g, "").length < 10)
  ) {
    errors.telephone = true;
  }

  if (this.champsTouches && !this.form.typeProjet.trim()) {
    errors.typeProjet = true;
  }

  if (this.champsTouches && !this.form.message.trim()) {
    errors.message = true;
  }

  return errors;
}

  },

  mounted() {
    // ✨ Initialiser les animations
    this.initAnimations();
    this.setupScrollObserver();

    // Valider dès le montage du composant
    this.validerFormulaire();
  },

  // Watchers pour validation en temps réel
  watch: {
    "form.nom": function () {
      if (this.tentativeSubmit) this.validerChamp("nom");
    },
    "form.prenom": function () {
      if (this.tentativeSubmit) this.validerChamp("prenom");
    },
    "form.email": function () {
      if (this.tentativeSubmit) this.validerChamp("email");
    },
    "form.telephone": function () {
      if (this.tentativeSubmit) this.validerChamp("telephone");
    },
    "form.typeProjet": function () {
      if (this.tentativeSubmit) this.validerChamp("typeProjet");
    },
    "form.message": function () {
      if (this.tentativeSubmit) this.validerChamp("message");
    },
  },

  methods: {
    // 🎬 Animation des éléments du hero au chargement
    initAnimations() {
      setTimeout(() => {
        const heroTitle = document.querySelector(".hero-title");
        const heroSubtitle = document.querySelector(".hero-subtitle");

        if (heroTitle) heroTitle.classList.add("animate-in");
        setTimeout(() => {
          if (heroSubtitle) heroSubtitle.classList.add("animate-in");
        }, 300);
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

    validerEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },

    // Validation d'un champ spécifique
    validerChamp(nomChamp) {
      // Supprimer l'erreur existante
      this.$delete(this.errors, nomChamp);

      switch (nomChamp) {
        case "nom":
          if (!this.form.nom.trim()) {
            this.$set(this.errors, "nom", true);
          }
          break;
        case "prenom":
          if (!this.form.prenom.trim()) {
            this.$set(this.errors, "prenom", true);
          }
          break;
        case "email":
          if (!this.form.email.trim() || !this.validerEmail(this.form.email)) {
            this.$set(this.errors, "email", true);
          }
          break;
        case "telephone":
          if (
            !this.form.telephone ||
            this.form.telephone.replace(/\D/g, "").length < 10
          ) {
            this.$set(this.errors, "telephone", true);
          }
          break;
        case "typeProjet":
          if (!this.form.typeProjet.trim()) {
            this.$set(this.errors, "typeProjet", true);
          }
          break;
        case "message":
          if (!this.form.message.trim()) {
            this.$set(this.errors, "message", true);
          }
          break;
      }
    },

    validerFormulaire() {
      // IMPORTANT: Activer tentativeSubmit AVANT la validation
      this.tentativeSubmit = true;

      // Réinitialiser les erreurs
      this.errors = {};

      // Valider tous les champs
      if (!this.form.nom.trim()) this.$set(this.errors, "nom", true);
      if (!this.form.prenom.trim()) this.$set(this.errors, "prenom", true);
      if (!this.form.email.trim() || !this.validerEmail(this.form.email))
        this.$set(this.errors, "email", true);
      if (
        !this.form.telephone ||
        this.form.telephone.replace(/\D/g, "").length < 10
      )
        this.$set(this.errors, "telephone", true);
      if (!this.form.typeProjet.trim())
        this.$set(this.errors, "typeProjet", true);
      if (!this.form.message.trim()) this.$set(this.errors, "message", true);

      return Object.keys(this.errors).length === 0;
    },

    async envoyerContact() {
      if (!this.validerFormulaire()) {
        return; // Arrêter si validation échoue
      }

      this.sending = true;
      this.successPopup = false;

      try {
        const response = await fetch(process.env.VUE_APP_ROUTE_POST_CONTACT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });

        const data = await response.json();
        if (!response.ok)
          throw new Error(data.message || "Erreur lors de l'envoi.");

        this.form = {
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          typeProjet: "",
          message: "",
        };
        this.errors = {};
        this.tentativeSubmit = false;
        this.successPopup = true;

        setTimeout(() => {
          this.$router.push("/");
        }, 2500);
      } catch (err) {
        console.error(err);
        alert("Une erreur est survenue. Veuillez réessayer.");
      } finally {
        this.sending = false;
      }
    },

    // Méthode pour gérer le clic sur le bouton
    gererSubmit() {
      // TOUJOURS déclencher la validation d'abord
      this.validerFormulaire();

      // Puis envoyer seulement si tout est valide
      if (this.formulaireEstRempli && Object.keys(this.errors).length === 0) {
        this.envoyerContact();
      }
    },
  },
};
</script>

<style scoped>
/* Animations d'apparition initiales pour le hero */
.hero-title,
.hero-subtitle {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.hero-title.animate-in,
.hero-subtitle.animate-in {
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

/* Animation décalée pour les éléments de contact */
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

/* Animations pour les modales et popups */
.modal-enter {
  animation: modalSlideIn 0.3s ease-out;
}

.popup-enter {
  animation: popupFadeIn 0.4s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Transitions fluides pour les champs de formulaire */
.w-full.px-4.py-3 {
  transition: all 0.3s ease;
}

.w-full.px-4.py-3:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(194, 161, 145, 0.2);
}

/* Animation du bouton submit */
button[type="submit"] {
  transition: all 0.3s ease;
}

button[type="submit"]:hover:not(.opacity-50) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(194, 161, 145, 0.3);
}
</style>
