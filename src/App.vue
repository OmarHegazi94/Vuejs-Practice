<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Filters and Mixins</h1>
                <p>{{ $filters.toUppercase(text) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
      return {
        text: 'Hello there!'
      }
    }
};
</script>
