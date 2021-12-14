<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-item v-slot="{ active, toggle }">
        <v-card
          :color="active ? 'primary' : '#30343F'"
          class="d-flex align-center justify-center pa-10"
          dark
          height="200"
          @click="toggle"
          v-bind="attrs"
          v-on="on"
        >
          <div class="d-flex align-center flex-column">
            <h4 class="mb-5">{{ career.name }}</h4>

            <p class="caption d-flex align-self-start"></p>
          </div>
          <v-scroll-y-transition>
            <div v-if="active" class="d-flex align-center justify-center"></div>
          </v-scroll-y-transition>
        </v-card>
      </v-item>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ career.name }}
      </v-card-title>

      <v-card-text>
        {{ career.description }}
        <br />
        Por apenas: {{ career.price }} reais
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Eu quero! </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { IProduct } from "../../models/interfaces";
import { careers } from "../../helpers";

@Component
export default class AtomDialogCare extends Vue {
  @Prop({ default: careers })
  career?: IProduct[];
}
</script>

<style scoped>
</style>
