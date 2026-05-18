<template>
  <div class="accueil bg-[#FFFBF8] text-[#2E2B29] min-h-screen">
    <!-- Hero Section compact -->
    <section class="relative overflow-hidden min-h-[70vh] flex flex-col justify-center py-4 md:py-8 px-4">
      <img
        src="~/assets/mariage6.jpg"
        alt="Photographe professionnelle Valeria Daniele Leonardi a Clouange, Moselle"
        aria-hidden="true"
        fetchpriority="high"
        class="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-64 h-64 bg-[#C2A191] rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 bg-[#ad8e80] rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-6xl mx-auto text-center w-full">
        <div>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-serif tracking-wide leading-tight mb-4 hero-title">
            <span class="block text-[#2E2B29]">VALERIA DANIELE LEONARDI</span>
            <span class="block text-[#C2A191] text-xl md:text-2xl tracking-[0.3em] font-semibold uppercase mt-2">
              Photographe Clouange, Metz, Thionville, Moselle
            </span>
          </h1>

          <div class="flex items-center justify-center space-x-4 mb-4 hero-logo">
            <div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#C2A191]"></div>
            <img
              src="~/assets/logo_vdl.jpg"
              alt="VDL Photographe - Logo Valeria Daniele Leonardi, photographe a Clouange, Moselle"
              class="h-32 md:h-32 w-auto object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <div class="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#C2A191]"></div>
          </div>

          <p class="text-lg md:text-xl tracking-[0.4em] font-semibold text-[#C2A191] uppercase hero-subtitle">
            Photographe Moselle et alentours
          </p>
        </div>
      </div>
    </section>

    <!-- Slogan compact -->
    <section class="py-4 md:py-6 px-4 relative">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed hero-slogan">
          <span class="block text-[#2E2B29]">Capturer des Moments,</span>
          <span class="block text-[#C2A191] mt-1">Raconter des Histoires</span>
        </h2>
      </div>
    </section>

    <!-- Section camera animee -->
    <section class="camera-section w-full flex items-center justify-center overflow-hidden">
      <div class="camera-zoom-wrapper">
        <CameraAnimated />
      </div>
    </section>

    <!-- Grille de photos -->
    <section class="py-6 md:py-12 px-4" ref="portfolioSection">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-2xl md:text-3xl font-serif text-center mb-6 md:mb-10 text-[#2E2B29] scroll-fade-in">
          Vos Histoires En Image
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div class="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-fade-in">
            <img
              src="~/assets/portrait_5.jpg"
              alt="Seance portrait photographe a Clouange, Moselle par VDL Photographe"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h4 class="text-xl font-serif mb-2">Portrait</h4>
              <p class="text-sm opacity-90">Capturer l'essence unique de chaque personne</p>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-fade-in">
            <img
              src="~/assets/famille_1.jpg"
              alt="Photo de famille par VDL Photographe, photographe en Moselle"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h4 class="text-xl font-serif mb-2">Famille</h4>
              <p class="text-sm opacity-90">L'amour immortalise dans chaque regard</p>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-fade-in">
            <img
              src="~/assets/grossesse_2.jpg"
              alt="Seance photo grossesse photographe a Clouange, Moselle par VDL Photographe"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h4 class="text-xl font-serif mb-2">Grossesse</h4>
              <p class="text-sm opacity-90">La beaute dans les plus petits details</p>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-fade-in">
            <img
              src="~/assets/mariage2.jpg"
              alt="Photo de mariage photographe en Moselle et au Luxembourg par VDL Photographe"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h4 class="text-xl font-serif mb-2">Mariage</h4>
              <p class="text-sm opacity-90">Les premiers instants precieux</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Univers categories -->
    <section class="py-12 md:py-20 px-4 bg-gradient-to-b from-[#FFFBF8] to-[#F7EFE9]" ref="specialitiesSection">
      <div class="max-w-5xl mx-auto">

        <div class="text-center mb-12 scroll-fade-in">
          <p class="text-sm tracking-[0.35em] uppercase text-[#C2A191] font-semibold mb-3">Expertises</p>
          <h3 class="text-2xl md:text-4xl font-serif text-[#2E2B29]">Mes univers préférés</h3>
          <div class="flex items-center justify-center gap-3 mt-4">
            <div class="w-16 h-px bg-[#C2A191]"></div>
            <div class="w-2 h-2 rounded-full bg-[#C2A191]"></div>
            <div class="w-16 h-px bg-[#C2A191]"></div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">

          <nuxt-link to="/mariage" class="univers-card group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg border border-transparent hover:border-[#C2A191]/30 transition-all duration-400 scroll-fade-in">
            <div class="w-16 h-16 rounded-full bg-[#C2A191]/15 group-hover:bg-[#C2A191] flex items-center justify-center transition-all duration-300">
              <img src="~/assets/picto_mariage.png" alt="Mariage" class="w-8 h-8 object-contain transition-all duration-300 univers-icon" />
            </div>
            <span class="text-base font-serif text-[#2E2B29] group-hover:text-[#C2A191] transition-colors duration-300 tracking-wide">Mariage</span>
          </nuxt-link>

          <nuxt-link to="/naissance" class="univers-card group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg border border-transparent hover:border-[#C2A191]/30 transition-all duration-400 scroll-fade-in">
            <div class="w-16 h-16 rounded-full bg-[#C2A191]/15 group-hover:bg-[#C2A191] flex items-center justify-center transition-all duration-300">
              <img src="~/assets/picto_naissance.png" alt="Naissance" class="w-8 h-8 object-contain transition-all duration-300 univers-icon" />
            </div>
            <span class="text-base font-serif text-[#2E2B29] group-hover:text-[#C2A191] transition-colors duration-300 tracking-wide">Naissance</span>
          </nuxt-link>

          <nuxt-link to="/famille" class="univers-card group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg border border-transparent hover:border-[#C2A191]/30 transition-all duration-400 scroll-fade-in">
            <div class="w-16 h-16 rounded-full bg-[#C2A191]/15 group-hover:bg-[#C2A191] flex items-center justify-center transition-all duration-300">
              <img src="~/assets/picto_famille.png" alt="Famille" class="w-8 h-8 object-contain transition-all duration-300 univers-icon" />
            </div>
            <span class="text-base font-serif text-[#2E2B29] group-hover:text-[#C2A191] transition-colors duration-300 tracking-wide">Famille</span>
          </nuxt-link>

          <nuxt-link to="/grossesse" class="univers-card group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg border border-transparent hover:border-[#C2A191]/30 transition-all duration-400 scroll-fade-in">
            <div class="w-16 h-16 rounded-full bg-[#C2A191]/15 group-hover:bg-[#C2A191] flex items-center justify-center transition-all duration-300">
              <img src="~/assets/picto_grossesse.png" alt="Grossesse" class="w-8 h-8 object-contain transition-all duration-300 univers-icon" />
            </div>
            <span class="text-base font-serif text-[#2E2B29] group-hover:text-[#C2A191] transition-colors duration-300 tracking-wide">Grossesse</span>
          </nuxt-link>

          <nuxt-link to="/portrait" class="univers-card group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg border border-transparent hover:border-[#C2A191]/30 transition-all duration-400 scroll-fade-in col-span-2 sm:col-span-1">
            <div class="w-16 h-16 rounded-full bg-[#C2A191]/15 group-hover:bg-[#C2A191] flex items-center justify-center transition-all duration-300">
              <img src="~/assets/picto_portrait.png" alt="Portrait" class="w-8 h-8 object-contain transition-all duration-300 univers-icon" />
            </div>
            <span class="text-base font-serif text-[#2E2B29] group-hover:text-[#C2A191] transition-colors duration-300 tracking-wide">Portrait</span>
          </nuxt-link>

        </div>
      </div>
    </section>

    <!-- CTA finale -->
    <section class="py-12 md:py-20 px-4 bg-gradient-to-br from-[#C2A191]/10 to-[#ad8e80]/10" ref="ctaSection">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-3xl md:text-4xl font-serif mb-6 text-[#2E2B29] scroll-fade-in">
          Pret a raconter votre histoire ?
        </h3>
        <p class="text-lg md:text-xl text-[#2E2B29]/80 mb-8 leading-relaxed scroll-fade-in">
          Contactez-moi des aujourd'hui, j'ai hate d'en savoir plus !
        </p>
        <nuxt-link
          to="/formulaire"
          class="inline-flex items-center px-10 py-4 bg-[#2E2B29] hover:bg-[#2E2B29]/90 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl scroll-fade-in"
        >
          Me contacter
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Accueil',

  head() {
    return {
      title: 'Photographe Clouange, Metz, Thionville, Moselle',
      meta: [
        { hid: 'description', name: 'description', content: 'Valeria Daniele Leonardi, photographe professionnelle a Clouange (57150), Moselle. Specialisee en mariage, grossesse, famille, portrait et naissance. Intervient a Metz, Thionville, Hayange, Amneville et au Luxembourg.' },
        { hid: 'keywords', name: 'keywords', content: 'photographe Clouange, photographe Moselle, photographe Metz, photographe Thionville, mariage, grossesse, famille, naissance, portrait, Valeria Daniele Leonardi, VDL Photographe' },
        { hid: 'og:title', property: 'og:title', content: 'Photographe Clouange, Metz, Thionville, Moselle | VDL Photographe' },
        { hid: 'og:description', property: 'og:description', content: 'Valeria Daniele Leonardi, photographe professionnelle a Clouange (57150), Moselle. Mariage, grossesse, famille, portrait et naissance a Metz, Thionville, Hayange et Luxembourg.' },
        { hid: 'og:url', property: 'og:url', content: 'https://vdlphotographe.fr/' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Photographe Clouange, Metz, Thionville, Moselle | VDL Photographe' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Valeria Daniele Leonardi, photographe professionnelle a Clouange (57150), Moselle. Mariage, grossesse, famille, portrait et naissance.' },
      ],
      link: [
        { rel: 'canonical', href: 'https://vdlphotographe.fr/' },
        { rel: 'alternate', hreflang: 'fr-FR', href: 'https://vdlphotographe.fr/' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://vdlphotographe.fr/' },
      ],
    }
  },

  mounted() {
    this.initAnimations()
    this.setupScrollObserver()
  },

  methods: {
    initAnimations() {
      setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title')
        const heroLogo = document.querySelector('.hero-logo')
        const heroSubtitle = document.querySelector('.hero-subtitle')
        const heroSlogan = document.querySelector('.hero-slogan')
        if (heroTitle) heroTitle.classList.add('animate-in')
        setTimeout(() => { if (heroLogo) heroLogo.classList.add('animate-in') }, 300)
        setTimeout(() => { if (heroSubtitle) heroSubtitle.classList.add('animate-in') }, 600)
        setTimeout(() => { if (heroSlogan) heroSlogan.classList.add('animate-in') }, 900)
      }, 100)
    },

    setupScrollObserver() {
      const options = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in')
        })
      }, options)
      document.querySelectorAll('.scroll-fade-in').forEach((el) => observer.observe(el))
    },
  },
}
</script>

