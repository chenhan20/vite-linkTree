// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from "vue";
import { computed } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('ClickCount')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function decrease() {
    count.value--
  }

  return { count, name, doubleCount, increment, decrease }
})