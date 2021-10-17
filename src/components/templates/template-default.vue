<template>
  <v-app>
    <molecule-header></molecule-header>
    <v-main> </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MoleculeHeader } from "@/components/molecules";

@Component({
  components: {
    MoleculeHeader,
  },
})
export default class TemplateDefault extends Vue {}
</script>

<style scoped>
</style>
