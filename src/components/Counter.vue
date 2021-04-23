<template>
  <div>
      <button class="btn btn-primary" @click="increment">Increment</button>
      <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
    methods: {
        increment() {
            this.$emit('updateCount', 1);
        },
        decrement() {
            this.$emit('updateCount', -1);
        }
    }
}
</script>

<style>

</style>