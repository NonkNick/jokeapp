<template>
  <aside class="w-64 bg-{white} border-r p-4">
    <h2 class="font-semibold text-lg mb-4">Joke</h2>

    <nav class="space-y-2">
      <button
          v-for="p in pages"
          :key="p.key"
          @click="router.push(p.path)"
          :class="[
          'w-full text-left px-3 py-2 rounded',
          route.path === p.path
            ? 'bg-[#4CAF50] text-white'
            : 'hover:bg-[#C8E6C9] hover:text-[#1B5E20]'
        ]"
      >
        {{ p.label }}
      </button>
    </nav>

    <div class="h-24 w-full">
      <Bars3Icon class="w-full h-full text-black"/>
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
