import Home from '@/views/Home'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});