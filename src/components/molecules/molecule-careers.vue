<template>
  <div>
    <div class="d-flex justify-center align-center pa-10">
      <h1>Carreiras</h1>
    </div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="career in careers" :key="career.id" cols="12" md="4">
            <div class="text-center">
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
                        <div
                          v-if="active"
                          class="d-flex align-center justify-center"
                        ></div>
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
                    <v-btn color="primary" text @click="dialog = false">
                      Eu quero!
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>


<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { IProduct } from "../../models/interfaces";
import { careers } from "../../helpers";

@Component
export default class MoleculeCarees extends Vue {
  careers: IProduct[] = careers;
  dialog: any = false;
}
</script>

<style scoped>
</style>
