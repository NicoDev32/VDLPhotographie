<template>
  <div class="bg-[#FFFBF8] text-[#2E2B29] min-h-screen" v-if="city">
    <Header />

    <!-- Breadcrumb -->
    <nav class="max-w-6xl mx-auto px-4 pt-4 pb-2 text-sm text-[#2E2B29]/60">
      <ol class="flex flex-wrap items-center gap-1">
        <li>
          <router-link to="/" class="hover:text-[#C2A191] transition-colors">Accueil</router-link>
        </li>
        <li class="text-[#C2A191]">/</li>
        <li>
          <router-link to="/photographe-moselle" class="hover:text-[#C2A191] transition-colors">Photographe Moselle</router-link>
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
          {{ city.distanceKm }} km de Clouange
        </p>
        <p class="text-lg text-[#2E2B29]/80 leading-relaxed max-w-2xl mx-auto mb-8">
          {{ localContext }}
        </p>
        <router-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Me contacter
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </router-link>
      </div>
    </section>

    <!-- Prestations -->
    <section class="py-12 md:py-16 px-4 bg-white/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
          Mes prestations à {{ city.name }}
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(p, i) in prestations" :key="i"
            class="bg-white rounded-2xl shadow-lg p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="text-4xl mb-4">{{ p.icon }}</div>
            <h3 class="text-xl font-serif text-[#2E2B29] mb-3">{{ p.title }}</h3>
            <p class="text-sm text-[#2E2B29]/80 leading-relaxed mb-4">{{ p.desc }}</p>
            <p class="text-sm font-semibold text-[#C2A191]">{{ p.price }}</p>
            <router-link :to="p.route"
              class="mt-4 inline-block text-sm text-[#C2A191] hover:text-[#ad8e80] underline transition-colors">
              En savoir plus
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Contexte local -->
    <section class="py-12 md:py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-serif mb-6 text-[#2E2B29]">
            VDL Photographe et {{ city.name }}
          </h2>
          <p class="text-lg leading-relaxed text-[#2E2B29]/90 mb-4">
            {{ localContextDetail }}
          </p>
          <p class="text-lg leading-relaxed text-[#2E2B29]/90">
            Pour une séance à {{ city.name }}, le formulaire de contact est la porte d'entrée :
            on échange ensuite par téléphone pour que tout soit pensé selon vos envies, et
            seulement ensuite on fixe la date. La ponctualité et la bonne humeur font le reste !
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 md:py-16 px-4 bg-white/50" v-if="faqs.length">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
          Questions fréquentes sur {{ city.name }}
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
          Communes couvertes proches de {{ city.name }}
        </h2>
        <div class="flex flex-wrap justify-center gap-3">
          <router-link
            v-for="near in nearbyCities"
            :key="near.slug"
            :to="'/photographe-' + near.slug"
            class="px-5 py-3 bg-white rounded-full shadow-sm border border-[#C2A191]/30 text-sm font-medium text-[#2E2B29] hover:border-[#C2A191] hover:text-[#C2A191] transition-all duration-200"
          >
            {{ near.name }}
            <span class="text-[#2E2B29]/40 text-xs ml-1">({{ near.distanceKm }} km)</span>
          </router-link>
        </div>
        <div class="text-center mt-8">
          <router-link
            to="/photographe-moselle"
            class="text-sm text-[#C2A191] hover:text-[#ad8e80] underline transition-colors"
          >
            Voir toutes les communes couvertes
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="py-14 px-4 bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-serif mb-4 text-[#2E2B29]">
          Prête à capturer votre histoire à {{ city.name }} ?
        </h2>
        <p class="text-lg text-[#2E2B29]/80 mb-8 leading-relaxed">
          Contactez Valeria Daniele Leonardi et parlons de votre projet ensemble.
        </p>
        <router-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Me contacter
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </section>

    <Footer />
  </div>

  <!-- 404 ville -->
  <div v-else class="bg-[#FFFBF8] min-h-screen flex items-center justify-center">
    <Header />
    <div class="text-center px-4 mt-20">
      <h1 class="text-3xl font-serif mb-4 text-[#2E2B29]">Commune non couverte</h1>
      <p class="text-[#2E2B29]/70 mb-8">Cette localité ne figure pas dans la zone d'intervention.</p>
      <router-link to="/photographe-moselle" class="text-[#C2A191] underline hover:text-[#ad8e80]">
        Voir toutes les communes couvertes
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { citiesVdl } from '@/data/citiesVdl.js';

