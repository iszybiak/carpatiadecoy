import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import GuideView from '../views/GuideView.vue'

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
    
  },
  {
    path: '/guide',
    name: 'guide',
    component: GuideView
    
  }
]

const router = new VueRouter({
  routes
})

export default router
