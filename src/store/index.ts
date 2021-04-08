import Vue from "vue";
import Vuex from "vuex";
import Todos from "@/store/module/Todo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Todos
  }
});
