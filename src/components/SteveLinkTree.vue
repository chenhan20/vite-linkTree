<script setup>
import { ref } from 'vue'

const imageUrl = new URL('../assets/steve01.jpg', import.meta.url).href

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <p class='font-mono text-2xl font-black'>{{ msg }}</p>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-6">
        <div class="shrink-0">
            <img class="h-20 w-20" :src="imageUrl" alt="ChitChat Logo">
        </div>
        <div>
            <div class="text-xl font-medium text-black">Steve Chuang</div>
            <p class="text-slate-500">Backend Enginner</p>
        </div>
    </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
