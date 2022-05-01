<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="n in 9" :key="n" cols="xs 12 xl 4">
          <player-card />
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PlayerCard from "@/components/cards/PlayerCard.vue";

export default Vue.extend({
  components: { PlayerCard },
  name: "HomeView",
});
</script>
