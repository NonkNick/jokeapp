<template>
  <main class="p-6">
    <!-- Pagina kop -->
    <header class="mb-6">
      <h1 class="text-3xl font-extrabold">Over {{ appName }}</h1>
      <p class="text-gray-700 mt-2 max-w-3xl">
        {{ appName }} is een project gemaakt tijdens Hacklap. Het haalt grappen op van de JokeAPI en laat je deze lokaal gebruiken, zoals opslaan, favorieten geven of beoordelen.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- Hoofdcontent -->
      <section class="lg:col-span-2 space-y-6">
        <article class="joke-card p-4">
          <h2 class="text-xl font-semibold">Hoe het werkt</h2>
          <p class="mt-2 text-gray-700">
            Je kunt grappen maken (één-regel of tweedelige) en lokaal opslaan. API-grappen en je eigen grappen verschijnen samen in het overzicht, volledig interactief met favorieten en beoordelingen.
          </p>
        </article>

        <article class="joke-card p-4">
          <h2 class="text-xl font-semibold">Techniek & opslag</h2>
          <p class="mt-2 text-gray-700">
            Gebouwd met Vue 3, Tailwind CSS en de jokeAPI wrapper gemaakt door bitstep(https://github.com/bitstep-ie/jokeapi). Alle gebruikersactiviteid word opgeslagen in localstorage met de joke ID als de identificerende key, lokale grappen krijgen een apparte id.
          </p>
        </article>
      </section>
    </div>



  </main>
</template>

<style scoped>
@reference "tailwindcss";

.joke-card {
  @apply bg-green-100 rounded-lg shadow-md;
}

code {
  @apply bg-white px-1 rounded text-xs text-gray-800;
}
</style>
