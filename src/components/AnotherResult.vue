<template>
    <p>Counter is: {{ doubleCounter }}</p>

    <p>Number of clicks: {{ stringCounter }}</p>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';
export default {
    computed: {
        // This won't work with types

        // ...mapGetters([
        //     'doubleCounter',
        //     'stringCounter'
        // ]),

        ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
            stringCounter: types.CLICK_COUNTER
        })
    }
}
</script>
