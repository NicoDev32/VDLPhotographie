import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMeta from "vue-meta";
import "./assets/tailwind.css";

Vue.use(VueMeta, {
  // Configuration globale pour VueMeta
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
