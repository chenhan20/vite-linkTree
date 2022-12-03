<script setup>
import { ref } from "vue";
import router from "../router/index";

defineProps({
  msg: String,
});

const count = ref(0);
const imageUrl = new URL("../assets/steve01.jpg", import.meta.url).href;
</script>

<template>
  <div class="bg-cover bg-center">
    <h1>Steve Home Page</h1>
    <div v-for="router in router.getRoutes()">
      <router-link :to="router.path">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {{ router.name }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
