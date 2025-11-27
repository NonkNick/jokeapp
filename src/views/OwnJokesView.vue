<template>
  <main>
    <h2 class="text-xl font-bold mb-4">My Self-Made Jokes</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      <div class="joke-card relative p-4 bg-green-100 rounded-lg shadow-md">
        <div class="joke-text mt-6">
          <div>
            <label class="font-semibold">Joke Type:</label>
            <select v-model="type" class="border rounded px-2 py-1 w-full">
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
              @click="addJoke"
              class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            Add Joke
          </button>
        </div>
      </div>

      <Joke
          v-for="j in localJokes"
          :key="j.id"
          :localJoke="j"
      />

    </div>

    <div v-if="localJokes.length === 0" class="text-gray-500 mt-4">
      You haven't created any jokes yet.
    </div>

  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Joke from "../components/Joke.vue";

interface LocalJoke {
  id: number;
  type: "single" | "twopart";
  joke?: string;
  setup?: string;
  delivery?: string;
}

const localJokes = ref<LocalJoke[]>([]);

const type = ref<"single" | "twopart">("single");
const setup = ref("");
const delivery = ref("");

function fetchLocalJokes() {
  const stored = JSON.parse(localStorage.getItem("localJokes") || "{}");
  localJokes.value = Object.values(stored) as LocalJoke[];
}

function addJoke() {
  if (!setup.value.trim() || (type.value === "twopart" && !delivery.value.trim())) {
    alert("Please fill in the joke fields");
    return;
  }

  const id = Date.now();
  const newJoke: LocalJoke = {
    id,
    type: type.value,
    joke: type.value === "single" ? setup.value : undefined,
    setup: type.value === "twopart" ? setup.value : undefined,
    delivery: type.value === "twopart" ? delivery.value : undefined,
  };

  const stored = JSON.parse(localStorage.getItem("localJokes") || "{}");
  stored[id] = newJoke;
  localStorage.setItem("localJokes", JSON.stringify(stored));

  localJokes.value.push(newJoke);

  setup.value = "";
  delivery.value = "";
  type.value = "single";
}

onMounted(() => {
  fetchLocalJokes();
});
</script>

<style scoped>
@reference "tailwindcss";

.joke-card {
  @apply flex flex-col w-full min-h-full max-w-full;
}

.joke-text {
  @apply overflow-auto;
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
