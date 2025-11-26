<script setup lang="ts">
import Joke from "../components/Joke.vue";
</script>

<template>
  <main>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Joke :id = "2"/>
      <Joke />
      <Joke />
      <Joke />
      <Joke />
      <Joke />
      <Joke/>
      <Joke/>
      <Joke/>
    </div>


  </main>
</template>

<style scoped>
@reference "tailwindcss";

</style>