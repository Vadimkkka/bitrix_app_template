import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import i18n from './i18n'


Vue.config.productionTip = false
Vue.use(Antd)


// @ts-ignore
// BX24.init( () => {
new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
// })
