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
          <nuxt-link to="/photographe-moselle" class="hover:text-[#C2A191] transition-colors">Shooting Photo Moselle</nuxt-link>
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
          Couple, Famille, Portrait
        </p>
        <p class="text-lg text-[#2E2B29]/80 leading-relaxed max-w-2xl mx-auto mb-8">
          {{ localContext }}
        </p>
        <nuxt-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Organiser mon shooting
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </nuxt-link>
      </div>
    </section>

    <!-- Types de shootings -->
    <section class="py-12 md:py-16 px-4 bg-white/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
          Shootings photo disponibles à {{ city.name }}
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
    <section class="py-12 md:py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-serif mb-6 text-[#2E2B29]">
            Shooting photo VDL et {{ city.name }}
          </h2>
          <p class="text-lg leading-relaxed text-[#2E2B29]/90 mb-4">
            {{ localContextDetail }}
          </p>
          <p class="text-lg leading-relaxed text-[#2E2B29]/90">
            Pour organiser votre shooting à {{ city.name }} ou à proximité, il suffit de décrire votre projet via le formulaire.
            Valeria vous rappelle pour choisir le lieu, l'ambiance et la lumière idéale, et il ne reste plus qu'à profiter du moment.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 md:py-16 px-4 bg-white/50" v-if="faqs.length">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
          Questions fréquentes - Shooting photo à {{ city.name }}
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
    <section class="py-12 md:py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-8 text-[#2E2B29]">
          Shooting photo dans les communes proches de {{ city.name }}
        </h2>
        <div class="flex flex-wrap justify-center gap-3">
          <nuxt-link
            v-for="near in nearbyCities"
            :key="near.slug"
            :to="'/shooting-photo-' + near.slug"
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
          Prêt(e) pour votre shooting à {{ city.name }} ?
        </h2>
        <p class="text-lg text-[#2E2B29]/80 mb-8 leading-relaxed">
          Décrivez votre projet à Valeria - elle vous propose le shooting photo taillé pour vous.
        </p>
        <nuxt-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Organiser mon shooting
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </nuxt-link>
      </div>
    </section>
  </div>

  <!-- 404 -->
  <div v-else class="bg-[#FFFBF8] min-h-screen flex items-center justify-center">
    <div class="text-center px-4 mt-20">
      <h1 class="text-3xl font-serif mb-4 text-[#2E2B29]">Commune non couverte</h1>
      <p class="text-[#2E2B29]/70 mb-8">Cette localité ne figure pas dans la zone d'intervention.</p>
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
  (c) => `Shooting photo à ${c.name} et en Moselle`,
  (c) => `Shooting photo à ${c.name} - Couple, Famille, Portrait`,
  (c) => `Shooting photo ${c.name} - Valeria Daniele Leonardi`,
  (c) => `Votre shooting photo à ${c.name} avec VDL Photographe`,
  (c) => `Shooting photo couple et famille à ${c.name}`,
  (c) => `Shooting photo en extérieur et studio à ${c.name}`,
];

const META_TITLE_VARIANTS = [
  (c) => `Shooting Photo ${c.name}${c.postalCode ? ' (' + c.postalCode + ')' : ''} | VDL Photographe – Couple, Famille`,
  (c) => `Shooting Photo ${c.name} - Valeria Daniele Leonardi, Moselle`,
  (c) => `Shooting Photo Couple Famille ${c.name} | VDL Photographe`,
];

const META_DESC_VARIANTS = [
  (c) => `Shooting photo à ${c.name} et en Moselle avec Valeria Daniele Leonardi. Couple, famille, grossesse, mariage et portrait. Studio à Clouange ou en extérieur. Sur-mesure dès 95€.`,
  (c) => `Organisez votre shooting photo à ${c.name} avec VDL Photographe. Séances couple, famille, grossesse et portrait en extérieur ou au studio de Clouange (${c.distanceKm} km).`,
  (c) => `VDL Photographe réalise vos shootings photo à ${c.name} et dans toute la ${c.department}. Couple, famille, mariage, portrait - des images authentiques qui vous ressemblent.`,
];

