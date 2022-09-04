import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '/src/components/HelloWorld.vue'
import SteveLinkTree from '/src/components/SteveLinkTree.vue'
import PiniaPage from '/src/components/PiniaPage.vue'
import StockPage from '/src/components/StockPage.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/steveLinkTree',
    name: 'SteveLinkTree',
    component: SteveLinkTree
  },
  {
    path: '/piniaPage',
    name: 'piniaPage',
    component: PiniaPage
  },
  {
    path: '/StockPage',
    name: 'StockPage',
    component: StockPage
  }
]

export default createRouter({ history, routes })