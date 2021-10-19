<template>
  <v-app-bar app flat color="#E4D9FF">
    <v-container>
      <v-toolbar flat color="#E4D9FF">
        <v-toolbar-title
          ><v-btn text :href="'/#/'"> <h1>+cursos</h1> </v-btn></v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text :href="'/#/'"> Home </v-btn>

          <v-btn text :href="'/#/sobre'"> Sobre </v-btn>

          <v-btn text :href="'/#/contato'"> Contato </v-btn>
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
h1 {
  font-family: roboto;
  color: #273469;
  text-transform: none;
  font-style: oblique;
}
</style>
