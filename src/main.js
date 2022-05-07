import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/main.css";
import VueToastificationPlugin, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;
Vue.use(VueToastificationPlugin, { position: POSITION.BOTTOM_CENTER });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
