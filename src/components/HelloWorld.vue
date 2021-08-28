<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Docs
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>
  <div class="flex justify-around">
    <ion-button
      @click="increaseCount"
    >
      count is: {{ count }}
    </ion-button>

    <ion-button
      @click="increaseCount2"
    >
      count2 is: {{ count2 }}
    </ion-button>
  </div>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div class="text-center mt-8">
    <i-feather-gift class="w-16 h-16" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from '@/store';

withDefaults(defineProps<{ msg?: string }>(), { msg: 'Hello World!' });

const store = useStore();

const count = computed(() => store.state.count);
const increaseCount = () => store.commit('increment');

const count2 = ref(0);
const increaseCount2 = () => { count2.value += 1; };
</script>
