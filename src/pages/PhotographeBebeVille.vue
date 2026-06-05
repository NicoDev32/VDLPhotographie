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
          <nuxt-link to="/naissance" class="hover:text-[#C2A191] transition-colors">Photographe Bébé Moselle</nuxt-link>
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
          Naissance &amp; Nouveau-né
        </p>
        <p class="text-lg text-[#2E2B29]/80 leading-relaxed max-w-2xl mx-auto mb-8">
          {{ localContext }}
        </p>
        <nuxt-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Réserver la séance bébé
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </nuxt-link>
      </div>
    </section>

    <!-- Pourquoi photographier bébé -->
    <section class="py-10 md:py-14 px-4 bg-white/50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-8 text-[#2E2B29]">
          Pourquoi photographier bébé dès la naissance ?
        </h2>
        <div class="grid sm:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl shadow-sm p-6 text-center border border-[#C2A191]/20">
            <div class="text-3xl mb-3">⏳</div>
            <h3 class="font-serif text-[#2E2B29] mb-2">Les premiers jours passent vite</h3>
            <p class="text-sm text-[#2E2B29]/70 leading-relaxed">Entre 7 et 14 jours de vie, bébé est encore tout en rondeurs et en douceur. Ces instants ne se retrouvent jamais.</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm p-6 text-center border border-[#C2A191]/20">
            <div class="text-3xl mb-3">💛</div>
            <h3 class="font-serif text-[#2E2B29] mb-2">Des souvenirs pour toujours</h3>
            <p class="text-sm text-[#2E2B29]/70 leading-relaxed">Ces images deviennent des trésors que vous partagerez avec votre enfant dans 10, 20, 30 ans.</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm p-6 text-center border border-[#C2A191]/20">
            <div class="text-3xl mb-3">🕊️</div>
            <h3 class="font-serif text-[#2E2B29] mb-2">Séance au rythme de bébé</h3>
            <p class="text-sm text-[#2E2B29]/70 leading-relaxed">Valeria adapte toute la séance au rythme de votre nourrisson - tétées, câlins, siestes. Pas de stress, juste de la douceur.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Prestations -->
    <section class="py-12 md:py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
          Séances bébé disponibles depuis {{ city.name }}
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
            Photographe bébé VDL et {{ city.name }}
          </h2>
          <p class="text-lg leading-relaxed text-[#2E2B29]/90 mb-4">
            {{ localContextDetail }}
          </p>
          <p class="text-lg leading-relaxed text-[#2E2B29]/90">
            Depuis {{ city.name }}, le studio de Clouange est facilement accessible pour votre séance nouveau-né.
            Valeria vous accueille dans un espace chauffé, doux et pensé pour le confort de bébé comme des parents.
            La réservation avant la naissance est fortement conseillée pour garantir le créneau idéal.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 md:py-16 px-4" v-if="faqs.length">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-serif text-center mb-10 text-[#2E2B29]">
          Questions fréquentes - Photographe bébé à {{ city.name }}
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
          Photographe bébé dans les communes proches de {{ city.name }}
        </h2>
        <div class="flex flex-wrap justify-center gap-3">
          <nuxt-link
            v-for="near in nearbyCities"
            :key="near.slug"
            :to="'/photographe-bebe-' + near.slug"
            class="px-5 py-3 bg-white rounded-full shadow-sm border border-[#C2A191]/30 text-sm font-medium text-[#2E2B29] hover:border-[#C2A191] hover:text-[#C2A191] transition-all duration-200"
          >
            {{ near.name }}
            <span class="text-[#2E2B29]/40 text-xs ml-1">({{ near.distanceKm }} km)</span>
          </nuxt-link>
        </div>
        <div class="text-center mt-8">
          <nuxt-link to="/naissance" class="text-sm text-[#C2A191] hover:text-[#ad8e80] underline transition-colors">
            Découvrir les séances naissance &amp; bébé
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="py-14 px-4 bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-serif mb-4 text-[#2E2B29]">
          Immortaliser les premiers jours de bébé depuis {{ city.name }}
        </h2>
        <p class="text-lg text-[#2E2B29]/80 mb-8 leading-relaxed">
          Réservez avant la naissance pour garantir votre créneau. Valeria vous contacte pour tout organiser en douceur.
        </p>
        <nuxt-link
          to="/formulaire"
          class="btn-dark inline-flex items-center px-10 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Réserver la séance bébé
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
      <nuxt-link to="/naissance" class="text-[#C2A191] underline hover:text-[#ad8e80]">
        Voir les séances naissance &amp; bébé
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
  (c) => `Photographe bébé à ${c.name} - Valeria Daniele Leonardi`,
  (c) => `Photographe bébé ${c.name} | Studio Clouange, Moselle`,
  (c) => `Photographe nouveau-né et bébé à ${c.name}`,
  (c) => `Séance photo bébé à ${c.name} - VDL Photographe`,
  (c) => `Photographe bébé et naissance à ${c.name} en ${c.department}`,
  (c) => `Votre photographe bébé à ${c.distanceKm} km de ${c.name}`,
];

const META_TITLE_VARIANTS = [
  (c) => `Photographe Bébé ${c.name}${c.postalCode ? ' (' + c.postalCode + ')' : ''} | VDL Photographe – Naissance`,
  (c) => `Photographe Bébé ${c.name} - Valeria Daniele Leonardi, Clouange`,
  (c) => `Photographe Nouveau-né Bébé ${c.name} | VDL Photographe Moselle`,
];

const META_DESC_VARIANTS = [
  (c) => `Photographe bébé à ${c.name} - Valeria Daniele Leonardi, studio à Clouange (${c.distanceKm} km). Séances nouveau-né 7-14 jours, bébé 6 mois, naissance et famille. Accessoires inclus. Dès 125€.`,
  (c) => `VDL Photographe, spécialiste bébé et naissance, accueille les familles de ${c.name} à son studio de Clouange en Moselle. Séances nouveau-né, bébé et naissance sur-mesure dès 125€.`,
  (c) => `Photographe bébé et nouveau-né depuis ${c.name} : séances naissance entre 7 et 14 jours, bébé 6 mois et famille avec bébé. Studio à Clouange (${c.distanceKm} km), accessoires et tenues inclus.`,
];

const NAISSANCE_DESC = [
  (c) => `La séance nouveau-né idéale se tient entre 7 et 14 jours de vie, quand bébé est encore tout endormi et malléable. Depuis ${c.name}, le studio de Clouange accueille votre famille avec douceur. Durée : 1h à 3h au rythme de bébé.`,
  (c) => `Vous attendez bébé depuis ${c.name} ? Réservez avant la naissance pour garantir votre créneau. La séance nouveau-né se tient entre 7 et 14 jours de vie au studio de Clouange. Accessoires, tenues et décors fournis par Valeria.`,
  (c) => `Entre 7 et 14 jours après la naissance, bébé est encore dans ce cocon de douceur unique. Depuis ${c.name}, rejoignez le studio de Clouange pour une séance nouveau-né apaisante. Valeria s'adapte entièrement au rythme de votre nourrisson.`,
];

const BEBE_6MOIS_DESC = [
  (c) => `Vers 6 mois, bébé tient assis et commence à sourire aux éclats. Une étape magique à capturer ! Depuis ${c.name}, une séance d'1h au studio de Clouange immortalise cette période de découverte et de premiers rires.`,
  (c) => `La séance bébé 6 mois capture bébé dans toute sa curiosité - quand il commence à explorer le monde avec ses yeux grands ouverts. Depuis ${c.name}, au studio de Clouange, une heure suffit pour des images inoubliables.`,
  (c) => `À 6 mois, bébé est un autre enfant - souriant, curieux, tenace. Depuis ${c.name}, venez immortaliser cette étape au studio de Clouange. 1h de séance, 8 fichiers HD pour des souvenirs que vous chérirez toujours.`,
];

const FAMILLE_BEBE_DESC = [
  (c) => `Bébé arrive, la famille s'agrandit - un moment unique à capturer tous ensemble. Depuis ${c.name}, la séance famille avec bébé en studio à Clouange immortalise ces premiers instants de vie à plusieurs. Prêt d'accessoires inclus.`,
  (c) => `Maman, papa, frère ou sœur - toute la famille réunie autour de bébé. Depuis ${c.name}, Valeria organise une séance famille avec bébé en studio à Clouange. Des images tendres et authentiques de vos premiers jours ensemble.`,
  (c) => `La séance famille avec bébé depuis ${c.name} : un moment de partage capturé en studio à Clouange. Parents, frères et sœurs autour du nouveau venu - des images qui racontent l'arrivée d'un enfant dans une famille.`,
];

const GROSSESSE_NAISSANCE_DESC = [
  (c) => `Duo grossesse + naissance : immortalisez votre ventre rond puis les premiers jours de bébé. Depuis ${c.name}, Valeria vous propose ce duo exceptionnel pour raconter l'avant et l'après naissance avec cohérence et émotion.`,
  (c) => `Réservez votre duo grossesse et naissance depuis ${c.name} pour un récit photographique complet. La grossesse au 7e mois, puis les premiers jours de bébé au studio de Clouange - deux séances, une histoire.`,
  (c) => `Du ventre rond aux premiers souffles de bébé - le duo grossesse + naissance est le souvenir le plus complet que vous puissiez offrir à votre famille. Disponible depuis ${c.name}, à ${c.distanceKm} km du studio de Clouange.`,
];

const PORTRAIT_BEBE_DESC = [
  (c) => `Une série de portraits bébé pour immortaliser son évolution mois après mois. Depuis ${c.name}, Valeria propose des séances portrait à chaque grande étape - naissance, 3 mois, 6 mois, 1 an - pour un album de vie unique.`,
  (c) => `Un portrait bébé à chaque étape clé depuis ${c.name} : les premiers jours, les premiers sourires, les premiers pas. Valeria capture l'évolution de votre enfant avec la même douceur, séance après séance.`,
  (c) => `Photographier bébé à chaque étape depuis ${c.name}, c'est construire un album de vie inoubliable. Naissance, 3 mois, 6 mois, 1 an - Valeria Daniele Leonardi immortalise chaque transformation avec poésie.`,
];

const FAQ_QUAND_RESERVER = [
  (c) => `Il est fortement conseillé de réserver avant la naissance, idéalement au 7e ou 8e mois de grossesse. Cela permet de garantir un créneau dans les 7 à 14 jours après l'accouchement, quelle que soit la date réelle d'arrivée de bébé. Pour les familles de ${c.name}, Valeria bloque un créneau souple ajustable selon la naissance.`,
  (c) => `La réservation en avance est essentielle pour une séance nouveau-né : les créneaux dans les 7 à 14 jours de vie sont limités et très demandés. Depuis ${c.name}, contactez Valeria dès le 7e mois de grossesse. Elle s'ajuste à la date réelle de naissance de votre bébé.`,
  (c) => `Pour les familles de ${c.name}, Valeria recommande de réserver dès le 7e mois de grossesse. La séance nouveau-né doit avoir lieu entre 7 et 14 jours après la naissance - c'est la fenêtre idéale. Un créneau est réservé à l'avance et ajusté selon la date d'accouchement réelle.`,
];

const FAQ_AGE_IDEAL = [
  (c) => `La fenêtre idéale pour une séance nouveau-né est entre 7 et 14 jours de vie. À cet âge, bébé dort beaucoup, ses petits membres sont encore souples et il se laisse poser facilement. Au-delà de 3 semaines, la séance reste possible mais les poses deviennent différentes. Pour les bébés de ${c.name} et alentours, Valeria s'adapte à chaque situation.`,
  (c) => `Entre 7 et 14 jours après la naissance est la période idéale : bébé dort profondément, ses réflexes primitifs sont encore présents et il se laisse guider avec douceur. Après 3 semaines, les poses changent mais la séance reste magnifique. Valeria travaille avec tous les âges depuis ${c.name}.`,
  (c) => `7 à 14 jours pour un nouveau-né (poses enroulées, petits accessoires, bébé profondément endormi), 6 mois pour bébé assis qui sourit (collection Bimba/Bimbo). Les deux sont différents et complémentaires. Quelle que soit l'étape depuis ${c.name}, Valeria s'adapte avec douceur et professionnalisme.`,
];

const FAQ_QUOI_APPORTER = [
  (c) => `Pour la séance nouveau-né depuis ${c.name}, apportez simplement de quoi nourrir bébé (biberons ou allaitement), une tétine si bébé en utilise, et des changes. Tenues, accessoires, décors et couvertures douces sont fournis par Valeria au studio de Clouange. Prévoyez 1h à 3h selon le rythme de bébé.`,
  (c) => `Valeria fournit tout au studio : tenues, bonnets, accessoires, décors et couvertures. Depuis ${c.name}, apportez uniquement de quoi nourrir bébé et un ou deux layettes si vous souhaitez une tenue personnelle. Le studio est chauffé pour le confort de votre nourrisson.`,
  (c) => `Rien de particulier à prévoir pour les familles de ${c.name} ! Le studio de Clouange est entièrement équipé : tenues nouveau-né, couvertures, accessoires et décors variés. Apportez de quoi nourrir bébé et comptez entre 1h et 3h selon son rythme. Valeria prend tout le temps nécessaire.`,
];

const FAQ_STUDIO_DOMICILE = [
  (c) => `Les séances bébé se déroulent au studio de Clouange, à ${c.distanceKm} km de ${c.name}. Le studio est équipé et chauffé spécialement pour les nouveau-nés. Valeria ne propose pas de séances à domicile pour garantir la qualité des lumières et des décors. Le déplacement depuis ${c.name} est rapide et l'accueil très personnalisé.`,
  (c) => `Pour des raisons de qualité (éclairage, décors, température), les séances nouveau-né et bébé se font exclusivement au studio de Clouange, à ${c.distanceKm} km de ${c.name}. C'est un espace chauffé, calme et entièrement dédié au confort de bébé et de sa famille.`,
  (c) => `Les séances bébé ont lieu au studio à Clouange (${c.distanceKm} km de ${c.name}) - un espace pensé pour le bien-être des nouveau-nés : température adaptée, lumière douce, matériel sécurisé. La séance à domicile n'est pas proposée pour garantir les meilleures conditions possibles.`,
];

export default {
  name: 'PhotographeBebeVille',

  head() {
    if (!this.city) return { title: 'Photographe Bébé - VDL Photographe' };
    const c = this.city;
    const h = cityHash(c.slug);
    const title = META_TITLE_VARIANTS[h % 3](c);
    const desc = META_DESC_VARIANTS[h % 3](c);
    const url = `https://vdlphotographe.fr/photographe-bebe-${c.slug}`;

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
            name: 'VDL Photographe - Photographe Bébé',
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
            knowsAbout: ['Photographie nouveau-né', 'Photographie bébé', 'Séance naissance', 'Photographie famille'],
          },
        },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://vdlphotographe.fr/' },
              { '@type': 'ListItem', position: 2, name: 'Photographe Bébé Moselle', item: 'https://vdlphotographe.fr/naissance' },
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
        return `Valeria Daniele Leonardi se déplace depuis son studio de Clouange pour les familles de ${name}. Séances nouveau-né, bébé et naissance à ${dist} km de chez vous.`;
      } else if (pop < 2000) {
        return `À seulement ${dist} km de ${name}, le studio VDL à Clouange accueille les bébés et nouveau-nés de toute la Moselle. Des séances douces, au rythme de votre nourrisson.`;
      } else if (pop < 10000) {
        return `Photographe bébé depuis ${name} : Valeria Daniele Leonardi immortalise les premiers instants de vie de votre nourrisson au studio de Clouange, à ${dist} km. Séances naissance entre 7 et 14 jours de vie.`;
      } else {
        return `Les familles de ${name} et de toute la Moselle font confiance à Valeria Daniele Leonardi pour immortaliser les premiers jours de leur bébé. Studio à Clouange, à ${dist} km - doux, chaleureux, pensé pour les nouveau-nés.`;
      }
    },

    localContextDetail() {
      if (!this.city) return '';
      const name = this.city.name;
      const dist = this.city.distanceKm;
      const h = cityHash(this.city.slug);
      const details = [
        `Depuis ${name}, à ${dist} km du studio de Clouange, Valeria Daniele Leonardi accueille les nouveau-nés et leurs familles avec une patience et une douceur infinies. Le studio est chauffé, équipé de tenues, de bonnets, d'accessoires et de décors variés pour immortaliser les premiers jours de bébé dans des conditions parfaites.`,
        `Le studio photo de Clouange, à ${dist} km de ${name}, est un espace pensé pour le confort des nouveau-nés : température douce, lumière flatteuse, matériel sécurisé. Valeria adapte chaque séance au rythme de bébé - tétées, siestes, câlins - pour que les images soient le reflet exact de ces premiers instants précieux.`,
        `À ${dist} km de ${name}, Valeria Daniele Leonardi reçoit les bébés de toute la Moselle dans son studio de Clouange. Elle travaille au rythme de chaque nourrisson, sans jamais forcer une pose ni brusquer une transition. Le résultat : des images intemporelles qui capturent la fragilité et la beauté de ces premiers jours.`,
      ];
      return details[h % 3];
    },

    prestations() {
      if (!this.city) return [];
      const c = this.city;
      const h = cityHash(c.slug);
      return [
        { icon: '👶', title: 'Nouveau-né (7–14 jours)', desc: NAISSANCE_DESC[h % 3](c), price: 'Collections dès 125€', route: '/naissance' },
        { icon: '🌸', title: 'Bébé 6 mois', desc: BEBE_6MOIS_DESC[h % 3](c), price: 'Collection à 125€', route: '/naissance' },
        { icon: '👨‍👩‍👧', title: 'Famille avec bébé', desc: FAMILLE_BEBE_DESC[h % 3](c), price: 'Collections dès 125€', route: '/naissance' },
        { icon: '🤰', title: 'Duo Grossesse + Naissance', desc: GROSSESSE_NAISSANCE_DESC[h % 3](c), price: 'Collections dès 195€', route: '/grossesse' },
        { icon: '📷', title: 'Portrait bébé (étapes clés)', desc: PORTRAIT_BEBE_DESC[h % 3](c), price: 'À partir de 125€', route: '/naissance' },
      ];
    },

    faqs() {
      if (!this.city) return [];
      const c = this.city;
      const h = cityHash(c.slug);
      return [
        { q: `Quand réserver la séance bébé depuis ${c.name} ?`, a: FAQ_QUAND_RESERVER[h % 3](c) },
        { q: `Quel est l'âge idéal pour photographier bébé ?`, a: FAQ_AGE_IDEAL[h % 3](c) },
        { q: `Que faut-il apporter pour la séance nouveau-né ?`, a: FAQ_QUOI_APPORTER[h % 3](c) },
        { q: `La séance se passe au studio ou à domicile ?`, a: FAQ_STUDIO_DOMICILE[h % 3](c) },
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
