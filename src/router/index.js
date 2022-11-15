import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import FinalView from '../views/FinalView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: 'mainView',
    component: MainView
  },
  {
    path: '/final',
    name: 'finalView',
    component: FinalView
  }
]

const router = new VueRouter({
  routes
})

export default router
