<template>
  <v-app>
    <molecule-header></molecule-header>
    <v-main>
      <molecule-carousel></molecule-carousel>
      <molecule-footer></molecule-footer>
    </v-main>
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

@Component({
  components: {
    MoleculeHeader,
    MoleculeCarousel,
    MoleculeFooter,
  },
})
export default class TemplateHome extends Vue {}
</script>

<style scoped>
</style>
