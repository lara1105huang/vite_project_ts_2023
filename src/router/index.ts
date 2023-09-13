import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/index.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart.vue'),
  },
  {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/errorPage/404.vue'),
    meta: {
      title: '404'
    },
   
  }
]
// RouterOptions是路由選項類型
const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}
// Router是路由對象類型
const router: Router = createRouter(options);

//路由守衛
//router.beforeEach((to, from, next) => {
//     const teacherId: any = localStorage.teacherId;
//     const talkId: any = localStorage.talkId;
//  const  isLogin: Boolean =localStorage.token? true : false; 
//     if(to.path === "/admin" || to.path === "/login"|| to.path === "/index" || to.path==="/teachers" || to.path === "/user_login" || to.path === "/register" || to.path===`/teacher/${teacherId}` || to.path==='/onetoone' || to.path===`/talk/${talkId}`){
//         next()
//     } else {
//      isLogin  ? next() : next("/index") ;
     
//     }
//})
//輸出router
export default router
