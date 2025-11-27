import { ref, watch } from "vue";

const STORAGE_KEY = "joke-storage";

const storage = ref<Record<number, { favorite: boolean; rating: number }>>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
);

watch(
    storage,
    () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storage.value));
    },
    { deep: true }
);

export function useJokeStorage() {
    function isFavorite(id: number): boolean {
        return storage.value[id]?.favorite ?? false;
    }

    function toggleFavorite(id: number) {
        const current = storage.value[id] ?? { favorite: false, rating: 0 };
        storage.value[id] = {
            ...current,
            favorite: !current.favorite,
        };
    }

    function getRating(id: number): number {
        return storage.value[id]?.rating ?? 0;
    }

    function setRating(id: number, stars: number) {
        const current = storage.value[id] ?? { favorite: false, rating: 0 };
        storage.value[id] = {
            ...current,
            rating: stars,
        };
    }

    function getAllFavorites(): number[] {
        return Object.keys(storage.value)
            .map((key) => Number(key))
            .filter((id) => storage.value[id].favorite);
    }

    return {
        isFavorite,
        toggleFavorite,
        getRating,
        setRating,
        getAllFavorites,
    };
}
