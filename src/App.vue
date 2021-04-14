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
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            text: "Hello there!",
            fruits: ["Apple", "Banana", "Mango", "Melon"],
            filterText: "",
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.toLowerCase().match(this.filterText);
            });
        },
    },
};
</script>
