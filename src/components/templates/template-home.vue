<template>
  <v-app>
    <molecule-header></molecule-header>
    <v-main>
      <molecule-carousel></molecule-carousel>
      <organism-main-page></organism-main-page>
    </v-main>
    <molecule-footer></molecule-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  MoleculeHeader,
  MoleculeCarousel,
  MoleculeFooter,
} from "@/components/molecules";
import { OrganismMainPage } from "@/components/organisms";

@Component({
  components: {
    MoleculeHeader,
    MoleculeCarousel,
    MoleculeFooter,
    OrganismMainPage,
  },
})
export default class TemplateHome extends Vue {}
</script>

<style scoped>
</style>
