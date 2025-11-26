<template>
  <div class="joke-card">
    <div class="joke-text">
      <h3>{{ startText }}</h3>

      <h3 class="spoiler" v-if="isTwoPart">
        {{ deliveryText }}
      </h3>

      <rating/>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useJoke } from "../composable/useJoke";
import Rating from "./Rating.vue";

const { joke, loading, error, fetchJoke } = useJoke();

onMounted(() => {
  fetchJoke();
});

const isTwoPart = computed(() => joke.value?.type === "twopart");

const startText = computed(() => {
  const j = joke.value;
  if (!j) return "";
  return isTwoPart.value ? j.setup : j.joke;
});

const deliveryText = computed(() => {
  return isTwoPart.value ? joke.value?.delivery ?? "" : "";
});
</script>


<style scoped>
@reference "tailwindcss";

.joke-text {
  @apply overflow-auto;
  background-color: rgba(76, 175, 80, 0.1); /* Lichte groene achtergrond (primaire kleur met transparantie) */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.joke-card {
  @apply flex flex-col;
  min-width: 250px; /* prevents shrinking on wider screens */
  max-width: 100%;  /* allow full width in small screens */
}

.joke-text h1 {
  @apply text-center break-words text-2xl;
}

.spoiler {
  @apply blur;
}

.spoiler:hover {
  @apply blur-none;
}
</style>