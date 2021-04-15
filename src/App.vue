<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>Animations</h1>
                <hr />
                <button @click="show = !show" class="btn btn-primary">show alert</button>
                <br />
                <br />
                <!-- <transition name="fade">
                    <div v-if="show" class="alert alert-primary">This is some Info</div>
                </transition> -->

                <transition name="slide">
                    <div v-if="show" class="alert alert-primary">This is some Info</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            show: false,
        };
    },
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
        transform: translateY(20px)
    }
    to {
        transform: translateY(0)
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0)
    }
    to {
        transform: translateY(20px)
    }
}
</style>