<style scoped>
.hero-title,
.hero-logo,
.hero-subtitle,
.hero-slogan {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
.hero-title.animate-in,
.hero-logo.animate-in,
.hero-subtitle.animate-in,
.hero-slogan.animate-in {
  opacity: 1;
  transform: translateY(0);
}
.scroll-fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}
.scroll-fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}
.scroll-fade-in:nth-child(1) { transition-delay: 0.1s; }
.scroll-fade-in:nth-child(2) { transition-delay: 0.2s; }
.scroll-fade-in:nth-child(3) { transition-delay: 0.3s; }
.scroll-fade-in:nth-child(4) { transition-delay: 0.4s; }

.univers-card:hover .univers-icon {
  filter: brightness(0) invert(1);
}

.link-hover-effect {
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}
.link-hover-effect::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #c2a191;
  transition: width 0.4s ease;
}
.link-hover-effect:hover::after { width: 100%; }

.camera-section { height: 90px; padding-bottom: 10px; }
@media (min-width: 640px)  { .camera-section { height: 120px; } }
@media (min-width: 768px)  { .camera-section { height: 150px; } }
@media (min-width: 1024px) { .camera-section { height: 180px; } }
.camera-zoom-wrapper { zoom: 0.22; }
@media (min-width: 640px)  { .camera-zoom-wrapper { zoom: 0.32; } }
@media (min-width: 768px)  { .camera-zoom-wrapper { zoom: 0.42; } }
@media (min-width: 1024px) { .camera-zoom-wrapper { zoom: 0.50; } }
</style>