const COUPLE_DESC = [
  (c) => `Un shooting couple à ${c.name} pour capturer votre complicité dans un lieu qui vous est cher. En extérieur pour la lumière naturelle ou en studio pour un rendu soigné - l'amour se lit dans chaque image.`,
  (c) => `Valeria vous propose un shooting couple autour de ${c.name} dans un cadre qui vous ressemble. Séance détendue, pas de pose figée - juste vous deux, authentiques et heureux.`,
  (c) => `Shooting couple depuis ${c.name} : en extérieur dans un lieu que vous aimez ou en studio à Clouange. Des images qui figent vos sourires et votre complicité pour toujours.`,
];

const FAMILLE_DESC = [
  (c) => `Shooting famille en extérieur autour de ${c.name} ou en studio à Clouange. Valeria capture les fous rires, les câlins et les regards qui font votre famille - des souvenirs authentiques.`,
  (c) => `Un shooting famille depuis ${c.name}, en plein air ou en studio. Valeria met tout le monde à l'aise pour des images naturelles, loin des poses figées. Dès 95€.`,
  (c) => `Que vous soyez 2 ou 10, Valeria organise votre shooting famille autour de ${c.name}. Un moment de complicité transformé en souvenirs précieux que vous chérirez des années.`,
];

const GROSSESSE_DESC = [
  (c) => `Un shooting grossesse au 7e mois depuis ${c.name}. En studio à Clouange avec prêt de tenues et voiles, ou en extérieur pour une lumière naturelle. Valeria sublime votre maternité avec douceur.`,
  (c) => `Shooting grossesse depuis ${c.name} : en studio ou en extérieur, Valeria vous guide avec bienveillance pour des images poétiques de votre ventre rond. Prêt de tenues inclus en studio.`,
  (c) => `À ${c.distanceKm} km de ${c.name}, le studio accueille les futures mamans pour un shooting grossesse au 7e mois. Tenues, voiles et accessoires disponibles pour un résultat sublime.`,
];

const MARIAGE_DESC = [
  (c) => `Shooting mariage à ${c.name} et en Moselle : de la préparation jusqu'à la soirée, Valeria capture chaque émotion de votre jour J avec discrétion et poésie.`,
  (c) => `Votre shooting mariage depuis ${c.name}, c'est une journée entière racontée en images. Valeria se déplace sur vos lieux de réception partout en Moselle et au Luxembourg.`,
  (c) => `Un shooting mariage pensé autour de vous : émotions vraies, regards sincères, instants uniques. Valeria se déplace depuis Clouange jusqu'à ${c.name} et partout en ${c.department}.`,
];

const PORTRAIT_DESC = [
  (c) => `Shooting portrait depuis ${c.name} : 45 minutes en studio ou en extérieur pour révéler votre personnalité. Une image qui vous ressemble vraiment, sans filtre ni artifice.`,
  (c) => `Valeria propose des shootings portrait depuis ${c.name} en lumière naturelle ou en studio professionnel à Clouange. 45 minutes pour une image dont vous serez fier(e).`,
  (c) => `Un shooting portrait à ${c.distanceKm} km de ${c.name}, en studio ou en extérieur. Valeria capte votre personnalité unique - pour votre profil pro, vos réseaux ou simplement pour vous.`,
];

const FAQ_LIEU = [
  (c) => `Le shooting peut se dérouler en extérieur autour de ${c.name}, dans un lieu qui vous tient à cœur (parc, forêt, quartier, domicile), ou en studio à Clouange (${c.distanceKm} km de ${c.name}). Valeria peut aussi vous suggérer des lieux adaptés selon la saison et l'ambiance souhaitée.`,
  (c) => `Deux options : en extérieur à ${c.name} ou dans les environs (un lieu que vous aimez, un parc, la campagne mosellane), ou au studio de Clouange pour un cadre maîtrisé et des décors variés. La combinaison des deux est également possible.`,
  (c) => `Le lieu est entièrement libre. En extérieur autour de ${c.name}, en studio à Clouange, ou un mix des deux - Valeria s'adapte à votre vision et vous aide à trouver le cadre parfait si vous manquez d'idées.`,
];

