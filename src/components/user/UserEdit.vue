<template>
    <h3>Edit the User</h3>

    <p>Local: {{ $route.query.local }}</p>
    <p>Analytics: {{ $route.query.q }}</p>

    <hr />

    <button @click="confirmed = true" class="btn btn-primary">Confirm</button>

    <div style="height: 1200px"></div>
    <p id="data">some extra data</p>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false,
        };
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm("Are you sure?")) {
                next();
            } else {
                next(false);
            }
        }

    },
};
</script>
