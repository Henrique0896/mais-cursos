<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(course, i) in courses"
      :key="i"
      :src="course.image"
    >
      <v-row class="fill-height" align="center" justify="center">
        <div class="carousel-title">{{ course.name }}</div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>


<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { ICourse } from "../../models/interfaces";
import { courses } from "../../helpers";

@Component
export default class MoleculeCarousel extends Vue {
  courses: ICourse[] = courses;
}
</script>

<style scoped>
.carousel-title {
  font-size: 86px;
  font-weight: bold;
  text-shadow: 5px 5px white;
}
</style>
