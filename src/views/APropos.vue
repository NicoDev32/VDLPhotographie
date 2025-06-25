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
          L'histoire derrière l'objectif
        </p>
      </div>
    </section>

    <!-- Biographie et valeurs -->
    <section class="py-8 md:py-16 px-4 relative">
      <div class="max-w-5xl mx-auto space-y-8 text-center scroll-fade-in">
        <p class="text-lg md:text-xl leading-relaxed font-light">
          Je suis <span class="font-semibold">Valeria Daniele Leonardi</span>,
          photographe passionnée, installée à <strong>Clouange</strong>. Depuis
          plusieurs années, je capture les émotions sincères, les instants
          fugaces et les souvenirs impérissables.
        </p>
        <p class="text-lg md:text-xl leading-relaxed font-light">
          Mon approche repose sur la douceur, l’authenticité et la lumière
          naturelle. Chaque séance est pensée comme un moment unique, à votre
          image.
        </p>
        <p class="text-lg md:text-xl leading-relaxed font-light">
          Que ce soit pour immortaliser un mariage, la naissance d’un enfant, ou
          simplement une parenthèse de vie en famille, mon objectif est de
          révéler la beauté de chaque histoire.
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
            src="@/assets/portrait.jpg"
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
          Une vision guidée par l’émotion
        </h2>
        <p
          class="text-lg md:text-xl text-[#2E2B29]/80 leading-relaxed scroll-fade-in"
        >
          Derrière chaque image, il y a une histoire à raconter. Je m'engage à
          vous offrir des souvenirs sincères, poétiques et intemporels.
        </p>
      </div>
    </section>

    <!-- Bouton de contact -->
    <section class="py-12 px-4">
      <div class="max-w-xl mx-auto text-center">
        <router-link
          to="/formulaire"
          class="inline-flex items-center px-10 py-4 bg-[#2E2B29] hover:bg-[#2E2B29]/90 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl scroll-fade-in"
        >
          Travaillons ensemble
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
