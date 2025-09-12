<script setup lang="ts">
  import VueSlider from "vue-slider-component";
  import { weightStore } from "@/store/weightStore";


</script>

<template>
  <div>

    <div
      v-for="item in weightStore.weights"
    >
      {{item.name}}
      <vue-slider
          v-model="item.weight"
          :min="0"
          :max="5"
          :interval="1"
      ></vue-slider>
    </div>

  </div>
</template>

<style scoped>

</style>