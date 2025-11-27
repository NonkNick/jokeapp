<template>
  <div class="joke-card relative bg-green-100 rounded-lg shadow-md">
    <Favourite
        v-if="displayedJoke?.id && !isLocal"
        :id="displayedJoke.id"
        class="absolute top-2 right-2"
    />

    <div class="joke-text">
      <h3 class="break-words">{{ startText }}</h3>
      <h3 v-if="isTwoPart" class="spoiler break-words">{{ deliveryText }}</h3>
    </div>

    <Rating
        v-if="displayedJoke?.id && !isLocal"
        :id="displayedJoke.id"
        class="mt-4"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useJoke } from "../composables/useJoke";
import Rating from "./Rating.vue";
import Favourite from "./Favourite.vue";
import type { JokeFilter } from "../composables/useJoke";

interface LocalJoke {
  id: number;
  joke?: string;
  setup?: string;
  delivery?: string;
  type: "single" | "twopart";
}

const props = defineProps<{
  id?: number;
  filter?: JokeFilter;
  localJoke?: LocalJoke;
}>();

const { joke, fetchJoke, fetchJokeById } = useJoke();

const isLocal = computed(() => !!props.localJoke);
const displayedJoke = computed(() => props.localJoke ?? joke.value);

watch(
    () => props.id,
    (id) => {
      if (id !== undefined) fetchJokeById(id);
    },
    { immediate: true }
);

watch(
    () => props.filter,
    (filter) => {
      if (!props.id && !props.localJoke) {
        if (filter) fetchJoke(filter);
        else fetchJoke();
      }
    },
    { deep: true, immediate: true }
);

const isTwoPart = computed(() => displayedJoke.value?.type === "twopart");

const startText = computed(() => {
  if (!displayedJoke.value) return "";
  return isTwoPart.value ? displayedJoke.value.setup : displayedJoke.value.joke;
});

const deliveryText = computed(() => {
  return isTwoPart.value ? displayedJoke.value?.delivery ?? "" : "";
});
</script>

<style scoped>
@reference "tailwindcss";

.joke-text {
  @apply overflow-y-auto overflow-x-hidden;
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.joke-card {
  @apply flex flex-col w-full max-w-full p-2;
}

.spoiler {
  @apply blur;
}

.spoiler:hover {
  @apply blur-none;
}

.break-words {
  @apply break-words;
}
</style>
