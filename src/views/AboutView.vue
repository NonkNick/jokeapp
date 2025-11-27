<script setup lang="ts">
import { ref } from "vue";

const appName = "Jokester";
const version = "0.1.0"; // edit to match your real version
const author = "Your Name";
const lastUpdated = new Date().toLocaleDateString();
const contactEmail = "you@example.com";
const license = "MIT";

const faqs = ref([
  {
    q: "Where are my self-made jokes stored?",
    a: "Self-made jokes are stored locally in your browser's localStorage under the key `localJokes`. They never leave your machine unless you export or share them manually."
  },
  {
    q: "How do favorites and ratings work?",
    a: "Favorites and ratings are saved locally per joke id. API-provided jokes keep their official id, and local jokes receive a timestamp id when created."
  },
  {
    q: "Can I export my jokes?",
    a: "Not yet — but you can copy them manually. A future update may add export/import functionality."
  }
]);
</script>

<template>
  <main class="p-6">
    <!-- Page heading -->
    <header class="mb-6">
      <h1 class="text-3xl font-extrabold">About {{ appName }}</h1>
      <p class="text-gray-700 mt-2 max-w-3xl">
        {{ appName }} is a small, local-first joke manager — browse random jokes, create your own,
        favourite the ones you love, and rate them. The UI reuses the same card-based design you see
        around the app so everything feels consistent.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- Main content (left) -->
      <section class="lg:col-span-2 space-y-6">
        <article class="joke-card p-4">
          <h2 class="text-xl font-semibold">Getting started</h2>
          <p class="mt-2 text-gray-700">
            Create a joke using the <span class="font-medium">Add Joke</span> card. Single-line or
            two-part jokes are supported. Once saved, your joke appears in the grid alongside API
            jokes and is stored locally in your browser.
          </p>

          <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-3 bg-white rounded shadow-sm">
              <h3 class="font-semibold">Create</h3>
              <p class="text-sm text-gray-600 mt-1">
                Type a joke in the input card and press <span class="font-medium">Add Joke</span>.
              </p>
            </div>
            <div class="p-3 bg-white rounded shadow-sm">
              <h3 class="font-semibold">Manage</h3>
              <p class="text-sm text-gray-600 mt-1">
                Favorite and rate jokes from the card controls. Local jokes use timestamp ids so
                they won't collide with API ids.
              </p>
            </div>
          </div>
        </article>

        <article class="joke-card p-4">
          <h2 class="text-xl font-semibold">Privacy & storage</h2>
          <p class="mt-2 text-gray-700">
            This app is <strong>local-first</strong>: your self-made jokes, favorites and ratings are
            stored in <code>localStorage</code> on your device. No data is sent to a server by default.
          </p>
          <ul class="mt-3 list-disc list-inside text-gray-700">
            <li>Local storage key for self-made jokes: <code>localJokes</code></li>
            <li>Local storage for favorites/ratings: managed via the app's storage composable</li>
            <li>You can remove data by clearing site storage in your browser</li>
          </ul>
        </article>

        <article class="joke-card p-4">
          <h2 class="text-xl font-semibold">FAQ</h2>
          <div class="mt-3 space-y-3">
            <div v-for="(item, i) in faqs" :key="i" class="p-3 bg-white rounded">
              <div class="font-medium">{{ item.q }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ item.a }}</div>
            </div>
          </div>
        </article>

      </section>

      <!-- Sidebar (right) -->
      <aside class="space-y-6">
        <div class="joke-card p-4">
          <h3 class="text-lg font-semibold">App info</h3>
          <dl class="mt-3 space-y-2 text-gray-700">
            <div><span class="font-medium">Name:</span> {{ appName }}</div>
            <div><span class="font-medium">Version:</span> {{ version }}</div>
            <div><span class="font-medium">Last updated:</span> {{ lastUpdated }}</div>
          </dl>
        </div>

        <div class="joke-card p-4">
          <h3 class="text-lg font-semibold">Contact</h3>
          <p class="mt-2 text-gray-700">Questions, bug reports or suggestions:</p>
          <p class="mt-2">
            <a :href="`mailto:${contactEmail}`" class="text-green-700 font-medium">
              {{ contactEmail }}
            </a>
          </p>
        </div>

        <div class="joke-card p-4">
          <h3 class="text-lg font-semibold">Credits & License</h3>
          <p class="mt-2 text-gray-700">Built by {{ author }}. Licensed under {{ license }}.</p>
        </div>
      </aside>
    </div>

    <footer class="mt-8 text-sm text-gray-600">
      <div class="max-w-3xl">
        <p>
          Tip: your self-made jokes are private to this browser. If you want to move them between
          devices, export them manually from developer tools or we can add an export feature later.
        </p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
@reference "tailwindcss";

/* Reuse the same visual card style from your app for consistency */
.joke-card {
  @apply bg-green-100 rounded-lg shadow-md;
}

/* Ensure inner spacing and consistent text background like other cards */
.joke-card > .p-4 {
  /* utility already applied inline; keep for compatibility */
}

/* Make code snippets look neat */
code {
  @apply bg-white px-1 rounded text-xs text-gray-800;
}
</style>
