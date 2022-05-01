<template>
  <v-card :height="height" class="ma-4" color="#1F7087">
    <v-container>
      <v-row :class="thisClass">
        <v-avatar
          fab
          dark
          :size="size"
          color="indigo"
          v-for="(item, i) in items"
          :key="i"
          class="ma-2"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-avatar>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PlayerAchievementsCard",
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 125;
        default:
          return 250;
      }
    },
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 45;
        default:
          return 65;
      }
    },
    thisClass() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "justify-center";
        default:
          return "";
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
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        value: [200, 675, 410, 390, 310, 460, 250, 240],
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        value: [200, 675, 410, 390, 310, 460, 250, 240],
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        value: [200, 675, 410, 390, 310, 460, 250, 240],
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        value: [200, 675, 410, 390, 310, 460, 250, 240],
      },
    ],
  }),
});
</script>
