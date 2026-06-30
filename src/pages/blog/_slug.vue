<template>
  <div class="article-page bg-[#FFFBF8] text-[#2E2B29] min-h-screen" v-if="article">
    <!-- Breadcrumb -->
    <nav class="max-w-3xl mx-auto px-4 pt-4 pb-2 text-sm text-[#2E2B29]/60">
      <ol class="flex flex-wrap items-center gap-1">
        <li>
          <nuxt-link to="/" class="hover:text-[#C2A191] transition-colors">Accueil</nuxt-link>
        </li>
        <li class="text-[#C2A191]">/</li>
        <li>
          <nuxt-link to="/blog" class="hover:text-[#C2A191] transition-colors">Blog</nuxt-link>
        </li>
        <li class="text-[#C2A191]">/</li>
        <li class="text-[#2E2B29] font-medium truncate max-w-[60vw]">{{ article.title }}</li>
      </ol>
    </nav>

    <!-- En-tête de l'article -->
    <header class="max-w-3xl mx-auto px-4 pt-6 pb-4 text-center">
      <nuxt-link
        :to="'/blog'"
        class="inline-block bg-[#C2A191] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5"
      >
        {{ article.category }}
      </nuxt-link>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-tight text-[#2E2B29] mb-5">
        {{ article.title }}
      </h1>
      <div class="flex flex-wrap items-center justify-center gap-2 text-sm text-[#2E2B29]/55">
        <span>Par Valeria Daniele Leonardi</span>
        <span>&bull;</span>
        <span>{{ formatDate(article.date) }}</span>
        <span>&bull;</span>
        <span>{{ article.readingTime }} min de lecture</span>
      </div>
    </header>

    <!-- Image de couverture -->
    <div class="max-w-4xl mx-auto px-4 mb-8 md:mb-12">
      <figure class="overflow-hidden rounded-2xl shadow-lg">
        <img
          :src="article.cover"
          :alt="article.coverAlt"
          fetchpriority="high"
          class="w-full h-auto object-cover"
        />
      </figure>
    </div>

    <!-- Corps de l'article -->
    <article class="max-w-3xl mx-auto px-4">
      <div class="article-content" v-html="article.content"></div>

      <!-- CTA prestation liée -->
      <div class="mt-12 bg-gradient-to-r from-[#C2A191] to-[#ad8e80] rounded-2xl p-8 text-center text-white">
        <h2 class="text-2xl font-serif mb-3">Envie d'aller plus loin ?</h2>
        <p class="mb-6 opacity-95">
          Découvrez la prestation associée à cet article ou contactez-moi directement.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <nuxt-link
            :to="article.serviceRoute"
            class="inline-flex items-center justify-center px-7 py-3 bg-white text-[#C2A191] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            {{ article.serviceLabel }}
          </nuxt-link>
          <nuxt-link
            to="/formulaire"
            class="inline-flex items-center justify-center px-7 py-3 bg-[#2E2B29] text-white font-semibold rounded-full hover:bg-[#443f3c] transition-all duration-300"
          >
            Me contacter
          </nuxt-link>
        </div>
      </div>
    </article>

    <!-- Articles liés -->
    <section v-if="relatedArticles.length" class="max-w-5xl mx-auto px-4 py-14 md:py-20">
      <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
        À lire également
      </h2>
      <div class="grid sm:grid-cols-3 gap-6">
        <nuxt-link
          v-for="rel in relatedArticles"
          :key="rel.slug"
          :to="'/blog/' + rel.slug"
          class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
        >
          <div class="relative aspect-[3/2] overflow-hidden bg-[#F7EFE9]">
            <img
              :src="rel.cover"
              :alt="rel.coverAlt"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span class="absolute top-3 left-3 bg-[#C2A191] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              {{ rel.category }}
            </span>
          </div>
          <div class="p-5 flex flex-col flex-grow">
            <h3 class="text-base font-serif text-[#2E2B29] leading-snug group-hover:text-[#C2A191] transition-colors">
              {{ rel.title }}
            </h3>
            <span class="mt-3 text-xs text-[#2E2B29]/50">{{ rel.readingTime }} min de lecture</span>
          </div>
        </nuxt-link>
      </div>

      <div class="text-center mt-10">
        <nuxt-link to="/blog" class="text-sm text-[#C2A191] hover:text-[#ad8e80] underline transition-colors">
          Voir tous les articles du blog
        </nuxt-link>
      </div>
    </section>
  </div>

  <!-- 404 article -->
  <div v-else class="bg-[#FFFBF8] min-h-screen flex items-center justify-center">
    <div class="text-center px-4 mt-20">
      <h1 class="text-3xl font-serif mb-4 text-[#2E2B29]">Article introuvable</h1>
      <p class="text-[#2E2B29]/70 mb-8">Cet article n'existe pas ou a été déplacé.</p>
      <nuxt-link to="/blog" class="text-[#C2A191] underline hover:text-[#ad8e80]">
        Retour au blog
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import articles from '~/data/articles'

const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
]
const SITE = 'https://vdlphotographe.fr'

