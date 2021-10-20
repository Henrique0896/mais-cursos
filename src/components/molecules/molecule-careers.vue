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
                :color="active ? 'primary' : '#30343F'"
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="d-flex align-center justify-center"
                  ></div>
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
import { ICourse } from "../../models/interfaces";
import { courses } from "../../helpers";

@Component
export default class MoleculeCarees extends Vue {
  courses: ICourse[] = courses;
}
</script>

<style scoped>
</style>
