<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1> Steve Home Page</h1>
  <router-link to="/steveLinkTree">Go to SteveLinkTree</router-link>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
