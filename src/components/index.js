// 实现整体组件的统一注册
import leftDh from '../components/left/left-dh'
import rightHeader from '../components/header/right-header'
export default {
  // 调用install对象 传入Vue
//   在实例之前注册全局组件
  install (Vue) {
    Vue.component('left-dh', leftDh) // 全局注册导航组件
    Vue.component('right-header', rightHeader) // 全局注册头部组件
  }
}
