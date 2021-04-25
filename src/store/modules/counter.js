const state = {
    counter: 0,
}

const getters = {
    doubleCounter: (state) => {
        return state.counter * 2;
    },
    stringCounter: (state) => {
        return state.counter + " Clicks";
    },
}

const mutations = {
    increment(state, payload) {
        state.counter += payload || 1;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
}

const actions = {
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
}

export default {
    state,
    getters,
    mutations,
    actions
}
