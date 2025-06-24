<template>
  <div id="app" class="min-h-screen">
    <div id="nav">
      <!--   <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    currentDomain() {
      if (typeof window !== "undefined") {
        return window.location.hostname;
      }
      return "vdlphotographe.fr"; // domaine par défaut
    },
    canonicalUrl() {
      const path = this.$route.path;
      return `https://${this.currentDomain}${path}`;
    },
    pageTitle() {
      // Mapping des routes vers titres
      const titles = {
        "/accueil": "Accueil - Photographe Professionnel",
        "/mariage": "Photographie de Mariage",
        "/grossesse": "Photos de Grossesse et Maternité",
        "/famille": "Photos de Famille",
        "/portrait": "Photos Portrait Professionnel",
        "/naissance": "Photos de Naissance et Nouveau-né",
        "/formulaire": "Contact et Devis",
      };
      return titles[this.$route.path] || "Photographe Professionnel";
    },
    pageDescription() {
      // Mapping des routes vers descriptions
      const descriptions = {
        "/accueil":
          "VLD Photographe - Photographe professionnel à Clouange. Spécialiste en mariage, grossesse, famille, portrait et naissance. Services en France et Luxembourg.",
        "/mariage":
          "Photographe de mariage à Clouange, Moselle et Luxembourg. Immortalisez votre jour J avec VLD Photographe. Portfolio et tarifs disponibles.",
        "/grossesse":
          "Séance photo grossesse à Clouange et Luxembourg. Capturez cette période unique avec VLD Photographe. Photos maternité tendres et artistiques.",
        "/famille":
          "Séances photo famille à Clouange et région Luxembourg. Portraits familiaux naturels et authentiques par VLD Photographe.",
        "/portrait":
          "Séances portrait professionnel et artistique à Clouange. Révélez votre personnalité avec VLD Photographe. Studio et extérieur.",
        "/naissance":
          "Séances photo nouveau-né à Clouange et Luxembourg. Immortalisez les premiers jours de bébé avec VLD Photographe. Sécurité et douceur garanties.",
        "/formulaire":
          "Contactez VLD Photographe pour votre projet photo à Clouange et Luxembourg. Devis gratuit pour mariage, grossesse, famille, portrait et naissance.",
      };
      return (
        descriptions[this.$route.path] ||
        "VLD Photographe - Photographe professionnel à Clouange spécialisé en mariage, grossesse, famille, portrait et naissance. Capturez vos moments précieux en France et Luxembourg."
      );
    },
    pageKeywords() {
      // Mapping des routes vers mots-clés
      const keywords = {
        "/accueil":
          "VLD Photographe, photographe Clouange, photographe Luxembourg, mariage, grossesse, famille, portrait, naissance",
        "/mariage":
          "photographe mariage, mariage Clouange, photographe mariage Luxembourg, photos mariage Moselle, wedding photographer",
        "/grossesse":
          "photo grossesse, séance maternité, photographe grossesse Clouange, photos femme enceinte Luxembourg",
        "/famille":
          "photo famille, portrait famille, séance photo famille Clouange, photographe famille Luxembourg",
        "/portrait":
          "photo portrait, portrait professionnel, séance portrait Clouange, photographe portrait Luxembourg",
        "/naissance":
          "photo naissance, nouveau-né, séance photo bébé, photographe naissance Clouange, newborn Luxembourg",
        "/formulaire":
          "contact photographe, devis photo, réservation séance photo, Clouange, Luxembourg, VLD Photographe",
      };
      return (
        keywords[this.$route.path] ||
        "photographe, Clouange, mariage, grossesse, famille, portrait, naissance, photographe professionnelle, Moselle, Luxembourg, France"
      );
    },
  },
  metaInfo() {
    return {
      // Titre dynamique selon la page
      title: this.pageTitle,
      titleTemplate: "%s | VLD Photographe",

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.pageDescription },
        { name: "keywords", content: this.pageKeywords },
        { name: "author", content: "VLD Photographe" },
        { name: "robots", content: "index, follow" },

        // Open Graph dynamique
        { property: "og:site_name", content: "VLD Photographe" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        {
          property: "og:title",
          content: `${this.pageTitle} | VLD Photographe`,
        },
        { property: "og:description", content: this.pageDescription },
        { property: "og:url", content: this.canonicalUrl },
        {
          property: "og:image",
          content: `https://${this.currentDomain}/og-image.jpg`,
        },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: `${this.pageTitle} | VLD Photographe`,
        },
        { name: "twitter:description", content: this.pageDescription },
        {
          name: "twitter:image",
          content: `https://${this.currentDomain}/og-image.jpg`,
        },

        // Schema.org Business
        {
          name: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "VLD Photographe",
            description:
              "Photographe professionnel spécialisé en mariage, grossesse, famille, portrait et naissance",
            url: `https://${this.currentDomain}`,
            telephone: "+33619037490",
            email: "Vdlphotographe@outlook.com",
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
            serviceArea: [
              {
                "@type": "Country",
                name: "France",
              },
              {
                "@type": "Country",
                name: "Luxembourg",
              },
            ],
            priceRange: "€€",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services Photographie",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Photographie de Mariage",
                    description: "Couverture complète de votre jour J",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Photographie de Grossesse",
                    description: "Séances maternité artistiques",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Photographie de Famille",
                    description: "Portraits familiaux naturels",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Photographie de Portrait",
                    description: "Portraits professionnels et artistiques",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Photographie de Naissance",
                    description: "Séances nouveau-né sécurisées",
                  },
                },
              ],
            },
            sameAs: [
              `https://vdlphotographe.fr`,
              `https://vdlphotographe.com`,
              `https://vdlphotographe.lu`,
            ],
          }),
        },
      ],

      link: [
        { rel: "canonical", href: this.canonicalUrl },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        // Liens hreflang pour multi-domaines
        {
          rel: "alternate",
          hreflang: "fr-FR",
          href: `https://vdlphotographe.fr${this.$route.path}`,
        },
        {
          rel: "alternate",
          hreflang: "fr-LU",
          href: `https://vdlphotographe.lu${this.$route.path}`,
        },
        {
          rel: "alternate",
          hreflang: "en",
          href: `https://vdlphotographe.com${this.$route.path}`,
        },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: `https://vdlphotographe.fr${this.$route.path}`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
// Assurer que le body prend toute la hauteur pour le sticky header
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
