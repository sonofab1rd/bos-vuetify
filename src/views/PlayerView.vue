<template>
  <v-sheet class="d-md-flex justify-center">
    <v-card color="#1F7087" max-width="600" class="ma-4">
      <v-img
        class="ma-5"
        lazy-src="https://picsum.photos/id/11/10/6"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
      <v-card-title class="text-h5">Player Name</v-card-title>
      <v-card-subtitle> aka: Player Gamertag </v-card-subtitle>
      <v-card-text>This is a description of the player.</v-card-text>
    </v-card>
    <v-sheet class="d-md-flex flex-column" max-width="600">
      <player-stats-card></player-stats-card>
      <player-achievements-card></player-achievements-card>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import PlayerStatsCard from "../components/cards/PlayerStatsCard.vue";
import PlayerAchievementsCard from "../components/cards/PlayerAchievementsCard.vue";

export default Vue.extend({
  name: "PlayerView",
  components: {
    PlayerStatsCard,
    PlayerAchievementsCard,
  },
});
</script>
