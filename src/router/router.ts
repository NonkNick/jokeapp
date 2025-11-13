import { createRouter, createWebHistory } from 'vue-router';

import FavouritesView from '../views/FavouritesView.vue';
import AboutView from '../views/AboutView.vue';
import NewJokesView from '../views/NewJokesView.vue';
import OwnJokesView from '../views/OwnJokesView.vue';

const routes = [
    {
        path: '/',
        name: 'Favourites',
        component: FavouritesView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/New',
        name: 'NewJokes',
        component: NewJokesView,
    },
    {
        path: '/OwnJokes',
        name: 'OwnJokes',
        component: OwnJokesView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;