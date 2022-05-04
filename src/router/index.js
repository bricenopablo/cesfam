import Vue from "vue";
import VueRouter from "vue-router";
import VistaInicio from "../views/VistaInicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: VistaInicio,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/VistaLogin.vue"),
  },
  {
    path: "/preescripciones",
    name: "Preescripciones",
    component: () => import("../views/VistaPreescripcion.vue"),
  },
  {
    path: "/detalle",
    name: "Detalle",
    component: () => import("../views/VistaDetalle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
