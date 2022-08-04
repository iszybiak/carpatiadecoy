import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
    
  }
]

const router = new VueRouter({
  routes
})

export default router
