<template>
  <v-card :height="height" class="ma-4" color="#1F7087">
    <v-carousel :height="height" :show-arrows="false">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-sparkline
          :smooth="16"
          :gradient="['#f72047', '#ffd200', '#1feaea']"
          :line-width="3"
          :value="item.value"
          auto-draw
          stroke-linecap="round"
        ></v-sparkline
      ></v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PlayerStatsCard",
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 150;
        default:
          return 250;
      }
    },
  },
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        value: [200, 675, 410, 390, 310, 460, 250, 240],
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        value: [200, 675, 410, 390, 310, 460, 250, 240],
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        value: [200, 675, 410, 390, 310, 460, 250, 240],
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        value: [200, 675, 410, 390, 310, 460, 250, 240],
      },
    ],
  }),
});
</script>
