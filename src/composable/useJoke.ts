// composables/useJoke.ts
import {ref} from "vue";
import {JokeAPI} from "@bitstep/jokeapi";
import type { JokeResponse } from "@bitstep/jokeapi";

export function useJoke() {
    const joke = ref<JokeResponse | null>(null);
    const loading = ref(false);
    const error = ref<JokeResponse | null>(null);

    const fetchJoke = async () => {
        loading.value = true;
        error.value = null;
        try {
            const jokeClient = new JokeAPI();
            joke.value = await jokeClient.getRandomJoke();
            console.log(await jokeClient.ping());
            console.log(await jokeClient.getCategories());
            console.log(await jokeClient.getFlags());


        } catch (err: any) {
            error.value = err.message || "Failed to fetch joke";
        } finally {
            loading.value = false;
        }
    };



    return { joke, loading, error, fetchJoke };
}