const FAQ_DUREE = [
  (c) => `Un shooting couple ou portrait dure environ 45 minutes. Un shooting famille compte entre 1h et 1h30. Une séance grossesse entre 1h et 2h selon la collection. Valeria prend le temps qu'il faut - pas de chronomètre, juste l'envie de capturer les meilleurs instants depuis ${c.name}.`,
  (c) => `La durée dépend de la prestation : 45 min pour un portrait ou shooting couple, 1h à 1h30 pour une famille, jusqu'à 2h pour une grossesse. Pour les habitants de ${c.name}, comptez aussi quelques minutes de trajet vers le studio ou le lieu extérieur choisi ensemble.`,
  (c) => `Portrait et couple : 45 min. Famille : 1h environ. Grossesse : 1h à 2h. Les séances naissance au studio durent 1h à 3h au rythme de bébé. Valeria ne court jamais - une bonne séance depuis ${c.name} est une séance où tout le monde est détendu.`,
];

const FAQ_PREP = [
  (c) => `Pas besoin de préparer grand-chose ! Valeria guide tout au long du shooting. Pour les séances en extérieur à ${c.name}, préférez des tenues coordonnées mais naturelles. Pour le studio, des conseils personnalisés vous seront envoyés à la confirmation de votre réservation.`,
  (c) => `Valeria vous envoie un guide de préparation après la réservation. En gros : des tenues dans vos couleurs habituelles, des accessoires qui vous ressemblent, et surtout une bonne dose de bonne humeur ! Pour les shootings en extérieur à ${c.name}, elle conseille aussi la saison et l'heure idéale.`,
  (c) => `Le plus important : être soi-même. Pour votre shooting à ${c.name}, Valeria vous accompagne dès la prise de contact pour que tout soit pensé selon votre personnalité. Des tenues confortables, un lieu que vous aimez et le reste vient naturellement.`,
];

const FAQ_LIVRAISON = [
  (c) => `Après le shooting à ${c.name}, une galerie privée en ligne est créée pour que vous puissiez sélectionner vos photos préférées. Les images retouchées sont ensuite livrées via WeTransfer ou SWISSTransfer selon la prestation. Délai habituel : 1 à 3 semaines.`,
  (c) => `Vos photos retouchées sont livrées via une galerie en ligne sécurisée, accessible depuis ${c.name} ou partout ailleurs. Délai moyen de retouche : 1 à 3 semaines. Pour les mariages, la livraison se fait sur clé USB HD.`,
  (c) => `Après votre shooting photo à ${c.name}, une galerie privée vous est envoyée pour sélectionner les images. Les fichiers HD retouchés arrivent ensuite par WeTransfer ou SWISSTransfer dans un délai de 1 à 3 semaines selon la prestation.`,
];

