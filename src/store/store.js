import { createStore } from "vuex";

export const store = createStore({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: (state) => {
            return state.counter * 2;
        },
        stringCounter: (state) => {
            return state.counter + " Clicks";
        },
        value: state => {
            return state.value
        }
    },
    mutations: {
        increment(state, payload) {
            state.counter += payload || 1;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload
        }
    },
    actions: {
        // No Conflicts in name because this is another object
        increment(context, payload) {
            context.commit("increment", payload);
        },
        // Another Syntax using object destructuring
        decrement: ({ commit }, payload) => {
            commit("decrement", payload);
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit("increment", payload.amount);
            }, payload.duration);
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit("decrement", payload.amount);
            }, payload.duration);
        },
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        }
    },
});
