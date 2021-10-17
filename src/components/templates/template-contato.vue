<template>
  <v-app>
    <molecule-header></molecule-header>
    <v-main> <h1>Esta é a Contato</h1> </v-main>
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
export default class TemplateContato extends Vue {}
</script>

<style scoped>
</style>
