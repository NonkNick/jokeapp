<template>
  <main>
    <JokeFilter @update:filters="handleUpdateFilters" />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
      <Joke
          v-for="i in numberOfJokes"
          :key="i"
          :filter="currentFilters"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Joke from "../components/Joke.vue";
import JokeFilter from "../components/JokeFilter.vue";
import type { JokeFilter as IJokeFilter } from "../composables/useJoke";

const currentFilters = ref<IJokeFilter | undefined>(undefined);

const numberOfJokes = 8;

const handleUpdateFilters = (filters: IJokeFilter) => {
  currentFilters.value = filters;
};
</script>

<style scoped>
@reference "tailwindcss";
</style>
