import { createApp } from "vue";
import App from "./App.vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.directive("highlight", {
    beforeMount(el, binding) {

        let delay = 0;
        if(binding.modifiers['delayed']) {
            delay = 3000;
        }

        
        setTimeout( () => {
            // el.style.background = binding.value;
            if(binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);

    },
});

app.mount("#app");
