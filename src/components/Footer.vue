<template>
  <footer class="joke-card m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-700 sm:text-center">
        © 2025 <a href="#" class="font-medium hover:underline">Jokes™</a>. All Rights Reserved.
      </span>

      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 sm:mt-0">
        <li class="mr-4 md:mr-6">
          <a href="/about" class="hover:underline">About</a>
        </li>
        <li class="mr-4 md:mr-6">
          <a href="/privacy" class="hover:underline">Privacy Policy</a>
        </li>
        <li class="mr-4 md:mr-6">
          <a href="/licensing" class="hover:underline">Licensing</a>
        </li>
        <li>
          <a href="/contact" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
@reference "tailwindcss";

.joke-card {
  @apply bg-green-100 rounded-lg shadow-md border border-green-200;
}
</style>
