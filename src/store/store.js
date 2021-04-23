import { createStore } from "vuex";

export const store = createStore({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: (state) => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    }
});


