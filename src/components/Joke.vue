<template>
  <div class="joke-card relative p-4 bg-green-100 rounded-lg shadow-md">
    <favourite class="absolute top-2 right-2"/>

    <div class="joke-text mt-6">
      <h3>{{ startText }}</h3>

      <h3 v-if="isTwoPart" class="spoiler">
        {{ deliveryText }}
      </h3>

    </div>
    <rating/>

  </div>
</template>


<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useJoke } from "../composables/useJoke";
import Rating from "./Rating.vue";
import Favourite from "./Favourite.vue";

const props = defineProps({
  id: Number
})

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
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.joke-card {
  @apply flex flex-col w-full min-h-full;
  max-width: 100%;
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