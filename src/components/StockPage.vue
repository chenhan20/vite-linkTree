<script setup>
import data from "../data/stockData";
const fields = data["fields"];
const stockData = data["data"];
</script>

<template>
  <h1 class="text-xl font-mono"></h1>
  <div class="bg-cover bg-center bg-gray-700" style="">
    <div class="flex justify-center">
      <table class="table-auto">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="py-3 px-6" v-for="field in fields">
              {{ field }}
            </th>
          </tr>
        </thead>
        <tbody> 
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="stock in stockData"
          >
            <td
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              v-for="data in stock"
            >
              {{ data }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #42b983;
}
a {
  color: #42b983;
}
</style>
