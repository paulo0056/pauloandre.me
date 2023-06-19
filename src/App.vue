

<template>
  <v-app>
    <PortfolioHome></PortfolioHome>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import PortfolioHome from "./views/PortfolioHome.vue";

</script>

<style scoped>

</style>
