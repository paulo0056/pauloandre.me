<template>
  <v-card class="mx-auto project-card pa-4" max-width="344">
    <v-img :src="getImageUrl(img)" height="200px" cover></v-img>
    <v-card-title> {{ props.title }} </v-card-title>

    <v-card-subtitle style="color: white">
      {{ props.description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2"  variant="flat" @click="goToGithub">
        VISITAR
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
export interface Props {
  title: string;
  description: string;
  link: string;
  img?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "Titulo",
  link: "Link",
});
const img = ref<string | undefined>(props.img);

const goToGithub = () => {
  window.open(props.link);
};
const getImageUrl = (name: string | undefined) => {
        return new URL(`../assets/${name}`, import.meta.url).href
    }
</script>

<style scoped lang="scss">
.project-card {
  background-color: rgba(15, 202, 15, 0.377);
  color: white;
  border: 1px solid rgb(0, 211, 0);
}
</style>
