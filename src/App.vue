<script setup lang="ts">
import Phaser from "phaser";
import {ref} from "vue";
import MainGame from "@/MainGame.vue";
import MainScene from"@/game/scenes/MainScene"
import {EventBus} from "@/game/EventBus";

const randomizeWorld = () => {
  EventBus.emit("randomize-world")
}

const size = defineModel({default: 15})

const changeWorldSize = () => {
  EventBus.emit("change-world-size", size.value);
}


</script>
<template>
  <MainGame ref="phaserRef" @current-active-scene="MainScene"></MainGame>
  <div>
    <div>
      <button @click="randomizeWorld">Randomize world</button>
    </div>
    <div>
      <vue-slider
          @drag-end="changeWorldSize"
          v-model="size"
          :min="5"
          :max="20"
          :interval="1"
      >
        World size
      </vue-slider>
    </div>
  </div>
</template>
