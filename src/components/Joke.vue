<template>
  <div class="joke">
    <h1>
      {{ joke }}
    </h1>
    <rating/>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {JokeAPI} from "@bitstep/jokeapi";
import Rating from "./Rating.vue";

const joke = ref("");

onMounted(async () => {
  const jokeClient = new JokeAPI();
  const data = await jokeClient.getRandomJoke();

  // Single-part or two-part joke
  console.log(data);
  joke.value = data.joke ?? `${data.setup} — ${data.delivery}`;
  // joke.value = JSON.stringify(data, null, 2);
});
</script>

<style scoped>
@reference "tailwindcss";
.joke {
  @apply flex flex-col w-2/6 h-100;
  background-color: rgba(76, 175, 80, 0.1); /* Lichte groene achtergrond (primaire kleur met transparantie) */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

}

.joke h1 {
  @apply text-center break-words text-2xl;
}
</style>