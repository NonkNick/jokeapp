<script setup lang="ts">
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