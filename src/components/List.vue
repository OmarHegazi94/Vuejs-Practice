<template>
    <div class="row">
        <div class="col-12">
            <input type="text" v-model="filterText" />
        </div>
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from '../fruitMixin.js'
export default {
    name: "List",
    mixins: [fruitMixin],
    created() {
        console.log('Inside List Created Component');
    }
};
</script>
