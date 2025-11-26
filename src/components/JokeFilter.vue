<template>
  <div class="p-4 bg-gray-100 rounded-lg shadow space-y-4">
    <h2 class="text-lg font-semibold">Filter Jokes</h2>

    <!-- Categories -->
    <div v-if="categories.length">
      <label class="block font-medium mb-1">Categories</label>
      <select multiple class="w-full p-2 rounded border" v-model="selectedCategories">
        <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

    <!-- Flags -->
    <div v-if="flags.length">
      <label class="block font-medium mb-1">Exclude Flags</label>
      <select multiple class="w-full p-2 rounded border" v-model="selectedFlags">
        <option v-for="f in flags" :key="f" :value="f">{{ f }}</option>
      </select>
    </div>

    <!-- Joke Type -->
    <div>
      <label class="block font-medium mb-1">Joke Type</label>
      <select class="w-full p-2 rounded border" v-model="selectedType">
        <option value="any">Any</option>
        <option value="single">Single</option>
        <option value="twopart">Two-Part</option>
      </select>
    </div>

    <!-- Language -->
    <div>
      <label class="block font-medium mb-1">Language</label>
      <select class="w-full p-2 rounded border" v-model="selectedLang">
        <option value="">Any</option>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="cs">Czech</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="pt">Portuguese</option>
      </select>
    </div>

    <!-- Contains text -->
    <div>
      <label class="block font-medium mb-1">Contains text</label>
      <input
          type="text"
          class="w-full p-2 rounded border"
          v-model="contains"
          placeholder="Keyword..."
      />
    </div>

    <!-- Safe Mode -->
    <div>
      <label class="flex items-center space-x-2 cursor-pointer">
        <input type="checkbox" v-model="safeMode" />
        <span>Safe Mode</span>
      </label>
    </div>

    <!-- Apply -->
    <button
        class="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
        @click="emitFilter"
    >
      Apply Filter
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { JokeAPI } from "@bitstep/jokeapi";
import type { JokeRequest, JokeFilter } from "../composables/useJoke";

const emit = defineEmits<["update"]>();

// state
const categories = ref<string[]>([]);
const flags = ref<string[]>([]);

const selectedCategories = ref<string[]>([]);
const selectedFlags = ref<string[]>([]);
cons
