<template>
  <div>
      <p>counter</p>

      <button class="btn btn-primary" @click="asyncIncrement({ amount: 50, duration: 500 })">Increment</button>
      <button class="btn btn-primary" @click="asyncDecrement({ amount: 50, duration: 500 })">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {

        ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
        ]),

        // *** Another way ***

        // asyncInc() {
        //     this.$store.dispatch('asyncIncrement', { amount: 50, duration: 500 })
        // },
        // asyncDec() {
        //     this.$store.dispatch('asyncDecrement', { amount: 50, duration: 500 })
        // }
    }
}
</script>

