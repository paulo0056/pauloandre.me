<template>
  <v-card
    class="mx-auto contact-card rounded-0"
    @click="goToGithub"
    :width="props.width"
  >
    <v-card-title> {{ props.title }} </v-card-title>
  </v-card>
</template>

<script setup lang="ts">
import {  } from "vue";
export interface Props {
  title: string;
  link: string;
  width?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "Titulo",
  description: "Descrição",
  link: "Link",
  width: "190",
});

const goToGithub = () => {
  window.open(props.link);
};
</script>

<style scoped lang="scss">
.contact-card {
  margin: 0 !important;
  background-color: rgba(15, 202, 15, 0.377);
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  border: 5px solid rgb(0, 211, 0);
  cursor: pointer;
}
.contact-card:hover {
  background-color: rgba(18, 255, 18, 0.377);
  color: white;
  border: 5px solid rgb(0, 211, 0);
  cursor: pointer;
}
</style>
