import { createApp } from "vue";
import App from "./App.vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.directive("highlight", {
    beforeMount(el, binding) {
        el.style.background = binding.value;
    },
});

app.mount("#app");
