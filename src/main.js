import { createApp } from "vue";
import App from "./App.vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.config.globalProperties.$filters = {
    toUppercase(value) {
        return value.toUpperCase();
    },
};

app.mixin({
    created() {
        console.log('global mixin created hook')
    }
});

app.mount("#app");
