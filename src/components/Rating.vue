<template>
  <div class="w-auto h-10 items-center flex mt-auto">
    <StarIcon
        v-for="(star, index) in rating"
        :key="index"
        @click="toggle(index)"
        class="w-full h-full"
        :class="star.active ? 'active' : 'inactive'"
    />
  </div>


</template>

<script setup lang="ts">
import {StarIcon} from '@heroicons/vue/24/solid';
import {ref} from 'vue';

const rating = ref([
  {active: false},
  {active: false},
  {active: false},
  {active: false},
  {active: false},
]);

function toggle(index: number) {
  rating.value = rating.value.map((_, i) => ({
    active: i <= index
  }));
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