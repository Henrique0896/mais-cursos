import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Maintenance from "../views/Maintenance.vue";
import {
  TemplateHome,
  TemplateSobre,
  TemplateContato,
} from "../components/templates";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: TemplateHome,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: TemplateSobre,
  },
  {
    path: "/contato",
    name: "Contato",
    component: TemplateContato,
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
