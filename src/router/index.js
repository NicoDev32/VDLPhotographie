import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  /*
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" "../views/About.vue"),
  }, */
  {
    path: "/accueil",
    name: "Accueil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Accueil.vue"),
  },
  {
    path: "/formulaire",
    name: "Formulaire",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Formulaire.vue"),
  },
  {
    path: "/mariage",
    name: "Mariage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mariage.vue"),
  },
  {
    path: "/grossesse",
    name: "Grossesse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Grossesse.vue"),
  },
  {
    path: "/famille",
    name: "Famille",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Famille.vue"),
  },
  {
    path: "/portrait",
    name: "Portrait",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portrait.vue"),
  },
  {
    path: "/naissance",
    name: "Naissance",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Naissance.vue"),
  },
  {
    path: "/apropos",
    name: "APropos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/APropos.vue"),
  },
];

const router = new VueRouter({
  routes,
  // 🎯 Configuration pour scroll automatique en haut
  scrollBehavior(to, from, savedPosition) {
    // Si il y a une position sauvegardée (bouton retour), on la restaure
    if (savedPosition) {
      return savedPosition;
    }
    // Sinon, on scroll tout en haut
    return { x: 0, y: 0 };
  },
});

export default router;
