<template>
  <div id="app" class="min-h-screen">
    <div id="nav">
      <!--   <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// Assurer que le body prend toute la hauteur pour le sticky header
html, body {
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