function cityHash(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) - h) + slug.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const H1_VARIANTS = [
  (c) => `Photographe à ${c.name} - Valeria Daniele Leonardi`,
  (c) => `VDL Photographe à ${c.name} en ${c.department}`,
  (c) => `Séances photo à ${c.name} - Valeria Daniele Leonardi`,
  (c) => `Vos souvenirs à ${c.name} avec VDL Photographe`,
  (c) => `Photographe mariage et famille à ${c.name}`,
  (c) => `Valeria Daniele Leonardi, photographe à ${c.name}`,
];

const META_TITLE_VARIANTS = [
  (c) => `Photographe Mariage Famille ${c.name}${c.postalCode ? ' (' + c.postalCode + ')' : ''} | VDL Photographe`,
  (c) => `Séance Photo ${c.name}${c.postalCode ? ' (' + c.postalCode + ')' : ''} | Valeria Daniele Leonardi`,
  (c) => `Photographe Grossesse Naissance ${c.name} | VDL Photographe`,
];

const META_DESC_VARIANTS = [
  (c) => `Valeria Daniele Leonardi, photographe à Clouange, à ${c.distanceKm} km de ${c.name}. Mariage, grossesse, naissance, famille et portrait en ${c.department}.`,
  (c) => `Séances photo mariage, grossesse, famille et portrait à ${c.name} et alentours. VDL Photographe intervient depuis Clouange en Moselle.`,
  (c) => `VDL Photographe, spécialisée en mariage, famille et grossesse, se déplace à ${c.name} et en Moselle depuis son home-studio de Clouange.`,
];

const MARIAGE_DESC = [
  (c) => `Valeria immortalise votre journée à ${c.name} de la préparation jusqu'à la soirée. Chaque regard, chaque émotion, chaque instant précieux raconté avec poésie.`,
  (c) => `Votre mariage à ${c.name} mérite d'être raconté avec authenticité. Valeria capture l'émotion vraie, les sourires sincères et les larmes de joie de votre jour J.`,
  (c) => `À ${c.name}, chaque mariage est une histoire unique. Valeria Daniele Leonardi vous accompagne de vos préparatifs jusqu'à votre première danse.`,
];

const NAISSANCE_DESC = [
  (c) => `Le temps passe si vite ! Depuis ${c.name}, une séance en studio entre 7 et 14 jours de vie capture les premiers instants de votre bébé pour un souvenir inoubliable.`,
  (c) => `Vous habitez à ${c.name} ? Une séance nouveau-né entre 7 et 14 jours de vie immortalise ces premiers jours précieux. Prêt de tenues et accessoires disponible au studio.`,
  (c) => `Photographier votre bébé dans ses premiers jours, depuis ${c.name} ou ailleurs en Moselle, c'est offrir à votre famille des souvenirs que vous chérirez des années.`,
];

const FAMILLE_DESC = [
  (c) => `En home-studio ou en extérieur autour de ${c.name}, Valeria capture la joie, la douceur et les instants de complicité qui font votre famille.`,
  (c) => `Que ce soit en studio avec décor bohème ou en extérieur dans un lieu qui vous est cher près de ${c.name}, chaque séance famille est pensée pour vous ressembler.`,
  (c) => `L'amour d'une famille se lit dans les petits gestes et les fous rires. Valeria les capture avec naturel à ${c.name} et dans toute la Moselle.`,
];

