<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.image">
      <v-row class="fill-height" align="center" justify="center">
        <div class="carousel-title">{{ slide.text }}</div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>


<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { ISlide } from "../../models/interfaces";
import { slides } from "../../helpers";

@Component({})
export default class MoleculeCarousel extends Vue {
  slides: ISlide[] = slides;
}
</script>

<style scoped>
.carousel-title {
  font-size: 86px;
  font-weight: bold;
  text-shadow: 5px 5px white;
}
</style>
