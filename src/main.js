import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(VueAxios, axios);

axios.defaults.baseURL = `https://vue-http-898d3-default-rtdb.firebaseio.com/data.json`

app.mount("#app");
