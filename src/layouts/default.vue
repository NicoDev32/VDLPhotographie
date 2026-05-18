<template>
  <div id="app" class="min-h-screen">
    <Header />
    <nuxt />
    <Footer />
    <CookieBanner />
    <WhatsAppButton />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import CookieBanner from '~/components/CookieBanner.vue'
import WhatsAppButton from '~/components/WhatsAppButton.vue'

export default {
  name: 'DefaultLayout',
  components: { Header, Footer, CookieBanner, WhatsAppButton },
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
</style>
