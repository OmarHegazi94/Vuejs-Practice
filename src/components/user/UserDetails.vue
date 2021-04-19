<template>
    <h3>Some User Details</h3>
    <p>User Loaded: had ID: {{ $route.params.id }}</p>
<!-- 
    <router-link 
        :to="'/user/' + $route.params.id + '/edit'"
        class="btn btn-primary">
        Edit User
    </router-link> -->
    <router-link 
        :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { local: 'en', q: 100 } }"
        class="btn btn-primary">
        Edit User
    </router-link>


</template>

