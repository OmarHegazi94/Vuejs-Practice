<template>
  <div>
      <p>another counter</p>
      <button class="btn btn-primary pr-1" @click="increment(amount)">Increment</button>
      <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
// No longer need to use mutations directly

// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            amount: 100
        }
    },
    methods: {
        // Both works the same
        ...mapActions([
            'increment',
            'decrement'
        ]),
        // increment() {
        //     this.$store.dispatch('increment', this.amount)
        // }
        // what map Actions does behind the scenes
        // inc(){
        //     this.$store.dispatch('increment', { amount: 100 })
        // }
    }
}
</script>

