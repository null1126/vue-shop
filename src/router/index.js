/**
 * 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)
//导出
export default new VueRouter({
  //所有路由
  routes: [{
      path: '/msite',
      component: MSite,
      //定义是否显示底部导航的标识 true表示当前路由显示
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'  //默认跳转的页面
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
