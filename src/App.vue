<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
const imageUrl = new URL('./assets/steve01.jpg', import.meta.url).href

</script>

<template>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
