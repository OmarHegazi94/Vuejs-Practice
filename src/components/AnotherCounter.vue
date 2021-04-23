<template>
  <div>
      <button class="btn btn-primary" @click="inc">Increment</button>
      <button class="btn btn-primary" @click="dec">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations({
            inc: 'increment',
            dec: 'decrement'
        })
    }
}
</script>

