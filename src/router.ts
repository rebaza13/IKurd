import { createMemoryHistory, createRouter } from 'vue-router'
import Logged from './components/Logged.vue'
import notLogged from './components/notLogged.vue'

import Home from './Home.vue'
const routes = [
  { path: '/',component:Home},
  { path: '/key-verfied', component: Logged },
  { path: '/faild-key', component: notLogged },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})