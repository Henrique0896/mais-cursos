<template>
  <div class="background-page pb-10">
    <molecule-careers></molecule-careers>
    <molecule-courses></molecule-courses>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { MoleculeCareers, MoleculeCourses } from "../molecules";

@Component({
  components: {
    MoleculeCareers,
    MoleculeCourses,
  },
})
export default class OrganismMainPage extends Vue {}
</script>

<style scoped>
.background-page {
  background-color: #fafaff;
}
</style>
