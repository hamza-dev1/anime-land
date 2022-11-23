import Home from '@/views/HomeView'
import About from '@/views/AboutView'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;