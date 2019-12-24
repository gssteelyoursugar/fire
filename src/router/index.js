import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: '/index', meta: {title: '首页'}},
    {
      path: '/index',
      name: 'Index',
      component: () => import('../pages/index/Index'),
      meta: {
        title: '首页',
        keepAlive: false,
        requireAuth: false,
      },
    },
    {
      path: '/about',
      name: 'AboutIndex',
      component: () => import('../pages/about/Index'),
      meta: {
        title: '关于我们',
        keepAlive: false,
        requireAuth: false,
      },

    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('../components/Add'),
      meta: {
        title: '发布需求',
        keepAlive: false,
        requireAuth: true,
      },

    },
    {
      path: '/home',
      name: 'HomeIndex',
      component: () => import('../pages/home/Index'),
      meta: {
        title: '登录/注册',
        keepAlive: false,
        requireAuth: true,
      },

    },
    {
      path: '/login',
      name: 'LoginIndex',
      component: () => import('../pages/login/Index'),
      meta: {
        title: '登录/注册',
        keepAlive: false,
        requireAuth: false,
      },

    }
  ],
  //  避免keep-alive造成进入不同新页面时
  //  初始位置不在顶部的bug
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
});
//  动态渲染页面title
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  let _this = this
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (localStorage.getItem("token")) {  // 通过localStorge 获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.path}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});


export default router
