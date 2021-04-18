import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import User from './components/user/User.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/user/:id', component: User }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
