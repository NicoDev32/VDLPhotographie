const cities = require('./src/data/citiesVdl.json')
const articles = require('./src/data/articles')

module.exports = {
  srcDir: 'src/',

  dir: {
    static: '../static',
  },

  target: 'static',

  // Expose les variables d'env au bundle client (Nuxt n'inline pas les VUE_APP_* comme le faisait Vue CLI).
  // La valeur est fournie par Vercel au moment du build.
  env: {
    VUE_APP_ROUTE_POST_CONTACT: process.env.VUE_APP_ROUTE_POST_CONTACT,
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    timing: false,
  },

  head: {
    htmlAttrs: { lang: 'fr' },
    titleTemplate: '%s | VDL Photographe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'VDL Photographe - Valeria Daniele Leonardi' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'theme-color', content: '#C2A191' },
      { name: 'geo.region', content: 'FR-57' },
      { name: 'geo.placename', content: 'Clouange, Moselle, France' },
      { name: 'geo.position', content: '49.2657;6.0597' },
      { name: 'ICBM', content: '49.2657, 6.0597' },
      { property: 'og:site_name', content: 'VDL Photographe' },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'og:image', content: 'https://vdlphotographe.fr/og-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/jpeg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://vdlphotographe.fr/og-image.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'LLMs.txt' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100&family=GFS+Didot&family=Great+Vibes&family=Libre+Bodoni&display=swap',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': ['LocalBusiness', 'ProfessionalService'],
          '@id': 'https://vdlphotographe.fr/#localbusiness',
          name: 'VDL Photographe',
          legalName: 'Valeria Daniele Leonardi',
          description: 'Photographe professionnelle specialisee en mariage, grossesse, famille, portrait et naissance a Clouange, Moselle. Intervient a Metz, Thionville, Hayange, Amnéville et au Luxembourg.',
          url: 'https://vdlphotographe.fr',
          telephone: '+33619037490',
          email: 'Vdlphotographe@outlook.com',
          image: 'https://vdlphotographe.fr/og-image.jpg',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Clouange',
            postalCode: '57150',
            addressRegion: 'Moselle',
            addressCountry: 'FR',
          },
          geo: { '@type': 'GeoCoordinates', latitude: '49.2657', longitude: '6.0597' },
          areaServed: [
            { '@type': 'City', name: 'Clouange' },
            { '@type': 'City', name: 'Metz' },
            { '@type': 'City', name: 'Thionville' },
            { '@type': 'City', name: 'Hayange' },
            { '@type': 'Country', name: 'Luxembourg' },
          ],
          priceRange: '€€',
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
            opens: '09:00',
            closes: '20:00',
          }],
          sameAs: [
            'https://vdlphotographe.fr',
            'https://www.facebook.com/p/VDLphotographe-100063617104628/',
            'https://www.instagram.com/vdlphotographe/',
          ],
        },
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://vdlphotographe.fr/#website',
          url: 'https://vdlphotographe.fr',
          name: 'VDL Photographe',
          description: 'Photographe professionnelle a Clouange, Moselle',
          inLanguage: 'fr-FR',
        },
      },
    ],
  },

  css: ['~/assets/tailwind.css'],

  components: true,

  build: {
    postcss: {
      plugins: {
        tailwindcss: require('./tailwind.config.js'),
        autoprefixer: {},
      },
    },
    loaders: {
      scss: { implementation: require('sass') },
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      const dynamicPages = [
        'PhotographeVille',
        'StudioPhotoVille',
        'ShootingPhotoVille',
        'PhotographeBebeVille',
      ]
      dynamicPages.forEach(name => {
        const idx = routes.findIndex(r => r.name === name)
        if (idx !== -1) routes.splice(idx, 1)
      })

      // Les routes spécifiques AVANT les routes génériques (photographe-bebe- avant photographe-)
      routes.push({
        name: 'PhotographeBebeVille',
        path: '/photographe-bebe-:citySlug',
        component: resolve(__dirname, 'src/pages/PhotographeBebeVille.vue'),
      })
      routes.push({
        name: 'PhotographeVille',
        path: '/photographe-:citySlug',
        component: resolve(__dirname, 'src/pages/PhotographeVille.vue'),
      })
      routes.push({
        name: 'StudioPhotoVille',
        path: '/studio-photo-:citySlug',
        component: resolve(__dirname, 'src/pages/StudioPhotoVille.vue'),
      })
      routes.push({
        name: 'ShootingPhotoVille',
        path: '/shooting-photo-:citySlug',
        component: resolve(__dirname, 'src/pages/ShootingPhotoVille.vue'),
      })
    },
  },

  generate: {
    fallback: true,
    routes: [
      '/blog',
      ...articles.map(a => `/blog/${a.slug}`),
      ...cities.map(c => `/photographe-${c.slug}`),
      ...cities.map(c => `/studio-photo-${c.slug}`),
      ...cities.map(c => `/shooting-photo-${c.slug}`),
      ...cities.map(c => `/photographe-bebe-${c.slug}`),
    ],
  },
}
