<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>Vuex</h1>
                <hr />
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <br>
                <app-another-counter></app-another-counter>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from './components/Counter'
import AnotherCounter from './components/AnotherCounter'
import Result from './components/Result'
import AnotherResult from './components/AnotherResult'
export default {
    name: "App",
    components: {
        appCounter: Counter,
        appAnotherCounter: AnotherCounter,
        appResult: Result,
        appAnotherResult: AnotherResult
    }
};
</script>
