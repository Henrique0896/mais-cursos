<template>
  <v-app>
    <molecule-header></molecule-header>
    <v-main> <molecule-banner></molecule-banner></v-main>
    <molecule-footer></molecule-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  MoleculeBanner,
  MoleculeFooter,
  MoleculeHeader,
} from "@/components/molecules";

@Component({
  components: {
    MoleculeHeader,
    MoleculeBanner,
    MoleculeFooter,
  },
})
export default class TemplateSobre extends Vue {}
</script>

<style scoped>
</style>
