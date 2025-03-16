import {createRouter, createWebHistory} from 'vue-router';
import AdminLayout from '@/page/AdminLayout.vue';
import HomePage from '@/page/HomePage.vue';
import LoginPage from "@/page/LoginPage.vue";
import RegisterPage from "@/page/RegisterPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/register',
        component: RegisterPage,
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