<script setup lang="ts">
import JokeContainer from "../components/JokeContainer.vue";
import Joke from "../components/Joke.vue";
</script>

<template>
  <main>
    <div class="flex flex-row space-x-4">
      <Joke/>
      <Joke/>
      <Joke/>
    </div>

  </main>
</template>

<style scoped>
@reference "tailwindcss";

</style>