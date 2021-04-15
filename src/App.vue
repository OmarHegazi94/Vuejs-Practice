<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1>Animations</h1>
                <hr />
                <button @click="show = !show" class="btn btn-primary">show alert</button>
                <br />
                <br />
                <transition name="fade">
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
</style>
