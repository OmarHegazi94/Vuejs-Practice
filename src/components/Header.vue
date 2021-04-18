<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Navbar scroll</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav  me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <!-- <router-link to="/" tag="li" active-class="active">
                        <a> Home </a>
                    </router-link> -->

                    <li class="nav-item">
                        <router-link to="/" exact active-class="active" class="nav-link">Home</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/user/1" active-class="active" class="nav-link">User 1</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/user/2" active-class="active" class="nav-link">User 2</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
