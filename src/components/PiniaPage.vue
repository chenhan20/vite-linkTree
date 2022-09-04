<script setup>
    import { useCounterStore } from '../stores/counter'
    const counter = useCounterStore()
</script>

<template>
    <h1 class="text-xl	font-mono "> Steve Pinia Page</h1>
    <div class="inline-flex">
        <button @click="counter.increment" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            increment
        </button>
        <button @click="counter.decrease" class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
            decrease
        </button>
    </div>

    <h1>{{counter.name}} {{counter.count}} double: {{counter.doubleCount}}</h1>
    <router-link to="/">Go to Home</router-link>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
    