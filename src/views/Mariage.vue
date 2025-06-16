<template>
  <div class="min-h-screen bg-[#fffaf5] text-[#1a1a1a] px-6 pt-8 md:px-24">
    <Header />
    <!-- <header class="flex items-center justify-between mb-12">
      <div class="flex items-center gap-3">
        <div
          class="border border-black rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold"
        >
          VL
        </div>
      </div>
      <h1 class="text-xl md:text-2xl font-serif font-semibold tracking-wide">
        VALERIA LEONARDI
      </h1>
      <nav>
        <a href="#" class="text-base font-light hover:underline">Grossesse</a>
      </nav>
    </header> -->

    <!-- Titre -->
    <section class="text-center mb-14">
      <h2 class="text-4xl md:text-5xl font-serif font-medium mb-4">Mariage</h2>
      <p class="text-lg text-gray-700 font-light">
        Capturing Moments, Telling Stories
      </p>
    </section>

    <!-- Galerie -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <img
        src="@/assets/mariage1.jpg"
        alt="Couple amoureux"
        class="rounded-xl object-cover w-full h-[300px] md:h-[360px]"
      />
      <img
        src="@/assets/mariage2.jpg"
        alt="Bouquet de mariée"
        class="rounded-xl object-cover w-full h-[300px] md:h-[360px]"
      />
      <img
        src="@/assets/mariage3.jpg"
        alt="Photographe femme"
        class="rounded-xl object-cover w-full h-[300px] md:h-[360px]"
      />
      <img
        src="@/assets/mariage4.jpg"
        alt="Couple de dos sur la plage"
        class="rounded-xl object-cover w-full h-[300px] md:h-[360px]"
      />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Mariage",
  components: { Header }
};
// Aucun script requis
</script>
