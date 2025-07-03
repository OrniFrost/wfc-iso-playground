<script setup lang="ts">
import Phaser from "phaser";
import {ref} from "vue";
import MainGame from "@/MainGame.vue";
import MainScene from"@/game/scenes/MainScene"
import {EventBus} from "@/game/EventBus";

const randomizeWorld = () => {
  EventBus.emit("randomize-world")
}

</script>
<template>
  <MainGame ref="phaserRef" @current-active-scene="MainScene"></MainGame>
  <div>
    <div>
      <button @click="randomizeWorld">Randomize world</button>
    </div>
  </div>
</template>
