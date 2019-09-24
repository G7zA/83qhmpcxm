import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
import Login from './views/login'// 简写
import Main from './views/home/main'

Vue.use(Router)

export default new Router({
  routes: [
    // 一级路由
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: '', // 什么都不写就默认是二级路由
        component: Main // 默认二级路由（组件）
      }]
    },
    {
      path: '/login',
      component: Login
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')// 按需加载
    // }
  ]
})
