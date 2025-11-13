# JokeApp

## Doel
Je bouwt een Vue.js-applicatie waarin je grappen ophaalt via de JokeAPI, je eigen grappen kunt toevoegen, en favorieten kunt beheren in localStorage. De app bevat meerdere pagina’s met Vue Router en is volledig geschreven in TypeScript. Je leert werken met API’s, routing, localStorage, filters, componenten en typedeclaraties.

## Functionaliteiten
Pagina’s (Vue Router):

New Jokes – Laat willekeurige grappen zien uit de JokeAPI met filtermogelijkheden
Favourites – Toon opgeslagen favoriete grappen uit localStorage
Own Jokes – Voeg je eigen grap toe en toon een lijst van zelfgemaakte grappen (ook in localStorage)
About – Uitleg over de app en de gebruikte techniek
Gebruiker kan:

Een grap ophalen van de JokeAPI (https://v2.jokeapi.dev)
Grappen filteren op categorie, taal, type en flags (via queryparameters)
Een grap opslaan als favoriet
Een grap beoordelen met sterren (1 t/m 5)
Een eigen grap toevoegen en bekijken
Zien of een grap al als favoriet is gemarkeerd
Navigeren tussen de pagina’s met Vue Router
## Technische eisen
Vue 3 met Composition API
Vue Router met minstens 4 routes
TypeScript toegepast in alle componenten
Interface voor de joke JSON-response gedefinieerd
Favorieten en beoordelingen opgeslagen in localStorage. Alleen de joke ID + eigen metadata (bijv. favoriet, beoordeling)
Mappenstructuur is logisch (bijv. components/, views/, types/)
Gebruik van computed en watch waar toepasselijk
Lifecycle hooks gebruikt op relevante plekken
Componentgebaseerde opbouw, zoals JokeCard.vue, JokeFilters.vue, JokeForm.vue
## Stijl en vormgeving
Je volgt de meegeleverde styleguide voor:

Gebruik van kleuren
Typografie en hiërarchie
Vormgeving van componenten zoals knoppen, tekst, beoordeling (sterren)
Heldere, toegankelijke layout
Een visueel voorbeeld van de styleguide is beschikbaar en dient als richtlijn voor de implementatie van je app.

## Eisen aan de repository
Regelmatig committen met duidelijke beschrijvende commit messages
Werk met branches
Een README met:
Beschrijving van de app en de functionaliteit
Gebruikte technieken/tools (Vue, TS, Router, JokeAPI, etc.)
Installatie-instructies (npm install / run)
Screenshots (optioneel)

---
## Plan
### Views
- About
- Favourites
- NewJokes
- OwnJokes
### Components
- Joke.vue
- 