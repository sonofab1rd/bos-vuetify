<template>
  <v-navigation-drawer app :value="navState" stateless temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> BOS </v-list-item-title>
        <v-list-item-subtitle> The Basement </v-list-item-subtitle>
      </v-list-item-content>
      <v-app-bar-nav-icon @click.stop="toggleNav()"></v-app-bar-nav-icon>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        @click.stop="toggleNav()"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "NavigationDrawer",
  data: () => ({
    navState: "",
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
    right: null,
  }),
  computed: mapState(["hideDrawer"]),
  watch: {
    hideDrawer(newValue) {
      this.navState = newValue;
    },
  },
  methods: {
    toggleNav() {
      this.$store.dispatch("toggleNav");
    },
  },
});
</script>
