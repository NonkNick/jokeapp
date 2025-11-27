<template>
  <aside class="w-64 bg-green-100 border-r border-green-200 p-4 rounded-lg shadow-md">
    <h2 class="font-semibold text-lg mb-4">Jokes</h2>

    <nav class="space-y-2">
      <button
          v-for="p in pages"
          :key="p.key"
          @click="router.push(p.path)"
          :class="[
          'w-full text-left px-3 py-2 rounded font-medium transition-colors duration-200',
          route.path === p.path
            ? 'bg-green-500 text-white shadow'
            : 'hover:bg-green-200 hover:text-green-900'
        ]"
      >
        {{ p.label }}
      </button>
    </nav>

    <div class="h-24 w-full mt-6 flex items-center justify-center">
      <Bars3Icon class="w-8 h-8 text-green-700" />
    </div>
  </aside>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { Bars3Icon } from '@heroicons/vue/24/solid';

const router = useRouter();
const route = useRoute();

const pages = [
  { key: "favs", label: "Favourites", path: "/" },
  { key: "new", label: "New Jokes", path: "/New" },
  { key: "own", label: "Own Jokes", path: "/OwnJokes" },
  { key: "about", label: "About", path: "/about" },
];
</script>

<style scoped>
@reference "tailwindcss";

/* Optional: ensure buttons don’t shrink on small screens */
button {
  @apply truncate;
}
</style>
