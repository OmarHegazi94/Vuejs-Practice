<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Filters and Mixins</h1>
                <p>{{ $filters.toUppercase(text) }}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <input type="text" v-model="filterText" />
            </div>
            <ul>
                <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
            </ul>
        </div>

        <br />
        <hr />
        <appList></appList>
    </div>
</template>

<script>
import List from "./components/List.vue";
import { fruitMixin } from "./fruitMixin.js";

export default {
    name: "App",
    components: {
        appList: List,
    },
    mixins: [fruitMixin],
    data() {
        return {
            text: "Hello there!",
        };
    },
};
</script>
