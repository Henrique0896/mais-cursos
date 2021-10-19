<template>
  <div>
    <div class="d-flex justify-center align-center pa-10">
      <h1>Carreiras</h1>
    </div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div v-if="active" class="text-h2 flex-grow-1 text-center">
                    Active
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>


<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MoleculeCarees extends Vue {}
</script>

<style scoped>
</style>
