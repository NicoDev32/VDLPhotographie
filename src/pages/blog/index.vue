<template>
  <div class="blog bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <!-- Breadcrumb -->
    <nav class="max-w-6xl mx-auto px-4 pt-4 pb-2 text-sm text-[#2E2B29]/60">
      <ol class="flex flex-wrap items-center gap-1">
        <li>
          <nuxt-link to="/" class="hover:text-[#C2A191] transition-colors">Accueil</nuxt-link>
        </li>
        <li class="text-[#C2A191]">/</li>
        <li class="text-[#2E2B29] font-medium">Blog</li>
      </ol>
    </nav>

    <!-- Hero -->
    <section class="relative overflow-hidden py-10 md:py-16 px-4">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-16 left-10 w-64 h-64 bg-[#C2A191] rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 bg-[#ad8e80] rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-4xl mx-auto text-center">
        <p class="text-sm tracking-[0.35em] uppercase text-[#C2A191] font-semibold mb-3">Le Journal</p>
        <h1 class="text-3xl md:text-5xl font-serif tracking-wide leading-tight mb-4 text-[#2E2B29]">
          Le Blog de VDL Photographe
        </h1>
        <p class="text-lg text-[#2E2B29]/80 leading-relaxed max-w-2xl mx-auto">
          Conseils, inspirations et coulisses autour de la photographie de mariage, grossesse,
          naissance, famille et portrait en Moselle. De quoi préparer sereinement votre séance
          et créer de jolis souvenirs.
        </p>
      </div>
    </section>

    <!-- Liste des articles -->
    <section class="py-6 md:py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="article in articles"
            :key="article.slug"
            class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
          >
            <nuxt-link :to="'/blog/' + article.slug" class="block">
              <div class="relative aspect-[3/2] overflow-hidden bg-[#F7EFE9]">
                <img
                  :src="article.cover"
                  :alt="article.coverAlt"
                  loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  class="absolute top-3 left-3 bg-[#C2A191] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                >
                  {{ article.category }}
                </span>
              </div>
            </nuxt-link>

            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-2 text-xs text-[#2E2B29]/50 mb-3">
                <span>{{ formatDate(article.date) }}</span>
                <span>&bull;</span>
                <span>{{ article.readingTime }} min de lecture</span>
              </div>
              <h2 class="text-xl font-serif text-[#2E2B29] mb-3 leading-snug group-hover:text-[#C2A191] transition-colors">
                <nuxt-link :to="'/blog/' + article.slug">{{ article.title }}</nuxt-link>
              </h2>
              <p class="text-sm text-[#2E2B29]/75 leading-relaxed mb-5 flex-grow">
                {{ article.excerpt }}
              </p>
              <nuxt-link
                :to="'/blog/' + article.slug"
                class="inline-flex items-center text-sm font-semibold text-[#C2A191] hover:text-[#ad8e80] transition-colors mt-auto"
              >
                Lire l'article
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </nuxt-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-14 px-4 bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10 mt-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-serif mb-4 text-[#2E2B29]">
          Prête à raconter votre histoire ?
        </h2>
        <p class="text-lg text-[#2E2B29]/80 mb-8 leading-relaxed">
          Mariage, grossesse, naissance, famille ou portrait : parlons de votre projet en Moselle.
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
import articles from '~/data/articles'

const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
]

export default {
  name: 'Blog',

  head() {
    const title = 'Blog Photo en Moselle - Conseils et Inspirations'
    const desc =
      'Le blog de VDL Photographe : conseils et inspirations sur la photographie de mariage, grossesse, naissance, famille et portrait en Moselle.'
    const url = 'https://vdlphotographe.fr/blog'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { hid: 'keywords', name: 'keywords', content: 'blog photographe Moselle, conseils photo, séance photo Moselle, photographe Clouange, VDL Photographe' },
        { hid: 'og:title', property: 'og:title', content: title + ' | VDL Photographe' },
        { hid: 'og:description', property: 'og:description', content: desc },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'canonical', href: url }],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': 'https://vdlphotographe.fr/blog#blog',
            name: 'Blog VDL Photographe',
            description: desc,
            url,
            inLanguage: 'fr-FR',
            publisher: {
              '@type': 'Organization',
              name: 'VDL Photographe',
              url: 'https://vdlphotographe.fr',
            },
            blogPost: this.articles.map(a => ({
              '@type': 'BlogPosting',
              headline: a.title,
              url: 'https://vdlphotographe.fr/blog/' + a.slug,
              datePublished: a.date,
              dateModified: a.updated || a.date,
            })),
          },
        },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://vdlphotographe.fr/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: url },
            ],
          },
        },
      ],
    }
  },

  data() {
    return {
      articles,
    }
  },

  methods: {
    formatDate(iso) {
      if (!iso) return ''
      const parts = iso.split('-')
      const y = parseInt(parts[0], 10)
      const m = parseInt(parts[1], 10)
      const d = parseInt(parts[2], 10)
      return d + ' ' + MONTHS[m - 1] + ' ' + y
    },
  },
}
</script>

<style scoped>
.btn-dark {
  background-color: #2E2B29;
  color: white;
}
.btn-dark:hover {
  background-color: #443f3c;
}
</style>
