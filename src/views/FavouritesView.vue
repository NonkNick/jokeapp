<template>
  <main>
    <h2 class="text-xl font-bold mb-4">My Favorite Jokes</h2>

    <div v-if="favoriteIds.length === 0" class="text-gray-500">
      You have no favorite jokes yet.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Joke
          v-for="id in favoriteIds"
          :key="id"
          :id="id"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Joke from "../components/Joke.vue";
import { useJokeStorage } from "../composables/useJokeStorage";

const { getAllFavorites } = useJokeStorage();

const favoriteIds = computed(() => getAllFavorites());
</script>

<style scoped>
@reference "tailwindcss";
</style>
