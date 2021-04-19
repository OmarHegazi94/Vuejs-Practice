<template>
    <!-- <Header></Header> -->
    <router-view name="header-top"></router-view>
    
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>Vue Router</h1>
                <hr>
                <router-view ></router-view>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// import Header from './components/Header'
export default {
    name: "App",
    data() {
        return {}
    },
    // components: {
    //     Header
    // }
};
</script>
