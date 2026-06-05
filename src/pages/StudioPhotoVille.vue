<template>
  <div class="bg-[#FFFBF8] text-[#2E2B29] min-h-screen" v-if="city">
    <!-- Breadcrumb -->
    <nav class="max-w-6xl mx-auto px-4 pt-4 pb-2 text-sm text-[#2E2B29]/60">
      <ol class="flex flex-wrap items-center gap-1">
        <li>
          <nuxt-link to="/" class="hover:text-[#C2A191] transition-colors">Accueil</nuxt-link>
        </li>
        <li class="text-[#C2A191]">/</li>
        <li>
          <nuxt-link to="/photographe-moselle" class="hover:text-[#C2A191] transition-colors">Studio Photo Moselle</nuxt-link>
        </li>
        <li class="text-[#C2A191]">/</li>
        <li class="text-[#2E2B29] font-medium">{{ city.name }}</li>
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
          {{ h1 }}
        </h1>
        <p class="text-lg md:text-xl text-[#C2A191] font-semibold tracking-wider uppercase mb-4">
          {{ city.department }}{{ city.country === 'FR' ? ' (' + city.postalCode + ')' : '' }}
          &nbsp;&bull;&nbsp;
          Studio à {{ city.distanceKm }} km de {{ city.name }}
        </p>
        <p class="text-lg text-[#2E2B29]/80 leading-relaxed max-w-2xl mx-auto mb-8">
          {{ localContext }}
        </p>
        <nuxt-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Réserver ma séance
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </nuxt-link>
      </div>
    </section>

    <!-- Studio mise en avant -->
    <section class="py-10 md:py-14 px-4 bg-white/50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-8 text-[#2E2B29]">
          Le studio photo à Clouange, à {{ city.distanceKm }} km de {{ city.name }}
        </h2>
        <div class="grid sm:grid-cols-3 gap-6 mb-8">
          <div class="bg-white rounded-2xl shadow-sm p-6 text-center border border-[#C2A191]/20">
            <div class="text-3xl mb-3">🎨</div>
            <h3 class="font-serif text-[#2E2B29] mb-2">Décors variés</h3>
            <p class="text-sm text-[#2E2B29]/70 leading-relaxed">Décor bohème, fonds unis, accessoires assortis pour chaque prestation</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm p-6 text-center border border-[#C2A191]/20">
            <div class="text-3xl mb-3">💡</div>
            <h3 class="font-serif text-[#2E2B29] mb-2">Éclairage pro</h3>
            <p class="text-sm text-[#2E2B29]/70 leading-relaxed">Matériel professionnel pour une lumière douce et maîtrisée, quel que soit le temps</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm p-6 text-center border border-[#C2A191]/20">
            <div class="text-3xl mb-3">👗</div>
            <h3 class="font-serif text-[#2E2B29] mb-2">Tenues & accessoires</h3>
            <p class="text-sm text-[#2E2B29]/70 leading-relaxed">Prêt de tenues, voiles et accessoires inclus pour les séances grossesse et naissance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Prestations -->
    <section class="py-12 md:py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
          Séances disponibles au studio depuis {{ city.name }}
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(p, i) in prestations" :key="i"
            class="bg-white rounded-2xl shadow-lg p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="text-4xl mb-4">{{ p.icon }}</div>
            <h3 class="text-xl font-serif text-[#2E2B29] mb-3">{{ p.title }}</h3>
            <p class="text-sm text-[#2E2B29]/80 leading-relaxed mb-4">{{ p.desc }}</p>
            <p class="text-sm font-semibold text-[#C2A191]">{{ p.price }}</p>
            <nuxt-link :to="p.route"
              class="mt-4 inline-block text-sm text-[#C2A191] hover:text-[#ad8e80] underline transition-colors">
              En savoir plus
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Contexte local -->
    <section class="py-12 md:py-16 px-4 bg-white/50">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-serif mb-6 text-[#2E2B29]">
            Studio photo VDL et {{ city.name }}
          </h2>
          <p class="text-lg leading-relaxed text-[#2E2B29]/90 mb-4">
            {{ localContextDetail }}
          </p>
          <p class="text-lg leading-relaxed text-[#2E2B29]/90">
            Depuis {{ city.name }}, rejoindre le studio à Clouange prend quelques minutes. Une fois sur place,
            Valeria vous accueille dans un espace pensé pour que vous vous sentiez à l'aise dès la première minute.
            Pas besoin de savoir poser - elle vous guide tout au long de la séance.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 md:py-16 px-4" v-if="faqs.length">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
          Questions fréquentes - Studio photo depuis {{ city.name }}
        </h2>

        <div class="space-y-4">
          <div v-for="(faq, i) in faqs" :key="i"
            class="bg-white rounded-xl shadow-sm border border-[#C2A191]/20 overflow-hidden">
            <button
              class="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-[#FFFBF8] transition-colors"
              @click="toggleFaq(i)"
            >
              <span class="font-semibold text-[#2E2B29] text-sm md:text-base">{{ faq.q }}</span>
              <span class="text-[#C2A191] text-xl flex-shrink-0">{{ openFaqs[i] ? '−' : '+' }}</span>
            </button>
            <div v-show="openFaqs[i]" class="px-6 pb-5">
              <p class="text-sm md:text-base text-[#2E2B29]/80 leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Villes proches -->
    <section class="py-12 md:py-16 px-4 bg-white/50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-8 text-[#2E2B29]">
          Studio photo accessible depuis ces communes proches
        </h2>
        <div class="flex flex-wrap justify-center gap-3">
          <nuxt-link
            v-for="near in nearbyCities"
            :key="near.slug"
            :to="'/studio-photo-' + near.slug"
            class="px-5 py-3 bg-white rounded-full shadow-sm border border-[#C2A191]/30 text-sm font-medium text-[#2E2B29] hover:border-[#C2A191] hover:text-[#C2A191] transition-all duration-200"
          >
            {{ near.name }}
            <span class="text-[#2E2B29]/40 text-xs ml-1">({{ near.distanceKm }} km)</span>
          </nuxt-link>
        </div>
        <div class="text-center mt-8">
          <nuxt-link
            to="/photographe-moselle"
            class="text-sm text-[#C2A191] hover:text-[#ad8e80] underline transition-colors"
          >
            Voir toutes les communes couvertes
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="py-14 px-4 bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-serif mb-4 text-[#2E2B29]">
          Votre séance studio depuis {{ city.name }} ?
        </h2>
        <p class="text-lg text-[#2E2B29]/80 mb-8 leading-relaxed">
          Contactez Valeria Daniele Leonardi et réservons votre créneau au studio de Clouange.
        </p>
        <nuxt-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Réserver ma séance
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </nuxt-link>
      </div>
    </section>
  </div>

  <!-- 404 ville -->
  <div v-else class="bg-[#FFFBF8] min-h-screen flex items-center justify-center">
    <div class="text-center px-4 mt-20">
      <h1 class="text-3xl font-serif mb-4 text-[#2E2B29]">Commune non couverte</h1>
      <p class="text-[#2E2B29]/70 mb-8">Cette localité ne figure pas dans la zone d'intervention du studio.</p>
      <nuxt-link to="/photographe-moselle" class="text-[#C2A191] underline hover:text-[#ad8e80]">
        Voir toutes les communes couvertes
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { citiesVdl } from '~/data/citiesVdl.js';

function cityHash(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) - h) + slug.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const H1_VARIANTS = [
  (c) => `Studio photo à ${c.name} - VDL Photographe`,
  (c) => `Studio photo près de ${c.name} - Valeria Daniele Leonardi`,
  (c) => `Studio photo et séances à ${c.name} en ${c.department}`,
  (c) => `Séance studio photo à ${c.name} - Clouange, Moselle`,
  (c) => `Studio photo mariage et famille proche de ${c.name}`,
  (c) => `Valeria Daniele Leonardi - Studio photo à ${c.distanceKm} km de ${c.name}`,
];

const META_TITLE_VARIANTS = [
  (c) => `Studio Photo ${c.name}${c.postalCode ? ' (' + c.postalCode + ')' : ''} - VDL Photographe`,
  (c) => `Studio Photo ${c.name} - Valeria Daniele Leonardi, Clouange`,
  (c) => `Studio Photo Mariage Famille ${c.name} - VDL Photographe`,
];

const META_DESC_VARIANTS = [
  (c) => `Studio photo à Clouange (57150), à ${c.distanceKm} km de ${c.name}. Séances grossesse, naissance, famille et portrait en studio. Valeria Daniele Leonardi, photographe professionnelle en ${c.department}.`,
  (c) => `VDL Photographe accueille les habitants de ${c.name} dans son studio photo à Clouange. Décors bohème, éclairage pro, prêt de tenues. Mariage, grossesse, famille et portrait.`,
  (c) => `Depuis ${c.name}, rejoignez le studio photo de Valeria Daniele Leonardi à Clouange en Moselle. Séances grossesse, naissance, famille, portrait et mariage sur-mesure.`,
];

const MARIAGE_DESC = [
  (c) => `Les séances mariage de Valeria vous accompagnent depuis ${c.name} jusqu'au grand jour. Préparatifs, cérémonie, soirée - chaque instant de votre journée raconté avec émotion.`,
  (c) => `Votre mariage depuis ${c.name} mérite des souvenirs uniques. Valeria se déplace sur vos lieux de réception et capture l'authenticité de chaque moment de votre jour J.`,
  (c) => `À ${c.name} ou partout en Moselle, Valeria Daniele Leonardi immortalise votre mariage de la préparation à la première danse, avec poésie et discrétion.`,
];

const NAISSANCE_DESC = [
  (c) => `Vous habitez à ${c.name} ? Le studio à Clouange vous accueille entre 7 et 14 jours après la naissance pour capturer les premiers instants de votre bébé. Prêt d'accessoires inclus.`,
  (c) => `Depuis ${c.name}, rejoignez le studio pour une séance nouveau-né apaisante. Valeria travaille au rythme de bébé, avec douceur et patience, pour des images intemporelles.`,
  (c) => `Une séance naissance en studio entre 7 et 14 jours de vie, à seulement ${c.distanceKm} km de ${c.name}. Accessoires, tenues et décors disponibles au studio de Clouange.`,
];

const FAMILLE_DESC = [
  (c) => `Le studio accueille les familles de ${c.name} avec décor bohème et fonds unis. Ou en extérieur dans un lieu qui vous est cher. Chaque séance est pensée pour vous ressembler.`,
  (c) => `De ${c.name} au studio de Clouange, Valeria capture la complicité et les rires de votre famille dans un cadre chaleureux. Option extérieur disponible selon vos envies.`,
  (c) => `Séance famille en studio à ${c.distanceKm} km de ${c.name} : décors variés, ambiance détendue et des souvenirs que vous chérirez. L'extérieur est aussi possible selon la saison.`,
];

const GROSSESSE_DESC = [
  (c) => `Idéal au 7e mois, le studio de Clouange accueille les futures mamans de ${c.name} avec douceur. Prêt de tenues et voiles inclus, séance sur-mesure pour sublimer votre maternité.`,
  (c) => `Depuis ${c.name}, venez au studio photo de Clouange pour votre séance grossesse. Valeria vous guide avec bienveillance pour que vous vous sentiez belle et libre tout au long de la séance.`,
  (c) => `Une séance grossesse en studio à ${c.distanceKm} km de ${c.name}. Éclairage doux, tenues disponibles, ambiance cocooning - Valeria immortalise votre ventre rond avec poésie.`,
];

const PORTRAIT_DESC = [
  (c) => `Un portrait au studio depuis ${c.name} : 45 minutes en lumière professionnelle pour une image qui vous ressemble vraiment. Studio à Clouange ou en extérieur selon votre préférence.`,
  (c) => `Depuis ${c.name}, le studio de Clouange vous offre un cadre professionnel pour votre portrait. Valeria capture votre personnalité avec authenticité, en studio ou en lumière naturelle.`,
  (c) => `Portrait en studio professionnel à ${c.distanceKm} km de ${c.name}. Fond uni ou décor, éclairage maîtrisé - Valeria Daniele Leonardi révèle votre meilleure version en 45 minutes.`,
];

const FAQ_OU_STUDIO = [
  (c) => `Le studio photo VDL est situé à Clouange (57150, Moselle), à ${c.distanceKm} km de ${c.name}. C'est un home-studio équipé avec des décors variés (bohème, fonds unis), un éclairage professionnel et du matériel de prêt (tenues, voiles, accessoires). L'accueil se fait sur rendez-vous uniquement.`,
  (c) => `Le studio se trouve à Clouange (57150), à ${c.distanceKm} km de ${c.name}. Valeria y dispose d'un espace dédié avec décors bohème, fonds unis et accessoires pour chaque type de séance. L'adresse exacte est communiquée lors de la confirmation de réservation.`,
  (c) => `Situé à Clouange en Moselle, à ${c.distanceKm} km de ${c.name}, le studio VDL est un home-studio professionnel. Décors, éclairage, tenues et accessoires y sont disponibles. Les séances en extérieur restent possibles sur demande.`,
];

const FAQ_RESERVER_STUDIO = [
  (c) => `Il suffit de remplir le formulaire de contact en précisant la prestation souhaitée et votre commune (${c.name}). Valeria vous contacte ensuite par téléphone pour finaliser les détails et vous confirmer un créneau au studio de Clouange.`,
  (c) => `La réservation se fait via le formulaire en ligne. Indiquez votre type de séance et que vous venez de ${c.name}. Un échange téléphonique est ensuite organisé pour tout préparer et vous confirmer la date au studio.`,
  (c) => `Contactez Valeria via le formulaire du site en mentionnant ${c.name} et le type de séance voulu. Elle vous rappelle pour organiser votre venue au studio de Clouange et répondre à toutes vos questions.`,
];

const FAQ_STUDIO_OU_EXTERIEUR = [
  (c) => `Les deux sont possibles ! Le studio à Clouange offre un cadre maîtrisé avec décors et éclairage pro. L'extérieur, autour de ${c.name} ou en Moselle, apporte une lumière naturelle et un cadre de vie. La combinaison des deux est disponible avec un supplément de 25 euros.`,
  (c) => `Au studio pour un rendu soigné en toutes saisons, ou en extérieur autour de ${c.name} pour la lumière naturelle - le choix vous appartient. Pour les séances grossesse et famille, la formule mixte studio + extérieur est possible pour 25 euros supplémentaires.`,
  (c) => `Studio ou extérieur, Valeria s'adapte à vos envies. Le studio à Clouange garantit un rendu parfait quel que soit la météo. L'extérieur près de ${c.name} est idéal pour un rendu naturel. Les deux peuvent se combiner selon la prestation.`,
];

const FAQ_DUREE = [
  (c) => `La durée varie selon la prestation. Une séance grossesse dure entre 1h et 2h selon la collection choisie. Une séance naissance dure de 1h à 3h (au rythme de bébé). Un portrait dure 45 minutes. Pour les familles venant de ${c.name}, comptez 1h en moyenne. Valeria ne chronomètre pas - la séance se termine quand tout est parfait.`,
  (c) => `Pour les clients de ${c.name} et alentours, voici les durées : portrait (45 min), famille (1h), grossesse (1h à 2h), naissance (1h à 3h au rythme de bébé). Ces durées sont indicatives - Valeria prend le temps qu'il faut pour des images dont vous serez fiers.`,
  (c) => `Selon la prestation : 45 min pour un portrait, 1h pour une famille ou une grossesse Bellezza, jusqu'à 3h pour une naissance. Que vous veniez de ${c.name} ou d'ailleurs, Valeria s'adapte au rythme de chacun pour que la séance soit un moment agréable avant tout.`,
];

export default {
  name: 'StudioPhotoVille',

  head() {
    if (!this.city) return { title: 'Studio Photo - VDL Photographe' };
    const c = this.city;
    const h = cityHash(c.slug);
    const title = META_TITLE_VARIANTS[h % 3](c);
    const desc = META_DESC_VARIANTS[h % 3](c);
    const url = `https://vdlphotographe.fr/studio-photo-${c.slug}`;

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { name: 'robots', content: 'index, follow' },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: desc },
        { hid: 'og:url', property: 'og:url', content: url },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://vdlphotographe.fr/og-image.jpg' },
      ],
      link: [{ rel: 'canonical', href: url }],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'ProfessionalService'],
            name: 'VDL Photographe - Studio Photo',
            legalName: 'Valeria Daniele Leonardi',
            url: 'https://vdlphotographe.fr',
            telephone: '+33619037490',
            email: 'Vdlphotographe@outlook.com',
            image: 'https://vdlphotographe.fr/og-image.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Clouange',
              addressLocality: 'Clouange',
              postalCode: '57150',
              addressRegion: 'Moselle',
              addressCountry: 'FR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '49.2657',
              longitude: '6.0597',
            },
            areaServed: [
              { '@type': 'City', name: c.name },
              { '@type': 'City', name: 'Clouange' },
              { '@type': 'City', name: 'Metz' },
              { '@type': 'City', name: 'Thionville' },
            ],
            priceRange: '€€',
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: 'Studio photo professionnel', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Décors et accessoires', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Prêt de tenues', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Éclairage professionnel', value: true },
            ],
          },
        },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://vdlphotographe.fr/' },
              { '@type': 'ListItem', position: 2, name: 'Studio Photo Moselle', item: 'https://vdlphotographe.fr/photographe-moselle' },
              { '@type': 'ListItem', position: 3, name: c.name, item: url },
            ],
          },
        },
      ],
    };
  },

  data() {
    return {
      openFaqs: [],
    };
  },

  computed: {
    city() {
      const slug = this.$route.params.citySlug;
      return citiesVdl.find(c => c.slug === slug) || null;
    },

    h1() {
      if (!this.city) return '';
      const h = cityHash(this.city.slug);
      return H1_VARIANTS[h % 6](this.city);
    },

    localContext() {
      if (!this.city) return '';
      const pop = this.city.population;
      const name = this.city.name;
      const dist = this.city.distanceKm;
      if (pop < 500) {
        return `Le studio photo de Clouange est à ${dist} km de ${name}. Valeria vous y accueille pour des séances professionnelles dans un espace pensé pour votre confort.`;
      } else if (pop < 2000) {
        return `À seulement ${dist} km de ${name}, le studio VDL à Clouange vous ouvre ses portes pour des séances grossesse, naissance, famille et portrait dans un cadre chaleureux.`;
      } else if (pop < 10000) {
        return `Depuis ${name}, rejoignez le studio photo de Valeria à Clouange pour une séance sur-mesure. Mariage, grossesse, naissance, famille et portrait - chaque prestation est pensée autour de vous.`;
      } else {
        return `Le studio photo VDL à Clouange est le point de rencontre idéal pour les habitants de ${name} et de toute la Moselle. Valeria Daniele Leonardi vous y accueille avec bienveillance pour des images authentiques.`;
      }
    },

    localContextDetail() {
      if (!this.city) return '';
      const name = this.city.name;
      const dist = this.city.distanceKm;
      const h = cityHash(this.city.slug);
      const details = [
        `Depuis ${name}, à ${dist} km, le studio photo de Clouange est facilement accessible. Valeria y a créé un espace intime et professionnel où chaque séance est une expérience unique. Décors bohème, fonds unis, accessoires - tout est pensé pour s'adapter à votre projet.`,
        `À ${dist} km de ${name}, le home-studio de Valeria à Clouange est un espace entièrement dédié à la photographie professionnelle. Que vous souhaitiez une séance grossesse, naissance, famille ou portrait, chaque détail est soigné pour que vous vous sentiez à l'aise dès la première minute.`,
        `Le studio photo de Valeria Daniele Leonardi à Clouange est accessible en ${dist < 10 ? 'quelques minutes' : dist + ' km'} depuis ${name}. Un espace professionnel équipé pour la grossesse, la naissance, le portrait et la famille - avec la possibilité de combiner studio et extérieur selon vos envies.`,
      ];
      return details[h % 3];
    },

    prestations() {
      if (!this.city) return [];
      const c = this.city;
      const h = cityHash(c.slug);
      return [
        {
          icon: '💍',
          title: 'Mariage',
          desc: MARIAGE_DESC[h % 3](c),
          price: 'Collections dès 795€',
          route: '/mariage',
        },
        {
          icon: '🤰',
          title: 'Grossesse en studio',
          desc: GROSSESSE_DESC[h % 3](c),
          price: 'Collections dès 195€',
          route: '/grossesse',
        },
        {
          icon: '👶',
          title: 'Naissance en studio',
          desc: NAISSANCE_DESC[h % 3](c),
          price: 'Collections dès 125€',
          route: '/naissance',
        },
        {
          icon: '👨‍👩‍👧',
          title: 'Famille en studio',
          desc: FAMILLE_DESC[h % 3](c),
          price: 'Collections dès 95€',
          route: '/famille',
        },
        {
          icon: '🎨',
          title: 'Portrait en studio',
          desc: PORTRAIT_DESC[h % 3](c),
          price: 'Collection dès 95€',
          route: '/portrait',
        },
      ];
    },

    faqs() {
      if (!this.city) return [];
      const c = this.city;
      const h = cityHash(c.slug);
      return [
        {
          q: `Où se trouve le studio photo ?`,
          a: FAQ_OU_STUDIO[h % 3](c),
        },
        {
          q: `Comment réserver une séance au studio depuis ${c.name} ?`,
          a: FAQ_RESERVER_STUDIO[h % 3](c),
        },
        {
          q: `Studio ou extérieur, que choisir ?`,
          a: FAQ_STUDIO_OU_EXTERIEUR[h % 3](c),
        },
        {
          q: `Combien de temps dure une séance photo en studio ?`,
          a: FAQ_DUREE[h % 3](c),
        },
      ];
    },

    nearbyCities() {
      if (!this.city) return [];
      const current = this.city;
      return citiesVdl
        .filter(c => c.slug !== current.slug)
        .map(c => ({
          ...c,
          dist: Math.sqrt(
            Math.pow(c.lat - current.lat, 2) + Math.pow(c.lng - current.lng, 2)
          ),
        }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 5);
    },
  },

  methods: {
    toggleFaq(i) {
      this.$set(this.openFaqs, i, !this.openFaqs[i]);
    },
  },

  watch: {
    '$route.params.citySlug'() {
      this.openFaqs = [];
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
</style>
