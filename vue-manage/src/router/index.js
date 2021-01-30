import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: 'index' */ '../pages/index'),
      children: [
        {
          path: '/homePage1',
          name: 'homePage',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/homePage/index')
        },
        {
          path: '/homePage2',
          name: 'homePage',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/homePage/index')
        },
        {
          path: '/pushContent/:id',
          name: 'pushContent',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/pushContent/index')
        },
        {
          path: '/addDoc',
          name: 'addDoc',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/pushContent/addDoc')
        },
        {
          path: '/editDoc/:id',
          name: 'editDoc',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/pushContent/editDoc')
        }
      ]
    }
  ]
})
