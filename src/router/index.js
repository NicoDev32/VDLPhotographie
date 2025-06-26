import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () =>
      import(/* webpackChunkName: "accueil" */ "../views/Accueil.vue"),
  },
  {
    path: "/formulaire",
    name: "Formulaire",
    component: () =>
      import(/* webpackChunkName: "formulaire" */ "../views/Formulaire.vue"),
  },
  {
    path: "/mariage",
    name: "Mariage",
    component: () =>
      import(/* webpackChunkName: "mariage" */ "../views/Mariage.vue"),
  },
  {
    path: "/grossesse",
    name: "Grossesse",
    component: () =>
      import(/* webpackChunkName: "grossesse" */ "../views/Grossesse.vue"),
  },
  {
    path: "/famille",
    name: "Famille",
    component: () =>
      import(/* webpackChunkName: "famille" */ "../views/Famille.vue"),
  },
  {
    path: "/portrait",
    name: "Portrait",
    component: () =>
      import(/* webpackChunkName: "portrait" */ "../views/Portrait.vue"),
  },
  {
    path: "/naissance",
    name: "Naissance",
    component: () =>
      import(/* webpackChunkName: "naissance" */ "../views/Naissance.vue"),
  },
  {
    path: "/apropos",
    name: "APropos",
    component: () =>
      import(/* webpackChunkName: "apropos" */ "../views/APropos.vue"),
  },
  // Route 404 - à mettre en dernier
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history", // 🎯 Ajout du mode history pour supprimer le #
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
