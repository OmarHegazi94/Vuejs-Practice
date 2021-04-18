import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserDetails from "./components/user/UserDetails.vue";

const routes = [
    { path: "/", component: Home },
    {
        path: "/user", component: User, children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetails },
            { path: ':id/edit', component: UserEdit },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
