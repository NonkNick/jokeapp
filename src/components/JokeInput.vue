<template>
  <div class="joke-card relative p-4 bg-green-100 rounded-lg shadow-md">

    <!-- Favorite Heart -->
    <Favourite
        v-if="localJokeId !== undefined"
        :id="localJokeId"
        class="absolute top-2 right-2"
    />

    <!-- Joke Input Fields -->
    <div class="joke-text mt-6">
      <div>
        <label class="font-semibold">Joke Type:</label>
        <select v-model="type" class="border rounded px-2 py-1">
          <option value="single">Single</option>
          <option value="twopart">Two-part</option>
        </select>
      </div>

      <div class="mt-2">
        <label class="font-semibold">Joke / Setup:</label>
        <input
            type="text"
            v-model="setup"
            placeholder="Enter your joke or setup"
            class="w-full border rounded px-2 py-1"
        />
      </div>

      <div class="mt-2" v-if="type === 'twopart'">
        <label class="font-semibold">Delivery:</label>
        <input
            type="text"
            v-model="delivery"
            placeholder="Enter the punchline"
            class="w-full border rounded px-2 py-1"
        />
      </div>

      <button
          @click="saveJoke"
          class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Save Joke
      </button>
    </div>

    <!-- Rating Stars -->
    <Rating
        v-if="localJokeId !== undefined"
        :id="localJokeId"
        class="mt-4"
    />

    <!-- Preview -->
    <div class="mt-4 p-2 border rounded bg-white">
      <p><strong>Preview:</strong></p>
      <p>{{ type === 'single' ? setup : setup + ' / ' + delivery }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Rating from './Rating.vue';
import Favourite from './Favourite.vue';
import { useJokeStorage } from '../composables/useJokeStorage';

// Reactive inputs
const type = ref<'single' | 'twopart'>('single');
const setup = ref('');
const delivery = ref('');

// Local joke ID for favorite/rating
const localJokeId = ref<number | undefined>(undefined);

// Optional: storage for favorite/rating
const { setRating, toggleFavorite } = useJokeStorage();

// Save joke to localStorage
function saveJoke() {
  const id = Date.now(); // unique ID
  localJokeId.value = id;

  const localJoke = {
    id,
    type: type.value,
    joke: type.value === 'single' ? setup.value : undefined,
    setup: type.value === 'twopart' ? setup.value : undefined,
    delivery: type.value === 'twopart' ? delivery.value : undefined,
    favorite: false,
    rating: 0
  };

  const all = JSON.parse(localStorage.getItem('localJokes') || '{}');
  all[id] = localJoke;
  localStorage.setItem('localJokes', JSON.stringify(all));

  // Reset inputs
  setup.value = '';
  delivery.value = '';
  type.value = 'single';
}
</script>

<style scoped>
@reference "tailwindcss";

.joke-text {
  @apply overflow-auto;
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.joke-card {
  @apply flex flex-col w-full min-h-full max-w-full;
}
</style>
