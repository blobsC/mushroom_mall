/*
 * @author: 陈大帅
 * @Date: 2021-07-13 14:36:40
 * @LastEditTime: 2021-07-30 16:08:20
 * @FilePath: \supermall\mushroom_mall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=> import('../views/home/home.vue')
const cart = () => import('../views/cart/cart.vue')
const category = () => import('../views/category/category.vue')
const profile = () => import('../views/profile/profile.vue')
const detail = () => import('../views/detail/deTail.vue')



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: home
  },
  {
    path:'/cart',
    component: cart
  },
  {
    path:'/category',
    component: category
  },
  {
    path:'/profile',
    component: profile
  },
  {
    path: '/detail/:id',
    component: detail
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
