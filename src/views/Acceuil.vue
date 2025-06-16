<template>
  <div class="acceuil bg-[#FFFBF8] text-[#2E2B29]">
    <Header />

    <!-- Hero Section -->
    <section class="text-center py-12 px-4">
      <h1 class="text-4xl md:text-5xl font-serif tracking-wide">
        VALERIA LEONARDI
      </h1>
      <p class="text-lg tracking-[0.3em] font-semibold mt-1">PHOTOGRAPHE</p>
    </section>

    <!-- Slogan + bouton -->
    <div class="text-center mt-6">
      <h2 class="text-2xl md:text-3xl font-serif">
        Capturing Moments,<br />Telling Stories
      </h2>
      <router-link
        to="/portfolio"
        class="inline-block mt-6 bg-[#C2A191] hover:bg-[#ad8e80] text-white px-6 py-2 rounded-md transition"
      >
        View Portfolio
      </router-link>
    </div>

    <!-- Onglets catégories -->
    <div class="mt-14">
      <div
        class="flex justify-center space-x-8 text-lg font-serif border-b border-gray-300 pb-2"
      >
        <router-link
          to="/mariage"
          class="hover:border-b-2 border-[#C2A191] pb-1 hover:text-[#C2A191] transition"
        >
          Mariage
        </router-link>
        <router-link
          to="/naissance"
          class="hover:border-b-2 hover:border-[#C2A191] pb-1 hover:text-[#C2A191] transition"
        >
          Naissance
        </router-link>
        <router-link
          to="/bapteme"
          class="hover:border-b-2 hover:border-[#C2A191] pb-1 hover:text-[#C2A191] transition"
        >
          Baptême
        </router-link>
        <router-link
          to="/grossesse"
          class="hover:border-b-2 hover:border-[#C2A191] pb-1 hover:text-[#C2A191] transition"
        >
          Grossesse
        </router-link>
      </div>
    </div>

    <!-- Grille de photos -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-6 py-10 max-w-4xl mx-auto"
    >
      <img
        src="@/assets/portrait.jpg"
        alt="Portrait"
        class="rounded-md object-cover w-full"
      />
      <img
        src="@/assets/couple.jpg"
        alt="Couple"
        class="rounded-md object-cover w-full"
      />
      <img
        src="@/assets/bouquet.jpg"
        alt="Bouquet"
        class="rounded-md object-cover w-full"
      />
      <img
        src="@/assets/maman-bebe.jpg"
        alt="Maman et bébé"
        class="rounded-md object-cover w-full"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Acceuil",
  components: { Header, Footer },
};
</script>

<style scoped>
/* Aucun style CSS ici car tout est géré par Tailwind CSS */
</style>
