import { createApp } from "vue";

import { store } from "./store/store";

import App from "./App.vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(store);

app.mount("#app");
