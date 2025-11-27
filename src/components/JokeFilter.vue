<template>
  <div>
    <h3>Joke Filter</h3>

    <div>
      <label>Categories:</label>
      <select v-model="selected.categories" multiple>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div>
      <label>Flags (exclude):</label>
      <select v-model="selected.excludeFlags" multiple>
        <option v-for="flag in flags" :key="flag" :value="flag">{{ flag }}</option>
      </select>
    </div>

    <div>
      <label>Type:</label>
      <select v-model="selected.type">
        <option value="any">Any</option>
        <option :value="JokeType.SINGLE">Single</option>
        <option :value="JokeType.TWOPART">Two-part</option>
      </select>
    </div>

    <div>
      <label>Language:</label>
      <select v-model="selected.lang">
        <option v-for="(name, code) in languageOptions" :key="code" :value="code">{{ name }}</option>
      </select>
    </div>

    <div>
      <label>Safe only:</label>
      <input type="checkbox" v-model="selected.safeOnly" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue";
import { JokeCategory, JokeFlag, JokeType, JokeLanguage } from "@bitstep/jokeapi";
import type { JokeFilter } from "../composables/useJoke";

const languageOptions: Record<JokeLanguage, string> = {
  en: "English",
  cs: "Czech",
  de: "German",
  it: "Italian",
  ru: "Russian",
  es: "Spanish",
  fr: "French",
  pt: "Portuguese"
};

const categories = Object.values(JokeCategory);
const flags = Object.values(JokeFlag);

const selected = reactive<JokeFilter>({
  categories: [JokeCategory.ANY],
  excludeFlags: [],
  type: "any",
  lang: JokeLanguage.English,
  safeOnly: false,
  amount: undefined,
  contains: ""
});

const emit = defineEmits<{ "update:filters": (filters: JokeFilter) => void }>();

watchEffect(() => {
  emit("update:filters", selected);
});
</script>
