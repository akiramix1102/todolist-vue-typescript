import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/ToDo.vue";

Vue.use(VueRouter);

// @ts-ignore
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