const GROSSESSE_DESC = [
  (c) => `Le 7e mois est idéal pour une séance grossesse. En studio depuis Clouange ou en extérieur près de ${c.name}, Valeria sublime votre maternité avec douceur.`,
  (c) => `Valeria accueille les futures mamans de ${c.name} et de toute la Moselle. Elle vous guide durant toute la séance grossesse pour que vous vous sentiez libre et pleinement vous-même.`,
  (c) => `Une séance grossesse au 7e mois pour immortaliser ce ventre rond et ces émotions intenses. Studio, extérieur ou les deux, votre histoire mérite d'être racontée depuis ${c.name}.`,
];

const PORTRAIT_DESC = [
  (c) => `Un portrait réalisé par Valeria à ${c.name}, c'est une image qui vous ressemble vraiment. Studio ou extérieur, 45 minutes pour se révéler.`,
  (c) => `Femmes, enfants, hommes depuis ${c.name} et toute la Moselle : Valeria a une tendresse particulière pour les portraits authentiques. Un moment pour se reconnecter à soi et rayonner.`,
  (c) => `Votre portrait depuis ${c.name}, c'est votre moment. En studio avec éclairage professionnel ou en extérieur en lumière naturelle, Valeria capture votre personnalité unique.`,
];

const FAQ_DEPLACE_A = [
  (c) => `Oui, Valeria Daniele Leonardi intervient à ${c.name} et dans toute la Moselle et ses alentours. Pour les mariages, les frais de déplacement sont inclus jusqu'à 40 km du home-studio de Clouange. Au-delà, un supplément pourra être communiqué selon la distance.`,
  (c) => `Absolument. Le secteur d'intervention couvre ${c.name}, la Moselle et les territoires voisins, dont l'axe Metz-Thionville-Luxembourg. Pour le mariage, les déplacements jusqu'à 40 km de Clouange sont inclus dans les forfaits.`,
  (c) => `Oui, ${c.name} fait partie de la zone couverte. Valeria rayonne depuis son home-studio de Clouange sur toute la Moselle et les communes voisines. Les frais de déplacement sont intégrés aux forfaits mariage jusqu'à 40 km.`,
];

const FAQ_RESERVER = [
  (c) => `Rien de plus simple : rendez-vous sur la page contact et remplissez le formulaire en indiquant le type de séance et votre commune (${c.name} ou ailleurs). Un échange téléphonique est ensuite organisé pour discuter de vos envies et fixer la date.`,
  (c) => `La réservation se fait via le formulaire de contact sur le site. Valeria prend ensuite contact par téléphone pour un échange personnalisé autour de votre projet à ${c.name}, avant de confirmer la date.`,
  (c) => `Remplissez le formulaire de contact en choisissant votre prestation et en précisant que vous êtes à ${c.name}. Valeria vous rappelle pour créer ensemble une séance sur-mesure.`,
];

const FAQ_OU_SEANCE = [
  (c) => `Les séances se déroulent au home-studio de Clouange (décor bohème ou fond uni) ou en extérieur dans des lieux qui vous sont chers, dans le secteur de ${c.name} ou ailleurs en Moselle. L'option combinée studio et extérieur est possible avec un supplément de 25 euros.`,
  (c) => `Selon la prestation et vos envies : en home-studio à Clouange avec décors variés, ou en extérieur dans un lieu qui vous est cher près de ${c.name}. Pour la grossesse et la famille, la combinaison des deux est disponible pour 25 euros supplémentaires.`,
  (c) => `En studio pour un cadre maîtrisé et des décors sur-mesure, ou en extérieur autour de ${c.name} pour la lumière naturelle. Les séances mariage se déroulent sur vos lieux de réception, partout en Moselle et au Luxembourg.`,
];

