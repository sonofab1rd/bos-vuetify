import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hideDrawer: "",
  },
  getters: {
    getDrawerState(state) {
      return state.hideDrawer;
    },
  },
  mutations: {
    toggleNav(state) {
      if (state.hideDrawer !== "") {
        state.hideDrawer = "";
      } else {
        state.hideDrawer = "no";
      }
    },
  },
  actions: {
    toggleNav(context) {
      context.commit("toggleNav");
    },
  },
  modules: {},
});
