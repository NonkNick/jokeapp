import { ref } from "vue";
import type { JokeResponse } from "@bitstep/jokeapi";
import { JokeAPI, JokeCategory, JokeFlag, JokeLanguage, JokeType } from "@bitstep/jokeapi";

export interface JokeFilter {
    categories: JokeCategory[];
    excludeFlags: JokeFlag[];
    type: JokeType | "any";
    lang: JokeLanguage;
    safeOnly: boolean;
    amount?: number;
    contains?: string;
}

export function useJoke() {
    const joke = ref<JokeResponse | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchJoke = async (filter?: JokeFilter) => {
        loading.value = true;
        error.value = null;

        try {
            const jokeClient = new JokeAPI();

            if (filter) {
                joke.value = await jokeClient.getJoke(
                    filter.categories.length ? filter.categories : [JokeCategory.ANY],
                    filter.excludeFlags || [],
                    filter.type === "any" ? JokeType.ANY : filter.type,
                    filter.lang,
                    filter.contains || "",
                    filter.amount || 1,
                    filter.safeOnly
                );
            } else {
                joke.value = await jokeClient.getRandomJoke();
            }

        } catch (err: any) {
            error.value = err.message || "Failed to fetch joke";
            joke.value = null;
        } finally {
            loading.value = false;
        }
    };

    const fetchJokeById = async (id: number) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            joke.value = await response.json();
        } catch (err: any) {
            error.value = err?.message || "Failed to fetch joke by ID";
            joke.value = null;
        } finally {
            loading.value = false;
        }
    };

    return { joke, loading, error, fetchJoke, fetchJokeById };
}
