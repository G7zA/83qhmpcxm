import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import Component from './components/index'
import axios from './utils/axios.config'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less' // 引入插件对象
// import quillEditor from 'vue-quill-editor' // 引入富文本编辑器
Vue.prototype.$axios = axios // 第一种方式 将axios共享给所有的Vue或者组件实例使用
Vue.config.productionTip = false
Vue.use(ElementUI) // 相当于全局注册elementUI
Vue.use(Component) // 注册组件
// Vue.use(axios) // 全局注册axios第二种方式
// Vue.use(quillEditor) // 注册组件

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
