import { createApp } from "vue";
import App from "./App.vue";
// import axios from "axios";
// import VueAxios from "vue-axios";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

// app.use(VueAxios, axios);

// axios.defaults.baseURL = `https://vue-http-898d3-default-rtdb.firebaseio.com/users.json`;

// axios.interceptors.request.use(
//     (config) => {
//         if (config.method == "POST") {
//             config.method == "PUT";
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// axios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

app.mount("#app");
