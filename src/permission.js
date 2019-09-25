// 权限
import router from './router'
// 全局前置守卫
router.beforeEach((to, from, next) => {
//   首先判断拦截范围 （home以及他下的二级路由拦截）
// to去到的就是路由对象 他当中有path属性
  if (to.path.startsWith('/home')) {
    //   进入了拦截范围
    // 判断是否登录 有token 就登录 没token就没登录
    let token = window.localStorage.getItem('user-token') // 获取token
    if (token) {
      // 如果有token放行
      next()
    } else {
      // 没token跳转到登录页面
      next('/login')
    }
    next()
  } else {
    next() // 放行
  }
})
// 先导出
export default router
