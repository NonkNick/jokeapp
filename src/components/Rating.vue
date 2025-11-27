<template>
  <div class="w-auto h-10 items-center flex mt-auto" v-if="id">
    <StarIcon
        v-for="i in 5"
        :key="i"
        @click="toggle(i)"
        class="w-full h-full cursor-pointer"
        :class="i <= rating ? 'active' : 'inactive'"
    />
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import { useJokeStorage } from "../composables/useJokeStorage";

const props = defineProps<{ id?: number }>();
const { getRating, setRating } = useJokeStorage();

const rating = computed(() =>
    props.id ? getRating(props.id) : 0
);

function toggle(stars: number) {
  if (props.id) setRating(props.id, stars);
}
</script>

<style scoped>
@reference "tailwindcss";

.active {
  @apply text-[#F9A825] drop-shadow-md;
}
.inactive {
  @apply text-[#4CAF5019];
}
</style>
