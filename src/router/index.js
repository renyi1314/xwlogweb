import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import DatePicker from '@/components/DatePicker'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/date',
      name: 'DatePicker',
      component: DatePicker
    },

  ]
})
