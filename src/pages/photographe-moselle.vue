<template>
  <div class="bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <!-- Breadcrumb -->
    <nav class="max-w-6xl mx-auto px-4 pt-4 pb-2 text-sm text-[#2E2B29]/60">
      <ol class="flex flex-wrap items-center gap-1">
        <li>
          <nuxt-link to="/" class="hover:text-[#C2A191] transition-colors">Accueil</nuxt-link>
        </li>
        <li class="text-[#C2A191]">/</li>
        <li class="text-[#2E2B29] font-medium">Photographe Moselle</li>
      </ol>
    </nav>

    <!-- Hero -->
    <section class="relative overflow-hidden py-10 md:py-16 px-4">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-64 h-64 bg-[#C2A191] rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 bg-[#ad8e80] rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-4xl mx-auto text-center">
        <h1 class="text-3xl md:text-5xl font-serif tracking-wide leading-tight mb-4 text-[#2E2B29]">
          Photographe Moselle et alentours
        </h1>
        <p class="text-lg md:text-xl text-[#C2A191] font-semibold tracking-wider uppercase mb-6">
          Valeria Daniele Leonardi - VDL Photographe - Clouange (57150)
        </p>
        <p class="text-lg text-[#2E2B29]/80 leading-relaxed max-w-2xl mx-auto mb-8">
          Basée à Clouange en Moselle, Valeria Daniele Leonardi se déplace dans un rayon de 40 km
          pour immortaliser vos mariages, séances grossesse, naissances, portraits et photos de famille.
          Retrouvez ci-dessous toutes les communes couvertes.
        </p>
        <nuxt-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Me contacter
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
            </path>
          </svg>
        </nuxt-link>
      </div>
    </section>

    <!-- Filtres par département -->
    <section class="py-4 px-4 bg-white/50 border-b border-[#C2A191]/20 sticky top-16 z-30">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="dept in departments"
            :key="dept.code"
            @click="activeDept = activeDept === dept.code ? null : dept.code"
            :class="[
              'btn-filter',
              activeDept === dept.code ? 'btn-filter-active' : 'btn-filter-inactive'
            ]"
          >
            {{ dept.label }}
            <span class="ml-1 text-xs opacity-70">({{ dept.count }})</span>
          </button>
        </div>
        <div class="mt-3 max-w-sm mx-auto">
          <input
            v-model="search"
            type="search"
            placeholder="Rechercher une commune..."
            class="w-full px-4 py-2 text-sm border border-[#C2A191]/30 rounded-full bg-white focus:outline-none focus:border-[#C2A191] transition-colors"
          />
        </div>
      </div>
    </section>

    <!-- Liste des communes -->
    <section class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <p class="text-sm text-[#2E2B29]/60 mb-6 text-center">
          {{ filteredCities.length }} commune{{ filteredCities.length > 1 ? 's' : '' }} couverte{{ filteredCities.length > 1 ? 's' : '' }}
          {{ activeDept ? 'dans ce département' : 'dans un rayon de 40 km autour de Clouange' }}
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <nuxt-link
            v-for="city in filteredCities"
            :key="city.slug"
            :to="'/photographe-' + city.slug"
            class="group bg-white rounded-xl p-3 shadow-sm border border-transparent hover:border-[#C2A191]/50 hover:shadow-md transition-all duration-200"
          >
            <div class="font-medium text-sm text-[#2E2B29] group-hover:text-[#C2A191] transition-colors leading-tight">
              {{ city.name }}
            </div>
            <div class="text-xs text-[#2E2B29]/50 mt-1">
              {{ city.distanceKm }} km
              <span v-if="city.postalCode" class="ml-1">{{ city.postalCode }}</span>
            </div>
          </nuxt-link>
        </div>

        <div v-if="filteredCities.length === 0" class="text-center py-12 text-[#2E2B29]/60">
          Aucune commune trouvée pour cette recherche.
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-14 px-4 bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-serif mb-4 text-[#2E2B29]">
          Votre commune n'est pas dans la liste ?
        </h2>
        <p class="text-lg text-[#2E2B29]/80 mb-8 leading-relaxed">
          Contactez Valeria Daniele Leonardi directement. Selon la distance et la prestation,
          un déplacement reste possible.
        </p>
        <nuxt-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Me contacter
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { citiesVdl } from '@/data/citiesVdl.js';

export default {
  head() {
    return {
      title: 'Photographe Moselle - Communes couvertes par VDL Photographe',
      meta: [
        { hid: 'description', name: 'description', content: 'Valeria Daniele Leonardi, photographe professionnelle a Clouange, intervient dans toute la Moselle et alentours. Decouvrez toutes les communes couvertes pour mariage, grossesse, famille.' },
        { hid: 'keywords', name: 'keywords', content: 'photographe Moselle, photographe Clouange, VDL Photographe, photographe Metz, photographe Thionville, photographe Moselle communes' },
        { hid: 'og:title', property: 'og:title', content: 'Photographe Moselle - Communes couvertes par VDL Photographe | VDL Photographe' },
        { hid: 'og:description', property: 'og:description', content: 'Valeria Daniele Leonardi, photographe professionnelle a Clouange, intervient dans toute la Moselle et alentours. Decouvrez toutes les communes couvertes pour mariage, grossesse, famille.' },
        { hid: 'og:url', property: 'og:url', content: 'https://vdlphotographe.fr/photographe-moselle' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://vdlphotographe.fr/photographe-moselle' },
      ],
    }
  },


  name: 'PhotographeMoselle',
  
  metaInfo() {
    return {
      title: 'Photographe Moselle et Alentours - VDL Photographe | Clouange 57150',
      meta: [
        {
          name: 'description',
          content: 'Valeria Daniele Leonardi, photographe professionnelle à Clouange (57), intervient dans toute la Moselle, Meurthe-et-Moselle et au Luxembourg. Mariage, grossesse, famille, naissance, portrait.',
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Photographe Moselle et Alentours - VDL Photographe' },
        { property: 'og:description', content: 'Toutes les communes couvertes par VDL Photographe en Moselle et alentours. Mariage, grossesse, famille, naissance, portrait dès 95€.' },
        { property: 'og:url', content: 'https://vdlphotographe.fr/photographe-moselle' },
      ],
      link: [{ rel: 'canonical', href: 'https://vdlphotographe.fr/photographe-moselle' }],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://vdlphotographe.fr/' },
              { '@type': 'ListItem', position: 2, name: 'Photographe Moselle', item: 'https://vdlphotographe.fr/photographe-moselle' },
            ],
          },
        },
      ],
    };
  },

  data() {
    return {
      activeDept: null,
      search: '',
      allCities: citiesVdl,
    };
  },

  computed: {
    departments() {
      const counts = {};
      const labels = {
        '57': 'Moselle (57)',
        '54': 'Meurthe-et-Moselle (54)',
        '55': 'Meuse (55)',
        'LU': 'Luxembourg',
      };
      for (const c of this.allCities) {
        counts[c.departmentCode] = (counts[c.departmentCode] || 0) + 1;
      }
      return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([code, count]) => ({
          code,
          label: labels[code] || code,
          count,
        }));
    },

    filteredCities() {
      let result = this.allCities;
      if (this.activeDept) {
        result = result.filter(c => c.departmentCode === this.activeDept);
      }
      if (this.search.trim()) {
        const q = this.search.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        result = result.filter(c => {
          const name = c.name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
          return name.includes(q);
        });
      }
      return result;
    },
  },
};
</script>

<style scoped>
.btn-dark {
  background-color: #2E2B29;
  color: white;
}
.btn-dark:hover {
  background-color: #443f3c;
}

.btn-filter {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
}
.btn-filter-active {
  background-color: #C2A191;
  color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  border: 1px solid #C2A191;
}
.btn-filter-inactive {
  background-color: white;
  color: #2E2B29;
  border: 1px solid rgba(194, 161, 145, 0.4);
}
.btn-filter-inactive:hover {
  border-color: #C2A191;
}
</style>
