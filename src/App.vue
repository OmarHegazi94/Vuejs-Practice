<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>Vuex</h1>
                <hr />
                <app-result :counter="counter"></app-result>
                <hr>
                <app-counter @updateCount="counter += $event"></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from './components/Counter'
import Result from './components/Result'
export default {
    name: "App",
    data() {
        return {
            counter: 0
        };
    },
    components: {
        appCounter: Counter,
        appResult: Result
    }
};
</script>
