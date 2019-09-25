import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import Component from './components/index' // 引入插件对象
// import quillEditor from 'vue-quill-editor' // 引入富文本编辑器
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 将地址的常态值设置给baseUrl
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI) // 相当于全局注册elementUI
Vue.use(Component) // 注册组件
// Vue.use(quillEditor) // 注册组件

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
