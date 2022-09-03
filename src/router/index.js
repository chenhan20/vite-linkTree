import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '/src/components/HelloWorld.vue'
import SteveLinkTree from '/src/components/SteveLinkTree.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/steveLinkTree',
    name: 'SteveLinkTree',
    component: SteveLinkTree
  }
]

export default createRouter({ history, routes })