<template>
  <v-card height="150" color="#1F7087">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5" v-text="name"></v-card-title>
        <v-card-subtitle v-text="description"></v-card-subtitle>
        <router-link to="/player">
          <v-btn class="ml-2" outlined rounded small> Player Profile </v-btn>
        </router-link>
      </div>

      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="src"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
  data: () => ({
    src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
    name: "Player Name",
    description: "This is a longer player description.",
  }),
});
</script>
