import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Radiator from '@/components/Radiator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/radiator/:view',
      name: 'Radiator',
      component: Radiator
    }

  ]
})
