import Vue from 'vue'
import Router from 'vue-router'
import JenkinsMenu from '@/components/JenkinsMenu'
import Radiator from '@/components/Radiator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: JenkinsMenu
    },
    {
      path: '/radiator/:view',
      name: 'Radiator',
      component: Radiator
    }

  ]
})
