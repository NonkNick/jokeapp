<template>
  <div class="w-10 h-10 flex items-center mt-auto">
    <HeartIcon
        @click="toggle"
        class="w-full h-full cursor-pointer"
        :class="active ? 'active' : 'inactive'"
    />
  </div>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const active = ref(false);

function toggle() {
  active.value = !active.value;
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
