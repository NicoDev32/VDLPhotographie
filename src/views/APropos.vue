<template>
  <div class="apropos bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <Header />

    <!-- En-tête avec nom -->
    <section class="relative overflow-hidden py-6 md:py-12 px-4">
      <!-- Déco fond -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-24 left-10 w-64 h-64 bg-[#C2A191] rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-12 right-10 w-48 h-48 bg-[#ad8e80] rounded-full blur-3xl"
        ></div>
      </div>

      <div class="relative max-w-6xl mx-auto text-center">
        <h1
          class="text-3xl md:text-5xl lg:text-6xl font-serif tracking-wide leading-tight mb-4 hero-title"
        >
          À Propos
        </h1>
        <p
          class="text-lg md:text-xl text-[#2E2B29]/80 leading-relaxed hero-subtitle"
        >
          Hello toi qui lis cette page !
        </p>
      </div>
    </section>

    <!-- Biographie et valeurs -->
    <!-- Nouveau contenu texte -->
    <section class="py-8 md:py-16 px-4 relative">
      <div class="max-w-5xl mx-auto space-y-8 text-center scroll-fade-in">
        <p class="text-lg md:text-xl leading-relaxed font-light">
          Moi, c'est <span class="font-semibold">Valeria</span> - photographe
          (pas de surprise !), maman de deux petites tornades adorables (mes V
          au carré, Valentina & Victoria), et amoureuse des belles histoires à
          immortaliser !
        </p>

        <p>
          Bon, on se raconte un peu ma vie ? Promis, c'est pas long (ou
          presque).
        </p>

        <h2 class="text-2xl font-semibold mt-8">Au départ…</h2>
        <p>
          Je fais un Master en RH et je bosse dans le recrutement.<br />
          La photo ? Juste un hobby… jusqu'en 2016, où je craque pour mon tout
          premier reflex et un objectif. Et là, c'est le coup de foudre !<br />
          Je binge 1, 2, 3... 59 tutos YouTube (#passionphoto), et je tombe en
          amour avec l'image, la vraie.
        </p>

        <h2 class="text-2xl font-semibold mt-8">Enceinte et déterminée !</h2>
        <p>
          Enceinte de 7 mois (oui, oui !), je décide de passer mon BEP
          Photographie.<br />
          Merci le Covid (pour une fois…) qui m'a permis de bosser à fond sur
          mes cours.
        </p>

        <h2 class="text-2xl font-semibold mt-8">
          Janvier 2023 : c'est parti !
        </h2>
        <p>
          Je me lance officiellement. Premières demandes : grossesse, naissance,
          famille…<br />
          Puis on me fait confiance pour des mariages (le stress, mais surtout
          l'émotion pure).<br />
          Je découvre aussi le bonheur des mini-sessions à thème — et je te le
          dis : j'adooooore Noël ! 🎄✨
        </p>
        <p>
          Sans oublier les séances en crèche, où je fonds devant toutes ces
          petites bouilles trop mignonnes. 🧸
        </p>

        <h2 class="text-2xl font-semibold mt-8">Ce que je fais aujourd'hui</h2>
        <p>
          Je capture vos moments les plus précieux et j'en fais des souvenirs
          inoubliables.<br />
          Des images qui vous ressemblent, qui racontent votre histoire, avec le
          cœur. 🫶🏻
        </p>

        <p>
          Alors voilà, maintenant tu sais un peu qui je suis.<br />
          Et toi, tu veux qu'on écrive un bout de ton histoire ensemble ? 📷💫
        </p>
      </div>
    </section>

    <!-- Portrait photo stylisé -->
    <section class="py-10 md:py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <div
          class="relative group overflow-hidden rounded-2xl shadow-xl aspect-[4/3] scroll-fade-in"
        >
          <img
            src="@/assets/portrait_moi.jpg"
            alt="Photographe Valeria"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
        </div>
      </div>
    </section>

    <!-- Valeurs ou mission -->
    <section
      class="py-12 md:py-20 px-4 bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-serif mb-6 scroll-fade-in">
          Une vision guidée par l'émotion
        </h2>
        <p
          class="text-lg md:text-xl text-[#2E2B29]/80 leading-relaxed scroll-fade-in"
        >
          Derrière chaque photo, il y a une histoire qui mérite d'être vécue,
          racontée… et revue encore et encore ! Mon truc à moi ? Capturer
          l'émotion vraie, vous offrir des souvenirs sincères, poétiques et
          intemporels.
        </p>
        <!-- Ligne décorative de séparation -->
        <div class="w-16 h-0.5 bg-[#C2A191] mx-auto my-4 rounded-full"></div>
        <p
          class="text-lg md:text-xl text-[#2E2B29]/80 leading-relaxed scroll-fade-in"
        >
          Travaillons ensemble non à la place : On capture la magie ensemble ?
        </p>
      </div>
    </section>

    <!-- Bouton de contact -->
    <section class="pt-4 pb-12 px-4">
      <div class="max-w-xl mx-auto text-center">
        <router-link
          to="/formulaire"
          class="inline-flex items-center px-10 py-4 bg-[#2E2B29] hover:bg-[#2E2B29]/90 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl scroll-fade-in"
        >
          Me contacter
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
        </router-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "APropos",
  components: { Header, Footer },
  mounted() {
    this.initAnimations();
    this.setupScrollObserver();
  },
  methods: {
    initAnimations() {
      setTimeout(() => {
        document.querySelector(".hero-title")?.classList.add("animate-in");
        document.querySelector(".hero-subtitle")?.classList.add("animate-in");
      }, 100);
    },
    setupScrollObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      });
      document.querySelectorAll(".scroll-fade-in").forEach((el) => observer.observe(el));
    },
  },
};
</script>

<style scoped>
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

.scroll-fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.scroll-fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