export default {
  name: 'BlogArticle',

  head() {
    if (!this.article) return { title: 'Article - VDL Photographe' }
    const a = this.article
    const url = SITE + '/blog/' + a.slug
    const image = SITE + a.cover
    return {
      title: a.metaTitle || a.title,
      meta: [
        { hid: 'description', name: 'description', content: a.metaDescription },
        { hid: 'keywords', name: 'keywords', content: a.keywords },
        { hid: 'og:title', property: 'og:title', content: (a.metaTitle || a.title) + ' | VDL Photographe' },
        { hid: 'og:description', property: 'og:description', content: a.metaDescription },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'article:published_time', property: 'article:published_time', content: a.date },
        { hid: 'article:modified_time', property: 'article:modified_time', content: a.updated || a.date },
        { hid: 'twitter:title', name: 'twitter:title', content: a.metaTitle || a.title },
        { hid: 'twitter:description', name: 'twitter:description', content: a.metaDescription },
        { hid: 'twitter:image', name: 'twitter:image', content: image },
      ],
      link: [{ rel: 'canonical', href: url }],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': url + '#article',
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            headline: a.title,
            description: a.metaDescription,
            image: [image],
            datePublished: a.date,
            dateModified: a.updated || a.date,
            inLanguage: 'fr-FR',
            articleSection: a.category,
            author: {
              '@type': 'Person',
              name: 'Valeria Daniele Leonardi',
              url: SITE + '/apropos',
            },
            publisher: {
              '@type': 'Organization',
              name: 'VDL Photographe',
              url: SITE,
              logo: {
                '@type': 'ImageObject',
                url: SITE + '/og-image.jpg',
              },
            },
          },
        },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE + '/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE + '/blog' },
              { '@type': 'ListItem', position: 3, name: a.title, item: url },
            ],
          },
        },
      ],
    }
  },

  computed: {
    article() {
      const slug = this.$route.params.slug
      return articles.find(a => a.slug === slug) || null
    },

    relatedArticles() {
      if (!this.article) return []
      const wanted = this.article.related || []
      const found = wanted
        .map(slug => articles.find(a => a.slug === slug))
        .filter(Boolean)
      if (found.length >= 3) return found.slice(0, 3)
      // Complete avec les articles les plus recents si besoin
      const fill = articles.filter(
        a => a.slug !== this.article.slug && !found.includes(a)
      )
      return found.concat(fill).slice(0, 3)
    },
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
.article-content >>> p {
  font-size: 1.0625rem;
  line-height: 1.85;
  color: rgba(46, 43, 41, 0.9);
  margin-bottom: 1.5rem;
}
.article-content >>> h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.65rem;
  line-height: 1.3;
  color: #2E2B29;
  margin-top: 2.75rem;
  margin-bottom: 1.1rem;
}
.article-content >>> h3 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.3rem;
  color: #C2A191;
  margin-top: 2rem;
  margin-bottom: 0.85rem;
}
.article-content >>> ul {
  margin: 0 0 1.5rem 0;
  padding: 0;
  list-style: none;
}
.article-content >>> ul li {
  position: relative;
  padding-left: 1.6rem;
  margin-bottom: 0.65rem;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: rgba(46, 43, 41, 0.9);
}
.article-content >>> ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #C2A191;
}
.article-content >>> a,
.article-content >>> a.article-link {
  color: #C2A191;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.3s;
}
.article-content >>> a:hover {
  color: #ad8e80;
}
.article-content >>> strong {
  color: #2E2B29;
  font-weight: 600;
}
.article-content >>> blockquote {
  border-left: 4px solid #C2A191;
  background-color: rgba(194, 161, 145, 0.08);
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: #2E2B29;
  border-radius: 0 0.5rem 0.5rem 0;
}
</style>
