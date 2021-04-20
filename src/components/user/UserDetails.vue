<template>
    <h3>Some User Details</h3>
    <p>User Loaded: had ID: {{ $route.params.id }}</p>
    <!-- 
    <router-link 
        :to="'/user/' + $route.params.id + '/edit'"
        class="btn btn-primary">
        Edit User
    </router-link> -->
    <router-link :to="link" class="btn btn-primary">
        Edit User
    </router-link>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: "userEdit",
                params: { id: this.$route.params.id },
                query: { local: "en", q: 100 },
                hash: "#data",
            },
        };
    },
    beforeRouteEnter(to, from, next) {
        console.log('before route enter User Details')
        next();

        // If you want to access a property in the component before you enter it
        // pass a callback function

        // next((vm) => {
        //     vm.link;
        // });
    },
};
</script>
