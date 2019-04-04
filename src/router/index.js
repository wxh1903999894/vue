import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Index from '@/page/Index'
import User from '@/page/user/user'
import Iframe from '@/page/Iframe/Iframe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        { path: "", component: Index },
        { path: "/Iframe/:path", component: Iframe },
        { path: "/user", component: User }
      ]
    }
  ]
})