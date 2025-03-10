import {createRouter, createWebHistory} from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';
import UserLayout from '@/layouts/UserLayout.vue';

const routes = [
    {
        path: '/',
        component: UserLayout,
    },
    {
        path: '/admin',
        component: AdminLayout,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;