export default {
  name: 'ShootingPhotoVille',

  head() {
    if (!this.city) return { title: 'Shooting Photo - VDL Photographe' };
    const c = this.city;
    const h = cityHash(c.slug);
    const title = META_TITLE_VARIANTS[h % 3](c);
    const desc = META_DESC_VARIANTS[h % 3](c);
    const url = `https://vdlphotographe.fr/shooting-photo-${c.slug}`;

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
            '@type': 'Photographer',
            name: 'VDL Photographe',
            legalName: 'Valeria Daniele Leonardi',
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
            areaServed: [
              { '@type': 'City', name: c.name },
              { '@type': 'City', name: 'Clouange' },
              { '@type': 'City', name: 'Metz' },
              { '@type': 'City', name: 'Thionville' },
            ],
            priceRange: '€€',
          },
        },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://vdlphotographe.fr/' },
              { '@type': 'ListItem', position: 2, name: 'Shooting Photo Moselle', item: 'https://vdlphotographe.fr/photographe-moselle' },
              { '@type': 'ListItem', position: 3, name: c.name, item: url },
            ],
          },
        },
      ],
    };
  },

  data() {
    return { openFaqs: [] };
  },

  computed: {
    city() {
      const slug = this.$route.params.citySlug;
      return citiesVdl.find(c => c.slug === slug) || null;
    },

    h1() {
      if (!this.city) return '';
      return H1_VARIANTS[cityHash(this.city.slug) % 6](this.city);
    },

    localContext() {
      if (!this.city) return '';
      const pop = this.city.population;
      const name = this.city.name;
      const dist = this.city.distanceKm;
      if (pop < 500) {
        return `Je me déplace à ${name} et dans toute la Moselle pour vos shootings photo couple, famille et portrait. Studio disponible à Clouange à ${dist} km.`;
      } else if (pop < 2000) {
        return `Shooting photo en extérieur autour de ${name} ou en studio à Clouange - Valeria Daniele Leonardi capture vos moments avec authenticité et douceur.`;
      } else if (pop < 10000) {
        return `À ${name} et dans toute la Moselle, Valeria Daniele Leonardi organise vos shootings couple, famille, grossesse et portrait. En extérieur ou au studio de Clouange à ${dist} km.`;
      } else {
        return `${name} et ses environs offrent de superbes cadres pour vos shootings photo. Valeria se déplace sur place ou vous accueille au studio de Clouange pour des images qui vous ressemblent.`;
      }
    },

    localContextDetail() {
      if (!this.city) return '';
      const name = this.city.name;
      const dist = this.city.distanceKm;
      const h = cityHash(this.city.slug);
      const details = [
        `Depuis ${name}, Valeria Daniele Leonardi vous propose des shootings photo sur-mesure en extérieur ou au studio de Clouange (${dist} km). Chaque séance est pensée autour de votre personnalité, de votre histoire et du lieu que vous aimez. Pas de mise en scène artificielle - juste des instants vrais.`,
        `Organiser un shooting photo à ${name} avec Valeria, c'est choisir une photographe qui vous écoute avant de vous photographier. Elle suggère des lieux, des ambiances, des heures dorées - pour que vos images racontent vraiment quelque chose. Studio à ${dist} km si vous préférez un cadre maîtrisé.`,
        `Que ce soit en extérieur à ${name} ou au studio de Clouange à ${dist} km, Valeria adapte chaque shooting à votre projet. Lumière naturelle, décors variés, ambiance détendue - les meilleurs souvenirs se créent quand on se sent libre de simplement être soi.`,
      ];
      return details[h % 3];
    },

    prestations() {
      if (!this.city) return [];
      const c = this.city;
      const h = cityHash(c.slug);
      return [
        { icon: '💑', title: 'Shooting Couple', desc: COUPLE_DESC[h % 3](c), price: 'Collection dès 95€', route: '/portrait' },
        { icon: '👨‍👩‍👧', title: 'Shooting Famille', desc: FAMILLE_DESC[h % 3](c), price: 'Collections dès 95€', route: '/famille' },
        { icon: '💍', title: 'Shooting Mariage', desc: MARIAGE_DESC[h % 3](c), price: 'Collections dès 795€', route: '/mariage' },
        { icon: '🤰', title: 'Shooting Grossesse', desc: GROSSESSE_DESC[h % 3](c), price: 'Collections dès 195€', route: '/grossesse' },
        { icon: '🎨', title: 'Shooting Portrait', desc: PORTRAIT_DESC[h % 3](c), price: 'Collection dès 95€', route: '/portrait' },
      ];
    },

    faqs() {
      if (!this.city) return [];
      const c = this.city;
      const h = cityHash(c.slug);
      return [
        { q: `Où peut se dérouler le shooting à ${c.name} ?`, a: FAQ_LIEU[h % 3](c) },
        { q: `Combien de temps dure un shooting photo ?`, a: FAQ_DUREE[h % 3](c) },
        { q: `Comment se préparer pour un shooting ?`, a: FAQ_PREP[h % 3](c) },
        { q: `Comment reçoit-on ses photos après le shooting ?`, a: FAQ_LIVRAISON[h % 3](c) },
      ];
    },

    nearbyCities() {
      if (!this.city) return [];
      const current = this.city;
      return citiesVdl
        .filter(c => c.slug !== current.slug)
        .map(c => ({
          ...c,
          dist: Math.sqrt(Math.pow(c.lat - current.lat, 2) + Math.pow(c.lng - current.lng, 2)),
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
.btn-dark { background-color: #2E2B29; color: white; }
.btn-dark:hover { background-color: #443f3c; }
</style>
