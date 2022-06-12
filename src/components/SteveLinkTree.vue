<script setup>
import { ref } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone);

const imageUrl = new URL('../assets/steve01.jpg', import.meta.url).href

defineProps({
  msg: String
})

const count = ref(0)

const TreeDataList = [
  {'name':'Instagram','url':'https://www.instagram.com/chenhan20/',icon:['fab', 'instagram']},
  {'name':'Facebook','url':'https://www.facebook.com/profile.php?id=100000189117019',icon:['fab', 'facebook']},
  {'name':'Youtube','url':'https://www.youtube.com/user/chenhan20',icon:['fab', 'youtube']},
  {'name':'Resume','url':'https://calm-woodland-74729.herokuapp.com/SteveCard',icon:['fas', 'address-card']},
  {'name':'Linkedin','url':'https://www.linkedin.com/in/%E6%89%BF%E7%BF%B0-%E8%8E%8A-4159b7139/',icon:['fab', 'linkedin']},
  {'name':'Github','url':'https://github.com/chenhan20',icon:['fab', 'github']},
  {'name':'SteveBot','url':'https://t.me/stevechuang_bot',icon:['fab', 'telegram']},
]

</script>

<template>
  <p class='font-mono text-2xl font-black'>{{ msg }}</p>
    <div class="flex-col space-y-4">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-6">
            <div class="shrink-0">
                <img class="h-20 w-20 rounded-full" :src="imageUrl" alt="ChitChat Logo">
            </div>
            <div class="text-center space-y-2 sm:text-left">
                <div class="text-xl font-medium text-black">Steve Chuang</div>
                <p class="text-slate-500">Backend Enginner</p>
                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
            </div>
        </div>
        <div v-for="item in TreeDataList" class="p-5 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-6 cursor-pointer hover:shadow-lg hover:border-transparent">
            <div class="shrink-0">
              <div class="">
                  <font-awesome-icon :icon="item.icon" size="2xl" />
              </div>
                <!-- <img class="h-20 w-20 rounded-full" :src="imageUrl" alt="ChitChat Logo"> -->
            </div>
            <div>
                <div class="text-xl font-medium text-black"> {{ item.name }}</div>
            </div>
        </div>
    </div>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
