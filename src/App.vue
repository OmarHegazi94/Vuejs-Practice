<template>
    <Header></Header>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>Vue Router</h1>
                <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header'
export default {
    name: "App",
    data() {
        return {}
    },
    components: {
        Header
    }
};
</script>