const FAQ_PHOTOS_SUPP = [
  (c) => `Si vous souhaitez des photos supplémentaires à votre collection, que vous soyez à ${c.name} ou ailleurs, chaque fichier est disponible à 12 euros. Le prix est dégressif selon la quantité souhaitée.`,
  (c) => `Pas de panique si vous craquez pour plus d'images que prévu ! Pour votre séance à ${c.name} ou alentours, les photos supplémentaires sont proposées à 12 euros l'unité, avec un tarif dégressif selon le nombre.`,
  (c) => `Des photos supplémentaires sont disponibles à 12 euros l'unité pour toutes les prestations, de ${c.name} jusqu'aux communes de Moselle. Le tarif devient dégressif en fonction du nombre de fichiers souhaités.`,
];

export default {
  name: 'PhotographeVille',
  components: { Header, Footer },

  metaInfo() {
    if (!this.city) return { title: 'Photographe - VDL Photographe' };
    const c = this.city;
    const h = cityHash(c.slug);
    const title = META_TITLE_VARIANTS[h % 3](c);
    const desc = META_DESC_VARIANTS[h % 3](c);
    const url = `https://vdlphotographe.fr/photographe-${c.slug}`;

    return {
      title,
      meta: [
        { name: 'description', content: desc },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'website' },
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
              { '@type': 'ListItem', position: 2, name: 'Photographe Moselle', item: 'https://vdlphotographe.fr/photographe-moselle' },
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
      if (pop < 500) {
        return `Je me déplace à ${name} et dans toute la Moselle pour immortaliser vos moments les plus précieux.`;
      } else if (pop < 2000) {
        return `Disponible et à proximité de ${name}, je me déplace chez vous pour capturer l'essentiel avec authenticité.`;
      } else if (pop < 10000) {
        return `Ancrée en Moselle, je rayonne depuis Clouange jusqu'à ${name} pour vos séances photo mariage, famille, grossesse, naissance et portrait.`;
      } else {
        return `${name} et ses environs offrent de beaux cadres pour vos séances photo. Je me déplace pour immortaliser vos histoires avec émotion.`;
      }
    },

    localContextDetail() {
      if (!this.city) return '';
      const name = this.city.name;
      const dept = this.city.department;
      const h = cityHash(this.city.slug);
      const details = [
        `Depuis mon home-studio de Clouange, je couvre l'ensemble de la ${dept} et ses alentours, dont ${name}. Mariage, grossesse, naissance, famille ou portrait : chaque séance est pensée autour de vos envies et de ce que vous êtes.`,
        `${name} se trouve à seulement ${this.city.distanceKm} km de mon home-studio de Clouange. Je viens à vous avec tout mon matériel pour que vous n'ayez qu'une seule chose à faire : vous laisser guider et profiter du moment.`,
        `Mon secteur d'intervention couvre ${name} et l'ensemble de la ${dept}. Que vous souhaitiez une séance en studio à Clouange ou en extérieur dans un lieu qui vous est cher à ${name}, tout est possible.`,
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
          title: 'Grossesse',
          desc: GROSSESSE_DESC[h % 3](c),
          price: 'Collections dès 195€',
          route: '/grossesse',
        },
        {
          icon: '👶',
          title: 'Naissance',
          desc: NAISSANCE_DESC[h % 3](c),
          price: 'Collections dès 125€',
          route: '/naissance',
        },
        {
          icon: '👨‍👩‍👧',
          title: 'Famille',
          desc: FAMILLE_DESC[h % 3](c),
          price: 'Collections dès 95€',
          route: '/famille',
        },
        {
          icon: '🎨',
          title: 'Portrait',
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
          q: `Vous déplacez-vous à ${c.name} ?`,
          a: FAQ_DEPLACE_A[h % 3](c),
        },
        {
          q: `Comment réserver une séance photo à ${c.name} ?`,
          a: FAQ_RESERVER[h % 3](c),
        },
        {
          q: `Où se déroulent les séances photo ?`,
          a: FAQ_OU_SEANCE[h % 3](c),
        },
        {
          q: `Et si je souhaite des photos supplémentaires ?`,
          a: FAQ_PHOTOS_SUPP[h % 3](c),
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
