<template>
  <v-app-bar app flat color="#FFFFFF">
    <v-container>
      <v-toolbar flat>
        <v-toolbar-title>Mais cursos</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text> Home </v-btn>

          <v-btn text> Sobre </v-btn>

          <v-btn text> Contato </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>


<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MoleculeHeader extends Vue {}
</script>

<style scoped>
</style>
