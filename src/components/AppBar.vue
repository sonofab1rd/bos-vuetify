<template>
  <v-app-bar app shrink-on-scroll dense>
    <v-app-bar-nav-icon @click.stop="toggleNav()"></v-app-bar-nav-icon>
    <v-toolbar-title>The Basement of Stinkology!</v-toolbar-title>
    <v-spacer></v-spacer>
    <login></login>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Login from "./Login.vue";

export default Vue.extend({
  components: { Login },
  name: "AppBar",

  methods: {
    toggleNav() {
      this.$store.dispatch("toggleNav");
    },
  },
});
</script>
