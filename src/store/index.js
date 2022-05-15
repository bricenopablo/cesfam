import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patients: [
      {
        id: 1,
        run: "19.572.740-6",
        nombre: "Pablo Briceño",
      },
      {
        id: 2,
        run: "20.984.103-7",
        nombre: "Juan Pablo Navarrete",
      },
      {
        id: 1,
        run: "19.572.740-6",
        nombre: "Pablo Briceño",
      },
      {
        id: 2,
        run: "20.984.103-7",
        nombre: "Juan Pablo Navarrete",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
