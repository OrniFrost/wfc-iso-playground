<script setup lang="ts">
import Phaser from "phaser";
import {ref} from "vue";
import MainGame from "@/MainGame.vue";
import MainScene from"@/game/scenes/MainScene"
import {EventBus} from "@/game/EventBus";
import WeightSelector from "@/WeightSelector.vue";

const randomizeWorld = () => {
  EventBus.emit("randomize-world")
}

const size = defineModel({default: 15})

const changeWorldSize = () => {
  EventBus.emit("change-world-size", size.value);
}

const wfc = () => {
  EventBus.emit("wave-function-collapse");
}

const reset = () => {
  EventBus.emit("reset");
}

</script>
<template>
  <div class="flex-columns">
    <weight-selector class="col"></weight-selector>

    <MainGame ref="phaserRef" @current-active-scene="MainScene" class="col"></MainGame>
    <div class="col">
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
        <br>
        <div>
          <button @click="wfc">Generate wave function collapse</button>
        </div>
        <br>
        <div>
          <button @click="reset">Reset world</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-columns {
  display: flex;
  gap: 1rem;
}

.col {

  padding: 1rem;
  border-radius: 8px;
}

.small {
  flex: 1; /* smaller ratio */
}

.large {
  flex: 2; /* middle twice as wide */
}
</style>
