import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore<{count: number}>({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

export default store;
