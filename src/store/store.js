import { createStore } from "vuex";
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import counter from './modules/counter'

export const store = createStore({
    state: {
        value: 0
    },
    getters,
    mutations: {
        ...mutations
    },
    // different syntax import * as etc will create an object already
    actions,
    modules: {
        counter
    }
});
