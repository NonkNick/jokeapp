<script setup lang="ts">
import Joke from "../components/Joke.vue";
</script>

<template>
  <main>
    <div class="flex flex-row space-x-4">
      <Joke :request="{ id: 42 }"/>
      <Joke :request="{ id: 43 }"/>
      <Joke :request="{ id: 1 }"/>
    </div>
  </main>
</template>

<style scoped>
@reference "tailwindcss";

</style>