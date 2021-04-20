import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserDetails from "./components/user/UserDetails.vue";

const routes = [
    {
        path: "/",
        name: "home",
        components: {
            default: Home,
            "header-top": Header,
        },
    },
    {
        path: "/user",
        components: {
            default: User,
            "header-bottom": Header,
        },
        children: [
            { path: "", component: UserStart, name: "userStart" },
            { path: ":id", component: UserDetails, name: "userDetails" },
            { path: ":id/edit", component: UserEdit, name: "userEdit" },
        ],
    },
    {
        path: "/redirect-me",
        redirect: "/user",
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/",
        name: "bad-not-found",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {
            el: to.hash,
            behavior: "smooth",
        };
        // return {
        //     left: 0,
        //     top: 2000
        // };
    },
});

export default router;
