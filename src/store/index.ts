import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';

export const key: InjectionKey<Store<{count: number}>> = Symbol('store');

// Create a new store instance.
export const store = createStore<{count: number}>({
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

export function useStore(): Store<{count: number}> {
  return baseUseStore(key);
}
