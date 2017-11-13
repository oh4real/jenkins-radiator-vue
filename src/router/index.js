import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Radiator from '@/components/Radiator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/radiator/:view',
      name: 'Radiator',
      component: Radiator
    }

  ]
})
