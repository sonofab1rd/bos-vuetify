<template>
  <v-app id="inspire">
    <app-bar />
    <navigation-drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "./components/AppBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default Vue.extend({
  name: "App",
  components: { AppBar, NavigationDrawer },

  data: () => ({
    //
  }),
});
</script>
