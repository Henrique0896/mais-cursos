import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Maintenance from "../views/Maintenance.vue";
import { TemplateDefault } from "../components/templates";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: TemplateDefault,
  },
  {
    path: "/manutencao",
    name: "Manutenção",
    component: Maintenance,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
