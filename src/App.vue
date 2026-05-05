<template>
  <div id="app" class="min-h-screen">
    <div id="nav">
      <!--   <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
    <CookieBanner />
    <WhatsAppButton />
  </div>
</template>

<script>
import CookieBanner from "@/components/CookieBanner.vue";
import WhatsAppButton from "@/components/WhatsAppButton.vue";

export default {
  name: "App",
  components: { CookieBanner, WhatsAppButton },
  computed: {
    currentDomain() {
      if (typeof window !== "undefined") {
        return window.location.hostname;
      }
      return "vdlphotographe.fr";
    },
    canonicalUrl() {
      return `https://${this.currentDomain}${this.$route.path}`;
    },
    pageTitle() {
      const titles = {
        "/": "Photographe à Clouange - Mariage, Grossesse, Famille, Naissance, Portrait",
        "/mariage": "Photographe Mariage Clouange, Metz, Thionville, Luxembourg",
        "/grossesse": "Photographe Grossesse Maternité Clouange, Moselle",
        "/famille": "Photographe Famille Clouange, Moselle et Luxembourg",
        "/portrait": "Photographe Portrait Clouange, Moselle",
        "/naissance": "Photographe Naissance Nouveau-né Clouange, Moselle",
        "/formulaire": "Contact et Devis - Photographe Clouange",
        "/apropos": "Valeria Daniele Leonardi - Photographe à Clouange",
      };
      return titles[this.$route.path] || "Photographe Professionnelle à Clouange, Moselle";
    },
    pageDescription() {
      const descriptions = {
        "/": "Valeria Daniele Leonardi, photographe professionnelle à Clouange (57150), Moselle. Spécialisée en mariage, grossesse, famille, portrait et naissance. Intervient à Metz, Thionville, Hayange, Amnéville et au Luxembourg.",
        "/mariage": "Photographe de mariage à Clouange, Metz, Thionville et Luxembourg. Immortalisez votre jour J avec VDL Photographe. Collections dès 795€. Devis gratuit.",
        "/grossesse": "Séance photo grossesse à Clouange et Moselle. Capturez ce moment unique avec douceur et poésie. Collections maternité dès 195€. Photographe Metz, Thionville, Hayange.",
        "/famille": "Séances photo famille à Clouange, Metz, Thionville et Luxembourg. Portraits familiaux naturels et authentiques par VDL Photographe. Collections dès 95€.",
        "/portrait": "Séances portrait professionnel et artistique à Clouange, Moselle. Femmes, enfants, hommes : révélez votre personnalité avec VDL Photographe. Dès 95€.",
        "/naissance": "Photographe naissance et nouveau-né à Clouange, Moselle. Immortalisez les premiers jours de bébé. Séances sécurisées et douces dès 125€. Metz, Thionville, Hayange.",
        "/formulaire": "Contactez VDL Photographe à Clouange (57150) pour votre projet photo. Devis gratuit pour mariage, grossesse, famille, portrait et naissance en Moselle et Luxembourg.",
        "/apropos": "Découvrez Valeria Daniele Leonardi, photographe professionnelle à Clouange (57150) depuis 2023. Spécialisée en mariage, grossesse, famille, portrait et naissance en Moselle et au Luxembourg.",
      };
      return (
        descriptions[this.$route.path] ||
        "VDL Photographe - Valeria Daniele Leonardi, photographe professionnelle à Clouange (57150), Moselle. Mariage, grossesse, famille, portrait et naissance à Metz, Thionville, Hayange et Luxembourg."
      );
    },
    pageKeywords() {
      const localBase = "Clouange, Moselle, Metz, Thionville, Hayange, Amnéville, Florange, Knutange, Algrange, Fameck, Hagondange, photographe 57, Valeria Daniele Leonardi, VDL Photographe, Luxembourg";
      const keywords = {
        "/": `photographe Clouange, photographe Moselle, ${localBase}`,
        "/mariage": `photographe mariage Clouange, photographe mariage Metz, photographe mariage Thionville, photographe mariage Luxembourg, mariage Moselle, wedding photographer, ${localBase}`,
        "/grossesse": `photo grossesse Clouange, séance maternité Moselle, photographe grossesse Metz, femme enceinte Thionville, maternité Luxembourg, ${localBase}`,
        "/famille": `photo famille Clouange, séance famille Moselle, photographe famille Metz, portraits famille Thionville, famille Luxembourg, ${localBase}`,
        "/portrait": `photo portrait Clouange, portrait professionnel Moselle, photographe portrait Metz, portrait artistique Thionville, ${localBase}`,
        "/naissance": `photo naissance Clouange, nouveau-né Moselle, photographe naissance Metz, bébé Thionville, newborn Luxembourg, séance bébé, ${localBase}`,
        "/formulaire": `contact photographe Clouange, devis photo Moselle, réservation séance Metz, photographe Thionville, ${localBase}`,
        "/apropos": `Valeria Daniele Leonardi photographe, photographe Clouange biographie, BEP photographie 2023, ${localBase}`,
      };
      return (
        keywords[this.$route.path] ||
        `photographe professionnelle, ${localBase}`
      );
    },
    localBusinessSchema() {
      return {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://vdlphotographe.fr/#localbusiness",
        name: "VDL Photographe",
        legalName: "Valeria Daniele Leonardi",
        description: "Photographe professionnelle spécialisée en mariage, grossesse, famille, portrait et naissance à Clouange, Moselle. Intervient à Metz, Thionville, Hayange et au Luxembourg.",
        url: `https://${this.currentDomain}`,
        telephone: "+33619037490",
        email: "Vdlphotographe@outlook.com",
        image: `https://${this.currentDomain}/og-image.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Clouange",
          postalCode: "57150",
          addressRegion: "Moselle",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "49.2657",
          longitude: "6.0597",
        },
        areaServed: [
          { "@type": "City", name: "Clouange" },
          { "@type": "City", name: "Metz" },
          { "@type": "City", name: "Thionville" },
          { "@type": "City", name: "Hayange" },
          { "@type": "City", name: "Amnéville" },
          { "@type": "City", name: "Florange" },
          { "@type": "City", name: "Knutange" },
          { "@type": "City", name: "Algrange" },
          { "@type": "City", name: "Serémange-Erzange" },
          { "@type": "City", name: "Uckange" },
          { "@type": "City", name: "Richemont" },
          { "@type": "City", name: "Hagondange" },
          { "@type": "City", name: "Fameck" },
          { "@type": "City", name: "Nilvange" },
          { "@type": "City", name: "Terville" },
          { "@type": "Country", name: "Luxembourg" },
        ],
        priceRange: "€€",
        founder: {
          "@type": "Person",
          name: "Valeria Daniele Leonardi",
          jobTitle: "Photographe Professionnelle",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Photographie",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Photographie de Mariage", description: "Couverture complète de votre mariage en Moselle et Luxembourg" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Photographie de Grossesse", description: "Séances maternité artistiques à Clouange et Moselle" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Photographie de Famille", description: "Portraits familiaux naturels en Moselle et Luxembourg" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Photographie de Portrait", description: "Portraits professionnels et artistiques à Clouange" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Photographie de Naissance", description: "Séances nouveau-né sécurisées en Moselle" },
            },
          ],
        },
        sameAs: [
          "https://vdlphotographe.fr",
          "https://vdlphotographe.com",
          "https://www.facebook.com/p/VDLphotographe-100063617104628/",
          "https://www.instagram.com/vdlphotographe/",
        ],
      };
    },
    breadcrumbSchema() {
      const items = [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `https://${this.currentDomain}/` },
      ];
      if (this.$route.path !== "/") {
        items.push({ "@type": "ListItem", position: 2, name: this.pageTitle, item: this.canonicalUrl });
      }
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items,
      };
    },
    websiteSchema() {
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://vdlphotographe.fr/#website",
        url: `https://${this.currentDomain}`,
        name: "VDL Photographe",
        description: "Photographe professionnelle à Clouange, Moselle - Mariage, Grossesse, Famille, Portrait, Naissance",
        inLanguage: "fr-FR",
      };
    },
  },
  metaInfo() {
    const domain = this.currentDomain;
    const path = this.$route.path;

    const scripts = [
      {
        vmid: "ldjson-business",
        type: "application/ld+json",
        innerHTML: JSON.stringify(this.localBusinessSchema),
      },
      {
        vmid: "ldjson-breadcrumbs",
        type: "application/ld+json",
        innerHTML: JSON.stringify(this.breadcrumbSchema),
      },
    ];

    if (path === "/") {
      scripts.push({
        vmid: "ldjson-website",
        type: "application/ld+json",
        innerHTML: JSON.stringify(this.websiteSchema),
      });
    }

    return {
      title: this.pageTitle,
      titleTemplate: "%s | VDL Photographe",

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.pageDescription },
        { name: "keywords", content: this.pageKeywords },
        { name: "author", content: "VDL Photographe - Valeria Daniele Leonardi" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

        // Géolocalisation
        { name: "geo.region", content: "FR-57" },
        { name: "geo.placename", content: "Clouange, Moselle, France" },
        { name: "geo.position", content: "49.2657;6.0597" },
        { name: "ICBM", content: "49.2657, 6.0597" },

        // Open Graph
        { property: "og:site_name", content: "VDL Photographe" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:title", content: `${this.pageTitle} | VDL Photographe` },
        { property: "og:description", content: this.pageDescription },
        { property: "og:url", content: this.canonicalUrl },
        { property: "og:image", content: `https://${domain}/og-image.jpg` },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "VDL Photographe - Valeria Daniele Leonardi, photographe à Clouange, Moselle" },
        { property: "og:image:type", content: "image/jpeg" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${this.pageTitle} | VDL Photographe` },
        { name: "twitter:description", content: this.pageDescription },
        { name: "twitter:image", content: `https://${domain}/og-image.jpg` },
        { name: "twitter:image:alt", content: "VDL Photographe - Valeria Daniele Leonardi, photographe à Clouange, Moselle" },
      ],

      link: [
        { rel: "canonical", href: this.canonicalUrl },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "manifest", href: "/manifest.json" },
        { rel: "alternate", hreflang: "fr-FR", href: `https://vdlphotographe.fr${path}` },
        { rel: "alternate", hreflang: "x-default", href: `https://vdlphotographe.fr${path}` },
      ],

      script: scripts,

      __dangerouslyDisableSanitizersByTagID: {
        "ldjson-business": ["innerHTML"],
        "ldjson-breadcrumbs": ["innerHTML"],
        "ldjson-website": ["innerHTML"],
      },
    };
  },
};
</script>

<style lang="scss">
// assurer que le body prend toute la hauteur pour le sticky header
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

// Optionnel : ajouter un padding-top au contenu principal si nécessaire
// pour éviter que le header cache le début du contenu
main {
  // padding-top: 80px; // Ajustez selon la hauteur de votre header si besoin
}
</style>
