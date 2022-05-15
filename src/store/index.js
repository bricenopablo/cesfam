import AuthService from "@/services/AuthService";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: null,
  },
  mutations: {
    SET_USER: (state, payload) => (state.userData = payload),
  },
  actions: {
    async login({ dispatch }, credentials) {
      const { token } = await AuthService.login(credentials);
      sessionStorage.setItem("accessToken", token);
      await dispatch("fetchUserData");
    },
    async fetchUserData({ commit }) {
      const { data } = await AuthService.getUserData();
      commit("SET_USER", data);
    },
    async logout({ commit }) {
      sessionStorage.removeItem("accessToken");
      commit("SET_USER", null);
    },
  },
  modules: {},
});
