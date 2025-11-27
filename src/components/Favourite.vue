<template>
  <div class="w-10 h-10 flex items-center mt-auto" v-if="id">
    <HeartIcon
        @click="toggle"
        class="w-full h-full cursor-pointer hover-animation"
        :class="active ? 'active' : 'inactive'"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { HeartIcon } from "@heroicons/vue/24/solid";
import { useJokeStorage } from "../composables/useJokeStorage";

const props = defineProps<{ id?: number }>();
const { isFavorite, toggleFavorite } = useJokeStorage();

const active = computed(() =>
    props.id ? isFavorite(props.id) : false
);

function toggle() {
  if (props.id) toggleFavorite(props.id);
}
</script>

<style scoped>
@reference "tailwindcss";
.active {
  @apply text-[#FF5E5EFC] drop-shadow-md;
}
.inactive {
  @apply text-[#4CAF5019];
}
</style>
