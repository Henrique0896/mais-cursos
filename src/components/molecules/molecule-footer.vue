<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="space-cadete-color">
        <strong class="subheading">+cursos! Seu curso, seu futuro!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>+cursos</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MoleculeFooter extends Vue {
  icons: string[] = [
    "mdi-facebook",
    "mdi-twitter",
    "mdi-linkedin",
    "mdi-instagram",
  ];
}
</script>

<style scoped>
.space-cadete-color {
  background-color: #273469;
}
</style>
