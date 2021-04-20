<template>
    <!-- <Header></Header> -->
    <router-view name="header-top"></router-view>

    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>Vue Router</h1>
                <hr />
                <router-view>
                </router-view>
                <!-- <router-view v-slot="{ Component }">
                    <transition name="slide">
                        <component :is="Component"></component>
                    </transition>
                </router-view> -->

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
        return {};
    },
    // components: {
    //     Header
    // }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
    animation: slide-in 1s ease-out forwards;
}
.slide-enter-from,
.slide-leave-to {
    animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
</style>
