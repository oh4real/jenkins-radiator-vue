import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RadiatorView from '@/components/RadiatorView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/radiator/:view',
      name: 'RadiatorView',
      component: RadiatorView
    }

  ]
})
